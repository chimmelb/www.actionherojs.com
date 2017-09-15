
          window.__NEXT_REGISTER_PAGE('/docs/core/chat', function() {
            var comp = module.exports=webpackJsonp([32],{1207:function(e,t,a){e.exports=a(1208)},1208:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(9),o=l(r),i=a(1),n=l(i),m=a(8),c=l(m),u=a(2),s=l(u),d=a(3),f=l(d),_="/home/ubuntu/www.actionherojs.com/pages/docs/core/chat.js?entry",N=a(0),b=l(N),h=a(16),E=l(h),p=a(11),y=a(14),w=l(y),v=a(18),g=l(v),k=function(e){function t(e){(0,n.default)(this,t);var a=(0,s.default)(this,(t.__proto__||(0,o.default)(t)).call(this,e));return a.state={titleSection:{title:"Core: Chat",icon:"/static/images/chat.svg"},sections:{general:"General",methods:"Methods",middleware:"Middleware","specific-clients":"Chatting to specific clients","client-use":"Client Use"},links:[{link:"/docs/core/file-server",title:"» Core: File Server"},{link:"/docs/core/cache",title:"« Core: Cache"}]},a}return(0,f.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){return b.default.createElement(w.default,{sideNav:this.state.sections,titleSection:this.state.titleSection,links:this.state.links,currentSection:this.state.currentSection,__source:{fileName:_,lineNumber:43}},b.default.createElement(p.Row,{__source:{fileName:_,lineNumber:44}},b.default.createElement(p.Col,{md:12,__source:{fileName:_,lineNumber:45}},this.section("general",b.default.createElement("div",{__source:{fileName:_,lineNumber:47}},b.default.createElement("p",{__source:{fileName:_,lineNumber:48}},"ActionHero ships with a chat framework which may be used by all persistent connections (",b.default.createElement("code",{__source:{fileName:_,lineNumber:48}},"socket")," and ",b.default.createElement("code",{__source:{fileName:_,lineNumber:48}},"websocket"),").  There are methods to create and manage chat rooms and control the users in those rooms.  Chat does not have to be for peer-to-peer communication, and is a metaphor used for many things, including game state in MMOs."),b.default.createElement("p",{__source:{fileName:_,lineNumber:49}},"Clients themselves interact with rooms via ",b.default.createElement("code",{__source:{fileName:_,lineNumber:49}},"verbs"),".  Verbs are short-form commands that will attempt to modify the connection's state, either joining or leaving a room.  Clients can be in many rooms at once."),b.default.createElement("p",{__source:{fileName:_,lineNumber:50}},"Relevant chat verbs are:"),b.default.createElement("ul",{__source:{fileName:_,lineNumber:52}},b.default.createElement("li",{__source:{fileName:_,lineNumber:53}},b.default.createElement("code",{__source:{fileName:_,lineNumber:53}},"roomAdd")),b.default.createElement("li",{__source:{fileName:_,lineNumber:54}},b.default.createElement("code",{__source:{fileName:_,lineNumber:54}},"roomLeave")),b.default.createElement("li",{__source:{fileName:_,lineNumber:55}},b.default.createElement("code",{__source:{fileName:_,lineNumber:55}},"roomView")),b.default.createElement("li",{__source:{fileName:_,lineNumber:56}},b.default.createElement("code",{__source:{fileName:_,lineNumber:56}},"say"))),b.default.createElement("p",{__source:{fileName:_,lineNumber:59}},"The special verb for persistent connections ",b.default.createElement("code",{__source:{fileName:_,lineNumber:59}},"say")," makes use of ",b.default.createElement("code",{__source:{fileName:_,lineNumber:59}},"api.chatRoom.broadcast")," to tell a message to all other users in the room, IE: ",b.default.createElement("code",{__source:{fileName:_,lineNumber:59}},"say myRoom Hello World")," from a socket client or ",b.default.createElement("code",{__source:{fileName:_,lineNumber:59}},'client.say("myRoom", \'Hello World")')," for a websocket."),b.default.createElement("p",{__source:{fileName:_,lineNumber:60}},"Chat on multiple actionHero nodes relies on redis for both chat (pub/sub) and a key store defined by ",b.default.createElement("code",{__source:{fileName:_,lineNumber:60}},"api.config.redis"),". Note that if you elect to use fakeredis, you will be using an in-memory redis server rather than a real redis process, which does not work to share data across nodes.  The redis store and the key store don't need to be the same instance of redis, but they do need to be the same for all ActionHero servers you are running in parallel.  This is how ActionHero scales the chat features."),b.default.createElement("p",{__source:{fileName:_,lineNumber:61}},"There is no limit to the number of rooms which can be created, but keep in mind that each room stores information in redis, and there load created for each connection."))),this.section("methods",b.default.createElement("div",{__source:{fileName:_,lineNumber:66}},b.default.createElement("p",{__source:{fileName:_,lineNumber:67}},"These methods are to be used within your server (perhaps an action or initializer).  They are not exposed directly to clients, but they can be within an action."),b.default.createElement("h3",{__source:{fileName:_,lineNumber:69}},b.default.createElement("code",{__source:{fileName:_,lineNumber:69}},"api.chatRoom.broadcast(connection, room, message, callback)")),b.default.createElement("ul",{__source:{fileName:_,lineNumber:71}},b.default.createElement("li",{__source:{fileName:_,lineNumber:72}},"tell a message to all members in a room."),b.default.createElement("li",{__source:{fileName:_,lineNumber:73}},"connection can either be a real connection (A message coming from a client), or a mockConnection.  A mockConnection at the very least has the form ",b.default.createElement("code",{__source:{fileName:_,lineNumber:73}},'room: "someOtherRoom"'),".  mockConnections without an id will be assigned the id of 0"),b.default.createElement("li",{__source:{fileName:_,lineNumber:74}},"The ",b.default.createElement("code",{__source:{fileName:_,lineNumber:74}},"context")," of messages sent with ",b.default.createElement("code",{__source:{fileName:_,lineNumber:74}},"api.chatRoom.broadcast")," always be ",b.default.createElement("code",{__source:{fileName:_,lineNumber:74}},"user")," to differentiate these responses from a ",b.default.createElement("code",{__source:{fileName:_,lineNumber:74}},"response")," to a request")),b.default.createElement("h3",{__source:{fileName:_,lineNumber:77}},b.default.createElement("code",{__source:{fileName:_,lineNumber:77}},"api.chatRoom.list(callback)")),b.default.createElement("ul",{__source:{fileName:_,lineNumber:79}},b.default.createElement("li",{__source:{fileName:_,lineNumber:80}},"callback will return (error, [rooms])")),b.default.createElement("h3",{__source:{fileName:_,lineNumber:83}},b.default.createElement("code",{__source:{fileName:_,lineNumber:83}},"api.chatRoom.add(room, callback)")),b.default.createElement("ul",{__source:{fileName:_,lineNumber:85}},b.default.createElement("li",{__source:{fileName:_,lineNumber:86}},"callback will return 1 if you created the room, 0 if it already existed")),b.default.createElement("h3",{__source:{fileName:_,lineNumber:89}},b.default.createElement("code",{__source:{fileName:_,lineNumber:89}},"api.chatRoom.destroy(room, callback)")),b.default.createElement("ul",{__source:{fileName:_,lineNumber:91}},b.default.createElement("li",{__source:{fileName:_,lineNumber:92}},"callback is empty")),b.default.createElement("h3",{__source:{fileName:_,lineNumber:95}},b.default.createElement("code",{__source:{fileName:_,lineNumber:95}},"api.chatRoom.exists(room, callback)")),b.default.createElement("ul",{__source:{fileName:_,lineNumber:97}},b.default.createElement("li",{__source:{fileName:_,lineNumber:98}},"callback returns (error, found); found is a boolean")),b.default.createElement("h3",{__source:{fileName:_,lineNumber:101}},b.default.createElement("code",{__source:{fileName:_,lineNumber:101}},"api.chatRoom.roomStatus(room, callback)")),b.default.createElement("ul",{__source:{fileName:_,lineNumber:103}},b.default.createElement("li",{__source:{fileName:_,lineNumber:104}},"callback returns (error, details); details is a hash containing room information"),b.default.createElement("li",{__source:{fileName:_,lineNumber:105}},"details of the form:")),b.default.createElement(g.default,{__source:{fileName:_,lineNumber:108}},'{\n  room: "myRoom",\n  membersCount: 2,\n  members: {\n    aaa: {id: "aaa", joinedAt: 123456789 },\n    bbb: {id: "bbb", joinedAt: 123456789 },\n  }\n}'),b.default.createElement("h3",{__source:{fileName:_,lineNumber:110}},b.default.createElement("code",{__source:{fileName:_,lineNumber:110}},"api.chatRoom.addMember(connectionId, room, callback)")),b.default.createElement("ul",{__source:{fileName:_,lineNumber:112}},b.default.createElement("li",{__source:{fileName:_,lineNumber:113}},"callback is of the form (error, wasAdded)"),b.default.createElement("li",{__source:{fileName:_,lineNumber:114}},"you can add connections from this or any other server in the cluster")),b.default.createElement("h3",{__source:{fileName:_,lineNumber:117}},b.default.createElement("code",{__source:{fileName:_,lineNumber:117}},"api.chatRoom.removeMember(connectionId, room, callback)")),b.default.createElement("ul",{__source:{fileName:_,lineNumber:119}},b.default.createElement("li",{__source:{fileName:_,lineNumber:120}},"callback is of the form (error, wasRemoved)"),b.default.createElement("li",{__source:{fileName:_,lineNumber:121}},"you can remove connections from this or any other server in the cluster")),b.default.createElement("h3",{__source:{fileName:_,lineNumber:124}},b.default.createElement("code",{__source:{fileName:_,lineNumber:124}},"api.chatRoom.generateMemberDetails( connection )")),b.default.createElement("ul",{__source:{fileName:_,lineNumber:126}},b.default.createElement("li",{__source:{fileName:_,lineNumber:127}},"defines what is stored from the connection object in the member data"),b.default.createElement("li",{__source:{fileName:_,lineNumber:128}},"default is ",b.default.createElement("code",{__source:{fileName:_,lineNumber:128}},"id: connection.id")),b.default.createElement("li",{__source:{fileName:_,lineNumber:129}},"other data that is stored by default is ",b.default.createElement("code",{__source:{fileName:_,lineNumber:129}},"host: api.id")," and ",b.default.createElement("code",{__source:{fileName:_,lineNumber:129}},"joinedAt: new Date().getTime()")),b.default.createElement("li",{__source:{fileName:_,lineNumber:130}},"override the entire method to store custom data ",b.default.createElement("em",{__source:{fileName:_,lineNumber:130}},"that is on the connection"))),b.default.createElement("h3",{__source:{fileName:_,lineNumber:133}},b.default.createElement("code",{__source:{fileName:_,lineNumber:133}},"api.chatRoom.sanitizeMemberDetails( memberData )")),b.default.createElement("ul",{__source:{fileName:_,lineNumber:135}},b.default.createElement("li",{__source:{fileName:_,lineNumber:136}},"Defines what is pulled out of the member data when returning roomStatus"),b.default.createElement("li",{__source:{fileName:_,lineNumber:137}},"Defaults to ",b.default.createElement("code",{__source:{fileName:_,lineNumber:137}},"joinedAt : memberData.joinedAt")),b.default.createElement("li",{__source:{fileName:_,lineNumber:138}},"After method call, always filled with ",b.default.createElement("code",{__source:{fileName:_,lineNumber:138}},"id"),", based on the ",b.default.createElement("code",{__source:{fileName:_,lineNumber:138}},"connection.id")," used to store the data"),b.default.createElement("li",{__source:{fileName:_,lineNumber:139}},"Override the entire method to use custom data as defined in ",b.default.createElement("code",{__source:{fileName:_,lineNumber:139}},"api.chatRoom.generateMemberDetails"))),b.default.createElement("h3",{__source:{fileName:_,lineNumber:142}},b.default.createElement("code",{__source:{fileName:_,lineNumber:142}},"api.chatRoom.generateMessagePayload( message )")),b.default.createElement("ul",{__source:{fileName:_,lineNumber:144}},b.default.createElement("li",{__source:{fileName:_,lineNumber:145}},"Defiens how messages from clients are sanitized"),b.default.createElement("li",{__source:{fileName:_,lineNumber:146}},"Override the entire method to use custom data as defined in ",b.default.createElement("code",{__source:{fileName:_,lineNumber:146}},"api.chatRoom.generateMessagePayload"))))),this.section("middleware",b.default.createElement("div",{__source:{fileName:_,lineNumber:152}},b.default.createElement("p",{__source:{fileName:_,lineNumber:153}},"There are 4 types of middleware you can install for the chat system: ",b.default.createElement("code",{__source:{fileName:_,lineNumber:153}},"say"),", ",b.default.createElement("code",{__source:{fileName:_,lineNumber:153}},"onSayReceive"),", ",b.default.createElement("code",{__source:{fileName:_,lineNumber:153}},"join"),", and ",b.default.createElement("code",{__source:{fileName:_,lineNumber:153}},"leave"),".  You can learn more about ",b.default.createElement("a",{href:"/docs/core/middleware",__source:{fileName:_,lineNumber:153}},"chat middleware in the middleware section of this site")))),this.section("specific-clients",b.default.createElement("div",{__source:{fileName:_,lineNumber:158}},b.default.createElement("p",{__source:{fileName:_,lineNumber:159}},"Every connection object also has a ",b.default.createElement("code",{__source:{fileName:_,lineNumber:159}},"connection.sendMessage(message)")," method which you can call directly from the server."))),this.section("client-use",b.default.createElement("div",{__source:{fileName:_,lineNumber:164}},b.default.createElement("p",{__source:{fileName:_,lineNumber:165}},"The details of communicating within a chat room are up to each individual server (see ",b.default.createElement("a",{href:"/docs/servers/websocket",__source:{fileName:_,lineNumber:165}},"websocket")," or ",b.default.createElement("a",{href:"/docs/servers/socket",__source:{fileName:_,lineNumber:165}},"socket"),"), but the same principals apply:"),b.default.createElement("ul",{__source:{fileName:_,lineNumber:166}},b.default.createElement("li",{__source:{fileName:_,lineNumber:167}},"Client will join a room (",b.default.createElement("code",{__source:{fileName:_,lineNumber:167}},"client.roomAdd(room)"),")."),b.default.createElement("li",{__source:{fileName:_,lineNumber:168}},"Once in the room, clients can send messages (which are strings) to everyone else in the room via ",b.default.createElement("code",{__source:{fileName:_,lineNumber:168}},"say"),", ie: ",b.default.createElement("code",{__source:{fileName:_,lineNumber:168}},"client.say('room', Hello World')")),b.default.createElement("li",{__source:{fileName:_,lineNumber:169}},"Once a client is in a room, they will revive messages from other members of the room as events.  For example, catching say events from the websocket client looks like ",b.default.createElement("code",{__source:{fileName:_,lineNumber:169}},"client.on('say', function(message){ console.log(message); })"),".  You can inspect ",b.default.createElement("code",{__source:{fileName:_,lineNumber:169}},"message.room")," if you are in more than one room.",b.default.createElement("ul",{__source:{fileName:_,lineNumber:170}},b.default.createElement("li",{__source:{fileName:_,lineNumber:171}},"The payload of a message will contain the room, sender, and the message body: ",b.default.createElement("code",{__source:{fileName:_,lineNumber:171}},"{message: &quot;Hello World&quot;, room: &quot;SecretRoom&quot;, from: &quot;7d419af9-accf-40ac-8d78-9281591dd59e&quot;, context: &quot;user&quot;, sentAt: 1399437579346}"))))),b.default.createElement("p",{__source:{fileName:_,lineNumber:176}},"If you want to create an authenticated room, there are 2 steps:"),b.default.createElement("ul",{__source:{fileName:_,lineNumber:178}},b.default.createElement("li",{__source:{fileName:_,lineNumber:179}},"First, create an action which modifies some property eitehr on the connection object it self, or stores permissions to a database."),b.default.createElement("li",{__source:{fileName:_,lineNumber:180}},"Then, create a ",b.default.createElement("code",{__source:{fileName:_,lineNumber:180}},"joinCallback"),"-style middleware which cheks these values.")))))))}}]),t}(E.default);t.default=k}},[1207]);
            return { page: comp.default }
          })
        