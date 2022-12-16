function passwordOtp (password, otp) {
    return `Bạn đang yêu cầu tìm lại mật khẩu, đây là mật khẩu mới: ${password}.
    Và đây là OTP: ${otp}`
}

function phoneVerification (otp) {
    return `Xác thực số điện thoại. Đây là mã otp: ${otp}`
}

module.exports = {
    passwordOtp,
    phoneVerification
}