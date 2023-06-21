import CryptoJS from "crypto-js";
import { encryptKey } from "./API";

export const encryptData = (payload: any) => {
  const jsonData = JSON.stringify(payload);
  return CryptoJS.AES.encrypt(jsonData, encryptKey).toString();
};


export const decryptData = (payload:string) =>{
    const decryptedBytes = CryptoJS.AES.decrypt(payload, encryptKey);
    return decryptedBytes.toString(CryptoJS.enc.Utf8);
}