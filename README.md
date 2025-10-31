# Medical Leadership Learning Hub

## 🏥 หลักสูตรประกาศนียบัตรผู้บริหารดิจิทัลทางการแพทย์ รุ่นที่ 1

Website สำหรับการจัดเก็บและแสดงเนื้อหาการเรียนการสอนจากหลักสูตรประกาศนียบัตรผู้บริหารดิจิทัลทางการแพทย์

---

## 📋 สารบัญ

- [ภาพรวม](#ภาพรวม)
- [คุณสมบัติหลัก](#คุณสมบัติหลัก)
- [โครงสร้างไฟล์](#โครงสร้างไฟล์)
- [การติดตั้ง](#การติดตั้ง)
- [การใช้งาน](#การใช้งาน)
- [การเพิ่มเนื้อหา Session ใหม่](#การเพิ่มเนื้อหา-session-ใหม่)
- [การปรับแต่ง](#การปรับแต่ง)

---

## 🎯 ภาพรวม

Website นี้ออกแบบมาเพื่อ:

1. **จัดเก็บเนื้อหา** - รวบรวมเนื้อหาการเรียนการสอนทั้ง 12 ครั้ง
2. **สร้าง Infographics** - แสดงข้อมูลสำคัญในรูปแบบที่เข้าใจง่าย
3. **แชร์ความรู้** - ผู้บริหารสามารถแชร์เนื้อหาให้ทีมงานได้ง่าย
4. **สร้าง Leads** - เปิดโอกาสสำหรับงาน Consulting

---

## ✨ คุณสมบัติหลัก

### 🏠 Homepage
- แสดงภาพรวมหลักสูตรและ Sessions ทั้งหมด
- Progress Tracker สำหรับติดตามความคืบหน้า
- Quick navigation ไปยังแต่ละ Session

### 📚 Session Pages
- **Executive Summary** - สรุปเนื้อหาสำคัญ
- **Interactive Infographics** - Timeline และข้อมูลเชิงลึก
- **Detailed Content** - เนื้อหาแต่ละหัวข้ออย่างละเอียด
- **Video Integration** - พร้อมที่จะเพิ่ม YouTube videos
- **Downloadable Resources** - ลิงก์สำหรับดาวน์โหลดเอกสาร
- **Action Items** - แนวทางการนำไปปฏิบัติ

### 🎨 Design Features
- **Modern & Professional** - เหมาะสำหรับผู้บริหาร
- **Responsive Design** - ใช้งานได้ทั้ง Desktop, Tablet, Mobile
- **Interactive Animations** - Smooth transitions และ hover effects
- **Color-coded Sections** - แยกหัวข้อด้วยสีเพื่อความชัดเจน

---

## 📁 โครงสร้างไฟล์

```
medical-leadership-hub/
│
├── index.html              # Homepage
├── session2.html           # Session 2 (ตัวอย่าง)
├── session-template.html   # Template สำหรับ Sessions อื่นๆ
│
├── styles.css              # Global styles
├── session.css             # Session-specific styles
├── script.js               # JavaScript functionality
│
└── README.md               # เอกสารนี้
```

---

## 🚀 การติดตั้ง

### วิธีที่ 1: ใช้งานบน Local Computer

1. **ดาวน์โหลดไฟล์ทั้งหมด** ไปยังโฟลเดอร์เดียวกัน

2. **เปิดไฟล์ index.html** ด้วย Web Browser
   - Double-click ที่ไฟล์ index.html
   - หรือลากไฟล์ไปยัง Browser

3. **เรียบร้อย!** Website พร้อมใช้งาน

### วิธีที่ 2: Deploy บน Web Server

1. **อัพโหลดไฟล์ทั้งหมด** ไปยัง Web Hosting
   - GitHub Pages (ฟรี)
   - Netlify (ฟรี)
   - Vercel (ฟรี)
   - Web Hosting ของคุณเอง

2. **ตั้งค่า Custom Domain** (ถ้าต้องการ)

3. **เข้าถึงได้จาก Internet**

---

## 💡 การใช้งาน

### สำหรับ Session 2 (พร้อมใช้งาน)

Session 2 มีเนื้อหาครบถ้วน ประกอบด้วย:

- ✅ Med Talk: มุมมองดิจิทัลทางการแพทย์
- ✅ Medical AI Ecosystem in UK
- ✅ Customer Driven Innovation
- ✅ Healthcare Financing

### สำหรับ Sessions อื่นๆ

ใช้ `session-template.html` เป็นต้นแบบ (ดูส่วนถัดไป)

---

## 📝 การเพิ่มเนื้อหา Session ใหม่

### ขั้นตอนที่ 1: คัดลอก Template

```bash
cp session-template.html session3.html
```

### ขั้นตอนที่ 2: แก้ไขข้อมูลพื้นฐาน

เปิดไฟล์ `session3.html` และแก้ไข:

```html
<!-- เปลี่ยนชื่อ -->
<title>ครั้งที่ 3: [ชื่อ Session] | Digital Healthcare Leadership</title>

<!-- เปลี่ยนเนื้อหา Hero Section -->
<div class="session-hero-badge">ครั้งที่ 3 | [วันที่]</div>
<h1 class="session-hero-title">[ชื่อ Session]</h1>
<p class="session-hero-subtitle">[คำอธิบายสั้นๆ]</p>
```

### ขั้นตอนที่ 3: เพิ่ม Timeline

แก้ไขส่วน Timeline ตามกำหนดการจริง:

```html
<div class="timeline-block featured">
    <div class="timeline-time">09.00 - 12.00</div>
    <div class="timeline-content-card [สีที่เหมาะสม]">
        <div class="card-badge">[ประเภทการเรียน]</div>
        <h3>🎯 [ชื่อหัวข้อ]</h3>
        <div class="speaker-box">
            <div class="speaker-avatar">👨‍⚕️</div>
            <div class="speaker-details">
                <strong>[ชื่อวิทยากร]</strong>
                <p>[ตำแหน่ง/สังกัด]</p>
            </div>
        </div>
        <!-- เพิ่มเนื้อหาเพิ่มเติม -->
    </div>
</div>
```

### ขั้นตอนที่ 4: เพิ่มเนื้อหาละเอียด

ใช้ Content Blocks สำหรับแต่ละหัวข้อ:

```html
<div class="content-block">
    <div class="content-header">
        <span class="content-number">01</span>
        <h3>[ชื่อหัวข้อ]</h3>
    </div>
    <div class="content-body">
        <!-- เนื้อหาของคุณที่นี่ -->
    </div>
</div>
```

### ขั้นตอนที่ 5: เพิ่ม Video Links

เมื่อมีวิดีโอจาก NotebookLM แล้ว:

```html
<div class="video-placeholder">
    <iframe 
        width="100%" 
        height="200" 
        src="[YouTube Embed URL]"
        frameborder="0" 
        allowfullscreen>
    </iframe>
</div>
```

### ขั้นตอนที่ 6: อัพเดต Homepage

เพิ่ม Session Card ใน `index.html`:

```html
<div class="session-card featured">
    <div class="session-badge">กำลังเรียน</div>
    <div class="session-header">
        <span class="session-number">03</span>
        <span class="session-date">[วันที่]</span>
    </div>
    <h3 class="session-title">การเรียนการสอนครั้งที่ 3</h3>
    <div class="session-topics">
        <div class="topic-tag">[หัวข้อ 1]</div>
        <div class="topic-tag">[หัวข้อ 2]</div>
    </div>
    <a href="session3.html" class="btn-session">ดูเนื้อหาเต็ม →</a>
</div>
```

---

## 🎨 การปรับแต่ง

### เปลี่ยนสีหลัก

แก้ไขใน `styles.css`:

```css
:root {
    --primary-blue: #0066cc;      /* สีหลัก */
    --primary-dark: #004494;      /* สีเข้ม */
    --accent-teal: #00b8a9;       /* สีเสริม */
}
```

### เปลี่ยนฟอนต์

แก้ไขใน `styles.css`:

```css
:root {
    --font-thai: 'Sarabun', sans-serif;
    --font-en: 'Inter', sans-serif;
}
```

### เพิ่ม Custom Sections

คุณสามารถสร้าง Section ใหม่ได้โดยใช้ HTML structure คล้ายๆ กับที่มีอยู่:

```html
<section class="custom-section">
    <div class="container">
        <h2 class="section-title">ชื่อ Section</h2>
        <!-- เนื้อหา -->
    </div>
</section>
```

---

## 🔧 คำแนะนำเพิ่มเติม

### การเพิ่มรูปภาพ

```html
<img src="path/to/image.jpg" alt="คำอธิบาย" class="content-image">
```

### การเพิ่มตาราง

```html
<table class="data-table">
    <thead>
        <tr>
            <th>หัวข้อ 1</th>
            <th>หัวข้อ 2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>ข้อมูล 1</td>
            <td>ข้อมูล 2</td>
        </tr>
    </tbody>
</table>
```

### การเพิ่ม Download Links

```html
<a href="path/to/file.pdf" download class="download-button">
    📄 ดาวน์โหลด PDF
</a>
```

---

## 📱 การทดสอบ

### Desktop
- ✅ Chrome, Firefox, Safari, Edge
- ✅ ความละเอียดต่างๆ

### Mobile
- ✅ iOS Safari
- ✅ Android Chrome
- ✅ Responsive design

### Performance
- ✅ Fast loading time
- ✅ Smooth animations
- ✅ Optimized images

---

## 🤝 การใช้เพื่อ Consulting

Website นี้ออกแบบเพื่อ:

1. **Showcase Expertise** - แสดงความเชี่ยวชาญในการสอน
2. **Lead Generation** - มี CTA สำหรับปรึกษาโครงการ
3. **Knowledge Sharing** - ผู้บริหารสามารถแชร์ให้ทีมได้
4. **Portfolio** - ใช้เป็นผลงานในการนำเสนอ

### Contact Points ใน Website

- 📧 Email: contact@example.com
- 📞 Phone: 090-xxx-xxxx
- 💼 Consultation Form

---

## 📞 ติดต่อ

**นายวีระยุทธ วันใหม่ (วี)**
- 📧 Email: [อีเมลของคุณ]
- 📱 Phone: 090-xxx-xxxx
- 🏥 ปคพ.๑ | แพทยสภา | กระทรวงสาธารณสุข

---

## 📄 License

© 2568 Digital Healthcare Leadership Program. All rights reserved.

---

## 🎯 Next Steps

1. ✅ **Session 2 สำเร็จแล้ว** - ใช้เป็น reference
2. 📝 **เพิ่ม Sessions 1, 3-12** - ใช้ template
3. 🎥 **อัพโหลดวิดีโอ** - NotebookLM → YouTube → Embed
4. 📊 **เพิ่มเอกสาร** - Upload PDF และ resources
5. 🚀 **Deploy online** - เลือก hosting platform
6. 📣 **แชร์กับผู้เรียน** - ส่งลิงก์ให้ผู้บริหาร

---

## 💡 Tips

- **Consistency** - รักษา style ให้เหมือนกันทุก session
- **Quality Over Quantity** - เน้นคุณภาพเนื้อหา
- **Update Regularly** - อัพเดตเนื้อหาหลังเรียนแต่ละครั้ง
- **Collect Feedback** - รับ feedback จากผู้เรียนเพื่อปรับปรุง
- **Promote** - ใช้ LinkedIn เพื่อแชร์เนื้อหา

---

**สร้างโดย Claude** 🤖 | Updated: พฤศจิกายน 2568
