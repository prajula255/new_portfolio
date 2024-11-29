import React from "react";

function Header() {
    return (
        <header className="header">
            <div className='d-flex justify-content-between'>
                <div className='d-flex'>
                    <a href="email@example.com">kawsarvy.design@gmail.com</a>
                    <button>copy</button>
                    <button>cv</button>
                </div>

                <div className='d-flex'>
                    <a href="linked">LinkedIn/</a>
                    <a href="drib">Dribble/</a>
                    <a href="insta">Instagram</a>
                </div>
            </div>


        </header>
    )
}
export default Header;