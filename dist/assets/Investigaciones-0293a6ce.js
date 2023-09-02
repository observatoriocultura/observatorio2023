import{u as X,a as $,r as _,c as C,o as U,b as n,d as i,e,w as r,v as G,f as d,t as o,g as f,F as h,h as m,n as j,i as A,P as D,j as q}from"./index-e7cf9754.js";const J="/observatorio2023/images/app/orfeo.png",W="/observatorio2023/images/app/logo-dogcc-yellow.png",Y=e("h1",{class:"text-center page-title"},"Plan Anual de Investigaciones 2023",-1),K={key:0,class:"text-center"},Q=e("div",{class:"spinner-border text-secondary",role:"status"},[e("span",{class:"visually-hidden"},"Loading...")],-1),Z=[Q],ee={key:1,class:"container"},te={class:"mb-2 d-flex justify-content-center"},se={class:"input-group me-2",style:{"max-width":"320px"}},ae=e("i",{class:"fas fa-times"},null,-1),oe=[ae],le={class:"text-center my-2"},ne={class:"text-primary"},ie={class:"text-center my-2"},ce={class:"text-primary"},re={class:"d-flex mb-2 justify-content-center"},de={class:""},ue=["onClick","title"],_e={class:"table bg-white"},ve=e("thead",null,[e("tr",null,[e("th",null,"Núm"),e("th",{class:"only-lg"},"Solicitante"),e("th",null,"Investigación")])],-1),he={class:"text-center"},pe={class:"only-lg"},fe=e("br",null,null,-1),ge=["onClick"],be=e("br",null,null,-1),me={class:"only-lg"},ye={class:"progress d-none",style:{height:"2px"}},Ie=e("i",{class:"fa-solid fa-arrow-left"},null,-1),xe={class:"center_box_800"},Ce={class:"progress mb-2"},De={class:"ficha shadow mb-3"},we={class:"ficha-header d-flex justify-content-between"},ke={style:{"border-left":"3em solid #ffb80c","margin-left":"3em"},class:"p-2"},Te=e("img",{class:"logo-orfeo",src:J,alt:"Logo Orfeo"},null,-1),Ee=e("strong",null,"Orfeo",-1),Le=e("br",null,null,-1),Pe={title:"Expediente documental en Orfeo"},ze=e("div",{class:"p-2 only-lg"},[e("img",{class:"logo-dogcc",src:W,alt:"Logo Observatorio de Cultura"})],-1),je={class:"ficha-body"},Ae={class:"row"},qe={class:"col-md-6"},Oe={class:"title"},Se={class:"col-md-6"},Ve={key:0},He={width:"65px",class:"text-center"},Be=["href"],Ne=["title"],Fe=["innerHTML"],Me=["href"],Re=e("br",null,null,-1),Xe=e("td",null,null,-1),$e={key:0,class:"center_box_800"},Ue=e("h3",{class:"text-center"},"Datos clave",-1),Ge=e("p",{class:"text-center"},"Hallazgos destacados como resultado de la investigación",-1),Je={class:"table bg-white"},We={class:"hallazgo-number"},Ye="1mTpRd2lgxaY_FJj9XDcXHfMHEOfg2c6rxmUE-zR68WA",Ze={__name:"Investigaciones",setup(Ke){const O=X(),g=$();let b=g.params.id;const S={investigaciones:"1186279524",productos:"1226549997",hallazgos:"987529212"},y=_(!0),p=_([]),w=_([]),k=_([]),u=_("table"),l=_({ID:-1,Código:"-",Título:"-",Descripción:"-"}),v=_({q:"",entidad:""}),I=a=>"https://docs.google.com/spreadsheets/d/"+Ye+"/export?format=csv&gid="+S[a],V=()=>{D.parse(I("investigaciones"),{download:!0,header:!0,complete:a=>{p.value=a.data}})},H=()=>{D.parse(I("productos"),{download:!0,header:!0,complete:a=>{w.value=a.data}})},B=()=>{D.parse(I("hallazgos"),{download:!0,header:!0,complete:a=>{k.value=a.data,y.value=!1,console.log(y.value),g.params.id>0&&E()}})},T=a=>{b=a;const t={...g.params,id:b};O.push({name:g.name,params:t}),E()},E=()=>{console.log(b),l.value=p.value.find(a=>a.ID==b),u.value="details"},N=()=>{u.value="table"},F=()=>{u.value="table"},M=a=>{let t=[];return t["Informe final"]="fa-solid fa-file-lines producto-pdf",t["Informe cuantitativo"]="fa-solid fa-file-lines producto-cuantitativo",t["Base de datos"]="fa-solid fa-table producto-db",t.Presentación="fa-solid fa-display producto-presentacion",t.Anexo="fa-solid fa-file producto-general",t["Visualización/Infografía"]="fa-solid fa-chart-simple producto-dataviz",t.Audiovisual="fa-solid fa-circle-play producto-audiovisual",'<i class="'+t[a]+'"></i>'},L=a=>{let t="status-nd";return a.Estado=="Sin iniciar"&&(t="status-sin-iniciar"),a.Estado=="En espera"&&(t="status-en-espera"),a.Estado=="En ejecución"&&(t="status-en-ejecucion"),a.Estado=="Finalizada"&&(t="status-finalizada"),a.ID==l.value.ID&&(t+=" active"),t},P=C(()=>p.value.filter(t=>{const s=t.Código.toLowerCase().includes(v.value.q.toLowerCase()),c=t.Título.toLowerCase().includes(v.value.q.toLowerCase()),x=t.Descripción.toLowerCase().includes(v.value.q.toLowerCase());return s||c||x})),R=C(()=>w.value.filter(t=>t["ID Investigación"]==l.value.ID&&t.Orden>0)),z=C(()=>k.value.filter(t=>t["ID Investigación"]==l.value.ID));return U(()=>{V(),H(),B()}),(a,t)=>(n(),i(h,null,[Y,y.value?(n(),i("div",K,Z)):(n(),i("div",ee,[e("div",te,[e("div",se,[r(e("input",{type:"text",name:"q","onUpdate:modelValue":t[0]||(t[0]=s=>v.value.q=s),class:"form-control",placeholder:"Buscar",autofocus:"",onChange:F},null,544),[[G,v.value.q]])]),e("button",{class:"btn-delete-search",type:"button",onClick:t[1]||(t[1]=s=>v.value.q="")},oe)]),r(e("div",le,[e("span",ne,o(P.value.length),1),f(" de "+o(p.value.length),1)],512),[[d,u.value=="table"]]),r(e("div",ie,[f(" ID Investigación · "),e("strong",ce,o(l.value.ID),1)],512),[[d,u.value=="details"]]),e("div",re,[e("div",de,[(n(!0),i(h,null,m(p.value,(s,c)=>(n(),i("button",{type:"button",class:q(["investigacion-sqr me-1",L(s)]),key:c,onClick:x=>T(s.ID),title:s.Código},null,10,ue))),128))])]),r(e("table",_e,[ve,e("tbody",null,[(n(!0),i(h,null,m(P.value,(s,c)=>(n(),i("tr",{key:c},[e("td",he,o(s.ID),1),e("td",pe,[f(o(s.ENTIDAD)+" ",1),fe,f(" "+o(s["Dirección/Dependencia"]),1)]),e("td",null,[e("a",{type:"button",class:"investigacion-title",onClick:x=>T(s.ID)},o(s.Código),9,ge),be,e("span",{class:q(["badge",L(s)])},o(s.Estado),3),e("p",me,o(s["Objetivo de la investigación"]),1),e("div",ye,[e("div",{class:"progress-bar",role:"progressbar",style:j("width: "+s["Porcentaje de avance"]),"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"},null,4)])])]))),128))])],512),[[d,u.value=="table"]]),r(e("div",null,[e("button",{type:"button",class:"btn btn-light mb-2",onClick:N},[Ie,f(" Tabla ")]),e("div",xe,[e("div",Ce,[e("div",{class:"progress-bar",role:"progressbar",style:j("width: "+l.value["Porcentaje de avance"]),"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"},o(l.value["Porcentaje de avance"]),5)])]),e("div",De,[e("div",we,[e("div",ke,[Te,Ee,Le,e("span",Pe,o(l.value.EXPEDIENTE),1)]),ze]),e("div",je,[e("div",Ae,[e("div",qe,[e("h3",Oe,[r(e("span",null,o(l.value.Código),513),[[d,l.value.Título.length==0]]),r(e("span",null,o(l.value.Título),513),[[d,l.value.Título.length>0]])]),r(e("p",null,o(l.value["Objetivo de la investigación"]),513),[[d,l.value.Descripción.length==0]]),r(e("p",null,o(l.value.Descripción),513),[[d,l.value.Descripción.length>0]])]),e("div",Se,[e("table",null,[e("tbody",null,[(n(!0),i(h,null,m(R.value,(s,c)=>(n(),i(h,{key:c},[l.value.ID==s["ID Investigación"]&&s["Link para ficha"].length>0?(n(),i("tr",Ve,[e("td",He,[e("a",{href:s["Link para ficha"],target:"_blank"},[e("div",{class:"icon-container",title:s["Tipo producto"]},[e("span",{innerHTML:M(s["Tipo producto"])},null,8,Fe)],8,Ne)],8,Be)]),e("td",null,[e("a",{href:s["Link para ficha"],target:"_blank"},o(s.Título),9,Me),Re]),Xe])):A("",!0)],64))),128))])])])])])]),z.value.length>0?(n(),i("div",$e,[Ue,Ge,e("table",Je,[e("tbody",null,[(n(!0),i(h,null,m(z.value,(s,c)=>(n(),i("tr",{key:c},[e("td",We,o(c+1),1),e("td",null,o(s["Texto hallazgo"]),1)]))),128))])])])):A("",!0)],512),[[d,u.value=="details"]])]))],64))}};export{Ze as default};
