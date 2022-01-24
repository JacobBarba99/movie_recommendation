import type { ReactNode } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="layout">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <style jsx>{`
        .layout {
          width: 100%;
          min-height: 100vh;
          display: grid;
          grid-template-rows: auto 1fr auto;
        }
      `}</style>
    </div>
  );
};

export default Layout;
