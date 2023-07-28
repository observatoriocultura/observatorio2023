import{r as pe,c as Oe,o as Fe,a as Z,b as X,d as r,w as ne,v as ze,e as oe,t as P,f as Ce,F as we,g as Ie,h as Ae,n as Le}from"./index-2939dd85.js";import Pe from"images/app/orfeo.png";const Me="/images/app/logo-dogcc-yellow.png";var qe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ue(re){return re&&re.__esModule&&Object.prototype.hasOwnProperty.call(re,"default")?re.default:re}var Se={exports:{}};/* @license
Papa Parse
v5.4.1
https://github.com/mholt/PapaParse
License: MIT
*/(function(re,_e){(function(be,b){re.exports=b()})(qe,function be(){var b=typeof self<"u"?self:typeof window<"u"?window:b!==void 0?b:{},N=!b.document&&!!b.postMessage,D=b.IS_PAPA_WORKER||!1,$={},xe=0,d={parse:function(t,e){var n=(e=e||{}).dynamicTyping||!1;if(v(n)&&(e.dynamicTypingFunction=n,n={}),e.dynamicTyping=n,e.transform=!!v(e.transform)&&e.transform,e.worker&&d.WORKERS_SUPPORTED){var i=function(){if(!d.WORKERS_SUPPORTED)return!1;var c=(F=b.URL||b.webkitURL||null,I=be.toString(),d.BLOB_URL||(d.BLOB_URL=F.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",I,")();"],{type:"text/javascript"})))),f=new b.Worker(c),F,I;return f.onmessage=E,f.id=xe++,$[f.id]=f}();return i.userStep=e.step,i.userChunk=e.chunk,i.userComplete=e.complete,i.userError=e.error,e.step=v(e.step),e.chunk=v(e.chunk),e.complete=v(e.complete),e.error=v(e.error),delete e.worker,void i.postMessage({input:t,config:e,workerId:i.id})}var a=null;return d.NODE_STREAM_INPUT,typeof t=="string"?(t=function(c){return c.charCodeAt(0)===65279?c.slice(1):c}(t),a=e.download?new ge(e):new ue(e)):t.readable===!0&&v(t.read)&&v(t.on)?a=new ce(e):(b.File&&t instanceof File||t instanceof Object)&&(a=new ve(e)),a.stream(t)},unparse:function(t,e){var n=!1,i=!0,a=",",c=`\r
`,f='"',F=f+f,I=!1,o=null,O=!1;(function(){if(typeof e=="object"){if(typeof e.delimiter!="string"||d.BAD_DELIMITERS.filter(function(s){return e.delimiter.indexOf(s)!==-1}).length||(a=e.delimiter),(typeof e.quotes=="boolean"||typeof e.quotes=="function"||Array.isArray(e.quotes))&&(n=e.quotes),typeof e.skipEmptyLines!="boolean"&&typeof e.skipEmptyLines!="string"||(I=e.skipEmptyLines),typeof e.newline=="string"&&(c=e.newline),typeof e.quoteChar=="string"&&(f=e.quoteChar),typeof e.header=="boolean"&&(i=e.header),Array.isArray(e.columns)){if(e.columns.length===0)throw new Error("Option columns is empty");o=e.columns}e.escapeChar!==void 0&&(F=e.escapeChar+f),(typeof e.escapeFormulae=="boolean"||e.escapeFormulae instanceof RegExp)&&(O=e.escapeFormulae instanceof RegExp?e.escapeFormulae:/^[=+\-@\t\r].*$/)}})();var u=new RegExp(de(f),"g");if(typeof t=="string"&&(t=JSON.parse(t)),Array.isArray(t)){if(!t.length||Array.isArray(t[0]))return J(null,t,I);if(typeof t[0]=="object")return J(o||Object.keys(t[0]),t,I)}else if(typeof t=="object")return typeof t.data=="string"&&(t.data=JSON.parse(t.data)),Array.isArray(t.data)&&(t.fields||(t.fields=t.meta&&t.meta.fields||o),t.fields||(t.fields=Array.isArray(t.data[0])?t.fields:typeof t.data[0]=="object"?Object.keys(t.data[0]):[]),Array.isArray(t.data[0])||typeof t.data[0]=="object"||(t.data=[t.data])),J(t.fields||[],t.data||[],I);throw new Error("Unable to serialize unrecognized input");function J(s,k,q){var x="";typeof s=="string"&&(s=JSON.parse(s)),typeof k=="string"&&(k=JSON.parse(k));var z=Array.isArray(s)&&0<s.length,L=!Array.isArray(k[0]);if(z&&i){for(var S=0;S<s.length;S++)0<S&&(x+=a),x+=M(s[S],S);0<k.length&&(x+=c)}for(var l=0;l<k.length;l++){var _=z?s.length:k[l].length,C=!1,A=z?Object.keys(k[l]).length===0:k[l].length===0;if(q&&!z&&(C=q==="greedy"?k[l].join("").trim()==="":k[l].length===1&&k[l][0].length===0),q==="greedy"&&z){for(var m=[],U=0;U<_;U++){var T=L?s[U]:U;m.push(k[l][T])}C=m.join("").trim()===""}if(!C){for(var y=0;y<_;y++){0<y&&!A&&(x+=a);var G=z&&L?s[y]:y;x+=M(k[l][G],y)}l<k.length-1&&(!q||0<_&&!A)&&(x+=c)}}return x}function M(s,k){if(s==null)return"";if(s.constructor===Date)return JSON.stringify(s).slice(1,25);var q=!1;O&&typeof s=="string"&&O.test(s)&&(s="'"+s,q=!0);var x=s.toString().replace(u,F);return(q=q||n===!0||typeof n=="function"&&n(s,k)||Array.isArray(n)&&n[k]||function(z,L){for(var S=0;S<L.length;S++)if(-1<z.indexOf(L[S]))return!0;return!1}(x,d.BAD_DELIMITERS)||-1<x.indexOf(a)||x.charAt(0)===" "||x.charAt(x.length-1)===" ")?f+x+f:x}}};if(d.RECORD_SEP=String.fromCharCode(30),d.UNIT_SEP=String.fromCharCode(31),d.BYTE_ORDER_MARK="\uFEFF",d.BAD_DELIMITERS=["\r",`
`,'"',d.BYTE_ORDER_MARK],d.WORKERS_SUPPORTED=!N&&!!b.Worker,d.NODE_STREAM_INPUT=1,d.LocalChunkSize=10485760,d.RemoteChunkSize=5242880,d.DefaultDelimiter=",",d.Parser=me,d.ParserHandle=ke,d.NetworkStreamer=ge,d.FileStreamer=ve,d.StringStreamer=ue,d.ReadableStreamStreamer=ce,b.jQuery){var le=b.jQuery;le.fn.parse=function(t){var e=t.config||{},n=[];return this.each(function(c){if(!(le(this).prop("tagName").toUpperCase()==="INPUT"&&le(this).attr("type").toLowerCase()==="file"&&b.FileReader)||!this.files||this.files.length===0)return!0;for(var f=0;f<this.files.length;f++)n.push({file:this.files[f],inputElem:this,instanceConfig:le.extend({},e)})}),i(),this;function i(){if(n.length!==0){var c,f,F,I,o=n[0];if(v(t.before)){var O=t.before(o.file,o.inputElem);if(typeof O=="object"){if(O.action==="abort")return c="AbortError",f=o.file,F=o.inputElem,I=O.reason,void(v(t.error)&&t.error({name:c},f,F,I));if(O.action==="skip")return void a();typeof O.config=="object"&&(o.instanceConfig=le.extend(o.instanceConfig,O.config))}else if(O==="skip")return void a()}var u=o.instanceConfig.complete;o.instanceConfig.complete=function(J){v(u)&&u(J,o.file,o.inputElem),a()},d.parse(o.file,o.instanceConfig)}else v(t.complete)&&t.complete()}function a(){n.splice(0,1),i()}}}function B(t){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(e){var n=j(e);n.chunkSize=parseInt(n.chunkSize),e.step||e.chunk||(n.chunkSize=null),this._handle=new ke(n),(this._handle.streamer=this)._config=n}).call(this,t),this.parseChunk=function(e,n){if(this.isFirstChunk&&v(this._config.beforeFirstChunk)){var i=this._config.beforeFirstChunk(e);i!==void 0&&(e=i)}this.isFirstChunk=!1,this._halted=!1;var a=this._partialLine+e;this._partialLine="";var c=this._handle.parse(a,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var f=c.meta.cursor;this._finished||(this._partialLine=a.substring(f-this._baseIndex),this._baseIndex=f),c&&c.data&&(this._rowCount+=c.data.length);var F=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(D)b.postMessage({results:c,workerId:d.WORKER_ID,finished:F});else if(v(this._config.chunk)&&!n){if(this._config.chunk(c,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);c=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(c.data),this._completeResults.errors=this._completeResults.errors.concat(c.errors),this._completeResults.meta=c.meta),this._completed||!F||!v(this._config.complete)||c&&c.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),F||c&&c.meta.paused||this._nextChunk(),c}this._halted=!0},this._sendError=function(e){v(this._config.error)?this._config.error(e):D&&this._config.error&&b.postMessage({workerId:d.WORKER_ID,error:e,finished:!1})}}function ge(t){var e;(t=t||{}).chunkSize||(t.chunkSize=d.RemoteChunkSize),B.call(this,t),this._nextChunk=N?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(n){this._input=n,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(e=new XMLHttpRequest,this._config.withCredentials&&(e.withCredentials=this._config.withCredentials),N||(e.onload=H(this._chunkLoaded,this),e.onerror=H(this._chunkError,this)),e.open(this._config.downloadRequestBody?"POST":"GET",this._input,!N),this._config.downloadRequestHeaders){var n=this._config.downloadRequestHeaders;for(var i in n)e.setRequestHeader(i,n[i])}if(this._config.chunkSize){var a=this._start+this._config.chunkSize-1;e.setRequestHeader("Range","bytes="+this._start+"-"+a)}try{e.send(this._config.downloadRequestBody)}catch(c){this._chunkError(c.message)}N&&e.status===0&&this._chunkError()}},this._chunkLoaded=function(){e.readyState===4&&(e.status<200||400<=e.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:e.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(n){var i=n.getResponseHeader("Content-Range");return i===null?-1:parseInt(i.substring(i.lastIndexOf("/")+1))}(e),this.parseChunk(e.responseText)))},this._chunkError=function(n){var i=e.statusText||n;this._sendError(new Error(i))}}function ve(t){var e,n;(t=t||{}).chunkSize||(t.chunkSize=d.LocalChunkSize),B.call(this,t);var i=typeof FileReader<"u";this.stream=function(a){this._input=a,n=a.slice||a.webkitSlice||a.mozSlice,i?((e=new FileReader).onload=H(this._chunkLoaded,this),e.onerror=H(this._chunkError,this)):e=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var a=this._input;if(this._config.chunkSize){var c=Math.min(this._start+this._config.chunkSize,this._input.size);a=n.call(a,this._start,c)}var f=e.readAsText(a,this._config.encoding);i||this._chunkLoaded({target:{result:f}})},this._chunkLoaded=function(a){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(a.target.result)},this._chunkError=function(){this._sendError(e.error)}}function ue(t){var e;B.call(this,t=t||{}),this.stream=function(n){return e=n,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var n,i=this._config.chunkSize;return i?(n=e.substring(0,i),e=e.substring(i)):(n=e,e=""),this._finished=!e,this.parseChunk(n)}}}function ce(t){B.call(this,t=t||{});var e=[],n=!0,i=!1;this.pause=function(){B.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){B.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(a){this._input=a,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){i&&e.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),e.length?this.parseChunk(e.shift()):n=!0},this._streamData=H(function(a){try{e.push(typeof a=="string"?a:a.toString(this._config.encoding)),n&&(n=!1,this._checkIsFinished(),this.parseChunk(e.shift()))}catch(c){this._streamError(c)}},this),this._streamError=H(function(a){this._streamCleanUp(),this._sendError(a)},this),this._streamEnd=H(function(){this._streamCleanUp(),i=!0,this._streamData("")},this),this._streamCleanUp=H(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function ke(t){var e,n,i,a=Math.pow(2,53),c=-a,f=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,F=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,I=this,o=0,O=0,u=!1,J=!1,M=[],s={data:[],errors:[],meta:{}};if(v(t.step)){var k=t.step;t.step=function(l){if(s=l,z())x();else{if(x(),s.data.length===0)return;o+=l.data.length,t.preview&&o>t.preview?n.abort():(s.data=s.data[0],k(s,I))}}}function q(l){return t.skipEmptyLines==="greedy"?l.join("").trim()==="":l.length===1&&l[0].length===0}function x(){return s&&i&&(S("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+d.DefaultDelimiter+"'"),i=!1),t.skipEmptyLines&&(s.data=s.data.filter(function(l){return!q(l)})),z()&&function(){if(!s)return;function l(C,A){v(t.transformHeader)&&(C=t.transformHeader(C,A)),M.push(C)}if(Array.isArray(s.data[0])){for(var _=0;z()&&_<s.data.length;_++)s.data[_].forEach(l);s.data.splice(0,1)}else s.data.forEach(l)}(),function(){if(!s||!t.header&&!t.dynamicTyping&&!t.transform)return s;function l(C,A){var m,U=t.header?{}:[];for(m=0;m<C.length;m++){var T=m,y=C[m];t.header&&(T=m>=M.length?"__parsed_extra":M[m]),t.transform&&(y=t.transform(y,T)),y=L(T,y),T==="__parsed_extra"?(U[T]=U[T]||[],U[T].push(y)):U[T]=y}return t.header&&(m>M.length?S("FieldMismatch","TooManyFields","Too many fields: expected "+M.length+" fields but parsed "+m,O+A):m<M.length&&S("FieldMismatch","TooFewFields","Too few fields: expected "+M.length+" fields but parsed "+m,O+A)),U}var _=1;return!s.data.length||Array.isArray(s.data[0])?(s.data=s.data.map(l),_=s.data.length):s.data=l(s.data,0),t.header&&s.meta&&(s.meta.fields=M),O+=_,s}()}function z(){return t.header&&M.length===0}function L(l,_){return C=l,t.dynamicTypingFunction&&t.dynamicTyping[C]===void 0&&(t.dynamicTyping[C]=t.dynamicTypingFunction(C)),(t.dynamicTyping[C]||t.dynamicTyping)===!0?_==="true"||_==="TRUE"||_!=="false"&&_!=="FALSE"&&(function(A){if(f.test(A)){var m=parseFloat(A);if(c<m&&m<a)return!0}return!1}(_)?parseFloat(_):F.test(_)?new Date(_):_===""?null:_):_;var C}function S(l,_,C,A){var m={type:l,code:_,message:C};A!==void 0&&(m.row=A),s.errors.push(m)}this.parse=function(l,_,C){var A=t.quoteChar||'"';if(t.newline||(t.newline=function(T,y){T=T.substring(0,1048576);var G=new RegExp(de(y)+"([^]*?)"+de(y),"gm"),K=(T=T.replace(G,"")).split("\r"),Y=T.split(`
`),ee=1<Y.length&&Y[0].length<K[0].length;if(K.length===1||ee)return`
`;for(var W=0,w=0;w<K.length;w++)K[w][0]===`
`&&W++;return W>=K.length/2?`\r
`:"\r"}(l,A)),i=!1,t.delimiter)v(t.delimiter)&&(t.delimiter=t.delimiter(l),s.meta.delimiter=t.delimiter);else{var m=function(T,y,G,K,Y){var ee,W,w,R;Y=Y||[",","	","|",";",d.RECORD_SEP,d.UNIT_SEP];for(var he=0;he<Y.length;he++){var g=Y[he],ye=0,te=0,fe=0;w=void 0;for(var ie=new me({comments:K,delimiter:g,newline:y,preview:10}).parse(T),se=0;se<ie.data.length;se++)if(G&&q(ie.data[se]))fe++;else{var ae=ie.data[se].length;te+=ae,w!==void 0?0<ae&&(ye+=Math.abs(ae-w),w=ae):w=ae}0<ie.data.length&&(te/=ie.data.length-fe),(W===void 0||ye<=W)&&(R===void 0||R<te)&&1.99<te&&(W=ye,ee=g,R=te)}return{successful:!!(t.delimiter=ee),bestDelimiter:ee}}(l,t.newline,t.skipEmptyLines,t.comments,t.delimitersToGuess);m.successful?t.delimiter=m.bestDelimiter:(i=!0,t.delimiter=d.DefaultDelimiter),s.meta.delimiter=t.delimiter}var U=j(t);return t.preview&&t.header&&U.preview++,e=l,n=new me(U),s=n.parse(e,_,C),x(),u?{meta:{paused:!0}}:s||{meta:{paused:!1}}},this.paused=function(){return u},this.pause=function(){u=!0,n.abort(),e=v(t.chunk)?"":e.substring(n.getCharIndex())},this.resume=function(){I.streamer._halted?(u=!1,I.streamer.parseChunk(e,!0)):setTimeout(I.resume,3)},this.aborted=function(){return J},this.abort=function(){J=!0,n.abort(),s.meta.aborted=!0,v(t.complete)&&t.complete(s),e=""}}function de(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function me(t){var e,n=(t=t||{}).delimiter,i=t.newline,a=t.comments,c=t.step,f=t.preview,F=t.fastMode,I=e=t.quoteChar===void 0||t.quoteChar===null?'"':t.quoteChar;if(t.escapeChar!==void 0&&(I=t.escapeChar),(typeof n!="string"||-1<d.BAD_DELIMITERS.indexOf(n))&&(n=","),a===n)throw new Error("Comment character same as delimiter");a===!0?a="#":(typeof a!="string"||-1<d.BAD_DELIMITERS.indexOf(a))&&(a=!1),i!==`
`&&i!=="\r"&&i!==`\r
`&&(i=`
`);var o=0,O=!1;this.parse=function(u,J,M){if(typeof u!="string")throw new Error("Input must be a string");var s=u.length,k=n.length,q=i.length,x=a.length,z=v(c),L=[],S=[],l=[],_=o=0;if(!u)return V();if(t.header&&!J){var C=u.split(i)[0].split(n),A=[],m={},U=!1;for(var T in C){var y=C[T];v(t.transformHeader)&&(y=t.transformHeader(y,T));var G=y,K=m[y]||0;for(0<K&&(U=!0,G=y+"_"+K),m[y]=K+1;A.includes(G);)G=G+"_"+K;A.push(G)}if(U){var Y=u.split(i);Y[0]=A.join(n),u=Y.join(i)}}if(F||F!==!1&&u.indexOf(e)===-1){for(var ee=u.split(i),W=0;W<ee.length;W++){if(l=ee[W],o+=l.length,W!==ee.length-1)o+=i.length;else if(M)return V();if(!a||l.substring(0,x)!==a){if(z){if(L=[],fe(l.split(n)),Ee(),O)return V()}else fe(l.split(n));if(f&&f<=W)return L=L.slice(0,f),V(!0)}}return V()}for(var w=u.indexOf(n,o),R=u.indexOf(i,o),he=new RegExp(de(I)+de(e),"g"),g=u.indexOf(e,o);;)if(u[o]!==e)if(a&&l.length===0&&u.substring(o,o+x)===a){if(R===-1)return V();o=R+q,R=u.indexOf(i,o),w=u.indexOf(n,o)}else if(w!==-1&&(w<R||R===-1))l.push(u.substring(o,w)),o=w+k,w=u.indexOf(n,o);else{if(R===-1)break;if(l.push(u.substring(o,R)),ae(R+q),z&&(Ee(),O))return V();if(f&&L.length>=f)return V(!0)}else for(g=o,o++;;){if((g=u.indexOf(e,g+1))===-1)return M||S.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:L.length,index:o}),se();if(g===s-1)return se(u.substring(o,g).replace(he,e));if(e!==I||u[g+1]!==I){if(e===I||g===0||u[g-1]!==I){w!==-1&&w<g+1&&(w=u.indexOf(n,g+1)),R!==-1&&R<g+1&&(R=u.indexOf(i,g+1));var ye=ie(R===-1?w:Math.min(w,R));if(u.substr(g+1+ye,k)===n){l.push(u.substring(o,g).replace(he,e)),u[o=g+1+ye+k]!==e&&(g=u.indexOf(e,o)),w=u.indexOf(n,o),R=u.indexOf(i,o);break}var te=ie(R);if(u.substring(g+1+te,g+1+te+q)===i){if(l.push(u.substring(o,g).replace(he,e)),ae(g+1+te+q),w=u.indexOf(n,o),g=u.indexOf(e,o),z&&(Ee(),O))return V();if(f&&L.length>=f)return V(!0);break}S.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:L.length,index:o}),g++}}else g++}return se();function fe(Q){L.push(Q),_=o}function ie(Q){var Re=0;if(Q!==-1){var De=u.substring(g+1,Q);De&&De.trim()===""&&(Re=De.length)}return Re}function se(Q){return M||(Q===void 0&&(Q=u.substring(o)),l.push(Q),o=s,fe(l),z&&Ee()),V()}function ae(Q){o=Q,fe(l),l=[],R=u.indexOf(i,o)}function V(Q){return{data:L,errors:S,meta:{delimiter:n,linebreak:i,aborted:O,truncated:!!Q,cursor:_+(J||0)}}}function Ee(){c(V()),L=[],S=[]}},this.abort=function(){O=!0},this.getCharIndex=function(){return o}}function E(t){var e=t.data,n=$[e.workerId],i=!1;if(e.error)n.userError(e.error,e.file);else if(e.results&&e.results.data){var a={abort:function(){i=!0,h(e.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:p,resume:p};if(v(n.userStep)){for(var c=0;c<e.results.data.length&&(n.userStep({data:e.results.data[c],errors:e.results.errors,meta:e.results.meta},a),!i);c++);delete e.results}else v(n.userChunk)&&(n.userChunk(e.results,a,e.file),delete e.results)}e.finished&&!i&&h(e.workerId,e.results)}function h(t,e){var n=$[t];v(n.userComplete)&&n.userComplete(e),n.terminate(),delete $[t]}function p(){throw new Error("Not implemented.")}function j(t){if(typeof t!="object"||t===null)return t;var e=Array.isArray(t)?[]:{};for(var n in t)e[n]=j(t[n]);return e}function H(t,e){return function(){t.apply(e,arguments)}}function v(t){return typeof t=="function"}return D&&(b.onmessage=function(t){var e=t.data;if(d.WORKER_ID===void 0&&e&&(d.WORKER_ID=e.workerId),typeof e.input=="string")b.postMessage({workerId:d.WORKER_ID,results:d.parse(e.input,e.config),finished:!0});else if(b.File&&e.input instanceof File||e.input instanceof Object){var n=d.parse(e.input,e.config);n&&b.postMessage({workerId:d.WORKER_ID,results:n,finished:!0})}}),(ge.prototype=Object.create(B.prototype)).constructor=ge,(ve.prototype=Object.create(B.prototype)).constructor=ve,(ue.prototype=Object.create(ue.prototype)).constructor=ue,(ce.prototype=Object.create(B.prototype)).constructor=ce,d})})(Se);var je=Se.exports;const Te=Ue(je);const Ne={class:"container"},Be=r("h1",{class:"text-center"},"Plan Anual de Investigaciones 2023",-1),He={class:"mb-2 d-flex justify-content-center"},Ke={class:"input-group",style:{"max-width":"320px"}},We=r("i",{class:"fas fa-times"},null,-1),Ve=[We],Qe={class:"text-center my-2"},$e={class:"text-primary"},Je={class:"text-center my-2"},Ge={class:"text-primary"},Ze={class:"d-flex mb-2 justify-content-center"},Xe={class:""},Ye=["onClick","title"],et={class:"table bg-white"},tt=r("thead",null,[r("tr",null,[r("th",null,"Núm"),r("th",{class:"only-lg"},"Solicitante"),r("th",null,"Investigación")])],-1),nt={class:"text-center"},rt={class:"only-lg"},it=r("br",null,null,-1),st=["onClick"],at=r("br",null,null,-1),ot={class:"only-lg"},lt=r("i",{class:"fas fa-arrow-left"},null,-1),ut={class:"ficha shadow mb-3"},ct={class:"ficha-header d-flex justify-content-between"},dt={style:{"border-left":"3em solid #ffb80c","margin-left":"3em"},class:"p-2"},ht=r("img",{class:"logo-orfeo",src:Pe,alt:"Logo Orfeo"},null,-1),ft=r("strong",null,"Orfeo",-1),pt=r("br",null,null,-1),_t={title:"Expediente documental en Orfeo"},gt=r("div",{class:"p-2 only-lg"},[r("img",{class:"logo-dogcc",src:Me,alt:"Logo Observatorio de Cultura"})],-1),vt={class:"ficha-body"},mt={class:"row"},yt={class:"col-md-6"},bt={class:"title"},kt={class:"col-md-6"},Ct={key:0},wt={width:"65px",class:"text-center"},Et=["title"],It=["href"],xt=["innerHTML"],Dt=["href"],Ot=r("br",null,null,-1),Tt=r("td",null,null,-1),Rt={key:0,class:"center_box_800"},At=r("h3",{class:"text-center"},"Datos clave",-1),Lt=r("p",{class:"text-center"},"Hallazgos destacados como resultado de la investigación",-1),St={class:"table bg-white"},Ft={class:"hallazgo-number"},Mt={__name:"Investigaciones",setup(re){const _e=pe([]),be=pe([]),b=pe([]),N=pe("table");pe(0);const D=pe({ID:-1,Código:"-",Título:"-",Descripción:"-"}),$=pe({q:"feria",entidad:""}),xe=()=>{const E="/data/pai_investigaciones.csv";Te.parse(E,{download:!0,header:!0,complete:h=>{_e.value=h.data}})},d=()=>{const E="/data/pai_productos.csv";Te.parse(E,{download:!0,header:!0,complete:h=>{be.value=h.data}})},le=()=>{const E="/data/pai_hallazgos.csv";Te.parse(E,{download:!0,header:!0,complete:h=>{b.value=h.data}})},B=E=>{console.log(E),D.value=_e.value.find(h=>h.ID==E),N.value="details"},ge=()=>{N.value="table"},ve=()=>{N.value="table"},ue=E=>{let h=[];return h["Informe final"]="fa-solid fa-file-lines producto-pdf",h["Informe cuantitativo"]="fa-solid fa-file-lines producto-cuantitativo",h["Base de datos"]="fa-solid fa-table producto-db",h.Presentación="fa-solid fa-display producto-presentacion",h.Anexo="fa-solid fa-file producto-general",h["Visualización/Infografía"]="fa-solid fa-chart-simple producto-dataviz",h.Audiovisual="fa-solid fa-circle-play producto-audiovisual",'<i class="'+h[E]+'"></i>'},ce=E=>{let h="status-nd";return E.Estado=="Sin iniciar"&&(h="status-sin-iniciar"),E.Estado=="En espera"&&(h="status-en-espera"),E.Estado=="En ejecución"&&(h="status-en-ejecucion"),E.Estado=="Finalizada"&&(h="status-finalizada"),E.ID==D.value.ID&&(h+=" active"),h},ke=Oe(()=>_e.value.filter(h=>{const p=h.Código.toLowerCase().includes($.value.q.toLowerCase()),j=h.Título.toLowerCase().includes($.value.q.toLowerCase()),H=h.Descripción.toLowerCase().includes($.value.q.toLowerCase());return p||j||H})),de=Oe(()=>(console.log("Filtrando",D.value.ID),be.value.filter(h=>h["ID Investigación"]==D.value.ID&&h.Orden>0))),me=Oe(()=>(console.log("Filtrando",D.value.ID),b.value.filter(h=>h["ID Investigación"]==D.value.ID)));return Fe(()=>{xe(),d(),le()}),(E,h)=>(Z(),X("div",Ne,[Be,r("div",He,[r("div",Ke,[ne(r("input",{type:"text",name:"q","onUpdate:modelValue":h[0]||(h[0]=p=>$.value.q=p),class:"form-control",placeholder:"Buscar",autofocus:"",onChange:ve},null,544),[[ze,$.value.q]]),r("button",{class:"btn btn-light",type:"button",onClick:h[1]||(h[1]=p=>$.value.q="")},Ve)])]),ne(r("div",Qe,[r("span",$e,P(ke.value.length),1),Ce(" de "+P(_e.value.length),1)],512),[[oe,N.value=="table"]]),ne(r("div",Je,[Ce(" ID Investigación · "),r("strong",Ge,P(D.value.ID),1)],512),[[oe,N.value=="details"]]),r("div",Ze,[r("div",Xe,[(Z(!0),X(we,null,Ie(_e.value,(p,j)=>(Z(),X("button",{type:"button",class:Le(["investigacion-sqr me-1",ce(p)]),key:j,onClick:H=>B(p.ID),title:p.Código},null,10,Ye))),128))])]),ne(r("table",et,[tt,r("tbody",null,[(Z(!0),X(we,null,Ie(ke.value,(p,j)=>(Z(),X("tr",{key:j},[r("td",nt,P(p.ID),1),r("td",rt,[Ce(P(p.ENTIDAD)+" ",1),it,Ce(" "+P(p["Dirección/Dependencia"]),1)]),r("td",null,[r("a",{type:"button",class:"investigacion-title",onClick:H=>B(p.ID)},P(p.Código),9,st),at,r("span",{class:Le(["badge",ce(p)])},P(p.Estado),3),r("p",ot,P(p["Objetivo de la investigación"]),1)])]))),128))])],512),[[oe,N.value=="table"]]),ne(r("div",null,[r("button",{type:"button",class:"btn btn-sm btn-light mb-2",onClick:ge},[lt,Ce(" Volver ")]),r("div",ut,[r("div",ct,[r("div",dt,[ht,ft,pt,r("span",_t,P(D.value.EXPEDIENTE),1)]),gt]),r("div",vt,[r("div",mt,[r("div",yt,[r("h3",bt,[ne(r("span",null,P(D.value.Código),513),[[oe,D.value.Título.length==0]]),ne(r("span",null,P(D.value.Título),513),[[oe,D.value.Título.length>0]])]),ne(r("p",null,P(D.value["Objetivo de la investigación"]),513),[[oe,D.value.Descripción.length==0]]),ne(r("p",null,P(D.value.Descripción),513),[[oe,D.value.Descripción.length>0]])]),r("div",kt,[r("table",null,[r("tbody",null,[(Z(!0),X(we,null,Ie(de.value,(p,j)=>(Z(),X(we,{key:j},[D.value.ID==p["ID Investigación"]?(Z(),X("tr",Ct,[r("td",wt,[r("div",{class:"icon-container",title:p["Tipo producto"]},[r("a",{href:p["Link para ficha"],target:"_blank"},[r("span",{innerHTML:ue(p["Tipo producto"])},null,8,xt)],8,It)],8,Et)]),r("td",null,[r("a",{href:p["Link para ficha"],target:"_blank"},P(p.Título),9,Dt),Ot]),Tt])):Ae("",!0)],64))),128))])])])])])]),me.value.length>0?(Z(),X("div",Rt,[At,Lt,r("table",St,[r("tbody",null,[(Z(!0),X(we,null,Ie(me.value,(p,j)=>(Z(),X("tr",{key:j},[r("td",Ft,P(j+1),1),r("td",null,P(p["Texto hallazgo"]),1)]))),128))])])])):Ae("",!0)],512),[[oe,N.value=="details"]])]))}};export{Mt as default};
