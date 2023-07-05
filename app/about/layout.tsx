import styles from "./styles.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "about",
  description: "testing about"
}

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      <nav>about nav bar</nav>
      <main className={styles.main}>
        {children}
    </main>
    </>
  );
};

export default Layout;
