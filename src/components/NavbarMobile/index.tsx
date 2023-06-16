import { useEffect, useRef, useState } from "react";
import Hamburger from "hamburger-react";
import { BsSearch } from "react-icons/bs";
import SidebarMobile from "../SidebarMobile";
import { useRouter } from "next/router";

const NavbarMobile = () => {
  const router = useRouter();
  const sidebarRef = useRef();
  const [toggleSidebar, setToggleSidebar] = useState(false);
  useEffect(() => {
    if (!toggleSidebar) {
      if (sidebarRef.current) {
        //@ts-ignore
        sidebarRef.current.style.transform = "translateX(-100%)";
      }
    } else {
      if (sidebarRef.current) {
        //@ts-ignore
        sidebarRef.current.style.transform = "translateX(0%)";
      }
    }
  }, [toggleSidebar]);

  useEffect(() => {
    const closeSidebar = () => {
      setToggleSidebar(false);
      if (sidebarRef.current) {
        //@ts-ignore
        sidebarRef.current.style.transform = "translateX(-100%)";
      }
    };
    router.events.on("routeChangeComplete", closeSidebar);

    return () => {
      router.events.off("routeChangeComplete", closeSidebar);
    };
  });

  return (
    <>
      <SidebarMobile sidebarRef={sidebarRef} />
      <div className="navbar-mobile fixed w-full top-0 right-0 start-0 end-0">
        <div className="navbar-mobile-wrapper">
          <div className="navbar-mobile-toggle">
            <Hamburger toggled={toggleSidebar} toggle={setToggleSidebar} />
          </div>
          <div className="navbar-mobile-logo">
            <img width={70} src="/images/logo.png" />
          </div>
          <div className="navbar-mobile-search">
            <BsSearch className="cursor-pointer" size={20} />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarMobile;
