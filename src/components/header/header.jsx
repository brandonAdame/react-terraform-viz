import hamburger_icon from '../../assets/hamburger_menu.svg'
import logo from '../../assets/Logo.svg'
import github_logo from '../../assets/github_logo.svg'
import './header.css'

function Header() {
    return (
        <>
            <div className="header">
                <div className='left-logo'>
                    <img src={hamburger_icon} alt='hamburger_icon' className='hamburger_icon' />
                </div>
                <div className='center-logo'>
                    <img src={logo} alt='logo' className='logo' />
                </div>
                <div className='right-logo'>
                    <img src={github_logo} alt='github_logo' className='github_logo' />
                </div>
            </div>
            <div className='bottom-line'></div>
        </>

    )
}

export default Header;