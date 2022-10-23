import { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import LoginModel from './LoginModel';

const Layout = ({ children }: any) => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <Header setOpen={setOpen} />
            <LoginModel open={open} setOpen={setOpen} />
            {children}
            <Footer />
        </div>
    )
}

export default Layout;
