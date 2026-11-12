var $=function(s){return Array.prototype.slice.call(document.querySelectorAll(s))};
try{var io=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting){x.target.classList.add("on");io.unobserve(x.target)}})},{threshold:.1});$(".rv").forEach(function(el){io.observe(el)})}catch(e){$(".rv").forEach(function(el){el.classList.add("on")})}
var r=document.getElementById("rot");
if(r){var w=["Traffic","Water","the Environment","Sustainable Cities"],i=0;setInterval(function(){r.style.opacity=0;setTimeout(function(){i=(i+1)%w.length;r.textContent=w[i];r.style.opacity=1},400)},2600)}
var f=document.getElementById("f");
if(f)f.onsubmit=function(e){e.preventDefault();var n=document.getElementById("n").value,m=document.getElementById("m").value;location.href="mailto:irfan_59240100017@nub.ac.bd?subject="+encodeURIComponent("Message from "+n)+"&body="+encodeURIComponent(m+"\n\n— "+n)};
var lb=document.createElement("div");lb.id="lb";lb.innerHTML='<button id="lx" aria-label="Close">×</button><button id="lp" aria-label="Previous">‹</button><img alt=""><button id="ln" aria-label="Next">›</button>';document.body.appendChild(lb);
var cur=[],ci=0,li=lb.querySelector("img");
function show(){li.src=cur[ci].href;li.alt=cur[ci].getAttribute("data-alt")||""}
function open(a){cur=$('a[data-g="'+a.getAttribute("data-g")+'"]');ci=cur.indexOf(a);show();lb.classList.add("on")}
$("a[data-g]").forEach(function(a){a.onclick=function(e){e.preventDefault();open(a)}});
function step(d){ci=(ci+d+cur.length)%cur.length;show()}
document.getElementById("lx").onclick=function(){lb.classList.remove("on")};
document.getElementById("lp").onclick=function(){step(-1)};document.getElementById("ln").onclick=function(){step(1)};
lb.onclick=function(e){if(e.target===lb)lb.classList.remove("on")};
document.onkeydown=function(e){if(!lb.classList.contains("on"))return;if(e.key==="Escape")lb.classList.remove("on");if(e.key==="ArrowLeft")step(-1);if(e.key==="ArrowRight")step(1)};
$(".slider").forEach(function(s){var t=s.querySelector(".track"),n=t.children.length,k=0,d=s.querySelector(".dots"),tm;
for(var j=0;j<n;j++){var b=document.createElement("i");b.setAttribute("data-i",j);b.onclick=function(){go(+this.getAttribute("data-i"))};d.appendChild(b)}
function go(x){k=(x+n)%n;t.style.transform="translateX(-"+k*100+"%)";Array.prototype.forEach.call(d.children,function(c,q){c.className=q===k?"on":""});reset()}
function reset(){clearInterval(tm);tm=setInterval(function(){go(k+1)},4000)}
s.querySelector(".prev").onclick=function(){go(k-1)};s.querySelector(".next").onclick=function(){go(k+1)};go(0)});
