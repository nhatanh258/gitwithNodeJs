const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars'); // Import đúng cách
const route = require('./routes/index');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public'))); // khai bao kiem tra file itnh
//tra ve cac noi dung trong file tinh do

// cai dat khoi midleware trung gian o giua de xu ly luong du ieu truyen ve doi tuong cho form date trong method pót
// voi method get da duoc tich hop doi tuong san nen khong can phuong thuc nay
app.use(express.urlencoded()); // xu ly du lieu dang html/css
app.use(express.json()); // xu ly du lieu dang file js code vd: index.js of javascrpit
// sau khi cai bo phan trung gian giai ma thi phan request.body moi duoc tich hop doi tuong tra ve

// HTTP logger (dùng để xem log request)
//app.use(morgan('combined'));

// Cấu hình Handlebars với đuôi file `.hbs`
app.engine('hbs', engine({ extname: '.hbs' })); // Đổi phần mở rộng thành `.hbs`
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views')); // Đường dẫn tới thư mục views

// khoi tao tuyen duong
route(app);

// Lắng nghe cổng
app.listen(port, () => {
    console.log(`Server chạy tại: http://localhost:${port}`);
});
