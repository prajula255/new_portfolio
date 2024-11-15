import React from "react";

function Header(){
    return(
        <header className="header">
        <div className="left-header">
            <a href="email@example.com">your email@example.com</a>
            <button>copy</button>
            <button>cv</button>
        </div>

        <div className="right-header">
            <a href="linked">LinkedIn/</a>
            <a href="drib">Dribble/</a>
            <a href="insta">Instagram</a>
        </div>
        </header>
    )
}
export default Header;