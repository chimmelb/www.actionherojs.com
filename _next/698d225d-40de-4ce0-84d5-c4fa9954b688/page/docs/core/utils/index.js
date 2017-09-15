
          window.__NEXT_REGISTER_PAGE('/docs/core/utils', function() {
            var comp = module.exports=webpackJsonp([20],{1231:function(e,t,l){e.exports=l(1232)},1232:function(e,t,l){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=l(9),i=r(a),u=l(1),n=r(u),o=l(8),s=r(o),c=l(2),m=r(c),f=l(3),d=r(f),_="/home/ubuntu/www.actionherojs.com/pages/docs/core/utils.js?entry",N=l(0),b=r(N),h=l(16),E=r(h),p=l(11),v=l(14),w=r(v),j=function(e){function t(e){(0,n.default)(this,t);var l=(0,m.default)(this,(t.__proto__||(0,i.default)(t)).call(this,e));return l.state={titleSection:{title:"Core: Utils",icon:"/static/images/ops-tools.svg"},sections:{overview:"Overview",methods:"Methods"},links:[{link:"/docs/core/api-object",title:"» Core: API Object"},{link:"/docs/core/config",title:"« Core: Config"}]},l}return(0,d.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){return b.default.createElement(w.default,{sideNav:this.state.sections,titleSection:this.state.titleSection,links:this.state.links,currentSection:this.state.currentSection,__source:{fileName:_,lineNumber:28}},b.default.createElement(p.Row,{__source:{fileName:_,lineNumber:29}},b.default.createElement(p.Col,{md:12,__source:{fileName:_,lineNumber:30}},this.section("overview",b.default.createElement("div",{__source:{fileName:_,lineNumber:32}},b.default.createElement("p",{__source:{fileName:_,lineNumber:33}},"ActionHero ships with a few utility methods exposed for your convince:"))),this.section("methods",b.default.createElement("div",{__source:{fileName:_,lineNumber:38}},b.default.createElement("h3",{__source:{fileName:_,lineNumber:39}},b.default.createElement("code",{__source:{fileName:_,lineNumber:39}},"api.utils.hashMerge(a, b)")),b.default.createElement("ul",{__source:{fileName:_,lineNumber:40}},b.default.createElement("li",{__source:{fileName:_,lineNumber:41}},"create a new hash which looks like b merged into a"),b.default.createElement("li",{__source:{fileName:_,lineNumber:42}},b.default.createElement("code",{__source:{fileName:_,lineNumber:42}},"{a:1, b:2}")," merged with ",b.default.createElement("code",{__source:{fileName:_,lineNumber:42}},"{b:3, c:4}")," looks like ",b.default.createElement("code",{__source:{fileName:_,lineNumber:42}},"{a: 1, b:3, c:4}"))),b.default.createElement("h3",{__source:{fileName:_,lineNumber:45}},b.default.createElement("code",{__source:{fileName:_,lineNumber:45}},"api.utils.isPlainObject(object)")),b.default.createElement("ul",{__source:{fileName:_,lineNumber:46}},b.default.createElement("li",{__source:{fileName:_,lineNumber:47}},"determines if ",b.default.createElement("code",{__source:{fileName:_,lineNumber:47}},"object")," is a plain js 'Object' or something more complex, like a stream")),b.default.createElement("h3",{__source:{fileName:_,lineNumber:50}},b.default.createElement("code",{__source:{fileName:_,lineNumber:50}},"api.utils.arrayUniqueify(arr)")),b.default.createElement("ul",{__source:{fileName:_,lineNumber:51}},b.default.createElement("li",{__source:{fileName:_,lineNumber:52}},"removes duplicate entries from an array")),b.default.createElement("h3",{__source:{fileName:_,lineNumber:55}},b.default.createElement("code",{__source:{fileName:_,lineNumber:55}},"api.utils.objClone(obj)")),b.default.createElement("ul",{__source:{fileName:_,lineNumber:56}},b.default.createElement("li",{__source:{fileName:_,lineNumber:57}},"creates a new object with the same keys and values of the original object")),b.default.createElement("h3",{__source:{fileName:_,lineNumber:60}},b.default.createElement("code",{__source:{fileName:_,lineNumber:60}},"api.utils.getExternalIPAddress()")),b.default.createElement("ul",{__source:{fileName:_,lineNumber:61}},b.default.createElement("li",{__source:{fileName:_,lineNumber:62}},"attempts to determine this server's external IP address out of all plausible addressees this host is listening on")),b.default.createElement("h3",{__source:{fileName:_,lineNumber:65}},b.default.createElement("code",{__source:{fileName:_,lineNumber:65}},"api.utils.parseCookies(req)")),b.default.createElement("ul",{__source:{fileName:_,lineNumber:66}},b.default.createElement("li",{__source:{fileName:_,lineNumber:67}},"a helper to parse the request object's headers and returns a hash of the client's cookies")),b.default.createElement("h3",{__source:{fileName:_,lineNumber:70}},b.default.createElement("code",{__source:{fileName:_,lineNumber:70}},"api.utils.parseIPv6URI(address)")),b.default.createElement("ul",{__source:{fileName:_,lineNumber:71}},b.default.createElement("li",{__source:{fileName:_,lineNumber:72}},"will return ",b.default.createElement("code",{__source:{fileName:_,lineNumber:72}},"{host: host, port: port}")," for an IPv6 address")))))))}}]),t}(E.default);t.default=j}},[1231]);
            return { page: comp.default }
          })
        