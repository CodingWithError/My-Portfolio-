import React from 'react';
import styles from './Contact.module.css';

const ContactInfo = () => {
  return (
    <div className={styles.contactInfo}>
      <h2>Contact :-</h2>
      <a href="mailto:vshravanth2004@gmail.com" className={styles.email}> Mail:- vshravanth2004@gmail.com</a>
      <div className={styles.socialLinks}>
        <a href="https://www.linkedin.com/in/v-shravanth-43b469274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://www.instagram.com/nanunihal?igsh=Ym1qb2p3ZDI4NnFp&utm_source=qr" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://github.com/sailingsam/" target="_blank" rel="noopener noreferrer">Github</a>
      </div>
    </div>
  );
};

export default ContactInfo;