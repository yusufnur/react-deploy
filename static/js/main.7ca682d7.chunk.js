(this["webpackJsonpreact-tugas-uas"]=this["webpackJsonpreact-tugas-uas"]||[]).push([[0],{151:function(e,a,t){e.exports=t(342)},156:function(e,a,t){},342:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(18),c=t.n(l),o=(t(156),t(19)),s=t(20),m=t(22),i=t(21),u=t(148),d=t(344),E=t(345),p=t(346),h=t(347),b=t(364),f=t(348),y=t(349),O=t(350),g=t(351),j=function(e){var a=Object(r.useState)(!1),t=Object(u.a)(a,2),l=t[0],c=t[1];return n.a.createElement("div",null,n.a.createElement(d.a,{color:"light",light:!0,expand:"md"},n.a.createElement(E.a,null,n.a.createElement(p.a,null,"Desa Ngasinan"),n.a.createElement(h.a,{onClick:function(){return c(!l)}}),n.a.createElement(b.a,{isOpen:l,navbar:!0},n.a.createElement(f.a,{className:"mr-auto",navbar:!0},n.a.createElement(y.a,null,n.a.createElement(O.a,{href:"/"},"Home")),n.a.createElement(y.a,null,n.a.createElement(O.a,{href:"https://desangasinan.com/profil-2/"},"About us"))),n.a.createElement(g.a,null,"Admin")))))},U=t(352),v=function(e){return n.a.createElement("div",null,n.a.createElement(U.a,null,n.a.createElement(E.a,null,n.a.createElement("h1",{className:"display-3"},"Siaga COVID-19"),n.a.createElement("p",{className:"lead"},"Pemerintah Desa Ngasinan Kecamatan Jetis Kabupaten Ponorogo"),n.a.createElement("hr",{className:"my-2"}),n.a.createElement("p",null,"Program pendataan warga desa dari luar daerah, dalam penanganan COVID-19"))))},S=t(33),D=t(12),_=t(143),w=t.n(_),N=t(353),T=t(354),k=t(355),L=t(356),R=t(36),x=t(37),A=t(88),C=t.n(A),I=t(144),M=t.n(I),P=t(13),F=A.Search.SearchBar,G=[{dataField:"id",text:"ID",sort:!0,headerStyle:function(){return{width:"5%"}}},{dataField:"nama",text:"Nama",sort:!0},{dataField:"alamat",text:"Alamat",sort:!0},{dataField:"link",text:"Action",formatter:function(e,a){return n.a.createElement("div",null,n.a.createElement(S.b,{to:"detail/"+a.id},n.a.createElement(N.a,{color:"dark",className:"mr-2"},n.a.createElement(R.a,{icon:x.c})," Detail")),n.a.createElement(S.b,{to:"edit/"+a.id},n.a.createElement(N.a,{color:"dark",className:"mr-2"},n.a.createElement(R.a,{icon:x.b})," Edit")),n.a.createElement(N.a,{color:"dark",className:"mr-2"},n.a.createElement(R.a,{icon:x.d})," Delete"))}}],B=[{dataField:"id",order:"asc"}],H=Object(P.b)((function(e){return{getUsersList:e.users.getUsersList,errorUsersList:e.users.errorUsersList}}),null)((function(e){return n.a.createElement(E.a,null,e.getUsersList?n.a.createElement(C.a,{bootstrap4:!0,keyField:"id",data:e.getUsersList,columns:G,defaultSorted:B,search:!0},(function(e){return n.a.createElement("div",null,n.a.createElement(T.a,null,n.a.createElement(k.a,null,n.a.createElement(S.b,{to:"/create"},n.a.createElement(N.a,{color:"dark",className:"mr-2"},n.a.createElement(R.a,{icon:x.e})," Tambah Data"))),n.a.createElement(k.a,null,n.a.createElement("div",{className:"float-right"},n.a.createElement(F,Object.assign({},e.searchProps,{placeholder:"Search .."}))))),n.a.createElement(w.a,Object.assign({},e.baseProps,{pagination:M()()})))})):n.a.createElement("div",{className:"text-center"},e.errorUsersList?n.a.createElement("h4",null,e.errorUsersList):n.a.createElement(L.a,{color:"dark"})))})),V=t(64),X=t.n(V),J=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch((function(e){X.a.get("https://my-json-server.typicode.com/yusufnur/react-data/users").then((function(a){e({type:"GET_USERS_LIST",payload:{data:a.data,errorMessage:!1}})})).catch((function(a){e({type:"GET_USERS_LIST",payload:{data:!1,errorMessage:a.message}})}))})),this.props.dispatch((function(e){e({type:"GET_USER_DETAIL",payload:{data:!1,errorMessage:!1}})}))}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(H,null))}}]),t}(r.Component),K=Object(P.b)()(J),W=function(){return n.a.createElement(T.a,{className:"mb-2"},n.a.createElement(k.a,null,n.a.createElement(S.b,{to:"/"},n.a.createElement(N.a,{color:"dark"},n.a.createElement(R.a,{icon:x.a})," Back"))))},z=t(362),$=t(361),q=t(357),Q=t(358),Y=t(359),Z=function(e){var a={};return e.nama&&""!==e.nama||(a.nama="Nama harus diisi"),e.umur&&""!==e.umur||(a.umur="Umur harus diisi"),e.alamat&&""!==e.alamat||(a.alamat="Alamat harus diisi"),e.nohp&&""!==e.nohp||(a.nohp="No HP harus diisi"),a},ee=function(e){var a=e.input,t=e.type,r=e.placeholder,l=e.label,c=e.disabled,o=e.readOnly,s=e.meta,m=s.touched,i=s.error,u=s.warning;return n.a.createElement(T.a,null,n.a.createElement(k.a,{md:"12"},n.a.createElement(q.a,{htmlFor:"{input}",className:"col-form-label"},l)),n.a.createElement(k.a,{md:"12"},n.a.createElement(Q.a,Object.assign({},a,{type:t,placeholder:r,disabled:c,readOnly:o})),m&&(i&&n.a.createElement("p",{style:{color:"red"}},i)||u&&n.a.createElement("p",{style:{color:"brown"}},u))))},ae=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("form",{onSubmit:this.props.handleSubmit},n.a.createElement(Y.a,{row:!0},n.a.createElement(k.a,{md:6},n.a.createElement(Y.a,null,n.a.createElement(z.a,{type:"text",name:"nama",component:ee,label:"Nama :"}))),n.a.createElement(k.a,{md:6},n.a.createElement(Y.a,null,n.a.createElement(z.a,{type:"text",name:"alamat",component:ee,label:"Alamat :"}))),n.a.createElement(k.a,{md:6},n.a.createElement(Y.a,null,n.a.createElement(z.a,{type:"text",name:"nohp",component:ee,label:"No HP :"}))),n.a.createElement(k.a,{md:6},n.a.createElement(Y.a,null,n.a.createElement(z.a,{type:"text",name:"umur",component:ee,label:"Umur :"})))),n.a.createElement(Y.a,{row:!0},n.a.createElement(k.a,{md:"12"},n.a.createElement(Y.a,null,n.a.createElement(N.a,{color:"dark",type:"submit",disabled:this.props.submitting},"Submit")))))}}]),t}(r.Component);ae=Object($.a)({form:"formCreateUser",validate:Z,enableReinitialize:!0})(ae);var te=Object(P.b)()(ae),re=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"handleSubmit",value:function(e){this.props.dispatch(function(e){return function(a){X.a.post("http://my-json-server.typicode.com/afifbasya/reactjs-redux/users",e).then((function(e){console.log(e),a({type:"POST_USER_CREATE",payload:{data:e.data,errorMessage:!1}})})).catch((function(e){a({type:"POST_USER_CREATE",payload:{data:!1,errorMessage:e.message}})}))}}(e))}},{key:"render",value:function(){var e=this;return n.a.createElement(E.a,null,n.a.createElement(W,null),n.a.createElement("h1",null,"Createuser"),n.a.createElement(te,{onSubmit:function(a){return e.handleSubmit(a)}}))}}]),t}(r.Component),ne=Object(P.b)()(re),le=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement(E.a,null,n.a.createElement(W,null),n.a.createElement("h1",null,"EditUser"))}}]),t}(r.Component),ce=t(360),oe=Object(P.b)((function(e){return{getUserDetail:e.users.getUserDetail,errorUserDetail:e.users.errorUserDetail}}),null)((function(e){return n.a.createElement(ce.a,{striped:!0},n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",{width:"200"},"Nama"),n.a.createElement("td",{width:"10"},":"),n.a.createElement("td",null,e.getUserDetail.nama)),n.a.createElement("tr",null,n.a.createElement("td",{width:"200"},"Alamat"),n.a.createElement("td",{width:"10"},":"),n.a.createElement("td",null,e.getUserDetail.alamat)),n.a.createElement("tr",null,n.a.createElement("td",{width:"200"},"Umur"),n.a.createElement("td",{width:"10"},":"),n.a.createElement("td",null,e.getUserDetail.umur)),n.a.createElement("tr",null,n.a.createElement("td",{width:"200"},"No HP"),n.a.createElement("td",{width:"10"},":"),n.a.createElement("td",null,e.getUserDetail.nohp))))})),se=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e;this.props.dispatch((e=this.props.match.params.id,function(a){X.a.get("https://my-json-server.typicode.com/yusufnur/react-data/users/"+e).then((function(e){a({type:"GET_USER_DETAIL",payload:{data:e.data,errorMessage:!1}})})).catch((function(e){a({type:"GET_USER_DETAIL",payload:{data:!1,errorMessage:e.message}})}))}))}},{key:"render",value:function(){return n.a.createElement(E.a,null,n.a.createElement(W,null),n.a.createElement("h1",null,"DetailUser"),n.a.createElement(oe,null))}}]),t}(r.Component),me=Object(P.b)()(se),ie=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(j,null),n.a.createElement(v,null),n.a.createElement(S.a,null,n.a.createElement(D.a,{path:"/react-deploy",exact:!0,component:K}),n.a.createElement(D.a,{path:"/create",exact:!0,component:ne}),n.a.createElement(D.a,{path:"/detail/:id",exact:!0,component:me}),n.a.createElement(D.a,{path:"/edit/:id",exact:!0,component:le})))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(340),t(341);var ue=t(11),de=t(38),Ee={getUsersList:!1,errorUsersList:!1,getUserDetail:!1,errorUserDetail:!1,getResponDataUser:!1,errorResponDataUser:!1},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_USERS_LIST":return Object(de.a)(Object(de.a)({},e),{},{getUsersList:a.payload.data,errorUsersList:a.payload.errorMessage});case"GET_USER_DETAIL":return Object(de.a)(Object(de.a)({},e),{},{getUserDetail:a.payload.data,errorUserDetail:a.payload.errorMessage});case"POST_USER_CREATE":return Object(de.a)(Object(de.a)({},e),{},{getResponDataUser:a.payload.data,errorResponDataUser:a.payload.errorMessage});default:return e}},he=t(363),be=Object(ue.c)({users:pe,form:he.a}),fe=t(147),ye=Object(ue.e)(be,Object(ue.d)(Object(ue.a)(fe.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(P.a,{store:ye},n.a.createElement(ie,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[151,1,2]]]);
//# sourceMappingURL=main.7ca682d7.chunk.js.map