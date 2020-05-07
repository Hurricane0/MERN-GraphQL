(this["webpackJsonpreact-graphql"]=this["webpackJsonpreact-graphql"]||[]).push([[0],{442:function(e,n,t){e.exports=t(541)},447:function(e,n,t){},541:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(19),o=t.n(i),c=(t(447),t(172)),l=t(119),u=t(240),m=t(121),s=t(194),d=t(386),f=t(120),b=t(415),p=t.n(b),h=t(174),g=t(409),E=t(414);function v(){var e=Object(s.a)(["\n  mutation updatePhone(\n    $id: ID\n    $name: String!\n    $number: String!\n    $description: String\n  ) {\n    updatePhone(\n      id: $id\n      name: $name\n      number: $number\n      description: $description\n    ) {\n      id\n      name\n      number\n      description\n    }\n  }\n"]);return v=function(){return e},e}function O(){var e=Object(s.a)(["\n  mutation deletePhone($id: ID) {\n    deletePhone(id: $id) {\n      id\n      name\n      number\n      description\n    }\n  }\n"]);return O=function(){return e},e}function w(){var e=Object(s.a)(["\n  mutation addPhone($name: String!, $number: String!, $description: String) {\n    addPhone(name: $name, number: $number, description: $description) {\n      id\n      name\n      number\n      description\n    }\n  }\n"]);return w=function(){return e},e}function S(){var e=Object(s.a)(["\n  {\n    phones {\n      id\n      name\n      number\n      description\n    }\n  }\n"]);return S=function(){return e},e}var j=Object(d.a)((function(e){return{root:{"& .MuiTypography-h3":{fontWeight:"100"},"& .MuiTableSortLabel-root:hover":{color:"#fff"},"& .MuiTableSortLabel-root.MuiTableSortLabel-active":{color:"#fff"},"& .MuiTableSortLabel-root.MuiTableSortLabel-active.MuiTableSortLabel-root.MuiTableSortLabel-active .MuiTableSortLabel-icon":{color:"#fff"},"& .MuiTableSortLabel-root:focus":{color:"#fff"}}}})),k=Object(h.a)(S()),y=Object(h.a)(w()),x=Object(h.a)(O()),L=Object(h.a)(v()),P=function(){var e=j(),n=Object(g.a)(k,{notifyOnNetworkStatusChange:!0}),t=n.loading,i=n.data,o=n.refetch,c=n.networkStatus,l=Object(E.a)(y),s=Object(m.a)(l,1)[0],d=Object(E.a)(x),b=Object(m.a)(d,1)[0],h=Object(E.a)(L),v=Object(m.a)(h,1)[0],O=r.a.useState([]),w=Object(m.a)(O,2),S=w[0],P=w[1],M=Object(a.useState)(!1),T=Object(m.a)(M,2),$=T[0],N=T[1];Object(a.useLayoutEffect)((function(){return window.addEventListener("resize",B),B(),function(){return window.removeEventListener("resize",B)}}),[]);var B=function(){console.log(document.documentElement.clientWidth),document.documentElement.clientWidth<=445?N(!0):N(!1)};Object(a.useEffect)((function(){i&&P(i.phones)}),[i,c]);var C=S.map((function(e){return Object(u.a)({},e)}));return r.a.createElement("div",{className:e.root},r.a.createElement(f.a,{align:"center",variant:"h3",gutterBottom:!0},"Phonebook"),r.a.createElement(p.a,{isLoading:t||4===c,title:"List of mobile phones",columns:[{title:"Name",field:"name"},{title:"Number",field:"number",initialEditValue:"+380"},{title:"Description",field:"description"}],data:C.reverse(),options:{headerStyle:{backgroundColor:"#212121",color:"#b9b9b9"},addRowPosition:"first"},editable:!$&&{onRowAdd:function(e){return new Promise((function(n){var t,a,r;n(),t=e.name,a=e.number,r=e.description,s({variables:{name:t,number:a,description:r},notifyOnNetworkStatusChange:!0}).then((function(){return o()}))}))},onRowUpdate:function(e,n){var t=e.id,a=e.name,r=e.number,i=e.description;return new Promise((function(e){e(),n&&function(e,n,t,a){v({variables:{id:e,name:n,number:t,description:a}}),o()}(t,a,r,i)}))},onRowDelete:function(e){var n=e.id;return new Promise((function(e){e(),function(e){b({variables:{id:e}}),o()}(n)}))}}}))},M=t(568),T=function(){return r.a.createElement("div",{style:{paddingTop:"50px"}},r.a.createElement(M.a,{maxWidth:"sm"},r.a.createElement("h2",null,r.a.createElement("strong",null,"404!"),"Page is not found"),r.a.createElement(c.b,{to:"/"},r.a.createElement("h5",{style:{marginTop:"10px"}},"Return to Homepage "))))},$=t(430),N=t.n($),B=t(188),C=t(2),D=t(20),I=t(78),W=t(569),R=t(567),H=t(369),q=t(549),z=t(570),A=t(305),G=t(424),J=t.n(G),V=t(425),F=t.n(V),U=t(426),K=t.n(U),Q=t(543),X=t(571),Y=t(390),Z=t(428),_=t.n(Z),ee=t(429),ne=t.n(ee),te=t(427),ae=t.n(te),re=t(173),ie=Object(d.a)((function(e){return{root:{display:"flex","& .MuiSvgIcon-root":{fill:"#fff"},"& .MuiDrawer-paper":{backgroundColor:"#212121"},"& .MuiDivider-root":{backgroundColor:"#ffffff38"},"& .MuiIconButton-root:hover":{backgroundColor:"rgba(254, 254, 254, 0.05)"},"& .MuiListItem-button:hover":{backgroundColor:"rgba(254, 254, 254, 0.05)"}},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(200,"px)"),marginLeft:200,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:200,flexShrink:0},drawerPaper:{width:200,color:"#fff"},drawerHeader:Object(u.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,maxWidth:"100%",paddingTop:"10px",transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-200},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},mainPaper:{minHeight:"300px"}}})),oe=function(e){var n=e.children,t=ie(),a=Object(D.a)(),i=r.a.useState(!1),o=Object(m.a)(i,2),l=o[0],u=o[1];return r.a.createElement("div",{className:t.root},r.a.createElement(W.a,null),r.a.createElement(R.a,{position:"fixed",className:Object(C.a)(t.appBar,Object(B.a)({},t.appBarShift,l))},r.a.createElement(H.a,null,r.a.createElement(A.a,{color:"inherit","aria-label":"open drawer",onClick:function(){u(!0)},edge:"start",className:Object(C.a)(t.menuButton,l&&t.hide)},r.a.createElement(J.a,null)),r.a.createElement(f.a,{variant:"h6",noWrap:!0},"Dvortsov Private"))),r.a.createElement(I.a,{className:t.drawer,variant:"persistent",anchor:"left",open:l,classes:{paper:t.drawerPaper}},r.a.createElement("div",{className:t.drawerHeader},r.a.createElement(A.a,{onClick:function(){u(!1)}},"ltr"===a.direction?r.a.createElement(F.a,null):r.a.createElement(K.a,null))),r.a.createElement(z.a,null),r.a.createElement(q.a,null,r.a.createElement(Q.a,{button:!0,component:c.b,to:"/phonebook"},r.a.createElement(X.a,null,r.a.createElement(ae.a,null)),r.a.createElement(Y.a,{primary:"Phonebook"}))),r.a.createElement(z.a,null),r.a.createElement(q.a,null,["All mail","Trash","Spam"].map((function(e,n){return r.a.createElement(Q.a,{button:!0,key:e},r.a.createElement(X.a,null,n%2===0?r.a.createElement(_.a,null):r.a.createElement(ne.a,null)),r.a.createElement(Y.a,{primary:e}))})))),r.a.createElement("main",{className:Object(C.a)(t.content,Object(B.a)({},t.contentShift,l))},r.a.createElement("div",{className:t.drawerHeader}),r.a.createElement(M.a,{maxWidth:"md",disableGutters:!0},r.a.createElement(re.a,{className:t.mainPaper},n))))},ce=function(e){var n=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(oe,null,n))},le=t(158),ue=t(308),me=t.n(ue),se=Object(le.a)({typography:{useNextVariants:!0},palette:{primary:{main:"#212121"},secondary:{main:"#fff"},error:me.a,contrastThreshold:3,tonalOffset:.2,contrastText:"#fff"}}),de=function(){return r.a.createElement("div",null,r.a.createElement(f.a,{align:"center",variant:"h2",gutterBottom:!0},"Nikita Dvortsov"))},fe=t(233),be=t(234),pe=t(150),he=t(405),ge=new fe.a({cache:new be.a,link:new pe.a({uri:"/graphql"})}),Ee=function(){return r.a.createElement(he.a,{client:ge},r.a.createElement(N.a,{theme:se},r.a.createElement(c.a,null,r.a.createElement(ce,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/",exact:!0,component:de}),r.a.createElement(l.a,{path:"/phonebook",component:P}),r.a.createElement(l.a,{component:T}))))))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ee,null)),document.getElementById("root"))}},[[442,1,2]]]);
//# sourceMappingURL=main.1e95244e.chunk.js.map