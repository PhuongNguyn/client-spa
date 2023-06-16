import Link from "next/link";

const NavbarScroll = () => {
  return (
    <div className="fixed w-full navbar-scroll navbar px-4">
      <div className="2xl:container flex justify-between items-center">
        <div className="navbar-scroll-logo">
          <img src="/images/logo.png" width={100} height={80} />
        </div>
        <div>
          <ul>
            <li>
              {" "}
              <Link href={"/"}>Trang chủ</Link>{" "}
              <div className="underline-hover"></div>
            </li>
            <li>
              <Link href={"/dich-vu"}>Dịch vụ</Link>{" "}
              <div className="underline-hover"></div>
              <div className="dropdown-menu absolute">
                <Link href={"/dich-vu/test"}>
                  <p>Spa - Thư Giãn</p>
                </Link>
                <Link href={"/dich-vu/test"}>
                  <p>Massage Body</p>
                </Link>
                <Link href={"/dich-vu/test"}>
                  <p>Gội đầu</p>
                </Link>
              </div>
            </li>
            <li>
              <Link href={"/khuyen-mai"}>Khuyến mãi</Link>{" "}
              <div className="underline-hover"></div>
            </li>
            <li>
              <Link href={"/gioi-thieu"}>Giới thiệu</Link>{" "}
              <div className="underline-hover"></div>
            </li>
            <li>
              {" "}
              <Link href={"/tin-tuc"}>Tin tức</Link>{" "}
              <div className="underline-hover"></div>
            </li>
            <li>
              {" "}
              <Link href={"/dat-lich"}>Đặt lịch</Link>{" "}
              <div className="underline-hover"></div>
            </li>
            <li>
              {" "}
              <Link href={"/lien-he"}>Liên hệ</Link>{" "}
              <div className="underline-hover"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarScroll;
