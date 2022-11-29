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

module.exports = {
    bill,
    cancleBill
}