import { collection, getDocs } from "firebase/firestore";
import { database } from "./firebase";

const collectionRef = collection(database, "github-usernames");

export async function getAllUsers() {
  const { docs } = await getDocs(collectionRef);
  let allUsers: { [username: string]: object; }[] = [];
  docs.map((doc) => allUsers.push({ ...doc.data() }));
  return allUsers;
}
