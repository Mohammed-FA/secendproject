import axios from "axios";
import { baseurl, url } from "./api";
const controller = "Account";

export function SignupAction(form) {
  return axios.post(`${baseurl}/${controller}/${url.SINGIN}`, form);
}

export function LoginAction(form) {
  return axios.post(`${baseurl}/${controller}/${url.LOGIN}`, form, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function CheckEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return "Please enter a valid email address";
  } else return "";
}

export function CheckPassword(password) {
  if (password.length < 6) {
    return "Password must be at least 6 characters long";
  } else if (!/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
    return "Password must contain at least one uppercase and one lowercase letter";
  } else return "";
}
