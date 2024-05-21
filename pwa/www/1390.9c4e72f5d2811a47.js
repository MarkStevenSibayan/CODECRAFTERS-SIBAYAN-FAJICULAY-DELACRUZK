"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1390],{1390:(y,g,o)=>{o.r(g),o.d(g,{HomePageModule:()=>i});var h=o(177),e=o(1075),m=o(4341),d=o(9858),p=o(467),n=o(4438);let C=(()=>{var t;class a{constructor(c){this.modalCtrl=c}ngOnInit(){}cancel(){return this.modalCtrl.dismiss()}}return(t=a).\u0275fac=function(c){return new(c||t)(n.rXU(e.W3))},t.\u0275cmp=n.VBU({type:t,selectors:[["app-modal"]],decls:8,vars:0,consts:[[1,"ion-padding"],["slot","start"],["color","danger",3,"click"],[1,"background"]],template:function(c,u){1&c&&(n.j41(0,"ion-content",0)(1,"ion-toolbar")(2,"ion-buttons",1)(3,"ion-button",2),n.bIt("click",function(){return u.cancel()}),n.EFF(4,"Cancel"),n.k0s()(),n.j41(5,"ion-title"),n.EFF(6,"Upload"),n.k0s()(),n.nrm(7,"div",3),n.k0s())},dependencies:[e.Jm,e.QW,e.W9,e.BC,e.ai],styles:["ion-title[_ngcontent-%COMP%]{border-radius:15px}.background[_ngcontent-%COMP%]{position:absolute;top:0;right:0;width:100%;min-height:700px;background-color:gray}"]}),a})();var f=o(6888),P=o(5085);const r=[{path:"",component:(()=>{var t;class a{constructor(c,u,M,E){this.homeService=c,this.authenticationService=u,this.route=M,this.modalController=E}ngOnInit(){this.authenticationService.authenticated=!1}logout(){this.authenticationService.authenticated=!1,this.route.navigate(["login"])}openModal(){var c=this;return(0,p.A)(function*(){(yield c.modalController.create({component:C})).present()})()}}return(t=a).\u0275fac=function(c){return new(c||t)(n.rXU(f.X),n.rXU(P.k),n.rXU(d.Ix),n.rXU(e.W3))},t.\u0275cmp=n.VBU({type:t,selectors:[["app-home"]],decls:22,vars:0,consts:[["slot","bottom"],["tab","dashboard"],["name","home"],["tab","search"],["name","Search"],[3,"click"],["name","add"],["tab","notification"],["name","notifications"],["tab","profile"],["name","person"]],template:function(c,u){1&c&&(n.j41(0,"ion-tabs")(1,"ion-tab-bar",0)(2,"ion-tab-button",1),n.nrm(3,"ion-icon",2),n.j41(4,"ion-label"),n.EFF(5,"Home"),n.k0s()(),n.j41(6,"ion-tab-button",3),n.nrm(7,"ion-icon",4),n.j41(8,"ion-label"),n.EFF(9,"Search"),n.k0s()(),n.j41(10,"ion-tab-button",5),n.bIt("click",function(){return u.openModal()}),n.nrm(11,"ion-icon",6),n.j41(12,"ion-label"),n.EFF(13,"Share"),n.k0s()(),n.j41(14,"ion-tab-button",7),n.nrm(15,"ion-icon",8),n.j41(16,"ion-label"),n.EFF(17,"Notification"),n.k0s()(),n.j41(18,"ion-tab-button",9),n.nrm(19,"ion-icon",10),n.j41(20,"ion-label"),n.EFF(21,"Profile"),n.k0s()()()())},dependencies:[e.iq,e.he,e.Jq,e.qW,e.p4],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}ion-footer[_ngcontent-%COMP%]{width:100%;height:50px;background-color:gray;display:flex;justify-content:center;align-items:center;flex-direction:row}.footer-button[_ngcontent-%COMP%]{width:50px;margin:5px}"]}),a})(),children:[{path:"dashboard",loadChildren:()=>Promise.all([o.e(2076),o.e(691)]).then(o.bind(o,691)).then(t=>t.DashboardPageModule)},{path:"profile",loadChildren:()=>Promise.all([o.e(2076),o.e(8168)]).then(o.bind(o,8168)).then(t=>t.ProfilePageModule)},{path:"search",loadChildren:()=>Promise.all([o.e(2076),o.e(3980)]).then(o.bind(o,3980)).then(t=>t.SearchPageModule)},{path:"notification",loadChildren:()=>o.e(9973).then(o.bind(o,9973)).then(t=>t.NotificationPageModule)}]},{path:"dashboard",loadChildren:()=>Promise.all([o.e(2076),o.e(691)]).then(o.bind(o,691)).then(t=>t.DashboardPageModule)},{path:"profile",loadChildren:()=>Promise.all([o.e(2076),o.e(8168)]).then(o.bind(o,8168)).then(t=>t.ProfilePageModule)},{path:"search",loadChildren:()=>Promise.all([o.e(2076),o.e(3980)]).then(o.bind(o,3980)).then(t=>t.SearchPageModule)},{path:"notification",loadChildren:()=>o.e(9973).then(o.bind(o,9973)).then(t=>t.NotificationPageModule)}];let l=(()=>{var t;class a{}return(t=a).\u0275fac=function(c){return new(c||t)},t.\u0275mod=n.$C({type:t}),t.\u0275inj=n.G2t({imports:[d.iI.forChild(r),d.iI]}),a})(),i=(()=>{var t;class a{}return(t=a).\u0275fac=function(c){return new(c||t)},t.\u0275mod=n.$C({type:t}),t.\u0275inj=n.G2t({imports:[h.MD,m.YN,e.bv,l]}),a})()},6888:(y,g,o)=>{o.d(g,{X:()=>C});var h=o(467),e=o(9599),m=o(2214),d=o(5312),p=o(4438),n=o(1075);let C=(()=>{var f;class P{constructor(r){this.alertController=r,this.ProfileContent=[],this.userId="",this.userLink="",this.userDesc="",this.userMessage="",this.userReact=0}getUser(){return(0,h.A)(function*(){const r=(0,m.Wp)(d.c.firebaseConfig),l=(0,e.aU)(r),i=[];return(yield(0,e.GG)((0,e.rJ)(l,"users"))).forEach(a=>{const s=a.data();s.id=a.id,i.push(s),console.log(`${a.id} => ${a.data()}`),console.log(a.data())}),i})()}getProfile(){return(0,h.A)(function*(){const r=(0,m.Wp)(d.c.firebaseConfig),l=(0,e.aU)(r),i=[];return(yield(0,e.GG)((0,e.rJ)(l,"profile"))).forEach(a=>{const s=a.data();s.id=a.id,i.push(s),console.log(`${a.id} => ${a.data()}`),console.log(a.data())}),i})()}getNotification(){return(0,h.A)(function*(){const r=(0,m.Wp)(d.c.firebaseConfig),l=(0,e.aU)(r),i=[];return(yield(0,e.GG)((0,e.rJ)(l,"notification"))).forEach(a=>{const s=a.data();s.id=a.id,i.push(s),console.log(`${a.id} => ${a.data()}`),console.log(a.data())}),i})()}Add(r){return(0,h.A)(function*(){const l=(0,m.Wp)(d.c.firebaseConfig),i=(0,e.aU)(l);try{const t=yield(0,e.gS)((0,e.rJ)(i,"users"),{});console.log("Document written with ID: ",t.id)}catch(t){console.error("Error adding Document: ",t)}})()}AddNotif(){return(0,h.A)(function*(){const r=(0,m.Wp)(d.c.firebaseConfig),l=(0,e.aU)(r);try{const i=yield(0,e.gS)((0,e.rJ)(l,"notification"),{message:localStorage.getItem("notificationMessage")});console.log("Document written with ID: ",i.id)}catch(i){console.error("Error adding Document: ",i)}})()}Update(r){return(0,h.A)(function*(){const l=(0,m.Wp)(d.c.firebaseConfig),i=(0,e.aU)(l);try{const t=(0,e.H9)(i,"users",r.id);yield(0,e.mZ)(t,{})}catch(t){console.error("Error adding Document: ",t)}})()}Delete(r){return(0,h.A)(function*(){const l=(0,m.Wp)(d.c.firebaseConfig),i=(0,e.aU)(l);try{const t=(0,e.H9)(i,"users",r.id);yield(0,e.kd)(t)}catch(t){console.error("Error adding Document: ",t)}})()}presentAlert(r,l){var i=this;return(0,h.A)(function*(){yield(yield i.alertController.create({header:r,subHeader:l,buttons:["okay"]})).present()})()}}return(f=P).\u0275fac=function(r){return new(r||f)(p.KVO(n.hG))},f.\u0275prov=p.jDH({token:f,factory:f.\u0275fac,providedIn:"root"}),P})()}}]);