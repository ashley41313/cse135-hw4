(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,n){},33:function(e,t,n){e.exports=n(54)},38:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(27),c=n.n(l),o=(n(38),n(14),n(28)),i=n(21),u=(n(15),n(32)),m=n(29),s=n.n(m),p=n(22),E=n.n(p),d=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,t,r.a.createElement("br",null))},h=function(e){var t=e.value,n=e.onChange,a=Object(u.a)(e,["value","onChange"]);return r.a.createElement("input",Object.assign({},a,{value:t,onChange:function(e){return n(e.target.value)}}))},b=function(e){return r.a.createElement("button",e,"submit")},g=s()(E()("email","setEmail"),E()("password","setPassword"))((function(e){var t=e.setEmail,n=e.setPassword,a=e.email,l=e.password,c=e.onSubmit;return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null,"email: ",r.a.createElement(h,{value:a,onChange:t})),r.a.createElement(d,null,"password: ",r.a.createElement(h,{value:l,onChange:n,type:"password"})),r.a.createElement(b,{onClick:function(){return c(a,l)}}))})),f=n(6),O=n(7),w=n(9),v=n(8),j=n(10),y=function(e){function t(){return Object(f.a)(this,t),Object(w.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{backgroundColor:"pink",width:"100%",height:"500px"}},r.a.createElement("h1",null,"Speed component ... LOADED"),r.a.createElement("p",null,"Will get from database"),r.a.createElement("p",null,"replace with pie chart"))}}]),t}(r.a.Component),k=function(e){function t(){return Object(f.a)(this,t),Object(w.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{backgroundColor:"pink",width:"100%",height:"500px"}},r.a.createElement("h1",null,"Browser component ... LOADED"),r.a.createElement("p",null,"Will get from database"),r.a.createElement("p",null,"replace with some table"))}}]),t}(r.a.Component),C=n(13),A=n(11),I=function(e){function t(){return Object(f.a)(this,t),Object(w.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return r.a.createElement(C.a,null,r.a.createElement("div",{id:"inner"},r.a.createElement("p",null,"User signed in. Access Granted."),r.a.createElement(C.b,{to:"/reports/speed"},"Load Speed Component"),r.a.createElement(C.b,{to:"/reports/browsers"},"Load Browser Component"),r.a.createElement(A.d,null,r.a.createElement(A.b,{path:"/reports/speed"},r.a.createElement(y,null)),r.a.createElement(A.b,{path:"/reports/browsers"},r.a.createElement(k,null)))))}}]),t}(r.a.Component),S=function(e){function t(){return Object(f.a)(this,t),Object(w.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return r.a.createElement("p",null,":-)")}}]),t}(r.a.Component),B=i.initializeApp({apiKey:"AIzaSyBnziJQ04i79BOojmoxOKtG-UyLR6bmneE",authDomain:"homework-4-f09d0.firebaseapp.com",databaseURL:"https://homework-4-f09d0.firebaseio.com",projectId:"homework-4-f09d0",storageBucket:"homework-4-f09d0.appspot.com",messagingSenderId:"615881620864",appId:"1:615881620864:web:4533cba4dd0af45b32d565",measurementId:"G-FESZ10ZM8Y"}),L=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,t,r.a.createElement("hr",null))},P=B.auth(),x={googleProvider:new i.auth.GoogleAuthProvider},D=Object(o.a)({providers:x,firebaseAppAuth:P})((function(e){var t=e.user,n=e.signOut,a=e.signInWithEmailAndPassword,l=e.signInWithGoogle,c=e.createUserWithEmailAndPassword;return r.a.createElement("header",null,r.a.createElement(C.a,null,r.a.createElement(r.a.Fragment,null,t?r.a.createElement("section",null,r.a.createElement("div",{style:{height:"1000px"}},r.a.createElement(L,null,r.a.createElement("footer",null,r.a.createElement("h3",null,"Sign out."),r.a.createElement("button",{onClick:n,to:"/login"},"sign out"))))):r.a.createElement("section",null,r.a.createElement("div",null,r.a.createElement("footer",null,r.a.createElement(L,null,r.a.createElement("h3",null,"create user"),r.a.createElement(g,{onSubmit:c})),r.a.createElement(L,null,r.a.createElement("h3",null,"sign in"),r.a.createElement(g,{onSubmit:a})),r.a.createElement(L,null,r.a.createElement("h3",null,"sign in with google"),r.a.createElement("button",{onClick:l},"sign in with google"))))),t?r.a.createElement("div",{id:"inner"},r.a.createElement(A.a,{to:"/dashboard"})):r.a.createElement("div",{id:"inner"},r.a.createElement("p",null,"Login to continue.")),r.a.createElement(A.d,null,r.a.createElement(A.b,{path:"/login"},r.a.createElement(S,null)),r.a.createElement(A.b,{path:"/dashboard"},t?r.a.createElement(I,null):r.a.createElement("p",null))))))}));c.a.render(r.a.createElement(D,null),document.getElementById("root")),document.getElementById("myImg").src="https://us-central1-homework3-59845.cloudfunctions.net/sessionize"}},[[33,1,2]]]);
//# sourceMappingURL=main.8f80135e.chunk.js.map