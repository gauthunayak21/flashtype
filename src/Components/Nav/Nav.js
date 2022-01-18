import logo from './../../assets/logo.png'
import './Nav.css';

const Nav = () => {
    return <div className='navbar'>
        <img className='logo' src={logo} alt="logo" />
        <h1 className='logo-name'>Flashtype</h1>
    </div>
}

export default Nav