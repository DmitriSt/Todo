import axios from "axios";

export default async function getUserConfig() {
  const res = await axios.get('/configs/user.json');
  return res.data;
}