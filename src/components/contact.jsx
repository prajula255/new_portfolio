import React from "react";

function Contact() {
    return (
        <div className="contact-details" style={{backgroundColor:"#f9f9f9"}}>
            <i className="fas fa-handshake"></i>
            <h2>Tell me about your next project</h2>
            <button className="btn btn-outline-secondary text-dark rounded-5 "><i className="fa-regular fa-envelope"></i> Email me</button>

            <button className="btn btn-outline-secondary text-dark rounded-5">Whatsapp</button>
        </div>
    )
}
export default Contact;