/* TEAPOT คาราวานคู่ชง — service worker
   เป้าหมายเดียว เปิดเว็บได้ตอนเน็ตหลุดที่ตลาดนัด
   ใช้ network-first ทุกไฟล์ ได้ของใหม่เสมอเมื่อเน็ตมา และมีของเก่าสำรองเมื่อเน็ตหาย
   เปลี่ยน CACHE เป็นเลขใหม่ทุกครั้งที่อัปไฟล์ ตัวเก่าจะถูกลบให้เอง */
const CACHE = 'teapot-v7';
const CORE  = ['./', './index.html', './teapot-system.js', './teapot-config.js',
               './manifest.webmanifest', './icon-192.png', './icon-512.png'];

self.addEventListener('install', e=>{
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c=> c.addAll(CORE).catch(()=>{})));
});

self.addEventListener('activate', e=>{
  e.waitUntil(
    caches.keys().then(ks=> Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
      .then(()=> self.clients.claim())
  );
});

self.addEventListener('fetch', e=>{
  const r = e.request;
  if(r.method !== 'GET') return;
  const u = new URL(r.url);
  if(u.origin !== location.origin) return;   /* firebase กับ gstatic ปล่อยผ่าน ห้ามแคช */
  e.respondWith(
    fetch(r).then(res=>{
      if(res && res.ok){
        const copy = res.clone();
        caches.open(CACHE).then(c=> c.put(r, copy)).catch(()=>{});
      }
      return res;
    }).catch(()=> caches.match(r).then(hit=> hit || caches.match('./index.html')))
  );
});
