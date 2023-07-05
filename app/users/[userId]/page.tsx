import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPost";
import { Suspense } from "react";
import UserPosts from "./components/UserPosts";
import Link from "next/link";
import type { Metadata } from "next";

type Params = {
  params: {
    userId: string;
  };
};

let user: User;

export async function generateMetadata({ params: { userId } }: Params): Promise<Metadata> {
    const userData: Promise<User> = getUser(userId);
    user = await userData

    return {
        title: user.name,
        description: `${user.name}'s page!`
    }
}

export default async function UserPage({ params: { userId } }: Params) {
  // requesting data in paralel because we are not using await here
  const userData: Promise<User> = getUser(userId);
  const userPostsData: Promise<Post[]> = getUserPosts(userId);

  //   const [user, userPosts] = await Promise.all([userData, userPostsData]);

  user = await userData

  return (
    <>
      <h2>{user.name}</h2>
      <br />
      <Suspense>
        <UserPosts promise={userPostsData} />
      </Suspense>
      <Link href={"/users"} >back to users</Link>
    </>
  );
}
