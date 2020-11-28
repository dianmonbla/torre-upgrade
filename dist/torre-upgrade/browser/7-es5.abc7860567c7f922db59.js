function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function _createClass(n,t,o){return t&&_defineProperties(n.prototype,t),o&&_defineProperties(n,o),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{zfxk:function(n,t,o){"use strict";o.r(t),o.d(t,"BioDetailModule",(function(){return b}));var e=o("ofXK"),i=o("tyNb"),a=o("2Vo4"),c=o("AytR"),s=o("fXoL"),g=o("Fi61"),r=o("jhN1");function l(n,t){1&n&&(s.Ob(0,"div",4),s.nc(1,"Loading bio..."),s.Nb())}var d=function(){return["/people"]};function _(n,t){if(1&n&&(s.Ob(0,"div",5),s.Yb(1,"async"),s.Ob(2,"a",6),s.nc(3," RETURN TO PEOPLE"),s.Nb(),s.Nb()),2&n){var o=s.Xb();s.cc("hidden",!s.Zb(1,2,o.bioBehaviorSubject$)),s.Ab(2),s.cc("routerLink",s.dc(4,d))}}function O(n,t){if(1&n&&(s.Ob(0,"div"),s.Ob(1,"h1"),s.nc(2),s.Nb(),s.Lb(3,"img",7),s.Nb()),2&n){var o=t.ngIf;s.Ab(2),s.oc(o.person.name),s.Ab(1),s.cc("src",o.person.picture,s.hc)("alt",o.person.name)}}function C(n,t){1&n&&s.Mb(0)}var P,p,M,h=[{path:"",component:(P=function(){function n(t,o,e,i){_classCallCheck(this,n),this._torreAPIService=t,this._activatedRoute=o,this._title=e,this._meta=i,this.bioBehaviorSubject$=new a.a(this._torreAPIService.getBioState())}return _createClass(n,[{key:"ngOnInit",value:function(){this.detail(this._activatedRoute.snapshot.params.username)}},{key:"ngOnDestroy",value:function(){this.bioBehaviorSubject$&&this.bioBehaviorSubject$.unsubscribe()}},{key:"detail",value:function(n){var t=this;this._torreAPIService.bio(n).subscribe((function(n){t._title.setTitle("".concat(n.person.name," / ").concat(c.a.configuration.list.people.title," / ").concat(c.a.configuration.general.title)),t._meta.updateTag({name:"description",content:n.person.professionalHeadline}),t._meta.updateTag({name:"keywords",content:n.experiences.reduce((function(n,t){return"".concat(t.name,", ").concat(n," ")}),"")}),t.bioBehaviorSubject$.next(n)}))}}]),n}(),P.\u0275fac=function(n){return new(n||P)(s.Kb(g.c),s.Kb(i.a),s.Kb(r.d),s.Kb(r.c))},P.\u0275cmp=s.Eb({type:P,selectors:[["app-bio-detail"]],decls:7,vars:5,consts:[["loading",""],["links",""],[4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet"],[1,"loading"],[1,"links",3,"hidden"],["queryParamsHandling","merge","title","RETURN TO PEOPLE",3,"routerLink"],[3,"src","alt"]],template:function(n,t){if(1&n&&(s.lc(0,l,2,0,"ng-template",null,0,s.mc),s.lc(2,_,4,5,"ng-template",null,1,s.mc),s.lc(4,O,4,3,"div",2),s.Yb(5,"async"),s.lc(6,C,1,0,"ng-container",3)),2&n){var o=s.gc(1),e=s.gc(3);s.Ab(4),s.cc("ngIf",s.Zb(5,3,t.bioBehaviorSubject$))("ngIfElse",o),s.Ab(2),s.cc("ngTemplateOutlet",e)}},directives:[e.j,e.k,i.f],pipes:[e.b],styles:["[_nghost-%COMP%]{margin-top:20px}[_nghost-%COMP%], [_nghost-%COMP%]   .loading[_ngcontent-%COMP%]{display:block;text-align:center}[_nghost-%COMP%]   .loading[_ngcontent-%COMP%]{margin-top:50px;color:#272133;font-size:24px;min-height:100px}[_nghost-%COMP%]   .card[_ngcontent-%COMP%]{bottom:0;width:250px;height:400px;border-radius:10px;box-shadow:0 10px 25px 5px rgba(0,0,0,.2);background:#151515;overflow:hidden}[_nghost-%COMP%]   .card[_ngcontent-%COMP%], [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .ds-top[_ngcontent-%COMP%]{position:absolute;margin:auto;top:0;right:0;left:0}[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .ds-top[_ngcontent-%COMP%]{width:300px;height:80px;background:#dc143c;-webkit-animation:dsTop 1.5s;animation:dsTop 1.5s}[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .avatar-holder[_ngcontent-%COMP%]{position:absolute;margin:auto;top:40px;right:0;left:0;width:100px;height:100px;border-radius:50%;box-shadow:0 0 0 5px #151515,inset 0 0 0 5px #000,inset 0 0 0 5px #000,inset 0 0 0 5px #000,inset 0 0 0 5px #000;background:#fff;overflow:hidden;-webkit-animation:mvTop 1.5s;animation:mvTop 1.5s}[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .avatar-holder[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{position:absolute;margin:auto;top:-60px;right:0;bottom:0;left:0;width:inherit;height:40px;text-align:center;-webkit-animation:fadeIn 2s ease-in;animation:fadeIn 2s ease-in}[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;text-decoration:none;font-weight:700;font-size:18px}[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline;color:#dc143c}[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{color:#fff;width:40px}[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%], [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{position:absolute;margin:auto;left:0;right:0;bottom:0}[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{padding:8px;top:20px;width:inherit;height:40px;text-align:center;-webkit-animation:fadeIn 2s ease-in;animation:fadeIn 2s ease-in;outline:none}[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:5px 20px;border-radius:10px;color:#fff;letter-spacing:.05em;text-decoration:none;font-size:10px;transition:all 1s}[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff;background:#dc143c}[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .ds-info[_ngcontent-%COMP%]{position:absolute;margin:auto;top:120px;bottom:0;right:0;left:0;width:inherit;height:40px;display:flex}[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .ds-info[_ngcontent-%COMP%]   .pens[_ngcontent-%COMP%], [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .ds-info[_ngcontent-%COMP%]   .posts[_ngcontent-%COMP%], [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .ds-info[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]{position:relative;left:-300px;width:83.33333px;text-align:center;color:#fff;-webkit-animation:fadeInMove 2s;animation:fadeInMove 2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .ds-info[_ngcontent-%COMP%]   .pens[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .ds-info[_ngcontent-%COMP%]   .posts[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .ds-info[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{text-transform:uppercase;color:#dc143c}[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .ds-info[_ngcontent-%COMP%]   .pens[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .ds-info[_ngcontent-%COMP%]   .posts[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .ds-info[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px}[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .ds-info[_ngcontent-%COMP%]   .ds[_ngcontent-%COMP%]:nth-of-type(2){-webkit-animation-delay:.5s;animation-delay:.5s}[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .ds-info[_ngcontent-%COMP%]   .ds[_ngcontent-%COMP%]:first-of-type{-webkit-animation-delay:1s;animation-delay:1s}[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .ds-skill[_ngcontent-%COMP%]{position:absolute;margin:auto;bottom:10px;right:0;left:0;width:200px;height:100px;-webkit-animation:mvBottom 1.5s;animation:mvBottom 1.5s}[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .ds-skill[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{margin-bottom:5px;font-weight:700;text-transform:uppercase;color:#dc143c}[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .ds-skill[_ngcontent-%COMP%]   .skill[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-weight:400;font-size:8px;letter-spacing:.05em;margin:4px 0;color:#fff}[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .ds-skill[_ngcontent-%COMP%]   .skill[_ngcontent-%COMP%]   .fab[_ngcontent-%COMP%]{color:#dc143c;font-size:14px}[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .ds-skill[_ngcontent-%COMP%]   .skill[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]{height:5px;background:#dc143c;text-align:right}[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .ds-skill[_ngcontent-%COMP%]   .skill[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#fff;font-size:8px;padding-top:5px;-webkit-animation:fadeIn 5s;animation:fadeIn 5s}[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .ds-skill[_ngcontent-%COMP%]   .skill[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]:hover{background:#fff}[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .ds-skill[_ngcontent-%COMP%]   .skill[_ngcontent-%COMP%]   .bar-html[_ngcontent-%COMP%]{width:95%;-webkit-animation:htmlSkill 1s;animation:htmlSkill 1s;-webkit-animation-delay:.4s;animation-delay:.4s}[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .ds-skill[_ngcontent-%COMP%]   .skill[_ngcontent-%COMP%]   .bar-css[_ngcontent-%COMP%]{width:90%;-webkit-animation:cssSkill 2s;animation:cssSkill 2s;-webkit-animation-delay:.4s;animation-delay:.4s}[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .ds-skill[_ngcontent-%COMP%]   .skill[_ngcontent-%COMP%]   .bar-js[_ngcontent-%COMP%]{width:75%;-webkit-animation:jsSkill 3s;animation:jsSkill 3s;-webkit-animation-delay:.4s;animation-delay:.4s}@-webkit-keyframes fadeInMove{0%{opacity:0;left:-300px}to{opacity:1;left:0}}@keyframes fadeInMove{0%{opacity:0;left:-300px}to{opacity:1;left:0}}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@-webkit-keyframes htmlSkill{0%{width:0}to{width:95%}}@keyframes htmlSkill{0%{width:0}to{width:95%}}@-webkit-keyframes cssSkill{0%{width:0}to{width:90%}}@keyframes cssSkill{0%{width:0}to{width:90%}}@-webkit-keyframes jsSkill{0%{width:0}to{width:75%}}@keyframes jsSkill{0%{width:0}to{width:75%}}@-webkit-keyframes mvBottom{0%{bottom:-150px}to{bottom:10px}}@keyframes mvBottom{0%{bottom:-150px}to{bottom:10px}}@-webkit-keyframes mvTop{0%{top:-150px}to{top:40px}}@keyframes mvTop{0%{top:-150px}to{top:40px}}@-webkit-keyframes dsTop{0%{top:-150px}to{top:0}}@keyframes dsTop{0%{top:-150px}to{top:0}}[_nghost-%COMP%]   .following[_ngcontent-%COMP%]{color:#fff;background:#dc143c}[_nghost-%COMP%]   img[_ngcontent-%COMP%]{width:30%;height:auto}"]}),P)}],f=((p=function n(){_classCallCheck(this,n)}).\u0275mod=s.Ib({type:p}),p.\u0275inj=s.Hb({factory:function(n){return new(n||p)},imports:[[i.g.forChild(h)],i.g]}),p),m=o("yGOH"),b=((M=function n(){_classCallCheck(this,n)}).\u0275mod=s.Ib({type:M}),M.\u0275inj=s.Hb({factory:function(n){return new(n||M)},imports:[[e.c,m.a,f]]}),M)}}]);