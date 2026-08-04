const trips = [
  {
    id:'2026-09-22', label:'22.9', weekday:'יום ג׳', title:'בודפשט: נחיתה, מרכז העיר ואיסוף קרן ומאי',
    color:'#6f42c1', cost:'ללא עלות כניסה קבועה', note:'יום לוגיסטי. לשמור זמן לאיסוף קרן ומאי סביב 22:00 ולהימנע מהסתבכות עם חניה ברחוב.',
    maps:'https://www.google.com/maps/dir/Budapest+Airport/Airport+Hotel+Budapest/Bazilika+Garazs+Budapest/Budapest+Airport/Airport+Hotel+Budapest',
    stops:[
      s('Budapest Airport','נחיתה ואיסוף הרכב','12:20','45–75 דק׳','Klass Wagen Budapest Airport',47.4385,19.2523,'ביקורת דרכונים, מזוודות, שאטל ואיסוף הרכב.'),
      s('Airport Hotel Budapest','צ׳ק־אין והשארת מזוודות','14:15','30–45 דק׳','Airport Hotel Budapest',47.4302,19.2801,'התרעננות לפני היציאה למרכז העיר.'),
      s('מרכז בודפשט','בזיליקה, הדנובה, ואצי וארוחת ערב','15:15','4–5 ש׳','Bazilika Garázs, Budapest',47.4991,19.0538,'חניה בחניון מסודר במרכז.'),
      s('Budapest Airport','איסוף קרן ומאי','21:30','60–90 דק׳','Budapest Airport Terminal 2',47.4385,19.2523,'לעקוב אחר שעת הנחיתה בפועל.'),
      s('Airport Hotel Budapest','לינה','23:15','לילה','Airport Hotel Budapest',47.4302,19.2801,'להכין מים וכריכים ליציאה למחרת.')
    ]
  },
  {
    id:'2026-09-23', label:'23.9', weekday:'יום ד׳', title:'דרך נופית לטטרה: Hollókő, ויאדוקט Telgárt והגעה למלון',
    color:'#2f7d32', cost:'כ־0 € ל־4 (לא כולל אוכל וחניה)', note:'שתי עצירות צילום מיוחדות בדרך. המטרה להגיע ל־Hotel International סביב 15:30–16:00.',
    maps:'https://www.google.com/maps/dir/Airport+Hotel+Budapest/Holl%C3%B3k%C5%91+%C3%93falu/Chmaro%C5%A1sk%C3%BD+viadukt,+Telg%C3%A1rt/Hotel+International,+Ve%C4%BEk%C3%A1+Lomnica',
    stops:[
      s('Airport Hotel Budapest','יציאה צפונה','08:30','יציאה','Airport Hotel Budapest',47.4302,19.2801,'לוודא וינייטה סלובקית ומסמכי רכב.'),
      s('Hollókő Ófalu','כפר מסורתי, קפה וצילום','10:00','25–30 דק׳','Hollókő Ófalu, Hungary',47.9986,19.5912,'בתים לבנים ורחוב עתיק. עצירה קצרה בלבד.'),
      s('Chmarošský viadukt','גשר רכבת אבן בנוף הררי','13:15','20–25 דק׳','Chmarošský viadukt, Telgárt',48.8519,20.1810,'ללא מסלול ארוך; עצירת צילום.'),
      s('Hotel International','צ׳ק־אין, ספא וארוחת ערב','15:45','ערב','Hotel International, Veľká Lomnica',49.1172,20.3690,'לבקש קומה גבוהה, מרפסת ונוף להרים.')
    ]
  },
  {
    id:'2026-09-24', label:'24.9', weekday:'יום ה׳', title:'צפון הטטרה: Bachledka, Ždiar ותצפיות',
    color:'#e88616', cost:'כ־120 € ל־4', note:'הפעילות ב־Bachledka תלויה ברוח ובמזג האוויר. מערת Belianska נשארת חלופת גשם.',
    maps:'https://www.google.com/maps/dir/Hotel+International,+Ve%C4%BEk%C3%A1+Lomnica/Bachledka+Ski+and+Sun/Zdiar/Obria+lavicka+Zdiar/Strednica+Zdiar/Hotel+International,+Ve%C4%BEk%C3%A1+Lomnica',
    stops:[
      s('Hotel International','יציאה','08:00','יציאה','Hotel International, Veľká Lomnica',49.1172,20.3690,'ארוחת בוקר ויציאה מוקדמת.'),
      s('Bachledka Ski & Sun','רכבל, שביל צמרות ומגדל תצפית','08:30','2–2.5 ש׳','Bachledka Ski & Sun',49.2824,20.3138,'מומלץ להזמין מראש.'),
      s('Ždiar','כפר הררי, קפה וצילומים','11:30','45–60 דק׳','Ždiar, Slovakia',49.2711,20.2622,'אין צורך במסלול ארוך בתוך הכפר.'),
      s('Obria lavička','ספסל ענק ונקודת צילום','12:45','20–30 דק׳','Obria lavička Ždiar',49.2761,20.2606,'עצירה קלה ונוחה.'),
      s('Strednica Viewpoint','תצפית על Belianske Tatras','13:30','30–45 דק׳','Strednica Ždiar',49.2867,20.2867,'כמעט ללא הליכה.'),
      s('Hotel International','ספא וארוחת ערב','16:00','ערב','Hotel International, Veľká Lomnica',49.1172,20.3690,'אפשר לשלב ערב קצר בטטרנסקה לומניצה.')
    ]
  },
  {
    id:'2026-09-25', label:'25.9', weekday:'יום ו׳', title:'Suchá Belá: נקיק הסולמות ולאחריו Tatrabob',
    color:'#b71f2b', cost:'כ־60–75 € ל־4', note:'Suchá Belá הוא אחד משיאי הטיול. נעלי הליכה סגורות חובה; לא להיכנס בגשם חזק.',
    maps:'https://www.google.com/maps/dir/Hotel+International,+Ve%C4%BEk%C3%A1+Lomnica/Podlesok/Sucha+Bela/Tatrabob+Tatranska+Lomnica/Hotel+International,+Ve%C4%BEk%C3%A1+Lomnica',
    stops:[
      s('Hotel International','יציאה מוקדמת','07:00','יציאה','Hotel International, Veľká Lomnica',49.1172,20.3690,'להגיע לפני העומס על הסולמות.'),
      s('Podlesok','חניה ונקודת התחלה','07:45','20–30 דק׳','Podlesok, Slovenský raj',48.9639,20.3861,'התארגנות ותחילת המסלול.'),
      s('Suchá Belá Gorge','נקיק, מפלים, גשרי עץ וסולמות','09:00','4–5 ש׳','Suchá Belá, Podlesok',48.9497,20.3908,'מסלול חד־כיווני.'),
      s('Podlesok','ארוחת צהריים ומנוחה','14:00','45–60 דק׳','Podlesok',48.9639,20.3861,'לא להתעכב אם רוצים להספיק את המגלשה.'),
      s('Tatrabob','מגלשת הרים על מסילה','15:15','45–60 דק׳','Tatrabob Tatranská Lomnica',49.1652,20.2812,'לבדוק שעות פעילות סמוך ליום.'),
      s('Hotel International','ספא וארוחת ערב','16:30','ערב','Hotel International, Veľká Lomnica',49.1172,20.3690,'אם המסלול מתארך, מדלגים על המגלשה.')
    ]
  },
  {
    id:'2026-09-26', label:'26.9', weekday:'שבת', title:'הטטרה הנמוכים: Jasná, Chopok, המערה, Liptovská Mara ו־Hrabovo',
    color:'#0f6db3', cost:'בסיס כ־180 € ל־4; עם Hrabovo בתשלום עד כ־290 €', note:'Hrabovo הוא אופציונלי. מחליטים במקום לפי השעה, מזג האוויר והכוח.',
    maps:'https://www.google.com/maps/dir/Hotel+International,+Ve%C4%BEk%C3%A1+Lomnica/Jasna+Biela+Put/Chopok/Demanovska+jaskyna+slobody/Liptovska+Mara/Hrabovo/Hotel+International,+Ve%C4%BEk%C3%A1+Lomnica',
    stops:[
      s('Hotel International','יציאה','07:15','יציאה','Hotel International, Veľká Lomnica',49.1172,20.3690,'לבדוק בבוקר רוח ופעילות רכבלים.'),
      s('Jasná – Biela Púť','מרכז הרכבלים והתארגנות','08:30','20–30 דק׳','Jasná Biela Púť',48.9708,19.5850,'חניה לפי התעריף במקום.'),
      s('Chopok','עלייה ברכבלים ותצפית בגובה 2,024 מ׳','09:15','2.5–3 ש׳','Chopok',48.9435,19.5914,'בפסגה קר גם ביום נעים.'),
      s('Demänovská Cave of Liberty','מערת נטיפים ונהר תת־קרקעי','12:45','1.5–2 ש׳','Demänovská jaskyňa slobody',48.9982,19.5856,'להגיע לפני שעת הסיור; יש מדרגות.'),
      s('Liptovská Mara','אגם, מרינה, תצפיות וקפה','15:15','45–75 דק׳','Liptovská Mara – Liptovský Trnovec',49.1054,19.5407,'עצירה רגועה לקראת סוף היום.'),
      s('Hrabovo','אגם, Malinô Brdo, Mountain Carts או Tarzania','16:30','1–2 ש׳','Hrabovo, Ružomberok',49.0588,19.2684,'אופציונלי בלבד; חלק מהפעילויות בתשלום.',true),
      s('Hotel International','חזרה, ספא וארוחת ערב','18:30','ערב','Hotel International, Veľká Lomnica',49.1172,20.3690,'אם מוותרים על Hrabovo חוזרים מוקדם יותר.')
    ]
  },
  {
    id:'2026-09-27', label:'27.9', weekday:'יום א׳', title:'יום מעבר: הטטרה הנמוכים, בנסקה ביסטריצה, עיקול הדנובה ואאוטלט',
    color:'#008c95', cost:'כ־0 € ל־4, לא כולל קניות ואוכל', note:'אם Liptovská Mara בוצע ביום 26, אפשר לדלג עליו. Visegrád היא עצירת הוואו של הדרך.',
    maps:'https://www.google.com/maps/dir/Hotel+International,+Ve%C4%BEk%C3%A1+Lomnica/Liptovsk%C3%A1+Mara,+Liptovsk%C3%BD+Trnovec/Donovaly/N%C3%A1mestie+SNP,+Bansk%C3%A1+Bystrica/Zsitvay-kil%C3%A1t%C3%B3,+Visegr%C3%A1d/Premier+Outlet+Budapest/La+Prima+Hotel+Budapest',
    stops:[
      s('Hotel International','צ׳ק־אאוט ויציאה','07:00','יציאה','Hotel International, Veľká Lomnica',49.1172,20.3690,'להעמיס את הרכב בערב הקודם.'),
      s('Liptovská Mara','עצירת בוקר לצילום וקפה','08:15','20–30 דק׳','Liptovská Mara – Liptovský Trnovec',49.1054,19.5407,'לדלג אם בוצע ביום הקודם.',true),
      s('Donovaly','מעבר הרים ועיירת נופש','09:30','20–30 דק׳','Donovaly, Slovakia',48.8778,19.2267,'עצירת התרעננות בלבד.'),
      s('Banská Bystrica','כיכר SNP, מדרחוב וארוחת צהריים','10:45','1–1.25 ש׳','Námestie SNP, Banská Bystrica',48.7353,19.1451,'לא להיכנס למוזיאונים כדי לשמור זמן.'),
      s('Visegrád – Zsitvay Lookout','תצפית פנורמית על עיקול הדנובה','14:00','25–35 דק׳','Zsitvay-kilátó, Visegrád',47.7947,18.9896,'עצירת הוואו של הדרך.'),
      s('Premier Outlet Budapest','קניות','17:15','1.25–1.75 ש׳','Premier Outlet Budapest',47.4616,18.8673,'לבדוק שעות פתיחה ביום ראשון.'),
      s('La Prima Hotel Budapest','צ׳ק־אין ולינה','19:30','ערב','La Prima Hotel Budapest',47.4933,19.0519,'חניה בחניון שנבחר מראש.')
    ]
  },
  {
    id:'2026-09-28', label:'28.9', weekday:'יום ב׳', title:'בודפשט בבוקר, טיסת קרן ומאי והמשך ערב בעיר',
    color:'#8c2ea6', cost:'ללא עלות כניסה קבועה', note:'קרן ומאי טסות ב־15:30. ניסים ואלעד ממשיכים לערב גמיש בבודפשט.',
    maps:'https://www.google.com/maps/dir/La+Prima+Hotel+Budapest/Shoes+on+the+Danube+Bank/St+Stephens+Basilica/Budapest+Airport/La+Prima+Hotel+Budapest',
    stops:[
      s('La Prima Hotel','יציאה ברגל/תחבורה','08:15','יציאה','La Prima Hotel Budapest',47.4933,19.0519,'אין צורך להזיז את הרכב במרכז.'),
      s('Shoes on the Danube Bank','אנדרטת הנעליים ותצפית לפרלמנט','08:30','1–1.5 ש׳','Shoes on the Danube Bank',47.5039,19.0449,'טיול לאורך הדנובה.'),
      s('St. Stephen’s Basilica','כיכר הבזיליקה, קפה ותצפית','10:15','45–60 דק׳','Szent István Bazilika',47.5009,19.0539,'רק אם אין תור ארוך.'),
      s('La Prima Hotel','איסוף מזוודות','11:30','30 דק׳','La Prima Hotel Budapest',47.4933,19.0519,'יציאה לשדה עם קרן ומאי.'),
      s('Budapest Airport','הורדת קרן ומאי','12:30','60–75 דק׳','Budapest Airport Terminal 2',47.4385,19.2523,'להגיע סביב 12:45–13:00.'),
      s('La Prima Hotel / מרכז העיר','ערב של ניסים ואלעד','14:00','אחה״צ–ערב','Budapest City Center',47.4979,19.0402,'ואצי, הדנובה, ארוחה ושיט לפי כוח.')
    ]
  },
  {
    id:'2026-09-29', label:'29.9', weekday:'יום ג׳', title:'בוקר רגוע, החזרת הרכב וטיסה של ניסים ואלעד',
    color:'#df3d8f', cost:'ללא עלות כניסה', note:'להשאיר לפחות שעתיים וחצי בטרמינל לאחר החזרת הרכב.',
    maps:'https://www.google.com/maps/dir/La+Prima+Hotel+Budapest/Klass+Wagen+Budapest+Airport/Budapest+Airport',
    stops:[
      s('La Prima Hotel','ארוחת בוקר וצ׳ק־אאוט','07:30','60–75 דק׳','La Prima Hotel Budapest',47.4933,19.0519,'בדיקת חדר ואריזה.'),
      s('Klass Wagen Budapest Airport','תדלוק והחזרת הרכב','09:00','60–75 דק׳','Klass Wagen Budapest Airport',47.4274,19.2800,'לצלם את הרכב והדלק לפני המסירה.'),
      s('Budapest Airport','צ׳ק־אין וטיסה','10:15','עד הטיסה','Budapest Airport Terminal 2',47.4385,19.2523,'טיסה בשעה 13:00.')
    ]
  }
];
function s(name,activity,time,duration,waze,lat,lng,details,optional=false){return{name,activity,time,duration,waze,lat,lng,details,optional}}

let overviewMap, dayMap, overviewLayers=[];
const dayNav=document.getElementById('dayNav');
const dayPanel=document.getElementById('dayPanel');

function init(){
  buildNav();
  buildOverview();
  selectDay(0);
  document.getElementById('fitAll').addEventListener('click',fitOverview);
  if('serviceWorker' in navigator && location.protocol.startsWith('http')) navigator.serviceWorker.register('sw.js').catch(()=>{});
}
function tile(){return L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'© OpenStreetMap contributors'})}
function buildOverview(){
  overviewMap=L.map('overviewMap',{scrollWheelZoom:false}); tile().addTo(overviewMap);
  trips.forEach((d,di)=>{
    const pts=d.stops.map(x=>[x.lat,x.lng]);
    L.polyline(pts,{color:d.color,weight:4,opacity:.8,dashArray:di===0?'6 8':null}).addTo(overviewMap);
    d.stops.forEach((x,i)=>{
      const marker=L.circleMarker([x.lat,x.lng],{radius:i===0||i===d.stops.length-1?7:5,color:'#fff',weight:2,fillColor:d.color,fillOpacity:1})
       .bindPopup(`<div class="marker-label">${d.weekday} ${d.label}</div><b>${x.name}</b><br>${x.activity}`).addTo(overviewMap);
      overviewLayers.push(marker);
    });
  });
  fitOverview();
}
function fitOverview(){
  const all=trips.flatMap(d=>d.stops.map(x=>[x.lat,x.lng])); overviewMap.fitBounds(all,{padding:[30,30]});
}
function buildNav(){
  dayNav.innerHTML='';
  trips.forEach((d,i)=>{
    const b=document.createElement('button'); b.className='day-tab'; b.role='tab'; b.innerHTML=`${d.weekday}<small>${d.label}</small>`; b.onclick=()=>selectDay(i); dayNav.appendChild(b);
  });
}
function selectDay(index){
  [...dayNav.children].forEach((x,i)=>x.classList.toggle('active',i===index));
  const d=trips[index];
  dayPanel.innerHTML=`
    <div class="day-hero">
      <div class="day-title"><div class="eyebrow dark">${d.weekday} · ${d.label}.2026</div><h2>${d.title}</h2><p>${d.stops.length} נקודות לפי סדר הנסיעה</p></div>
      <div class="cost-pill"><b>עלות משוערת ל־4</b><span>${d.cost}</span></div>
    </div>
    <div class="route-line">${d.stops.map((x,i)=>`${i?'<span class="route-arrow">←</span>':''}<div class="route-node"><div class="dot" style="background:${d.color}">${i+1}</div><span>${x.name}</span></div>`).join('')}</div>
    <div class="day-content">
      <div><div id="dayMap" class="map route-map"></div><div class="day-actions"><a class="primary-btn" target="_blank" rel="noopener" href="${d.maps}">🗺️ פתח מסלול מלא ב־Google Maps</a></div><div class="day-notes"><b>דגש ליום:</b> ${d.note}</div></div>
      <div class="stops">${d.stops.map((x,i)=>stopHtml(x,i,d.color)).join('')}</div>
    </div>`;
  requestAnimationFrame(()=>drawDayMap(d));
  dayPanel.scrollIntoView({behavior:'smooth',block:'start'});
}
function stopHtml(x,i,color){
  const q=encodeURIComponent(x.waze);
  const google=`https://www.google.com/maps/search/?api=1&query=${q}`;
  const waze=`https://www.waze.com/ul?q=${q}&navigate=yes`;
  return `<article class="stop-card ${x.optional?'optional':''}"><div class="stop-number" style="color:${color}">${i+1}</div><div><h3>${x.name}${x.optional?' · אופציונלי':''}</h3><div class="stop-meta"><span>🕒 ${x.time}</span><span>⏱️ ${x.duration}</span><span>📍 ${x.waze}</span></div><p><b>${x.activity}.</b> ${x.details}</p><div class="stop-actions"><a target="_blank" rel="noopener" href="${google}">Google Maps</a><a target="_blank" rel="noopener" href="${waze}">Waze</a></div></div></article>`
}
function drawDayMap(d){
  if(dayMap) dayMap.remove();
  dayMap=L.map('dayMap',{scrollWheelZoom:false}); tile().addTo(dayMap);
  const pts=d.stops.map(x=>[x.lat,x.lng]);
  L.polyline(pts,{color:d.color,weight:6,opacity:.9}).addTo(dayMap);
  d.stops.forEach((x,i)=>{
    const icon=L.divIcon({className:'',html:`<div style="width:34px;height:34px;border-radius:50%;background:${d.color};color:#fff;border:3px solid white;box-shadow:0 3px 9px #0004;display:grid;place-items:center;font-weight:900">${i+1}</div>`,iconSize:[34,34],iconAnchor:[17,17]});
    L.marker([x.lat,x.lng],{icon}).bindPopup(`<b>${i+1}. ${x.name}</b><br>${x.activity}`).addTo(dayMap);
  });
  dayMap.fitBounds(pts,{padding:[34,34]});
}
window.addEventListener('DOMContentLoaded',init);
