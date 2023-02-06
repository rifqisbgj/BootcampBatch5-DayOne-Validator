const fs = require('fs');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
const Validator = require('validator');

readline.question(`Apa namamu? `, nameUser => {
    readline.question(`Apa emailmu? `, emailUser => {
        const isEmailValid = Validator.isEmail(emailUser);
        readline.question(`Apa nomor handphonemu? `, nohp => {
            const isNumberPhoneValid = Validator.isMobilePhone(nohp,'id-ID');
            readline.question(`Apa alamatmu? `, alamat => {
                if (isEmailValid && isNumberPhoneValid) {
                    console.log(`Hai ${nameUser}, datamu sukses diproses dengan email ${emailUser}, nomor HP ${nohp}, dan alamatmu di ${alamat}`);
                }
                
                if (!isEmailValid) {
                    console.log("WARN : Email tidak sesuai format");
                }

                if (!isNumberPhoneValid) {
                    console.log("WARN : No hp tidak sesuai format");
                }

                readline.close();
            })
        })
    })
})

// WriteFileSync
// fs.writeFileSync('test.txt','Hello Word secara synchronous');

// fs.readFile('test.txt', 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// })