import Footer from '../../CustomFooter'
import Header from '../../CustomHeader'
import Navbar from '../../CustomNavbar'
import PropTypes from 'prop-types'


export default function AppLayout({ children }) {
    return(
        <>
            <Header></Header>
            <Navbar></Navbar>
            <main className='min-h-[84vh]'>{children}</main>
            <Footer></Footer>
            
        </>
    )
}

AppLayout.propTypes = {
    children: PropTypes.node.isRequired
}