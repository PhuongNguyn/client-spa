import {FaUser, FaPhone} from 'react-icons/fa'

const GetPromotion = () => {
    return (
        <div className='get-promotion-box'>
            <p className="sign-to-promotion">Đăng ký nhận khuyến mãi</p>
            <div className="form-sign-to-promotion mt-2">
                <div className='relative'>
                    <div className='absolute right-3 top-3'><FaUser className='icon-get-promotion' size={23}/></div>
                    <input className="form-sign-to-promotion-username" placeholder="Vui lòng nhập họ tên"/>
                </div>
                <div className='relative'>
                    <div className='absolute right-3 top-3'><FaPhone className='icon-get-promotion' size={23}/></div>
                    <input className="form-sign-to-promotion-phoneNumber" placeholder="Vui lòng nhập số điện thoại"/>
                </div>
                <div className="button-get-promotion w-full mt-3 p-2 cursor-pointer">
                    Đăng Ký
                </div>
            </div>
        </div>
    )
}

export default GetPromotion