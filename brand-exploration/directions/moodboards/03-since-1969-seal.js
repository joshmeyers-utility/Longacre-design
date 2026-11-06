// Direction 03 emblem renderer: the seven-ray fan (one ray per GE Vernova 7HA.02 turbine)
// and the campus seal. Mood-board helper only; production would ship static SVG files.
(function(){
 var NS='http://www.w3.org/2000/svg';
 function fan(cx,cy,r0,r1,w0,w1,col){var s='';for(var k=-3;k<=3;k++){var a=(90+k*24)*Math.PI/180,ux=Math.cos(a),uy=-Math.sin(a),px=-uy,py=ux;
  var p=[[cx+ux*r0+px*w0/2,cy+uy*r0+py*w0/2],[cx+ux*r1+px*w1/2,cy+uy*r1+py*w1/2],[cx+ux*r1-px*w1/2,cy+uy*r1-py*w1/2],[cx+ux*r0-px*w0/2,cy+uy*r0-py*w0/2]];
  s+='<polygon fill="'+col+'" points="'+p.map(function(q){return q[0].toFixed(2)+','+q[1].toFixed(2)}).join(' ')+'"/>';}return s;}
 var C={gold:['#143251','#D8B471','#D8B471'],navy:['none','#143251','#143251'],cream:['none','#F3F1D0','#F3F1D0'],ink:['#F3F1D0','#143251','#143251'],emboss:['none','#E4E1BC','#E4E1BC'],goldline:['none','#D8B471','#D8B471'],onGold:['#D8B471','#143251','#143251']};
 document.querySelectorAll('svg[data-seal]').forEach(function(el,i){var c=C[el.dataset.seal]||C.gold,id='ring'+i,
  t1=el.dataset.top||'HOMER CITY ENERGY CAMPUS',t2=el.dataset.bottom||'INDIANA COUNTY · PENNSYLVANIA',y1=el.dataset.l||'19',y2=el.dataset.r||'69';
  var emb=el.dataset.seal==='emboss'?' filter="url(#emb'+i+')"':'';
  el.innerHTML=(emb?'<defs><filter id="emb'+i+'"><feDropShadow dx="-1" dy="-1" stdDeviation=".6" flood-color="#fff" flood-opacity=".9"/><feDropShadow dx="1.2" dy="1.4" stdDeviation="1" flood-color="#8E8A5C" flood-opacity=".55"/></filter></defs>':'')+
  '<g'+emb+'><circle cx="100" cy="100" r="98" fill="'+c[0]+'"/><circle cx="100" cy="100" r="93" fill="none" stroke="'+c[1]+'" stroke-width="2.6"/><circle cx="100" cy="100" r="66" fill="none" stroke="'+c[1]+'" stroke-width="1.4"/>'+
  '<path id="'+id+'a" d="M 22 100 A 78 78 0 0 1 178 100" fill="none"/><path id="'+id+'b" d="M 17 100 A 83 83 0 0 0 183 100" fill="none"/>'+
  '<text font-family="Cormorant" font-weight="600" font-size="12" letter-spacing="1.5" fill="'+c[2]+'"><textPath href="#'+id+'a" startOffset="50%" text-anchor="middle">'+t1+'</textPath></text>'+
  '<text font-family="Cormorant" font-weight="600" font-size="10.5" letter-spacing="1.3" fill="'+c[2]+'"><textPath href="#'+id+'b" startOffset="50%" text-anchor="middle">'+t2+'</textPath></text>'+
  '<circle cx="21" cy="100" r="2.2" fill="'+c[1]+'"/><circle cx="179" cy="100" r="2.2" fill="'+c[1]+'"/>'+
  fan(100,116,9,50,1.4,9.5,c[1])+'<rect x="52" y="117" width="96" height="1.6" fill="'+c[1]+'"/>'+
  '<text x="100" y="146" text-anchor="middle" font-family="Cormorant" font-style="italic" font-weight="500" font-size="22" fill="'+c[2]+'">'+y1+' <tspan font-style="normal" font-size="12" dy="-3">✦</tspan> <tspan dy="3">'+y2+'</tspan></text></g>';});
 document.querySelectorAll('svg[data-fan]').forEach(function(el){var col=el.dataset.fan;el.setAttribute('viewBox','0 0 200 110');el.innerHTML=fan(100,104,12,100,2.4,20,col)+'<rect x="0" y="105" width="200" height="3" fill="'+col+'"/>';});
})();
