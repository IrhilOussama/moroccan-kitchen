// src/services/dishService.js
import { db, collection, getDocs } from "./firebaseConfigs";
import { query, where } from "firebase/firestore"

export async function getDishes() {
  try {
    const colRef = collection(db, "dishes");
    const snapshot = await getDocs(colRef);
    const dishList = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return dishList;
  } catch (error) {
    console.error("Error fetching dishes:", error.message);
    throw new Error("Failed to fetch dishes");
  }
};

export async function getDishBySlug(slug) {
  const snapshot = await getDocs(
    query(collection(db, "dishes"), where("slug", "==", slug))
  );
  return snapshot.docs[0]?.data();
}