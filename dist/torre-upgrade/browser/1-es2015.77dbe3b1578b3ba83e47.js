(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"9Xeq":function(t,e,s){"use strict";s.d(e,"a",(function(){return r}));var a=s("fXoL");let r=(()=>{class t{}return t.\u0275mod=a.Ib({type:t}),t.\u0275inj=a.Hb({factory:function(e){return new(e||t)}}),t})()},Fi61:function(t,e,s){"use strict";s.d(e,"a",(function(){return Y})),s.d(e,"b",(function(){return A})),s.d(e,"c",(function(){return M}));var a=s("LRne"),r=s("vkgz"),n=s("7o/Q");function i(t=-1){return e=>e.lift(new o(t,e))}class o{constructor(t,e){this.count=t,this.source=e}call(t,e){return e.subscribe(new p(t,this.count,this.source))}}class p extends n.a{constructor(t,e,s){super(t),this.count=e,this.source=s}error(t){if(!this.isStopped){const{source:e,count:s}=this;if(0===s)return super.error(t);s>-1&&(this.count=s-1),e.subscribe(this._unsubscribeAndRecycle())}}}var u=s("lJxs"),c=s("jhN1"),l=s("AytR"),h=s("aISb");class m extends h.a{}class d extends h.a{}var f=s("ZKU/");class _ extends h.a{setData(t){if(super.setData(t),t.data){let e=new f.a;e.setData(t.data),this.data=e}}}class D extends h.a{}class b extends h.a{}class w extends h.a{setData(t){super.setData(t),t.date&&(this.date=new Date(t.date))}}class S extends h.a{}class x extends h.a{}class j extends h.a{}class g extends h.a{}class v extends h.a{setData(t){if(super.setData(t),t.flags){let e=new x;e.setData(t.flags),this.flags=e}if(t.links&&(this.links=t.links.map(t=>{let e=new j;return e.setData(t),e})),t.location){let e=new g;e.setData(t.location),this.location=e}}}class O extends h.a{setData(t){if(super.setData(t),t.opportunity){let e=new J;e.setData(t.opportunity),this.opportunity=e}if(t.person){let e=new v;e.setData(t.person),this.person=e}}}class y extends h.a{setData(t){if(super.setData(t),t.input){let e=new O;e.setData(t.input),this.input=e}}}class k extends h.a{setData(t){super.setData(t),t.and&&(this.and=t.and.map(t=>{let e=new y;return e.setData(t),e}))}}class I extends h.a{setData(t){super.setData(t),t.and&&(this.and=t.and.map(t=>{let e=new y;return e.setData(t),e}))}}class z extends h.a{setData(t){if(super.setData(t),t.scorer){let e=new I;e.setData(t.scorer),this.scorer=e}if(t.ranker){let e=new k;e.setData(t.ranker),this.ranker=e}}}class J extends h.a{setData(t){if(super.setData(t),t.data&&(this.data=t.data.map(t=>{let e=new m;return e.setData(t),e})),t.organizations&&(this.organizations=t.organizations.map(t=>{let e=new d;return e.setData(t),e})),t.deadline&&(this.deadline=new Date(t.deadline)),t.compensation){let e=new _;e.setData(t.compensation),this.compensation=e}if(t.skills&&(this.skills=t.skills.map(t=>{let e=new D;return e.setData(t),e})),t.members&&(this.members=t.members.map(t=>{let e=new b;return e.setData(t),e})),t.questions&&(this.questions=t.questions.map(t=>{let e=new w;return e.setData(t),e})),t.context){let e=new S;e.setData(t.context),this.context=e}if(t._meta){let e=new z;e.setData(t._meta),this._meta=e}}}class P extends h.a{setData(t){if(super.setData(t),t.context){let e=new S;e.setData(t.context),this.context=e}if(t._meta){let e=new z;e.setData(t._meta),this._meta=e}t.compensations&&(this.compensations=Object.keys(t.compensations).reduce((e,s)=>{let a=new f.a;return a.setData(t.compensations[s]),e[s]=a,e},{})),t.skills&&(this.skills=t.skills.map(t=>{let e=new D;return e.setData(t),e}))}}class B extends h.a{}class E extends h.a{}class K extends h.a{setData(t){super.setData(t),t.mediaItems&&(this.mediaItems=t.mediaItems.map(t=>{let e=new E;return e.setData(t),e}))}}class Q extends h.a{setData(t){super.setData(t),t.organizations&&(this.organizations=t.organizations.map(t=>{let e=new d;return e.setData(t),e})),t.media&&(this.media=t.media.map(t=>{let e=new K;return e.setData(t),e}))}}class X extends h.a{}class H extends h.a{setData(t){super.setData(t),t.organizations&&(this.organizations=t.organizations.map(t=>{let e=new d;return e.setData(t),e}))}}class $ extends h.a{}class C extends h.a{setData(t){super.setData(t),t.organizations&&(this.organizations=t.organizations.map(t=>{let e=new d;return e.setData(t),e})),t.media&&(this.media=t.media.map(t=>{let e=new K;return e.setData(t),e}))}}class G extends h.a{}class L extends h.a{}class R extends h.a{setData(t){if(super.setData(t),t.person){let e=new v;e.setData(t.person),this.person=e}if(t.stats){let e=new G;e.setData(t.stats),this.stats=e}t.strengths&&(this.strengths=t.strengths.map(t=>{let e=new L;return e.setData(t),e})),t.interests&&(this.interests=t.interests.map(t=>{let e=new X;return e.setData(t),e})),t.experiences&&(this.experiences=t.experiences.map(t=>{let e=new Q;return e.setData(t),e})),t.awards&&(this.awards=t.awards.map(t=>{let e=new B;return e.setData(t),e})),t.jobs&&(this.jobs=t.jobs.map(t=>{let e=new H;return e.setData(t),e})),t.projects&&(this.projects=t.projects.map(t=>{let e=new C;return e.setData(t),e})),t.opportunities&&(this.opportunities=t.opportunities.map(t=>{let e=new J;return e.setData(t),e})),t.languages&&(this.languages=t.languages.map(t=>{let e=new $;return e.setData(t),e}))}}var q=s("fXoL"),U=s("tk/3"),Z=s("ofXK");let N=(()=>{class t{constructor(t){this._platform=t}isServer(){return Object(Z.o)(this._platform)}}return t.\u0275fac=function(e){return new(e||t)(q.Qb(q.B))},t.\u0275prov=q.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Y=0,A=9,F=Object(c.f)("bio"),T=Object(c.f)("job"),V=Object(c.f)("opportunities"),W=Object(c.f)("people");let M=(()=>{class t{constructor(t,e,s){this._httpClient=t,this._transferState=e,this._platformService=s}_reduceQueryParams(t=null,e=Y,s=A){let a=[];return t&&a.push("aggregate="+t),e&&a.push("offset="+e),s&&a.push("size="+s),a.join("&")}_opportunitiesStateExists(){return this._transferState.hasKey(V)}_setOpportunitiesState(t){this._transferState.set(V,t)}_getOpportunitiesState(){return this._transferState.get(V,[])}_removeOpportunitiesState(){this._transferState.remove(V)}_peopleStateExists(){return this._transferState.hasKey(W)}_setPeopleState(t){this._transferState.set(W,t)}_getPeopleState(){return this._transferState.get(W,[])}_removePeopleState(){this._transferState.remove(W)}_bioStateExists(){return this._transferState.hasKey(F)}_setBioState(t){this._transferState.set(F,t)}_getBioState(){return this._transferState.get(F,null)}_removeBioState(){this._transferState.remove(F)}_jobStateExists(){return this._transferState.hasKey(T)}_setJobState(t){this._transferState.set(T,t)}_getJobState(){return this._transferState.get(T,null)}_removeJobState(){this._transferState.remove(T)}_mapOpportunity(t){let e=new J;return e.setData(t),e}_mapOpportunities(t){return t.map(t=>this._mapOpportunity(t))}_mapPerson(t){let e=new P;return e.setData(t),e}_mapPeople(t){return t.map(t=>this._mapPerson(t))}_mapBio(t){let e=new R;return e.setData(t),e}_mapJob(t){let e=new H;return e.setData(t),e}bio(t){return this._bioStateExists()?Object(a.a)(this._getBioState()).pipe(Object(r.a)(()=>this._removeBioState())):this._httpClient.get(`${l.a.api.torre.resource.bio}/bios/${t}`).pipe(i(3),Object(u.a)(t=>this._mapBio(t)),Object(r.a)(t=>{this._platformService.isServer()&&this._setBioState(t)}))}job(t){return this._jobStateExists()?Object(a.a)(this._getJobState()).pipe(Object(r.a)(()=>this._removeJobState())):this._httpClient.get(`${l.a.api.torre.resource.general}/opportunities/${t}`).pipe(i(3),Object(u.a)(t=>this._mapJob(t)),Object(r.a)(t=>{this._platformService.isServer()&&this._setJobState(t)}))}opportunities(t=null,e,s){return this._opportunitiesStateExists()?Object(a.a)(this._getOpportunitiesState()).pipe(Object(r.a)(()=>this._removeOpportunitiesState())):this._httpClient.post(`${l.a.api.torre.resource.search}/opportunities/_search?${this._reduceQueryParams(t,e,s)}`,null).pipe(i(3),Object(u.a)(t=>t.results),Object(u.a)(t=>this._mapOpportunities(t)),Object(r.a)(t=>{this._platformService.isServer()&&this._setOpportunitiesState(t)}))}people(t=null,e,s){return this._peopleStateExists()?Object(a.a)(this._getPeopleState()).pipe(Object(r.a)(()=>this._removePeopleState())):this._httpClient.post(`${l.a.api.torre.resource.search}/people/_search?${this._reduceQueryParams(t,e,s)}`,null).pipe(i(3),Object(u.a)(t=>t.results),Object(u.a)(t=>this._mapPeople(t)),Object(r.a)(t=>{this._platformService.isServer()&&this._setPeopleState(t)}))}}return t.\u0275fac=function(e){return new(e||t)(q.Qb(U.a),q.Qb(c.e),q.Qb(N))},t.\u0275prov=q.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},"ZKU/":function(t,e,s){"use strict";s.d(e,"a",(function(){return r}));var a=s("aISb");class r extends a.a{}},aISb:function(t,e,s){"use strict";s.d(e,"a",(function(){return a}));class a{setData(t){t.created&&(this.created=new Date(t.created)),t&&Object.assign(this,t)}}},vxfF:function(t,e,s){"use strict";s.d(e,"a",(function(){return p}));var a=s("fXoL");let r;s("XNiG"),s("LRne"),s("HDdC"),s("DH7j"),s("n6bG"),s("lJxs"),s("VRyK"),s("3N8a"),s("IjjT"),s("quSY"),s("/uUt"),s("D0XW"),s("l7GE"),s("ZUHj"),s("z+Ro"),s("pLZG"),s("JX91"),s("7o/Q"),s("eIep"),s("EY2u"),s("9ppp"),s("Ylt2"),s("ofXK");try{r="undefined"!=typeof Intl&&Intl.v8BreakIterator}catch(u){r=!1}let n=(()=>{class t{}return t.\u0275mod=a.Ib({type:t}),t.\u0275inj=a.Hb({factory:function(e){return new(e||t)}}),t})(),i=(()=>{class t{}return t.\u0275mod=a.Ib({type:t}),t.\u0275inj=a.Hb({factory:function(e){return new(e||t)}}),t})(),o=(()=>{class t{}return t.\u0275mod=a.Ib({type:t}),t.\u0275inj=a.Hb({factory:function(e){return new(e||t)}}),t})(),p=(()=>{class t{}return t.\u0275mod=a.Ib({type:t}),t.\u0275inj=a.Hb({factory:function(e){return new(e||t)},imports:[[i,n,o],i,o]}),t})()}}]);