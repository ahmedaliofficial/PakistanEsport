(this["webpackJsonpmy-react-app"]=this["webpackJsonpmy-react-app"]||[]).push([[0],{23:function(e,s,c){},24:function(e,s,c){},44:function(e,s,c){"use strict";c.r(s);var l=c(1),t=c.n(l),a=c(18),i=c.n(a),n=(c(23),c.p,c(24),c(0)),r=c(7),d=c(3),j=c(4),o=function(e){var s={};return e.Clanname.trim()||(s.Clanname="Please Fill Clan Name Field."),e.ClanTag.trim()||(s.ClanTag="Please Fill Clan Tag Field."),e.ClanLogo||(s.ClanLogo="Please Select You Clan Logo Field."),e.IglName.trim()||(s.IglName="Please Fill Igl Name Field."),e.IglId.trim()||(s.IglId="Your Igl ID Field Is Empty."),e.Whatsapp.trim()||(s.Whatsapp="Please Fill Whatsapp Input Field."),e.Player2Name.trim()||(s.Player2Name="Player 2 Name Field Is Empty."),e.Player2Id.trim()||(s.Player2Id="Player 2 Id Field Is Empty."),e.Player3Name.trim()||(s.Player3Name="Player 3 Name Field Is Empty."),e.Player3Id.trim()||(s.Player3Id="Player 3 Id Field Is Empty."),e.Player4Name.trim()||(s.Player4Name="Player 4 Name Field Is Empty."),e.Player4Id.trim()||(s.Player4Id="Player 4 Id Field Is Empty."),e.Player5Name.trim()||(s.Player5Name="Player 5 Name Field Is Empty."),e.Player5Id.trim()||(s.Player5Id="Player 5 Id Field Is Empty."),e.PaymentScreenshot||(s.PaymentScreenshot="Please Select The Payment Screenshot"),s},h=function(){return{TourRegKey:"651CD9D4DD4EA74BCDEB7412953BD"}},b=c(9),O=c.n(b),x=function(){var e=t.a.useState(!1),s=Object(j.a)(e,2),c=s[0],l=s[1],a=t.a.useState(""),i=Object(j.a)(a,2),n=i[0],b=i[1],x=h().TourRegKey,m=t.a.useState(!1),p=Object(j.a)(m,2),g=p[0],v=p[1],y=t.a.useState(!1),u=Object(j.a)(y,2),I=u[0],P=u[1],E=t.a.useState({Clanname:"",ClanTag:"",ClanLogo:"",IglName:"",IglId:"",Whatsapp:"",Player2Name:"",Player2Id:"",Player3Name:"",Player3Id:"",Player4Name:"",Player4Id:"",Player5Name:"",Player5Id:"",Player6Name:"",Player6Id:"",PaymentScreenshot:""}),f=Object(j.a)(E,2),N=f[0],A=f[1];t.a.useEffect((function(){O()({method:"get",url:"https://www.softmeck.com/api/TournamentStatus"}).then((function(e){var s=e.data;P(s.status)})).catch((function(e){console.log(e)}))}),[]);var T=t.a.useState({}),R=Object(j.a)(T,2),S=R[0],C=R[1];return{HandleChange:function(e){var s=e.target,c=s.name,l=s.value;A(Object(d.a)(Object(d.a)({},N),{},Object(r.a)({},c,l))),C(o(N))},FormValues:N,HandleChangeImage:function(e){var s=e.target,c=s.name,l=s.files;"ClanLogo"==c&&A(Object(d.a)(Object(d.a)({},N),{},{ClanLogo:l[0]})),"PaymentScreenshot"==c&&A(Object(d.a)(Object(d.a)({},N),{},{PaymentScreenshot:l[0]})),C(o(N))},RegisterTournament:function(e){e.preventDefault(),window.grecaptcha.ready((function(){window.grecaptcha.execute("6LeukvgcAAAAACINhSppMdTKqeQBIWziSLq59_JM",{action:"submit"}).then((function(s){if(v(!0),1==I)if(""!=N.Clanname&&""!=N.ClanTag&&""!=N.ClanLogo&&""!=N.IglName&&""!=N.IglId&&""!=N.Whatsapp&&""!=N.Player2Name&&""!=N.Player2Id&&""!=N.Player3Name&&""!=N.Player3Id&&""!=N.Player4Name&&""!=N.Player4Id&&""!=N.Player5Name&&""!=N.Player5Id&&""!=N.PaymentScreenshot){var c=new FormData;c.append("Clanname",N.Clanname),c.append("ClanTag",N.ClanTag),c.append("ClanLogo",N.ClanLogo),c.append("IglName",N.IglName),c.append("IglId",N.IglId),c.append("Whatsapp",N.Whatsapp),c.append("Player2Name",N.Player2Name),c.append("Player2Id",N.Player2Id),c.append("Player3Name",N.Player3Name),c.append("Player3Id",N.Player3Id),c.append("Player4Name",N.Player4Name),c.append("Player4Id",N.Player4Id),c.append("Player5Name",N.Player5Name),c.append("Player5Id",N.Player5Id),c.append("Player6Name",N.Player6Name),c.append("Player6Id",N.Player6Id),c.append("PaymentScreenshot",N.PaymentScreenshot),c.append("SecKey",x),c.append("cpatchaToken",s),O()({method:"post",url:"https://softmeck.com/api/pakistanesportstournament",data:c,headers:{"Content-Type":"multipart/form-data"}}).then((function(s){var c=s.data;1==c.save&&(l(!1),v(!1),A({Clanname:"",ClanTag:"",ClanLogo:"",IglName:"",IglId:"",Whatsapp:"",Player2Name:"",Player2Id:"",Player3Name:"",Player3Id:"",Player4Name:"",Player4Id:"",Player5Name:"",Player5Id:"",Player6Name:"",Player6Id:"",PaymentScreenshot:""}),l(!0),b(c.token),e.target.reset()),0==c.save&&alert(c.error),console.log(s),v(!1)})).catch((function(e){console.log(e)}))}else alert("something Missing"),C(o(N)),v(!1);else alert("Tournament Registration Close.")}))}))},errors:S,ShowModaler:c,token:n,Loading:g,AllowTournament:I}};var m=function(){var e=x(),s=e.HandleChange,c=e.FormValues,l=e.HandleChangeImage,t=e.RegisterTournament,a=e.errors,i=e.ShowModaler,r=e.token,d=e.Loading,j=e.AllowTournament;return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("div",{id:"home"}),Object(n.jsx)("div",{class:"preloader",id:"preloader"}),Object(n.jsx)("a",{href:"#",class:"scrollToTop",children:Object(n.jsx)("i",{class:"fas fa-angle-double-up"})}),Object(n.jsx)("header",{id:"header-section",children:Object(n.jsx)("div",{class:"overlay",children:Object(n.jsx)("div",{class:"container",children:Object(n.jsxs)("div",{class:"row d-flex header-area",children:[Object(n.jsx)("div",{class:"logo-section flex-grow-1 d-flex align-items-center",children:Object(n.jsx)("a",{class:"site-logo site-title",href:"index.html",children:Object(n.jsx)("img",{src:"./assets/images/logo.png",alt:"site-logo"})})}),Object(n.jsx)("button",{class:"navbar-toggler ml-auto collapsed",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(n.jsx)("i",{class:"fas fa-bars"})}),Object(n.jsx)("nav",{class:"navbar navbar-expand-lg p-0",children:Object(n.jsx)("div",{class:"navbar-collapse collapse",id:"navbarSupportedContent",children:Object(n.jsxs)("ul",{class:"navbar-nav main-menu ml-auto",children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#home",children:"Home"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#about",children:"About"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#sponsor",children:"Sponsor"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#contact",children:"Contact"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#features",children:"Features"})})]})})}),Object(n.jsx)("div",{class:"right-area header-action d-flex align-items-center",children:Object(n.jsx)("a",{href:"#tournaments-section",class:"cmn-btn",children:"Register Now!"})})]})})})}),Object(n.jsx)("section",{id:"banner-section",class:"inner-banner",children:Object(n.jsx)("div",{class:"banner-content d-flex align-items-center",children:Object(n.jsxs)("div",{class:"container",children:[Object(n.jsx)("div",{class:"row justify-content-center",children:Object(n.jsx)("div",{class:"col-lg-12",children:Object(n.jsxs)("div",{class:"main-content",children:[Object(n.jsxs)("div",{class:"top-area justify-content-center text-center",children:[Object(n.jsx)("h3",{children:"Play Unlimited"}),Object(n.jsx)("h1",{children:"Tournaments"}),Object(n.jsx)("p",{children:"Compete in Free and Paid entry Tournaments. Transform your games to real money eSports"}),Object(n.jsxs)("div",{class:"btn-play d-flex justify-content-center align-items-center",children:[Object(n.jsx)("a",{href:"#tournaments-section",class:"cmn-btn",children:"REGISTER NOW"}),Object(n.jsx)("a",{href:"https://www.youtube.com/watch?v=MJ0zpsWQ_XM",class:"mfp-iframe popupvideo",children:Object(n.jsx)("img",{src:"./assets/images/play-icon.png",alt:"play"})})]})]}),Object(n.jsx)("div",{class:"row justify-content-center",children:Object(n.jsx)("div",{class:"col-lg-12",children:Object(n.jsx)("div",{class:"row justify-content-center",children:Object(n.jsx)("div",{class:"col-lg-6",children:Object(n.jsx)("div",{class:"bottom-area text-center",children:Object(n.jsx)("img",{src:"./assets/images/versus.png",alt:"banner-vs"})})})})})})]})})}),Object(n.jsxs)("div",{class:"ani-illu",children:[Object(n.jsx)("img",{class:"left-1 wow fadeInUp",src:"./assets/images/left-banner.png",alt:"image"}),Object(n.jsx)("img",{class:"right-2 wow fadeInUp",src:"./assets/images/right-banner.png",alt:"image"})]})]})})}),Object(n.jsx)("section",{id:"how-works-section",class:"border-area",children:Object(n.jsx)("div",{class:"overlay pt-120 pb-120",children:Object(n.jsxs)("div",{class:"container wow fadeInUp",children:[Object(n.jsx)("div",{class:"row d-flex justify-content-center",children:Object(n.jsx)("div",{class:"col-lg-6 text-center",children:Object(n.jsxs)("div",{class:"section-header",children:[Object(n.jsx)("h2",{class:"title"}),Object(n.jsx)("p",{children:"It's easier than you think. Follow 4 simple easy steps"})]})})}),Object(n.jsxs)("div",{class:"row mp-top",children:[Object(n.jsx)("div",{class:"col-lg-3 col-md-3 col-sm-6 d-flex justify-content-center",children:Object(n.jsxs)("div",{class:"single-item",children:[Object(n.jsxs)("div",{class:"icon-area",children:[Object(n.jsx)("span",{children:"1"}),Object(n.jsx)("img",{src:"./assets/images/how-icon-1.png",alt:"image"})]}),Object(n.jsx)("div",{class:"text-area",children:Object(n.jsx)("h5",{children:"Register"})})]})}),Object(n.jsx)("div",{class:"col-lg-3 col-md-3 col-sm-6 d-flex justify-content-center obj-rel",children:Object(n.jsxs)("div",{class:"single-item",children:[Object(n.jsxs)("div",{class:"icon-area",children:[Object(n.jsx)("span",{children:"2"}),Object(n.jsx)("img",{src:"./assets/images/how-icon-2.png",alt:"image"})]}),Object(n.jsx)("div",{class:"text-area",children:Object(n.jsx)("h5",{children:"Get Token"})})]})}),Object(n.jsx)("div",{class:"col-lg-3 col-md-3 col-sm-6 d-flex justify-content-center obj-alt",children:Object(n.jsxs)("div",{class:"single-item",children:[Object(n.jsxs)("div",{class:"icon-area",children:[Object(n.jsx)("span",{children:"3"}),Object(n.jsx)("img",{src:"./assets/images/how-icon-3.png",alt:"image"})]}),Object(n.jsx)("div",{class:"text-area",children:Object(n.jsx)("h5",{children:"Playing"})})]})}),Object(n.jsx)("div",{class:"col-lg-3 col-md-3 col-sm-6 d-flex justify-content-center obj-rel",children:Object(n.jsxs)("div",{class:"single-item",children:[Object(n.jsxs)("div",{class:"icon-area",children:[Object(n.jsx)("span",{children:"4"}),Object(n.jsx)("img",{src:"./assets/images/how-icon-4.png",alt:"image"})]}),Object(n.jsx)("div",{class:"text-area",children:Object(n.jsx)("h5",{children:"Win"})})]})})]}),Object(n.jsx)("div",{class:"row d-flex justify-content-center",children:Object(n.jsx)("div",{class:"col-lg-6 text-center",children:Object(n.jsx)("a",{href:"#tournaments-section",class:"cmn-btn",children:"Lets Go"})})})]})})}),Object(n.jsx)("section",{id:"tournaments-section",children:Object(n.jsx)("div",{class:"overlay pt-120 pb-120",children:Object(n.jsxs)("div",{class:"container wow fadeInUp",children:[Object(n.jsx)("div",{class:"row d-flex justify-content-center",children:Object(n.jsx)("div",{class:"col-lg-8 text-center",children:Object(n.jsxs)("div",{class:"section-header",children:[Object(n.jsx)("h2",{class:"title",children:j?"PMPE Tournaments ":"Registration Close"}),Object(n.jsx)("p",{children:"Find the perfect tournaments for you. Head to head matches where you pick the game, rules and prize."})]})})}),Object(n.jsx)("div",{class:j?"container-fluid active":"container-fluid deactive",id:"tmain",children:Object(n.jsxs)("div",{class:"row mb-40 mp-none",children:[Object(n.jsx)("div",{class:"col-lg-8",children:Object(n.jsx)("form",{method:"post",enctype:"multipart/form-data",onSubmit:t,children:Object(n.jsxs)("div",{class:"contact-form-wrapper",style:{borderRadius:"5px"},children:[Object(n.jsx)("div",{class:"row mb-4 ",style:{textAlign:"left"},children:Object(n.jsx)("img",{src:"/assets/images/tourbanner.gif",class:"bimage"})}),Object(n.jsxs)("div",{class:"row clanform-row",style:{textAlign:"left"},children:[Object(n.jsxs)("div",{class:"col-md-6",children:[Object(n.jsx)("div",{class:d?"placeload active":"placeload deactive",children:Object(n.jsx)("div",{class:"image-placeholder loads"})}),Object(n.jsxs)("div",{class:"single-input",children:[Object(n.jsx)("span",{children:"Your Clan Name"}),Object(n.jsx)("input",{class:a.Clanname?"active":"RemoveActive",type:"text",name:"Clanname",onChange:s,value:c.Clanname,style:{borderRadius:"5px"},placeholder:"Your Clan Name"})]})]}),Object(n.jsxs)("div",{class:"col-md-6",style:{textAlign:"left"},children:[Object(n.jsx)("div",{class:d?"placeload active":"placeload deactive",children:Object(n.jsx)("div",{class:"image-placeholder loads"})}),Object(n.jsxs)("div",{class:"single-input",children:[Object(n.jsx)("span",{children:"Your Clan Tag"}),Object(n.jsx)("input",{class:a.ClanTag?"active":"RemoveActive",type:"text",name:"ClanTag",onChange:s,value:c.ClanTag,style:{borderRadius:"5px"},placeholder:"Your Clan Tag"})]})]})]}),Object(n.jsx)("hr",{}),Object(n.jsx)("div",{class:"row py-4  linup-detail-row",children:Object(n.jsx)("h1",{class:"title",children:c.Clanname})}),Object(n.jsx)("hr",{}),Object(n.jsx)("div",{class:"row clan-logo-form-row",children:Object(n.jsxs)("div",{class:"col-md-12 mb-2",style:{textAlign:"left"},children:[Object(n.jsx)("div",{class:d?"placeload active":"placeload deactive",children:Object(n.jsx)("div",{class:"image-placeholder loads"})}),Object(n.jsxs)("div",{class:"single-input",children:[Object(n.jsx)("span",{children:"Enter Your Clan Logo (Only Jpg AND Png)"}),Object(n.jsx)("input",{class:a.ClanLogo?"active":"RemoveActive",id:"paymentsc",type:"file",name:"ClanLogo",onChange:l,style:{borderRadius:"5px"}})]})]})}),Object(n.jsx)("hr",{}),Object(n.jsxs)("div",{class:"row igl-row-form",children:[Object(n.jsxs)("div",{class:"col-md-4",style:{textAlign:"left"},children:[Object(n.jsx)("div",{class:d?"placeload active":"placeload deactive",children:Object(n.jsx)("div",{class:"image-placeholder loads"})}),Object(n.jsxs)("div",{class:"single-input",children:[Object(n.jsx)("span",{children:"IGL IN Game Name"}),Object(n.jsx)("input",{class:a.IglName?"active":"RemoveActive",type:"text",name:"IglName",onChange:s,value:c.IglName,style:{borderRadius:"5px"},placeholder:"IGL IN Game Name"})]})]}),Object(n.jsxs)("div",{class:"col-md-4",style:{textAlign:"left"},children:[Object(n.jsx)("div",{class:d?"placeload active":"placeload deactive",children:Object(n.jsx)("div",{class:"image-placeholder loads"})}),Object(n.jsxs)("div",{class:"single-input",children:[Object(n.jsx)("span",{children:"IGL Id"}),Object(n.jsx)("input",{class:a.IglId?"active":"RemoveActive",type:"text",name:"IglId",onChange:s,value:c.IglId,style:{borderRadius:"5px"},placeholder:"IGL Id"})]})]}),Object(n.jsxs)("div",{class:"col-md-4",style:{textAlign:"left"},children:[Object(n.jsx)("div",{class:d?"placeload active":"placeload deactive",children:Object(n.jsx)("div",{class:"image-placeholder loads"})}),Object(n.jsxs)("div",{class:"single-input",children:[Object(n.jsx)("span",{children:"IGL Watsapp"}),Object(n.jsx)("input",{class:a.Whatsapp?"active":"RemoveActive",type:"text",name:"Whatsapp",onChange:s,value:c.Whatsapp,style:{borderRadius:"5px"},placeholder:"IGL Watsapp"})]})]})]}),Object(n.jsx)("hr",{}),Object(n.jsxs)("div",{class:"row igl-row-form",children:[Object(n.jsxs)("div",{class:"col-md-6 mb-2",style:{textAlign:"left"},children:[Object(n.jsx)("div",{class:d?"placeload active":"placeload deactive",children:Object(n.jsx)("div",{class:"image-placeholder loads"})}),Object(n.jsxs)("div",{class:"single-input",children:[Object(n.jsx)("span",{children:"Player 2 Ingame Name"}),Object(n.jsx)("input",{class:a.Player2Name?"active":"RemoveActive",type:"text",name:"Player2Name",onChange:s,value:c.Player2Name,style:{borderRadius:"5px"},placeholder:"Player 2 Ingame Name"})]})]}),Object(n.jsxs)("div",{class:"col-md-6 mb-2",style:{textAlign:"left"},children:[Object(n.jsx)("div",{class:d?"placeload active":"placeload deactive",children:Object(n.jsx)("div",{class:"image-placeholder loads"})}),Object(n.jsxs)("div",{class:"single-input",children:[Object(n.jsx)("span",{children:"Player 2 Id"}),Object(n.jsx)("input",{class:a.Player2Id?"active":"RemoveActive",type:"text",name:"Player2Id",onChange:s,value:c.Player2Id,style:{borderRadius:"5px"},placeholder:"Player 2  Id"})]})]}),Object(n.jsxs)("div",{class:"col-md-6 mb-2",style:{textAlign:"left"},children:[Object(n.jsx)("div",{class:d?"placeload active":"placeload deactive",children:Object(n.jsx)("div",{class:"image-placeholder loads"})}),Object(n.jsxs)("div",{class:"single-input",children:[Object(n.jsx)("span",{children:"Player 3 Ingame Name"}),Object(n.jsx)("input",{class:a.Player3Name?"active":"RemoveActive",type:"text",name:"Player3Name",onChange:s,value:c.Player3Name,style:{borderRadius:"5px"},placeholder:"Player 3 Ingame Name"})]})]}),Object(n.jsxs)("div",{class:"col-md-6 mb-2",style:{textAlign:"left"},children:[Object(n.jsx)("div",{class:d?"placeload active":"placeload deactive",children:Object(n.jsx)("div",{class:"image-placeholder loads"})}),Object(n.jsxs)("div",{class:"single-input",children:[Object(n.jsx)("span",{children:"Player 3 Id"}),Object(n.jsx)("input",{class:a.Player3Id?"active":"RemoveActive",type:"text",name:"Player3Id",onChange:s,value:c.Player3Id,style:{borderRadius:"5px"},placeholder:"Player 3 Id"})]})]}),Object(n.jsxs)("div",{class:"col-md-6 mb-2",style:{textAlign:"left"},children:[Object(n.jsx)("div",{class:d?"placeload active":"placeload deactive",children:Object(n.jsx)("div",{class:"image-placeholder loads"})}),Object(n.jsxs)("div",{class:"single-input",children:[Object(n.jsx)("span",{children:"Player 4 Ingame Name"}),Object(n.jsx)("input",{class:a.Player4Name?"active":"RemoveActive",type:"text",name:"Player4Name",onChange:s,value:c.Player4Name,style:{borderRadius:"5px"},placeholder:"Player 4 Ingame Name"})]})]}),Object(n.jsxs)("div",{class:"col-md-6 mb-2",style:{textAlign:"left"},children:[Object(n.jsx)("div",{class:d?"placeload active":"placeload deactive",children:Object(n.jsx)("div",{class:"image-placeholder loads"})}),Object(n.jsxs)("div",{class:"single-input",children:[Object(n.jsx)("span",{children:"Player 4 Id"}),Object(n.jsx)("input",{class:a.Player4Id?"active":"RemoveActive",type:"text",name:"Player4Id",onChange:s,value:c.Player4Id,style:{borderRadius:"5px"},placeholder:"Player 4 Id"})]})]}),Object(n.jsxs)("div",{class:"col-md-6 mb-2",style:{textAlign:"left"},children:[Object(n.jsx)("div",{class:d?"placeload active":"placeload deactive",children:Object(n.jsx)("div",{class:"image-placeholder loads"})}),Object(n.jsxs)("div",{class:"single-input",children:[Object(n.jsx)("span",{children:"Player 5 Ingame Name"}),Object(n.jsx)("input",{class:a.Player5Name?"active":"RemoveActive",type:"text",name:"Player5Name",onChange:s,value:c.Player5Name,style:{borderRadius:"5px"},placeholder:"Player 5 Ingame Name"})]})]}),Object(n.jsxs)("div",{class:"col-md-6 mb-2",style:{textAlign:"left"},children:[Object(n.jsx)("div",{class:d?"placeload active":"placeload deactive",children:Object(n.jsx)("div",{class:"image-placeholder loads"})}),Object(n.jsxs)("div",{class:"single-input",children:[Object(n.jsx)("span",{children:"Player 5 Id"}),Object(n.jsx)("input",{class:a.Player5Id?"active":"RemoveActive",type:"text",name:"Player5Id",onChange:s,value:c.Player5Id,style:{borderRadius:"5px"},placeholder:"Player 5 Id"})]})]})]}),Object(n.jsx)("hr",{}),Object(n.jsxs)("div",{class:"row extra-slot-form",children:[Object(n.jsx)("div",{class:"col-12",style:{textAlign:"left"},children:Object(n.jsx)("h4",{style:{color:"#fff "},children:"Extra Slot"})}),Object(n.jsxs)("div",{class:"col-md-6 mb-2",style:{textAlign:"left"},children:[Object(n.jsx)("div",{class:d?"placeload active":"placeload deactive",children:Object(n.jsx)("div",{class:"image-placeholder loads"})}),Object(n.jsxs)("div",{class:"single-input",children:[Object(n.jsx)("span",{children:"Player 6 Ingame Name"}),Object(n.jsx)("input",{type:"text",name:"Player6Name",onChange:s,value:c.Player6Name,style:{borderRadius:"5px"},placeholder:"Player 6 Ingame Name"})]})]}),Object(n.jsxs)("div",{class:"col-md-6 mb-2",style:{textAlign:"left"},children:[Object(n.jsx)("div",{class:d?"placeload active":"placeload deactive",children:Object(n.jsx)("div",{class:"image-placeholder loads"})}),Object(n.jsxs)("div",{class:"single-input",children:[Object(n.jsx)("span",{children:"Player 6 Id"}),Object(n.jsx)("input",{type:"text",name:"Player6Id",onChange:s,value:c.Player6Id,style:{borderRadius:"5px"},placeholder:"Player 6 Id"})]})]})]}),Object(n.jsx)("hr",{}),Object(n.jsx)("div",{class:"row form-amount-sec",style:{textAlign:"left"},children:Object(n.jsxs)("h6",{style:{textTransform:"uppercase"},children:["Please Send ( ",Object(n.jsx)("span",{style:{color:"#15c4f8"},children:" Rs 1000"})," ) Amount to this Number ( ",Object(n.jsx)("span",{style:{color:"#15c4f8"},children:"Easy Paisa 03151003118 | Jazzcash 03151003118 "})," )"]})}),Object(n.jsx)("hr",{}),Object(n.jsx)("div",{class:"row pay-screenshot",children:Object(n.jsxs)("div",{class:"col-md-12 mb-2",style:{textAlign:"left"},children:[Object(n.jsx)("div",{class:d?"placeload active":"placeload deactive",children:Object(n.jsx)("div",{class:"image-placeholder loads"})}),Object(n.jsx)("span",{class:"text-danger",children:a.PaymentScreenshot}),Object(n.jsxs)("div",{class:"single-input",children:[Object(n.jsxs)("span",{children:["Payment Screenshot ",Object(n.jsx)("span",{children:"(Only Jpg OR Png)(Upload Image Size Less The 1 Mb)"})," "]}),Object(n.jsx)("input",{id:"paymentsc",type:"file",name:"PaymentScreenshot",onChange:l,style:{borderRadius:"5px"}})]})]})}),Object(n.jsx)("br",{}),Object(n.jsx)("button",{type:"submit","data-action":"submit",class:"cmn-btn container text-light",style:{borderRadius:"5px"},children:"Register A Team"})]})})}),Object(n.jsx)("div",{class:"col-lg-4",children:Object(n.jsxs)("div",{class:"contact-content-wrapper",children:[Object(n.jsx)("h4",{children:"Tournament Rules"}),Object(n.jsx)("p",{style:{fontSize:"15px"},children:"."}),Object(n.jsx)("div",{class:"row mt-1 mb-none-30",children:Object(n.jsx)("div",{class:"col-lg-12 mb-30",children:Object(n.jsxs)("ul",{class:"list-group",children:[Object(n.jsx)("li",{class:"list-group-item",children:"\ud83d\udd39YOUR INGAME ID LEVEL MUST BE 50+ "}),Object(n.jsx)("li",{class:"list-group-item",children:"\ud83d\udd39CORRECT ID & NAME MUST BE SUBMITTED CORRECTLY IN  "}),Object(n.jsx)("li",{class:"list-group-item",children:"\ud83d\udd39ONLY PLAYERS WHO HAVE BEEN REGISETERD CAN PLAY "}),Object(n.jsx)("li",{class:"list-group-item",children:"\ud83d\udd39TWO PLAYER OF THE TEAM MUST RECORD PLAYERS WITH LOW END PCS CAN RECORD VIA MOBILE"}),Object(n.jsx)("li",{class:"list-group-item",children:"\ud83d\udd39WE CAN ASK FOR THE RECORDINGS ANYTIME,IF YOU FAIL TO PROVIDE RECORDINGS ,WILL BE BANNED "}),Object(n.jsx)("li",{class:"list-group-item",children:"\ud83d\udd39FISTING IS STRICTLY PROHIBITED | WARN AND AFTER BAN "}),Object(n.jsx)("li",{class:"list-group-item",children:"\ud83d\udd39ONLY GAME LOOP / TENCENT PLAYERS ARE ALLOWED "}),Object(n.jsx)("li",{class:"list-group-item",children:"\ud83d\udd39FOR ANY QUERY CONTACT MANAGEMENT ON DISCORD (https://discord.com/invite/2nYZhczHJ5) "}),Object(n.jsx)("li",{class:"list-group-item",children:"\ud83d\udd39ANY TEAM CAUGHT HACKING/STREAM SNIPING WILL BE DISQUALIFIED"}),Object(n.jsx)("li",{class:"list-group-item",children:"\ud83d\udd39ALL PLAYERS MUST JOIN THIR RESPECTIVE VC PRIOR TO THE TIME "}),Object(n.jsx)("li",{class:"list-group-item",children:"\ud83d\udd39PLAYERS MUST RECORD THIR GAMEPLAY ON DISPLAY CAPTURE GAME/WINDOW CAPTURE IS PROHIBITED "}),Object(n.jsx)("li",{class:"list-group-item",children:"\ud83d\udd39EVERY INDIVIDUAL PLAYER CAN PLAY FROM ONE TEAM ONLY THIS ALSO CONSIDERS PLAYING FROM IDS OF OTHER PLAYERS ANYONE CAUGHT PLAYING FROM OTHER PLAYERS IDS WILL BE BANNED"}),Object(n.jsx)("li",{class:"list-group-item",children:"\ud83d\udd39IN CASE OF DELAY YOU HAVE TO MENTION BEFORE THE FIRST ZONE HAS STARTED "}),Object(n.jsx)("li",{class:"list-group-item",children:"\ud83d\udd39THE USE OF X-MOUSE BUTTON FOR KILLING PLAYERS THORUGH WALL GLITCH IS NOT ALLOWED  "}),Object(n.jsx)("li",{class:"list-group-item",children:"\ud83d\udd39I PAD VIEW IS BANNED ONLY PLAYERS WHO HAVE A LCD/SCREEN THAT HAS A RESOLUTION LIKE IPAD VIEW CAN PLAY ON IPAD VIEW "}),Object(n.jsx)("li",{class:"list-group-item",children:"\ud83d\udd39YOU CAN REGISTER MAX 6 PLAYERS FROM ONE LINEUP 5 MUST "})]})})})]})})]})})]})})}),Object(n.jsx)("div",{id:"features"}),Object(n.jsx)("section",{id:"features-section",children:Object(n.jsx)("div",{class:"overlay pt-120",children:Object(n.jsxs)("div",{class:"container wow fadeInUp",children:[Object(n.jsx)("div",{class:"row justify-content-center",children:Object(n.jsx)("div",{class:"col-lg-10",children:Object(n.jsxs)("div",{class:"section-header text-center",children:[Object(n.jsx)("h2",{class:"title",children:"Pakistan Esport Features"}),Object(n.jsx)("p",{children:"The biggest esports tournaments anytime, anywhere"})]})})}),Object(n.jsxs)("div",{class:"row pm-none",children:[Object(n.jsx)("div",{class:"col-lg-4 col-md-6 col-sm-6",children:Object(n.jsxs)("div",{class:"single-item text-center",children:[Object(n.jsx)("div",{class:"img-area",children:Object(n.jsx)("img",{src:"./assets/images/features-icon-3.png",alt:"image"})}),Object(n.jsx)("h5",{children:"Climb the Leaderboards"}),Object(n.jsx)("p",{children:"Compete in monthly leaderboard challenges for real cash and prizes."})]})}),Object(n.jsx)("div",{class:"col-lg-4 col-md-6 col-sm-6",children:Object(n.jsxs)("div",{class:"single-item text-center",children:[Object(n.jsx)("div",{class:"img-area",children:Object(n.jsx)("img",{src:"./assets/images/features-icon-5.png",alt:"image"})}),Object(n.jsx)("h5",{children:"Make up to 10X your $$"}),Object(n.jsx)("p",{children:"Make up to 10X your money on multiplayer tourneys. With paid and free entry."})]})}),Object(n.jsx)("div",{class:"col-lg-4 col-md-6 col-sm-6",children:Object(n.jsxs)("div",{class:"single-item text-center",children:[Object(n.jsx)("div",{class:"img-area",children:Object(n.jsx)("img",{src:"./assets/images/features-icon-6.png",alt:"image"})}),Object(n.jsx)("h5",{children:"Play at your Level"}),Object(n.jsx)("p",{children:"With ranked divisions we help you find the right level to compete."})]})})]})]})})}),Object(n.jsx)("div",{id:"about"}),Object(n.jsx)("section",{id:"about-us-section",children:Object(n.jsx)("div",{class:"overlay pt-120",children:Object(n.jsx)("div",{class:"container wow fadeInUp",children:Object(n.jsx)("div",{class:"main-container",children:Object(n.jsx)("div",{class:"row d-flex justify-content-center",children:Object(n.jsx)("div",{class:"col-lg-8",children:Object(n.jsxs)("div",{class:"section-header text-center",children:[Object(n.jsx)("h2",{class:"title mt-5",children:"ABOUT PAKISTAN ESPORT"}),Object(n.jsx)("p",{children:"Welcome To Pakistan Esports We Are Providing You Well Disciplined Gaming Platform Which Can Make You Earn Money By Showing You Skills We Will Be Organizing The Competitive Tournament Of Every Type Of Game Pakistan Esports Is An Esports Community That Is Giving You A Chance To Enhance Your Gaming Skills By Which You Can Earn Money"}),Object(n.jsx)("a",{href:"#tournaments-section",class:"cmn-btn",children:"Lets Go"})]})})})})})})}),Object(n.jsx)("div",{id:"sponsor"}),Object(n.jsx)("section",{id:"tournaments-everyone",class:"pb-120",children:Object(n.jsxs)("div",{class:"container",children:[Object(n.jsx)("h2",{class:"title mt-5",children:"SPONSORS.."}),Object(n.jsxs)("div",{class:"row mt-5",children:[Object(n.jsx)("div",{class:"col-lg-8 mt-5 col-md-8 d-flex align-items-left text-left",children:Object(n.jsxs)("div",{class:"section-header",children:[Object(n.jsx)("h2",{class:"title text-left",children:"SOFTMECK.COM"}),Object(n.jsx)("h5",{class:"text-left",children:"THE BEST AGENCY IN PAKISTAN."}),Object(n.jsx)("p",{class:"text-left",style:{fontSize:"15px"},children:"WE PROVIDE CREATIVE, INNOVATIVE, AND PROFESSIONAL SERVICES FOR WEB DEVELOPMENT. HAVING A TEAM OF EXPERT DESIGNERS PROFESSIONAL WEB DEVELOPERS THAT CAN DRIVE YOUR BUSINESS TOWARDS THE DESIRED DESTINATION AND TAKE YOU WHERE YOU WANT. WE HAVE LEARNED THAT THE GREAT DESIGNS ARE TEAMWORK AT ONCE; IT NEEDS PATIENCE, EFFECTIVE TEAMWORK, AND CREATIVITY TO BRING SOMETHING THAT IS JUST AWESOME!."}),Object(n.jsx)("a",{href:"https://www.softmeck.com/",class:"cmn-btn",children:"View More"})]})}),Object(n.jsx)("div",{class:"col-lg-4 col-md-4 mt-5",children:Object(n.jsx)("div",{class:"right-area",children:Object(n.jsx)("img",{class:"customingspon",style:{width:"100%"},src:"https://www.softmeck.com/assests/images/pormotebanner.png",alt:"image"})})})]})]})}),Object(n.jsx)("div",{id:"contact"}),Object(n.jsxs)("footer",{id:"footer-section",children:[Object(n.jsx)("div",{class:"overlay",children:Object(n.jsx)("div",{class:"container",children:Object(n.jsx)("div",{class:"row",children:Object(n.jsx)("div",{class:"col-lg-12",children:Object(n.jsx)("div",{class:"footer-top",children:Object(n.jsx)("div",{class:"row justify-content-center",children:Object(n.jsx)("div",{class:"col-lg-10",children:Object(n.jsxs)("div",{class:"top-area text-center",children:[Object(n.jsx)("h3",{children:"CONTACT DETIALS"}),Object(n.jsxs)("div",{class:"row",children:[Object(n.jsxs)("div",{class:"col-lg-5 ",children:[Object(n.jsx)("br",{}),Object(n.jsx)("h5",{class:"col-12",style:{color:"orange"},children:"Discrod Server"}),Object(n.jsxs)("p",{children:[Object(n.jsx)("a",{href:"https://discord.gg/2nYZhczHJ5",class:"ml-2 btn mb-1 customcolor",children:"https://discord.gg/2nYZhczHJ5"}),Object(n.jsx)("br",{}),Object(n.jsx)("p",{children:"https://discord.gg/2nYZhczHJ5"})]})]}),Object(n.jsxs)("div",{class:"col-lg-7 ",children:[Object(n.jsx)("br",{}),Object(n.jsx)("h5",{class:"col-12",style:{color:"orange"},children:"Mangers Of Pakistan Esports"}),Object(n.jsxs)("p",{children:[Object(n.jsx)("a",{class:"ml-2 btn mb-1 customcolor",children:"CrayonYt"}),Object(n.jsx)("a",{class:"ml-2 btn mb-1 customcolor",children:"SameerYt"}),Object(n.jsx)("a",{class:"ml-2 btn mb-1 customcolor",children:"ZiddiYt"}),Object(n.jsx)("a",{class:"ml-2 btn mb-1 customcolor",children:"Op Smurf"}),Object(n.jsx)("a",{class:"ml-2 btn mb-1 customcolor",children:"Op Killer"})]})]})]})]})})})})})})})}),Object(n.jsx)("div",{class:"footer-mid pt-120",children:Object(n.jsx)("div",{class:"container",children:Object(n.jsxs)("div",{class:"row d-flex",children:[Object(n.jsxs)("div",{class:"col-lg-8 col-md-8 d-flex justify-content-md-between justify-content-center align-items-center cus-grid",children:[Object(n.jsx)("div",{class:"logo-section",children:Object(n.jsx)("a",{class:"site-logo site-title",href:"index.html",children:Object(n.jsx)("img",{src:"./assets/images/logo.png",alt:"site-logo"})})}),Object(n.jsxs)("ul",{class:"menu-side d-flex align-items-center",children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#home",class:"active",children:"Home"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#about",children:"About Us"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#sponsor",children:"Sponsor"})})]})]}),Object(n.jsx)("div",{class:"col-lg-4 col-md-4 d-flex align-items-center justify-content-center justify-content-md-end",children:Object(n.jsx)("div",{class:"right-area"})})]})})}),Object(n.jsx)("div",{class:"footer-bottom",children:Object(n.jsx)("div",{class:"container",children:Object(n.jsx)("div",{class:"main-content",children:Object(n.jsx)("div",{class:"row d-flex align-items-center justify-content-center",children:Object(n.jsx)("div",{class:"col-lg-12 col-md-6",children:Object(n.jsx)("div",{class:"left-area text-center",children:Object(n.jsxs)("p",{children:["Copyright \xa9 2021. All Rights Reserved By",Object(n.jsx)("a",{class:"ml-2",target:"_blank",href:"https://www.softmeck.com/",children:" SOFTMECK"})]})})})})})})})]}),Object(n.jsx)("div",{class:i?"backdropcust active":"backdropcust deactive",id:"backdropcust",children:Object(n.jsxs)("div",{class:"alert col-8 customalert alert-dismissible",children:[Object(n.jsx)("button",{type:"button",class:"btn text-light alclose",id:"alclosea",children:"X"}),Object(n.jsx)("br",{}),Object(n.jsx)("div",{class:"success-checkmark",children:Object(n.jsxs)("div",{class:"check-icon",children:[Object(n.jsx)("span",{class:"icon-line line-tip"}),Object(n.jsx)("span",{class:"icon-line line-long"}),Object(n.jsx)("div",{class:"icon-circle"}),Object(n.jsx)("div",{class:"icon-fix"})]})}),Object(n.jsxs)("h3",{style:{color:"yellow"},children:["Don't Miss : ",r]}),Object(n.jsx)("hr",{}),Object(n.jsx)("p",{style:{fontSize:"15px"},children:"Your Team Register SuccessFully. Copy The Token And Send Token To Managers On Pakistan Esports DiscordServer For Team Approve And Get Your Roles."}),Object(n.jsx)("hr",{}),Object(n.jsx)("h5",{style:{color:"yellow"},children:"https://discord.gg/2nYZhczHJ5"})]})})]})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,45)).then((function(s){var c=s.getCLS,l=s.getFID,t=s.getFCP,a=s.getLCP,i=s.getTTFB;c(e),l(e),t(e),a(e),i(e)}))};i.a.render(Object(n.jsx)(t.a.StrictMode,{children:Object(n.jsx)(m,{})}),document.getElementById("root")),p()}},[[44,1,2]]]);
//# sourceMappingURL=main.b2bbfcaa.chunk.js.map