import axios from "axios";
import { baseurl, url } from "../api";

export async function Addproduct(form) {
  return await axios.post(`${baseurl}/${url.PRODUCT}`, form);
}

export async function Updateproduct(id, form) {
  return await axios.put(`${baseurl}/${url.PRODUCT}/${id}`, form);
}

export async function GetAllProduct() {
  return await axios.get(`${baseurl}/${url.PRODUCT}`, {
    headers: { "Content-Type": "application/json" },
  });
}

export async function GetProductsPagination(from = 0, to = 10) {
  return await axios.get(`${baseurl}/${url.PRODUCT}/${url.PRODUCTPAGINATOIN}`, {
    params: { from, to },
    headers: { "Content-Type": "application/json" },
  });
}

export async function Addcolor(formData) {
  return await axios.post(`${baseurl}/${url.ADDCOLOR}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
}

export async function GetProductDetails(id) {
  return await axios.get(`${baseurl}/${url.PRODUCT}/${url.DETAILS}/${id}`);
}

export async function DeleteProduct(id) {
  return await axios.delete(`${baseurl}/${url.PRODUCT}/${id}`);
}
