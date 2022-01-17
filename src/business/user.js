import getUserConfig from "../services/userConfig";

export default async function getUser() {
  const user = await getUserConfig();
  return user;
}