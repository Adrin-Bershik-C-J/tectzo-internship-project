instead of taking phone from body get from req.user.phone in addCompany
understand the flow and make if-cases accordingly ; for eg, if user has not send otp, give a return response saying first fill otp
make role in otp field itself instead of in owner as it a general app user field
once a otp is sent, again the user should not be able to sent otp without the otp getting verified;next otp can be send after a time of 30s i.e after the current otp expires the next otp can be sent; the rate limiter is the same