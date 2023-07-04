import styles from "./styles.module.css";

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
