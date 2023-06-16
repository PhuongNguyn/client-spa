import Link from "next/link";

const Navbar = () => {
  return (
    <div className="lg:container mx-auto navbar-page navbar mt-12">
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
  );
};

export default Navbar;
