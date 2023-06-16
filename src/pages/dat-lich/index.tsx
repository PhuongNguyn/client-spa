import BookingComponent from "@/components/BookingComponent"
import HorizontalDivider from "@/components/common/Divider/Horizontal"


const Booking = () => {
    return (
        <div className="booking-page 2xl:container px-2 mx-auto">
        
            <div className="booking-page-main mt-8">
                <BookingComponent />
            </div>

        </div>
    )
}

export default Booking