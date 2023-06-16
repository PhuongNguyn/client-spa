import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Navbar from "@/components/Navbar"
import NavbarMobile from "@/components/NavbarMobile"
import NavbarScroll from "@/components/NavbarScroll"
import { ReactNode, useEffect, useRef, useState } from "react"

const MainLayout = ({children}:{children: ReactNode}) => {
    const [navbarScroll, setNavbarScroll] = useState(false)
    useEffect(()=>{
        const checkNavbarScroll = () => {
            const top = document.documentElement.scrollTop
                if(top > 300 && !navbarScroll){
                setNavbarScroll(true)
            }else if(top <= 300){
                setNavbarScroll(false)
            }
        }
        window.addEventListener('scroll', checkNavbarScroll)

        return () => {
            window.removeEventListener('scroll', checkNavbarScroll)
        }
    },[])
    return (
        <div>
            {navbarScroll && <NavbarScroll />}
            <NavbarMobile/>
            <Header/>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default MainLayout