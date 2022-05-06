import React, { useState } from 'react';
import './../Styles/Contact.css'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { IoCall } from 'react-icons/io5'
import { GrMail } from 'react-icons/gr'
import { ImLocation } from 'react-icons/im'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom';

function Contact(props) {
    document.title = "Contact Us"
    const [finalObject, setFinalObject] = useState({
        name: '',
        mail: '',
        message: ''
    })
    const setData = (e) => {
        const target = e.target.name
        if (target === "name") {
            setFinalObject({
                ...finalObject,
                name: e.target.value
            })
        }
        else if (target === "mail") {
            setFinalObject({
                ...finalObject,
                mail: e.target.value
            })
        }
        else if (target === "message") {
            setFinalObject({
                ...finalObject,
                message: e.target.value
            })
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(finalObject);

        setFinalObject({
            name: '',
            mail: '',
            message: ''
        })
    }
    return (
        <div className="contact-us-page">
            <Link to="Business-continutiy">BS Cont</Link>
            <h1 className="contact-us">CONTACT US</h1>
            <div className="contact-flex-container">
                {/* Contact Form */}
                <form className="contact-form" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Write your name" name="name" onChange={setData} value={finalObject.name} required autoComplete="off" /><br />
                    <input type="text" placeholder="Write your E-mail" name="mail" onChange={setData} value={finalObject.mail} required /><br />
                    <textarea placeholder="Write your message" name="message" onChange={setData} value={finalObject.message} required></textarea><br />

                    <button type="submit">Submit</button>
                </form>

                {/* Contact details */}
                <div className="inside-flex-cont">
                    <div className="contact-details">
                        <div className="individual-contact">
                            <IoCall style={{ color: "red" }} /><span className="contact-title">Phone</span>
                            <p>+91 9909 918 930</p>
                        </div>
                        <div className="individual-contact">
                            <GrMail style={{ color: "green" }} /><span className="contact-title">E-mail</span>
                            <p>info@pruthatek.com</p>
                        </div>
                        <div className="individual-contact">
                            <ImLocation style={{ color: "blue" }} /><span className="contact-title">Location</span>
                            <p>G-10 Parasmant Flat, Nr. Karmachari Nagar Rannapark, Ahmedabad - 380061</p>
                        </div>
                    </div>

                    {/* social media handles */}
                    <div className="social-media-handles">
                        <FaFacebook />
                        <FaInstagram className="insta" />
                        <FaLinkedin className="linked-in" />
                        <AiFillTwitterCircle style={{ color: "skyblue" }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;