(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{134:function(e,t,n){},135:function(e,t,n){},136:function(e,t,n){},168:function(e,t,n){},169:function(e,t,n){},275:function(e,t,n){},276:function(e,t,n){},277:function(e,t,n){},278:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(27),c=n.n(r),s=(n(134),n(135),n(8)),o=(n(136),n(17)),i=n(10),l=n(283),u=n(284),j=n(123),d=n(1),b=function(){return Object(d.jsx)("footer",{style:{width:"100%",position:"relative",bottom:0,display:"flex",justifyContent:"center"},children:Object(d.jsx)(l.a,{children:Object(d.jsx)(u.a,{children:Object(d.jsx)(j.a,{style:{color:"black"},className:"text-center py-3",children:"Made With \u2764, Personal Pad"})})})})},p=n(289),h=n(290),O=n(288),m=n(125),f=n(287),x=n(7),g=n(11),v=n(25),y="USER_LOGIN_REQUEST",S="USER_LOGIN_SUCCESS",E="USER_LOGIN_FAIL",C="USER_LOGOUT",N="USER_REGISTER_REQUEST",I="USER_REGISTER_SUCCESS",w="USER_REGISTER_FAIL",L="USER_UPDATE_REQUEST",T="USER_UPDATE_SUCCESS",_="USER_UPDATE_FAIL",k=n(28),P=n.n(k),U=function(e,t){return function(){var n=Object(v.a)(Object(g.a)().mark((function n(a){var r,c,s;return Object(g.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a({type:y}),r={headers:{"Content-type":"application/json"}},n.next=5,P.a.post("/api/users/login",{email:e,password:t},r);case 5:c=n.sent,s=c.data,a({type:S,payload:s}),localStorage.setItem("userInfo",JSON.stringify(s)),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),a({type:E,payload:n.t0.response&&n.t0.response.data.message?n.t0.response.data.message:n.t0.message});case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e){return n.apply(this,arguments)}}()},R=function(){return function(){var e=Object(v.a)(Object(g.a)().mark((function e(t){return Object(g.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.removeItem("userInfo"),t({type:C});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},D=function(e,t,n,a){return function(){var r=Object(v.a)(Object(g.a)().mark((function r(c){var s,o,i;return Object(g.a)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,c({type:N}),s={headers:{"Content-type":"application/json"}},r.next=5,P.a.post("/api/users",{name:e,pic:a,email:t,password:n},s);case 5:o=r.sent,i=o.data,c({type:I,payload:i}),c({type:S,payload:i}),localStorage.setItem("userInfo",JSON.stringify(i)),r.next=15;break;case 12:r.prev=12,r.t0=r.catch(0),c({type:w,payload:r.t0.response&&r.t0.response.data.message?r.t0.response.data.message:r.t0.message});case 15:case"end":return r.stop()}}),r,null,[[0,12]])})));return function(e){return r.apply(this,arguments)}}()};var A=function(e){var t=e.setSearch,n=Object(x.b)(),r=Object(x.c)((function(e){return e.userLogin})).userInfo;return Object(a.useEffect)((function(){}),[r]),Object(d.jsx)(p.a,{expand:"lg",className:"navbar navbar-expand-lg bg-dark","data-bs-theme":"dark",children:Object(d.jsxs)(l.a,{children:[Object(d.jsx)(p.a.Brand,{children:Object(d.jsx)(o.b,{to:"/",style:{textDecoration:"none"},children:" Personal Pad "})}),Object(d.jsx)(p.a.Toggle,{"aria-controls":"navbarScroll"}),Object(d.jsxs)(p.a.Collapse,{id:"navbarScroll",children:[Object(d.jsx)(h.a,{className:"m-auto",children:r&&Object(d.jsx)(O.a,{className:"d-flex",children:Object(d.jsx)(m.a,{style:{color:"black"},type:"search",placeholder:"Search",className:"me-2",onChange:function(e){return t(e.target.value)}})})}),Object(d.jsx)(h.a,{style:{maxHeight:"100px",marginRight:"50px"},navbarScroll:!0,children:r?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(h.a.Link,{children:Object(d.jsx)(o.b,{to:"/mynotes",style:{textDecoration:"none"},children:" My Notes "})}),Object(d.jsxs)(f.a,{title:"".concat(r.name),id:"navbarScrollingDropdown",children:[Object(d.jsx)(f.a.Item,{children:Object(d.jsx)(o.b,{to:"/profile",style:{textDecoration:"none"},children:" My Profile "})}),Object(d.jsx)(f.a.Divider,{}),Object(d.jsx)(f.a.Item,{onClick:function(){n(R())},children:"Logout"})]})]}):Object(d.jsx)(h.a.Link,{children:Object(d.jsx)(o.b,{to:"/login",style:{textDecoration:"none"},children:" Login "})})})]})]})})},G=n(127);n(168);var F=function(e){var t=e.history,n=Object(x.c)((function(e){return e.userLogin})).userInfo;return Object(a.useEffect)((function(){n&&t.push("/mynotes")}),[t,n]),Object(d.jsx)("div",{className:"main",children:Object(d.jsx)(l.a,{children:Object(d.jsx)(u.a,{children:Object(d.jsxs)("div",{className:"intro-text",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:"title",children:"Welcome to Personal Pad"}),Object(d.jsx)("p",{className:"subtitle",children:"One Safe place for all your personal notes:)"})]}),Object(d.jsxs)("div",{className:"buttonContainer",children:[Object(d.jsx)(o.b,{to:"/login",children:Object(d.jsx)(G.a,{size:"lg",className:"btn btn-primary btn-lg",children:"Login"})}),Object(d.jsx)(o.b,{to:"/register",children:Object(d.jsx)(G.a,{variant:"outline-primary",size:"lg",className:"btn btn-primary btn-lg",children:"Signup"})})]})]})})})})},B=n(291),z=n(293),H=n(286);n(169);var Q=function(e){var t=e.children,n=e.title;return Object(d.jsx)("div",{className:"mainback",children:Object(d.jsx)(l.a,{children:Object(d.jsx)(u.a,{children:Object(d.jsxs)("div",{className:"page",children:[n&&Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("h1",{className:"heading",children:n})}),t]})})})})},J=n(46),M=n.n(J),W="NOTES_LIST_REQUEST",q="NOTES_LIST_SUCCESS",K="NOTES_LIST_FAIL",Z="NOTES_CREATE_REQUEST",V="NOTES_CREATE_SUCCESS",X="NOTES_CREATE_FAIL",Y="NOTES_UPDATE_REQUEST",$="NOTES_UPDATE_SUCCESS",ee="NOTES_UPDATE_FAIL",te="NOTES_DELETE_REQUEST",ne="NOTES_DELETE_SUCCESS",ae="NOTES_DELETE_FAIL",re=function(){return function(){var e=Object(v.a)(Object(g.a)().mark((function e(t,n){var a,r,c,s,o,i;return Object(g.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:W}),a=n(),r=a.userLogin.userInfo,c={headers:{Authorization:"Bearer ".concat(r.token)}},e.next=6,P.a.get("/api/notes",c);case 6:s=e.sent,o=s.data,t({type:q,payload:o}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),i=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,t({type:K,payload:i});case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}()},ce=function(e,t,n){return function(){var a=Object(v.a)(Object(g.a)().mark((function a(r,c){var s,o,i,l,u,j;return Object(g.a)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,r({type:Z}),s=c(),o=s.userLogin.userInfo,i={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(o.token)}},a.next=6,P.a.post("/api/notes/create",{title:e,content:t,category:n},i);case 6:l=a.sent,u=l.data,r({type:V,payload:u}),a.next=15;break;case 11:a.prev=11,a.t0=a.catch(0),j=a.t0.response&&a.t0.response.data.message?a.t0.response.data.message:a.t0.message,r({type:X,payload:j});case 15:case"end":return a.stop()}}),a,null,[[0,11]])})));return function(e,t){return a.apply(this,arguments)}}()},se=function(e){return function(){var t=Object(v.a)(Object(g.a)().mark((function t(n,a){var r,c,s,o,i,l;return Object(g.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:te}),r=a(),c=r.userLogin.userInfo,s={headers:{Authorization:"Bearer ".concat(c.token)}},t.next=6,P.a.delete("/api/notes/".concat(e),s);case 6:o=t.sent,i=o.data,n({type:ne,payload:i}),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),l=t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message,n({type:ae,payload:l});case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,n){return t.apply(this,arguments)}}()},oe=function(e,t,n,a){return function(){var r=Object(v.a)(Object(g.a)().mark((function r(c,s){var o,i,l,u,j,d;return Object(g.a)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,c({type:Y}),o=s(),i=o.userLogin.userInfo,l={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(i.token)}},r.next=6,P.a.put("/api/notes/".concat(e),{title:t,content:n,category:a},l);case 6:u=r.sent,j=u.data,c({type:$,payload:j}),r.next=15;break;case 11:r.prev=11,r.t0=r.catch(0),d=r.t0.response&&r.t0.response.data.message?r.t0.response.data.message:r.t0.message,c({type:ee,payload:d});case 15:case"end":return r.stop()}}),r,null,[[0,11]])})));return function(e,t){return r.apply(this,arguments)}}()},ie=n(285);var le=function(e){var t=e.size,n=void 0===t?100:t;return Object(d.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},children:Object(d.jsx)(ie.a,{style:{width:n,height:n},animation:"border"})})},ue=n(292),je=function(e){var t=e.variant,n=void 0===t?"info":t,a=e.children;return Object(d.jsx)(ue.a,{variant:n,style:{fontSize:20},children:Object(d.jsx)("strong",{children:a})})};var de=function(e){var t=e.history,n=e.search,r=Object(x.b)(),c=Object(x.c)((function(e){return e.noteList})),s=c.loading,i=c.error,l=c.notes,u=Object(x.c)((function(e){return e.userLogin})).userInfo,j=Object(x.c)((function(e){return e.noteDelete})),b=j.loading,p=j.error,h=j.success,O=Object(x.c)((function(e){return e.noteCreate})).success,m=Object(x.c)((function(e){return e.noteUpdate})).success;return Object(a.useEffect)((function(){r(re()),u||t.push("/")}),[r,t,u,h,O,m]),Object(d.jsxs)(Q,{title:"Welcome Back ".concat(u&&u.name,".."),children:[console.log(l),Object(d.jsx)(o.b,{to:"/createnote",children:Object(d.jsx)(G.a,{style:{marginLeft:10,marginBottom:6},className:"btn btn-outline-primary",children:"Create new Note"})}),i&&Object(d.jsx)(je,{variant:"danger",children:i}),p&&Object(d.jsx)(je,{variant:"danger",children:p}),s&&Object(d.jsx)(le,{}),b&&Object(d.jsx)(le,{}),l&&l.filter((function(e){return e.title.toLowerCase().includes(n.toLowerCase())})).reverse().map((function(e){return Object(d.jsx)(B.a,{children:Object(d.jsxs)(z.a,{style:{margin:10},children:[Object(d.jsxs)(z.a.Header,{style:{display:"flex",backgroundColor:"#CFD8DC"},children:[Object(d.jsx)("span",{style:{color:"black",textDecoration:"none",flex:1,cursor:"pointer",alignSelf:"center",fontSize:18},children:Object(d.jsx)(B.a.Toggle,{as:z.a.Text,variant:"link",eventKey:"0",children:e.title})}),Object(d.jsxs)("div",{children:[Object(d.jsx)(G.a,{href:"/note/".concat(e._id),className:"btn btn-outline-success",children:"Edit"}),Object(d.jsx)(G.a,{className:"btn btn-outline-danger mx-2",variant:"danger",onClick:function(){return t=e._id,void(window.confirm("Are you sure?")&&r(se(t)));var t},children:"Delete"})]})]}),Object(d.jsx)(B.a.Collapse,{style:{backgroundColor:"#E0F2F1"},eventKey:"0",children:Object(d.jsxs)(z.a.Body,{children:[Object(d.jsx)("h5",{children:Object(d.jsxs)(H.a,{className:"badge bg-info",variant:"success",children:["Category - ",e.category]})}),Object(d.jsxs)("blockquote",{className:"blockquote mb-0",children:[Object(d.jsx)(M.a,{children:e.content}),Object(d.jsxs)("footer",{className:"blockquote-footer text-danger-emphasis",children:["Created on"," ",Object(d.jsx)("cite",{title:"Source Title",children:e.createdAt.substring(0,10)})]})]})]})})]},e._id)})}))]})};var be=function(e){var t=e.match,n=e.history,r=Object(a.useState)(),c=Object(s.a)(r,2),o=c[0],i=c[1],l=Object(a.useState)(),u=Object(s.a)(l,2),j=u[0],b=u[1],p=Object(a.useState)(),h=Object(s.a)(p,2),m=h[0],f=h[1],y=Object(a.useState)(""),S=Object(s.a)(y,2),E=S[0],C=S[1],N=Object(x.b)(),I=Object(x.c)((function(e){return e.noteUpdate})),w=I.loading,L=I.error,T=Object(x.c)((function(e){return e.noteDelete})),_=T.loading,k=T.error;return Object(a.useEffect)((function(){var e=function(){var e=Object(v.a)(Object(g.a)().mark((function e(){var n,a;return Object(g.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("/api/notes/".concat(t.params.id));case 2:n=e.sent,a=n.data,i(a.title),b(a.content),f(a.category),C(a.updatedAt);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t.params.id,E]),Object(d.jsx)(Q,{title:"Edit Note",children:Object(d.jsxs)(z.a,{children:[Object(d.jsx)(z.a.Header,{children:"Edit your Note"}),Object(d.jsx)(z.a.Body,{children:Object(d.jsxs)(O.a,{onSubmit:function(e){e.preventDefault(),N(oe(t.params.id,o,j,m)),o&&j&&m&&(i(""),f(""),b(""),n.push("/mynotes"))},children:[_&&Object(d.jsx)(le,{}),L&&Object(d.jsx)(je,{variant:"danger",children:L}),k&&Object(d.jsx)(je,{variant:"danger",children:k}),Object(d.jsxs)(O.a.Group,{controlId:"title",children:[Object(d.jsx)(O.a.Label,{children:"Title"}),Object(d.jsx)(O.a.Control,{type:"title",placeholder:"Enter the title",value:o,onChange:function(e){return i(e.target.value)}})]}),Object(d.jsxs)(O.a.Group,{className:"form-label mt-4",controlId:"content",children:[Object(d.jsx)(O.a.Label,{children:"Content"}),Object(d.jsx)(O.a.Control,{as:"textarea",placeholder:"Enter the content",rows:4,value:j,onChange:function(e){return b(e.target.value)}})]}),j&&Object(d.jsxs)(z.a,{children:[Object(d.jsx)(z.a.Header,{children:"Note Preview"}),Object(d.jsx)(z.a.Body,{children:Object(d.jsx)(M.a,{children:j})})]}),Object(d.jsxs)(O.a.Group,{className:"form-label mt-4",controlId:"content",children:[Object(d.jsx)(O.a.Label,{children:"Category"}),Object(d.jsx)(O.a.Control,{type:"content",placeholder:"Enter the Category",value:m,onChange:function(e){return f(e.target.value)}})]}),w&&Object(d.jsx)(le,{size:50}),Object(d.jsx)(G.a,{className:"btn btn-outline-success mt-4",variant:"primary",type:"submit",children:"Update Note"}),Object(d.jsx)(G.a,{className:"btn btn-outline-danger mx-2 mt-4",variant:"danger",onClick:function(){return e=t.params.id,window.confirm("Are you sure?")&&N(se(e)),void n.push("/mynotes");var e},children:"Delete Note"})]})}),Object(d.jsxs)(z.a.Footer,{className:"text-muted",children:["Updated on - ",E.substring(0,10)]})]})})};n(275);var pe=function(e){var t=e.history,n=Object(a.useState)(""),r=Object(s.a)(n,2),c=r[0],i=r[1],l=Object(a.useState)(""),b=Object(s.a)(l,2),p=b[0],h=b[1],m=Object(x.b)(),f=Object(x.c)((function(e){return e.userLogin})),g=f.loading,v=f.error,y=f.userInfo;return Object(a.useEffect)((function(){y&&t.push("/mynotes")}),[t,y]),Object(d.jsx)(Q,{title:"LOGIN",children:Object(d.jsxs)("div",{className:"loginContainer",children:[v&&Object(d.jsx)(je,{variant:"danger",children:v}),g&&Object(d.jsx)(le,{}),Object(d.jsxs)(O.a,{onSubmit:function(e){e.preventDefault(),m(U(c,p))},children:[Object(d.jsxs)(O.a.Group,{controlId:"formBasicEmail",children:[Object(d.jsx)(O.a.Label,{className:"form-label mt-4",children:"Email address"}),Object(d.jsx)(O.a.Control,{type:"email",value:c,placeholder:"Enter email",onChange:function(e){return i(e.target.value)}})]}),Object(d.jsxs)(O.a.Group,{controlId:"formBasicPassword",children:[Object(d.jsx)(O.a.Label,{className:"form-label mt-4",children:"Password"}),Object(d.jsx)(O.a.Control,{type:"password",value:p,placeholder:"Password",onChange:function(e){return h(e.target.value)}})]}),Object(d.jsx)(G.a,{style:{marginTop:"30px"},variant:"primary",type:"submit",className:"btn btn-outline-primary",children:"Submit"})]}),Object(d.jsx)(u.a,{className:"py-3",children:Object(d.jsxs)(j.a,{className:"form-label mt-4",children:["New Customer ? ",Object(d.jsx)(o.b,{to:"/register",children:"Register Here"})]})})]})})};n(276);var he=function(e){var t=e.history,n=Object(a.useState)(""),r=Object(s.a)(n,2),c=r[0],i=r[1],l=Object(a.useState)(""),b=Object(s.a)(l,2),p=b[0],h=b[1],m=Object(a.useState)("https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"),f=Object(s.a)(m,2),g=f[0],v=f[1],y=Object(a.useState)(""),S=Object(s.a)(y,2),E=S[0],C=S[1],N=Object(a.useState)(""),I=Object(s.a)(N,2),w=I[0],L=I[1],T=Object(a.useState)(null),_=Object(s.a)(T,2),k=_[0],P=_[1],U=Object(a.useState)(null),R=Object(s.a)(U,2),A=R[0],F=R[1],B=Object(x.b)(),z=Object(x.c)((function(e){return e.userRegister})),H=z.loading,J=z.error,M=z.userInfo;return Object(a.useEffect)((function(){M&&t.push("/")}),[t,M]),Object(d.jsx)(Q,{title:"REGISTER",children:Object(d.jsxs)("div",{className:"loginContainer",children:[J&&Object(d.jsx)(je,{variant:"danger",children:J}),k&&Object(d.jsx)(je,{variant:"danger",children:k}),H&&Object(d.jsx)(le,{}),Object(d.jsxs)(O.a,{onSubmit:function(e){e.preventDefault(),E!==w?P("Passwords do not match"):B(D(p,c,E,g))},children:[Object(d.jsxs)(O.a.Group,{className:"form-label mt-4",controlId:"name",children:[Object(d.jsx)(O.a.Label,{children:"Name"}),Object(d.jsx)(O.a.Control,{type:"name",value:p,placeholder:"Enter name",onChange:function(e){return h(e.target.value)}})]}),Object(d.jsxs)(O.a.Group,{className:"form-label mt-4",controlId:"formBasicEmail",children:[Object(d.jsx)(O.a.Label,{children:"Email address"}),Object(d.jsx)(O.a.Control,{type:"email",value:c,placeholder:"Enter email",onChange:function(e){return i(e.target.value)}})]}),Object(d.jsxs)(O.a.Group,{className:"form-label mt-4",controlId:"formBasicPassword",children:[Object(d.jsx)(O.a.Label,{children:"Password"}),Object(d.jsx)(O.a.Control,{type:"password",value:E,placeholder:"Password",onChange:function(e){return C(e.target.value)}})]}),Object(d.jsxs)(O.a.Group,{className:"form-label mt-4",controlId:"confirmPassword",children:[Object(d.jsx)(O.a.Label,{children:"Confirm Password"}),Object(d.jsx)(O.a.Control,{type:"password",value:w,placeholder:"Confirm Password",onChange:function(e){return L(e.target.value)}})]}),A&&Object(d.jsx)(je,{variant:"danger",children:A}),Object(d.jsxs)(O.a.Group,{className:"form-label mt-4",controlId:"pic",children:[Object(d.jsx)(O.a.Label,{children:"Profile Picture"}),Object(d.jsx)(O.a.File,{onChange:function(e){return function(e){if("https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"===e)return F("Please Select an Image");if(F(null),"image/jpeg"!==e.type&&"image/png"!==e.type)return F("Please Select an Image");var t=new FormData;t.append("file",e),t.append("upload_preset","TalkZone"),t.append("cloud_name","harshk0056"),fetch("https://api.cloudinary.com/v1_1/harshk0056/image/upload",{method:"post",body:t}).then((function(e){return e.json()})).then((function(e){v(e.url.toString())})).catch((function(e){console.log(e)}))}(e.target.files[0])},id:"custom-file",type:"image/png",label:"Upload Profile Picture",custom:!0})]}),Object(d.jsx)(G.a,{style:{marginTop:"30px"},variant:"primary",type:"submit",className:"btn btn-outline-primary",children:"Register"})]}),Object(d.jsx)(u.a,{className:"py-3",children:Object(d.jsxs)(j.a,{className:"form-label mt-4",children:["Have an Account ? ",Object(d.jsx)(o.b,{to:"/login",children:"Login"})]})})]})})};var Oe=function(e){var t=e.history,n=Object(a.useState)(""),r=Object(s.a)(n,2),c=r[0],o=r[1],i=Object(a.useState)(""),l=Object(s.a)(i,2),u=l[0],j=l[1],b=Object(a.useState)(""),p=Object(s.a)(b,2),h=p[0],m=p[1],f=Object(x.b)(),g=Object(x.c)((function(e){return e.noteCreate})),v=g.loading,y=g.error,S=g.note;console.log(S);var E=function(){o(""),m(""),j("")};return Object(a.useEffect)((function(){}),[]),Object(d.jsx)(Q,{title:"Create a Note",children:Object(d.jsxs)(z.a,{children:[Object(d.jsx)(z.a.Header,{children:"Create a new Note"}),Object(d.jsx)(z.a.Body,{children:Object(d.jsxs)(O.a,{onSubmit:function(e){e.preventDefault(),f(ce(c,u,h)),c&&u&&h&&(E(),t.push("/mynotes"))},children:[y&&Object(d.jsx)(je,{variant:"danger",children:y}),Object(d.jsxs)(O.a.Group,{controlId:"title",children:[Object(d.jsx)(O.a.Label,{children:"Title"}),Object(d.jsx)(O.a.Control,{type:"title",value:c,placeholder:"Enter the title",onChange:function(e){return o(e.target.value)}})]}),Object(d.jsxs)(O.a.Group,{className:"form-label mt-4",controlId:"content",children:[Object(d.jsx)(O.a.Label,{children:"Content"}),Object(d.jsx)(O.a.Control,{as:"textarea",value:u,placeholder:"Enter the content",rows:4,onChange:function(e){return j(e.target.value)}})]}),u&&Object(d.jsxs)(z.a,{children:[Object(d.jsx)(z.a.Header,{children:"Note Preview"}),Object(d.jsx)(z.a.Body,{children:Object(d.jsx)(M.a,{children:u})})]}),Object(d.jsxs)(O.a.Group,{className:"form-label mt-4",controlId:"content",children:[Object(d.jsx)(O.a.Label,{children:"Category"}),Object(d.jsx)(O.a.Control,{type:"content",value:h,placeholder:"Enter the Category",onChange:function(e){return m(e.target.value)}})]}),v&&Object(d.jsx)(le,{size:50}),Object(d.jsx)(G.a,{className:"btn btn-outline-success mt-4",type:"submit",variant:"primary",children:"Create Note"}),Object(d.jsx)(G.a,{className:"btn btn-outline-danger mt-4 mx-2",onClick:E,variant:"danger",children:"Reset Feilds"})]})}),Object(d.jsxs)(z.a.Footer,{className:"text-muted",children:["Creating on - ",(new Date).toLocaleDateString()]})]})})},me=(n(277),function(e){e.location;var t=e.history,n=Object(a.useState)(""),r=Object(s.a)(n,2),c=r[0],o=r[1],i=Object(a.useState)(""),l=Object(s.a)(i,2),b=l[0],p=l[1],h=Object(a.useState)(),m=Object(s.a)(h,2),f=m[0],y=m[1],E=Object(a.useState)(""),C=Object(s.a)(E,2),N=C[0],I=C[1],w=Object(a.useState)(""),k=Object(s.a)(w,2),U=k[0],R=k[1],D=Object(a.useState)(),A=Object(s.a)(D,2),F=A[0],B=A[1],z=Object(x.b)(),H=Object(x.c)((function(e){return e.userLogin})).userInfo,J=Object(x.c)((function(e){return e.userUpdate})),M=J.loading,W=J.error,q=J.success;Object(a.useEffect)((function(){H?(o(H.name),p(H.email),y(H.pic)):t.push("/")}),[t,H]);return Object(d.jsx)(Q,{title:"EDIT PROFILE",children:Object(d.jsx)("div",{children:Object(d.jsxs)(u.a,{className:"profileContainer",children:[Object(d.jsx)(j.a,{md:6,children:Object(d.jsxs)(O.a,{onSubmit:function(e){var t;e.preventDefault(),z((t={name:c,email:b,password:N,pic:f},function(){var e=Object(v.a)(Object(g.a)().mark((function e(n,a){var r,c,s,o,i;return Object(g.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n({type:L}),r=a(),c=r.userLogin.userInfo,s={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c.token)}},e.next=6,P.a.post("/api/users/profile",t,s);case 6:o=e.sent,i=o.data,n({type:T,payload:i}),n({type:S,payload:i}),localStorage.setItem("userInfo",JSON.stringify(i)),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),n({type:_,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,n){return e.apply(this,arguments)}}()))},children:[M&&Object(d.jsx)(le,{}),q&&Object(d.jsx)(je,{variant:"success",children:"Updated Successfully"}),W&&Object(d.jsx)(je,{variant:"danger",children:W}),Object(d.jsxs)(O.a.Group,{controlId:"name",children:[Object(d.jsx)(O.a.Label,{children:"Name"}),Object(d.jsx)(O.a.Control,{type:"text",placeholder:"Enter Name",value:c,onChange:function(e){return o(e.target.value)}})]}),Object(d.jsxs)(O.a.Group,{className:"form-label mt-4",controlId:"email",children:[Object(d.jsx)(O.a.Label,{children:"Email Address"}),Object(d.jsx)(O.a.Control,{type:"email",placeholder:"Enter Email",value:b,onChange:function(e){return p(e.target.value)}})]}),Object(d.jsxs)(O.a.Group,{className:"form-label mt-4",controlId:"password",children:[Object(d.jsx)(O.a.Label,{children:"Password"}),Object(d.jsx)(O.a.Control,{type:"password",placeholder:"Enter Password",value:N,onChange:function(e){return I(e.target.value)}})]}),Object(d.jsxs)(O.a.Group,{className:"form-label mt-4",controlId:"confirmPassword",children:[Object(d.jsx)(O.a.Label,{children:"Confirm Password"}),Object(d.jsx)(O.a.Control,{type:"password",placeholder:"Confirm Password",value:U,onChange:function(e){return R(e.target.value)}})]})," ",F&&Object(d.jsx)(je,{variant:"danger",children:F}),Object(d.jsxs)(O.a.Group,{className:"form-label mt-4",controlId:"pic",children:[Object(d.jsx)(O.a.Label,{children:"Change Profile Picture"}),Object(d.jsx)(O.a.File,{onChange:function(e){return function(e){if(B(null),"image/jpeg"!==e.type&&"image/png"!==e.type)return B("Please Select an Image");var t=new FormData;t.append("file",e),t.append("upload_preset","TalkZone"),t.append("cloud_name","harshk0056"),fetch("https://api.cloudinary.com/v1_1/harshk0056/image/upload",{method:"post",body:t}).then((function(e){return e.json()})).then((function(e){y(e.url.toString()),console.log(f)})).catch((function(e){console.log(e)}))}(e.target.files[0])},id:"custom-file",type:"image/png",label:"Upload Profile Picture",custom:!0})]}),Object(d.jsx)(G.a,{className:"btn btn-outline-success mt-4",type:"submit",varient:"primary",children:"Update"})]})}),Object(d.jsx)(j.a,{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:Object(d.jsx)("img",{src:f,alt:c,className:"profilePic"})})]})})})});var fe=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(d.jsxs)(o.a,{children:[Object(d.jsx)(A,{setSearch:function(e){return r(e)}}),Object(d.jsxs)("main",{className:"App",children:[Object(d.jsx)(i.a,{path:"/",component:F,exact:!0}),Object(d.jsx)(i.a,{path:"/login",component:pe}),Object(d.jsx)(i.a,{path:"/register",component:he}),Object(d.jsx)(i.a,{path:"/mynotes",component:function(e){var t=e.history;return Object(d.jsx)(de,{search:n,history:t})}}),Object(d.jsx)(i.a,{path:"/note/:id",component:be}),Object(d.jsx)(i.a,{path:"/createnote",component:Oe}),";",Object(d.jsx)(i.a,{path:"/profile",component:me})]}),Object(d.jsx)(b,{})]})},xe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,294)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))},ge=n(53),ve=n(129),ye=n(128),Se=Object(ge.combineReducers)({noteList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{notes:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case W:return{loading:!0};case q:return{loading:!1,notes:t.payload};case K:return{loading:!1,error:t.payload};default:return e}},userLogin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return{loading:!0};case S:return{loading:!1,userInfo:t.payload};case E:return{loading:!1,error:t.payload};case C:return{};default:return e}},userRegister:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return{loading:!0};case I:return{loading:!1,userInfo:t.payload};case w:return{loading:!1,error:t.payload};default:return e}},noteCreate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Z:return{loading:!0};case V:return{loading:!1,success:!0};case X:return{loading:!1,error:t.payload};default:return e}},noteDelete:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case te:return{loading:!0};case ne:return{loading:!1,success:!0};case ae:return{loading:!1,error:t.payload,success:!1};default:return e}},noteUpdate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y:return{loading:!0};case $:return{loading:!1,success:!0};case ee:return{loading:!1,error:t.payload,success:!1};default:return e}},userUpdate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return{loading:!0};case T:return{loading:!1,userInfo:t.payload,success:!0};case _:return{loading:!1,error:t.payload,success:!1};default:return e}}}),Ee={userLogin:{userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null}},Ce=[ve.a],Ne=Object(ge.createStore)(Se,Ee,Object(ye.composeWithDevTools)(ge.applyMiddleware.apply(void 0,Ce)));c.a.render(Object(d.jsx)(x.a,{store:Ne,children:Object(d.jsx)(fe,{})}),document.getElementById("root")),xe()}},[[278,1,2]]]);
//# sourceMappingURL=main.b8d68e4b.chunk.js.map