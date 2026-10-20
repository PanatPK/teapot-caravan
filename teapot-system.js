/* =====================================================================
   TEAPOT คาราวานคู่ชง — ไฟล์ระบบ
   ---------------------------------------------------------------------
   ไฟล์นี้ตั้งครั้งเดียวจบ แล้วไม่ต้องแตะอีก
   เวลามีอัปเดตเนื้อหา ให้ทับแค่ teapot-config.js ไฟล์เดียว
   ห้ามลบไฟล์นี้ ไม่งั้นหลังบ้านจะไม่เชื่อมฐานข้อมูล
   ===================================================================== */

const TEAPOT_SYSTEM = {

  /* ---------- Firebase ----------
     Firebase Console > Project settings > Your apps > Web app > SDK setup
     ถ้ายังไม่ใส่ เว็บจะทำงานได้ปกติแต่เก็บข้อมูลไว้ในเครื่องอย่างเดียว   */
  firebase: {
      apiKey: "AIzaSyB6T-lQHXiIeafgPBwLqLQa0odllYNh87w",
  authDomain: "teapot-caravan.firebaseapp.com",
  projectId: "teapot-caravan",
  storageBucket: "teapot-caravan.firebasestorage.app",
  messagingSenderId: "426547707687",
  appId: "1:426547707687:web:6c6ad1109cbc79ceaa3302"
  },

  /* ---------- ชื่อ collection ใน Firestore ----------
     ถ้าเปลี่ยนตรงนี้ ต้องไปแก้ Rules ใน Firebase ให้ตรงกันด้วย          */
  collections: {
    leads:    'teapot_leads',     // ผู้ลงทะเบียนหน้าบูธ
    calcs:    'teapot_calcs',     // ตัวเลขต้นทุนที่ลูกค้ากรอก
    views:    'teapot_views',     // สถิติการเปิดดูสูตร
    settings: 'teapot_settings',  // เนื้อหาที่แก้จากหลังบ้าน
    days:     'teapot_days',      // บันทึกประจำวันของสตาฟ
    trades:   'teapot_trades'     // รายการแลกของ
  },

  /* ---------- รหัสสำรองเข้าหลังบ้าน ----------
     ใช้เฉพาะตอนยังไม่ได้ต่อ Firebase ถ้าต่อแล้วระบบจะใช้อีเมล+รหัสผ่านแทน */
  adminPin: '2569'

};
