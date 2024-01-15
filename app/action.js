"use server";
import conectDatabases from "@/database/conection";

export async function getUser(data) {
  const { users } = await conectDatabases();
  const userData = await users
    .collection("user")
    .find({ email: data.email, password: data.password })
    .toArray();
    

  return JSON.parse(JSON.stringify(userData));
}
