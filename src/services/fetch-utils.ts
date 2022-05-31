import { addDoc, collection, getDocs } from "firebase/firestore";
import { UserObject } from "../Interfaces";
import { database } from "./firebase";

const collectionRef = collection(database, 'github-usernames');

export async function getAllUsers() {
  const { docs } = await getDocs(collectionRef);
  const allUsers: UserObject[] = [];
  docs.map((doc):void => {
    const user = doc.data() as UserObject;
    allUsers.push(user);
  })
  return allUsers;
}

export async function githubStatus(username: string) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  return response.status;
}

export async function createUser(username: object) {
  await addDoc(collectionRef, username as any);
}

export async function githubInfo(username: string) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  const user = await response.json();
  console.log(user);
  return user;
}