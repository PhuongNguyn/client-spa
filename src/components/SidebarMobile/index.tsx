import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";

const SidebarMobile = ({ sidebarRef }: { sidebarRef: any }) => {
  const [serviceChild, setServiceChild] = useState(false);
  const serviceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (serviceChild) {
      if (serviceRef.current) serviceRef.current.style.height = `${55.5 * 3}px`;
    } else {
      if (serviceRef.current) serviceRef.current.style.height = "0px";
    }
  }, [serviceChild]);
  return (
    <div ref={sidebarRef} className="sidebar-mobile">
      <div className="sidebar-mobile-content">
        <ul>
          <li>
            <Link href={"/"}>Trang Chủ</Link>
          </li>
          <li onClick={() => setServiceChild(!serviceChild)}>
            <Link href={"/dich-vu"}>Dịch Vụ </Link>
            <AiFillCaretDown className="inline mx-2 icon-drop-down" />
          </li>
          <div ref={serviceRef} className="sidebar-mobile-service-child">
            <ul>
              <li>
                <Link href={"/dich-vu/test"}>Spa</Link>
              </li>
              <li>
                <Link href={"/dich-vu/test"}>Massage</Link>
              </li>
              <li>
                <Link href={"/dich-vu/test"}>Gội đầu</Link>
              </li>
            </ul>
          </div>
          <li>
            <Link href={"/khuyen-mai"}>Khuyến Mãi</Link>
          </li>
          <li>
            <Link href={"/gioi-thieu"}>Giới Thiệu</Link>
          </li>
          <li>
            <Link href={"/tin-tuc"}>Tin Tức</Link>
          </li>
          <li>
            <Link href={"/dat-lich"}>Đặt Lịch</Link>
          </li>
          <li>
            <Link href={"/lien-he"}>Liên Hệ</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarMobile;
