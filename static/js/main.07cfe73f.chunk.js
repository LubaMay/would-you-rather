(this["webpackJsonpwould-you-rather-app"]=this["webpackJsonpwould-you-rather-app"]||[]).push([[0],{42:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(14),a=n.n(r),s=(n(42),n(7)),i=n(8),c=n(11),u=n(10),d=n(5),j=n(37),h=n(6),l=n(4),b={sarahedo:{id:"sarahedo",name:"Sarah Edo",avatarURL:"https://tylermcginnis.com/would-you-rather/sarah.jpg",answers:{"8xf0y6ziyjabvozdd253nd":"optionOne","6ni6ok3ym7mf1p33lnez":"optionTwo",am8ehyc8byjqgar0jgpub9:"optionTwo",loxhs1bqm25b708cmbf3g:"optionTwo"},questions:["8xf0y6ziyjabvozdd253nd","am8ehyc8byjqgar0jgpub9"]},tylermcginnis:{id:"tylermcginnis",name:"Tyler McGinnis",avatarURL:"https://tylermcginnis.com/would-you-rather/tyler.jpg",answers:{vthrdm985a262al8qx3do:"optionOne",xj352vofupe1dqz9emx13r:"optionTwo"},questions:["loxhs1bqm25b708cmbf3g","vthrdm985a262al8qx3do"]},johndoe:{id:"johndoe",name:"John Doe",avatarURL:"https://tylermcginnis.com/would-you-rather/dan.jpg",answers:{xj352vofupe1dqz9emx13r:"optionOne",vthrdm985a262al8qx3do:"optionTwo","6ni6ok3ym7mf1p33lnez":"optionTwo"},questions:["6ni6ok3ym7mf1p33lnez","xj352vofupe1dqz9emx13r"]}},p={"8xf0y6ziyjabvozdd253nd":{id:"8xf0y6ziyjabvozdd253nd",author:"sarahedo",timestamp:1467166872634,optionOne:{votes:["sarahedo"],text:"have horrible short term memory"},optionTwo:{votes:[],text:"have horrible long term memory"}},"6ni6ok3ym7mf1p33lnez":{id:"6ni6ok3ym7mf1p33lnez",author:"johndoe",timestamp:1468479767190,optionOne:{votes:[],text:"become a superhero"},optionTwo:{votes:["johndoe","sarahedo"],text:"become a supervillain"}},am8ehyc8byjqgar0jgpub9:{id:"am8ehyc8byjqgar0jgpub9",author:"sarahedo",timestamp:1488579767190,optionOne:{votes:[],text:"be telekinetic"},optionTwo:{votes:["sarahedo"],text:"be telepathic"}},loxhs1bqm25b708cmbf3g:{id:"loxhs1bqm25b708cmbf3g",author:"tylermcginnis",timestamp:1482579767190,optionOne:{votes:[],text:"be a front-end developer"},optionTwo:{votes:["sarahedo"],text:"be a back-end developer"}},vthrdm985a262al8qx3do:{id:"vthrdm985a262al8qx3do",author:"tylermcginnis",timestamp:1489579767190,optionOne:{votes:["tylermcginnis"],text:"find $50 yourself"},optionTwo:{votes:["johndoe"],text:"have your best friend find $500"}},xj352vofupe1dqz9emx13r:{id:"xj352vofupe1dqz9emx13r",author:"johndoe",timestamp:1493579767190,optionOne:{votes:["johndoe"],text:"write JavaScript"},optionTwo:{votes:["tylermcginnis"],text:"write Swift"}}};function m(e){var t=e.optionOneText,n=e.optionTwoText,o=e.author;return{id:Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),timestamp:Date.now(),author:o,optionOne:{votes:[],text:t},optionTwo:{votes:[],text:n}}}function O(e){return function(e){var t=e.authedUser,n=e.qid,o=e.answer;return new Promise((function(e,r){setTimeout((function(){b=Object(l.a)(Object(l.a)({},b),{},Object(h.a)({},t,Object(l.a)(Object(l.a)({},b[t]),{},{answers:Object(l.a)(Object(l.a)({},b[t].answers),{},Object(h.a)({},n,o))}))),p=Object(l.a)(Object(l.a)({},p),{},Object(h.a)({},n,Object(l.a)(Object(l.a)({},p[n]),{},Object(h.a)({},o,Object(l.a)(Object(l.a)({},p[n][o]),{},{votes:p[n][o].votes.concat([t])}))))),e()}),500)}))}(e)}var v="GET_USERS";var f="GET_QUESTIONS",x="SAVE_QUESTIONS_ANSWER";function y(e,t){return function(n,o){var r=o().authedUser;return O({vote:t,authedUser:r,qid:e}).then((function(e){return n(function(e){return{type:x,vote:e}}(e))}))}}var g="SET_AUTHED_USER";var w=n(15),q=n.n(w);function T(){return function(e){return e(Object(w.showLoading)()),Promise.all([new Promise((function(e,t){setTimeout((function(){return e(Object(l.a)({},b))}),1e3)})),new Promise((function(e,t){setTimeout((function(){return e(Object(l.a)({},p))}),1e3)}))]).then((function(e){var t=Object(j.a)(e,2);return{users:t[0],questions:t[1]}})).then((function(t){var n=t.users,o=t.questions;e(function(e){return{type:v,users:e}}(n)),e(function(e){return{type:f,questions:e}}(o)),e({type:g,id:"sarahedo"}),e(Object(w.hideLoading)())}))}}var U=n(26),k=n(1),S=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.optionOneText,n=e.user,o=t.text.slice(0,10)+"...",r=n.name,a=n.avatarURL;return Object(k.jsxs)("div",{className:"question center",children:[Object(k.jsx)("div",{children:Object(k.jsxs)("span",{children:[r," asks: "]})}),Object(k.jsxs)("div",{className:"question-info",children:[Object(k.jsx)("img",{src:a,alt:"Avatar of ".concat(r),className:"avatar"}),Object(k.jsxs)("div",{children:[Object(k.jsx)("h5",{children:"Would You Rather"}),Object(k.jsxs)("p",{children:["...",o]}),Object(k.jsx)("button",{children:"View Poll"})]})]})]})}}]),n}(o.Component);var z=Object(d.connect)((function(e,t){var n=e.authedUser,o=e.users,r=e.questions[t.id],a=r.optionOne;return r.optionTwo,{authedUser:n,optionOneText:a,user:o[r.author],question:r?m(r):null}}))(S),R=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.questionList;return Object(k.jsx)("div",{children:e.map((function(e){return Object(k.jsx)("div",{children:Object(k.jsx)(z,{id:e})},e)}))})}}]),n}(o.Component);var N=Object(d.connect)((function(e,t){var n=e.authedUser,o=e.users,r=e.questions,a=t.type,s=o[n],i=Object.keys(s.answers),c=Object.keys(r).sort((function(e,t){return r[t].timestamp-r[e].timestamp}));return"unanswered"===a?{currentUser:s,questionList:[].concat(Object(U.a)(c),Object(U.a)(i)).filter((function(e){return!(c.includes(e)&&i.includes(e))}))}:"answered"===a?{currentUser:s,questionList:Object(U.a)(i).filter((function(e){return i.includes(e)}))}:void 0}))(R),E=n(36),C=n(33),L=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(k.jsxs)("div",{className:"center",children:[Object(k.jsx)("h3",{children:"Questions"}),Object(k.jsxs)(E.a,{id:"controlled-tab-example",className:"mb-3",children:[Object(k.jsx)(C.a,{eventKey:"home",title:"Unanswered questions",children:Object(k.jsx)(N,{type:"unanswered"})}),Object(k.jsx)(C.a,{eventKey:"profile",title:"Answered Questions",children:Object(k.jsx)(N,{type:"answered"})})]})]})}}]),n}(o.Component);Object(d.connect)((function(e){var t=e.questions;return{questionIds:Object.keys(t).sort((function(e,n){return t[n].timestamp-t[e].timestamp}))}}))(L);var A=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={answer:"",toResults:!1},e.onRadioChange=function(t){var n=t.target.value;e.setState((function(){return{answer:n}}))},e.formSubmit=function(t){t.preventDefault();var n=e.state.answer,o=e.props,r=o.dispatch,a=o.id;o.authedUser;r(y(n,a)),e.setState((function(){return{answer:"",toResults:!a}}))},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state,t=e.answer,n=(e.toResults,this.props),o=n.optionOneText,r=n.optionTwoText,a=n.user,s=a.name,i=a.avatarURL;return Object(k.jsxs)("div",{className:"question",children:[Object(k.jsx)("div",{children:Object(k.jsxs)("span",{children:[s," asks: "]})}),Object(k.jsxs)("div",{className:"question-info",children:[Object(k.jsx)("img",{src:i,alt:"Avatar of ".concat(s),className:"avatar"}),Object(k.jsxs)("div",{children:[Object(k.jsx)("h5",{children:"Would You Rather..."}),Object(k.jsxs)("form",{className:"vote-form",onSubmit:this.formSubmit,children:[Object(k.jsx)("div",{className:"radio",children:Object(k.jsxs)("label",{children:[Object(k.jsx)("input",{type:"radio",value:o,checked:t===o,onChange:this.onRadioChange}),o]})}),Object(k.jsx)("div",{className:"radio",children:Object(k.jsxs)("label",{children:[Object(k.jsx)("input",{type:"radio",value:r,checked:t===r,onChange:this.onRadioChange}),r]})}),Object(k.jsx)("button",{className:"btn",type:"submit",children:"Submit"})]})]})]})]})}}]),n}(o.Component);var P=Object(d.connect)((function(e,t){var n=e.authedUser,o=e.questions,r=e.users,a=t.match.params.id,s=o[a];console.log("this is the question info: ",s);var i=s.optionOne.text,c=s.optionTwo.text,u=r[s.author];return console.log("this is the author: ",u),Object(h.a)({id:a,question:s,optionOneText:i,optionTwoText:c,user:u,authedUser:n},"question",s?m(i):null)}))(A),_=(o.Component,function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(k.jsx)("div",{children:Object(k.jsx)("h3",{children:"Results"})})}}]),n}(o.Component)),D=(Object(d.connect)()(_),function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.dispatch)(T())}},{key:"render",value:function(){return Object(k.jsxs)("div",{children:[Object(k.jsx)(q.a,{}),!0===this.props.loading?null:Object(k.jsx)(P,{match:{params:{id:"8xf0y6ziyjabvozdd253nd"}}})]})}}]),n}(o.Component));var I=Object(d.connect)((function(e){return{loading:null===e.authedUser}}))(D),J=n(18);var M=Object(J.b)({authedUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return t.type===g?t.id:e},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return t.type===v?Object(l.a)(Object(l.a)({},e),t.users):e},questions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(l.a)(Object(l.a)({},e),t.questions);case x:return Object(l.a)(Object(l.a)({},e),{},Object(h.a)({},t.questions.id.votes,t.vote));default:return e}},loadingBar:w.loadingBarReducer}),Q=n(35),B=function(e){return function(t){return function(n){console.group(n.type),console.log("The action is: ",n);var o=t(n);return console.log("The new state is: ",e.getState()),console.groupEnd(),o}}},G=Object(J.a)(Q.a,B),W=Object(J.c)(M,G);a.a.render(Object(k.jsx)(d.Provider,{store:W,children:Object(k.jsx)(I,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.07cfe73f.chunk.js.map