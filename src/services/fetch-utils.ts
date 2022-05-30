import { collection, getDocs } from "firebase/firestore";
import { database } from "./firebase";

const collectionRef = collection(database, "github-usernames");

export async function getAllUsers() {
  const response = await getDocs(collectionRef);
  let allUsers: { id: string; }[] = [];
  response.docs.map((doc) => allUsers.push({...doc.data(), id: doc.id}));
  console.log(allUsers, 'all users')
}
