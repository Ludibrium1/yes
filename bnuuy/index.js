(function(e,t,o){"use strict";const a=t.findByProps("sendMessage","receiveMessage"),u=t.findByProps("uploadLocalFiles"),r=/Bunny/i;function s(n){var c=n.content;n.content.match(r)&&(c=n.content.replaceAll(/(b)unny/gi,"$1nuuy")),n.content=c}const i=o.before("sendMessage",a,function(n){return s(n[1])});o.before("uploadLocalFiles",u,function(n){return s(n[0].parsedMessage)});function d(){i()}return e.onUnload=d,e})({},vendetta.metro,vendetta.patcher);