## DEMO

# https://frontend-practice-alpha.vercel.app/

### โจทย์ 1 การสร้าง To-Do List แบบ Drag and Drop

#### รายละเอียด

สร้างแอปพลิเคชัน To-Do List ที่ผู้ใช้สามารถเพิ่มรายการสิ่งที่ต้องทำ แก้ไข ลบรายการ และสามารถจัดเรียงรายการด้วยการลากและวาง (Drag and Drop)

ใช้ HTML, CSS, และ JavaScript (หรือ React/Angular/Vue ก็ได้ตามความถนัด)
รายการที่ต้องทำจะถูกบันทึกใน LocalStorage เพื่อคงอยู่หลังจากรีเฟรชหน้าเว็บ
มีการแจ้งเตือนหากผู้ใช้พยายามลบรายการ โดยให้มีการยืนยันการลบก่อน

#### สิ่งที่ทดสอบ

ความเข้าใจใน DOM และ event handling
การทำงานกับ LocalStorage
การจัดการ state และ UX design (ถ้าใช้ React/Angular/Vue)

### โจทย์ 2 Responsive Image Gallery

### รายละเอียด

สร้างแกลเลอรีรูปภาพที่มีการแสดงผลที่เหมาะสมสำหรับทุกขนาดหน้าจอ (Responsive)
รูปภาพควรปรับขนาดตามหน้าจอ และเปลี่ยนรูปแบบการจัดเรียงจากหลายแถว (grid) บนหน้าจอใหญ่ เป็นรูปแบบคอลัมน์เดี่ยวบนหน้าจอมือถือ
เมื่อคลิกที่รูปภาพ ควรเปิดรูปภาพขนาดใหญ่ใน modal
มีการเลื่อนแกลเลอรีได้แบบ Infinite Scroll เพื่อโหลดรูปภาพเพิ่มเมื่อเลื่อนลงถึงจุดล่างสุด

#### สิ่งที่ทดสอบ

ความเข้าใจใน Responsive Design
การใช้ CSS Grid หรือ Flexbox
การจัดการ event และการทำงานกับ modal
การสร้าง Infinite Scroll อย่างเหมาะสม

### โจทย์ 3 การสร้างฟอร์มสมัครสมาชิกที่มีการยืนยันข้อมูล

#### รายละเอียด

สร้างฟอร์มสมัครสมาชิกที่มีการตรวจสอบข้อมูลในเบื้องต้น เช่น การตรวจสอบอีเมลและรหัสผ่าน
ช่องกรอกอีเมลจะต้องมีรูปแบบที่ถูกต้อง (ใช้ Regular Expression)
รหัสผ่านต้องมีความยาวไม่น้อยกว่า 8 ตัวอักษร และมีทั้งตัวอักษรพิมพ์ใหญ่ พิมพ์เล็ก และตัวเลข
แสดงข้อความแจ้งเตือนเมื่อมีการกรอกข้อมูลไม่ถูกต้อง
มีการตรวจสอบยืนยันรหัสผ่านที่ต้องตรงกับการกรอกครั้งแรก (Confirm Password)

#### สิ่งที่ทดสอบ

การจัดการฟอร์มและ validation
การใช้ Regular Expressions สำหรับตรวจสอบรูปแบบข้อมูล
การสร้างประสบการณ์การใช้งานที่ดี (UX)

### โจทย์ 4 การสร้างระบบค้นหาข้อมูล (Search Filter)

####รายละเอียด
สร้างหน้าเว็บที่มีรายการสินค้า (Product List) และมีช่องค้นหาที่ช่วยกรองรายการสินค้าแบบเรียลไทม์ตามคำที่ผู้ใช้กรอก

ใช้ JavaScript หรือ Framework ที่ถนัดในการกรองข้อมูล
แสดงผลรายการสินค้าอย่างสวยงามในรูปแบบการ์ด
ให้การค้นหาเป็น Case-Insensitive (ไม่สนใจการพิมพ์เล็ก-ใหญ่)
สิ่งที่ทดสอบ:

ความสามารถในการทำงานกับ Array และการค้นหาข้อมูล
การจัดการ UI ในการแสดงผลแบบเรียลไทม์

### โจทย์ 5 การสร้างแอปจับเวลา (Timer)

#### รายละเอียด

สร้างแอปพลิเคชันจับเวลา (Timer) ที่สามารถนับเวลาถอยหลังและนับเวลาขึ้นได้

ให้ผู้ใช้สามารถเริ่ม/หยุด/รีเซ็ตเวลาได้
มีการแสดงเวลาที่เหลือ (กรณีนับถอยหลัง) และมีเสียงแจ้งเตือนเมื่อหมดเวลา
ใช้ JavaScript สำหรับการจัดการเวลา และ CSS เพื่อทำให้ UI สวยงาม
สิ่งที่ทดสอบ:

การจัดการ event และ state ใน JavaScript
ความสามารถในการใช้ setTimeout หรือ setInterval
การจัดการกับ UI ที่เกี่ยวข้องกับเวลา

### โจทย์ 6 สร้างเกมจับคู่ภาพ (Memory Game)

#### รายละเอียด

สร้างเกมจับคู่ภาพ (Memory Game) ที่ผู้เล่นต้องคลิกเพื่อเปิดการ์ดสองใบ และจับคู่ภาพที่เหมือนกัน

หากภาพไม่ตรงกัน ให้การ์ดกลับไปปิดเหมือนเดิม
หากจับคู่ได้ ให้การ์ดยังคงเปิดอยู่
ผู้เล่นจะชนะเกมเมื่อจับคู่ได้ทั้งหมด
สิ่งที่ทดสอบ:

การจัดการ DOM และ state
การจัดการ event และ logic ของเกม
การใช้ CSS เพื่อทำให้การ์ดดูมีสไตล์

### โจทย์ 7 การแสดงผล API ข้อมูลสภาพอากาศ (Weather API)

#### รายละเอียด

สร้างหน้าเว็บที่ดึงข้อมูลสภาพอากาศจาก OpenWeather API มาแสดงผล

แสดงผลข้อมูลสภาพอากาศ เช่น อุณหภูมิ ความชื้น และคำพยากรณ์
ให้ผู้ใช้สามารถกรอกชื่อเมืองเพื่อค้นหาสภาพอากาศของเมืองนั้น ๆ
มีการแสดงผลที่สวยงามและ Responsive สำหรับอุปกรณ์ต่าง ๆ
สิ่งที่ทดสอบ:

การทำงานกับ API และ Fetch/AXIOS
การแสดงผลข้อมูลจาก API
การทำงานกับ Responsive Design

### โจทย์ 8 การสร้างระบบการแบ่งหน้าข้อมูล (Pagination)

#### รายละเอียด

สร้างระบบการแบ่งหน้าข้อมูล (Pagination) สำหรับรายการข้อมูลที่ยาว

แสดงข้อมูลแบบแบ่งหน้า เช่น หน้าละ 10 รายการ
ให้ผู้ใช้สามารถเลื่อนดูหน้าอื่น ๆ ได้ผ่านปุ่ม Next, Previous, หรือการเลือกหมายเลขหน้า
ใช้ JavaScript หรือ Framework ที่ถนัดในการทำงานกับข้อมูล
สิ่งที่ทดสอบ:

การจัดการ Array และการแบ่งข้อมูลเป็นหน้า
การจัดการกับการโต้ตอบของผู้ใช้ (User Interaction)
UX/UI Design ในการจัดการข้อมูลจำนวนมาก

### โจทย์ 9 ระบบการจัดการตะกร้าสินค้า (Shopping Cart)

#### รายละเอียด

สร้างหน้าเว็บที่มีรายการสินค้า และให้ผู้ใช้สามารถเพิ่มสินค้าไปยังตะกร้าสินค้า

ให้มีปุ่มสำหรับเพิ่มและลดจำนวนสินค้าในตะกร้า
คำนวณราคารวมของสินค้าทั้งหมดที่อยู่ในตะกร้า
ใช้ JavaScript หรือ Framework เพื่อจัดการ state ของตะกร้าสินค้า
สิ่งที่ทดสอบ:

การจัดการ state และการคำนวณราคารวม
การทำงานกับ array ของสินค้า
การสร้างประสบการณ์การใช้งานที่ราบรื่น

### โจทย์ 10 การสร้างระบบ Dark Mode/Light Mode

#### รายละเอียด

สร้างฟีเจอร์ที่ให้ผู้ใช้สามารถสลับระหว่าง Dark Mode และ Light Mode ในหน้าเว็บ

จดจำโหมดที่เลือกไว้หลังจากผู้ใช้ปิดและเปิดเบราว์เซอร์ใหม่ (ใช้ LocalStorage)
ออกแบบ UI ให้ดูดีในทั้งสองโหมด
ใช้ CSS Variables เพื่อจัดการสีที่เปลี่ยนไปในแต่ละโหมด
สิ่งที่ทดสอบ:

การใช้ CSS Variables และ JavaScript ในการเปลี่ยนธีม
การจัดการกับ LocalStorage
การออกแบบ UI ที่ยืดหยุ่น

### โจทย์ 11 การสร้าง Animation ในการโหลดข้อมูล (Loading Animation)

#### รายละเอียด

สร้างหน้าเว็บที่มีการแสดงผล animation ในระหว่างที่กำลังโหลดข้อมูล

ใช้ CSS และ JavaScript หรือ Framework ที่ถนัดในการแสดง animation
แสดงผล animation ระหว่างดึงข้อมูลจาก API หรือการประมวลผลข้อมูลที่ใช้เวลานาน
ให้ animation หยุดทำงานเมื่อข้อมูลถูกโหลดครบถ้วน
สิ่งที่ทดสอบ:

ความเข้าใจในการจัดการ asynchronous data
การออกแบบ animation ด้วย CSS หรือ JavaScript
การจัดการ UX ในขณะที่รอการประมวลผลข้อมูล
