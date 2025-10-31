# 🚀 Quick Start Guide

## การใช้งานเบื้องต้น (5 นาที)

### ขั้นตอนที่ 1: ดาวน์โหลดไฟล์

ดาวน์โหลดไฟล์ทั้งหมด 6 ไฟล์:
- ✅ `index.html` - หน้าหลัก
- ✅ `session2.html` - Session 2 (ตัวอย่าง)
- ✅ `styles.css` - CSS หลัก
- ✅ `session.css` - CSS สำหรับ Session
- ✅ `script.js` - JavaScript
- ✅ `README.md` - คู่มือ

### ขั้นตอนที่ 2: จัดเก็บไฟล์

วางไฟล์ทั้งหมดในโฟลเดอร์เดียวกัน เช่น:
```
medical-leadership-hub/
├── index.html
├── session2.html
├── styles.css
├── session.css
├── script.js
└── README.md
```

### ขั้นตอนที่ 3: เปิดใช้งาน

**วิธีที่ 1: เปิดบนเครื่อง**
- Double-click ที่ `index.html`
- หรือลากไฟล์ไปยัง Browser

**วิธีที่ 2: Deploy Online**
- ใช้ GitHub Pages, Netlify, หรือ Vercel (ฟรี)
- อัพโหลดไฟล์ทั้งหมด
- เข้าถึงได้ทุกที่ผ่าน Internet

---

## 📝 การเพิ่ม Session ใหม่ (10 นาที)

### ขั้นตอนง่ายๆ:

1. **คัดลอก `session2.html`** → ตั้งชื่อใหม่ เช่น `session3.html`

2. **แก้ไข Title และ Hero Section:**
   - เปลี่ยนชื่อ Session
   - เปลี่ยนวันที่
   - เปลี่ยนคำอธิบาย

3. **อัพเดต Timeline:**
   - คัดลอก timeline-block
   - เปลี่ยนเวลา
   - เปลี่ยนหัวข้อ
   - เปลี่ยนวิทยากร

4. **เพิ่มเนื้อหาละเอียด:**
   - ใช้ content-block template
   - เพิ่มประเด็นหลัก
   - เพิ่ม Key Insights

5. **อัพเดต index.html:**
   - เพิ่ม session-card ใหม่
   - ลิงก์ไปยังไฟล์ใหม่

---

## 🎥 การเพิ่มวิดีโอ YouTube

หาส่วนนี้ในไฟล์:

```html
<div class="video-placeholder">
    <p>📺 วิดีโอสรุปโดย AI</p>
    <a href="#" class="btn-video">รอการอัพโหลด</a>
</div>
```

แทนที่ด้วย:

```html
<div class="video-container">
    <iframe 
        width="100%" 
        height="200" 
        src="https://www.youtube.com/embed/[VIDEO_ID]"
        frameborder="0" 
        allowfullscreen>
    </iframe>
</div>
```

---

## 🎨 การปรับแต่งสี

เปิดไฟล์ `styles.css` และหาส่วนนี้:

```css
:root {
    --primary-blue: #0066cc;      /* เปลี่ยนเป็นสีที่ต้องการ */
    --primary-dark: #004494;
    --accent-teal: #00b8a9;
}
```

---

## 📞 ติดต่อ

แก้ไขข้อมูลติดต่อในไฟล์ HTML:

1. เปิด `index.html`
2. หาส่วน Footer
3. แก้ไขเบอร์โทรและอีเมล

```html
<div class="footer-section">
    <h4>ติดต่อ</h4>
    <p>นายวีระยุทธ วันใหม่ (วี)<br>โทร: 090-xxx-xxxx</p>
</div>
```

---

## ✅ Checklist การ Deploy

- [ ] ดาวน์โหลดไฟล์ทั้งหมด
- [ ] เปิดใน Browser ทดสอบ
- [ ] แก้ไขข้อมูลติดต่อ
- [ ] เพิ่มโลโก้ (ถ้ามี)
- [ ] อัพโหลดไปยัง Hosting
- [ ] ทดสอบบน Mobile
- [ ] แชร์ลิงก์กับผู้เรียน

---

## 🆘 แก้ปัญหา

### ปัญหา: ไม่มี CSS
**แก้:** ตรวจสอบว่าไฟล์ .css อยู่ในโฟลเดอร์เดียวกับ .html

### ปัญหา: Animation ไม่ทำงาน
**แก้:** ตรวจสอบว่ามีไฟล์ `script.js`

### ปัญหา: รูปภาพไม่แสดง
**แก้:** ใช้ path ที่ถูกต้อง หรือใช้ URL แบบเต็ม

---

## 💡 เคล็ดลับ

1. **บันทึกบ่อยๆ** - Save ทุกครั้งที่แก้ไข
2. **ทดสอบก่อน Deploy** - เปิดบนเครื่องก่อน
3. **ใช้ Template** - อย่าเริ่มจากศูนย์
4. **รักษา Consistency** - ใช้ style เดียวกัน
5. **Backup** - สำรองไฟล์สำคัญ

---

**เรียบร้อย! พร้อมใช้งาน** 🎉

สำหรับคำถามเพิ่มเติม ดูที่ `README.md`
