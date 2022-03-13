(this["webpackJsonpprimo-calc-react"]=this["webpackJsonpprimo-calc-react"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var r=a(1),c=a.n(r),s=a(8),n=a.n(s),l=a(4),i=a.n(l),o=a(6),d=a(5),u=a(2),j=a(3),b=a(0),m=function(e){var t=e.setView;return Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark shadow rounded",children:Object(b.jsxs)("div",{className:"container-fluid justify-content-center",children:[Object(b.jsx)("button",{className:"btn btn-dark mx-1 mb-2",onClick:function(){t("")},children:"Primo Calculator"}),Object(b.jsx)("button",{className:"btn btn-dark mx-1 mb-2",onClick:function(){t("ascCalc")},children:"Ascension Material/Talent Book Calculator"}),Object(b.jsx)("button",{className:"btn btn-dark mx-1 mb-2",onClick:function(){t("spentMoraCalc")},children:"Spent Mora Calculator"})]})})},h=function(e){var t=e.calcData,a=e.onChangeHandlerCalcData,r=e.calculateWishes,c=e.wishResults;return Object(b.jsxs)("div",{className:"col-md-7 col-lg-8 p-3 g-3 mt-3 mx-auto shadow border border-dark rounded calc-box",children:[Object(b.jsxs)("div",{className:"row g-3 align-items-center justify-content-center mb-1",children:[Object(b.jsx)("div",{className:"col-auto",children:Object(b.jsx)("label",{htmlFor:"current-primos-id",className:"col-form-label",children:"Current primogems:"})}),Object(b.jsx)("div",{className:"col-auto",children:Object(b.jsx)("input",{type:"number",id:"current-primos-id",className:"form-control",name:"currentPrimos",min:"0",defaultValue:t.currentPrimos,onChange:a})})]}),Object(b.jsxs)("div",{className:"row g-3 align-items-center justify-content-center mb-1",title:"Any primogems that you have not yet gotten from stuff like events, promo codes etc.",children:[Object(b.jsx)("div",{className:"col-auto",children:Object(b.jsx)("label",{htmlFor:"extra-primos-id",className:"col-form-label",children:"Extra primogems:"})}),Object(b.jsx)("div",{className:"col-auto",children:Object(b.jsx)("input",{type:"number",id:"extra-primos-id",className:"form-control",name:"extraPrimos",min:"0",defaultValue:t.extraPrimos,onChange:a})})]}),Object(b.jsxs)("div",{className:"row g-3 align-items-center justify-content-center mb-1",children:[Object(b.jsx)("div",{className:"col-auto",children:Object(b.jsx)("label",{htmlFor:"current-starglitter-id",className:"col-form-label",children:"Current starglitter:"})}),Object(b.jsx)("div",{className:"col-auto",children:Object(b.jsx)("input",{type:"number",id:"current-starglitter-id",className:"form-control",name:"currentStarglitter",min:"0",defaultValue:t.currentStarglitter,onChange:a})})]}),Object(b.jsxs)("div",{className:"row g-3 align-items-center justify-content-center mb-1",children:[Object(b.jsx)("div",{className:"col-auto",children:Object(b.jsx)("label",{htmlFor:"current-fates-id",className:"col-form-label",children:"Current fates:"})}),Object(b.jsx)("div",{className:"col-auto",children:Object(b.jsx)("input",{type:"number",id:"current-fates-id",className:"form-control",name:"currentFates",min:"0",defaultValue:t.currentFates,onChange:a})})]}),Object(b.jsxs)("div",{className:"row g-3 align-items-center justify-content-center mb-1",children:[Object(b.jsx)("div",{className:"col-auto",children:Object(b.jsx)("label",{htmlFor:"current-pity-id",className:"col-form-label",children:"Current pity:"})}),Object(b.jsx)("div",{className:"col-auto",children:Object(b.jsx)("input",{type:"number",id:"current-pity-id",className:"form-control",name:"currentPity",min:"0",defaultValue:t.currentPity,onChange:a})})]}),Object(b.jsxs)("div",{className:"row g-3 align-items-center justify-content-center mb-1",title:"Abyss chambers that you have not yet completed, 50 primogems per chamber",children:[Object(b.jsx)("div",{className:"col-auto",children:Object(b.jsx)("label",{htmlFor:"abyss-chambers-id",className:"col-form-label",children:"Abyss chambers:"})}),Object(b.jsx)("div",{className:"col-auto",children:Object(b.jsx)("input",{type:"number",id:"abyss-chambers-id",className:"form-control",name:"abyssChambers",min:"0",defaultValue:t.abyssChambers,onChange:a})})]}),Object(b.jsxs)("div",{className:"row g-3 align-items-center justify-content-center mb-1",title:"How many days of Welkin Moon or commissions do you want to add if those boxes are checked",children:[Object(b.jsx)("div",{className:"col-auto",children:Object(b.jsx)("label",{htmlFor:"days-id",className:"col-form-label",children:"Number of days:"})}),Object(b.jsx)("div",{className:"col-auto",children:Object(b.jsx)("input",{type:"number",id:"days-id",className:"form-control",name:"days",min:"0",defaultValue:t.days,onChange:a})})]}),Object(b.jsxs)("div",{className:"row g-3 align-items-center justify-content-center my-1",title:"Will automatically add 5 wishes for every shop reset that's within the range of given number of days. May not be 100% accurate",children:[Object(b.jsx)("div",{className:"col-auto",children:Object(b.jsx)("label",{htmlFor:"add-stardust-wishes-id",className:"form-check-label",children:"Auto add stardust wishes:"})}),Object(b.jsx)("div",{className:"col-auto",children:Object(b.jsx)("input",{type:"checkbox",id:"add-stardust-wishes-id",className:"form-check-input",name:"addStardustWishes",onChange:a})})]}),Object(b.jsxs)("div",{className:"row g-3 align-items-center justify-content-center",children:[Object(b.jsx)("div",{className:"col-auto",children:Object(b.jsx)("label",{htmlFor:"welkin-id",className:"form-check-label",children:"Welkin Moon:"})}),Object(b.jsx)("div",{className:"col-auto",children:Object(b.jsx)("input",{type:"checkbox",id:"welkin-id",className:"form-check-input",name:"welkin",onChange:a})}),Object(b.jsx)("div",{className:"col-auto",children:Object(b.jsx)("label",{htmlFor:"commissions-id",className:"form-check-label",children:"Commissions:"})}),Object(b.jsx)("div",{className:"col-auto",children:Object(b.jsx)("input",{type:"checkbox",id:"commissions-id",className:"form-check-input",name:"commissions",onChange:a})})]}),Object(b.jsx)("div",{className:"row g-3 align-items-center col-lg-3 cl-md-6 mx-auto my-1 shadow",children:Object(b.jsx)("button",{type:"button",className:"btn btn-outline-light",onClick:r,children:"Calculate"})}),Object(b.jsxs)("div",{className:"row g-3 align-items-center text-center mt-1",children:[Object(b.jsxs)("p",{children:["Available wishes: ",c.availableWishes,Object(b.jsx)("br",{}),"Pulls until first hard pity from current pity: ",c.toFirstHardPity,Object(b.jsx)("br",{}),"Wishes left after first hard pity: ",c.afterFirstHardPity]}),Object(b.jsx)("p",{children:Object(b.jsx)("i",{children:"You can hover over some fields to get an explanation of what they do if you are confused"})})]})]})},O=function(e){var t=e.ascCalcData,a=e.onChangeHandlerAscCalcData,r=e.calculateAscMats,c=e.ascCalcResults;return Object(b.jsxs)("div",{className:"col-md-7 col-lg-8 p-3 g-3 mt-3 mx-auto shadow border border-dark rounded calc-box",children:[Object(b.jsxs)("div",{className:"row g-3 align-items-center justify-content-center mb-1",children:[Object(b.jsxs)("div",{className:"col-4",children:[Object(b.jsx)("label",{htmlFor:"current-purple-mat-id",className:"col-form-label",children:"Current purple material:"}),Object(b.jsx)("input",{type:"number",id:"current-purple-mat-id",className:"form-control",name:"currPurpleMat",defaultValue:t.currPurpleMat,min:"0",onChange:a})]}),Object(b.jsxs)("div",{className:"col-4",children:[Object(b.jsx)("label",{htmlFor:"current-blue-mat-id",className:"col-form-label",children:"Current blue material:"}),Object(b.jsx)("input",{type:"number",id:"current-blue-mat-id",className:"form-control",name:"currBlueMat",defaultValue:t.currBlueMat,min:"0",onChange:a})]}),Object(b.jsxs)("div",{className:"col-4",children:[Object(b.jsx)("label",{htmlFor:"current-green-mat-id",className:"col-form-label",children:"Current green material:"}),Object(b.jsx)("input",{type:"number",id:"current-green-mat-id",className:"form-control",name:"currGreenMat",defaultValue:t.currGreenMat,min:"0",onChange:a})]})]}),Object(b.jsxs)("div",{className:"row g-3 align-items-center justify-content-center mb-1",children:[Object(b.jsxs)("div",{className:"col-4",children:[Object(b.jsx)("label",{htmlFor:"required-purple-mat-id",className:"col-form-label",children:"Required purple material:"}),Object(b.jsx)("input",{type:"number",id:"required-purple-mat-id",className:"form-control",name:"reqPurpleMat",defaultValue:t.reqPurpleMat,min:"0",onChange:a})]}),Object(b.jsxs)("div",{className:"col-4",children:[Object(b.jsx)("label",{htmlFor:"required-blue-mat-id",className:"col-form-label",children:"Required blue material:"}),Object(b.jsx)("input",{type:"number",id:"required-blue-mat-id",className:"form-control",name:"reqBlueMat",defaultValue:t.reqBlueMat,min:"0",onChange:a})]}),Object(b.jsxs)("div",{className:"col-4",children:[Object(b.jsx)("label",{htmlFor:"required-green-mat-id",className:"col-form-label",children:"Required green material:"}),Object(b.jsx)("input",{type:"number",id:"required-green-mat-id",className:"form-control",name:"reqGreenMat",defaultValue:t.reqGreenMat,min:"0",onChange:a})]})]}),Object(b.jsx)("div",{className:"row g-3 align-items-center col-lg-3 cl-md-6 mx-auto my-1 shadow",children:Object(b.jsx)("button",{type:"button",className:"btn btn-outline-light",onClick:r,children:"Calculate"})}),Object(b.jsx)("div",{className:"row g-3 align-items-center text-center mt-1",children:Object(b.jsxs)("p",{children:["Materials needed:",Object(b.jsx)("br",{}),"Purple: ",c.neededPurpleMat,Object(b.jsx)("br",{}),"Blue: ",c.neededBlueMat,Object(b.jsx)("br",{}),"Green: ",c.neededGreenMat]})})]})},x=function(e){var t=e.setFileData;return Object(b.jsx)("div",{className:"row g-3 align-items-center justify-content-center mb-1",children:Object(b.jsx)("div",{className:"col-lg-6 mx-auto",children:Object(b.jsx)("input",{type:"file",className:"form-control upload-file-input",accept:".json",onChange:function(e){var a=new FileReader;void 0!==e.target.files[0]&&(a.readAsText(e.target.files[0],"UTF-8"),a.onload=function(e){try{t(JSON.parse(e.target.result))}catch(a){alert("Please choose a valid JSON file")}})}})})})},p=function(e){var t=e.totalUpgradeCost,a=e.setTotalUpgradeCost,c=e.totalWeaponUpgradeCost,s=e.totalCharacterUpgradeCost,n=e.totalTalentUpgradeCost,l=e.totalArtifactUpgradeCost;return Object(r.useEffect)((function(){a(t+c+s+n+l)}),[c,s,n,l]),Object(b.jsxs)("div",{className:"text-center mt-3",children:[Object(b.jsxs)("h4",{children:["Total upgrade cost: ",t.toLocaleString()]}),Object(b.jsxs)("h4",{children:["Total weapon upgrade cost (Excluding 1* and 2* weapons): ",c.toLocaleString()]}),Object(b.jsxs)("h4",{children:["Total character upgrade cost: ",s.toLocaleString()]}),Object(b.jsxs)("h4",{children:["Total talent upgrade cost: ",n.toLocaleString()]}),Object(b.jsxs)("h4",{children:["Total artifact upgrade cost (Excluding 1* and 2* artifacts): ",l.toLocaleString()]})]})},f=function(e){var t=e.weapon,a=e.checkRarity,c=e.getWeaponUpgradeCost,s=e.setTotalWeaponUpgradeCost,n=c(t);return Object(r.useEffect)((function(){s((function(e){return e+n}))}),[]),Object(b.jsx)("div",{className:"card col-lg-3 col-md-5 bg-dark mx-2 mb-3",children:Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("h4",{className:"card-title",children:t.key.replace(/([A-Z])/g," $1").trim()}),Object(b.jsxs)("p",{className:"card-text",children:[Object(b.jsx)("strong",{children:"Lvl:"})," ",t.level]}),Object(b.jsxs)("p",{className:"card-text",children:[Object(b.jsx)("strong",{children:"Total upgrade cost:"})," ",n.toLocaleString()]}),Object(b.jsxs)("p",{className:"card-text",children:[Object(b.jsx)("strong",{children:"Rarity:"})," ",a(t.key)]}),Object(b.jsxs)("p",{className:"card-text",children:[Object(b.jsx)("strong",{children:"Ascension:"})," ",t.ascension]}),Object(b.jsxs)("p",{className:"card-text",children:[Object(b.jsx)("strong",{children:"Refinement:"})," ",t.refinement]}),Object(b.jsxs)("p",{className:"card-text",children:[Object(b.jsx)("strong",{children:"Equipped on:"})," ",t.location.replace(/([A-Z])/g," $1").trim()]})]})})},g=function(e){var t=e.character,a=e.getCharacterUpgradeCost,c=e.getTalentUpgradeCost,s=e.setTotalCharacterUpgradeCost,n=e.setTotalTalentUpgradeCost,l=a(t),i=c(t);return Object(r.useEffect)((function(){s((function(e){return e+l})),n((function(e){return e+i}))}),[]),Object(b.jsx)("div",{className:"card col-lg-4 col-md-6 bg-dark mx-2 mb-3",children:Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("h4",{className:"card-title",children:t.key.replace(/([A-Z])/g," $1").trim()}),Object(b.jsxs)("p",{className:"card-text",children:[Object(b.jsx)("strong",{children:"Lvl:"})," ",t.level]}),Object(b.jsxs)("p",{className:"card-text",children:[Object(b.jsx)("strong",{children:"Total upgrade cost:"})," ",l.toLocaleString()]}),Object(b.jsxs)("p",{className:"card-text",children:[Object(b.jsx)("strong",{children:"Total talent upgrade cost:"})," ",i.toLocaleString()]}),Object(b.jsxs)("p",{className:"card-text",children:[Object(b.jsx)("strong",{children:"Ascension:"})," ",t.ascension]}),Object(b.jsxs)("p",{className:"card-text",children:[Object(b.jsx)("strong",{children:"Constellation:"})," ",t.constellation]}),Object(b.jsxs)("p",{className:"card-text",children:[Object(b.jsx)("strong",{style:{textDecoration:"underline"},children:"Talents"}),Object(b.jsx)("br",{}),Object(b.jsx)("strong",{children:"Auto:"})," ",t.talent.auto,Object(b.jsx)("br",{}),Object(b.jsx)("strong",{children:"Skill:"})," ",t.talent.skill,Object(b.jsx)("br",{}),Object(b.jsx)("strong",{children:"Burst:"})," ",t.talent.burst]})]})})},v=function(e){var t=e.artifact,a=e.getArtifactUpgradeCost,c=e.setTotalArtifactUpgradeCost,s=a(t);return Object(r.useEffect)((function(){c((function(e){return e+s}))}),[]),Object(b.jsx)("div",{className:"card col-lg-3 col-md-5 bg-dark mx-2 mb-3",children:Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("h4",{className:"card-title",children:t.setKey.replace(/([A-Z])/g," $1").trim()}),Object(b.jsx)("p",{className:"card-text",children:Object(b.jsx)("strong",{children:t.slotKey.replace(/^./,(function(e){return e.toUpperCase()}))})}),Object(b.jsxs)("p",{className:"card-text",children:[Object(b.jsx)("strong",{children:"Lvl:"})," ",t.level]}),Object(b.jsxs)("p",{className:"card-text",children:[Object(b.jsx)("strong",{children:"Total upgrade cost:"})," ",s.toLocaleString()]}),Object(b.jsxs)("p",{className:"card-text",children:[Object(b.jsx)("strong",{children:"Rarity:"})," ",t.rarity]})]})})},y=function(e){var t=e.setFileData,a=e.weaponsRarityData,c=e.weaponMoraCostPerLevel,s=e.characterMoraCostPerLevel,n=e.artifactMoraCostPerLevel,l=e.weapons,i=e.characters,o=e.artifacts,d=Object(r.useState)(0),u=Object(j.a)(d,2),m=u[0],h=u[1],O=Object(r.useState)(0),y=Object(j.a)(O,2),N=y[0],C=y[1],w=Object(r.useState)(0),k=Object(j.a)(w,2),S=k[0],M=k[1],P=Object(r.useState)(0),A=Object(j.a)(P,2),F=A[0],U=A[1],T=Object(r.useState)(0),D=Object(j.a)(T,2),q=D[0],L=D[1],W=function(e){return a.fiveStar.includes(e)?5:a.fourStar.includes(e)?4:a.threeStar.includes(e)?3:0},V=function(e){if(e.level>1&&W(e.key)>2){if(5===W(e.key))return 20===e.level&&1===e.ascension||40===e.level&&2===e.ascension||50===e.level&&3===e.ascension||60===e.level&&4===e.ascension||70===e.level&&5===e.ascension||80===e.level&&6===e.ascension?c.fiveStar[e.level]+c.fiveStarAsc[e.level]:c.fiveStar[e.level];if(4===W(e.key))return 20===e.level&&1===e.ascension||40===e.level&&2===e.ascension||50===e.level&&3===e.ascension||60===e.level&&4===e.ascension||70===e.level&&5===e.ascension||80===e.level&&6===e.ascension?c.fourStar[e.level]+c.fourStarAsc[e.level]:c.fourStar[e.level];if(3===W(e.key))return 20===e.level&&1===e.ascension||40===e.level&&2===e.ascension||50===e.level&&3===e.ascension||60===e.level&&4===e.ascension||70===e.level&&5===e.ascension||80===e.level&&6===e.ascension?c.threeStar[e.level]+c.threeStarAsc[e.level]:c.threeStar[e.level]}return 0},B=function(e){return e.level>1?20===e.level&&1===e.ascension||40===e.level&&2===e.ascension||50===e.level&&3===e.ascension||60===e.level&&4===e.ascension||70===e.level&&5===e.ascension||80===e.level&&6===e.ascension?s.character[e.level]+s.characterAsc[e.level]:s.character[e.level]:0},G=function(e){var t=0;return e.talent.auto>1&&(t+=s.talents[e.talent.auto]),e.talent.skill>1&&(t+=s.talents[e.talent.skill]),e.talent.burst>1&&(t+=s.talents[e.talent.burst]),t},R=function(e){if(e.level>0){if(5===e.rarity)return n.fiveStar[e.level];if(4===e.rarity)return n.fourStar[e.level];if(3===e.rarity)return n.threeStar[e.level]}return 0};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"col-md-7 col-lg-8 p-3 g-3 mt-3 mx-auto shadow border border-dark rounded calc-box text-center",children:[Object(b.jsx)("p",{children:"Upload a file in the GOOD format to see how much mora you spent on upgrading weapons, characters and artifacts"}),Object(b.jsx)("p",{children:"Here's a small list of automatic scanners that export in the GOOD format"}),Object(b.jsxs)("div",{className:"list-group mb-3 align-items-center",children:[Object(b.jsx)("a",{className:"btn btn-outline-light mb-2 col-lg-3 cl-md-6",href:"https://github.com/Andrewthe13th/Inventory_Kamera",target:"_blank",rel:"noreferrer noopener",children:"Inventory Kamera"}),Object(b.jsx)("a",{className:"btn btn-outline-light col-lg-3 cl-md-6",href:"https://github.com/D1firehail/AdeptiScanner-GI",target:"_blank",rel:"noreferrer noopener",children:"AdeptiScanner"})]}),Object(b.jsx)("p",{children:"Although the usage of these tools is virtually undetectable, just as with any tool that indirectly interacts with the game, there could still be a risk with using them"}),Object(b.jsx)("a",{className:"btn btn-outline-light",href:"https://genshin.hoyoverse.com/en/news/detail/5763",target:"_blank",rel:"noreferrer noopener",children:"MiHoYo's official response to Script, Plug-In, and Third-Party Software Issues"})]}),Object(b.jsxs)("div",{className:"col-md-7 col-lg-8 p-3 g-3 mt-2 mx-auto shadow border border-dark rounded calc-box text-center",children:[Object(b.jsx)(x,{setFileData:t}),Object(b.jsx)(p,{totalUpgradeCost:m,setTotalUpgradeCost:h,totalWeaponUpgradeCost:N,totalCharacterUpgradeCost:S,totalTalentUpgradeCost:F,totalArtifactUpgradeCost:q})]}),Object(b.jsxs)("div",{className:"col-md-7 col-lg-8 p-3 g-3 mt-2 mx-auto shadow border border-dark rounded calc-box text-center",children:[Object(b.jsx)("h3",{className:"mb-3",children:"Weapons"}),Object(b.jsx)("div",{className:"row justify-content-center",children:l.map((function(e,t){return Object(b.jsx)(f,{weapon:e,checkRarity:W,getWeaponUpgradeCost:V,setTotalWeaponUpgradeCost:C},t)}))})]}),Object(b.jsxs)("div",{className:"col-md-7 col-lg-8 p-3 g-3 mt-2 mx-auto shadow border border-dark rounded calc-box text-center",children:[Object(b.jsx)("h3",{className:"mb-3",children:"Characters"}),Object(b.jsx)("div",{className:"row justify-content-center",children:i.map((function(e,t){return Object(b.jsx)(g,{character:e,getCharacterUpgradeCost:B,getTalentUpgradeCost:G,setTotalCharacterUpgradeCost:M,setTotalTalentUpgradeCost:U},t)}))})]}),Object(b.jsxs)("div",{className:"col-md-7 col-lg-8 p-3 g-3 mt-2 mb-2 mx-auto shadow border border-dark rounded calc-box text-center",children:[Object(b.jsx)("h3",{className:"mb-3",children:"Artifacts"}),Object(b.jsx)("div",{className:"row justify-content-center",children:o.map((function(e,t){return Object(b.jsx)(v,{artifact:e,getArtifactUpgradeCost:R,setTotalArtifactUpgradeCost:L},t)}))})]})]})},N=(a(15),function(){var e=Object(r.useState)(""),t=Object(j.a)(e,2),a=t[0],c=t[1],s=Object(r.useState)({weapons:[],characters:[],artifacts:[]}),n=Object(j.a)(s,2),l=n[0],x=n[1],p=Object(r.useState)([{key:"",level:0,ascension:0,refinement:0,location:""}]),f=Object(j.a)(p,2),g=f[0],v=f[1],N=Object(r.useState)([{key:"",level:0,constellation:0,ascension:0,talent:{auto:0,skill:0,burst:0}}]),C=Object(j.a)(N,2),w=C[0],k=C[1],S=Object(r.useState)([{setKey:"",slotKey:"",rarity:0,mainStatKey:"",level:0,substats:[{key:"",value:0},{key:"",value:0},{key:"",value:0},{key:"",value:0}],location:"",lock:!0,SubStatsCount:0,Id:0}]),M=Object(j.a)(S,2),P=M[0],A=M[1];Object(r.useEffect)((function(){return F()}));var F=function(){void 0!==l.weapons&&v(l.weapons),void 0!==l.characters&&k(l.characters),void 0!==l.artifacts&&A(l.artifacts)},U=Object(r.useState)({currentPrimos:0,extraPrimos:0,currentStarglitter:0,currentFates:0,currentPity:0,abyssChambers:0,days:0,addStardustWishes:!1,welkin:!1,commissions:!1}),T=Object(j.a)(U,2),D=T[0],q=T[1],L=Object(r.useState)({availableWishes:0,toFirstHardPity:0,afterFirstHardPity:0}),W=Object(j.a)(L,2),V=W[0],B=W[1],G=Object(r.useState)({currPurpleMat:0,currBlueMat:0,currGreenMat:0,reqPurpleMat:0,reqBlueMat:0,reqGreenMat:0}),R=Object(j.a)(G,2),H=R[0],E=R[1],I=Object(r.useState)({neededPurpleMat:0,neededBlueMat:0,neededGreenMat:0}),K=Object(j.a)(I,2),J=K[0],Z=K[1],$=Object(r.useState)({fiveStar:[],fourStar:[],threeStar:[]}),_=Object(j.a)($,2),Y=_[0],z=_[1],Q=Object(r.useState)({}),X=Object(j.a)(Q,2),ee=X[0],te=X[1],ae=Object(r.useState)({}),re=Object(j.a)(ae,2),ce=re[0],se=re[1],ne=Object(r.useState)({}),le=Object(j.a)(ne,2),ie=le[0],oe=le[1];Object(r.useEffect)((function(){de(),ue(),je(),be()}),[]);var de=function(){var e=Object(o.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("weapons.json");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,z(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ue=function(){var e=Object(o.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("weaponMoraCostPerLevel.json");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,te(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),je=function(){var e=Object(o.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("characterMoraCostPerLevel.json");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,se(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),be=function(){var e=Object(o.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("artifactMoraCostPerLevel.json");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,oe(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();switch(a){case"ascCalc":return Object(b.jsxs)("div",{className:"App container-fluid",children:[Object(b.jsx)(m,{setView:c}),Object(b.jsx)(O,{ascCalcData:H,onChangeHandlerAscCalcData:function(e){""===e.target.value?E(Object(u.a)(Object(u.a)({},H),{},Object(d.a)({},e.target.name,0))):E(Object(u.a)(Object(u.a)({},H),{},Object(d.a)({},e.target.name,Math.abs(e.target.value))))},calculateAscMats:function(e){e.preventDefault();var t=H.currPurpleMat,a=H.reqPurpleMat,r=H.currBlueMat,c=H.reqBlueMat,s=H.currGreenMat,n=H.reqGreenMat,l=0,i=0;s>=n?(Z((function(e){return Object(u.a)(Object(u.a)({},e),{},{neededGreenMat:0})})),(l=s-n)>=3&&(r+=(l-l%3)/3)):n>s&&Z((function(e){return Object(u.a)(Object(u.a)({},e),{},{neededGreenMat:n-s})})),r>=c?(Z((function(e){return Object(u.a)(Object(u.a)({},e),{},{neededBlueMat:0})})),(i=r-c)>=3&&(t+=(i-i%3)/3)):c>r&&Z((function(e){return Object(u.a)(Object(u.a)({},e),{},{neededBlueMat:c-r})})),t>=a?Z((function(e){return Object(u.a)(Object(u.a)({},e),{},{neededPurpleMat:0})})):a>t&&Z((function(e){return Object(u.a)(Object(u.a)({},e),{},{neededPurpleMat:a-t})}))},ascCalcResults:J})]});case"spentMoraCalc":return Object(b.jsxs)("div",{className:"App container-fluid",children:[Object(b.jsx)(m,{setView:c}),Object(b.jsx)(y,{setFileData:x,weaponsRarityData:Y,weaponMoraCostPerLevel:ee,characterMoraCostPerLevel:ce,artifactMoraCostPerLevel:ie,weapons:g,characters:w,artifacts:P})]});default:return Object(b.jsxs)("div",{className:"App container-fluid",children:[Object(b.jsx)(m,{setView:c}),Object(b.jsx)(h,{calcData:D,onChangeHandlerCalcData:function(e){"checkbox"===e.target.type?q(Object(u.a)(Object(u.a)({},D),{},Object(d.a)({},e.target.name,e.target.checked))):""===e.target.value?q(Object(u.a)(Object(u.a)({},D),{},Object(d.a)({},e.target.name,0))):q(Object(u.a)(Object(u.a)({},D),{},Object(d.a)({},e.target.name,Math.abs(e.target.value))))},calculateWishes:function(e){e.preventDefault();var t=0;t+=D.currentPrimos+50*D.abyssChambers+D.currentStarglitter/5*160+D.extraPrimos,D.welkin&&D.commissions?t+=150*D.days:D.commissions?t+=60*D.days:D.welkin&&(t+=90*D.days);var a=Math.floor(D.currentFates+t/160);D.addStardustWishes&&(a+=function(){for(var e=0,t=new Date,a=new Date(t.getFullYear(),t.getMonth(),t.getDate()+D.days);t<=a;)t.setDate(t.getDate()+1),1===t.getDate()&&(e+=5);return e}());var r=0,c=a-(r=D.currentPity>0&&D.currentPity<91?90-D.currentPity:(D.currentPity,90));c<0&&(c=0),B({availableWishes:a,toFirstHardPity:r,afterFirstHardPity:c})},wishResults:V})]})}});n.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(N,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.61e7593e.chunk.js.map