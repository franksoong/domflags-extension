(function(){var t;this.toggleDomflag=function(t){return t.hasAttribute("domflag")?t.removeAttribute("domflag",""):t.setAttribute("domflag","")},new(t=function(){function t(){this.newURL=void 0,this.username=void 0,this.checkDomain()}return t.prototype.checkDomain=function(){var t,e;return e=window.location.pathname.split("/"),document.getElementById("postPinForm")&&"video-watch"===e[1]?(t=e[e.length-1],this.newURL="http://www.xtube.com/video-watch/embedded/"+t,this.username=document.querySelector(".userInfoRow .nickname").innerHTML,this.appendButton()):void 0},t.prototype.appendButton=function(){var t,e,n,o;return t=chrome.extension.getURL("src/inject/inject.css"),o='<style type="text/css" media="screen">@import url('+t+");</style>",e='<xpin-panel id="xpin-panel" class="bottom">\n  <a class="pin" href="'+this.newURL+'">BYPASS PIN</a>\n  <a class="search" href="https://www.google.com/search?q=site:xtube.com+%22PIN%22+'+this.username+'">MORE...</a>\n</xpin-panel>',null==document.getElementById("xpin-root")&&(n=document.createElement("xpin"),n.setAttribute("id","xpin-root"),document.body.appendChild(n,document.body.childNodes[0]),this.shadowRoot=document.getElementById("xpin-root").createShadowRoot(),this.shadowRoot.innerHTML=o),this.shadowRoot.innerHTML+=e},t}())}).call(this);