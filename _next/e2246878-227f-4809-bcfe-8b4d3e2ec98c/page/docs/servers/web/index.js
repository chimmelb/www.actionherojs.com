
          window.__NEXT_REGISTER_PAGE('/docs/servers/web', function() {
            var comp = module.exports=webpackJsonp([11],{1246:function(e,t,n){e.exports=n(1247)},1247:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(9),o=l(a),i=n(1),r=l(i),c=n(8),s=l(c),u=n(2),d=l(u),f=n(3),m=l(f),p=n(0),h=l(p),E=n(16),b=l(E),w=n(11),g=n(14),y=l(g),v=n(18),T=l(v),k=function(e){function t(e){(0,r.default)(this,t);var n=(0,d.default)(this,(t.__proto__||(0,o.default)(t)).call(this,e));return n.state={titleSection:{title:"Servers: Web",icon:"/static/images/routing.svg"},sections:{overview:"Overview","http-example":"HTTP Example","config-options":"Config Options","the-connection-object":"The Connection Object","sending-files":"Sending Files",routes:"Routes",hosts:"Hosts",params:"Params","uploading-files":"Uploading Files","client-library":"Client Library"},links:[{link:"/docs/servers/websocket",title:"» Servers: WebSocket"}]},n}return(0,m.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){return h.default.createElement(y.default,{sideNav:this.state.sections,titleSection:this.state.titleSection,links:this.state.links,currentSection:this.state.currentSection},h.default.createElement(w.Row,null,h.default.createElement(w.Col,{md:12},this.section("overview",h.default.createElement("div",null,h.default.createElement(T.default,null,'{\n  hello: "world",\n  serverInformation: {\n    serverName: "actionhero API",\n    apiVersion: 1,\n    requestDuration: 14\n  },\n  requestorInformation: {\n    remoteAddress: "127.0.0.1",\n    RequestsRemaining: 989,\n    recievedParams: {\n      action: ""\n    }\n  }\n}'),h.default.createElement("p",null,"The web server exposes actions and files over http or https.  You can visit the API in a browser, Curl, etc. ",h.default.createElement("code",null,"{url}?action=actionName")," or ",h.default.createElement("code",null,"{url}/api/{actionName}")," is how you would access an action.  For example, using the default ports in ",h.default.createElement("code",null,"/config/servers/web.js")," you could reach the status action with both ",h.default.createElement("code",null,"http://127.0.0.1:8080/status")," or ",h.default.createElement("code",null,"http://127.0.0.1:8080/?action=status")),h.default.createElement("p",null,"HTTP responses are always JSON and follow the format above."))),this.section("http-example",h.default.createElement("div",null,h.default.createElement(T.default,{language:"bash"},'> curl \'localhost:8080/api/status\' -v | python -mjson.tool\n* About to connect() to localhost port 8080 (#0)\n*   Trying 127.0.0.1...\n* connected\n* Connected to localhost (127.0.0.1) port 8080 (#0)\n> GET /api/status HTTP/1.1\n> User-Agent: curl/7.24.0 (x86_64-apple-darwin12.0) libcurl/7.24.0 OpenSSL/0.9.8r zlib/1.2.5\n> Host: localhost:8080\n> Accept: */*\n>\n< HTTP/1.1 200 OK\n< Content-Type: application/json\n< X-Powered-By: actionhero API\n< Date: Sun, 29 Jul 2012 23:25:53 GMT\n< Connection: keep-alive\n< Transfer-Encoding: chunked\n<\n{ [data not shown]\n100   741    0   741    0     0   177k      0 --:--:-- --:--:-- --:--:--  361k\n* Connection #0 to host localhost left intact\n* Closing connection #0\n{\n    "requestorInformation": {\n        "recievedParams": {\n            "action": "status",\n        },\n        "remoteAddress": "127.0.0.1"\n    },\n    "serverInformation": {\n        "apiVersion": "3.0.0",\n        "currentTime": 1343604353551,\n        "requestDuration": 1,\n        "serverName": "actionhero API"\n    },\n    "stats": {\n        "cache": {\n            "numberOfObjects": 0\n        },\n        "id": "10.0.1.12:8080:4443:5000",\n        "memoryConsumption": 8421200,\n        "peers": [\n            "10.0.1.12:8080:4443:5000"\n        ],\n        "queue": {\n            "queueLength": 0,\n            "sleepingTasks": []\n        },\n        "socketServer": {\n            "numberOfGlobalSocketRequests": 0,\n            "numberOfLocalActiveSocketClients": 0,\n            "numberOfLocalSocketRequests": 0\n        },\n        "uptimeSeconds": 34.163,\n        "webServer": {\n            "numberOfGlobalWebRequests": 5,\n            "numberOfLocalWebRequests": 3\n        },\n        "webSocketServer": {\n            "numberOfGlobalWebSocketRequests": 0,\n            "numberOfLocalActiveWebSocketClients": 0\n        }\n    }\n}'),h.default.createElement("ul",null,h.default.createElement("li",null,"You can provide the ",h.default.createElement("code",null,"?callback=myFunc")," param to initiate a JSONp response which will wrap the returned JSON in your callback ","function",".  The mime type of the response will change from JSON to Javascript."),h.default.createElement("li",null,"If everything went OK with your request, no error attribute will be set on the response, otherwise, you should see either a string or hash error response within your action"),h.default.createElement("li",null,'To build the response for "hello" above, the action would have set ',h.default.createElement("code",null,"connection.response.hello = 'world'"))))),this.section("config-options",h.default.createElement("div",null,h.default.createElement("p",null,h.default.createElement("code",null,"/config/servers/web.js")," contains the settings for the web server.  The relevant options are:"),h.default.createElement(T.default,null,"exports['default'] = {\n  servers: {\n    web: function (api) {\n      return {\n        enabled: true,\n        // HTTP or HTTPS?\n        secure: false,\n        // Passed to https.createServer if secure=true. Should contain SSL certificates\n        serverOptions: {},\n        // Should we redirect all traffic to the first host in this array if hte request header doesn't match?\n        // i.e.: [ 'https://www.site.com' ]\n        allowedRequestHosts: process.env.ALLOWED_HOSTS ? process.env.ALLOWED_HOSTS.split(',') : [],\n        // Port or Socket Path\n        port: process.env.PORT || 8080,\n        // Which IP to listen on (use '0.0.0.0' for all; '::' for all on ipv4 and ipv6)\n        // Set to `null` when listening to socket\n        bindIP: '0.0.0.0',\n        // Any additional headers you want actionhero to respond with\n        httpHeaders: {\n          'X-Powered-By': api.config.general.serverName,\n          'Access-Control-Allow-Origin': '*',\n          'Access-Control-Allow-Methods': 'HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS, TRACE',\n          'Access-Control-Allow-Headers': 'Content-Type'\n        },\n        // Route that actions will be served from; secondary route against this route will be treated as actions,\n        //  IE: /api/?action=test == /api/test/\n        urlPathForActions: 'api',\n        // Route that static files will be served from;\n        //  path (relative to your project root) to serve static content from\n        //  set to `null` to disable the file server entirely\n        urlPathForFiles: 'public',\n        // When visiting the root URL, should visitors see 'api' or 'file'?\n        //  Visitors can always visit /api and /public as normal\n        rootEndpointType: 'file',\n        // simple routing also adds an 'all' route which matches /api/:action for all actions\n        simpleRouting: true,\n        // queryRouting allows an action to be defined via a URL param, ie: /api?action=:action\n        queryRouting: true,\n        // The cache or (if etags are enabled) next-revalidation time to be returned for all flat files served from /public; defined in seconds\n        flatFileCacheDuration: 60,\n        // Add an etag header to requested flat files which acts as fingerprint that changes when the file is updated;\n        // Client will revalidate the fingerprint at latest after flatFileCacheDuration and reload it if the etag (and therfore the file) changed\n        // or continue to use the cached file if it's still valid\n        enableEtag: true,\n        // How many times should we try to boot the server?\n        // This might happen if the port is in use by another process or the socketfile is claimed\n        bootAttempts: 1,\n        // Settings for determining the id of an http(s) request (browser-fingerprint)\n        fingerprintOptions: {\n          cookieKey: 'sessionID',\n          toSetCookie: true,\n          onlyStaticElements: false,\n          settings: {\n            path: '/',\n            expires: 3600000\n          }\n        },\n        // Options to be applied to incoming file uploads.\n        //  More options and details at https://github.com/felixge/node-formidable\n        formOptions: {\n          uploadDir: os.tmpdir(),\n          keepExtensions: false,\n          maxFieldsSize: 1024 * 1024 * 100\n        },\n        // Should we pad JSON responses with whitespace to make them more human-readable?\n        // set to null to disable\n        padding: 2,\n        // Options to configure metadata in responses\n        metadataOptions: {\n          serverInformation: true,\n          requesterInformation: true\n        },\n        // When true, returnErrorCodes will modify the response header for http(s) clients if connection.error is not null.\n        // You can also set connection.rawConnection.responseHttpCode to specify a code per request.\n        returnErrorCodes: true,\n        // should this node server attempt to gzip responses if the client can accept them?\n        // this will slow down the performance of actionhero, and if you need this funcionality, it is recommended that you do this upstream with nginx or your load balancer\n        compress: false,\n        // options to pass to the query parser\n        // learn more about the options @ https://github.com/hapijs/qs\n        queryParseOptions: {}\n      }\n    }\n  }\n}"),h.default.createElement("p",null,"Note that if you wish to create a secure (https) server, you will be required to complete the serverOptions hash with at least a cert and a keyfile:"),h.default.createElement(T.default,null,"config.server.web.serverOptions: {\n  key: fs.readFileSync('certs/server-key.pem'),\n  cert: fs.readFileSync('certs/server-cert.pem')\n}"))),this.section("the-connection-object",h.default.createElement("div",null,h.default.createElement(T.default,null,"{ id: '3e55b464fd34708eba26f609f44481a120e094a8-a6dfb60b-9562-4cc0-9d92-bc6cc1b622ba',\n  connectedAt: 1447554153233,\n  type: 'web',\n  rawConnection:\n   {\n     req: {},\n     res: {},\n     params: { query: {} },\n     method: 'GET',\n     cookies: {},\n     responseHeaders: [ [Object], [Object], [Object], [Object], [Object], [Object] ],\n     responseHttpCode: 200,\n     parsedURL:\n      Url {},\n  remotePort: 57259,\n  remoteIP: '127.0.0.1',\n  error: null,\n  fingerprint: '3e55b464fd34708eba26f609f44481a120e094a8',\n  rooms: [],\n  params: { action: 'randomNumber', apiVersion: 1 },\n  pendingActions: 1,\n  totalActions: 1,\n  messageCount: 0,\n  canChat: false,\n  sendMessage: [Function],\n  sendFile: [Function]\n}"),h.default.createElement("p",null,"when inspecting ",h.default.createElement("code",null,"connection")," in actions from web client, a few additional elements are added for convenience:"),h.default.createElement("ul",null,h.default.createElement("li",null,h.default.createElement("code",null,"connection.rawConnection.responseHeaders"),": array of headers which can be built up in the action.  Headers will be made unique, and latest header will be used (except setting cookies)"),h.default.createElement("li",null,h.default.createElement("code",null,"connection.rawConnection.method"),": A string, GET, POST, etc"),h.default.createElement("li",null,h.default.createElement("code",null,"connection.rawConnection.cookies"),": Hash representation of the connection's cookies"),h.default.createElement("li",null,h.default.createElement("code",null,"connection.rawConnection.responseHttpCode"),": the status code to be rendered to the user.  Defaults to 200"),h.default.createElement("li",null,h.default.createElement("code",null,"connection.type"),' for a HTTP client is "web"'),h.default.createElement("li",null,h.default.createElement("code",null,"connection.rawConnection.params.body")," will contain un-filtered form data"),h.default.createElement("li",null,h.default.createElement("code",null,"connection.rawConnection.params.files")," will contain un-filtered form data"),h.default.createElement("li",null,h.default.createElement("code",null,"connection.extension"),".  If are using a route to access an action, and the request path ends in a file extension (IE: ",h.default.createElement("code",null,"server.com/action/option.jpg"),"), the extension will be available.  Depending on the server's options, this extension may also be used to modify the response mime-type by configuring ",h.default.createElement("code",null,"matchExtensionMimeType")," within each action.")),h.default.createElement("p",null,"Of course, the generic connection attributes (",h.default.createElement("code",null,"connection.error"),", ",h.default.createElement("code",null,"connection.params"),", etc) will be present."))),this.section("sending-files",h.default.createElement("div",null,h.default.createElement(T.default,null,"data.connection.sendFile('/path/to/file.mp3');\ndata.toRender = false;\nnext();"),h.default.createElement("p",null,"ActionHero can also serve up flat files.  ActionHero will not cache these files and each request to ",h.default.createElement("code",null,"file")," will re-read the file from disk (like the nginx web server)."),h.default.createElement("p",null,"There are helpers you can use in your actions to send files:"),h.default.createElement("ul",null,h.default.createElement("li",null,h.default.createElement("code",null,"/public")," and ",h.default.createElement("code",null,"/api")," are  routes which expose the directories of those types.  These top level path can be configured in ",h.default.createElement("code",null,"/config/servers/web.js")," with ",h.default.createElement("code",null,"api.config.servers.web.urlPathForActions")," and ",h.default.createElement("code",null,"api.config.servers.web.urlPathForFiles"),"."),h.default.createElement("li",null,'the root of the web server "/" can be toggled to serve the content between /file or /api actions per your needs ',h.default.createElement("code",null,"api.config.servers.web.rootEndpointType"),". The default is ",h.default.createElement("code",null,"api"),"."),h.default.createElement("li",null,"ActionHero will serve up flat files (html, images, etc) as well from your ./public folder.  This is accomplished via the ",h.default.createElement("code",null,"file")," route as described above. ",h.default.createElement("code",null,"http://{baseUrl}/public/{pathToFile}")," is equivalent to ",h.default.createElement("code",null,"http://{baseUrl}?action=file&fileName={pathToFile}")," and ",h.default.createElement("code",null,"http://{baseUrl}/file/{pathToFile}"),"."),h.default.createElement("li",null,"Errors will result in a 404 (file not found) with a message you can customize."),h.default.createElement("li",null,"Proper mime-type headers will be set when possible via the ",h.default.createElement("code",null,"mime")," package.")),h.default.createElement("p",null,"See the ",h.default.createElement("a",{href:"/docs/core/file-server"},"file server")," page for more documentation"))),this.section("routes",h.default.createElement("div",null,h.default.createElement("p",null,"For web clients (http and https), you can define an optional RESTful mapping to help route requests to actions.  If the client doesn't specify an action via a param, and the base route isn't a named action, the action will attempt to be discerned from this ",h.default.createElement("code",null,"config/routes.js")," file."),h.default.createElement("p",null,"This variables in play here are:"),h.default.createElement("ul",null,h.default.createElement("li",null,h.default.createElement("code",null,"api.config.servers.web.urlPathForActions")),h.default.createElement("li",null,h.default.createElement("code",null,"api.config.servers.web.rootEndpointType")),h.default.createElement("li",null,"and of course the content of ",h.default.createElement("code",null,"config/routes.js"))),h.default.createElement("p",null,"Say you have an action called ‘status' (like in a freshly generated ActionHero project).  Lets start with ActionHero's default config:"),h.default.createElement(T.default,null,"api.config.servers.web.urlPathForActions = ‘api';\napi.config.servers.web.urlPathForFiles = ‘public';\napi.config.servers.web.rootEndpointType = ‘file';"),h.default.createElement("p",null,"There are 3 ways a client can access actions via the web server."),h.default.createElement("ul",null,h.default.createElement("li",null,"no routing at all and use GET params: ",h.default.createElement("code",null,"server.com/api?action=status")),h.default.createElement("li",null,"with ‘basic' routing, where the action's name will respond after the /api path: ",h.default.createElement("code",null,"server.com/api/status")),h.default.createElement("li",null,"or you can modify this with routes. Say you want ",h.default.createElement("code",null,"server.com/api/stuff/statusPage"))),h.default.createElement(T.default,null,"exports.default = function(api) {\n  return {\n    get: [\n      { path: ‘/stuff/statusPage', action: ‘status' }\n    ]\n  };\n}"),h.default.createElement("p",null,"If the ",h.default.createElement("code",null,"api.config.servers.web.rootEndpointType")," is ",h.default.createElement("code",null,'"file"')," which means that the routes you are making are active only under the ",h.default.createElement("code",null,"/api")," path.  If you wanted the route example to become ",h.default.createElement("code",null,"server.com/stuff/statusPage"),", you would need to change ",h.default.createElement("code",null,"api.config.servers.web.rootEndpointType")," to be ‘api'.  Note that making this change doesn't stop ",h.default.createElement("code",null,"server.com/api/stuff/statusPage")," from working as well, as you still have ",h.default.createElement("code",null,"api.config.servers.web.urlPathForActions")," set to be ‘api', so both will continue to work."),h.default.createElement("p",null,"For a route to match, all params must be satisfied.  So, if you expect a route to provide ",h.default.createElement("code",null,"api/:a/:b/:c")," and the request is only for ",h.default.createElement("code",null,"api/:a/:c"),", the route won't match. This holds for any variable, including ",h.default.createElement("code",null,":apiVersion"),".  If you want to match both with and without apiVersion, just define the rote 2x, IE:"),h.default.createElement(T.default,null,'exports.default = function(api) {\n  return {\n    all: [\n      { path: "/cache/:key/:value",             action:  "cacheTest" },\n      { path: "/:apiVersion/cache/:key/:value", action:  "cacheTest" },\n    ]\n  };\n}'),h.default.createElement("p",null,"If you want to shut off access to your action at ",h.default.createElement("code",null,"server.com/api/stuff/statusPage")," and only allow access via ",h.default.createElement("code",null,"server.com/stuff/statusPage"),", you can disable ",h.default.createElement("code",null,"api.config.servers.web.urlPathForActions")," by setting it equal to ",h.default.createElement("code",null,"null")," (but keeping the ",h.default.createElement("code",null,"api.config.servers.web.rootEndpointType")," equal to ",h.default.createElement("code",null,"api"),")."),h.default.createElement("p",null,"Routes will match the newest version of ",h.default.createElement("code",null,"apiVersion"),".  If you want to have a specific route match a specific version of an action, you can provide the ",h.default.createElement("code",null,"apiVersion")," param in your route definitions:"),h.default.createElement(T.default,null,'exports.default = function(api) {\n  return {\n    get: [\n      { path: "/myAction/old", action:  "myAction", apiVersion: 1 },\n      { path: "/myAction/new", action:  "myAction", apiVersion: 2 },\n    ]\n  };\n}'),h.default.createElement("p",null,"This would create both ",h.default.createElement("code",null,"/api/myAction/old")," and ",h.default.createElement("code",null,"/api/myAction/new"),", mapping to apiVersion 1 and 2 respectively."),h.default.createElement("p",null,"In your actions and middleware, if a route was matched, you can see the details of the match by inspecting ",h.default.createElement("code",null,"data.connection.matchedRoute")," which will include ",h.default.createElement("code",null,"path")," and ",h.default.createElement("code",null,"action"),"."),h.default.createElement("p",null,"Finally, you can toggle an option, ",h.default.createElement("code",null,"matchTrailingPathParts"),", which allows the final segment of your route to absorb all trailing path parts in a matched variable."),h.default.createElement(T.default,null,"post: [\n  // yes match: site.com/api/123\n  // no match: site.com/api/123/admin\n  { path: '/login/:userId(.*)', action: 'login' }\n],\n\npost: [\n  // yes match: site.com/api/123\n  // yes match: site.com/api/123/admin\n  { path: '/login/:userId(.*)', action: 'login', matchTrailingPathParts: true }\n],"),h.default.createElement("p",null,'This also enables "catch all" routes, like:'),h.default.createElement(T.default,null,"get: [\n  { path: ‘:path(.*)', action: ‘catchAll', matchTrailingPathParts: true }\n],"),h.default.createElement("p",null,"If you have a route with multiple variables defined and ",h.default.createElement("code",null,"matchTrailingPathParts")," is true, only the final segment will match the trailing sections:"),h.default.createElement(T.default,null,"get: [\n  // the route site.com/users/123/should/do/a/thing would become {userId: 123, path: ‘/should/do/a/thing'}\n  { path: ‘/users/:userId/:path(.*)', action: ‘catchAll', matchTrailingPathParts: true }\n],"),h.default.createElement("p",null,h.default.createElement("strong",null,"Note"),': In regular expressions used for routing, you cannot use the "/" character.'),h.default.createElement("h4",null,"Handling Static Folders with Routes"),h.default.createElement("p",null,'If you want map a special public folder to a given route you can use the "dir" parameter in your "get" routes in the routes.js file:'),h.default.createElement(T.default,null,"get: [\n  { path: ‘/my/special/folder', dir: __dirname + ‘/…/public/my/special/folder', matchTrailingPathParts: true }\n],"),h.default.createElement("p",null,"After mapping this route all files/folders within the mapped folder will be accessible on the route."),h.default.createElement("p",null,'You have to map the specified public folder within the "dir" parameter, relative to the routes.js file or absolute. Make sure to set "matchTrailingPathParts" to "true", because when it is set to false, the route will never match when you request a file. (e.g.: site.com/my/special/folder/testfile.txt).'),h.default.createElement("h4",null,"Route Notes"),h.default.createElement("ul",null,h.default.createElement("li",null,"actions defined in params directly ",h.default.createElement("code",null,"action=theAction")," or hitting the named URL for an action ",h.default.createElement("code",null,"/api/theAction")," will never override RESTful routing"),h.default.createElement("li",null,"you can mix explicitly defined params with route-defined params.  If there is an overlap, the route-defined params win",h.default.createElement("ul",null,h.default.createElement("li",null,"IE: /api/user/123?userId=456 => ",h.default.createElement("code",null,"connection.userId = 123")))),h.default.createElement("li",null,'routes defined with the "all" method will be duplicated to "get", "put", "post", and "delete"'),h.default.createElement("li",null,'use ":variable" to define "variable"'),h.default.createElement("li",null,'an undefined ":variable" will not match',h.default.createElement("ul",null,h.default.createElement("li",null,'IE: "/api/user/" will not match "/api/user/:userId"'),h.default.createElement("li",null,'You would need a second route in this case to match "/api/user"'))),h.default.createElement("li",null,"routes are matched as defined top-down in ",h.default.createElement("code",null,"routes.js")),h.default.createElement("li",null,"you can optionally define a regex match along with your route variable",h.default.createElement("ul",null,h.default.createElement("li",null,"IE: ",h.default.createElement("code",null,'path:"/game/:id(^[a-z]{0,10}$)", action: "gamehandler" }')),h.default.createElement("li",null,"be sure to double-escape when needed: ",h.default.createElement("code",null,' path: "/login/:userID(^\\d{3}$)", action: "login" }')))),h.default.createElement("li",null,"The HTTP verbs which you can route against are: ",h.default.createElement("code",null,"api.routes.verbs = ['head', 'get', 'post', 'put', 'patch', 'delete']"))),h.default.createElement(T.default,null,'exports.default = function(api) {\n  return {\n    get: [\n      { path: "/users", action: "usersList" }, // (GET) /api/users\n      { path: "/search/:term/limit/:limit/offset/:offset", action: "search" }, // (GET) /api/search/car/limit/10/offset/100\n    ],\n\n    post: [\n      { path: "/login/:userID(^\\d{3}$)", action: "login" } // (POST) /api/login/123\n    ],\n\n    all: [\n      { path: "/user/:userID", action: "user" } // (*) / /api/user/123\n    ]\n  };\n}'))),this.section("hosts",h.default.createElement("div",null,h.default.createElement("p",null,"ActionHero allows you to define a collection of host headers which this API server will allow access from.  You can set these via ",h.default.createElement("code",null,"api.config.servers.web.allowedRequestHosts"),".  If the ",h.default.createElement("code",null,"Host")," header of a client does not match one of those listed (protocol counts!), they will be redirected to the first one present."),h.default.createElement("p",null,"You can also set ",h.default.createElement("code",null,"process.env.ALLOWED_HOSTS")," which will be parsed as a comma-separated list of Hosts which will set ",h.default.createElement("code",null,"api.config.servers.web.allowedRequestHosts")))),this.section("params",h.default.createElement("div",null,h.default.createElement("p",null,"Params provided by the user (GET, POST, etc for http and https servers, setParam for TCP clients, and passed to action calls from a web socket client) will be checked against a whitelist defined by your action (can be disabled in ",h.default.createElement("code",null,"/config/servers/web.js"),").  Variables defined in your actions by ",h.default.createElement("code",null,"action.inputs")," will be added to your whitelist.  Special params which the api will always accept are:"),h.default.createElement(T.default,null,"[\n  ‘file',\n  ‘apiVersion',\n  ‘callback',\n  ‘action',\n]"),h.default.createElement("p",null,"Params are loaded in this order GET -> POST (normal) -> POST (multipart).  This means that if you have ",h.default.createElement("code",null,"{url}?key=getValue")," and you post a variable ",h.default.createElement("code",null,"key=postValue")," as well, the ",h.default.createElement("code",null,"postValue")," will be the one used.  The only exception to this is if you use the URL method of defining your action.  You can add arbitrary params to the whitelist by adding them to the ",h.default.createElement("code",null,"api.postVariables")," array in your initializers."),h.default.createElement("p",null,"File uploads from forms will also appear in ",h.default.createElement("code",null,"connection.params"),', but will be an object with more information.  That is, if you uploaded a file called "image", you would have ',h.default.createElement("code",null,"connection.params.image.path"),", ",h.default.createElement("code",null,"connection.params.image.name")," (original file name), and ",h.default.createElement("code",null,"connection.params.image.type")," available to you."),h.default.createElement("p",null,"A note on JSON payloads:"),h.default.createElement("p",null,"You can post BODY json paylaods to actionHero in the form of a hash or array."),h.default.createElement("p",null,h.default.createElement("strong",null,"Hash"),": ",h.default.createElement("code",null,'curl -X POST -d \'{"key":"something", "value":{"a":1, "b":2}}\' http://localhost:8080/api/cacheTest'),".  This will result in:"),h.default.createElement(T.default,null,"connection.params = {\n  key: ‘something',\n  value: {\n    a: 1,\n    b: 2\n  }\n}"),h.default.createElement("p",null,h.default.createElement("strong",null,"Array"),": ",h.default.createElement("code",null,'curl -X POST -d \'[{"key":"something", "value":{"a":1, "b":2}}]\' http://localhost:8080/api/cacheTest'),".  In this case, we set the array to the param key ",h.default.createElement("code",null,"payload"),":"),h.default.createElement(T.default,null,"connection.params = {\n  payload: [\n    {\n      key: ‘something'\n      value: {\n        a: 1,\n        b: 2\n      }\n    }\n  ]\n}"))),this.section("uploading-files",h.default.createElement("div",null,h.default.createElement("p",null,"ActionHero uses the ",h.default.createElement("a",{href:"https://github.com/felixge/node-formidable"},"formidable")," form parsing library.  You can set options for it via ",h.default.createElement("code",null,"api.config.servers.web.formOptions"),".  You can upload multiple files to an action and they will be available within ",h.default.createElement("code",null,"connection.params")," as formidable response objects containing references to the original file name, where the uploaded file was stored temporarily, etc.   Here is an example:"),h.default.createElement(T.default,null,"// actions/uploader.js\n\nexports.action = {\n  name: 'uploader',\n  description: 'uploader',\n  inputs: {\n    file1: {required: true},\n    file2: {required: false},\n    key1: {required: false},\n    key2: {required: false},\n  },\n  outputExample: null,\n  run: function(api, data, next){\n    console.log(data.params);\n    next();\n  }\n};"),h.default.createElement(T.default,{language:"html"},'\x3c!-- public/uploader.html --\x3e\n\n<html>\n    <head></head>\n    <body>\n        <form method="post" enctype="multipart/form-data" action="http://localhost:8080/api/uploader">\n            <input type="file" name="file1" />\n            <input type="file" name="file2" />\n            <br><br>\n            <input type=\'text\' name="key1" />\n            <input type=\'text\' name="key2" />\n            <br><br>\n            <input type="submit" value="send" />\n        </form>\n    </body>\n</html>'),h.default.createElement(T.default,null,"// what the params look like to an action\n\n{ action: 'uploader',\n  file1:\n   { domain: null,\n     _events: null,\n     _maxListeners: 10,\n     size: 5477608,\n     path: '/app/actionhero/tmp/86b2aa018a9785e20b3f6cea95babcca',\n     name: '1-02 Concentration Enhancing Menu Initialiser.mp3',\n     type: 'audio/mp3',\n     hash: false,\n     lastModifiedDate: Wed Feb 13 2013 20:32:49 GMT-0800 (PST),\n     _writeStream:\n      { ... },\n     length: [Getter],\n     filename: [Getter],\n     mime: [Getter] },\n  file2:\n   { domain: null,\n     _events: null,\n     _maxListeners: 10,\n     size: 10439802,\n     path: '/app/actionhero/tmp/6052010f1d75ceaeb9197a9a759124dc',\n     name: '1-10 There She Is.mp3',\n     type: 'audio/mp3',\n     hash: false,\n     lastModifiedDate: Wed Feb 13 2013 20:32:49 GMT-0800 (PST),\n     _writeStream:\n      { ... },\n  key1: '123',\n  key2: '456',\n }"))),this.section("client-library",h.default.createElement("div",null,h.default.createElement("p",null,"Although the ",h.default.createElement("code",null,"actionheroClient")," client-side library is mostly for websockets, it can now be used to make http actions when not connected (and websocket clients will fall back to http actions when disconnected)"),h.default.createElement(T.default,null,"<script src=\"/public/javascript/actionheroClient.js\"><\/script>\n\n<script>\n  var client = new ActionheroClient();\n  client.action('cacheTest', {key: 'k', value: 'v'}, function(error, data){\n     // do stuff\n  });\n<\/script>"),h.default.createElement("p",null,"Note that we never called ",h.default.createElement("code",null,"client.connect"),".  More information can be found on the ",h.default.createElement("a",{href:"/docs/servers/websocket"},"websocket server docs page"),"."))))))}}]),t}(b.default);t.default=k}},[1246]);
            return { page: comp.default }
          })
        