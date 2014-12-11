var contextMenu = require("sdk/context-menu");
var {XMLHttpRequest} = require("sdk/net/xhr");
var oReq = new XMLHttpRequest();
oReq.open("GET", "https://translate.yandex.net/api/v1.5/tr/translate?key=trnsl.1.1.20140923T220833Z.85251e4830e6fb48.188428e6ac0aa98ae41929c3160370e5927a6688&lang=en-sq&text=look", false);
oReq.send(null);
var y = oReq.responseXML;
var x=y.getElementsByTagName("text")[0].childNodes[0].nodeValue;
console.log(x);
/*
function getHTML (oXHR, sTargetId) {
  var  rOpen = new RegExp("<(?!\!)\\s*([^\\s>]+)[^>]*\\s+id\\=[\"\']" + sTargetId + "[\"\'][^>]*>" ,"i"),
       sSrc = oXHR.responseText, aExec = rOpen.exec(sSrc);

  return aExec ? (new RegExp("(?:(?:.(?!<\\s*" + aExec[1] + "[^>]*[>]))*.?<\\s*" + aExec[1] + "[^>]*[>](?:.(?!<\\s*\/\\s*" + aExec[1] + "\\s*>))*.?<\\s*\/\\s*" + aExec[1] + "\\s*>)*(?:.(?!<\\s*\/\\s*" + aExec[1] + "\\s*>))*.?", "i")).exec(sSrc.slice(sSrc.indexOf(aExec[0]) + aExec[0].length)) || "" : "";
}

var oReq = new XMLHttpRequest();
oReq.open("GET", "https://translate.yandex.net/api/v1.5/tr/translate?key=trnsl.1.1.20140923T220833Z.85251e4830e6fb48.188428e6ac0aa98ae41929c3160370e5927a6688&lang=en-sq&text=look", true);
oReq.onload = function () { alert(getHTML(this, "intro")); };
oReq.send(null);


//xhr.open("GET","https://translate.yandex.net/api/v1.5/tr/translate?key=trnsl.1.1.20140923T220833Z.85251e4830e6fb48.188428e6ac0aa98ae41929c3160370e5927a6688&lang=en-sq&text=look", true);  
*/