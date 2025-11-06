import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Button from '../components/shared/Button';
import styles from './Contact.module.css';
// Import the IMAGES object
import { IMAGES } from '../constants/images'; 

// Helper component for FAQ Accordion 
const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.faqItem}>
      <button onClick={() => setIsOpen(!isOpen)} className={styles.faqButton} aria-expanded={isOpen}>
        <span>{question}</span>
        {isOpen ? <FaMinus size={14} /> : <FaPlus size={14} />}
      </button>
      {isOpen && (
        <div className={styles.faqAnswer}>
          {answer}
        </div>
      )}
    </div>
  );
};

export default function Contact() {
  const specificContacts = [
    { title: "General Inquiries", email: "hello@globalwomenculturalexchange.org" },
    { title: "Partnerships", email: "partners@globalwomenculturalexchange.org" },
    { title: "Speakers", email: "speakers@globalwomenculturalexchange.org" },
    { title: "Press", email: "press@globalwomenculturalexchange.org" },
    { title: "Programs", email: "programs@globalwomenculturalexchange.org" },
  ];
  
  const faqs = [
    { q: "How can I join?", a: "Membership details and applications are available on our Get Involved page." },
    { q: "When is the next summit?", a: "Our Global Women's Summit is held annually. Check the Programs section for the current year's date and registration information." },
    { q: "How do I become a mentor?", a: "We accept applications for the Youth Mentorship Program year-round. Visit the Volunteer section under Get Involved to start the process." },
    { q: "Where does my donation go?", a: "60% of every donation goes directly to funding our cultural exchange and mentorship programs. See our Donate page for a full transparency breakdown." },
  ];

  return (
    <div className={styles.contactPage}>
      {/* 1. Intro */}
      <section 
        className={styles.hero}
        // Use IMAGES.CONTACT.MAIN for the hero background
        style={{ backgroundImage: `url(${IMAGES.CONTACT.MAIN})` }}
      >
        <div className={styles.heroOverlay} />
        <h1>We'd Love to Hear from You</h1>
      </section>

      <div className={`${styles.formGrid} container section-padding`}>
        {/* 2. Contact Form Block */}
        <div className={styles.contactForm}>
          <h2>Send Us a Message</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message" rows={6} required></textarea>
            <Button type="submit" variant="primary" className={styles.submitButton}>
              Submit
            </Button>
          </form>
        </div>
        
        {/* 3. Specific Contact Info List */}
        <div className={styles.contactList}>
          <h2>Specific Contacts</h2>
          {specificContacts.map(contact => (
            <div key={contact.title} className={styles.contactCard}>
              <h3>{contact.title}</h3>
              {/* Added target="_blank" and rel="noopener noreferrer" for external email links */}
              <a href={`mailto:${contact.email}`} target="_blank" rel="noopener noreferrer">{contact.email}</a>
            </div>
          ))}
        </div>
      </div>
      
      {/* 4. Map Placeholder */}
      <section className={`${styles.mapSection} section-padding-light`}>
        <div className="container">
          <h2>Our Headquarters</h2>
          <p>Headquartered in Thornton, Colorado</p>
          <div className={styles.mapPlaceholder}>
            <LazyLoadImage
              src={IMAGES.CONTACT.MAP}
              alt="Location map of headquarters in Thornton, Colorado"
              effect="blur"
              className={styles.mapImage}
            />
          </div>
        </div>
      </section>

      {/* 5. FAQ Accordion List */}
      <section className="container section-padding">
        <div className={styles.faqList}>
          <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
          {faqs.map(faq => (
            <FaqItem key={faq.q} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </section>
    </div>
  );
}