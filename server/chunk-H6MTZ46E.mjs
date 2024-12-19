import './polyfills.server.mjs';
import{a as S}from"./chunk-7LBY34FW.mjs";import{k as C,l as E,m as u}from"./chunk-RST4W3WE.mjs";import{Ea as v,Ga as m,Ja as e,Ka as t,La as n,Na as d,R as c,Sa as a,Ta as g,Ua as y,Va as p,Ya as x,qa as b,ta as s}from"./chunk-QZAVSTTA.mjs";import"./chunk-5XUXGTUW.mjs";var D=(r,l)=>({transform:r,transition:l});function M(r,l){if(r&1&&(e(0,"div",7),n(1,"img",8),t()),r&2){let o=l.$implicit;s(),m("src",o,b)}}var f=class r{imageUrls=[];currentIndex=0;autoSlideInterval;sliding=!1;transitionEnabled=!0;ngOnInit(){this.imageUrls&&this.imageUrls.length===0&&this.startAutoSlide()}ngOnDestroy(){this.autoSlideInterval&&clearInterval(this.autoSlideInterval)}nextImage(){this.sliding||(this.sliding=!0,this.transitionEnabled=!0,this.currentIndex++,this.currentIndex===this.imageUrls.length&&(this.currentIndex=0),setTimeout(()=>{this.sliding=!1},1e3))}prevImage(){this.sliding||(this.sliding=!0,this.transitionEnabled=!0,this.currentIndex===0?this.currentIndex=this.imageUrls.length-1:this.currentIndex--,setTimeout(()=>{this.sliding=!1},1e3))}startAutoSlide(){this.autoSlideInterval||(this.autoSlideInterval=setInterval(()=>{this.nextImage()},3e3))}stopAutoSlide(){this.autoSlideInterval&&(clearInterval(this.autoSlideInterval),this.autoSlideInterval=null)}trackByFn(l,o){return l}static \u0275fac=function(o){return new(o||r)};static \u0275cmp=c({type:r,selectors:[["ribbon-slides"]],inputs:{imageUrls:"imageUrls"},standalone:!0,features:[p],decls:8,vars:6,consts:[[1,"container"],[1,"image-slider","d-flex","align-items-center","justify-content-between",3,"mouseenter","mouseleave"],[1,"arrow-icon",3,"click"],[1,"bi","bi-chevron-left"],[1,"d-flex",3,"ngStyle"],["class","ribbon-img-frame",4,"ngFor","ngForOf","ngForTrackBy"],[1,"bi","bi-chevron-right"],[1,"ribbon-img-frame"],["alt","Image slider",1,"img-fluid","h-100","w-100",3,"src"]],template:function(o,i){o&1&&(e(0,"div",0)(1,"div",1),d("mouseenter",function(){return i.stopAutoSlide()})("mouseleave",function(){return i.startAutoSlide()}),e(2,"span",2),d("click",function(){return i.prevImage()}),n(3,"i",3),t(),e(4,"div",4),v(5,M,2,1,"div",5),t(),e(6,"span",2),d("click",function(){return i.nextImage()}),n(7,"i",6),t()()()),o&2&&(s(4),m("ngStyle",x(3,D,"translateX("+-i.currentIndex*22+"%)",i.transitionEnabled?"transform 1s ease-in-out":"none")),s(),m("ngForOf",i.imageUrls)("ngForTrackBy",i.trackByFn))},dependencies:[u,C,E],styles:[".image-slider[_ngcontent-%COMP%]{position:relative;overflow:hidden}.image-slider[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]{display:flex;gap:10px}.arrow-icon[_ngcontent-%COMP%]{font-size:2.5rem;color:#000000b3;cursor:pointer;-webkit-user-select:none;user-select:none;padding:0 20px;transition:color .3s;z-index:1}.arrow-icon[_ngcontent-%COMP%]:hover{color:#000}.image-slider[_ngcontent-%COMP%]   .arrow-icon[_ngcontent-%COMP%]{position:absolute;top:50%;transform:translateY(-50%)}.arrow-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:2.5rem;color:#18d26e}.arrow-icon[_ngcontent-%COMP%]:first-child{left:0;z-index:10000}.arrow-icon[_ngcontent-%COMP%]:last-child{right:0;z-index:10000}.ribbon-img-frame[_ngcontent-%COMP%]{margin:5px;width:260px;height:200px;overflow:hidden}.ribbon-img-frame[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%}"],changeDetection:0})};var F={listImg:["/assets/img/pages/factory/nhan-vien-1.jpg","/assets/img/pages/factory/nhan-vien-2.jpg","/assets/img/pages/factory/nhan-vien-3.jpg","/assets/img/pages/factory/nhan-vien-4.jpg","/assets/img/pages/factory/nhan-vien-5.jpg","/assets/img/pages/factory/nhan-vien-6.jpg","/assets/img/pages/factory/nhan-vien-7.jpg"]},_=F;var I=class r{urlEmployeeFactory=[];companyData={};ngOnInit(){this.companyData=S,this.urlEmployeeFactory=_.listImg}static \u0275fac=function(o){return new(o||r)};static \u0275cmp=c({type:r,selectors:[["app-factory-pages"]],standalone:!0,features:[p],decls:53,vars:5,consts:[[1,"temp-pages"],[1,"factory-pages-bg",2,"background-image","url('/assets/img/pages/about-pages/rung-thong.jpg')"],[1,"container"],[1,"text-center","font-weight-bold","text-white","fs-1","d-flex",2,"height","300px","justify-content","center","align-items","center"],["id","about-pages",1,"pt-5"],[1,"container","h-100"],[1,"row"],[1,"col-12","col-lg-4"],[1,"mb-0","text-success","font-weight-bold"],[1,"dash"],[1,"pb-0"],[1,"text-success"],[1,"d-flex","align-items-center","pb-1","fs-6"],[1,"fa","fa-phone","fs-5","font-weight-bold","mr-2","text-success"],[1,"fa","fa-envelope","fs-5","font-weight-bold","mr-2","text-success"],[1,"fa","fa-link","fs-5","font-weight-bold","mr-2","text-success"],[1,"col-12","col-lg-8"],[1,"factory-img","w-100"],[1,"d-flex","w-100","mb-3"],["src","/assets/img/pages/factory/nha-may.jpg","alt","",1,"mr-2"],["src","/assets/img/pages/factory/nhan-vien-7.jpg","alt","",1,"ml-2"],["id","mapid"],[1,"row","py-4"],[1,""],[1,"text-success","font-weight-bold"],[3,"imageUrls"],["id","ribbon",1,"mt-5"],[1,"row","align-item-center"],[1,"font-weight-bold"],[1,"button","col-12","col-lg-4","d-flex","align-items-center"],["href","/lien-he",1,"border","p-2","rounded-2","text-white","text-center","font-weight-bold"]],template:function(o,i){o&1&&(n(0,"div",0),e(1,"div",1)(2,"div",2),n(3,"div",3),t()(),e(4,"main",4)(5,"section")(6,"div",5)(7,"div",6)(8,"div",7)(9,"h2",8),a(10,"V\u0103n ph\xF2ng & "),n(11,"br"),a(12,"X\u01B0\u1EDFng s\u1EA3n xu\u1EA5t "),t(),n(13,"hr",9),e(14,"div",10)(15,"strong",11),a(16,"\u0110\u1ECBa ch\u1EC9:"),t(),a(17),t(),e(18,"div",12),n(19,"i",13),e(20,"span"),a(21),t()(),e(22,"div",12),n(23,"i",14),e(24,"span"),a(25),t()(),e(26,"div",12),n(27,"i",15),e(28,"span"),a(29),t()()(),e(30,"div",16)(31,"div",17)(32,"div",18),n(33,"img",19)(34,"img",20),t(),n(35,"div",21),t()()(),e(36,"div",22)(37,"div",23)(38,"h3",24),a(39,"M\u1ED9t s\u1ED1 h\xECnh \u1EA3nh c\xF4ng ty"),t(),n(40,"hr",9),t()()(),n(41,"ribbon-slides",25),t(),e(42,"section",26)(43,"div",2)(44,"div",27)(45,"div",16)(46,"span"),a(47,"H\xE3y li\xEAn h\u1EC7 ngay v\u1EDBi ch\xFAng t\xF4i"),t(),e(48,"h3",28),a(49,"B\u1EA1n \u0111ang t\xECm ki\u1EBFm m\u1ED9t \u0111\u1ED1i t\xE1c t\u1ED1t "),t()(),e(50,"div",29)(51,"a",30),a(52,"LI\xCAN H\u1EC6 V\u1EDAI CH\xDANG T\xD4I"),t()()()()()()),o&2&&(s(17),g(i.companyData.address),s(4),g(i.companyData.contact[0]),s(4),y(" ",i.companyData.email,""),s(4),g(i.companyData.website),s(12),m("imageUrls",i.urlEmployeeFactory))},dependencies:[u,f],styles:[".temp-pages[_ngcontent-%COMP%]{background-color:#377017cc;height:97px}.dash[_ngcontent-%COMP%]{border:none;height:4px;background-color:#377017cc;width:20%;margin:20px 0}.dash-full[_ngcontent-%COMP%]{border:none;height:4px;background-color:#377017cc;width:100%;margin:20px 0}.factory-pages-bg[_ngcontent-%COMP%]{background-size:cover;min-height:300px}.factory-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:200px}#mapid[_ngcontent-%COMP%]{height:500px}#ribbon[_ngcontent-%COMP%]{margin:0;padding:50px 0;background-color:#377017cc;width:100%;height:auto;color:#fff}"]})};export{I as FactoryPagesComponent};
