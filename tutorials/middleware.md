## Overview

There are 4 types of middleware in Actionhero:

- **Action**
- **Connection**
- **Chat**
- **Task**

Each type of middleware is distinct from the others, and operates on distinct parts of a client's lifecycle. For a logical example, please inspect the following connection lifecycle:

```bash
> Client **Connects**
# connection middleware, \`create\` hook

> Client requests an **action**
# action middleware, \`preProcessor\` hook
# action middleware, \`postProcessor\` hook

> Client **joins a room**
# chat middleware, \`join\` hook

> Client **says a message** in a room
# chat middleware, \`say\` hook
# chat middleware, \`onSayReceive\` hook

> Client requests a **disconnect** (quit)
# chat middleware, \`leave\` hook
# connection middleware, \`destroy\` hook

> Client executes a **task**
# task middleware, \`preProcessor\` hook
# task middleware, \`postProcessor\` hook
```

## Action Middleware

![/static/images/tutorials/connection_flow_actions.png](/static/images/tutorials/connection_flow_actions.png)

```ts
import { action } from "actionhero";

const middleware = {
  name: "userId checker",
  global: false,
  priority: 1000,
  preProcessor: data => {
    if (!data.params.userId) {
      throw new Error("All actions require a userId");
    }
  },
  postProcessor: data => {
    if (data.thing.stuff == false) {
      data.toRender = false;
    }
  }
};

action.addMiddleware(middleware);
```

actionhero provides hooks for you to execute custom code both before and after the execution of all or some actions. This is a great place to write authentication logic or custom loggers.

Action middleware requires a `name` and at least one of `preProcessor` or `postProcessor`. Middleware can be `global`, or you can choose to apply each middleware to an action specifically via `action.middleware = []` in the action's definition. You supply a list of middleware names, like `action.middleware = ['userId checker']` in the example above.

Each processor is passed `data`. Just like within actions, you can modify the `data` object to add to `data.response` to create a response to the client. If an error is thrown, the action will not execute, and `data.response.error` will contain the error. If a `preProcessor` has an error, the action will never be called.

The priority of a middleware orders it with all other middleware which might fire for an action. All global middleware happen before locally defined middleware on an action. Lower numbers happen first. If you do not provide a priority, the default from `api.config.general.defaultProcessorPriority` will be used.

### The Data Object

`data` contains the same information as would be passed to an action:

```ts
data = {
  connection: {},
  action: "randomNumber",
  toRender: true,
  messageId: 1,
  params: { action: "randomNumber", apiVersion: 1 },
  actionStartTime: 1429531553417,
  actionTemplate: {}, // the actual object action definition
  response: {},
  session: {}
};
```

If your middleware wants to pass information about the connection to the action, place that data withinin the `session` object. For example, you might have a middleware that sets `session.user` for use in your actions:

```ts
import { action } from "actionhero";
import { Team, TeamMember } from "./../models"; // defined in your project

const authenticatedUserMiddleware = {
  name: "authenticated-team-member",
  global: false,
  priority: 1000,
  preProcessor: async data => {
    const sessionData = await api.session.load(data.connection);
    if (!sessionData) {
      throw new Error("Please log in to continue");
    } else if (
      !data.params.csrfToken ||
      data.params.csrfToken !== sessionData.csrfToken
    ) {
      throw new Error("CSRF error");
    } else {
      const teamMember = await TeamMember.findOne({
        where: { guid: sessionData.guid },
        include: Team
      });
      data.session = { data: sessionData, teamMember };
    }
  }
};

action.addMiddleware(authenticatedUserMiddleware);
```

## Connection Middleware

```ts
import { log, connection } from "actionhero";

const connectionMiddleware = {
  name: "connection middleware",
  priority: 1000,
  create: async connection => {
    log("connection joined");
  },
  destroy: async connection => {
    log("connection left");
  }
};

connection.addMiddleware(connectionMiddleware);
```

Like the action middleware above, you can also create middleware to react to the creation or destruction of all connections.

Keep in mind that some connections persist (webSocket, socket) and some only exist for the duration of a single request (web). You will likely want to inspect `connection.type` in this middleware. Again, if you do not provide a priority, the default from `api.config.general.defaultMiddlewarePriority` will be used.

Any modification made to the connection at this stage may happen either before or after an action, and may or may not persist to the connection depending on how the server is implemented.

## Chat Middleware

```ts
import { log, chatRoom, connection } from "actionhero";

var chatMiddleware = {
  name: "chat middleware",
  priority: 1000,
  join: (connection, room) => {
    // announce all connections entering a room
    await chatRoom.broadcast(
      {},
      room,
      "I have joined the room: " + connection.id
    );
  },
  leave: (connection, room) => {
    // announce all connections leaving a room
    await chatRoom.broadcast(
      {},
      room,
      "I have left the room: " + connection.id
    );
  },
  /**
   * Will be executed once per client connection before delivering the message.
   */
  say: (connection, room, messagePayload) => {
    // do stuff
    log(messagePayload);
    messagePayload.cool = true;
    return messagePayload;
  },
  /**
   * Will be executed only once, when the message is sent to the server.
   */
  onSayReceive: function(connection, room, messagePayload) {
    // do stuff
    log(messagePayload);
    messagePayload.recievedAt = new Date().getTime();
    return messagePayload;
  }
};

chatRoom.addMiddleware(chatMiddleware);
```

The last type of middleware is used to act when a connection joins, leaves, or communicates within a chat room. We have 4 types of middleware for each step: `say`, `onSayReceive`, `join`, and `leave`.

Priority is optional in all cases, but can be used to order your middleware. If an error is returned thrown any of these methods, it will be returned to the client, and the action/verb/message will not be sent.

More detail and nuance on chat middleware can be found in the [chat tutorial](tutorial-chat.html)

### Chat Middleware Notes

- In the example above, I want to announce the member joining the room, but he has not yet been added to the room, as the join logic is still firing. If the connection itself were to make the broadcast, it would fail because the connection is not in the room. Instead, an empty `{}` connection is used to proxy the message coming from the 'server'.
- Only the `sayCallbacks` return `messagePayload`. This allows you to modify the message being sent to your clients.
  - `messagePayload` will be modified and and passed on to all middlewares inline, so you can append and modify it as you go
- If you have a number of callbacks (`say`, `onSayReceive`, `join` or `leave`), the priority maters, and you can block subsequent methods from firing by throwing an error.
- `sayCallbacks` are executed once per client connection. This makes it suitable for customizing the message based on the individual client.
- `onSayReceiveCallbacks` are executed only once, when the message is sent to the server.

```ts
import {chatRoom, connection} from 'actionhero';

// in this example no one will be able to join any room, and the \`say\` middleware will never be invoked.
chatRoom.addMiddleware({
  name: 'blocking chat middleware',
  join: (connection, room) => {
    throw new Error('blocked from joining the room')
  }),

  say: (connection, room, messagePayload) => {
    chatRoom.broadcast({}, room, 'I have entered the room: ' + connection.id)
  },
});
```

If a `say` is blocked via an error thrown, the message will simply not be delivered to the client. If a `join` or `leave` is blocked, the verb or method used to invoke the call will be returned that error.

## Task Request Flow

![/static/images/tutorials/connection_flow_tasks.png](/static/images/tutorials/connection_flow_tasks.png)

## Task Middleware

Task middleware is implemented as a thin wrapper around Node Resque plugins and currently exposes the `beforePerform`, `afterPerform`, `beforeEnqueue`, and `afterEnqueue` functions of Resque. Each middleware requires a `name` and at least one `function`. In addition, a middleware can be global, in which case it also requires a `priority`.

In the `preProcessor`, you can access the original task `params` through `this.args[0]`. In the `postProcessor`, you can access the task result at `this.worker.result`. In the `preEnqueue` and `postEnqueue` you can access the task `params` through `this.args[0]`. If you wish to prevent a task from being enqueued using the `preEnqueue` middleware you must explicitly set the `toRun` value to `false` in the callback. Because the task middleware is executed by Resque `this` is an instance of a Resque Worker and contains a number of other elements which may be useful in a middleware.

### Task Middleware Example

The following example is a simplistic implementation of a task execution timer middleware.

```ts
import {task, log, Initializer} from 'actionhero';

export class taskMiddleware extends Initializer {
  constructor () {
    super()
    this.name = 'task middleware'
  }

  initialize: () => {
    const middleware = {
      name: 'timer',
      global: true,
      priority: 90,

      preProcessor: async function () {
        const worker = this.worker
        worker.startTime = process.hrtime()
      },

      postProcessor: async function () {
        const worker = this.worker
        const elapsed = process.hrtime(worker.startTime)
        const seconds = elapsed[0]
        const millis = elapsed[1] / 1000000
        log(worker.job.class + ' done in ' + seconds + ' s and ' + millis + ' ms.', 'info')
      },

      preEnqueue: async function () {
        const arg = this.args[0]
        return true // returing `false` will prevent the task from enqueing
      },

      postEnqueue: async function () {
        api.log("Task successfully enqueued!")
      }
    }

    task.addMiddleware(middleware)
  }
}
```
