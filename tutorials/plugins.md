## Overview

You can create and include plugins for you Actionhero project. Plugins are collections of `tasks`, `actions`, `servers`, `initializers`, and `public` static assets that are collected as a module. You can install plugins via NPM or keep them in a local path. This enables a few useful features:

- Sharing and re-using common code
- Composing your application via namespaced plugins for simpler SOA development.

Plugins are loaded after all local Actionhero project files, but initializers follow the same priority scheme as all other initializers.

## Creating

```bash
/
| - actions
| - tasks
| - servers
| - initializers
| - config
| - public
| - cli
|
| - package.json
```

To create a plugin, create a project with the above structure via `actionhero generate plugin`. Note that `actionhero` should be a `peerDependnacy` within your plugin, with the proper version.

This structure will allow elements to be loaded into Actionhero (we search `/actions` for actions, `/tasks` for tasks, etc)

When developing your plugin locally, you can load it into an existing Actionhero project to test it out.

To include your plugin in an Actionhero project, add it to `config/plugins.js`

```js
// If you want to use plugins in your application, include them here:
return {
  myPlugin: { path: __dirname + "/../node_modules/myPlugin" }
};

// You can also toggle on or off sections of a plugin to include (default true for all sections):
return {
  myPlugin: {
    path: __dirname + "/../node_modules/myPlugin",
    actions: true,
    tasks: true,
    initializers: true,
    servers: true,
    cli: true,
    public: true
  }
};
```

**Please use the npm naming convention `ah-(name)-plugin` when uploading your plugin to npm**

## Testing

This new plugin structure also makes testing plugins much easier, as you can boot up an Actionhero server from within your plugin (if `actionhero` is a devDependancy) with the following:

```js
const path = require("path");
process.env.PROJECT_ROOT = path.join(
  __dirname,
  "..",
  "node_modules",
  "actionhero"
);

const actionhero = require("actionhero");
const Actionhero = new actionhero.Process();
let api;

describe("My Plugin", () => {
  before(async () => {
    let configChanges = {
      plugins: {
        testPlugin: { path: path.join(__dirname, "..") }
      }
    };

    api = await Actionhero.start({ configChanges });
  });

  after(async () => {
    await Actionhero.stop();
  });

  it("does stuff", async () => {
    //...
  });
});
```

## Methods

When creating plugins, you may find yourself wanting to do things which could normally be accomplished easily with a "top level" Actionhero project, but might be difficult from within a plugin. Here are some helpers:

### Routes:

- `api.routes.registerRoute(method, path, action, apiVersion, matchTrailingPathParts)`
  - Add a route to the system.

## Published

You can view a list of plugins maintained by at [www.actionherojs.com/plugins](https://www.actionherojs.com/plugins)
