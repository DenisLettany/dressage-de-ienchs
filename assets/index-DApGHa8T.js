(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}})();const i=document.querySelector(".month-content"),c=["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],d=new Date,l=d.getMonth(),s=c[l];i.innerHTML=`
    <h2>
    <u>ATTENTION !</u> En ${s}, je vous offre une réduction de 50%
    </h2>
    <p>
    En ${s}, vous pouvez avoir ma méthode avec
    <strong>une remise de 50% du prix courant</strong> – obtenez ma
    méthode dès aujourd’hui pour
    <strong><u>seulement 33€+TVA.</u></strong>
    </p>
`;
