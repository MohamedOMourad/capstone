import { useRouter } from 'next/router';
import { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import LoginModel from './LoginModel';

const Layout = ({ children }: any) => {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    console.log(router.pathname);
    return (
        <>
            {router.pathname === '/post'  ?
                <>{children}</>
                : <>
                    <Header setOpen={setOpen} />
                    <LoginModel open={open} setOpen={setOpen} />
                    {children}
                    <Footer />
                </>
            }

        </>
    )
}

export default Layout;
