var noMathRender=!1;(function(){function ri(n,t){return n.input>t.input?1:-1}function vt(){for(var t=[],n=0;n<u.length;n++)!u[n].tex||typeof u[n].notexcopy=="boolean"&&u[n].notexcopy||(t[t.length]={input:u[n].tex,tag:u[n].tag,output:u[n].output,ttype:u[n].ttype,acc:u[n].acc||!1});for(u=u.concat(t),u.sort(ri),n=0;n<u.length;n++)c[n]=u[n].input}function r(n,t){for(var r=n.charAt(t)=="\\"&&n.charAt(t+1)!="\\"&&n.charAt(t+1)!=" "?n.slice(t+1):n.slice(t),i=0;i<r.length&&r.charCodeAt(i)<=32;i=i+1);return r.slice(i)}function at(n,t,i){var r,f,u;if(i==0){for(i=-1,r=n.length;i+1<r;)f=i+r>>1,n[f]<t?i=f:r=f;return r}for(u=i;u<n.length&&n[u]<t;u++);return u}function l(r){for(var f=0,y=0,l,e,s,a="",p=!0,v,o=1;o<=r.length&&p;o++)e=r.slice(0,o),y=f,f=at(c,e,y),f<c.length&&r.slice(0,c[f].length)==c[f]&&(a=c[f],l=f,o=a.length),p=f<c.length&&r.slice(0,c[f].length)>=c[f];if(lt=d,a!="")return d=u[l].ttype,u[l];for(d=n,f=1,e=r.slice(0,1),v=!0;"0"<=e&&e<="9"&&f<=r.length;)e=r.slice(f,f+1),f++;if(e==i.decimalsign&&(e=r.slice(f,f+1),"0"<=e&&e<="9"))for(v=!1,f++;"0"<=e&&e<="9"&&f<=r.length;)e=r.slice(f,f+1),f++;return(v&&f>1||f>2?(e=r.slice(0,f-1),s="mn"):(f=2,e=r.slice(0,1),s=("A">e||e>"Z")&&("a">e||e>"z")?"mo":"mi"),e=="-"&&lt==h)?(d=h,{input:e,tag:s,output:e,ttype:t,func:!0,val:!0}):{input:e,tag:s,output:e,ttype:n,val:!0}}function y(n){var t,i;return n.charAt(0)=="{"&&n.charAt(n.length-1)=="}"&&(i=0,t=n.substr(1,5),t=="\\left"?(t=n.charAt(6),t=="("||t=="["||t=="{"?i=7:(t=n.substr(6,7),t=="\\lbrace"&&(i=13))):(t=n.charAt(1),(t=="("||t=="[")&&(i=2)),i>0&&(t=n.substr(n.length-8),t=="\\right)}"||t=="\\right]}"||t=="\\right.}"?(n="{"+n.substr(i),n=n.substr(0,n.length-8)+"}"):t=="\\rbrace}"&&(n="{"+n.substr(i),n=n.substr(0,n.length-14)+"}"))),n}function e(n){return pre=typeof n.val=="boolean"&&n.val?"":"\\",n.tex==null?pre+n.input:pre+n.tex}function w(i){var u,k,c,d,rt="",ot,et,ut,b;if(i=r(i,0),u=l(i),u==null||u.ttype==s&&a>0)return[null,i];u.ttype==f&&(i=u.output+r(i,u.input.length),u=l(i));switch(u.ttype){case o:case n:return i=r(i,u.input.length),ot=e(u),ot.charAt(0)=="\\"||u.tag=="mo"?[ot,i]:["{"+ot+"}",i];case p:return a++,i=r(i,u.input.length),c=ft(i,!0),a--,et=0,c[0].substr(0,6)=="\\right"&&(b=c[0].charAt(6),b==")"||b=="]"||b=="}"?et=6:b=="."?et=7:(b=c[0].substr(6,7),b=="\\rbrace"&&(et=13))),et>0?(c[0]=c[0].substr(et),k=typeof u.invisible=="boolean"&&u.invisible?"{"+c[0]+"}":"{"+e(u)+c[0]+"}"):k=typeof u.invisible=="boolean"&&u.invisible?"{\\left."+c[0]+"}":"{\\left"+e(u)+c[0]+"}",[k,c[1]];case tt:return u!=it&&(i=r(i,u.input.length)),d=i.charAt(0)=="{"?i.indexOf("}"):i.charAt(0)=="("?i.indexOf(")"):i.charAt(0)=="["?i.indexOf("]"):u==it?i.slice(1).indexOf('"')+1:0,d==-1&&(d=i.length),b=i.slice(1,d),b.charAt(0)==" "&&(rt="\\ "),rt+="\\text{"+b+"}",b.charAt(b.length-1)==" "&&(rt+="\\ "),i=r(i,d+1),[rt,i];case t:return(i=r(i,u.input.length),c=w(i),c[0]==null)?["{"+e(u)+"}",i]:typeof u.func=="boolean"&&u.func?(b=i.charAt(0),b=="^"||b=="_"||b=="/"||b=="|"||b==","||u.input.length==1&&u.input.match(/\w/)&&b!="("?["{"+e(u)+"}",i]:(k="{"+e(u)+"{"+c[0]+"}}",[k,c[1]])):(c[0]=y(c[0]),u.input=="sqrt"?["\\sqrt{"+c[0]+"}",c[1]]:u.input=="cancel"?["\\cancel{"+c[0]+"}",c[1]]:typeof u.rewriteleftright!="undefined"?["{\\left"+u.rewriteleftright[0]+c[0]+"\\right"+u.rewriteleftright[1]+"}",c[1]]:typeof u.acc=="boolean"&&u.acc?[e(u)+"{"+c[0]+"}",c[1]]:["{"+e(u)+"{"+c[0]+"}}",c[1]]);case v:return(i=r(i,u.input.length),c=w(i),c[0]==null)?["{"+e(u)+"}",i]:(c[0]=y(c[0]),ut=w(c[1]),ut[0]==null)?["{"+e(u)+"}",i]:(ut[0]=y(ut[0]),rt=u.input=="color"?"{\\color{"+c[0].replace(/[\{\}]/g,"")+"}"+ut[0]+"}":u.input=="root"?"{\\sqrt["+c[0]+"]{"+ut[0]+"}}":"{"+e(u)+"{"+c[0]+"}{"+ut[0]+"}}",[rt,ut[1]]);case h:return i=r(i,u.input.length),[u.output,i];case g:return i=r(i,u.input.length),["{\\quad\\text{"+u.input+"}\\quad}",i];case nt:return a++,i=r(i,u.input.length),c=ft(i,!1),a--,b="",b=c[0].charAt(c[0].length-1),b=="|"?(k="{\\left|"+c[0]+"}",[k,c[1]]):(k="{\\mid}",[k,i]);default:return i=r(i,u.input.length),["{"+e(u)+"}",i]}}function ut(n){var f,o,u,i,t,e;return n=r(n,0),o=l(n),t=w(n),i=t[0],n=t[1],f=l(n),f.ttype==h&&f.input!="/"&&(n=r(n,f.input.length),t=w(n),t[0]=t[0]==null?"{}":y(t[0]),n=t[1],f.input=="_"?(u=l(n),u.input=="^"?(n=r(n,u.input.length),e=w(n),e[0]=y(e[0]),n=e[1],i="{"+i,i+="_{"+t[0]+"}",i+="^{"+e[0]+"}",i+="}"):i+="_{"+t[0]+"}"):i=i+"^{"+t[0]+"}",typeof o.func!="undefined"&&o.func&&(u=l(n),u.ttype!=h&&u.ttype!=s&&(t=ut(n),i="{"+i+t[0]+"}",n=t[1]))),[i,n]}function ft(n,t){var c,w,b,i,ht=[],u="",st=!1,g,d,ft,k,f,tt,it,rt,p,v;do n=r(n,0),b=ut(n),w=b[0],n=b[1],c=l(n),c.ttype==h&&c.input=="/"?(n=r(n,c.input.length),b=ut(n),b[0]=b[0]==null?"{}":y(b[0]),n=b[1],w=y(w),w="\\frac{"+w+"}",w+="{"+b[0]+"}",u+=w,c=l(n)):w!=undefined&&(u+=w);while((c.ttype!=s&&(c.ttype!=nt||t)||a==0)&&c!=null&&c.output!="");if(c.ttype==s||c.ttype==nt){if(g=u.length,g>2&&u.charAt(0)=="{"&&u.indexOf(",")>0&&(d=u.charAt(g-2),(d==")"||d=="]")&&(ft=u.charAt(6),ft=="("&&d==")"&&c.output!="}"||ft=="["&&d=="]"))){k="\\begin{matrix}",f=[],f.push(0);var et=!0,ot=0,o=[];for(o[0]=[0],tt=0,it=0,i=1;i<g-1;i++)u.charAt(i)==ft&&ot++,u.charAt(i)==d&&(ot--,ot==0&&u.charAt(i+2)==","&&u.charAt(i+3)=="{"&&(f.push(i+2),tt=i+2,o[tt]=[i+2])),(u.charAt(i)=="["||u.charAt(i)=="("||u.charAt(i)=="{")&&it++,(u.charAt(i)=="]"||u.charAt(i)==")"||u.charAt(i)=="}")&&it--,u.charAt(i)==","&&it==1&&o[tt].push(i),it<0&&(tt==i+1?i++:et=!1);if(f.push(g),rt=-1,ot==0&&f.length>0&&et)for(i=0;i<f.length-1;i++){if(i>0&&(k+="\\\\"),i==0){if(o[f[i]].length==1)p=[u.substr(f[i]+7,f[i+1]-f[i]-15)];else{for(p=[u.substring(f[i]+7,o[f[i]][1])],v=2;v<o[f[i]].length;v++)p.push(u.substring(o[f[i]][v-1]+1,o[f[i]][v]));p.push(u.substring(o[f[i]][o[f[i]].length-1]+1,f[i+1]-8))}for(k+="{",v=0;v<p.length;v++)k+="c";k+="}"}else if(o[f[i]].length==1)p=[u.substr(f[i]+8,f[i+1]-f[i]-16)];else{for(p=[u.substring(f[i]+8,o[f[i]][1])],v=2;v<o[f[i]].length;v++)p.push(u.substring(o[f[i]][v-1]+1,o[f[i]][v]));p.push(u.substring(o[f[i]][o[f[i]].length-1]+1,f[i+1]-8))}rt>0&&p.length!=rt?et=!1:rt==-1&&(rt=p.length),k+=p.join("&")}k+="\\end{matrix}",et&&(u=k)}n=r(n,c.input.length),typeof c.invisible=="boolean"&&c.invisible?(u+="\\right.",st=!0):(w="\\right"+e(c),u+=w,st=!0)}return a>0&&!st&&(u+="\\right."),[u,n]}function et(n){return(a=0,n=n.replace(/(&nbsp;|\u00a0|&#160;)/g,""),n=n.replace(/&gt;/g,">"),n=n.replace(/&lt;/g,"<"),n.match(/\S/)==null)?"":ft(n.replace(/^\s+/g,""),!1)[0]}function k(n){var t,r,u;return(n=n.replace(/(&nbsp;|\u00a0|&#160;)/g,""),n=n.replace(/&gt;/g,">"),n=n.replace(/&lt;/g,"<"),n.match(/\S/)==null)?document.createTextNode(" "):(t=et(n),typeof mathbg!="undefined"&&mathbg=="dark"&&(t="\\reverse "+t),i.mathcolor!=""&&(t="\\"+i.mathcolor+t),t=i.displaystyle?"\\displaystyle"+t:"\\textstyle"+t,t=t.replace("$","\\$"),r=document.createElement("img"),t=typeof encodeURIComponent=="function"?encodeURIComponent(t):escape(t),r.src=AMTcgiloc+"?"+t,r.style.verticalAlign="middle",r.className="AMimg",i.showasciiformulaonhover&&r.setAttribute("title",n.replace(/\s+/g," ")),u=document.createElement("span"),u.appendChild(r),u)}function dt(n,t){for(var r=document.createDocumentFragment(),e=!1,u,f,i=0;i<n.length;i++){if(e)r.appendChild(k(n[i]));else for(u=t?n[i].split("\n\n"):[n[i]],r.appendChild(document.createElement("span").appendChild(document.createTextNode(u[0]))),f=1;f<u.length;f++)r.appendChild(document.createElement("p")),r.appendChild(document.createElement("span").appendChild(document.createTextNode(u[f])));e=!e}return r}function rt(n,t){var e,r,f,o,u,s;if(n.childNodes.length==0)if((n.nodeType!=8||t)&&n.parentNode.nodeName!="form"&&n.parentNode.nodeName!="FORM"&&n.parentNode.nodeName!="textarea"&&n.parentNode.nodeName!="TEXTAREA"&&n.parentNode.nodeName!="pre"&&n.parentNode.nodeName!="PRE"){if(r=n.nodeValue,!(r==null)){for(r=r.replace(/\r\n\r\n/g,"\n\n"),i.doubleblankmathdelimiter&&(r=r.replace(/\x20\x20\./g," "+i.AMdelimiter1+"."),r=r.replace(/\x20\x20,/g," "+i.AMdelimiter1+","),r=r.replace(/\x20\x20/g," "+i.AMdelimiter1+" ")),r=r.replace(/\x20+/g," "),r=r.replace(/\s*\r\n/g," "),e=!1,i.AMusedelimiter2&&(r=r.replace(new RegExp(i.AMescape2,"g"),function(){return e=!0,"AMescape2"})),r=r.replace(new RegExp(i.AMescape1,"g"),function(){return e=!0,"AMescape1"}),i.AMusedelimiter2&&(r=r.replace(new RegExp(i.AMdelimiter2regexp,"g"),i.AMdelimiter1)),f=r.split(i.AMdelimiter1),u=0;u<f.length;u++)f[u]=i.AMusedelimiter2?f[u].replace(/AMescape2/g,i.AMdelimiter2).replace(/AMescape1/g,i.AMdelimiter1):f[u].replace(/AMescape1/g,i.AMdelimiter1);if(f.length>1||e)return o=dt(f,n.nodeType==8),s=o.childNodes.length,n.parentNode.replaceChild(o,n),s-1}}else return 0;else if(n.nodeName!="math")for(u=0;u<n.childNodes.length;u++)u+=rt(n.childNodes[u],t);return 0}function ot(n,t,r){var f,e,u;if(r!=null)for(f=document.getElementsByTagName("span"),u=0;u<f.length;u++)f[u].className=="AM"&&rt(f[u],t);else{try{e=n.innerHTML}catch(o){}(e==null||e.indexOf(i.AMdelimiter1)!=-1)&&rt(n,t)}}function ht(n){if(!st){st=!0;var r=document.getElementsByTagName("body")[0],t=document.getElementById(i.AMdocumentId);ot(t!=null?t:r,!1,n)}}function b(){i.translateOnLoad&&ht()}var i={translateOnLoad:!1,mathcolor:"",displaystyle:!0,showasciiformulaonhover:!0,decimalsign:".",AMdelimiter1:"`",AMescape1:"\\\\`",AMusedelimiter2:!1,AMdelimiter2:"$",AMescape2:"\\\\\\$",AMdelimiter2regexp:"\\$",AMdocumentId:null,doubleblankmathdelimiter:!1},n=0,t=1,v=2,h=3,p=4,s=5,g=6,o=7,f=8,nt=9,tt=10,ii={input:"sqrt",tag:"msqrt",output:"sqrt",tex:null,ttype:t},ti={input:"root",tag:"mroot",output:"root",tex:null,ttype:v},ni={input:"frac",tag:"mfrac",output:"/",tex:null,ttype:v},gt={input:"/",tag:"mfrac",output:"/",tex:null,ttype:h},kt={input:"stackrel",tag:"mover",output:"stackrel",tex:null,ttype:v},bt={input:"_",tag:"msub",output:"_",tex:null,ttype:h},wt={input:"^",tag:"msup",output:"^",tex:null,ttype:h},pt={input:"text",tag:"mtext",output:"text",tex:null,ttype:tt},yt={input:"mbox",tag:"mtext",output:"mbox",tex:null,ttype:tt},it={input:'"',tag:"mtext",output:"mbox",tex:null,ttype:tt},u=[{input:"alpha",tag:"mi",output:"α",tex:null,ttype:n},{input:"beta",tag:"mi",output:"β",tex:null,ttype:n},{input:"chi",tag:"mi",output:"χ",tex:null,ttype:n},{input:"delta",tag:"mi",output:"δ",tex:null,ttype:n},{input:"Delta",tag:"mo",output:"Δ",tex:null,ttype:n},{input:"epsi",tag:"mi",output:"ε",tex:"epsilon",ttype:n},{input:"varepsilon",tag:"mi",output:"ɛ",tex:null,ttype:n},{input:"eta",tag:"mi",output:"η",tex:null,ttype:n},{input:"gamma",tag:"mi",output:"γ",tex:null,ttype:n},{input:"Gamma",tag:"mo",output:"Γ",tex:null,ttype:n},{input:"iota",tag:"mi",output:"ι",tex:null,ttype:n},{input:"kappa",tag:"mi",output:"κ",tex:null,ttype:n},{input:"lambda",tag:"mi",output:"λ",tex:null,ttype:n},{input:"Lambda",tag:"mo",output:"Λ",tex:null,ttype:n},{input:"lamda",tag:"mi",output:"lambda",tex:null,ttype:f},{input:"Lamda",tag:"mi",output:"Lambda",tex:null,ttype:f},{input:"mu",tag:"mi",output:"μ",tex:null,ttype:n},{input:"nu",tag:"mi",output:"ν",tex:null,ttype:n},{input:"omega",tag:"mi",output:"ω",tex:null,ttype:n},{input:"Omega",tag:"mo",output:"Ω",tex:null,ttype:n},{input:"phi",tag:"mi",output:"φ",tex:null,ttype:n},{input:"varphi",tag:"mi",output:"ϕ",tex:null,ttype:n},{input:"Phi",tag:"mo",output:"Φ",tex:null,ttype:n},{input:"pi",tag:"mi",output:"π",tex:null,ttype:n},{input:"Pi",tag:"mo",output:"Π",tex:null,ttype:n},{input:"psi",tag:"mi",output:"ψ",tex:null,ttype:n},{input:"Psi",tag:"mi",output:"Ψ",tex:null,ttype:n},{input:"rho",tag:"mi",output:"ρ",tex:null,ttype:n},{input:"sigma",tag:"mi",output:"σ",tex:null,ttype:n},{input:"Sigma",tag:"mo",output:"Σ",tex:null,ttype:n},{input:"tau",tag:"mi",output:"τ",tex:null,ttype:n},{input:"theta",tag:"mi",output:"θ",tex:null,ttype:n},{input:"vartheta",tag:"mi",output:"ϑ",tex:null,ttype:n},{input:"Theta",tag:"mo",output:"Θ",tex:null,ttype:n},{input:"upsilon",tag:"mi",output:"υ",tex:null,ttype:n},{input:"xi",tag:"mi",output:"ξ",tex:null,ttype:n},{input:"Xi",tag:"mo",output:"Ξ",tex:null,ttype:n},{input:"zeta",tag:"mi",output:"ζ",tex:null,ttype:n},{input:"*",tag:"mo",output:"⋅",tex:"cdot",ttype:n},{input:"**",tag:"mo",output:"∗",tex:"ast",ttype:n},{input:"***",tag:"mo",output:"⋆",tex:"star",ttype:n},{input:"//",tag:"mo",output:"/",tex:"/",ttype:n,val:!0,notexcopy:!0},{input:"\\\\",tag:"mo",output:"\\",tex:"backslash",ttype:n},{input:"setminus",tag:"mo",output:"\\",tex:null,ttype:n},{input:"xx",tag:"mo",output:"×",tex:"times",ttype:n},{input:"|><",tag:"mo",output:"⋉",tex:"ltimes",ttype:n},{input:"><|",tag:"mo",output:"⋊",tex:"rtimes",ttype:n},{input:"|><|",tag:"mo",output:"⋈",tex:"bowtie",ttype:n},{input:"-:",tag:"mo",output:"÷",tex:"div",ttype:n},{input:"divide",tag:"mo",output:"-:",tex:null,ttype:f},{input:"@",tag:"mo",output:"∘",tex:"circ",ttype:n},{input:"o+",tag:"mo",output:"⊕",tex:"oplus",ttype:n},{input:"ox",tag:"mo",output:"⊗",tex:"otimes",ttype:n},{input:"o.",tag:"mo",output:"⊙",tex:"odot",ttype:n},{input:"sum",tag:"mo",output:"∑",tex:null,ttype:o},{input:"prod",tag:"mo",output:"∏",tex:null,ttype:o},{input:"^^",tag:"mo",output:"∧",tex:"wedge",ttype:n},{input:"^^^",tag:"mo",output:"⋀",tex:"bigwedge",ttype:o},{input:"vv",tag:"mo",output:"∨",tex:"vee",ttype:n},{input:"vvv",tag:"mo",output:"⋁",tex:"bigvee",ttype:o},{input:"nn",tag:"mo",output:"∩",tex:"cap",ttype:n},{input:"nnn",tag:"mo",output:"⋂",tex:"bigcap",ttype:o},{input:"uu",tag:"mo",output:"∪",tex:"cup",ttype:n},{input:"uuu",tag:"mo",output:"⋃",tex:"bigcup",ttype:o},{input:"overset",tag:"mover",output:"stackrel",tex:null,ttype:v},{input:"underset",tag:"munder",output:"stackrel",tex:null,ttype:v},{input:"!=",tag:"mo",output:"≠",tex:"ne",ttype:n},{input:":=",tag:"mo",output:":=",tex:null,ttype:n},{input:"lt",tag:"mo",output:"<",tex:null,ttype:n},{input:"gt",tag:"mo",output:">",tex:null,ttype:n},{input:"<=",tag:"mo",output:"≤",tex:"le",ttype:n},{input:"lt=",tag:"mo",output:"≤",tex:"leq",ttype:n},{input:"gt=",tag:"mo",output:"≥",tex:"geq",ttype:n},{input:">=",tag:"mo",output:"≥",tex:"ge",ttype:n},{input:"-<",tag:"mo",output:"≺",tex:"prec",ttype:n},{input:"-lt",tag:"mo",output:"≺",tex:null,ttype:n},{input:">-",tag:"mo",output:"≻",tex:"succ",ttype:n},{input:"-<=",tag:"mo",output:"⪯",tex:"preceq",ttype:n},{input:">-=",tag:"mo",output:"⪰",tex:"succeq",ttype:n},{input:"in",tag:"mo",output:"∈",tex:null,ttype:n},{input:"!in",tag:"mo",output:"∉",tex:"notin",ttype:n},{input:"sub",tag:"mo",output:"⊂",tex:"subset",ttype:n},{input:"sup",tag:"mo",output:"⊃",tex:"supset",ttype:n},{input:"sube",tag:"mo",output:"⊆",tex:"subseteq",ttype:n},{input:"supe",tag:"mo",output:"⊇",tex:"supseteq",ttype:n},{input:"-=",tag:"mo",output:"≡",tex:"equiv",ttype:n},{input:"~=",tag:"mo",output:"≅",tex:"stackrel{\\sim}{=}",ttype:n},{input:"cong",tag:"mo",output:"~=",tex:null,ttype:f},{input:"~~",tag:"mo",output:"≈",tex:"approx",ttype:n},{input:"prop",tag:"mo",output:"∝",tex:"propto",ttype:n},{input:"and",tag:"mtext",output:"and",tex:null,ttype:g},{input:"or",tag:"mtext",output:"or",tex:null,ttype:g},{input:"not",tag:"mo",output:"¬",tex:"neg",ttype:n},{input:"=>",tag:"mo",output:"⇒",tex:"Rightarrow",ttype:n},{input:"implies",tag:"mo",output:"=>",tex:null,ttype:f},{input:"if",tag:"mo",output:"if",tex:null,ttype:g},{input:"<=>",tag:"mo",output:"⇔",tex:"Leftrightarrow",ttype:n},{input:"iff",tag:"mo",output:"<=>",tex:null,ttype:f},{input:"AA",tag:"mo",output:"∀",tex:"forall",ttype:n},{input:"EE",tag:"mo",output:"∃",tex:"exists",ttype:n},{input:"_|_",tag:"mo",output:"⊥",tex:"bot",ttype:n},{input:"TT",tag:"mo",output:"⊤",tex:"top",ttype:n},{input:"|--",tag:"mo",output:"⊢",tex:"vdash",ttype:n},{input:"|==",tag:"mo",output:"⊨",tex:"models",ttype:n},{input:"(",tag:"mo",output:"(",tex:null,ttype:p,val:!0},{input:")",tag:"mo",output:")",tex:null,ttype:s,val:!0},{input:"[",tag:"mo",output:"[",tex:null,ttype:p,val:!0},{input:"]",tag:"mo",output:"]",tex:null,ttype:s,val:!0},{input:"{",tag:"mo",output:"{",tex:"lbrace",ttype:p},{input:"}",tag:"mo",output:"}",tex:"rbrace",ttype:s},{input:"|",tag:"mo",output:"|",tex:null,ttype:nt,val:!0},{input:"(:",tag:"mo",output:"〈",tex:"langle",ttype:p},{input:":)",tag:"mo",output:"〉",tex:"rangle",ttype:s},{input:"<<",tag:"mo",output:"〈",tex:"langle",ttype:p},{input:">>",tag:"mo",output:"〉",tex:"rangle",ttype:s},{input:"{:",tag:"mo",output:"{:",tex:null,ttype:p,invisible:!0},{input:":}",tag:"mo",output:":}",tex:null,ttype:s,invisible:!0},{input:"int",tag:"mo",output:"∫",tex:null,ttype:n},{input:"dx",tag:"mi",output:"{:d x:}",tex:null,ttype:f},{input:"dy",tag:"mi",output:"{:d y:}",tex:null,ttype:f},{input:"dz",tag:"mi",output:"{:d z:}",tex:null,ttype:f},{input:"dt",tag:"mi",output:"{:d t:}",tex:null,ttype:f},{input:"oint",tag:"mo",output:"∮",tex:null,ttype:n},{input:"del",tag:"mo",output:"∂",tex:"partial",ttype:n},{input:"grad",tag:"mo",output:"∇",tex:"nabla",ttype:n},{input:"+-",tag:"mo",output:"±",tex:"pm",ttype:n},{input:"O/",tag:"mo",output:"∅",tex:"emptyset",ttype:n},{input:"oo",tag:"mo",output:"∞",tex:"infty",ttype:n},{input:"aleph",tag:"mo",output:"ℵ",tex:null,ttype:n},{input:"...",tag:"mo",output:"...",tex:"ldots",ttype:n},{input:":.",tag:"mo",output:"∴",tex:"therefore",ttype:n},{input:"/_",tag:"mo",output:"∠",tex:"angle",ttype:n},{input:"/_\\",tag:"mo",output:"△",tex:"triangle",ttype:n},{input:"\\ ",tag:"mo",output:" ",tex:null,ttype:n,val:!0},{input:"frown",tag:"mo",output:"⌢",tex:null,ttype:n},{input:"%",tag:"mo",output:"%",tex:"%",ttype:n,notexcopy:!0},{input:"quad",tag:"mo",output:"  ",tex:null,ttype:n},{input:"qquad",tag:"mo",output:"    ",tex:null,ttype:n},{input:"cdots",tag:"mo",output:"⋯",tex:null,ttype:n},{input:"vdots",tag:"mo",output:"⋮",tex:null,ttype:n},{input:"ddots",tag:"mo",output:"⋱",tex:null,ttype:n},{input:"diamond",tag:"mo",output:"⋄",tex:null,ttype:n},{input:"square",tag:"mo",output:"□",tex:"boxempty",ttype:n},{input:"|__",tag:"mo",output:"⌊",tex:"lfloor",ttype:n},{input:"__|",tag:"mo",output:"⌋",tex:"rfloor",ttype:n},{input:"|~",tag:"mo",output:"⌈",tex:"lceil",ttype:n},{input:"lceiling",tag:"mo",output:"|~",tex:null,ttype:f},{input:"~|",tag:"mo",output:"⌉",tex:"rceil",ttype:n},{input:"rceiling",tag:"mo",output:"~|",tex:null,ttype:f},{input:"CC",tag:"mo",output:"ℂ",tex:"mathbb{C}",ttype:n,notexcopy:!0},{input:"NN",tag:"mo",output:"ℕ",tex:"mathbb{N}",ttype:n,notexcopy:!0},{input:"QQ",tag:"mo",output:"ℚ",tex:"mathbb{Q}",ttype:n,notexcopy:!0},{input:"RR",tag:"mo",output:"ℝ",tex:"mathbb{R}",ttype:n,notexcopy:!0},{input:"ZZ",tag:"mo",output:"ℤ",tex:"mathbb{Z}",ttype:n,notexcopy:!0},{input:"f",tag:"mi",output:"f",tex:null,ttype:t,func:!0,val:!0},{input:"g",tag:"mi",output:"g",tex:null,ttype:t,func:!0,val:!0},{input:"''",tag:"mo",output:"''",tex:null,val:!0},{input:"'''",tag:"mo",output:"'''",tex:null,val:!0},{input:"''''",tag:"mo",output:"''''",tex:null,val:!0},{input:"lim",tag:"mo",output:"lim",tex:null,ttype:o},{input:"Lim",tag:"mo",output:"Lim",tex:null,ttype:o},{input:"sin",tag:"mo",output:"sin",tex:null,ttype:t,func:!0},{input:"cos",tag:"mo",output:"cos",tex:null,ttype:t,func:!0},{input:"tan",tag:"mo",output:"tan",tex:null,ttype:t,func:!0},{input:"arcsin",tag:"mo",output:"arcsin",tex:null,ttype:t,func:!0},{input:"arccos",tag:"mo",output:"arccos",tex:null,ttype:t,func:!0},{input:"arctan",tag:"mo",output:"arctan",tex:null,ttype:t,func:!0},{input:"sinh",tag:"mo",output:"sinh",tex:null,ttype:t,func:!0},{input:"cosh",tag:"mo",output:"cosh",tex:null,ttype:t,func:!0},{input:"tanh",tag:"mo",output:"tanh",tex:null,ttype:t,func:!0},{input:"cot",tag:"mo",output:"cot",tex:null,ttype:t,func:!0},{input:"coth",tag:"mo",output:"coth",tex:null,ttype:t,func:!0},{input:"sech",tag:"mo",output:"sech",tex:null,ttype:t,func:!0},{input:"csch",tag:"mo",output:"csch",tex:null,ttype:t,func:!0},{input:"sec",tag:"mo",output:"sec",tex:null,ttype:t,func:!0},{input:"csc",tag:"mo",output:"csc",tex:null,ttype:t,func:!0},{input:"log",tag:"mo",output:"log",tex:null,ttype:t,func:!0},{input:"ln",tag:"mo",output:"ln",tex:null,ttype:t,func:!0},{input:"abs",tag:"mo",output:"abs",tex:null,ttype:t,notexcopy:!0,rewriteleftright:["|","|"]},{input:"norm",tag:"mo",output:"norm",tex:null,ttype:t,notexcopy:!0,rewriteleftright:["\\|","\\|"]},{input:"floor",tag:"mo",output:"floor",tex:null,ttype:t,notexcopy:!0,rewriteleftright:["\\lfloor","\\rfloor"]},{input:"ceil",tag:"mo",output:"ceil",tex:null,ttype:t,notexcopy:!0,rewriteleftright:["\\lceil","\\rceil"]},{input:"Sin",tag:"mo",output:"sin",tex:null,ttype:t,func:!0},{input:"Cos",tag:"mo",output:"cos",tex:null,ttype:t,func:!0},{input:"Tan",tag:"mo",output:"tan",tex:null,ttype:t,func:!0},{input:"Arcsin",tag:"mo",output:"arcsin",tex:null,ttype:t,func:!0},{input:"Arccos",tag:"mo",output:"arccos",tex:null,ttype:t,func:!0},{input:"Arctan",tag:"mo",output:"arctan",tex:null,ttype:t,func:!0},{input:"Sinh",tag:"mo",output:"sinh",tex:null,ttype:t,func:!0},{input:"Sosh",tag:"mo",output:"cosh",tex:null,ttype:t,func:!0},{input:"Tanh",tag:"mo",output:"tanh",tex:null,ttype:t,func:!0},{input:"Cot",tag:"mo",output:"cot",tex:null,ttype:t,func:!0},{input:"Sec",tag:"mo",output:"sec",tex:null,ttype:t,func:!0},{input:"Csc",tag:"mo",output:"csc",tex:null,ttype:t,func:!0},{input:"Log",tag:"mo",output:"log",tex:null,ttype:t,func:!0},{input:"Ln",tag:"mo",output:"ln",tex:null,ttype:t,func:!0},{input:"Abs",tag:"mo",output:"abs",tex:null,ttype:t,notexcopy:!0,rewriteleftright:["|","|"]},{input:"det",tag:"mo",output:"det",tex:null,ttype:t,func:!0},{input:"exp",tag:"mo",output:"exp",tex:null,ttype:t,func:!0},{input:"dim",tag:"mo",output:"dim",tex:null,ttype:n},{input:"mod",tag:"mo",output:"mod",tex:"text{mod}",ttype:n,notexcopy:!0},{input:"gcd",tag:"mo",output:"gcd",tex:null,ttype:t,func:!0},{input:"lcm",tag:"mo",output:"lcm",tex:"text{lcm}",ttype:t,func:!0,notexcopy:!0},{input:"lub",tag:"mo",output:"lub",tex:null,ttype:n},{input:"glb",tag:"mo",output:"glb",tex:null,ttype:n},{input:"min",tag:"mo",output:"min",tex:null,ttype:o},{input:"max",tag:"mo",output:"max",tex:null,ttype:o},{input:"uarr",tag:"mo",output:"↑",tex:"uparrow",ttype:n},{input:"darr",tag:"mo",output:"↓",tex:"downarrow",ttype:n},{input:"rarr",tag:"mo",output:"→",tex:"rightarrow",ttype:n},{input:"->",tag:"mo",output:"→",tex:"to",ttype:n},{input:">->",tag:"mo",output:"↣",tex:"rightarrowtail",ttype:n},{input:"->>",tag:"mo",output:"↠",tex:"twoheadrightarrow",ttype:n},{input:">->>",tag:"mo",output:"⤖",tex:"twoheadrightarrowtail",ttype:n},{input:"|->",tag:"mo",output:"↦",tex:"mapsto",ttype:n},{input:"larr",tag:"mo",output:"←",tex:"leftarrow",ttype:n},{input:"harr",tag:"mo",output:"↔",tex:"leftrightarrow",ttype:n},{input:"rArr",tag:"mo",output:"⇒",tex:"Rightarrow",ttype:n},{input:"lArr",tag:"mo",output:"⇐",tex:"Leftarrow",ttype:n},{input:"hArr",tag:"mo",output:"⇔",tex:"Leftrightarrow",ttype:n},ii,ti,ni,gt,kt,bt,wt,{input:"cancel",tag:"menclose",output:"cancel",tex:null,ttype:t},{input:"Sqrt",tag:"msqrt",output:"sqrt",tex:null,ttype:t},{input:"hat",tag:"mover",output:"^",tex:null,ttype:t,acc:!0},{input:"bar",tag:"mover",output:"¯",tex:"overline",ttype:t,acc:!0},{input:"vec",tag:"mover",output:"→",tex:null,ttype:t,acc:!0},{input:"tilde",tag:"mover",output:"~",tex:null,ttype:t,acc:!0},{input:"dot",tag:"mover",output:".",tex:null,ttype:t,acc:!0},{input:"ddot",tag:"mover",output:"..",tex:null,ttype:t,acc:!0},{input:"ul",tag:"munder",output:"̲",tex:"underline",ttype:t,acc:!0},{input:"ubrace",tag:"munder",output:"⏟",tex:"underbrace",ttype:t,acc:!0},{input:"obrace",tag:"mover",output:"⏞",tex:"overbrace",ttype:t,acc:!0},pt,yt,it,{input:"color",tag:"mstyle",ttype:v},{input:"bb",tag:"mstyle",atname:"mathvariant",atval:"bold",output:"bb",tex:"mathbf",ttype:t,notexcopy:!0},{input:"mathbf",tag:"mstyle",atname:"mathvariant",atval:"bold",output:"mathbf",tex:null,ttype:t},{input:"sf",tag:"mstyle",atname:"mathvariant",atval:"sans-serif",output:"sf",tex:"mathsf",ttype:t,notexcopy:!0},{input:"mathsf",tag:"mstyle",atname:"mathvariant",atval:"sans-serif",output:"mathsf",tex:null,ttype:t},{input:"bbb",tag:"mstyle",atname:"mathvariant",atval:"double-struck",output:"bbb",tex:"mathbb",ttype:t,notexcopy:!0},{input:"mathbb",tag:"mstyle",atname:"mathvariant",atval:"double-struck",output:"mathbb",tex:null,ttype:t},{input:"cc",tag:"mstyle",atname:"mathvariant",atval:"script",output:"cc",tex:"mathcal",ttype:t,notexcopy:!0},{input:"mathcal",tag:"mstyle",atname:"mathvariant",atval:"script",output:"mathcal",tex:null,ttype:t},{input:"tt",tag:"mstyle",atname:"mathvariant",atval:"monospace",output:"tt",tex:"mathtt",ttype:t,notexcopy:!0},{input:"mathtt",tag:"mstyle",atname:"mathvariant",atval:"monospace",output:"mathtt",tex:null,ttype:t},{input:"fr",tag:"mstyle",atname:"mathvariant",atval:"fraktur",output:"fr",tex:"mathfrak",ttype:t,notexcopy:!0},{input:"mathfrak",tag:"mstyle",atname:"mathvariant",atval:"fraktur",output:"mathfrak",tex:null,ttype:t}],c=[],a,lt,d,ui,st=!1,fi=!0,ct;vt(),window.translate=ht,window.AMTconfig=i,window.AMprocessNode=ot,window.AMparseMath=k,window.AMTparseMath=k,window.AMTparseAMtoTeX=et,typeof window.addEventListener!="undefined"?window.addEventListener("load",b,!1):typeof document.addEventListener!="undefined"?document.addEventListener("load",b,!1):typeof window.attachEvent!="undefined"?window.attachEvent("onload",b):typeof window.onload=="function"?(ct=onload,window.onload=function(){ct(),b()}):window.onload=b})();