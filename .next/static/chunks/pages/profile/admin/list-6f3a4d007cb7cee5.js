(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[222],{186:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile/admin/list",function(){return r(7170)}])},7170:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return I}});var o=r(5893),n=r(7294),s=r(7154),i=r.n(s),a=r(5007);let _=t=>t.listDevicesAdmin.products,c=t=>t.listDevicesAdmin.loading;var l=r(3171),d=r(3416),u=r(5675),p=r.n(u),h=r(1664),m=r.n(h),x=r(4420),g=r(8154),j=r(2257),f=r(5862),N=r(9332);let v=()=>{let t=(0,N.useRouter)(),e=(0,a.I0)();return{isLoadingDelete:(0,a.v9)(j.SV),handlerDelete:async r=>{await e((0,f.GV)(r)),t.refresh()}}};var w=r(3662),k=r.n(w),b=t=>{let{device:e,indexDevice:r}=t,{isLoadingDelete:n,handlerDelete:s}=v(),i=(0,N.useSearchParams)(),a=new URLSearchParams(null==i?void 0:i.toString()).get("page"),_=x.H.adminChangeId(e.id,a);return(0,o.jsxs)("article",{className:k().root,children:[(0,o.jsxs)("span",{className:k().id,children:["№ ",r]}),(0,o.jsx)(m(),{className:k().root__image,href:_,children:(0,o.jsx)(p(),{src:e.image,width:50,height:50,alt:e.title})}),(0,o.jsx)(m(),{href:_,children:(0,o.jsxs)("div",{className:k().root__textGroup,children:[(0,o.jsx)("h2",{className:k().root__title,children:e.title}),(0,o.jsx)("p",{className:k().root__discr,children:e.description})]})}),(0,o.jsx)("div",{className:k().root__price,children:(0,o.jsxs)("span",{children:[e.price," ₽"]})}),(0,o.jsxs)(m(),{className:k().pen,href:_,children:[(0,o.jsx)(d.Z,{}),(0,o.jsx)("span",{className:"visually-hidden",children:"Редактировать товар"})]}),(0,o.jsxs)("button",{className:k().root__delete,onClick:()=>s(e.id),disabled:n,"aria-label":"Удалить товар",title:"Удалить товар",children:[n?(0,o.jsx)(l.Z,{className:k().root__spinner,size:10,strokeWidth:2}):(0,o.jsx)(g.Z,{}),(0,o.jsx)("span",{className:"visually-hidden",children:"Удалить товар"})]})]})},P=r(9752),A=r.n(P);let S=(0,n.memo)(t=>{let{devices:e}=t;return(0,o.jsx)("ul",{className:A().root,children:e.map((t,e)=>(0,o.jsxs)("li",{children:[(0,o.jsx)(b,{device:t,indexDevice:e+1})," "]},e))})});S.displayName="ListProductsAdmin";var L=r(3967),V=r.n(L),Z=r(9822),y=r(9089),C=r.n(y),D=()=>(0,o.jsxs)("div",{className:C().root,children:[(0,o.jsx)("h1",{className:C().root__title,children:"Редактирование товаров"}),(0,o.jsx)(m(),{className:C().root__btn_back,href:x.H.admin,children:(0,o.jsx)(Z.Z,{size:20})})]}),E=r(183);let R=()=>{let t=(0,a.I0)();(0,n.useEffect)(()=>{t((0,E.rV)())},[t])};var z=r(4775),F=r(4804),G=r.n(F),W=t=>{let{totalPages:e,onChange:r,currentPage:n}=t;return(0,a.v9)(_),(0,o.jsx)(z.Z,{className:G().root,count:e,size:"large",page:n,onChange:r})};let H=t=>{let{productsList:e,maxItemPage:r=10}=t,o=(0,N.useSearchParams)(),s=(0,N.usePathname)(),{push:i}=(0,N.useRouter)(),a=new URLSearchParams(null==o?void 0:o.toString()),_=Math.ceil(e.length/r),c=a.get("page")?+a.get("page"):1,l=Array.from({length:_},(t,e)=>e+1),d=e.slice((c-1)*r,c*r);return{totalPages:_,onChange:(t,e)=>{a.set("page",e.toString()),i("".concat(s,"?").concat(a.toString()))},pages:l,currentPage:c,renderProductList:(0,n.useDeferredValue)(d)}};var I=()=>{R();let t=(0,a.v9)(c),{totalPages:e,onChange:r,currentPage:n,renderProductList:s}=H({productsList:(0,a.v9)(_),maxItemPage:10});return(0,o.jsx)("section",{className:V()(i().root,"container",{[i().loading]:t}),children:t?(0,o.jsx)(l.Z,{className:i().root__spinner,size:70,strokeWidth:10}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(D,{}),(0,o.jsx)(S,{devices:s}),(0,o.jsx)(W,{totalPages:e,onChange:r,currentPage:n})]})})}},2257:function(t,e,r){"use strict";r.d(e,{Mg:function(){return s},R7:function(){return n},SV:function(){return o},um:function(){return i}});let o=t=>t.productsActions.deleteLoading,n=t=>t.productsActions.changeLoading,s=t=>t.productsActions.getLoading,i=t=>t.productsActions.product},3171:function(t,e,r){"use strict";var o=r(5893),n=r(714),s=r.n(n),i=r(3967),a=r.n(i);e.Z=t=>{let{size:e,strokeWidth:r=6,className:n}=t,i=e/2;return(0,o.jsx)("svg",{className:a()(s().root,n),viewBox:"0 0 ".concat(e," ").concat(e),xmlns:"http://www.w3.org/2000/svg",width:e,height:e,fill:"transparent",children:(0,o.jsx)("circle",{className:s().root__path,stroke:"inherit",strokeWidth:r,strokeLinecap:"round",cx:i,cy:i,r:i})})}},7154:function(t){t.exports={root:"list_root__3__13",loading:"list_loading__1JyBJ",root__pagination:"list_root__pagination__YM2XC",root__spinner:"list_root__spinner__FhZzt"}},3662:function(t){t.exports={root:"card-product-admin_root__l_tWe",root__image:"card-product-admin_root__image__gRGOQ",root__textGroup:"card-product-admin_root__textGroup__4HwFA",root__price:"card-product-admin_root__price__V9JTx",root__pen:"card-product-admin_root__pen__St3qr",root__title:"card-product-admin_root__title__Nopqr",root__discr:"card-product-admin_root__discr__d8lsU",root__delete:"card-product-admin_root__delete__5Ml8V"}},9089:function(t){t.exports={root:"header-list-admin_root__1Yf94",root__btn_back:"header-list-admin_root__btn_back__bX1Ay"}},9752:function(t){t.exports={root:"list-products_root__6skjK"}},4804:function(){},714:function(t){t.exports={root:"spinner_root__bTm2b",rotator:"spinner_rotator__JW5KF",root__path:"spinner_root__path__Hl9xr",dash:"spinner_dash__k9eFl",colors:"spinner_colors__pVAZV"}}},function(t){t.O(0,[943,11,888,774,179],function(){return t(t.s=186)}),_N_E=t.O()}]);