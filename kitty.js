(function(){var l=new function(){this.encode=function(a){var f="",c,e=0;a=a.replace(/\r\n/g,"\n");var d="";for(c=0;c<a.length;c++){var b=a.charCodeAt(c);128>b?d+=String.fromCharCode(b):(127<b&&2048>b?d+=String.fromCharCode(b>>6|192):(d+=String.fromCharCode(b>>12|224),d+=String.fromCharCode(b>>6&63|128)),d+=String.fromCharCode(b&63|128))}for(a=d;e<a.length;){var g=a.charCodeAt(e++);d=a.charCodeAt(e++);c=a.charCodeAt(e++);b=g>>2;g=(g&3)<<4|d>>4;var h=(d&15)<<2|c>>6;var k=c&63;isNaN(d)?h=k=64:isNaN(c)&&
(k=64);f=f+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(b)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(g)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(h)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(k)}return f};this.decode=function(a){var f="",c=0;for(a=a.replace(/[^A-Za-z0-9\+\/=]/g,"");c<a.length;){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(c++));
var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(c++));var b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(c++));var g="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(c++));e=e<<2|d>>4;d=(d&15)<<4|b>>2;var h=(b&3)<<6|g;f+=String.fromCharCode(e);64!=b&&(f+=String.fromCharCode(d));64!=g&&(f+=String.fromCharCode(h))}a="";for(b=0;b<f.length;)g=f.charCodeAt(b),128>g?(a+=String.fromCharCode(g),
b++):191<g&&224>g?(c=f.charCodeAt(b+1),a+=String.fromCharCode((g&31)<<6|c&63),b+=2):(c=f.charCodeAt(b+1),e=f.charCodeAt(b+2),a+=String.fromCharCode((g&15)<<12|(c&63)<<6|e&63),b+=3);return a}};window.encode2=function(a,f,c,e){e=void 0===e?l.encode:e;return e(a).split("").map(function(d){return f[c.indexOf(d)]}).join("")};window.decode2=function(a,f,c,e){e=void 0===e?l.decode:e;a=a.split("]").slice(0,-1).map(function(d){return d+"]"}).map(function(d){return c[f.indexOf(d)]}).join("");return e(a)}})();
