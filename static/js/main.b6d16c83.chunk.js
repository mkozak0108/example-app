(this["webpackJsonpfreshcells-login"]=this["webpackJsonpfreshcells-login"]||[]).push([[0],{123:function(e,t,n){},124:function(e,t,n){},132:function(e,t,n){},138:function(e,t,n){},139:function(e,t,n){"use strict";n.r(t);var r,a,c,i,o=n(0),s=n.n(o),l=n(16),j=n.n(l),u=n(41),d=n(182),b=(n(123),n(107)),m=n(19),O=n(18),h=n(44),g=n(169),f=(n(124),n(49)),x=n(100),p=Object(O.makeVar)(localStorage.getItem("userID")),v=new O.InMemoryCache({typePolicies:{Query:{fields:{userID:{read:function(){return p()}}}}}}),y=Object(O.createHttpLink)({uri:"https://cms.trial-task.k8s.ext.fcse.io/graphql"}),I=Object(x.a)((function(e,t){var n=t.headers,r=localStorage.getItem("token");return{headers:Object(f.a)(Object(f.a)({},n),{},{authorization:r?"Bearer ".concat(r):""})}})),w=new O.ApolloClient({cache:v,link:I.concat(y)}),S=n(61),N=Object(O.gql)(r||(r=Object(S.a)(["\n  query user($id: ID!) {\n    user(id: $id) {\n      id\n      email\n      firstName\n      lastName\n    }\n  }\n"]))),k=Object(O.gql)(a||(a=Object(S.a)(["\n  query userID {\n    userID @client\n  }\n"]))),D=(Object(O.gql)(c||(c=Object(S.a)(["\n  query me {\n    me {\n      id\n      email\n      username\n    }\n  }\n"]))),Object(O.gql)(i||(i=Object(S.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(input: {\n      identifier: $email,\n      password: $password\n    }) {\n      jwt\n      user {\n        id\n      }\n    }\n  }\n"])))),q=n(76),C=n(183),E=n(173),F=n(174),$=n(184),B=(n(132),n(7));var L=function(e){var t=e.onSubmit,n=e.loading,r=void 0!==n&&n,a=e.error,c=Object(q.b)(),i=c.handleSubmit,o=c.control;return Object(B.jsx)("form",{className:"login-form",onSubmit:i(t),children:Object(B.jsxs)(g.a,{container:!0,direction:"column",alignItems:"center",children:[Object(B.jsx)("div",{className:"login-form-control",children:Object(B.jsx)(q.a,{defaultValue:"",as:C.a,name:"email",type:"email",placeholder:"Email",autoFocus:!0,required:!0,control:o})}),Object(B.jsx)("div",{className:"login-form-control",children:Object(B.jsx)(q.a,{defaultValue:"",as:C.a,name:"password",type:"password",placeholder:"Password",required:!0,control:o})}),Object(B.jsx)("div",{className:"login-form-control",children:Object(B.jsxs)(E.a,{className:"login-form-submit",variant:"contained",color:"primary",disabled:r,type:"submit",children:["Login",r&&Object(B.jsx)(F.a,{className:"login-form-loader",size:14})]})}),a&&Object(B.jsx)($.a,{severity:"error",children:a})]})})},P=n(175),Q=n(176),A=n(177);var M=function(e){var t=e.user;if(e.loading)return Object(B.jsx)(F.a,{className:"user-card-loader"});if(!t)return null;var n=[t.firstName,t.lastName].join(" ");return Object(B.jsx)(P.a,{children:Object(B.jsx)(Q.a,{children:Object(B.jsxs)(A.a,{variant:"h3",children:["Welcome, ",n]})})})},V=n(178),z=n(179);function J(){return Object(B.jsx)(V.a,{position:"static",children:Object(B.jsx)(z.a,{children:Object(B.jsxs)(g.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",children:[Object(B.jsx)(A.a,{variant:"h6",children:"Example App"}),Object(B.jsx)(E.a,{children:Object(B.jsx)(u.b,{to:"/logout",children:"Logout"})})]})})})}var R=function(){var e=Object(m.g)(),t=Object(O.useQuery)(k).data.userID,n=Object(O.useMutation)(D,{onCompleted:function(e){var t=e.login;localStorage.setItem("token",t.jwt),localStorage.setItem("userID",t.user.id),p(t.user.id)},onError:function(e){console.error(e)}}),r=Object(h.a)(n,2),a=r[0],c=r[1],i=c.loading,s=c.error;return Object(o.useEffect)((function(){t&&e.replace("/")}),[t,e]),Object(B.jsx)(g.a,{className:"login-page-container",container:!0,direction:"row",justify:"center",alignItems:"center",children:Object(B.jsx)(L,{error:s?s.message:"",loading:i,onSubmit:function(e){return a({variables:e})}})})};n(138);var T=function(){var e=Object(O.useQuery)(k).data.userID,t=Object(O.useQuery)(N,{variables:{id:e},skip:!e}),n=t.data,r=t.loading;return Object(B.jsxs)("div",{className:"home-root",children:[Object(B.jsx)(J,{}),Object(B.jsx)("div",{className:"home-content",children:Object(B.jsx)(M,{loading:r,user:n?n.user:null})})]})};var H=function(){var e=Object(O.useApolloClient)(),t=Object(m.g)();return localStorage.removeItem("token"),localStorage.removeItem("userID"),e.clearStore().then((function(){p(""),t.replace("/login")})),null},W=n(109);function G(e){var t=e.children,n=Object(W.a)(e,["children"]),r=Object(O.useQuery)(k).data.userID;return Object(B.jsx)(m.b,Object(f.a)(Object(f.a)({},n),{},{render:function(e){var n=e.location;return r?t:Object(B.jsx)(m.a,{to:{pathname:"/login",state:{from:n}}})}}))}function K(e){var t=e.error,n=e.resetErrorBoundary;return Object(B.jsx)(g.a,{contianer:!0,direction:"row",alignItems:"center",justify:"center",children:Object(B.jsxs)($.a,{severity:"error",children:[Object(B.jsx)("p",{children:"Something went wrong:"}),Object(B.jsx)("pre",{children:t.message}),Object(B.jsx)(E.a,{variant:"contained",onClick:n,children:"Reload page"})]})})}var U=function(){return Object(B.jsx)(b.ErrorBoundary,{FallbackComponent:K,onReset:function(){return window.location.reload()},children:Object(B.jsx)(O.ApolloProvider,{client:w,children:Object(B.jsxs)(m.d,{children:[Object(B.jsx)(m.b,{path:"/login",children:Object(B.jsx)(R,{})}),Object(B.jsx)(m.b,{path:"/logout",children:Object(B.jsx)(H,{})}),Object(B.jsx)(G,{exact:!0,path:"/",children:Object(B.jsx)(T,{})})]})})})},X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,185)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))},Y=n(108),Z=n(180),_=n(181),ee=Object(Y.a)({palette:{primary:Z.a,secondary:_.a}});j.a.render(Object(B.jsx)(s.a.StrictMode,{children:Object(B.jsx)(u.a,{basename:"/example-app",children:Object(B.jsx)(d.a,{theme:ee,children:Object(B.jsx)(U,{})})})}),document.getElementById("root")),X()}},[[139,1,2]]]);
//# sourceMappingURL=main.b6d16c83.chunk.js.map