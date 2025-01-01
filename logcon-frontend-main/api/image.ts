import axios from "axios";
import { apiInstance } from ".";

export async function uploadImage(formData: FormData): Promise<string> {
  return axios.post('/upload', formData, {
    headers: {
      'Content-Type':'multipart/form-data',
    },
  })
  .then(res => res.data)
  .catch(error => {
    throw new Error('file upload failed: ' + error);
  });
}