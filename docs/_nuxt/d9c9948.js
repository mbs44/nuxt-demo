(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{205:function(e,t,o){e.exports=o.p+"img/QuizResult.a934094.png"},206:function(e,t,o){e.exports=o.p+"img/QuizTime.7949246.jpg"},255:function(e,t,o){"use strict";o.r(t);var r=o(15),n=(o(156),{methods:{isMaxAnswers:function(e,t){var i,o={a:0,b:0,c:0,d:0};for(i=0;i<e.length;i++)o[e[i].result]++;for(var n=o[t],l=0,c=Object.entries(o);l<c.length;l++){var d=Object(r.a)(c[l],2);d[0];if(n<d[1])return!1}return!0}},data:function(){return{questions:[{text:"When you go to school you wear:",label:"Fashion",a:"Your favourite hoodie",b:"A power outfit or clothes abiding the newest trend in fashion",c:"Anything which fits you as long as it is comfy and doesn't drag you down",d:"The comfiest stuff in your closet",result:"a"},{text:"What's your favourite hobby?",label:"Hobby",a:"Hanging with the bros or gaming till 4 am",b:"Going out with your girlfriends, binging netflix or shopping till there's no money in your wallet",c:"Reading, bullet journalling or scrolling through bookstagram.",d:"Expressing your creative ideas through different activities such as drama, writing, drawing, dancing etc.",result:"a"},{text:"What’s your favourite subject?",label:"Subject",a:"No, you'd rather be at home gamin’ with your bros.",b:"Any subject where the teacher lets you laugh or talk to your friends.",c:"Any class which is interesting- especially if you get good grades.",d:"Any creative subject; english, art, music etc.",result:"a"},{text:"Completing assignments:",label:"Assignments",a:"Done last minute or after deadline(ehm ehm 3 am.)",b:"Procrastinated but done.",c:"Completed a week ahead or procrastinated to the very last minute.",d:"Whenever, wherever, just get it done.",result:"a"},{text:"What’s your lunch spot?",label:"Lunch",a:"At home. You don't bother with cafeteria food.",b:"Eurovea of course.",c:"Cafeteria. You are the first to be out of class and packed and ready for lunch.",d:"You eat at the cafeteria with your squad.",result:"a"}],results:[{value:"a",text:"A: You’re a part of the hoodie wearing bros who will game with you till 4 am and hang any time..."},{value:"b",text:"B: You’re a part of the mysterious 8girls and you like to hang out with your friends after school and Netflix & CHILL."},{value:"c",text:"C: You’re always prepared, you are a part of the brainiacs,<br> your smarts get you great grades though your workload can get a bit tough sometimes."},{value:"d",text:"D: You’re a part of the talented Creatives; you like expressing your creative ideas and trying new things."}],labelPosition:"right",position:null,size:null}}}),l=o(26),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"section"},[r("b-steps",{attrs:{position:e.position,"label-position":e.labelPosition,size:e.size,vertical:""}},[r("b-step-item",{attrs:{label:"Get ready",icon:"account-plus"}},[r("figure",{staticClass:"b-image-wrapper image"},[r("img",{staticStyle:{width:"500px"},attrs:{src:o(206)}})])]),e._v(" "),e._l(e.questions,(function(t,i){return r("b-step-item",{key:i,attrs:{label:""+t.label,icon:"account-key"}},[r("div",{staticClass:"box"},[r("b",[e._v(e._s(t.text))])]),e._v(" "),r("b-field",[r("b-radio",{attrs:{"native-value":"a"},model:{value:e.questions[i].result,callback:function(t){e.$set(e.questions[i],"result",t)},expression:"questions[i].result"}},[e._v("\n                  A: "+e._s(t.a)+"\n              ")])],1),e._v(" "),r("b-field",[r("b-radio",{attrs:{"native-value":"b"},model:{value:e.questions[i].result,callback:function(t){e.$set(e.questions[i],"result",t)},expression:"questions[i].result"}},[e._v("\n                      B: "+e._s(t.b)+"\n                  ")])],1),e._v(" "),r("b-field",[r("b-radio",{attrs:{"native-value":"c"},model:{value:e.questions[i].result,callback:function(t){e.$set(e.questions[i],"result",t)},expression:"questions[i].result"}},[e._v("\n                        C: "+e._s(t.c)+"\n                  ")])],1),e._v(" "),r("b-field",[r("b-radio",{attrs:{"native-value":"d"},model:{value:e.questions[i].result,callback:function(t){e.$set(e.questions[i],"result",t)},expression:"questions[i].result"}},[e._v("\n                        D: "+e._s(t.d)+"\n                  ")])],1)],1)})),e._v(" "),r("b-step-item",{attrs:{label:"Result",icon:"account-plus"}},[r("figure",{staticClass:"b-image-wrapper image"},[r("img",{staticStyle:{width:"500px"},attrs:{src:o(205)}})]),e._v(" "),r("div",{staticClass:"box"},[r("b",[e._v("Which letter was the most common in Your answers???"),r("br"),e._v("\n                  It was...")])]),e._v(" "),e._l(e.results,(function(t,i){return r("div",{key:i},[e.isMaxAnswers(e.questions,t.value)?r("div",{staticClass:"box"},[r("b",[e._v(e._s(t.text))])]):e._e()])}))],2)],2)],1)}),[],!1,null,null,null);t.default=component.exports}}]);