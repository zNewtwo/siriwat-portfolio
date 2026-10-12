/* ===========================================================================
   Cloudflare Web Analytics — เก็บสถิติผู้เข้าชมแบบไม่ใช้คุกกี้

   ใส่ token ตรงนี้ที่เดียว แล้วใช้ได้ทั้ง index.html และ work.html
   ปล่อยว่างไว้ = ไม่โหลดอะไรเลย เว็บทำงานปกติ

   วิธีหา token
     1. เข้า dash.cloudflare.com → เมนู Analytics & Logs → Web Analytics
     2. กด "Add a site" แล้วใส่โดเมนของเว็บ (เช่น znewtwo.github.io)
     3. เลือกวิธีแบบ JS snippet (สำหรับเว็บที่ไม่ได้อยู่บน Cloudflare)
     4. ในโค้ดที่ได้จะมี data-cf-beacon='{"token": "abc123..."}'
        ให้ก็อปเฉพาะค่า token มาวางในบรรทัดล่างนี้
   =========================================================================== */

var CF_BEACON_TOKEN = 'dd200441616d4b39827e3efb53bad417';

(function () {
  if (!CF_BEACON_TOKEN) return;

  // สร้างให้ตรงกับ snippet ที่ Cloudflare ให้มา (type="module")
  var s = document.createElement('script');
  s.type = 'module';
  s.src = 'https://static.cloudflareinsights.com/beacon.min.js';
  s.setAttribute('data-cf-beacon', JSON.stringify({ token: CF_BEACON_TOKEN }));
  document.head.appendChild(s);

  // ไฟล์นี้ถูกเรียกท้าย body แล้ว footer จึงมีอยู่ใน DOM เรียบร้อย
  var note = document.getElementById('privacyNote');
  if (note) {
    note.textContent =
      'เว็บนี้เก็บสถิติผู้เข้าชมด้วย Cloudflare Web Analytics ซึ่งไม่ใช้คุกกี้และไม่เก็บข้อมูลส่วนบุคคล';
  }
})();
