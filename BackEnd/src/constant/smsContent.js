function passwordOtp (password, otp) {
    return `Bạn đang yêu cầu tìm lại mật khẩu, đây là mật khẩu mới: ${password}.
    Và đây là OTP: ${otp}`
}

module.exports = {
    passwordOtp
}