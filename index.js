const express = require('express')
//Module express là một framework Node.js phổ biến cho việc xây dựng ứng dụng web.
const app = express()//tạo một ứng dụng Express bằng cách gọi hàm express(). Khi gọi 
// express(), bạn tạo ra một đối tượng ứng dụng Express để xử lý các yêu cầu HTTP.
const port = 3000
//Đoạn mã này định nghĩa một route GET với đường dẫn là `'/'`. Khi có yêu cầu GET gửi đến `
// '/`', hàm callback sẽ được gọi. Trong trường hợp này, hàm này trả về chuỗi `'Hello World!'` khi có yêu cầu GET.
app.get('/', (req, res) => {// response
    var a = 4;
    var b = 5;
    var c = a + b;
  res.send('Hello World!')// day la mot cach viet return
})

app.listen(port, () => {
    //hàm callback sẽ được gọi và in ra màn hình dòng thông báo "Example app
    //  listening on port {port}". Điều này cho biết máy chủ đã bắt đầu lắng nghe các yêu cầu từ client trên cổng đã chỉ định. 
  console.log(`Example app listening on port http://localhost:${port}`)
// console.log(`Example app listening on port http:${port}`)
})