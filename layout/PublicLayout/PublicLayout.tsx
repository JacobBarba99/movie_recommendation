import dynamic from "next/dynamic";

import styles from "./styles.module.scss";

const Navbar = dynamic(() => import("../../components/Navbar"));

const PublicLayout = ({ children }: any) => {
  return (
    <>
      <div className={styles.nav}>
        <Navbar />
      </div>
      <main className={styles.main}>{children}</main>
      <div className={styles.footer}></div>
    </>
  );
};

export default PublicLayout;
