(this["webpackJsonpwould-you-rather-app"]=this["webpackJsonpwould-you-rather-app"]||[]).push([[0],{42:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(14),a=n.n(r),s=(n(42),n(7)),i=n(8),c=n(11),u=n(10),j=n(5),d=n(37),l=n(6),h=n(4),b={sarahedo:{id:"sarahedo",name:"Sarah Edo",avatarURL:"https://tylermcginnis.com/would-you-rather/sarah.jpg",answers:{"8xf0y6ziyjabvozdd253nd":"optionOne","6ni6ok3ym7mf1p33lnez":"optionTwo",am8ehyc8byjqgar0jgpub9:"optionTwo",loxhs1bqm25b708cmbf3g:"optionTwo"},questions:["8xf0y6ziyjabvozdd253nd","am8ehyc8byjqgar0jgpub9"]},tylermcginnis:{id:"tylermcginnis",name:"Tyler McGinnis",avatarURL:"https://tylermcginnis.com/would-you-rather/tyler.jpg",answers:{vthrdm985a262al8qx3do:"optionOne",xj352vofupe1dqz9emx13r:"optionTwo"},questions:["loxhs1bqm25b708cmbf3g","vthrdm985a262al8qx3do"]},johndoe:{id:"johndoe",name:"John Doe",avatarURL:"https://tylermcginnis.com/would-you-rather/dan.jpg",answers:{xj352vofupe1dqz9emx13r:"optionOne",vthrdm985a262al8qx3do:"optionTwo","6ni6ok3ym7mf1p33lnez":"optionTwo"},questions:["6ni6ok3ym7mf1p33lnez","xj352vofupe1dqz9emx13r"]}},p={"8xf0y6ziyjabvozdd253nd":{id:"8xf0y6ziyjabvozdd253nd",author:"sarahedo",timestamp:1467166872634,optionOne:{votes:["sarahedo"],text:"have horrible short term memory"},optionTwo:{votes:[],text:"have horrible long term memory"}},"6ni6ok3ym7mf1p33lnez":{id:"6ni6ok3ym7mf1p33lnez",author:"johndoe",timestamp:1468479767190,optionOne:{votes:[],text:"become a superhero"},optionTwo:{votes:["johndoe","sarahedo"],text:"become a supervillain"}},am8ehyc8byjqgar0jgpub9:{id:"am8ehyc8byjqgar0jgpub9",author:"sarahedo",timestamp:1488579767190,optionOne:{votes:[],text:"be telekinetic"},optionTwo:{votes:["sarahedo"],text:"be telepathic"}},loxhs1bqm25b708cmbf3g:{id:"loxhs1bqm25b708cmbf3g",author:"tylermcginnis",timestamp:1482579767190,optionOne:{votes:[],text:"be a front-end developer"},optionTwo:{votes:["sarahedo"],text:"be a back-end developer"}},vthrdm985a262al8qx3do:{id:"vthrdm985a262al8qx3do",author:"tylermcginnis",timestamp:1489579767190,optionOne:{votes:["tylermcginnis"],text:"find $50 yourself"},optionTwo:{votes:["johndoe"],text:"have your best friend find $500"}},xj352vofupe1dqz9emx13r:{id:"xj352vofupe1dqz9emx13r",author:"johndoe",timestamp:1493579767190,optionOne:{votes:["johndoe"],text:"write JavaScript"},optionTwo:{votes:["tylermcginnis"],text:"write Swift"}}};function O(e){var t=e.optionOneText,n=e.optionTwoText,o=e.author;return{id:Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),timestamp:Date.now(),author:o,optionOne:{votes:[],text:t},optionTwo:{votes:[],text:n}}}function m(e){return function(e){return new Promise((function(t,n){var o=e.author,r=O(e);setTimeout((function(){p=Object(h.a)(Object(h.a)({},p),{},Object(l.a)({},r.id,r)),console.log("user from api",b,o),b=Object(h.a)(Object(h.a)({},b),{},Object(l.a)({},o,Object(h.a)(Object(h.a)({},b[o]),{},{questions:b[o].questions.concat([r.id])}))),t(r)}),1e3)}))}(e)}function v(e){return function(e){var t=e.authedUser,n=e.qid,o=e.answer;return new Promise((function(e,r){setTimeout((function(){b=Object(h.a)(Object(h.a)({},b),{},Object(l.a)({},t,Object(h.a)(Object(h.a)({},b[t]),{},{answers:Object(h.a)(Object(h.a)({},b[t].answers),{},Object(l.a)({},n,o))}))),p=Object(h.a)(Object(h.a)({},p),{},Object(l.a)({},n,Object(h.a)(Object(h.a)({},p[n]),{},Object(l.a)({},o,Object(h.a)(Object(h.a)({},p[n][o]),{},{votes:p[n][o].votes.concat([t])}))))),e()}),500)}))}(e)}var x="GET_USERS";var f="GET_QUESTIONS",y="ADD_QUESTION",g="SAVE_QUESTIONS_ANSWER";function w(e,t){return function(n,o){var r=o();return console.log("USER:",r),m({optionOneText:e,optionTwoText:t,author:r.authedUser}).then((function(e){return n(function(e){return{type:y,question:e}}(e))}))}}function T(e,t){return function(n,o){var r=o().authedUser;return v({answer:t,authedUser:r,qid:e}).then((function(e){return n(function(e){return{type:g,answer:e}}(e))}))}}var q="SET_AUTHED_USER";var S=n(15),U=n.n(S);function k(){return function(e){return e(Object(S.showLoading)()),Promise.all([new Promise((function(e,t){setTimeout((function(){return e(Object(h.a)({},b))}),1e3)})),new Promise((function(e,t){setTimeout((function(){return e(Object(h.a)({},p))}),1e3)}))]).then((function(e){var t=Object(d.a)(e,2);return{users:t[0],questions:t[1]}})).then((function(t){var n=t.users,o=t.questions;e(function(e){return{type:x,users:e}}(n)),e(function(e){return{type:f,questions:e}}(o)),e({type:q,id:"johndoe"}),e(Object(S.hideLoading)())}))}}var N=n(26),R=n(1),z=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.optionOneText,n=e.user,o=t.text.slice(0,10)+"...",r=n.name,a=n.avatarURL;return Object(R.jsxs)("div",{className:"question center",children:[Object(R.jsx)("div",{children:Object(R.jsxs)("span",{children:[r," asks: "]})}),Object(R.jsxs)("div",{className:"question-info",children:[Object(R.jsx)("img",{src:a,alt:"Avatar of ".concat(r),className:"avatar"}),Object(R.jsxs)("div",{children:[Object(R.jsx)("h5",{children:"Would You Rather"}),Object(R.jsxs)("p",{children:["...",o]}),Object(R.jsx)("button",{children:"View Poll"})]})]})]})}}]),n}(o.Component);var C=Object(j.connect)((function(e,t){var n=e.authedUser,o=e.users,r=e.questions[t.id],a=r.optionOne;return r.optionTwo,{authedUser:n,optionOneText:a,user:o[r.author],question:r?O(r):null}}))(z),E=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.questionList;return Object(R.jsx)("div",{children:e.map((function(e){return Object(R.jsx)("div",{children:Object(R.jsx)(C,{id:e})},e)}))})}}]),n}(o.Component);var L=Object(j.connect)((function(e,t){var n=e.authedUser,o=e.users,r=e.questions,a=t.type,s=o[n],i=Object.keys(s.answers),c=Object.keys(r).sort((function(e,t){return r[t].timestamp-r[e].timestamp}));return"unanswered"===a?{currentUser:s,questionList:[].concat(Object(N.a)(c),Object(N.a)(i)).filter((function(e){return!(c.includes(e)&&i.includes(e))}))}:"answered"===a?{currentUser:s,questionList:Object(N.a)(i).filter((function(e){return i.includes(e)}))}:void 0}))(E),A=n(36),D=n(33),P=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(R.jsxs)("div",{className:"center",children:[Object(R.jsx)("h3",{children:"Questions"}),Object(R.jsxs)(A.a,{id:"controlled-tab-example",className:"mb-3",children:[Object(R.jsx)(D.a,{eventKey:"home",title:"Unanswered questions",children:Object(R.jsx)(L,{type:"unanswered"})}),Object(R.jsx)(D.a,{eventKey:"profile",title:"Answered Questions",children:Object(R.jsx)(L,{type:"answered"})})]})]})}}]),n}(o.Component);Object(j.connect)((function(e){var t=e.questions;return{questionIds:Object.keys(t).sort((function(e,n){return t[n].timestamp-t[e].timestamp}))}}))(P);var _=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={answer:"",toResults:!1},e.onRadioChange=function(t){var n=t.target.value;e.setState((function(){return{answer:n}}))},e.formSubmit=function(t){t.preventDefault();var n=e.state.answer,o=e.props,r=o.dispatch,a=o.id;o.authedUser;r(T(n,a)),e.setState((function(){return{answer:"",toResults:!a}}))},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state,t=e.answer,n=(e.toResults,this.props),o=n.optionOneText,r=n.optionTwoText,a=n.user,s=a.name,i=a.avatarURL;return Object(R.jsxs)("div",{className:"question",children:[Object(R.jsx)("div",{children:Object(R.jsxs)("span",{children:[s," asks: "]})}),Object(R.jsxs)("div",{className:"question-info",children:[Object(R.jsx)("img",{src:i,alt:"Avatar of ".concat(s),className:"avatar"}),Object(R.jsxs)("div",{children:[Object(R.jsx)("h5",{children:"Would You Rather..."}),Object(R.jsxs)("form",{className:"vote-form",onSubmit:this.formSubmit,children:[Object(R.jsx)("div",{className:"radio",children:Object(R.jsxs)("label",{children:[Object(R.jsx)("input",{type:"radio",value:o,checked:t===o,onChange:this.onRadioChange}),o]})}),Object(R.jsx)("div",{className:"radio",children:Object(R.jsxs)("label",{children:[Object(R.jsx)("input",{type:"radio",value:r,checked:t===r,onChange:this.onRadioChange}),r]})}),Object(R.jsx)("button",{className:"btn",type:"submit",children:"Submit"})]})]})]})]})}}]),n}(o.Component);Object(j.connect)((function(e,t){var n=e.authedUser,o=e.questions,r=e.users,a=t.match.params.id,s=o[a];console.log("this is the question info: ",s);var i=s.optionOne.text,c=s.optionTwo.text,u=r[s.author];return console.log("this is the author: ",u),Object(l.a)({id:a,question:s,optionOneText:i,optionTwoText:c,user:u,authedUser:n},"question",s?O(i):null)}))(_);var Q=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={optionOne:"",optionTwo:""},e.handleChange=function(t){var n=t.target.value;e.setState((function(){return Object(h.a)(Object(h.a)({},e.state),{},Object(l.a)({},t.target.name,n))}))},e.handleSubmit=function(t){t.preventDefault(),console.log("Option one: ",e.state.optionOne),console.log("Option two: ",e.state.optionTwo),(0,e.props.dispatch)(w(e.state.optionOne,e.state.optionTwo)),e.setState((function(){return{optionOne:"",optionTwo:""}}))},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state,t=e.optionOne,n=e.optionTwo;return Object(R.jsxs)("div",{children:[Object(R.jsx)("h3",{className:"center",children:"Create New Question"}),Object(R.jsxs)("form",{className:"new-question",onSubmit:this.handleSubmit,children:[Object(R.jsx)("p",{children:"Would you rather..."}),Object(R.jsx)("input",{placeholder:"Enter Option One Text Here",type:"text",name:"optionOne",value:t,onChange:this.handleChange,className:"textarea",maxLength:280}),Object(R.jsx)("span",{children:"OR"}),Object(R.jsx)("input",{placeholder:"Enter Option Two Text Here",type:"text",name:"optionTwo",value:n,onChange:this.handleChange,className:"textarea",maxLength:280}),Object(R.jsx)("button",{className:"btn",type:"submit",children:"Submit"})]})]})}}]),n}(o.Component),V=(Object(j.connect)()(Q),function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.optionOneText,n=e.optionTwoText,o=e.optionOneVotes,r=e.optionTwoVotes,a=e.user,s=e.users,i=(e.votes,Object.keys(s).length),c=W(o.length,i),u=W(r.length,i),j=a.name;return Object(R.jsxs)("div",{className:"question",children:[Object(R.jsx)("div",{children:Object(R.jsxs)("span",{children:["Asked by ",j]})}),Object(R.jsx)("h3",{children:"Results:"}),Object(R.jsxs)("div",{children:[Object(R.jsxs)("h3",{children:["Would you rather ",t,"?"]}),Object(R.jsx)("div",{class:"chart",children:Object(R.jsx)("div",{id:"option-1",class:"option",children:Object(R.jsx)("div",{class:"results",children:Object(R.jsx)("div",{class:"on",children:Object(R.jsx)("span",{class:"count",children:"20%"})})})})}),Object(R.jsx)("p",{children:"".concat(c,"%")}),Object(R.jsx)("p",{children:"".concat(o.length," out of ").concat(i," votes")})]}),Object(R.jsxs)("div",{children:[Object(R.jsxs)("h3",{children:["Would you rather ",n,"?"]}),Object(R.jsx)("p",{children:"".concat(u,"%")}),Object(R.jsx)("p",{children:"".concat(r.length," out of ").concat(i," votes")})]})]})}}]),n}(o.Component));function W(e,t){return Math.floor(100*e/t)}var I=Object(j.connect)((function(e,t){e.authedUser;var n=e.questions,o=e.users,r=t.match.params.id,a=n[r];console.log("this is the question info: ",a);var s=a.optionOne.text,i=a.optionTwo.text,c=a.optionOne.votes,u=a.optionTwo.votes,j=o[a.author];return Object(l.a)({id:r,question:a,optionOneText:s,optionTwoText:i,optionOneVotes:c,optionTwoVotes:u,user:j,users:o},"question",a?O(s):null)}))(V),M=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.dispatch)(k())}},{key:"render",value:function(){return Object(R.jsxs)("div",{children:[Object(R.jsx)(U.a,{}),!0===this.props.loading?null:Object(R.jsx)(I,{match:{params:{id:"6ni6ok3ym7mf1p33lnez"}}})]})}}]),n}(o.Component);var J=Object(j.connect)((function(e){return{loading:null===e.authedUser}}))(M),B=n(18);var G=Object(B.b)({authedUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return t.type===q?t.id:e},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return t.type===x?Object(h.a)(Object(h.a)({},e),t.users):e},questions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(h.a)(Object(h.a)({},e),t.questions);case y:return Object(h.a)(Object(h.a)({},e),{},Object(l.a)({},t.question.id,t.question));case g:return Object(h.a)(Object(h.a)({},e),{},Object(l.a)({},t.questions.id.answer,t.answer));default:return e}},loadingBar:S.loadingBarReducer}),H=n(35),K=function(e){return function(t){return function(n){console.group(n.type),console.log("The action is: ",n);var o=t(n);return console.log("The new state is: ",e.getState()),console.groupEnd(),o}}},Y=Object(B.a)(H.a,K),$=Object(B.c)(G,Y);a.a.render(Object(R.jsx)(j.Provider,{store:$,children:Object(R.jsx)(J,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.50289ac5.chunk.js.map