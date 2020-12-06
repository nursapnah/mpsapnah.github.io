// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["dojo/on","dojo/keys","dojo/_base/lang","dojo/_base/html","jimu/utils"],function(f,k,g,e,h){var d={background:{setStyle:function(a,b,c){if(!a)return{};b||(b={});d.background.setBackgroundColor(a,b);d.background.setAlignment(a,b);d.background.setLink(a,b,c)},setBackgroundColor:function(a,b){a.backgroundColor&&(b.backgroundColor=a.backgroundColor)},setAlignment:function(a,b){if(a.alignment){if(a.alignment.horizontal)switch(a.alignment.horizontal){case "left":b.textAlign="left";break;case "center":b.textAlign=
"center";break;case "right":b.textAlign="right";break;default:b.textAlign="center"}if(a.alignment.vertical)switch(b.display="table-cell",a.alignment.vertical){case "top":b.verticalAlign="top";break;case "middle":b.verticalAlign="middle";break;case "bottom":b.verticalAlign="bottom";break;default:b.verticalAlign="middle"}}},setLink:function(a,b,c){c.clickHanlder&&(c.clickHanlder[0]&&c.clickHanlder[0].remove(),c.clickHanlder=null,this.keydownHanlder&&c.keydownHanlder[0]&&c.keydownHanlder[0].remove(),
c.keydownHanlder=null,b.cursor="auto");a.link?(c.clickHanlder=c.own(f(c.domNode,"click",g.hitch(c,function(){window.open(a.link)}))),c.keydownHanlder=c.own(f(c.domNode,"keydown",g.hitch(c,function(){event.keyCode===k.ENTER&&window.open(a.link)}))),b.cursor="pointer",e.addClass(c.domNode,"has-link"),e.setAttr(c.domNode,"tabindex","0"),e.setAttr(c.domNode,"role","link"),"undefined"!==typeof a.alt&&e.setAttr(c.domNode,"aria-label",a.alt)):(e.removeClass(c.domNode,"has-link"),e.removeAttr(c.domNode,"tabindex"),
e.removeAttr(c.domNode,"role"),"undefined"===typeof a.alt&&e.removeAttr(c.domNode,"aria-label"))}},font:{setText:function(a,b){var c="";a.text&&(c=a.text);b.innerDom.innerHTML=h.sanitizeHTML(c)},setStyle:function(a,b){if(!a)return{};b||(b={});d.font.setFont(a,b);d.font.setTextColor(a,b);d.font.setFontSize(a,b)},setFont:function(a,b){b.fontWeight="normal";b.fontStyle="normal";b.textDecoration="none";a.font&&(a.font.fontFamily&&(b.fontFamily=a.font.fontFamily),a.font.bold&&(b.fontWeight="bold"),a.font.italic&&
(b.fontStyle="italic"),a.font.underline&&(b.textDecoration="underline"))},setTextColor:function(a,b){a.textColor&&(b.color=a.textColor)},setFontSize:function(a,b){a.fontSize&&(b.fontSize=a.fontSize+"px")}},image:{setStyle:function(a,b,c){if(!a)return{};b||(b={});d.image.setBackgroundImg(a,b,c);d.image.setAlignment(a,b)},setBackgroundImg:function(a,b,c){var d="";if(d=a&&!a.image&&c&&c.folderUrl?"url("+c.folderUrl+"/images/default_image.png)":"url("+h.processUrlInWidgetConfig(a.image,c.folderUrl)+")")b.backgroundImage=
d,b.backgroundRepeat="no-repeat",b.backgroundSize="contain"},setAlignment:function(a,b){if(a&&a.background){var c="center",d="center";if(a.background.alignment){a.background.alignment.horizontal&&(c=a.background.alignment.horizontal);if(a.background.alignment.vertical)switch(a.background.alignment.vertical){case "top":d="top";break;case "middle":d="center";break;case "bottom":d="bottom";break;default:b.verticalAlign="center"}b.backgroundPosition=c+" "+d}}}},dataFormat:{getText:function(a,b){var c=
"";a.dataFormat&&(c=b?b:a.text,c=d.dataFormat.setDataFomat(a,c),a.dataFormat.prefix&&(c=a.dataFormat.prefix+" "+c),a.dataFormat.suffix&&(c=c+" "+a.dataFormat.suffix));return c},setDataFomat:function(a,b){var c=a.dataFormat.unit;"none"===a.dataFormat.unit?c="":"percentage"===a.dataFormat.unit&&(c="%");return b=b+c+"("+a.dataFormat.decimalPlaces+") "}}};return d});