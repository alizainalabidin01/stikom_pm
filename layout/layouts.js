import Header from '../komponen/header';
import Footer from '../komponen/footer';
import Head from 'next/head';


const Layout = (props) => (
    <div>
        <Head>
 <title>Latihan NextJS</title>
 <meta name="viewport" content="width=device-width, initialscale=1.0" />
 <link rel="stylesheet" href="../css/UTS.css"/>
 </Head>

        <Header />
        {props.children}
        <Footer />
        
    </div>
)
export default Layout;