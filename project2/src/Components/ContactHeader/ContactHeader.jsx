import React from 'react'
import styles from "./ContactHeader.module.css"
const ContactHeader = () => {
    return (
        <div className={` ${styles.contact_section}`}>
            <h1>CONTACT US</h1>
            <p>For any inquiries, assistance, or collaboration opportunities, please feel free to contact us. You can reach us via email at [your email] or call us at [your phone number].
                We are always happy to assist you and look forward to hearing from you. Stay connected with us for updates and support!</p>
        </div>
    )
}

export default ContactHeader