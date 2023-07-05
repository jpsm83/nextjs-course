import type { Metadata } from "next";
import getAllUsers from "@/lib/getAllUsers";
import Link from "next/link";

export const metadata: Metadata = {
  title: "users",
};

export default async function UsersPage() {
  const userData: Promise<User[]> = getAllUsers();

  const users = await userData;

  console.log("hello");

  const content = (
    <section>
      <h2>
        <Link href="/">Back to main</Link>
      </h2>
      <br />
      {users.map((user) => {
        return (
          <>
            <p key={user.id}>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </p>
            <br />
          </>
        );
      })}
    </section>
  );

  return content;
};