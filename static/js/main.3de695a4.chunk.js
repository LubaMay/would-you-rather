(this["webpackJsonpwould-you-rather-app"]=this["webpackJsonpwould-you-rather-app"]||[]).push([[0],{42:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var o=n(0),s=n(14),a=n.n(s),r=(n(42),n(7)),c=n(8),i=n(10),u=n(9),j=n(5),d=n(37),l=n(6),h=n(4),b={sarahedo:{id:"sarahedo",name:"Sarah Edo",avatarURL:"https://s3.amazonaws.com/cms-assets.tutsplus.com/uploads/users/107/profiles/2394/profileImage/avatar-new400.jpg",answers:{"8xf0y6ziyjabvozdd253nd":"optionOne","6ni6ok3ym7mf1p33lnez":"optionTwo",am8ehyc8byjqgar0jgpub9:"optionTwo",loxhs1bqm25b708cmbf3g:"optionTwo"},questions:["8xf0y6ziyjabvozdd253nd","am8ehyc8byjqgar0jgpub9"]},tylermcginnis:{id:"tylermcginnis",name:"Tyler McGinnis",avatarURL:"https://external-preview.redd.it/8v3LkYRXddBkoqJkH_0OixpKyqcEOKqokxpDzAc2JYI.jpg?auto=webp&s=7348fcc4defdcfb5ca82553fcca8184061147d54",answers:{vthrdm985a262al8qx3do:"optionOne",xj352vofupe1dqz9emx13r:"optionTwo"},questions:["loxhs1bqm25b708cmbf3g","vthrdm985a262al8qx3do"]},johndoe:{id:"johndoe",name:"John Doe",avatarURL:"https://miro.medium.com/max/566/1*n-FPAObgPCDmxNKeGqyWvw.jpeg",answers:{xj352vofupe1dqz9emx13r:"optionOne",vthrdm985a262al8qx3do:"optionTwo","6ni6ok3ym7mf1p33lnez":"optionTwo"},questions:["6ni6ok3ym7mf1p33lnez","xj352vofupe1dqz9emx13r"]}},O={"8xf0y6ziyjabvozdd253nd":{id:"8xf0y6ziyjabvozdd253nd",author:"sarahedo",timestamp:1467166872634,optionOne:{votes:["sarahedo"],text:"have horrible short term memory"},optionTwo:{votes:[],text:"have horrible long term memory"}},"6ni6ok3ym7mf1p33lnez":{id:"6ni6ok3ym7mf1p33lnez",author:"johndoe",timestamp:1468479767190,optionOne:{votes:[],text:"become a superhero"},optionTwo:{votes:["johndoe","sarahedo"],text:"become a supervillain"}},am8ehyc8byjqgar0jgpub9:{id:"am8ehyc8byjqgar0jgpub9",author:"sarahedo",timestamp:1488579767190,optionOne:{votes:[],text:"be telekinetic"},optionTwo:{votes:["sarahedo"],text:"be telepathic"}},loxhs1bqm25b708cmbf3g:{id:"loxhs1bqm25b708cmbf3g",author:"tylermcginnis",timestamp:1482579767190,optionOne:{votes:[],text:"be a front-end developer"},optionTwo:{votes:["sarahedo"],text:"be a back-end developer"}},vthrdm985a262al8qx3do:{id:"vthrdm985a262al8qx3do",author:"tylermcginnis",timestamp:1489579767190,optionOne:{votes:["tylermcginnis"],text:"find $50 yourself"},optionTwo:{votes:["johndoe"],text:"have your best friend find $500"}},xj352vofupe1dqz9emx13r:{id:"xj352vofupe1dqz9emx13r",author:"johndoe",timestamp:1493579767190,optionOne:{votes:["johndoe"],text:"write JavaScript"},optionTwo:{votes:["tylermcginnis"],text:"write Swift"}}};function p(e){var t=e.optionOneText,n=e.optionTwoText,o=e.author;return{id:Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),timestamp:Date.now(),author:o,optionOne:{votes:[],text:t},optionTwo:{votes:[],text:n}}}function m(e){return function(e){return new Promise((function(t,n){var o=e.author,s=p(e);setTimeout((function(){O=Object(h.a)(Object(h.a)({},O),{},Object(l.a)({},s.id,s)),console.log("user from api",b,o),b=Object(h.a)(Object(h.a)({},b),{},Object(l.a)({},o,Object(h.a)(Object(h.a)({},b[o]),{},{questions:b[o].questions.concat([s.id])}))),t(s)}),1e3)}))}(e)}function v(e){return function(e){var t=e.authedUser,n=e.qid,o=e.answer;return new Promise((function(e,s){setTimeout((function(){b=Object(h.a)(Object(h.a)({},b),{},Object(l.a)({},t,Object(h.a)(Object(h.a)({},b[t]),{},{answers:Object(h.a)(Object(h.a)({},b[t].answers),{},Object(l.a)({},n,o))}))),O=Object(h.a)(Object(h.a)({},O),{},Object(l.a)({},n,Object(h.a)(Object(h.a)({},O[n]),{},Object(l.a)({},o,Object(h.a)(Object(h.a)({},O[n][o]),{},{votes:O[n][o].votes.concat([t])}))))),e()}),500)}))}(e)}var x="GET_USERS";var f="GET_QUESTIONS",y="ADD_QUESTION",g="SAVE_QUESTIONS_ANSWER";function w(e,t){return function(n,o){var s=o();return console.log("USER:",s),m({optionOneText:e,optionTwoText:t,author:s.authedUser}).then((function(e){return n(function(e){return{type:y,question:e}}(e))}))}}function q(e,t){return function(n,o){var s=o().authedUser;return v({answer:t,authedUser:s,qid:e}).then((function(e){return n(function(e){return{type:g,answer:e}}(e))}))}}var T="SET_AUTHED_USER";var N=n(15),k=n.n(N);function U(){return function(e){return e(Object(N.showLoading)()),Promise.all([new Promise((function(e,t){setTimeout((function(){return e(Object(h.a)({},b))}),1e3)})),new Promise((function(e,t){setTimeout((function(){return e(Object(h.a)({},O))}),1e3)}))]).then((function(e){var t=Object(d.a)(e,2);return{users:t[0],questions:t[1]}})).then((function(t){var n=t.users,o=t.questions;e(function(e){return{type:x,users:e}}(n)),e(function(e){return{type:f,questions:e}}(o)),e({type:T,id:"sarahedo"}),e(Object(N.hideLoading)())}))}}var S=n(26),R=n(1),C=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props,t=e.optionOneText,n=e.user,o=t.text.slice(0,10)+"...",s=n.name,a=n.avatarURL;return Object(R.jsxs)("div",{className:"question center",children:[Object(R.jsx)("div",{children:Object(R.jsxs)("span",{children:[s," asks: "]})}),Object(R.jsxs)("div",{className:"question-info",children:[Object(R.jsx)("img",{src:a,alt:"Avatar of ".concat(s),className:"avatar"}),Object(R.jsxs)("div",{children:[Object(R.jsx)("h5",{children:"Would You Rather"}),Object(R.jsxs)("p",{children:["...",o]}),Object(R.jsx)("button",{children:"View Poll"})]})]})]})}}]),n}(o.Component);var z=Object(j.connect)((function(e,t){var n=e.authedUser,o=e.users,s=e.questions[t.id],a=s.optionOne;return s.optionTwo,{authedUser:n,optionOneText:a,user:o[s.author],question:s?p(s):null}}))(C),E=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.questionList;return Object(R.jsx)("div",{children:e.map((function(e){return Object(R.jsx)("div",{children:Object(R.jsx)(z,{id:e})},e)}))})}}]),n}(o.Component);var L=Object(j.connect)((function(e,t){var n=e.authedUser,o=e.users,s=e.questions,a=t.type,r=o[n],c=Object.keys(r.answers),i=Object.keys(s).sort((function(e,t){return s[t].timestamp-s[e].timestamp}));return"unanswered"===a?{currentUser:r,questionList:[].concat(Object(S.a)(i),Object(S.a)(c)).filter((function(e){return!(i.includes(e)&&c.includes(e))}))}:"answered"===a?{currentUser:r,questionList:Object(S.a)(c).filter((function(e){return c.includes(e)}))}:void 0}))(E),A=n(36),D=n(33),P=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(R.jsxs)("div",{className:"center",children:[Object(R.jsx)("h3",{children:"Questions"}),Object(R.jsxs)(A.a,{id:"controlled-tab-example",className:"mb-3",children:[Object(R.jsx)(D.a,{eventKey:"home",title:"Unanswered questions",children:Object(R.jsx)(L,{type:"unanswered"})}),Object(R.jsx)(D.a,{eventKey:"profile",title:"Answered Questions",children:Object(R.jsx)(L,{type:"answered"})})]})]})}}]),n}(o.Component);Object(j.connect)((function(e){var t=e.questions;return{questionIds:Object.keys(t).sort((function(e,n){return t[n].timestamp-t[e].timestamp}))}}))(P);var Q=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var o=arguments.length,s=new Array(o),a=0;a<o;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={answer:"",toResults:!1},e.onRadioChange=function(t){var n=t.target.value;e.setState((function(){return{answer:n}}))},e.formSubmit=function(t){t.preventDefault();var n=e.state.answer,o=e.props,s=o.dispatch,a=o.id;o.authedUser;s(q(n,a)),e.setState((function(){return{answer:"",toResults:!a}}))},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.state,t=e.answer,n=(e.toResults,this.props),o=n.optionOneText,s=n.optionTwoText,a=n.user,r=a.name,c=a.avatarURL;return Object(R.jsxs)("div",{className:"question",children:[Object(R.jsx)("div",{children:Object(R.jsxs)("span",{children:[r," asks: "]})}),Object(R.jsxs)("div",{className:"question-info",children:[Object(R.jsx)("img",{src:c,alt:"Avatar of ".concat(r),className:"avatar"}),Object(R.jsxs)("div",{children:[Object(R.jsx)("h5",{children:"Would You Rather..."}),Object(R.jsxs)("form",{className:"vote-form",onSubmit:this.formSubmit,children:[Object(R.jsx)("div",{className:"radio",children:Object(R.jsxs)("label",{children:[Object(R.jsx)("input",{type:"radio",value:o,checked:t===o,onChange:this.onRadioChange}),o]})}),Object(R.jsx)("div",{className:"radio",children:Object(R.jsxs)("label",{children:[Object(R.jsx)("input",{type:"radio",value:s,checked:t===s,onChange:this.onRadioChange}),s]})}),Object(R.jsx)("button",{className:"btn",type:"submit",children:"Submit"})]})]})]})]})}}]),n}(o.Component);Object(j.connect)((function(e,t){var n=e.authedUser,o=e.questions,s=e.users,a=t.match.params.id,r=o[a];console.log("this is the question info: ",r);var c=r.optionOne.text,i=r.optionTwo.text,u=s[r.author];return console.log("this is the author: ",u),Object(l.a)({id:a,question:r,optionOneText:c,optionTwoText:i,user:u,authedUser:n},"question",r?p(c):null)}))(Q);var V=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var o=arguments.length,s=new Array(o),a=0;a<o;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={optionOne:"",optionTwo:""},e.handleChange=function(t){var n=t.target.value;e.setState((function(){return Object(h.a)(Object(h.a)({},e.state),{},Object(l.a)({},t.target.name,n))}))},e.handleSubmit=function(t){t.preventDefault(),console.log("Option one: ",e.state.optionOne),console.log("Option two: ",e.state.optionTwo),(0,e.props.dispatch)(w(e.state.optionOne,e.state.optionTwo)),e.setState((function(){return{optionOne:"",optionTwo:""}}))},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.state,t=e.optionOne,n=e.optionTwo;return Object(R.jsxs)("div",{children:[Object(R.jsx)("h3",{className:"center",children:"Create New Question"}),Object(R.jsxs)("form",{className:"new-question",onSubmit:this.handleSubmit,children:[Object(R.jsx)("p",{children:"Would you rather..."}),Object(R.jsx)("input",{placeholder:"Enter Option One Text Here",type:"text",name:"optionOne",value:t,onChange:this.handleChange,className:"textarea",maxLength:280}),Object(R.jsx)("span",{children:"OR"}),Object(R.jsx)("input",{placeholder:"Enter Option Two Text Here",type:"text",name:"optionTwo",value:n,onChange:this.handleChange,className:"textarea",maxLength:280}),Object(R.jsx)("button",{className:"btn",type:"submit",children:"Submit"})]})]})}}]),n}(o.Component),_=(Object(j.connect)()(V),function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props,t=e.optionOneText,n=e.optionTwoText,o=e.optionOneVotes,s=e.optionTwoVotes,a=e.user,r=e.users,c=(e.question,e.authedUser),i=Object.keys(r).length,u=o.find((function(e){return e===c})),j=s.find((function(e){return e===c})),d=I(o.length,i),l=I(s.length,i),h=a.name,b=a.avatarURL;return Object(R.jsxs)("div",{className:"question question-results",children:[Object(R.jsx)("div",{className:"results-authorName",children:Object(R.jsxs)("span",{children:["Asked by ",h]})}),Object(R.jsxs)("div",{className:"results-grid",children:[Object(R.jsx)("div",{className:"results-author-img",children:Object(R.jsx)("img",{src:b,alt:"Avatar of ".concat(h),className:"avatar"})}),Object(R.jsxs)("div",{className:"results-side-count",children:[Object(R.jsx)("h3",{className:"results-title",children:"Results:"}),Object(R.jsxs)("div",{className:"chart",children:[Object(R.jsxs)("span",{className:u?"your-vote":"none",children:["Your ",Object(R.jsx)("br",{}),"Vote"]}),Object(R.jsxs)("h3",{children:["Would you rather ",t,"?"]}),Object(R.jsx)("div",{children:Object(R.jsx)("div",{id:"option-1",className:"option",children:Object(R.jsx)("div",{className:"results",children:Object(R.jsx)("div",{className:"on",style:{width:"".concat(d,"%")},children:Object(R.jsx)("span",{className:"count",children:Object(R.jsx)("p",{children:"".concat(d,"%")})})})})})}),Object(R.jsx)("p",{children:"".concat(o.length," out of ").concat(i," votes")})]}),Object(R.jsxs)("div",{className:"chart",children:[Object(R.jsxs)("span",{className:j?"your-vote optTwo":"none",children:["Your ",Object(R.jsx)("br",{}),"Vote"]}),Object(R.jsxs)("h3",{children:["Would you rather ",n,"?"]}),Object(R.jsx)("div",{children:Object(R.jsx)("div",{id:"option-2",className:"option",children:Object(R.jsx)("div",{className:"results",children:Object(R.jsx)("div",{className:"on",style:{width:"".concat(l,"%")},children:Object(R.jsx)("span",{className:"count",children:Object(R.jsx)("p",{children:"".concat(l,"%")})})})})})}),Object(R.jsx)("p",{children:"".concat(s.length," out of ").concat(i," votes")})]})]})]})]})}}]),n}(o.Component));function I(e,t){return Math.floor(100*e/t)}Object(j.connect)((function(e,t){var n=e.authedUser,o=e.questions,s=e.users,a=o[t.match.params.id];console.log("this is the question info: ",a);var r=a.optionOne.text,c=a.optionTwo.text,i=a.optionOne.votes,u=a.optionTwo.votes,j=s[a.author];return console.log("This is user info",j.id),Object(l.a)({authedUser:n,question:a,optionOneText:r,optionTwoText:c,optionOneVotes:i,optionTwoVotes:u,user:j,users:s},"question",a?p(r):null)}))(_);var W=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.usersList;return Object(R.jsx)("div",{className:"question leaderboard",children:e.map((function(e,t){var n=e.name,o=e.avatarURL,s=e.answers,a=e.questions,r=Object.keys(s).length,c=a.length,i=r+c;return Object(R.jsx)("div",{className:"board",children:Object(R.jsxs)("div",{className:"leaderboard-grid",children:[Object(R.jsx)("div",{className:"leaderboard-img",children:Object(R.jsx)("img",{src:o,alt:"Avatar of ".concat(n),className:"avatar"})}),Object(R.jsxs)("div",{className:"leaderboard-info",children:[Object(R.jsx)("h3",{children:n}),Object(R.jsxs)("p",{children:["Answered Questions: ",r]}),Object(R.jsx)("hr",{}),Object(R.jsxs)("p",{children:["Created Questions: ",c]})]}),Object(R.jsxs)("div",{className:"score",children:[Object(R.jsx)("p",{children:"Score"}),Object(R.jsx)("p",{children:Object(R.jsx)("span",{className:"score-shape",children:i})})]})]})},t)}))})}}]),n}(o.Component);var J=Object(j.connect)((function(e){var t=e.users;return{usersList:Object.values(t)}}))(W),Y=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.dispatch)(U())}},{key:"render",value:function(){return Object(R.jsxs)("div",{children:[Object(R.jsx)(k.a,{}),!0===this.props.loading?null:Object(R.jsx)(J,{})]})}}]),n}(o.Component);var K=Object(j.connect)((function(e){return{loading:null===e.authedUser}}))(Y),M=n(18);var B=Object(M.b)({authedUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return t.type===T?t.id:e},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return t.type===x?Object(h.a)(Object(h.a)({},e),t.users):e},questions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(h.a)(Object(h.a)({},e),t.questions);case y:return Object(h.a)(Object(h.a)({},e),{},Object(l.a)({},t.question.id,t.question));case g:return Object(h.a)(Object(h.a)({},e),{},Object(l.a)({},t.questions.id.answer,t.answer));default:return e}},loadingBar:N.loadingBarReducer}),G=n(35),H=function(e){return function(t){return function(n){console.group(n.type),console.log("The action is: ",n);var o=t(n);return console.log("The new state is: ",e.getState()),console.groupEnd(),o}}},$=Object(M.a)(G.a,H),F=Object(M.c)(B,$);a.a.render(Object(R.jsx)(j.Provider,{store:F,children:Object(R.jsx)(K,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.3de695a4.chunk.js.map