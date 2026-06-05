"use server";
import { revalidatePath } from "next/cache";
import { addPost } from "../../../database/postdb";
// import { date } from "better-auth";

export const hadlePostAction = async (formData) => {
  const title = formData.get("title");
  const description = formData.get("description");
  addPost({ id: Date.now(), title, description });
  revalidatePath("/server-action");
};
