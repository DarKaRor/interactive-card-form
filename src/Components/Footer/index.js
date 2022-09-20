import React from "react"
import "./Footer.css"

function Footer(props){
    return(
        <footer className="footer">
            <div className="footer__atributtion atributtion">
                <p className="atributtion__text">
                    Coded by 
                    <span className="atributtion__author"> DarKaRo</span>. 
                    Challenge by 
                    <span className="atributtion__src"> FrontEndMentor</span>
                </p>
            </div>
        </footer>
    )
}

export default Footer;