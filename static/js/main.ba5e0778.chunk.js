(this["webpackJsonpwould-you-rather-app"]=this["webpackJsonpwould-you-rather-app"]||[]).push([[0],{49:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n(19),r=n.n(a),s=(n(49),n(13)),i=n(14),c=n(16),u=n(15),d=n(24),j=n(5),l=n(7),b=n(44),h=n(9),p=n(4),O={sarahedo:{id:"sarahedo",name:"Sarah Edo",avatarURL:"https://s3.amazonaws.com/cms-assets.tutsplus.com/uploads/users/107/profiles/2394/profileImage/avatar-new400.jpg",answers:{"8xf0y6ziyjabvozdd253nd":"optionOne","6ni6ok3ym7mf1p33lnez":"optionTwo",am8ehyc8byjqgar0jgpub9:"optionTwo",loxhs1bqm25b708cmbf3g:"optionTwo"},questions:["8xf0y6ziyjabvozdd253nd","am8ehyc8byjqgar0jgpub9"]},tylermcginnis:{id:"tylermcginnis",name:"Tyler McGinnis",avatarURL:"https://external-preview.redd.it/8v3LkYRXddBkoqJkH_0OixpKyqcEOKqokxpDzAc2JYI.jpg?auto=webp&s=7348fcc4defdcfb5ca82553fcca8184061147d54",answers:{vthrdm985a262al8qx3do:"optionOne",xj352vofupe1dqz9emx13r:"optionTwo"},questions:["loxhs1bqm25b708cmbf3g","vthrdm985a262al8qx3do"]},johndoe:{id:"johndoe",name:"John Doe",avatarURL:"https://miro.medium.com/max/566/1*n-FPAObgPCDmxNKeGqyWvw.jpeg",answers:{xj352vofupe1dqz9emx13r:"optionOne",vthrdm985a262al8qx3do:"optionTwo","6ni6ok3ym7mf1p33lnez":"optionTwo"},questions:["6ni6ok3ym7mf1p33lnez","xj352vofupe1dqz9emx13r"]}},m={"8xf0y6ziyjabvozdd253nd":{id:"8xf0y6ziyjabvozdd253nd",author:"sarahedo",timestamp:1467166872634,optionOne:{votes:["sarahedo"],text:"have horrible short term memory"},optionTwo:{votes:[],text:"have horrible long term memory"}},"6ni6ok3ym7mf1p33lnez":{id:"6ni6ok3ym7mf1p33lnez",author:"johndoe",timestamp:1468479767190,optionOne:{votes:[],text:"become a superhero"},optionTwo:{votes:["johndoe","sarahedo"],text:"become a supervillain"}},am8ehyc8byjqgar0jgpub9:{id:"am8ehyc8byjqgar0jgpub9",author:"sarahedo",timestamp:1488579767190,optionOne:{votes:[],text:"be telekinetic"},optionTwo:{votes:["sarahedo"],text:"be telepathic"}},loxhs1bqm25b708cmbf3g:{id:"loxhs1bqm25b708cmbf3g",author:"tylermcginnis",timestamp:1482579767190,optionOne:{votes:[],text:"be a front-end developer"},optionTwo:{votes:["sarahedo"],text:"be a back-end developer"}},vthrdm985a262al8qx3do:{id:"vthrdm985a262al8qx3do",author:"tylermcginnis",timestamp:1489579767190,optionOne:{votes:["tylermcginnis"],text:"find $50 yourself"},optionTwo:{votes:["johndoe"],text:"have your best friend find $500"}},xj352vofupe1dqz9emx13r:{id:"xj352vofupe1dqz9emx13r",author:"johndoe",timestamp:1493579767190,optionOne:{votes:["johndoe"],text:"write JavaScript"},optionTwo:{votes:["tylermcginnis"],text:"write Swift"}}};function v(e){var t=e.optionOneText,n=e.optionTwoText,o=e.author;return{id:Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),timestamp:Date.now(),author:o,optionOne:{votes:[],text:t},optionTwo:{votes:[],text:n}}}function x(e){return function(e){return new Promise((function(t,n){var o=e.author,a=v(e);setTimeout((function(){m=Object(p.a)(Object(p.a)({},m),{},Object(h.a)({},a.id,a)),console.log("user from api",O,o),O=Object(p.a)(Object(p.a)({},O),{},Object(h.a)({},o,Object(p.a)(Object(p.a)({},O[o]),{},{questions:O[o].questions.concat([a.id])}))),t(a)}),1e3)}))}(e)}var f="GET_USERS";var y="GET_QUESTIONS",g="ADD_QUESTION",w="SAVE_QUESTIONS_ANSWER";function q(e,t){return function(n,o){var a=o();return console.log("USER:",a),x({optionOneText:e,optionTwoText:t,author:a.authedUser}).then((function(e){return n(function(e){return{type:g,question:e}}(e))}))}}var T="SET_AUTHED_USER";var N=n(20),k=n.n(N);function S(){return function(e){return e(Object(N.showLoading)()),Promise.all([new Promise((function(e,t){setTimeout((function(){return e(Object(p.a)({},O))}),1e3)})),new Promise((function(e,t){setTimeout((function(){return e(Object(p.a)({},m))}),1e3)}))]).then((function(e){var t=Object(b.a)(e,2);return{users:t[0],questions:t[1]}})).then((function(t){var n=t.users,o=t.questions;e(function(e){return{type:f,users:e}}(n)),e(function(e){return{type:y,questions:e}}(o)),e({type:T,id:"sarahedo"}),e(Object(N.hideLoading)())}))}}var U=n(33),z=n(1),E=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.optionOneText,n=e.user,o=t.text.slice(0,10)+"...",a=n.name,r=n.avatarURL;return Object(z.jsxs)("div",{className:"question center",children:[Object(z.jsx)("div",{children:Object(z.jsxs)("span",{children:[a," asks: "]})}),Object(z.jsxs)("div",{className:"question-info",children:[Object(z.jsx)("img",{src:r,alt:"Avatar of ".concat(a),className:"avatar"}),Object(z.jsxs)("div",{children:[Object(z.jsx)("h5",{children:"Would You Rather"}),Object(z.jsxs)("p",{children:["...",o]}),Object(z.jsx)("button",{children:"View Poll"})]})]})]})}}]),n}(o.Component);var C=Object(l.connect)((function(e,t){var n=e.authedUser,o=e.users,a=e.questions[t.id],r=a.optionOne;return a.optionTwo,{authedUser:n,optionOneText:r,user:o[a.author],question:a?v(a):null}}))(E),L=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.questionList;return Object(z.jsx)("div",{children:e.map((function(e){return Object(z.jsx)("div",{children:Object(z.jsx)(C,{id:e})},e)}))})}}]),n}(o.Component);var R=Object(l.connect)((function(e,t){var n=e.authedUser,o=e.users,a=e.questions,r=t.type,s=o[n],i=Object.keys(s.answers),c=Object.keys(a).sort((function(e,t){return a[t].timestamp-a[e].timestamp}));return"unanswered"===r?{currentUser:s,questionList:[].concat(Object(U.a)(c),Object(U.a)(i)).filter((function(e){return!(c.includes(e)&&i.includes(e))}))}:"answered"===r?{currentUser:s,questionList:Object(U.a)(i).filter((function(e){return i.includes(e)}))}:void 0}))(L),A=n(43),D=n(38),Q=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(z.jsxs)("div",{className:"center",children:[Object(z.jsx)("h3",{children:"Questions"}),Object(z.jsxs)(A.a,{id:"controlled-tab-example",className:"mb-3",children:[Object(z.jsx)(D.a,{eventKey:"home",title:"Unanswered questions",children:Object(z.jsx)(R,{type:"unanswered"})}),Object(z.jsx)(D.a,{eventKey:"profile",title:"Answered Questions",children:Object(z.jsx)(R,{type:"answered"})})]})]})}}]),n}(o.Component);var P=Object(l.connect)((function(e){var t=e.questions;return{questionIds:Object.keys(t).sort((function(e,n){return t[n].timestamp-t[e].timestamp}))}}))(Q),_=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={optionOne:"",optionTwo:""},e.handleChange=function(t){var n=t.target.value;e.setState((function(){return Object(p.a)(Object(p.a)({},e.state),{},Object(h.a)({},t.target.name,n))}))},e.handleSubmit=function(t){t.preventDefault(),console.log("Option one: ",e.state.optionOne),console.log("Option two: ",e.state.optionTwo),(0,e.props.dispatch)(q(e.state.optionOne,e.state.optionTwo)),e.setState((function(){return{optionOne:"",optionTwo:""}}))},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state,t=e.optionOne,n=e.optionTwo;return Object(z.jsxs)("div",{children:[Object(z.jsx)("h3",{className:"center",children:"Create New Question"}),Object(z.jsxs)("form",{className:"new-question",onSubmit:this.handleSubmit,children:[Object(z.jsx)("p",{children:"Would you rather..."}),Object(z.jsx)("input",{placeholder:"Enter Option One Text Here",type:"text",name:"optionOne",value:t,onChange:this.handleChange,className:"textarea",maxLength:280}),Object(z.jsx)("span",{children:"OR"}),Object(z.jsx)("input",{placeholder:"Enter Option Two Text Here",type:"text",name:"optionTwo",value:n,onChange:this.handleChange,className:"textarea",maxLength:280}),Object(z.jsx)("button",{className:"btn",type:"submit",children:"Submit"})]})]})}}]),n}(o.Component),I=Object(l.connect)()(_),J=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.usersList;return Object(z.jsx)("div",{className:"question leaderboard",children:e.map((function(e,t){var n=e.name,o=e.avatarURL,a=e.answers,r=e.questions,s=Object.keys(a).length,i=r.length,c=s+i;return Object(z.jsx)("div",{className:"board",children:Object(z.jsxs)("div",{className:"leaderboard-grid",children:[Object(z.jsx)("div",{className:"leaderboard-img",children:Object(z.jsx)("img",{src:o,alt:"Avatar of ".concat(n),className:"avatar"})}),Object(z.jsxs)("div",{className:"leaderboard-info",children:[Object(z.jsx)("h3",{children:n}),Object(z.jsxs)("p",{children:["Answered Questions: ",s]}),Object(z.jsx)("hr",{}),Object(z.jsxs)("p",{children:["Created Questions: ",i]})]}),Object(z.jsxs)("div",{className:"score",children:[Object(z.jsx)("p",{children:"Score"}),Object(z.jsx)("p",{children:Object(z.jsx)("span",{className:"score-shape",children:c})})]})]})},t)}))})}}]),n}(o.Component);var H=Object(l.connect)((function(e){var t=e.users;return{usersList:Object.values(t)}}))(J);function K(){return Object(z.jsx)("nav",{className:"nav",children:Object(z.jsxs)("ul",{children:[Object(z.jsx)("li",{children:Object(z.jsx)(d.b,{to:"/",exact:!0,activeClassName:"active",children:"Home"})}),Object(z.jsx)("li",{children:Object(z.jsx)(d.b,{to:"/add",activeClassName:"active",children:"New Question"})}),Object(z.jsx)("li",{children:Object(z.jsx)(d.b,{to:"/leaderboard",activeClassName:"active",children:"Leaderboard"})})]})})}var B=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.dispatch)(S())}},{key:"render",value:function(){return Object(z.jsx)(d.a,{children:Object(z.jsxs)(o.Fragment,{children:[Object(z.jsx)(k.a,{}),Object(z.jsxs)("div",{className:"container",children:[Object(z.jsx)(K,{}),!0===this.props.loading?null:Object(z.jsxs)("div",{children:[Object(z.jsx)(j.a,{path:"/",exact:!0,component:P}),Object(z.jsx)(j.a,{path:"/add",component:I}),Object(z.jsx)(j.a,{path:"/leaderboard",component:H})]})]})]})})}}]),n}(o.Component);var G=Object(l.connect)((function(e){return{loading:null===e.authedUser}}))(B),M=n(23);var W=Object(M.b)({authedUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return t.type===T?t.id:e},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return t.type===f?Object(p.a)(Object(p.a)({},e),t.users):e},questions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(p.a)(Object(p.a)({},e),t.questions);case g:return Object(p.a)(Object(p.a)({},e),{},Object(h.a)({},t.question.id,t.question));case w:return Object(p.a)(Object(p.a)({},e),{},Object(h.a)({},t.questions.id.answer,t.answer));default:return e}},loadingBar:N.loadingBarReducer}),Y=n(42),F=function(e){return function(t){return function(n){console.group(n.type),console.log("The action is: ",n);var o=t(n);return console.log("The new state is: ",e.getState()),console.groupEnd(),o}}},V=Object(M.a)(Y.a,F),$=Object(M.c)(W,V);r.a.render(Object(z.jsx)(l.Provider,{store:$,children:Object(z.jsx)(G,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.ba5e0778.chunk.js.map