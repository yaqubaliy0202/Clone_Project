import React, {useEffect, useState} from "react";
import "./Nav.css"
import logoNetflix from "./assets/images/Netflix_logo.svg"
import logoNetflix2 from "./assets/images/netflix-secondary-api-logo.png"

const Nav = () => {
    const [show, handleShow] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img className={"nav_logo"} src={logoNetflix} alt="logo"/>
            <img className={"nav_avatar"} src={logoNetflix2} alt="logo"/>
    </div>
    )

}
export default Nav;