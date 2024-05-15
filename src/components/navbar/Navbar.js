import {useState} from "react"
import { Link } from "react-router-dom";
import logo from"../../img/logo/LOGO.png"
import "./navbar.sass"
export default function Navbar() {
  const [mobileNav, setMobileNav] = useState(false)
  const [sticky, setSticky] = useState(false)
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  window.addEventListener("scroll", handleScroll);
  return (
    <>
    <div className={`mobile-nav-full ${mobileNav ? "open-flex" : "closed-flex"}`}>
        <svg onClick={() => setMobileNav(!mobileNav)} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="x-mobile"><path d="M18 6l-12 12"></path><path d="M6 6l12 12"></path></svg>
        <div className="mobile-links">
          <Link onClick={() => setMobileNav(!mobileNav)} to="/">Главная</Link>
          <Link onClick={() => setMobileNav(!mobileNav)} to="/about">О компании</Link>
          <Link onClick={() => setMobileNav(!mobileNav)} to="/models">Модели автомобилей</Link>
          <Link onClick={() => setMobileNav(!mobileNav)} to="/testimonials">Отзывы</Link>
          <Link onClick={() => setMobileNav(!mobileNav)} to="/ourTeam">Наша команда</Link>
          <Link onClick={() => setMobileNav(!mobileNav)} to="/contact">Контакты</Link>
        </div>
      </div>
    <div className="navbar">
        <div className="navbar__wrapper"> 
            <div className="navbar__img">
                <Link to="/"><img src={logo} alt="logotip"/></Link>
            </div>
            <div className="navbar__link">
                <Link to="/">Главная</Link>
                <Link to="/about">О компании</Link>
                <Link to="/models">Модели автомобилей</Link>
                <Link to="/testimonials">Отзывы</Link>
                <Link to="/ourTeam">Наша команда</Link>
                <Link to="/contact">Контакты</Link>
            </div>
            <div className="hamburger-menu">
              <i
                onClick={() => setMobileNav(!mobileNav)} 
                className="hamburger-hamb"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-menu-2"><path d="M4 6l16 0"></path><path d="M4 12l16 0"></path><path d="M4 18l16 0"></path></svg>
              </i>
            </div>
        </div>
    </div>

    </> 
  )
}
