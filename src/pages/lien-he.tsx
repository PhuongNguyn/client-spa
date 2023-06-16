import HorizontalDivider from "@/components/common/Divider/Horizontal"
import { useState } from "react"
import { BiMapAlt } from 'react-icons/bi'
import { BsFillTelephoneFill } from 'react-icons/bs'

const Contact = () => {
    const [username, setUserName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const [description, setDescription] = useState("")

    const handleChangeUserName = (e: any) => {
        setUserName(e.target.value)
    }

    const handleChangePhoneNumber = (e: any) => {
        setPhoneNumber(e.target.value)
    }

    const handleChangeEmail = (e: any) => {
        setEmail(e.target.value)
    }

    const handleChangeDescription = (e: any) => {
        setDescription(e.target.value)
    }
    return (
        <div className="xl:container mx-auto">
            <h1 className="contact-page-title text-center mt-12">
                Liên Hệ
            </h1>
            <HorizontalDivider width="15%" />
            <div className="contact-page-map px-8 mt-8">
                <iframe className="contact-page-map-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3362.763246849221!2d109.18441215199081!3d12.235751776677503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31705d8879e98041%3A0xb78c4e821e05ec52!2zMTg3IFRy4bqnbiBOaOG6rXQgRHXhuq10LCBQaMaw4bubYyBIb8OgLCBOaGEgVHJhbmcsIEtow6FuaCBIw7JhLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1685901066060!5m2!1sen!2s" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="contact-page-detail mt-12 px-8">
                <div className="contact-page-list-campus">
                    <h2 className="contact-page-list-campus-title">Hệ Thống Delis Spa: </h2>
                    <div className="contact-page-list-campus-item mt-4">
                        <p className="contact-page-list-campus-item-title">Delis spa Nha Trang</p>
                        <p className="contact-page-list-campus-item-address mt-2"><BiMapAlt size={15} style={{ display: 'inline', marginRight: '3px' }} /> Số 187 - TT8 - K98 - Trần Nhật Duật nối dài thành phố Nha Trang Tỉnh Khánh Hoà</p>
                        <p className="contact-page-list-campus-item-hotline mt-2"><BsFillTelephoneFill size={15} style={{ display: 'inline', marginRight: '3px' }} /> 19004797</p>

                    </div>
                </div>
                <div className="contact-page-promotion-and-feedback">
                    <h2 className="contact-page-list-campus-title">NHẬN THÔNG TIN KHUYẾN MÃI & GÓP Ý DỊCH VỤ: </h2>
                    <div className="contact-page-input-information">
                        <form>
                            <div className="contact-page-input-username flex-1">
                                <input required placeholder="Họ tên" type="text" value={username} onChange={handleChangeUserName} />
                            </div>
                            <div className="contact-page-input-username flex-1">
                                <input required type="text" placeholder="Số điện thoại" value={phoneNumber} onChange={handleChangePhoneNumber} />
                            </div>
                            <div className="contact-page-input-username flex-1">
                                <input required type="text" placeholder="Email" value={email} onChange={handleChangeEmail} />
                            </div>
                            <div className="contact-page-input-username flex-1">
                                <input required type="text" placeholder="Nội dung" value={description} onChange={handleChangeDescription} />
                            </div>
                            <div className="booking-component-button">
                                <button type="submit">Phản hồi</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact