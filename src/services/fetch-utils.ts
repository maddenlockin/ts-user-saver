import { collection, getDocs } from "firebase/firestore";
import { UserObject } from "../Interfaces";
import { database } from "./firebase";

const collectionRef = collection(database, "github-usernames");

export async function getAllUsers() {
  const { docs } = await getDocs(collectionRef);
  const allUsers: UserObject[] = [];
  docs.map((doc):void => {
    const user = doc.data() as UserObject;
    allUsers.push(user);
  })
  return allUsers;
}
