(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[446],{9616:(e,t,a)=>{var l=Object.create,s=Object.defineProperty,r=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,o=Object.getPrototypeOf,n=Object.prototype.hasOwnProperty,p=(e,t,a)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,y=(e,t,a,l)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let o of i(t))n.call(e,o)||o===a||s(e,o,{get:()=>t[o],enumerable:!(l=r(t,o))||l.enumerable});return e},u=(e,t,a)=>(p(e,"symbol"!=typeof t?t+"":t,a),a),c={};((e,t)=>{for(var a in t)s(e,a,{get:t[a],enumerable:!0})})(c,{default:()=>f}),e.exports=y(s({},"__esModule",{value:!0}),c);var h=((e,t,a)=>(a=null!=e?l(o(e)):{},y(!t&&e&&e.__esModule?a:s(a,"default",{value:e,enumerable:!0}),e)))(a(7749)),d=a(9061),P=a(5587);let m=/[?&](?:list|channel)=([a-zA-Z0-9_-]+)/,g=/user\/([a-zA-Z0-9_-]+)\/?/,b=/youtube-nocookie\.com/;class f extends h.Component{constructor(){super(...arguments),u(this,"callPlayer",d.callPlayer),u(this,"parsePlaylist",e=>{if(e instanceof Array)return{listType:"playlist",playlist:e.map(this.getID).join(",")};if(m.test(e)){let[,t]=e.match(m);return{listType:"playlist",list:t.replace(/^UC/,"UU")}}if(g.test(e)){let[,t]=e.match(g);return{listType:"user_uploads",list:t}}return{}}),u(this,"onStateChange",e=>{let{data:t}=e,{onPlay:a,onPause:l,onBuffer:s,onBufferEnd:r,onEnded:i,onReady:o,loop:n,config:{playerVars:p,onUnstarted:y}}=this.props,{UNSTARTED:u,PLAYING:c,PAUSED:h,BUFFERING:d,ENDED:P,CUED:m}=window.YT.PlayerState;if(t===u&&y(),t===c&&(a(),r()),t===h&&l(),t===d&&s(),t===P){let e=!!this.callPlayer("getPlaylist");n&&!e&&(p.start?this.seekTo(p.start):this.play()),i()}t===m&&o()}),u(this,"mute",()=>{this.callPlayer("mute")}),u(this,"unmute",()=>{this.callPlayer("unMute")}),u(this,"ref",e=>{this.container=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}getID(e){return!e||e instanceof Array||m.test(e)?null:e.match(P.MATCH_URL_YOUTUBE)[1]}load(e,t){let{playing:a,muted:l,playsinline:s,controls:r,loop:i,config:o,onError:n}=this.props,{playerVars:p,embedOptions:y}=o,u=this.getID(e);if(t){if(m.test(e)||g.test(e)||e instanceof Array){this.player.loadPlaylist(this.parsePlaylist(e));return}this.player.cueVideoById({videoId:u,startSeconds:(0,d.parseStartTime)(e)||p.start,endSeconds:(0,d.parseEndTime)(e)||p.end});return}(0,d.getSDK)("https://www.youtube.com/iframe_api","YT","onYouTubeIframeAPIReady",e=>e.loaded).then(t=>{this.container&&(this.player=new t.Player(this.container,{width:"100%",height:"100%",videoId:u,playerVars:{autoplay:a?1:0,mute:l?1:0,controls:r?1:0,start:(0,d.parseStartTime)(e),end:(0,d.parseEndTime)(e),origin:window.location.origin,playsinline:s?1:0,...this.parsePlaylist(e),...p},events:{onReady:()=>{i&&this.player.setLoop(!0),this.props.onReady()},onPlaybackRateChange:e=>this.props.onPlaybackRateChange(e.data),onPlaybackQualityChange:e=>this.props.onPlaybackQualityChange(e),onStateChange:this.onStateChange,onError:e=>n(e.data)},host:b.test(e)?"https://www.youtube-nocookie.com":void 0,...y}))},n),y.events&&console.warn("Using `embedOptions.events` will likely break things. Use ReactPlayer’s callback props instead, eg onReady, onPlay, onPause")}play(){this.callPlayer("playVideo")}pause(){this.callPlayer("pauseVideo")}stop(){document.body.contains(this.callPlayer("getIframe"))&&this.callPlayer("stopVideo")}seekTo(e,t=!1){this.callPlayer("seekTo",e),t||this.props.playing||this.pause()}setVolume(e){this.callPlayer("setVolume",100*e)}setPlaybackRate(e){this.callPlayer("setPlaybackRate",e)}setLoop(e){this.callPlayer("setLoop",e)}getDuration(){return this.callPlayer("getDuration")}getCurrentTime(){return this.callPlayer("getCurrentTime")}getSecondsLoaded(){return this.callPlayer("getVideoLoadedFraction")*this.getDuration()}render(){let{display:e}=this.props;return h.default.createElement("div",{style:{width:"100%",height:"100%",display:e}},h.default.createElement("div",{ref:this.ref}))}}u(f,"displayName","YouTube"),u(f,"canPlay",P.canPlay.youtube)}}]);