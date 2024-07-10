const smileTracker=(function(){"use strict";const guid=(function(){function s4(){return Math.floor((1+Math.random())*0x10000).toString(16).substring(1);}
return function(){return s4()+s4()+'-'+s4()+'-'+s4()+'-'+
s4()+'-'+s4()+s4()+s4();};}());function getCookie(cookieName){const name=cookieName+"=";const ca=document.cookie.split(';');for(let i=0;i<ca.length;i++){let c=ca[i];while(c.charAt(0)===' '){c=c.substring(1);}
if(c.indexOf(name)!==-1){return c.substring(name.length,c.length);}}
return null;}
function setCookie(cookieName,cookieValue,expiresAt,path){const expires="expires="+expiresAt.toUTCString();document.cookie=cookieName+"="+cookieValue+"; "+expires+"; path="+path;}
function getQueryStringParameterByName(name){let results=null;if(name&&name.replace){name=name.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");const regex=new RegExp("[\\?&]"+name+"=([^&#]*)");results=regex.exec(window.location.search);}
return results===null?"":decodeURIComponent(results[1].replace(/\+/g," "));}
function addStandardPageVars(){this.addPageVar("site",window.location.hostname);this.addPageVar("url",window.location.pathname);this.addPageVar("title",document.title);}
function addCampaignVars(){const urlParams=['utm_source','utm_campaign','utm_medium','utm_term'];urlParams.forEach(function(element){const paramName=element;const paramValue=getQueryStringParameterByName(paramName);if(paramValue){this.addPageVar(paramName,paramValue);}}.bind(this));}
function addReferrerVars(){if(document.referrer){let parser=document.createElement('a');parser.href=document.referrer;this.addPageVar('referrer.domain',parser.hostname);this.addPageVar('referrer.page',parser.pathname);}}
function addResolutionVars(){this.addPageVar('resolution.x',window.screen.availWidth);this.addPageVar('resolution.y',window.screen.availHeight);return this;}
function addCustomerVars(customerData){getCustomerDataCodeToTrack().forEach(function(customerDataCode){if(customerData.hasOwnProperty('tracking')&&customerData.tracking.hasOwnProperty(customerDataCode)){this.addCustomerVar(customerDataCode,customerData.tracking[customerDataCode]);}}.bind(this));}
function addMetaPageVars(){const metaTags=document.getElementsByTagName('meta');for(let tagIndex=0;tagIndex<metaTags.length;tagIndex++){if(metaTags[tagIndex].getAttribute('name')){let components=metaTags[tagIndex].getAttribute('name').split(':');if(components.length===2&&components[0]==='sct'){let varName=components[1];this.addPageVar(varName,metaTags[tagIndex].getAttribute('content'));}}}}
function getTrackerVars(){if(this.trackerVarsAdded===false){addStandardPageVars.bind(this)();addReferrerVars.bind(this)();addCampaignVars.bind(this)();addMetaPageVars.bind(this)();addResolutionVars.bind(this)();this.trackerVarsAdded=true;}
let urlParams=[];for(let currentVar in this.vars){if({}.hasOwnProperty.call(this.vars,currentVar)){urlParams.push(currentVar+"="+this.vars[currentVar]);}}
return urlParams;}
function getTrackerPostVars(){if(this.trackerVarsAdded===false){addStandardPageVars.bind(this)();addReferrerVars.bind(this)();addCampaignVars.bind(this)();addMetaPageVars.bind(this)();addResolutionVars.bind(this)();this.trackerVarsAdded=true;}
Object.keys(this.vars).forEach(key=>{this.vars[key]=decodeURIComponent(this.vars[key]);});return bracketVarsToJson(this.vars);}
function getTrackerUrl(){let urlParams=getTrackerVars.bind(this)();return this.baseUrl+"?"+urlParams.join('&');}
function getCustomerDataCodeToTrack(){return['age','gender','zipcode','state','country'];}
function setTrackerStyle(imgNode){imgNode.setAttribute('style','position: absolute; top: 0; left: 0; visibility: hidden;');}
function sendTag(forceCollect=false){initSession.bind(this)();if(this.config&&this.config.hasOwnProperty('storeId')){addPageVar.bind(this)('store_id',this.config.storeId);}
if(this.trackerSent===false||forceCollect===true){if(this.endpointUrl){const eventData={'eventData':getTrackerPostVars.bind(this)()};let request=new XMLHttpRequest();request.open('POST',this.endpointUrl,true);request.setRequestHeader('Content-Type','application/json');request.send(JSON.stringify(eventData));}else{const bodyNode=document.getElementsByTagName('body')[0];buildTrackingImg.bind(this)(bodyNode,getTrackerUrl.bind(this)());}
this.trackerSent=true;this.vars={};}}
function sendTelemetry(){initSession.bind(this)();initCustomerData.bind(this)();getTrackerVars.bind(this);const vars=bracketVarsToJson(this.vars);if(this.telemetryEnabled&&this.telemetryTrackerSent===false){let request=new XMLHttpRequest();request.open('POST',this.telemetryUrl,true);request.setRequestHeader('Content-Type','application/json');request.send(JSON.stringify(vars));this.telemetryTrackerSent=true;}}
function bracketVarsToJson(vars){let result={};for(const i in vars){let a=i.match(/([^\[\]]+)(\[[^\[\]]+[^\]])*?/g),p=vars[i];let j=a.length;while(j--){let q={};q[a[j]]=p;p=q;}
let k=Object.keys(p)[0],o=result;while(k in o){p=p[k];o=o[k];k=Object.keys(p)[0];}
o[k]=p[k];}
return result;}
function buildTrackingImg(bodyNode,trackingUrl){let imgNode=document.createElement('img');imgNode.setAttribute('src',trackingUrl);imgNode.setAttribute('alt','');setTrackerStyle(imgNode);bodyNode.appendChild(imgNode);}
function addVariable(varName,value){this.vars[varName]=encodeURIComponent(value);return this;}
function addSessionVar(varName,value){addVariable.bind(this)(transformVarName.bind(this)(varName,'session'),value);}
function addPageVar(varName,value){addVariable.bind(this)(transformVarName.bind(this)(varName,'page'),value);}
function addCustomerVar(varName,value){addVariable.bind(this)(transformVarName.bind(this)(varName,'customer'),value);}
function transformVarName(varName,prefix){return prefix+"["+varName.replace(/[.]/g,"][")+"]";}
function initSession(){if(this.config&&this.config.hasOwnProperty('sessionConfig')){const config=this.config.sessionConfig;const expireAt=new Date();const path=config['path']||'/';if(!this.sessionInitialized){if(getCookie(config['visit_cookie_name'])===null){expireAt.setSeconds(expireAt.getSeconds()+parseInt(config['visit_cookie_lifetime'],10));setCookie(config['visit_cookie_name'],guid(),expireAt,path);}else{expireAt.setSeconds(expireAt.getSeconds()+parseInt(config['visit_cookie_lifetime'],10));setCookie(config['visit_cookie_name'],getCookie(config['visit_cookie_name']),expireAt,path);}
if(getCookie(config['visitor_cookie_name'])===null){expireAt.setDate(expireAt.getDate()+parseInt(config['visitor_cookie_lifetime'],10));setCookie(config['visitor_cookie_name'],guid(),expireAt,path);}
this.sessionInitialized=true;}
addSessionVar.bind(this)('uid',getCookie(config['visit_cookie_name']));addSessionVar.bind(this)('vid',getCookie(config['visitor_cookie_name']));}}
function initCustomerData(){try{let mageStorage=localStorage.getItem('mage-cache-storage');if(mageStorage!==null){mageStorage=JSON.parse(mageStorage);if((mageStorage.customer!==undefined)){addCustomerVars.bind(this)(mageStorage.customer);}}}catch(e){}}
const SmileTrackerImpl=function(){this.vars={};this.trackerSent=false;this.telemetryTrackerSent=false;this.trackerVarsAdded=false;this.sessionInitialized=false;this.customerData={};};SmileTrackerImpl.prototype.sendTag=function(forceCollect=false){if(document.readyState!=='loading'){sendTag.bind(this)(forceCollect);sendTelemetry.bind(this)();}else{document.addEventListener('DOMContentLoaded',function(){sendTag.bind(this)(forceCollect);sendTelemetry.bind(this)();}.bind(this));}};SmileTrackerImpl.prototype.setConfig=function(config){this.config=config;this.baseUrl=config.beaconUrl;this.endpointUrl=false;if(config.hasOwnProperty('endpointUrl')&&(config.endpointUrl.length!==0)){this.endpointUrl=config.endpointUrl;}
this.telemetryEnabled=config.telemetryEnabled;this.telemetryUrl=config.telemetryUrl;};SmileTrackerImpl.prototype.addPageVar=function(varName,value){addPageVar.bind(this)(varName,value);};SmileTrackerImpl.prototype.addCustomerVar=function(varName,value){addCustomerVar.bind(this)(varName,value);};SmileTrackerImpl.prototype.addSessionVar=function(varName,value){addSessionVar.bind(this)(varName,value);};return new SmileTrackerImpl();}());