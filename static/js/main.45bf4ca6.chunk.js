(this["webpackJsonpwould-you-rather-app"]=this["webpackJsonpwould-you-rather-app"]||[]).push([[0],{49:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var o=n(0),s=n(20),a=n.n(s),r=(n(49),n(9)),c=n(10),i=n(13),u=n(12),l=n(18),j=n(5),d=n(6),b=n(33),h=n(7),O=n(4),p={sarahedo:{id:"sarahedo",name:"Sarah Edo",avatarURL:"https://s3.amazonaws.com/cms-assets.tutsplus.com/uploads/users/107/profiles/2394/profileImage/avatar-new400.jpg",answers:{"8xf0y6ziyjabvozdd253nd":"optionOne","6ni6ok3ym7mf1p33lnez":"optionTwo",am8ehyc8byjqgar0jgpub9:"optionTwo",loxhs1bqm25b708cmbf3g:"optionTwo"},questions:["8xf0y6ziyjabvozdd253nd","am8ehyc8byjqgar0jgpub9"]},tylermcginnis:{id:"tylermcginnis",name:"Tyler McGinnis",avatarURL:"https://external-preview.redd.it/8v3LkYRXddBkoqJkH_0OixpKyqcEOKqokxpDzAc2JYI.jpg?auto=webp&s=7348fcc4defdcfb5ca82553fcca8184061147d54",answers:{vthrdm985a262al8qx3do:"optionOne",xj352vofupe1dqz9emx13r:"optionTwo"},questions:["loxhs1bqm25b708cmbf3g","vthrdm985a262al8qx3do"]},johndoe:{id:"johndoe",name:"John Doe",avatarURL:"https://miro.medium.com/max/566/1*n-FPAObgPCDmxNKeGqyWvw.jpeg",answers:{xj352vofupe1dqz9emx13r:"optionOne",vthrdm985a262al8qx3do:"optionTwo","6ni6ok3ym7mf1p33lnez":"optionTwo"},questions:["6ni6ok3ym7mf1p33lnez","xj352vofupe1dqz9emx13r"]}},m={"8xf0y6ziyjabvozdd253nd":{id:"8xf0y6ziyjabvozdd253nd",author:"sarahedo",timestamp:1467166872634,optionOne:{votes:["sarahedo"],text:"have horrible short term memory"},optionTwo:{votes:[],text:"have horrible long term memory"}},"6ni6ok3ym7mf1p33lnez":{id:"6ni6ok3ym7mf1p33lnez",author:"johndoe",timestamp:1468479767190,optionOne:{votes:[],text:"become a superhero"},optionTwo:{votes:["johndoe","sarahedo"],text:"become a supervillain"}},am8ehyc8byjqgar0jgpub9:{id:"am8ehyc8byjqgar0jgpub9",author:"sarahedo",timestamp:1488579767190,optionOne:{votes:[],text:"be telekinetic"},optionTwo:{votes:["sarahedo"],text:"be telepathic"}},loxhs1bqm25b708cmbf3g:{id:"loxhs1bqm25b708cmbf3g",author:"tylermcginnis",timestamp:1482579767190,optionOne:{votes:[],text:"be a front-end developer"},optionTwo:{votes:["sarahedo"],text:"be a back-end developer"}},vthrdm985a262al8qx3do:{id:"vthrdm985a262al8qx3do",author:"tylermcginnis",timestamp:1489579767190,optionOne:{votes:["tylermcginnis"],text:"find $50 yourself"},optionTwo:{votes:["johndoe"],text:"have your best friend find $500"}},xj352vofupe1dqz9emx13r:{id:"xj352vofupe1dqz9emx13r",author:"johndoe",timestamp:1493579767190,optionOne:{votes:["johndoe"],text:"write JavaScript"},optionTwo:{votes:["tylermcginnis"],text:"write Swift"}}};function v(e){var t=e.optionOneText,n=e.optionTwoText,o=e.author;return{id:Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),timestamp:Date.now(),author:o,optionOne:{votes:[],text:t},optionTwo:{votes:[],text:n}}}function x(e){return function(e){return new Promise((function(t,n){var o=e.author,s=v(e);setTimeout((function(){m=Object(O.a)(Object(O.a)({},m),{},Object(h.a)({},s.id,s)),console.log("user from api",p,o),p=Object(O.a)(Object(O.a)({},p),{},Object(h.a)({},o,Object(O.a)(Object(O.a)({},p[o]),{},{questions:p[o].questions.concat([s.id])}))),console.log("users updated",p,p[o]),t(s)}),1e3)}))}(e)}function f(e){return function(e){var t=e.authedUser,n=e.qid,o=e.answer;return new Promise((function(e,s){setTimeout((function(){p=Object(O.a)(Object(O.a)({},p),{},Object(h.a)({},t,Object(O.a)(Object(O.a)({},p[t]),{},{answers:Object(O.a)(Object(O.a)({},p[t].answers),{},Object(h.a)({},n,o))}))),m=Object(O.a)(Object(O.a)({},m),{},Object(h.a)({},n,Object(O.a)(Object(O.a)({},m[n]),{},Object(h.a)({},o,Object(O.a)(Object(O.a)({},m[n][o]),{},{votes:m[n][o].votes.concat([t])}))))),e()}),500)}))}(e)}var g="GET_USERS";var w="GET_QUESTIONS",y="ADD_QUESTION",q="SAVE_QUESTIONS_ANSWER";function T(e,t){return function(n,o){var s=o();return console.log("USER:",s),x({optionOneText:e,optionTwoText:t,author:s.authedUser}).then((function(e){return n(function(e){return{type:y,question:e}}(e))}))}}function N(e,t){return function(n,o){var s=o(),a=s.authedUser,r=s.questions;return f({answer:t,authedUser:a,qid:r[e]}).then((function(t){return n(function(e,t){return{type:q,answer:t,qid:e}}(e,t))}))}}var S="SET_AUTHED_USER";var U=n(21),k=n.n(U);function C(){return function(e){return e(Object(U.showLoading)()),Promise.all([new Promise((function(e,t){setTimeout((function(){return e(Object(O.a)({},p))}),1e3)})),new Promise((function(e,t){setTimeout((function(){return e(Object(O.a)({},m))}),1e3)}))]).then((function(e){var t=Object(b.a)(e,2);return{users:t[0],questions:t[1]}})).then((function(t){var n=t.users,o=t.questions;e(function(e){return{type:g,users:e}}(n)),e(function(e){return{type:w,questions:e}}(o)),e({type:S,id:"sarahedo"}),e(Object(U.hideLoading)())}))}}var R=n(40),z=n(1),E=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props,t=e.optionOneText,n=e.isAnswered,o=e.user,s=e.question,a=(e.authedUser,t.text.slice(0,10)+"..."),r=o.name,c=o.avatarURL,i=s.id;return console.log("question",s),Object(z.jsxs)("div",{className:"question",children:[Object(z.jsx)("div",{children:Object(z.jsx)("div",{className:"results-authorName",children:Object(z.jsxs)("span",{children:[r," asks: "]})})}),Object(z.jsx)("div",{className:"board dashboard",children:Object(z.jsxs)("div",{className:"leaderboard-grid",children:[Object(z.jsx)("div",{className:"leaderboard-img",children:Object(z.jsx)("img",{src:c,alt:"Avatar of ".concat(r),className:"avatar"})}),Object(z.jsxs)("div",{className:"leaderboard-info",children:[Object(z.jsx)("h5",{children:"Would You Rather"}),Object(z.jsxs)("p",{children:["...",a]}),n?Object(z.jsx)(l.b,{to:"/results/".concat(i),children:Object(z.jsx)("button",{className:"btn",children:"View Poll"})}):Object(z.jsx)(l.b,{to:"/question/".concat(i),children:Object(z.jsx)("button",{className:"btn",children:"View Poll"})})]})]})})]})}}]),n}(o.Component);var L=Object(j.f)(Object(d.connect)((function(e,t){var n=e.authedUser,o=e.users,s=e.questions,a=t.id;console.log("id",a);var r=s[a],c=r.optionOne;return r.optionTwo,{authedUser:n,optionOneText:c,isAnswered:r.optionOne.votes.includes(n)||r.optionTwo.votes.includes(n),user:o[r.author],question:r}}))(E)),A=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.questionList;return console.log("Questions list",e),Object(z.jsx)("div",{children:e.map((function(e){return Object(z.jsx)("div",{children:Object(z.jsx)(L,{id:e})},e)}))})}}]),n}(o.Component);var D=Object(d.connect)((function(e,t){var n=e.authedUser,o=e.users,s=e.questions,a=t.type,r=o[n],c=Object.keys(r.answers),i=Object.keys(s).sort((function(e,t){return s[t].timestamp-s[e].timestamp}));if(console.log("IDS",i),"unanswered"===a){var u=Object(R.a)(i);return console.log("WTF???",u),{currentUser:r,questionList:u.filter((function(e){return!c.includes(e)}))}}if("answered"===a)return{currentUser:r,questionList:Object(R.a)(i).filter((function(e){return c.includes(e)}))}}))(A),P=n(44),V=n(39);var Q=Object(d.connect)()((function(){var e=Object(o.useState)("unanswered"),t=Object(b.a)(e,2),n=t[0],s=t[1];return Object(z.jsxs)("div",{children:[Object(z.jsxs)(P.a,{activeKey:n,onSelect:function(e){return s(e)},className:"mb-3 question center",children:[Object(z.jsx)(V.a,{eventKey:"unanswered",title:"Unanswered questions"}),Object(z.jsx)(V.a,{eventKey:"answered",title:"Answered questions"})]}),Object(z.jsx)(D,{type:n})]})})),W=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var o=arguments.length,s=new Array(o),a=0;a<o;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={optionOne:"",optionTwo:""},e.handleChange=function(t){var n=t.target.value;e.setState((function(){return Object(O.a)(Object(O.a)({},e.state),{},Object(h.a)({},t.target.name,n))}))},e.handleSubmit=function(t){t.preventDefault(),console.log("Option one: ",e.state.optionOne),console.log("Option two: ",e.state.optionTwo),(0,e.props.dispatch)(T(e.state.optionOne,e.state.optionTwo)),e.setState((function(){return{optionOne:"",optionTwo:""}}))},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.state,t=e.optionOne,n=e.optionTwo;return Object(z.jsxs)("div",{className:"container",children:[Object(z.jsx)("h3",{className:"center question bg",children:"Create New Question"}),Object(z.jsxs)("form",{className:"new-question question",onSubmit:this.handleSubmit,children:[Object(z.jsx)("p",{children:"Complete the question:"}),Object(z.jsx)("h3",{children:"Would you rather..."}),Object(z.jsx)("input",{placeholder:"Enter Option One Text Here",type:"text",name:"optionOne",value:t,onChange:this.handleChange,className:"textarea",maxLength:280}),Object(z.jsx)("p",{className:"center",children:"OR"}),Object(z.jsx)("input",{placeholder:"Enter Option Two Text Here",type:"text",name:"optionTwo",value:n,onChange:this.handleChange,className:"textarea",maxLength:280}),Object(z.jsx)("button",{className:"btn",type:"submit",children:"Submit"})]})]})}}]),n}(o.Component),_=Object(d.connect)()(W),I=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var o=arguments.length,s=new Array(o),a=0;a<o;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={answer:"",toResults:!1},e.onRadioChange=function(t){var n=t.target.value;e.setState((function(){return{answer:n}}))},e.formSubmit=function(t){t.preventDefault();var n=e.state.answer,o=e.props,s=o.dispatch,a=o.id;s(N(n,o.authedUser)),e.setState((function(){return{answer:"",toResults:!a}}))},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.state,t=e.answer,n=e.toResults,o=this.props,s=o.optionOneText,a=o.optionTwoText,r=o.user,c=(o.id,r.name),i=r.avatarURL;return!0===n?Object(z.jsx)(j.a,{to:"/results"}):Object(z.jsxs)("div",{className:"question",children:[Object(z.jsx)("div",{children:Object(z.jsxs)("span",{children:[c," asks: "]})}),Object(z.jsxs)("div",{className:"question-info",children:[Object(z.jsx)("img",{src:i,alt:"Avatar of ".concat(c),className:"avatar"}),Object(z.jsxs)("div",{children:[Object(z.jsx)("h5",{children:"Would You Rather..."}),Object(z.jsxs)("form",{className:"vote-form",onSubmit:this.formSubmit,children:[Object(z.jsx)("div",{className:"radio",children:Object(z.jsxs)("label",{children:[Object(z.jsx)("input",{type:"radio",value:s,checked:t===s,onChange:this.onRadioChange}),s]})}),Object(z.jsx)("div",{className:"radio",children:Object(z.jsxs)("label",{children:[Object(z.jsx)("input",{type:"radio",value:a,checked:t===a,onChange:this.onRadioChange}),a]})}),Object(z.jsx)("button",{className:"btn",type:"submit",children:"Submit"})]})]})]})]})}}]),n}(o.Component);var J=Object(d.connect)((function(e,t){var n=e.authedUser,o=e.questions,s=e.users;console.log("props",t);var a=t.match.params.id,r=o[a];console.log("question",r);var c=r.optionOne.text,i=r.optionTwo.text,u=s[r.author];return console.log("this is the author: ",u),Object(h.a)({id:a,question:r,optionOneText:c,optionTwoText:i,user:u,authedUser:n},"question",r?v(c):null)}))(I),K=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props,t=e.optionOneText,n=e.optionTwoText,o=e.optionOneVotes,s=e.optionTwoVotes,a=e.user,r=e.users,c=(e.question,e.authedUser),i=Object.keys(r).length,u=o.find((function(e){return e===c})),l=s.find((function(e){return e===c})),j=Y(o.length,i),d=Y(s.length,i),b=a.name,h=a.avatarURL;return Object(z.jsxs)("div",{className:"question question-results",children:[Object(z.jsx)("div",{className:"results-authorName",children:Object(z.jsxs)("span",{children:["Asked by ",b]})}),Object(z.jsxs)("div",{className:"results-grid",children:[Object(z.jsx)("div",{className:"results-author-img",children:Object(z.jsx)("img",{src:h,alt:"Avatar of ".concat(b),className:"avatar"})}),Object(z.jsxs)("div",{className:"results-side-count",children:[Object(z.jsx)("h3",{className:"results-title",children:"Results:"}),Object(z.jsxs)("div",{className:"chart",children:[Object(z.jsxs)("span",{className:u?"your-vote":"none",children:["Your ",Object(z.jsx)("br",{}),"Vote"]}),Object(z.jsxs)("h3",{children:["Would you rather ",t,"?"]}),Object(z.jsx)("div",{children:Object(z.jsx)("div",{id:"option-1",className:"option",children:Object(z.jsx)("div",{className:"results",children:Object(z.jsx)("div",{className:"on",style:{width:"".concat(j,"%")},children:Object(z.jsx)("span",{className:"count",children:Object(z.jsx)("p",{children:"".concat(j,"%")})})})})})}),Object(z.jsx)("p",{children:"".concat(o.length," out of ").concat(i," votes")})]}),Object(z.jsxs)("div",{className:"chart",children:[Object(z.jsxs)("span",{className:l?"your-vote optTwo":"none",children:["Your ",Object(z.jsx)("br",{}),"Vote"]}),Object(z.jsxs)("h3",{children:["Would you rather ",n,"?"]}),Object(z.jsx)("div",{children:Object(z.jsx)("div",{id:"option-2",className:"option",children:Object(z.jsx)("div",{className:"results",children:Object(z.jsx)("div",{className:"on",style:{width:"".concat(d,"%")},children:Object(z.jsx)("span",{className:"count",children:Object(z.jsx)("p",{children:"".concat(d,"%")})})})})})}),Object(z.jsx)("p",{children:"".concat(s.length," out of ").concat(i," votes")})]})]})]})]})}}]),n}(o.Component);function Y(e,t){return Math.floor(100*e/t)}var B=Object(d.connect)((function(e,t){var n=e.authedUser,o=e.questions,s=e.users,a=o[t.match.params.id];console.log("this is the question info: ",a);var r=a.optionOne.text,c=a.optionTwo.text,i=a.optionOne.votes,u=a.optionTwo.votes,l=s[a.author];return console.log("This is user info",l.id),Object(h.a)({authedUser:n,question:a,optionOneText:r,optionTwoText:c,optionOneVotes:i,optionTwoVotes:u,user:l,users:s},"question",a?v(r):null)}))(K),H=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.usersList;return Object(z.jsx)("div",{className:"question leaderboard",children:e.map((function(e,t){var n=e.name,o=e.avatarURL,s=e.answers,a=e.questions,r=Object.keys(s).length,c=a.length,i=r+c;return Object(z.jsx)("div",{className:"board",children:Object(z.jsxs)("div",{className:"leaderboard-grid",children:[Object(z.jsx)("div",{className:"leaderboard-img",children:Object(z.jsx)("img",{src:o,alt:"Avatar of ".concat(n),className:"avatar"})}),Object(z.jsxs)("div",{className:"leaderboard-info",children:[Object(z.jsx)("h3",{children:n}),Object(z.jsxs)("p",{children:["Answered Questions: ",r]}),Object(z.jsx)("hr",{}),Object(z.jsxs)("p",{children:["Created Questions: ",c]})]}),Object(z.jsxs)("div",{className:"score",children:[Object(z.jsx)("p",{children:"Score"}),Object(z.jsx)("p",{children:Object(z.jsx)("span",{className:"score-shape",children:i})})]})]})},t)}))})}}]),n}(o.Component);var M=Object(d.connect)((function(e){var t=e.users;return console.log("users",t),{usersList:Object.values(t)}}))(H);function G(){return Object(z.jsx)("nav",{className:"nav",children:Object(z.jsxs)("ul",{children:[Object(z.jsx)("li",{children:Object(z.jsx)(l.c,{to:"/",exact:!0,activeClassName:"active",children:"Home"})}),Object(z.jsx)("li",{children:Object(z.jsx)(l.c,{to:"/add",activeClassName:"active",children:"New Question"})}),Object(z.jsx)("li",{children:Object(z.jsx)(l.c,{to:"/leaderboard",activeClassName:"active",children:"Leader Board"})})]})})}var F=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.dispatch)(C())}},{key:"render",value:function(){return Object(z.jsx)(l.a,{children:Object(z.jsxs)(o.Fragment,{children:[Object(z.jsx)(k.a,{}),Object(z.jsxs)("div",{className:"container",children:[Object(z.jsx)(G,{}),!0===this.props.loading?null:Object(z.jsxs)("div",{children:[Object(z.jsx)(j.b,{path:"/",exact:!0,component:Q}),Object(z.jsx)(j.b,{path:"/add",component:_}),Object(z.jsx)(j.b,{path:"/leaderboard",component:M}),Object(z.jsx)(j.b,{path:"/question/:id",component:J}),Object(z.jsx)(j.b,{path:"/results/:id",component:B})]})]})]})})}}]),n}(o.Component);var $=Object(d.connect)((function(e){return{loading:null===e.authedUser}}))(F),X=n(24);var Z=Object(X.b)({authedUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return t.type===S?t.id:e},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(O.a)(Object(O.a)({},e),t.users);case y:return console.log("state",e),console.log("action",t),Object(O.a)(Object(O.a)({},e),{},Object(h.a)({},t.question.author,Object(O.a)(Object(O.a)({},e[t.question.author]),{},{questions:e[t.question.author].questions.concat([t.question.id])})));default:return e}},questions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(O.a)(Object(O.a)({},e),t.questions);case y:return Object(O.a)(Object(O.a)({},e),{},Object(h.a)({},t.question.id,t.question));case q:return Object(O.a)(Object(O.a)({},e),{},Object(h.a)({},t.questions.id.answer,t.answer));default:return e}},loadingBar:U.loadingBarReducer}),ee=n(43),te=function(e){return function(t){return function(n){console.group(n.type),console.log("The action is: ",n);var o=t(n);return console.log("The new state is: ",e.getState()),console.groupEnd(),o}}},ne=Object(X.a)(ee.a,te),oe=Object(X.c)(Z,ne);a.a.render(Object(z.jsx)(d.Provider,{store:oe,children:Object(z.jsx)($,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.45bf4ca6.chunk.js.map