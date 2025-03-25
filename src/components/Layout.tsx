import { ReactNode } from "react";
import { Navbar } from ".";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="">
      <Navbar />
      <main className="">{children}</main>
      {/* <footer className="text-center text-sm text-gray-400 py-4">
      © 2025 Fin
      </footer> */}
    </div>

  );
};

export default Layout;
