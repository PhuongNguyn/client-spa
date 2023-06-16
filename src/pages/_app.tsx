import Loading from '@/components/common/Loading'
import MainLayout from '@/layouts/MainLayout'
import '@/styles/globals.scss'
import type { AppLayoutProps } from 'next/app'
import { ReactNode, useEffect, useState } from 'react'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useRouter } from 'next/router'
import Script from 'next/script'

const App = ({ Component, pageProps }: AppLayoutProps) => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const queryClient = new QueryClient()
  const getLayout =
    Component.getLayout ||
    ((page: ReactNode) => (
      <MainLayout children={page} />
    ))

    const setLoadingOn = () => {
        setLoading(true)
    }
    const setLoadingOff = () => {
      setLoading(false)
    }

    useEffect(()=>{
      router.events.on("routeChangeStart", setLoadingOn)

      router.events.on("routeChangeComplete", setLoadingOff)

      return () => {
        router.events.off("routeChangeStart", setLoadingOn)
        router.events.off("routeChangeComplete", setLoadingOff)
      }
    })
  return getLayout(<QueryClientProvider client={queryClient}>
    {loading && <Loading />}
    <Script strategy="lazyOnload" dangerouslySetInnerHTML={{__html: `
        var chatbox = document.getElementById('fb-customer-chat');
        chatbox.setAttribute("page_id", "107234729038865");
        chatbox.setAttribute("attribution", "biz_inbox");
  
        window.fbAsyncInit = function() {
          FB.init({
            xfbml            : true,
            version          : 'v17.0'
          });
        };
  
        (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    `}}></Script>
     <div id="fb-root"></div>
     <div id="fb-customer-chat" className="fb-customerchat">
    </div>
    <Component {...pageProps} />
  </QueryClientProvider>)
}

export default App