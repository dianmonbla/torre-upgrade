(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{C8ir:function(t,n,e){"use strict";e.r(n),e.d(n,"BioListModule",(function(){return M}));var o=e("ofXK"),i=e("vxfF"),r=e("tyNb"),s=e("2Vo4"),a=e("pLZG"),c=e("AytR"),l=e("Fi61"),g=e("ZKU/"),d=e("fXoL"),b=e("jhN1");function u(t,n){1&t&&(d.Ob(0,"div",2),d.nc(1,"Loading people..."),d.Nb())}function p(t,n){if(1&t&&(d.Ob(0,"li"),d.nc(1),d.Nb()),2&t){const t=n.$implicit,e=n.last;d.Ab(1),d.qc("",t.name,"",e?"":", ","")}}const h=function(t){return[".",t]};function f(t,n){if(1&t&&(d.Ob(0,"div",5),d.Lb(1,"img",6),d.Ob(2,"p",7),d.nc(3),d.Nb(),d.Ob(4,"div",8),d.Ob(5,"div",9),d.nc(6),d.Nb(),d.Ob(7,"div",10),d.nc(8),d.Nb(),d.Nb(),d.Ob(9,"ul",11),d.lc(10,p,2,2,"li",12),d.Nb(),d.Ob(11,"a",13),d.nc(12,"BIO"),d.Nb(),d.Nb()),2&t){const t=n.$implicit,i=d.Xb(2);var e,o=null;d.Ab(1),d.cc("src",t.picture,d.hc)("alt",t.name),d.Ab(2),d.oc(t.name),d.Ab(3),d.pc(" ",null==(e=i.compensation(t.compensation))?null:e.periodicity," "),d.Ab(2),d.qc(" ",null==(o=i.compensation(t.compensation))?null:o.amount," ",null==(o=i.compensation(t.compensation))?null:o.currency," "),d.Ab(2),d.cc("ngForOf",t.skills),d.Ab(1),d.cc("routerLink",d.ec(9,h,t.username))("title",t.professionalHeadline)}}function m(t,n){if(1&t&&(d.Ob(0,"div",3),d.lc(1,f,13,11,"div",4),d.Nb()),2&t){const t=n.ngIf,e=d.Xb();d.Ab(1),d.cc("ngForOf",t)("ngForTrackBy",e.trackByFunction)}}const _=[{path:"",component:(()=>{class t{constructor(t,n,e,o){this._torreAPIService=t,this._title=n,this._meta=e,this._activatedRoute=o,this.biosBehaviorSubject$=new s.a(null)}ngOnInit(){this.startActivatedRouteQueryParamFilterSubscription();const t=this._activatedRoute.snapshot.queryParamMap;t.get("aggregate")||t.get("offset")||t.get("size")||this.list()}ngOnDestroy(){this.biosBehaviorSubject$&&this.biosBehaviorSubject$.unsubscribe(),this._activatedRouteQueryParamFilterSubscription$&&this._activatedRouteQueryParamFilterSubscription$.unsubscribe()}startActivatedRouteQueryParamFilterSubscription(){this._activatedRouteQueryParamFilterSubscription$=this._activatedRoute.queryParamMap.pipe(Object(a.a)(t=>!!t.get("aggregate")||!!t.get("offset")||!!t.get("size"))).subscribe(t=>this.list(t.get("aggregate"),Number(t.get("offset")),Number(t.get("size"))))}compensation(t){let n=t?Object.keys(t):null;return n?t[n[0]]:new g.a}list(t=null,n=l.a,e=l.b){this._torreAPIService.people(t,n,e).subscribe(t=>{this._title.setTitle(`${c.a.configuration.list.people.title} / ${c.a.configuration.general.title}`),this._meta.updateTag({name:"description",content:t.reduce((t,n)=>`${n.professionalHeadline}, ${t} `,"")}),this._meta.updateTag({name:"keywords",content:t.reduce((t,n)=>`${n.skills.join(", ")}, ${t} `,"")}),this.biosBehaviorSubject$.next(t)})}trackByFunction(t){return t.username}}return t.\u0275fac=function(n){return new(n||t)(d.Kb(l.c),d.Kb(b.d),d.Kb(b.c),d.Kb(r.a))},t.\u0275cmp=d.Eb({type:t,selectors:[["app-bio-list"]],decls:4,vars:4,consts:[["loading",""],["class","container",4,"ngIf","ngIfElse"],[1,"loading"],[1,"container"],["class","card",4,"ngFor","ngForOf","ngForTrackBy"],[1,"card"],[1,"card__image",3,"src","alt"],[1,"card__name"],[1,"grid-container"],[1,"grid-child-posts"],[1,"grid-child-followers"],[1,"social-icons"],[4,"ngFor","ngForOf"],["queryParamsHandling","merge",1,"btn","draw-border",3,"routerLink","title"]],template:function(t,n){if(1&t&&(d.lc(0,u,2,0,"ng-template",null,0,d.mc),d.lc(2,m,2,2,"div",1),d.Yb(3,"async")),2&t){const t=d.gc(1);d.Ab(2),d.cc("ngIf",d.Zb(3,2,n.biosBehaviorSubject$))("ngIfElse",t)}},directives:[o.j,o.i,r.f],pipes:[o.b],styles:['[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .loading[_ngcontent-%COMP%]{display:block;margin-top:50px;text-align:center;color:#272133;font-size:24px;min-height:100px}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]{display:grid;grid-template-columns:30% 30% 30%;grid-gap:50px;justify-content:center;text-align:center}[_nghost-%COMP%]   .card[_ngcontent-%COMP%]{background-color:#222831;height:auto;border-radius:5px;display:flex;flex-direction:column;align-items:center;box-shadow:rgba(0,0,0,.7);color:#fff}[_nghost-%COMP%]   .card__name[_ngcontent-%COMP%]{margin-top:15px;font-size:1.5em}[_nghost-%COMP%]   .card__image[_ngcontent-%COMP%]{height:160px;width:160px;border-radius:50%;border:5px solid #272133;margin-top:20px;box-shadow:0 10px 50px #eb196e}[_nghost-%COMP%]   .draw-border[_ngcontent-%COMP%]{box-shadow:inset 0 0 0 4px #58cdd1;color:#58afd1;transition:color .25s .0833333333s;position:relative;text-decoration:none}[_nghost-%COMP%]   .draw-border[_ngcontent-%COMP%]:after, [_nghost-%COMP%]   .draw-border[_ngcontent-%COMP%]:before{border:0 solid transparent;box-sizing:border-box;content:"";pointer-events:none;position:absolute;width:0;height:0;bottom:0;right:0}[_nghost-%COMP%]   .draw-border[_ngcontent-%COMP%]:before{border-bottom-width:4px;border-left-width:4px}[_nghost-%COMP%]   .draw-border[_ngcontent-%COMP%]:after{border-top-width:4px;border-right-width:4px}[_nghost-%COMP%]   .draw-border[_ngcontent-%COMP%]:hover{color:#ffe593}[_nghost-%COMP%]   .draw-border[_ngcontent-%COMP%]:hover:after, [_nghost-%COMP%]   .draw-border[_ngcontent-%COMP%]:hover:before{border-color:#eb196e;transition:border-color 0s,width .25s,height .25s;width:100%;height:100%}[_nghost-%COMP%]   .draw-border[_ngcontent-%COMP%]:hover:before{transition-delay:0s,0s,.25s}[_nghost-%COMP%]   .draw-border[_ngcontent-%COMP%]:hover:after{transition-delay:0s,.25s,0s}[_nghost-%COMP%]   .btn[_ngcontent-%COMP%]{background:none;border:none;cursor:pointer;line-height:1.5;font:700 1.2rem Roboto Slab,sans-serif;padding:.75em 2em;letter-spacing:.05rem;margin:1em;width:13rem}[_nghost-%COMP%]   .btn[_ngcontent-%COMP%]:focus{outline:2px dotted #55d7dc}[_nghost-%COMP%]   .social-icons[_ngcontent-%COMP%]{padding:0;list-style:none;margin:1em}[_nghost-%COMP%]   .social-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;margin:.15em;position:relative;font-size:1em}[_nghost-%COMP%]   .social-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fff;position:absolute;top:.95em;left:.96em;transition:all 265ms ease-out}[_nghost-%COMP%]   .social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block}[_nghost-%COMP%]   .social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before{transform:scale(1);-ms-transform:scale(1);-webkit-transform:scale(1);content:" ";width:45px;height:45px;border-radius:100%;display:block;background:linear-gradient(45deg,#ff003c,#c648c8);transition:all 265ms ease-out}[_nghost-%COMP%]   .social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:before{transform:scale(0);transition:all 265ms ease-in}[_nghost-%COMP%]   .social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{transform:scale(2.2);-ms-transform:scale(2.2);-webkit-transform:scale(2.2);color:#ff003c;background:-webkit-linear-gradient(45deg,#ff003c,#c648c8);-webkit-background-clip:text;-webkit-text-fill-color:transparent;transition:all 265ms ease-in}[_nghost-%COMP%]   .grid-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;grid-gap:20px;font-size:1.2em}']}),t})()}];let O=(()=>{class t{}return t.\u0275mod=d.Ib({type:t}),t.\u0275inj=d.Hb({factory:function(n){return new(n||t)},imports:[[r.g.forChild(_)],r.g]}),t})();var P=e("9Xeq");let M=(()=>{class t{}return t.\u0275mod=d.Ib({type:t}),t.\u0275inj=d.Hb({factory:function(n){return new(n||t)},imports:[[o.c,P.a,O,i.a]]}),t})()}}]);