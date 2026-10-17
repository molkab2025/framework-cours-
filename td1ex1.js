destinations.forEach(d => 
    console.log(d.ville));
    const villes=destinations.map(d=>d.villes);
     console.log(villes);
const prix1500 = destinations.filter(d=> d.prix<1500);
const destinations_id3= destinations.find( d=>d.id===3);
  console.log(destinations_id3);
const destinations_id33=destinations.findIndex(d=>d.id===3);
prix1500[0].prix+=1000;
  console.log(prix1500);
  console.log(destinations);
  d =>(d.prix<1500);
  const tokyo=destinations.findIndex(d=>d.ville==="tokyo");
  console.log(tokyo);
  const t = destinations.reduce((s,d)=>s=s+d.prix,0);