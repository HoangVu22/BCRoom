# GUIDE LINE

## CREATE NEW MYSQL USER

- Open Mysql Workbench Or Mysql Command:
    - New user with username and password is 'bcroom'

`
    CREATE USER 'bcroom'@'localhost' IDENTIFIED WITH mysql_native_password BY 'bcroom';
`

`
    GRANT ALL PRIVILEGES ON *.* TO 'bcroom'@'localhost' WITH GRANT OPTION;
`

`
    FLUSH PRIVILEGES;
`
## CREATE A DATABASE

- Create a new empty database is naming 'bcroom_dev'

`
    CREATE DATABASE bcroom_dev;
`

## MAKE SURE INSTALLED PACKAGES IN BACKEND
`
    cd BackEnd
`

`
    npm install
`

## Running Migrations

`
    npx sequelize-cli db:migrate
`

## Running Seeds

`
    npx sequelize-cli db:seed:all
`

if already run this command 1 time, use:

`
    npx sequelize-cli db:seed --seed <newest file's name>
`

## TO START TESTING FRONTEND

- Install extension `Live Server` for VSCode
- Open a file .html and right click on it, choose `Open With Live Server`

## TO START TESTING API

- make sure you are in BackEnd folder, and all packages installed

`
    cd BackEnd
`

`
    npm install
`

- run dev server

`
    npm run dev
`

## PAYMENT

<div id=":ot" class="a3s aiL ">Kính gửi anh/chị,<br>
VNPAY xin gửi anh/chị thông tin kết nối vào môi trường test của Cổng thanh toán VNPAY: <br>
<strong>Xin lưu ý:</strong> <br>
<ul><li style="color:red">Thông tin dưới đây là môi trường Sandbox của VNPAY, sử dụng để kết nối kiểm thử hệ thống. Merchant không sử dụng thông tin này để đưa ra cho khách hàng thanh toán thật.</li></ul><br>
<ul><li style="color:red">Merchant cần tạo địa chỉ IPN (server call server) sử dụng cập nhật tình trạng thanh toán (trạng thái thanh toán) cho giao dịch. Merchant cần gửi cho VNPAY URL này.</li></ul><br>
<strong>Thông tin cấu hình:</strong> <br>
<ul><li>Terminal ID / Mã Website (<strong>vnp_TmnCode</strong>): <strong>6YJ7K9AM </strong></li></ul><br>
<ul><li>Secret Key / Chuỗi bí mật tạo checksum (<strong>vnp_HashSecret</strong>): <strong>LRGHNVWNAPZAUHLQUBPOYLCKYQEDOF<wbr>GA </strong></li></ul><br>
<ul><li>Url thanh toán môi trường TEST (<strong>vnp_Url</strong>): <strong><a href="https://sandbox.vnpayment.vn/paymentv2/vpcpay.html" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://sandbox.vnpayment.vn/paymentv2/vpcpay.html&amp;source=gmail&amp;ust=1670574818589000&amp;usg=AOvVaw1g6xkCMaFRXw3ZwJYDIcn7">https://sandbox.vnpayment.vn/<wbr>paymentv2/vpcpay.html</a></strong></li></ul><br>
<strong>Thông tin truy cập Merchant Admin để quản lý giao dịch: </strong><br>
<ul><li>Địa chỉ:&nbsp;<a href="https://sandbox.vnpayment.vn/merchantv2/" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://sandbox.vnpayment.vn/merchantv2/&amp;source=gmail&amp;ust=1670574818589000&amp;usg=AOvVaw2GDQDKWk6XD_T6rulSSLqz">https://sandbox.<wbr>vnpayment.vn/merchantv2/</a></li></ul><br>
<ul><li>Tên đăng nhập:  <a href="mailto:anhkun123456@gmail.com" target="_blank">anhkun123456@gmail.com</a></li></ul><br>
<ul><li>Mật khẩu: <strong>(Là mật khẩu nhập tại giao diện đăng ký Merchant môi trường TEST)</strong> </li></ul><br>
<strong>Kiểm tra (test case) – IPN URL: </strong><br>
<ul><li>Kịch bản test (SIT): <a href="https://sandbox.vnpayment.vn/vnpaygw-sit-testing/user/login" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://sandbox.vnpayment.vn/vnpaygw-sit-testing/user/login&amp;source=gmail&amp;ust=1670574818589000&amp;usg=AOvVaw3bp6p9Wfs-Ty1CdXG1vdmf">https://sandbox.vnpayment.vn/<wbr>vnpaygw-sit-testing/user/login</a></li></ul><br>
<ul><li>Tên đăng nhập:  <a href="mailto:anhkun123456@gmail.com" target="_blank">anhkun123456@gmail.com</a></li></ul><br>
<ul><li>Mật khẩu: <strong>(Là mật khẩu nhập tại giao diện đăng ký Merchant môi trường TEST)</strong> </li></ul><br>
<strong>Tài liệu:  </strong><br>
<ul><li>Tài liệu hướng dẫn tích hợp:&nbsp;<a href="https://sandbox.vnpayment.vn/apis/docs/gioi-thieu/" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://sandbox.vnpayment.vn/apis/docs/gioi-thieu/&amp;source=gmail&amp;ust=1670574818589000&amp;usg=AOvVaw3oTZgNCDIWh7JJlQvYlyp3">https://sandbox.<wbr>vnpayment.vn/apis/docs/gioi-<wbr>thieu/</a></li></ul><br>
<ul><li>Code demo tích hợp:&nbsp;<a href="https://sandbox.vnpayment.vn/apis/downloads/#" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://sandbox.vnpayment.vn/apis/downloads/%23&amp;source=gmail&amp;ust=1670574818589000&amp;usg=AOvVaw2iYi_XISTHncMA4qBoaAyD">https://sandbox.<wbr>vnpayment.vn/apis/vnpay-demo/<wbr>code-demo-tích-hợp</a></li></ul><br>
<strong>Thẻ test:  </strong><br>
<table align="center" border="1" cellpadding="0" cellspacing="0" width="600"><tbody><tr><td>Ngân hàng</td><td>NCB</td></tr> <tr><td>Số thẻ</td><td>9704198526191432198</td></tr> <tr><td>Tên chủ thẻ</td><td>NGUYEN VAN A</td></tr> <tr><td>Ngày phát hành</td><td>07/15</td></tr> <tr><td>Mật khẩu OTP</td><td>123456</td></tr> </tbody></table><br>
<p>Ngoài ra anh/chị có thể dùng thử demo Cổng thanh toán VNPAY tại:&nbsp;<a href="https://sandbox.vnpayment.vn/apis/vnpay-demo/" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://sandbox.vnpayment.vn/apis/vnpay-demo/&amp;source=gmail&amp;ust=1670574818589000&amp;usg=AOvVaw1DsR4OFopAFziPIVmIH9MF">https://sandbox.<wbr>vnpayment.vn/apis/vnpay-demo/</a>đ<wbr>ể có những trải nghiệm 
đầu tiên khi tích hợp với Cổng thanh toán VNPAYQR.<br>
Cần thêm thông tin, anh/chị có thể trao đổi trực tiếp với em qua thông tin ở phần chữ ký của email này.<br>
Cảm ơn anh/chị.<br>
Mọi thắc mắc và góp ý, xin vui lòng liên hệ với chúng tôi qua:<br>
Email: <a href="mailto:support.vnpayment@vnpay.vn" target="_blank">support.vnpayment@vnpay.vn</a><br>
Hotline: 1900 55 55 77<br><br>
Trân trọng<br></p>
</div>