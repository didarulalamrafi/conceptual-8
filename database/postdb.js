import { revalidatePath } from "next/cache";

const posts = [
  {
    id: 1,
    title: "Didarul Alam",
    description: "sdfksdjfwejfsd",
  },
  {
    id: 2,
    title: "Alam",
    description: "Alama fdi fdkf fjke",
  },
  {
    id: 3,
    title: "Rafi",
    description: "kfkdrj dkfsd",
  },
];

export const addPost = (newPost) => {
  posts.push(newPost);
  //   revalidatePath("/server-action");
  console.log(posts);
};

export const getPost = () => {
  return posts;
};
