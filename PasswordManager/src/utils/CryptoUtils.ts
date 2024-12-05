// utils/CryptoUtils.ts
import CryptoJS from 'crypto-js';

class PasswordEncryption {
  public static decryptPassword(encryptedPassword: string, secretKey: string): string {
    const bytes = CryptoJS.AES.decrypt(encryptedPassword, secretKey);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);
    return decrypted;
  }

  public static encryptPassword(password: string, secretKey: string): string {
    const encrypted = CryptoJS.AES.encrypt(password, secretKey).toString();
    return encrypted;
  }
}

export default PasswordEncryption;