import axios from "axios";

const options = {
  baseURL: "http://api-evoluir.bugaapps.com/api/",
  timeout: 1000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, PUT, PATCH, GET, DELETE, OPTIONS",
    "Access-Control-Allow-Headers":
      "Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization",
  },
};

export const encryptKey =
  '6rkqOAu~sX_W<zMb7;A;*K1`x@m}%~fDt4UgQYArngB*L$t_-!Ba!")t]<)0nE}';

export const API = axios.create(options);
