/* ===========================================================================
   ข้อมูลผลงานทั้งหมด — แก้ไฟล์นี้ไฟล์เดียวเวลาจะเพิ่ม/แก้ผลงาน
   หน้า work.html จะอ่านจากตรงนี้แล้วสร้างการ์ด ตัวกรอง และกลุ่มปีให้อัตโนมัติ

   วิธีเพิ่มงานใหม่ — ก็อปบรรทัดนี้ไปวางในลิสต์ แล้วแก้ค่า:
     { name: 'ชื่องาน', url: 'example.com', year: 2026, cat: 'site' },

   ฟิลด์ที่ใส่ได้
     name    (บังคับ) ชื่อที่จะโชว์บนการ์ด
     cat     (บังคับ) หมวด — ดูรายการใน CATEGORIES ด้านล่าง
     url     ลิงก์เว็บ ไม่ต้องใส่ https:// (เว้นว่างได้ถ้าไม่มีลิงก์)
     year    ปีที่ทำ เป็นตัวเลข — ใส่ null ถ้ายังไม่ระบุ
     brand   ชื่อลูกค้า/แบรนด์ โชว์เป็นป้ายเล็กบนการ์ด
     note    คำอธิบายสั้น ๆ
     offline true ถ้าเว็บไม่ออนไลน์แล้ว (จะไม่ทำเป็นลิงก์)
   =========================================================================== */

const CATEGORIES = [
  { id: 'solo',     label: 'พัฒนาเองทั้งระบบ' },
  { id: 'site',     label: 'เว็บไซต์ใหม่' },
  { id: 'event',    label: 'ระบบงานอีเวนต์' },
  { id: 'maintain', label: 'ดูแลต่อเนื่อง' },
  { id: 'landing',  label: 'Landing page' },
  { id: 'article',  label: 'บทความ & SEO' },
];

const PROJECTS = [
  /* ---------- พัฒนาเองทั้งระบบ (Next.js / Supabase) ---------- */
  { name: 'smfticket', url: 'smfticket.com', year: 2026, cat: 'solo',
    note: 'ระบบจัดการบัตรเข้างาน ออกแบบและเขียนเองทั้งระบบ — Next.js / React + Supabase, deploy บน Vercel, Cloudflare จัดการโดเมนและ CDN, Resend ส่งอีเมลระบบ' },
  { name: 'eventfox', url: 'eventfox.sufwolf.com', year: 2026, cat: 'solo',
    note: 'ระบบจัดการงานอีเวนต์ เขียนเองทั้งระบบด้วย stack เดียวกัน ใช้งานกับงานลูกค้าจริงแล้ว' },

  /* ---------- ระบบงานอีเวนต์ (เขียนเอง + ประจำหน้างาน) ---------- */
  { name: 'ระบบเช็คอิน & สุ่มรางวัล — งาน Outing ประจำปี', brand: 'SGS', year: 2025, cat: 'event',
    note: 'ผู้เข้าร่วม 1,000+ คน — ออกแบบ flow การเข้างาน ระบบเช็คอิน/ลงทะเบียน ระบบนับผู้เข้าร่วม และระบบสุ่มรางวัล พร้อมประจำหน้างานในวันจริง' },
  { name: 'ระบบลงทะเบียน & สุ่มรางวัลหน้างาน', brand: 'ยำยำ', year: 2025, cat: 'event',
    note: 'ผู้เข้าร่วม 1,300+ คน — ระบบลงทะเบียน ระบบสุ่มรางวัลหน้างาน กำหนดขั้นตอนร่วมกิจกรรม และดูแลระบบตลอดงาน' },

  /* ---------- เว็บไซต์ใหม่ : 2026 ---------- */
  { name: 'Alfredo', url: 'alfredo.co.th', year: 2026, cat: 'site',
    note: 'เว็บไซต์องค์กรและแคตตาล็อกสินค้าของ Alfredo Enterprise ผู้ผลิตอาหารแช่แข็งพรีเมียม เจ้าของพิซซ่าบาร์ในร้านสะดวกซื้อกว่า 2,500 สาขา เนื้อหาภาษาอังกฤษสำหรับตลาดส่งออก' },
  { name: 'Khao Eto', url: 'khaoeto.com', year: 2026, cat: 'site',
    note: 'เว็บไซต์ท่องเที่ยวป่านันทนาการน้ำตกเขาอีโต้ จังหวัดปราจีนบุรี ออกแบบให้ใช้บนมือถือโดยเฉพาะ พร้อมแผนที่ AR และรายการจุดชมวิว น้ำตก และอ่างเก็บน้ำในพื้นที่' },
  { name: 'Shock Point', url: 'shockpoint168.com', year: 2026, cat: 'site',
    note: 'เว็บไซต์อู่ผู้เชี่ยวชาญระบบช่วงล่างและโช้คอัพรถยนต์ (Pickup, PPV, SUV, Off-road) รวมหน้าบริการ แคตตาล็อกสินค้า และเรื่องราวของแบรนด์' },
  { name: 'Playboy Condom', url: 'playboycondom.com', year: 2026, cat: 'site',
    note: 'เว็บไซต์แบรนด์ถุงยางอนามัยและเจลหล่อลื่น Playboy รองรับหลายภาษา — รับผิดชอบงานประสานงานโปรเจกต์และควบคุม timeline การส่งมอบ' },

  /* ---------- เว็บไซต์ใหม่ : 2025 ---------- */
  { name: 'SBAC — วิทยาลัยเทคโนโลยีสยามบริหารธุรกิจ', url: 'sbac.ac.th', year: 2025, cat: 'site',
    note: 'เว็บไซต์สถาบันการศึกษาที่รวมหลายหน่วยงานไว้ในระบบเดียว พร้อมระบบหลังบ้านปรับแต่งเอง (JetEngine) สำหรับข่าว บทความ หลักสูตร และกิจกรรม ออกแบบให้รองรับการขยายในอนาคต' },
  { name: 'NASCO', url: 'nasco.co.th', year: 2025, cat: 'site',
    note: 'E-commerce เต็มรูปแบบ — เชื่อมระบบชำระเงิน 2C2P ตั้งค่าการจัดส่งพร้อมคำนวณค่าขนส่งอัตโนมัติ และวางโครงสร้างระบบจัดการคำสั่งซื้อหลังบ้าน' },
  { name: 'Isan MICE Destination', url: 'isanmicedestination.com', year: 2025, cat: 'site',
    note: 'เว็บไซต์แนะนำพื้นที่จัดงาน MICE ภาคอีสาน แบบ interactive สำหรับมือถือ ให้ผู้ใช้ลากไอคอนไปยังจังหวัดที่สนใจเพื่อดูข้อมูลเชิงลึก รองรับสองภาษา ไทย/อังกฤษ' },

  /* ---------- เว็บไซต์ใหม่ : 2024 ---------- */
  { name: 'Bank of China (Thai) — Wealth Management', url: 'bankofchina.co.th/dam/en-th/segment/Wealth-Management/en/wealth-management.html', year: 2024, cat: 'site',
    brand: 'Bank of China',
    note: 'รับผิดชอบคนเดียวทั้ง 6 หน้า — ปรับโครงหน้าเว็บจากเวอร์ชันภาษาจีนที่ duplicate มาทั้งระบบ ให้เป็นโครงสร้าง EN/TH ที่ถูกต้อง (เนื้อหาแปลโดยลูกค้า) ประสานงานกับทีมของธนาคารโดยตรง' },
  { name: 'RJ Thailand', url: 'rjthapp.com', year: 2024, cat: 'site',
    note: 'เว็บไซต์ฐานข้อมูลสนับสนุนกระบวนการยุติธรรมเชิงสมานฉันท์ (Restorative Justice) ความร่วมมือระหว่างสถาบันเพื่อการยุติธรรมแห่งประเทศไทย (TIJ) และคณะนิติศาสตร์ มหาวิทยาลัยเชียงใหม่ พร้อมหน้าสรุปสถิติเคสและผู้ใช้งาน' },
  { name: 'Ambulance Brand — สำลีตรารถพยาบาล', url: 'ambulancebrand.com', year: 2024, cat: 'site',
    note: 'เว็บไซต์แบรนด์สำลีและคอตตอนบัดส์ "ตรารถพยาบาล" รวมแคตตาล็อกสินค้า สถานที่จัดจำหน่าย และลิงก์ไปช่องทางซื้อออนไลน์' },
  { name: 'Think Party', url: 'thinkparty.co.th', year: 2024, cat: 'site',
    note: 'เว็บไซต์ content & creative agency ประสบการณ์โฆษณากว่า 20 ปี เน้นโชว์ผลงานและบริการ ตั้งแต่ campaign, content strategy, motion graphic ถึง TVC' },
  { name: 'Solutions Impact', url: 'solutionsimpact.com', year: 2024, cat: 'site',
    note: 'เว็บไซต์บริษัทที่ปรึกษาด้าน AI Transformation และพัฒนาศักยภาพองค์กร พร้อมระบบให้ดาวน์โหลดเอกสาร framework เพื่อเก็บ lead' },
  { name: 'Nawaphat Build', year: 2024, cat: 'site', offline: true,
    note: 'เว็บไซต์บริษัทรับเหมาก่อสร้าง — ปัจจุบันปิดไปแล้ว' },

  /* ---------- เว็บไซต์ใหม่ : 2023 ---------- */
  { name: 'Janjaras Group — เจนจรัส กรุ๊ป', url: 'janjarasgroup.com', year: 2023, cat: 'site',
    note: 'เว็บไซต์ผู้เชี่ยวชาญนวัตกรรมยืดอายุอาหารและ Active Packaging รวมแคตตาล็อกโซลูชันบรรจุภัณฑ์ บทความให้ความรู้ และช่องทางปรึกษาทีม technical sales' },
  { name: 'Chanthaburi Gems & Jewelry Festival', url: 'changemsfest.org', year: 2023, cat: 'site',
    brand: 'Change MS Fest',
    note: 'เว็บไซต์เทศกาลนานาชาติพลอยและเครื่องประดับจันทบุรี ภายใต้แนวคิด "Chanthaburi: City of Gems" พร้อมระบบลงทะเบียนผู้เข้าร่วมงาน และเนื้อหาสองภาษา' },
  { name: 'InnoFresh', url: 'innofresh.co.th', year: 2023, cat: 'site',
    note: 'เว็บไซต์ผู้ผลิตน้ำจิ้ม น้ำสลัด และซอส หลายแบรนด์ในเครือ (Fresh O’, Say Ohh!, Zecret Spoon) รวมแคตตาล็อกสินค้า หมวดไอเดียเมนูอาหาร ข่าวสาร และหน้ารับผลิต OEM' },
  { name: 'Telescope Thailand', url: 'telescopethailand.com', year: 2023, cat: 'site',
    note: 'ร้านกล้องดูดาวและอุปกรณ์ดาราศาสตร์บน WooCommerce พร้อมตะกร้าสินค้าและบัญชีลูกค้า โครงสร้างหมวดสินค้าลึกหลายชั้น — กล้องดูดาว กล้องดูดวงอาทิตย์ กล้องถ่ายภาพ CMOS/CCD เมาท์ตามดาว และกล้องจุลทรรศน์ พร้อมหมวดแยกสำหรับหน่วยงานการศึกษา' },
  { name: 'NorthMed Hospital', url: 'northmed-hospital.com', year: 2023, cat: 'site',
    note: 'เว็บไซต์โรงพยาบาลผู้สูงอายุและเวชศาสตร์ฟื้นฟู รวมหลายศูนย์บริการไว้ในระบบเดียว — กายภาพบำบัด คลินิกผู้สูงอายุ ผู้ป่วยระยะกลาง ธาราบำบัด และศูนย์ดูแลผู้สูงอายุ NorthVille' },
  { name: 'ISU Congress 2022', year: 2023, cat: 'site', offline: true,
    note: 'เว็บไซต์งานประชุมวิชาการนานาชาติ — ปัจจุบันปิดไปแล้ว' },

  /* ---------- ดูแลต่อเนื่อง ---------- */
  { name: 'Telescope Thailand', url: 'telescopethailand.com', year: 2026, cat: 'maintain',
    note: 'ดูแลระบบร้านค้า WooCommerce ต่อเนื่องหลังส่งมอบ ทั้งอัปเดตสินค้าและแก้ไขหน้าเว็บ' },
  { name: 'NASCO', url: 'nasco.co.th', year: 2026, cat: 'maintain',
    note: 'ดูแลระบบ e-commerce ต่อเนื่องหลังส่งมอบ ทั้งระบบชำระเงิน การจัดส่ง และระบบจัดการคำสั่งซื้อ' },
  { name: 'InnoFresh', url: 'innofresh.co.th', year: 2026, cat: 'maintain',
    note: 'ดูแลระบบ อัปเดตสินค้าและเนื้อหาต่อเนื่องหลังส่งมอบ' },
  { name: 'RJ Thailand', url: 'rjthapp.com', year: 2026, cat: 'maintain',
    note: 'ดูแลระบบฐานข้อมูลต่อเนื่องหลังส่งมอบ' },
  { name: 'NorthMed Hospital', url: 'northmed-hospital.com', year: 2025, cat: 'maintain',
    note: 'ดูแลระบบ อัปเดตเนื้อหาและข้อมูลศูนย์บริการต่อเนื่องหลังส่งมอบ' },

  /* ---------- Landing page รายรุ่น / รายบริการ ---------- */
  { name: 'Electric Bus', brand: 'MPE Powernex', url: 'mpepowernex.com/services/electric-bus/', year: 2024, cat: 'landing',
    note: 'หน้าบริการรถบัสและมินิบัสไฟฟ้า NEX ของ MP E-POWER ผู้จำหน่ายรถเชิงพาณิชย์พลังงานไฟฟ้า พร้อม CTA ทดลองขับและรับข้อเสนอ' },
  { name: 'Food Truck', brand: 'Suzuki — Maporn', url: 'mapornsuzukith.com/model/food-truck/', year: 2024, cat: 'landing',
    note: 'หน้ารุ่นรถของดีลเลอร์ซูซูกิ มาพรพาณิชย์ — สเปค ฟีเจอร์ และราคา พร้อม CTA ทดลองขับ รับข้อเสนอ และดาวน์โหลดโบรชัวร์' },
  { name: 'Carry', brand: 'Suzuki — Maporn', url: 'mapornsuzukith.com/model/carry/', year: 2024, cat: 'landing',
    note: 'หน้ารุ่นรถของดีลเลอร์ซูซูกิ มาพรพาณิชย์ — สเปค ฟีเจอร์ และราคา พร้อม CTA ทดลองขับ รับข้อเสนอ และดาวน์โหลดโบรชัวร์' },
  { name: 'Celerio', brand: 'Suzuki — Maporn', url: 'mapornsuzukith.com/model/celerio/', year: 2024, cat: 'landing',
    note: 'หน้ารุ่นรถของดีลเลอร์ซูซูกิ มาพรพาณิชย์ — สเปค ฟีเจอร์ และราคา พร้อม CTA ทดลองขับ รับข้อเสนอ และดาวน์โหลดโบรชัวร์' },
  { name: 'Ertiga', brand: 'Suzuki — Maporn', url: 'mapornsuzukith.com/model/ertiga/', year: 2024, cat: 'landing',
    note: 'หน้ารุ่นรถของดีลเลอร์ซูซูกิ มาพรพาณิชย์ — สเปค ฟีเจอร์ และราคา พร้อม CTA ทดลองขับ รับข้อเสนอ และดาวน์โหลดโบรชัวร์' },
  { name: 'XL7', brand: 'Suzuki — Maporn', url: 'mapornsuzukith.com/model/xl7/', year: 2024, cat: 'landing',
    note: 'หน้ารุ่นรถของดีลเลอร์ซูซูกิ มาพรพาณิชย์ — สเปค ฟีเจอร์ และราคา พร้อม CTA ทดลองขับ รับข้อเสนอ และดาวน์โหลดโบรชัวร์' },
  { name: 'Ciaz', brand: 'Suzuki — Maporn', url: 'mapornsuzukith.com/model/ciaz/', year: 2024, cat: 'landing',
    note: 'หน้ารุ่นรถของดีลเลอร์ซูซูกิ มาพรพาณิชย์ — สเปค ฟีเจอร์ และราคา พร้อม CTA ทดลองขับ รับข้อเสนอ และดาวน์โหลดโบรชัวร์' },
  { name: 'Swift', brand: 'Suzuki — Maporn', url: 'mapornsuzukith.com/model/swift-current/', year: 2024, cat: 'landing',
    note: 'หน้ารุ่นรถของดีลเลอร์ซูซูกิ มาพรพาณิชย์ — สเปค ฟีเจอร์ และราคา พร้อม CTA ทดลองขับ รับข้อเสนอ และดาวน์โหลดโบรชัวร์' },

  /* ---------- บทความ & โครงสร้าง SEO (กำหนด H1/H2/H3 ตามบทความ) ---------- */
  { name: 'Body Lift Thermage FLX', brand: 'Aes Class Clinic', url: 'aesclassclinic.com/treatments/body-lift-thermage-flx/', year: 2024, cat: 'article',
    note: 'บทความบริการคลินิกความงาม จัดโครงสร้าง H1/H2/H3 สารบัญหัวข้อ และ FAQ รองรับ SEO' },
  { name: 'Eye Lift Thermage FLX', brand: 'Aes Class Clinic', url: 'aesclassclinic.com/treatments/eye-lift-thermage-flx/', year: 2024, cat: 'article',
    note: 'บทความบริการคลินิกความงาม จัดโครงสร้าง H1/H2/H3 สารบัญหัวข้อ และ FAQ รองรับ SEO' },
  { name: 'Filler ใต้ตา', brand: 'Aes Class Clinic', url: 'aesclassclinic.com/treatments/filler-under-the-eyes/', year: 2024, cat: 'article',
    note: 'บทความบริการคลินิกความงาม จัดโครงสร้าง H1/H2/H3 สารบัญหัวข้อ และ FAQ รองรับ SEO' },
  { name: 'Body Lift Morpheus 8', brand: 'Aes Class Clinic', url: 'aesclassclinic.com/treatments/body-lift-morpheus-8/', year: 2024, cat: 'article',
    note: 'บทความบริการคลินิกความงาม จัดโครงสร้าง H1/H2/H3 สารบัญหัวข้อ และ FAQ รองรับ SEO' },
  { name: 'Filler ร่องแก้ม', brand: 'Aes Class Clinic', url: 'aesclassclinic.com/treatments/filler-cheek-groove/', year: 2024, cat: 'article',
    note: 'บทความบริการคลินิกความงาม จัดโครงสร้าง H1/H2/H3 สารบัญหัวข้อ และ FAQ รองรับ SEO' },
  { name: 'Eye Lift Morpheus 8', brand: 'Aes Class Clinic', url: 'aesclassclinic.com/treatments/eye-lift-morpheus-8/', year: 2024, cat: 'article',
    note: 'บทความบริการคลินิกความงาม จัดโครงสร้าง H1/H2/H3 สารบัญหัวข้อ และ FAQ รองรับ SEO' },
  { name: 'Filler ปาก', brand: 'Aes Class Clinic', url: 'aesclassclinic.com/treatments/filler-mouth/', year: 2024, cat: 'article',
    note: 'บทความบริการคลินิกความงาม จัดโครงสร้าง H1/H2/H3 สารบัญหัวข้อ และ FAQ รองรับ SEO' },
  { name: 'รักษาฝ้า', brand: 'Pewdee Clinic', url: 'pewdeeclinic.com/services/melasma/', year: 2024, cat: 'article',
    note: 'บทความบริการคลินิกความงาม จัดโครงสร้าง H1/H2/H3 ตามที่บทความกำหนด รองรับ SEO' },
  { name: 'รักษาจุดด่างดำ', brand: 'Pewdee Clinic', url: 'pewdeeclinic.com/services/treat-dark-spots/', year: 2024, cat: 'article',
    note: 'บทความบริการคลินิกความงาม จัดโครงสร้าง H1/H2/H3 ตามที่บทความกำหนด รองรับ SEO' },
  { name: 'Botox', brand: 'Pewdee Clinic', url: 'pewdeeclinic.com/services/botoxin/', year: 2024, cat: 'article',
    note: 'บทความบริการคลินิกความงาม จัดโครงสร้าง H1/H2/H3 ตามที่บทความกำหนด รองรับ SEO' },
  { name: 'CoolSculpting ลดไขมัน', brand: 'Pewdee Clinic', url: 'pewdeeclinic.com/services/fat-reduction-coolsculpting/', year: 2024, cat: 'article',
    note: 'บทความบริการคลินิกความงาม จัดโครงสร้าง H1/H2/H3 ตามที่บทความกำหนด รองรับ SEO' },
  { name: 'Filler Sculptra', brand: 'Pewdee Clinic', url: 'pewdeeclinic.com/services/filling-sculptra/', year: 2024, cat: 'article',
    note: 'บทความบริการคลินิกความงาม จัดโครงสร้าง H1/H2/H3 ตามที่บทความกำหนด รองรับ SEO' },
  { name: 'รักษาหลุมสิว', brand: 'Pewdee Clinic', url: 'pewdeeclinic.com/services/treat-acne-scarsr/', year: 2024, cat: 'article',
    note: 'บทความบริการคลินิกความงาม จัดโครงสร้าง H1/H2/H3 ตามที่บทความกำหนด รองรับ SEO' },
  { name: 'Thermage FLX', brand: 'Pongsak Clinic', url: 'pongsak-clinic.com/treatment/thermage-flx/', year: 2024, cat: 'article',
    note: 'บทความบริการคลินิกความงาม จัดโครงสร้าง H1/H2/H3 ตามที่บทความกำหนด รองรับ SEO' },
  { name: 'ERP คืออะไร', brand: 'M-Creation', url: 'm-creation.co/erp-is/', year: 2024, cat: 'article',
    note: 'บทความให้ความรู้เชิงลึกเรื่องระบบองค์กรในหมวด MarTechPlace ความยาวระดับ pillar page จัดโครงสร้าง H1/H2/H3 รองรับ SEO' },
  { name: 'CDP คืออะไร', brand: 'M-Creation', url: 'm-creation.co/cdp-is/', year: 2024, cat: 'article',
    note: 'บทความให้ความรู้เชิงลึกเรื่องระบบองค์กรในหมวด MarTechPlace ความยาวระดับ pillar page จัดโครงสร้าง H1/H2/H3 รองรับ SEO' },
  { name: 'WMS คืออะไร', brand: 'M-Creation', url: 'm-creation.co/wms-is/', year: 2024, cat: 'article',
    note: 'บทความให้ความรู้เชิงลึกเรื่องระบบองค์กรในหมวด MarTechPlace ความยาวระดับ pillar page จัดโครงสร้าง H1/H2/H3 รองรับ SEO' },
  { name: 'OMS คืออะไร', brand: 'M-Creation', url: 'm-creation.co/oms-is/', year: 2024, cat: 'article',
    note: 'บทความให้ความรู้เชิงลึกเรื่องระบบองค์กรในหมวด MarTechPlace ความยาวระดับ pillar page จัดโครงสร้าง H1/H2/H3 รองรับ SEO' },
];
