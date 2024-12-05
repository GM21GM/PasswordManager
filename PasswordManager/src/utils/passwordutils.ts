import CryptoJS, { enc } from 'crypto-js';

function encryptPassword(password: string): string {
    return CryptoJS.AES.encrypt(password, 'secret').toString();
}

function decryptPassword(encryptedPassword: string, secretKey: string): string {
    const bytes = CryptoJS.AES.decrypt(encryptedPassword, secretKey);
    return bytes.toString(enc.Utf8);
}

export { encryptPassword, decryptPassword };