/* Central vehicle configuration for the AVINGO demo. */
const VEHICLE={name:'Škoda Octavia 2.0 DSG',plate:'ZG-5555-XX'};
const VTEXT={hr:['Marka','Model','Godina','Mjenjač','Gorivo','Registracija'],en:['Make','Model','Year','Transmission','Fuel','Registration'],de:['Marke','Modell','Jahr','Getriebe','Kraftstoff','Kennzeichen'],it:['Marca','Modello','Anno','Cambio','Carburante','Targa'],sl:['Znamka','Model','Leto','Menjalnik','Gorivo','Registracija'],es:['Marca','Modelo','Año','Transmisión','Combustible','Matrícula']};
const avingoRender=render;
render=function(){
  avingoRender();
  const labels=VTEXT[lang]||VTEXT.hr;
  document.querySelectorAll('#app *').forEach(node=>{
    if(node.childElementCount===0&&node.textContent.includes('Škoda Octavia 1.5 TSI')) node.textContent=node.textContent.replaceAll('Škoda Octavia 1.5 TSI',VEHICLE.name);
    if(node.childElementCount===0&&node.textContent==='Ivan Horvat · Škoda Octavia') node.textContent='Ivan Horvat · '+VEHICLE.name;
  });
  document.querySelectorAll('.vehicle img').forEach(image=>{image.src='assets/skoda-octavia-2-0-dsg.png';image.alt=VEHICLE.name});
  if(screen===2||screen===8) document.querySelectorAll('.vehicle').forEach(card=>card.insertAdjacentHTML('afterend',`<section class="vehicle-specs" aria-label="${labels[0]}"><div><span>${labels[0]}</span><b>Škoda</b></div><div><span>${labels[1]}</span><b>Octavia 2.0 DSG</b></div><div><span>${labels[2]}</span><b>2024</b></div><div><span>${labels[3]}</span><b>DSG automatski</b></div><div><span>${labels[4]}</span><b>Benzin</b></div><div><span>${labels[5]}</span><b>${VEHICLE.plate}</b></div></section>`));
};
downloadSummary=function(){
  const data=`AVINGO RENT A CAR\nRezervacija #${S.num}\nKorisnik: Ivan Horvat\nVozilo: ${VEHICLE.name} · ${VEHICLE.plate}\nPreuzimanje: 12.09.2026. 10:00\nVraćanje: 15.09.2026. 10:00\nKilometraža: ${S.km} km\nGorivo: ${S.fuel}`;
  const link=document.createElement('a');link.href=URL.createObjectURL(new Blob([data],{type:'text/plain'}));link.download=`AVINGO-${S.num}-zapisnik.txt`;link.click();URL.revokeObjectURL(link.href);
};
document.head.insertAdjacentHTML('beforeend',`<style>.vehicle-specs{display:grid;grid-template-columns:1fr 1fr;border:1px solid var(--line);border-radius:14px;overflow:hidden;margin:-5px 0 15px}.vehicle-specs div{padding:11px;border-right:1px solid var(--line);border-bottom:1px solid var(--line)}.vehicle-specs div:nth-child(even){border-right:0}.vehicle-specs div:nth-last-child(-n+2){border-bottom:0}.vehicle-specs span{display:block;color:var(--muted);font-size:12px}.vehicle-specs b{font-size:14px}</style>`);
render();
