"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[55],{"./node_modules/react-player/lazy/players/Wistia.js":(__unused_webpack_module,exports,__webpack_require__)=>{function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=function _interopRequireWildcard(obj){if(obj&&obj.__esModule)return obj;if(null===obj||"object"!==_typeof(obj)&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache();if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/react/index.js")),_utils=__webpack_require__("./node_modules/react-player/lazy/utils.js"),_patterns=__webpack_require__("./node_modules/react-player/lazy/patterns.js");function _getRequireWildcardCache(){if("function"!=typeof WeakMap)return null;var cache=new WeakMap;return _getRequireWildcardCache=function _getRequireWildcardCache(){return cache},cache}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?_assertThisInitialized(self):call}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var Wistia=function(_Component){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(Wistia,_Component);var _super=_createSuper(Wistia);function Wistia(){var _this;_classCallCheck(this,Wistia);for(var _len=arguments.length,_args=new Array(_len),_key=0;_key<_len;_key++)_args[_key]=arguments[_key];return _defineProperty(_assertThisInitialized(_this=_super.call.apply(_super,[this].concat(_args))),"callPlayer",_utils.callPlayer),_defineProperty(_assertThisInitialized(_this),"playerID",_this.props.config.playerId||"".concat("wistia-player-").concat((0,_utils.randomString)())),_defineProperty(_assertThisInitialized(_this),"onPlay",(function(){var _this$props;return(_this$props=_this.props).onPlay.apply(_this$props,arguments)})),_defineProperty(_assertThisInitialized(_this),"onPause",(function(){var _this$props2;return(_this$props2=_this.props).onPause.apply(_this$props2,arguments)})),_defineProperty(_assertThisInitialized(_this),"onSeek",(function(){var _this$props3;return(_this$props3=_this.props).onSeek.apply(_this$props3,arguments)})),_defineProperty(_assertThisInitialized(_this),"onEnded",(function(){var _this$props4;return(_this$props4=_this.props).onEnded.apply(_this$props4,arguments)})),_defineProperty(_assertThisInitialized(_this),"onPlaybackRateChange",(function(){var _this$props5;return(_this$props5=_this.props).onPlaybackRateChange.apply(_this$props5,arguments)})),_defineProperty(_assertThisInitialized(_this),"mute",(function(){_this.callPlayer("mute")})),_defineProperty(_assertThisInitialized(_this),"unmute",(function(){_this.callPlayer("unmute")})),_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(Wistia,[{key:"componentDidMount",value:function componentDidMount(){this.props.onMount&&this.props.onMount(this)}},{key:"load",value:function load(url){var _this2=this,_this$props6=this.props,playing=_this$props6.playing,muted=_this$props6.muted,controls=_this$props6.controls,_onReady=_this$props6.onReady,config=_this$props6.config,onError=_this$props6.onError;(0,_utils.getSDK)("https://fast.wistia.com/assets/external/E-v1.js","Wistia").then((function(Wistia){config.customControls&&config.customControls.forEach((function(control){return Wistia.defineControl(control)})),window._wq=window._wq||[],window._wq.push({id:_this2.playerID,options:_objectSpread({autoPlay:playing,silentAutoPlay:"allow",muted,controlsVisibleOnLoad:controls,fullscreenButton:controls,playbar:controls,playbackRateControl:controls,qualityControl:controls,volumeControl:controls,settingsControl:controls,smallPlayButton:controls},config.options),onReady:function onReady(player){_this2.player=player,_this2.unbind(),_this2.player.bind("play",_this2.onPlay),_this2.player.bind("pause",_this2.onPause),_this2.player.bind("seek",_this2.onSeek),_this2.player.bind("end",_this2.onEnded),_this2.player.bind("playbackratechange",_this2.onPlaybackRateChange),_onReady()}})}),onError)}},{key:"unbind",value:function unbind(){this.player.unbind("play",this.onPlay),this.player.unbind("pause",this.onPause),this.player.unbind("seek",this.onSeek),this.player.unbind("end",this.onEnded),this.player.unbind("playbackratechange",this.onPlaybackRateChange)}},{key:"play",value:function play(){this.callPlayer("play")}},{key:"pause",value:function pause(){this.callPlayer("pause")}},{key:"stop",value:function stop(){this.unbind(),this.callPlayer("remove")}},{key:"seekTo",value:function seekTo(seconds){this.callPlayer("time",seconds)}},{key:"setVolume",value:function setVolume(fraction){this.callPlayer("volume",fraction)}},{key:"setPlaybackRate",value:function setPlaybackRate(rate){this.callPlayer("playbackRate",rate)}},{key:"getDuration",value:function getDuration(){return this.callPlayer("duration")}},{key:"getCurrentTime",value:function getCurrentTime(){return this.callPlayer("time")}},{key:"getSecondsLoaded",value:function getSecondsLoaded(){return null}},{key:"render",value:function render(){var url=this.props.url,videoID=url&&url.match(_patterns.MATCH_URL_WISTIA)[1],className="wistia_embed wistia_async_".concat(videoID);return _react.default.createElement("div",{id:this.playerID,key:videoID,className,style:{width:"100%",height:"100%"}})}}]),Wistia}(_react.Component);exports.default=Wistia,_defineProperty(Wistia,"displayName","Wistia"),_defineProperty(Wistia,"canPlay",_patterns.canPlay.wistia),_defineProperty(Wistia,"loopOnEnded",!0)}}]);