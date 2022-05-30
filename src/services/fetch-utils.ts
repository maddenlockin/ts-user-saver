import { collection } from "firebase/firestore";
import { database } from "./firebase";

collection(database, "github_urls");