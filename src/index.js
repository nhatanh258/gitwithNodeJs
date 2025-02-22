const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars'); // Import đúng cách

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));// khai bao kiem tra file itnh 
//tra ve cac noi dung trong file tinh do


// HTTP logger (dùng để xem log request)
app.use(morgan('combined'));

// Cấu hình Handlebars với đuôi file `.hbs`
app.engine('hbs', engine({ extname: '.hbs' })); // Đổi phần mở rộng thành `.hbs`
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views')); // Đường dẫn tới thư mục views

// Route trang chủ
app.get('/', (req, res) => {
  res.render('home'); // Mặc định sẽ tìm 'home.hbs' trong thư mục views
});

app.get('/news', (req, res) => {
  res.render('news'); // Mặc định sẽ tìm 'home.hbs' trong thư mục views
});

// Lắng nghe cổng
app.listen(port, () => {
  console.log(`Server chạy tại: http://localhost:${port}`);
});
