class GenerateCode {
    generateVerificationCode() {
        let unique_code = Math.floor(1000 + Math.random() * 9000);
        return unique_code;
    }
}

module.exports = GenerateCode;