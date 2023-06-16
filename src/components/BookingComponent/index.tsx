import { useState } from "react"
import { Input } from 'antd'
import HorizontalDivider from "../common/Divider/Horizontal"


const BookingComponent = () => {
    const [username, setUsername] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [description, setDescription] = useState("")
    const [service, setService] = useState<string[]>([])
    const [dateTime, setDateTime] = useState("")

    const services = [
        {
            _id: "1",
            name: "Massage Toàn Thân"
        },
        {
            _id: "2",
            name: "Massage Toàn Thân"
        },
        {
            _id: "3",
            name: "Massage Toàn Thân"
        },
        {
            _id: "4",
            name: "Massage Toàn Thân"
        }
    ]

    const handleChangeUserName = (e: any) => {
        setUsername(e.target.value)
    }

    const handleChangePhoneNumber = (e: any) => {
        setPhoneNumber(e.target.value)
    }

    const handleChangeDescription = (e: any) => {
        setDescription(e.target.value)
    }

    const handleChooseService = (id: string) => {

        if (service.includes(id)) {
            setService(service.filter(item => item != id))
            return
        } else {
            setService([...service, id])
            return
        }
    }

    return (
        <>
            <h1 className="booking-page-title text-center mt-12">
                Đặt lịch
            </h1>
            <HorizontalDivider width="15%" />
            <div className="booking-component xl:container mx-auto mt-20 flex flex-wrap-reverse gap-6">
                <div className="booking-component-layout relative">
                    <div className="booking-component-layout-image-1">
                        <img src="/images/image-booking-1.webp" alt="delis-spa" />
                    </div>
                    <div className="booking-component-layout-image-2">
                        <img src="/images/img-booking-2.webp" alt="delis-spa" />
                    </div>
                </div>
                <div className="booking-component-detail">
                    <form>
                    <div className="booking-component-detail-input-information flex gap-8">
                        <div className="booking-component-detail-input-username flex-1">
                            <input required placeholder="Họ tên" type="text" value={username} onChange={handleChangeUserName} />
                        </div>
                        <div className="booking-component-detail-input-username flex-1">
                            <input required type="text" placeholder="Số điện thoại" value={phoneNumber} onChange={handleChangePhoneNumber} />
                        </div>
                    </div>
                    <div className="booking-component-detail-description">
                        <input type="text" placeholder="Nội dung đặt lịch" value={description} onChange={handleChangeDescription} />
                    </div>
                    <div className="booking-component-detail-service flex flex-wrap  mt-4">
                        {services.map(item => <div key={item._id} className={`booking-component-detail-service-option ${service.includes(item._id) ? 'booking-component-detail-active' : ''}`} onClick={() => handleChooseService(item._id)}>
                            <span>{item.name}</span>
                        </div>)}

                    </div>
                    <div className="mt-6" id="booking-input-date">
                        <Input required type="date" value={dateTime} onChange={(e) => setDateTime(e.target.value)} />
                    </div>
                    <div className="booking-component-button">
                        <button type="submit">Đặt Lịch</button>
                        <p className="booking-component-note mt-10">Tất cả các ngày trong tuần: 9:00 sáng tới 20:00 tối</p>
                    </div>
                    </form>
                </div>

            </div>
        </>

    )
}

export default BookingComponent