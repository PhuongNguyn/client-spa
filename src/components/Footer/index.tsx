import Link from "next/link"
import GetPromotion from "../GetPromotion"
import { AiFillInstagram } from "react-icons/ai"
import { FaFacebookSquare } from "react-icons/fa"
import { SiZalo } from 'react-icons/si'

const Footer = () => {
  return (
    <footer className="mt-12">
      <div className="footer-wrapper">
        <div className="footer-information px-3">
          <div className="footer-all-info flex 2xl:container mx-auto items-center">
            <div className="footer-information-inner flex-1 text-center flex justify-center">
              <div>
                <h2 className="footer-information-title">Doanh nghiệp</h2>
                <h2 className="footer-information-title">Delis Spa</h2>
                <p className="footer-information-address">Số 187 - TT8 - K98 - Trần Nhật Duật nối dài thành phố Nha Trang tỉnh Khánh Hoà</p>
                <p className="footer-information-contact">Email: cskh@shynhpremium.vn | 1900989800</p>
                <div className="footer-information-social flex gap-2 justify-center mt-3">
                  <Link href={'https://www.instagram.com/delisbeautyspa/'} target="_blank"><AiFillInstagram size={27} /></Link>
                  <Link href={'https://www.facebook.com/delisspanhatrang/'} target="_blank"><FaFacebookSquare size={25} /></Link>
                  <p className="flex"><SiZalo size={25} /> <span className="ml-1">079.288.4567</span></p>
                </div>
              </div>
            </div>
            <div className="footer-logo flex-1">
              <div className="flex justify-center">
                <img className="footer-logo-image" src="/images/logo.png" width={180} height={150} alt="delis spa" />
              </div>
            </div>
            <div className="footer-map flex-1 flex justify-center">
              <GetPromotion />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-address text-center">
        <p className="footer-address-name text-bold">Delis Spa Nha Trang</p>
        <p className="footer-address-content">
          Số 187 - TT8 - K98 - Trần Nhật Duật nối dài thành phố Nha Trang tỉnh
          Khánh Hoà
        </p>
      </div>
      <div className="footer-license text-center">
        <p className="footer-license-content">© 2023 DELIS SPA.</p>
      </div>
    </footer>
  );
};

export default Footer;
