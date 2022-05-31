import { addDoc, collection, getDocs } from "firebase/firestore";
import { UserListObject } from "../Interfaces";
import { database } from "./firebase";

const collectionRef = collection(database, 'github-usernames');

export async function getAllUsers() {
  const { docs } = await getDocs(collectionRef);
  const allUsers: UserListObject[] = [];
  docs.map((doc):void => {
    const user = doc.data() as UserListObject;
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
  const { 
    name, 
    public_repos, 
    public_gists, 
    followers, 
    following, 
    created_at
  } = await response.json();
  return { name, public_repos, public_gists, followers, following, created_at };
}