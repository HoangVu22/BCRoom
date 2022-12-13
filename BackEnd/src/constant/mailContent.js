function bill(
    customerName,
    billDate, 
    roomNumber, 
    hotelName, 
    address, 
    dateFrom, 
    dateTo, 
    kidNumber, 
    adultNumber, 
    price
) {
    return `<div>
		<h3 style="text-align: center">Thank for ${customerName} booking</h3>
		<p style="text-align: center">This is bill</p>
		<div style="text-align: center">
			<p style="font-weight: bold">You are booking: </p>
			<p>Bill date: <span>${billDate}</span></p>
			<p>Room number: <span>${roomNumber}</span></p>
			<p>Hotel: <span>${hotelName}</span></p>
			<p>Address: <span>${address}</span></p>
			<p>From date: <span>${dateFrom}</span> To: <span>${dateTo}</span></p>
			<p>With: <span>${kidNumber}</span> kid, <span>${adultNumber}</span> adult</p>
			<h4 style="color: red">Price: <span>${price}</span>vnd</h5>
		</div>
		<h4 style="text-align: center">Have a good time!</h4>
	</div>`
}

function cancleBill (
    customerName,
    roomNumber, 
    hotelName, 
    dateFrom, 
    dateTo, 
) {
    return `<div>
		<h3 style="text-align: center">Xin lỗi ${customerName}</h3>
		<p style="text-align: center">Vì một số vấn đề nên đặt phòng của bạn đã bị hủy</p>
		<div style="text-align: center">
			<p style="font-weight: bold">Chi tiết đơn đặt: </p>
			<p>Room number: <span>${roomNumber}</span></p>
			<p>Hotel: <span>${hotelName}</span></p>
			<p>From date: <span>${dateFrom}</span> To: <span>${dateTo}</span></p>
		</div>
		<h4 style="text-align: center">Một lần nữa, xin lỗi quý khách<h4>
	</div>`
}

function cancelBillFromClient (
    billId,
    customerName,
    roomNumber,
    hotelName,
    dateFrom,
    dateTo,
    reasons
) {
    return `<div>
        <h3 style="text-align: center">Yêu cầu hủy đơn đặt phòng:</h3>
        <div style="text-align: center">
            <p>Mã số: ${billId}</p>
            <p>Của khách hàng: ${customerName}</p>
        </div>
        <div style="text-align: center">
			<p style="font-weight: bold">Chi tiết đơn đặt: </p>
			<p>Room number: <span>${roomNumber}</span></p>
			<p>Hotel: <span>${hotelName}</span></p>
			<p>From date: <span>${dateFrom}</span> To: <span>${dateTo}</span></p>
		</div>
        <ul style="text-align: center">
            <h4>Lý do: </h4>
            ${reasons.map(reason => `<li>${reason}</li>`).join('')}    
        </ul>
    </div>`
}

function passwordRecovery (email, username, password, link) {
    return `<div>
        <h2>Tìm lại mật khẩu</h2>
        <p>Email: <span>${email}<span></p>
        <p>Tên tài khoản: <span>${username}</span></p>
        <p style="font-weight: bold">Đây là mật khẩu của bạn: ${password}</p>
        <p>Click vào link để xác nhận thay đổi: ${link}</p>
        <h5>Cố gắng đừng để quên mật khẩu, thân!</h5>
    </div>`
}

function paymentConfirmation (email, username, bookingId, amount) {
    return `<div>
        <h1>Xác nhận thanh toán</h1>
        <h3>Người dùng: ${username}</h3>
        <h4>Email: ${email}</h4>
        <h4>Số tiền đã thanh toán: ${amount} VND</h4>
        <h5>Đã thanh toán thành công cho đơn đặt ${bookingId}</h5>
    <div>`
}

module.exports = {
    bill,
    cancleBill,
    passwordRecovery,
    cancelBillFromClient,
    paymentConfirmation
}