import { json } from "stream/consumers";
import { iLoginData } from "../types";
import { API, encryptKey } from "./API";
import CryptoJS from "crypto-js";
import Cookies from "js-cookie";
import { encryptData } from "./encryptData";

export const loginService = async (
  data: iLoginData,
  keepLogged: boolean = false
) => {
  try {
    console.log(data);
    const response = await API.post("auth/game", data, {
      headers: {
        "Content-Type": "application/json"
      },
    });

    if (keepLogged) {
      const encryptedData = encryptData(response.data.dta);
      Cookies.set("userData", encryptedData, {
        secure: true,
        sameSite: "strict",
      });
    }
    console.log(response.data.data);
  } catch (error) {
    if (error instanceof Error) alert(error.message);
    else {
      alert("houve um erro!");
    }
  }
};
