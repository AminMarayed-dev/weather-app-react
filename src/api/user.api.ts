import { apiUser } from "./config.api";

type User = {
  id: string | number;
  email: string;
  password: number;
  username: string;
};

export async function postUser(user: User) {
  const response = await apiUser.post("/users", user);
  return response.data;
}

export async function getUserByFilter({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  const response = await apiUser.get(
    `/users?username=${username}&password=${password}`
  );
  return response.data;
}
