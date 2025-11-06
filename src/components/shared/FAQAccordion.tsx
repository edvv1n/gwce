import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import styles from '../../pages/OurWork.module.css';

interface FAQItem {
    id: number;
    question: string;
    answer: string | React.ReactNode;
    category: string;
}

const FAQs: FAQItem[] = [
    { id: 1, category: "Program Basics", question: "What is the Youth Global Leadership Program?", answer: "A 12-month immersive mentorship experience that pairs emerging female leaders (ages 21-26) with established global professionals for cross-cultural career development and leadership training." },
    { id: 2, category: "Program Basics", question: "Who is this program for?", answer: "Recent university graduates (within 3-5 years) who demonstrate leadership potential, passion for cross-cultural exchange, and commitment to women's empowerment." },
    { id: 3, category: "Application Process", question: "What are the application requirements?", answer: (
        <ul>
            <li>Completed online application form</li>
            <li>Current resume/CV</li>
            <li>Personal statement (500-750 words)</li>
            <li>Two professional or academic references</li>
            <li>Virtual interview for selected finalists</li>
        </ul>
    )},
    { id: 4, category: "Application Process", question: "When are applications due?", answer: "Applications for the 2027 cohort open October 15 and close November 30, 2026." },
    { id: 5, category: "Financial Considerations", question: "Is there a program fee and scholarship options?", answer: "Yes, the program fee is $400. However, we offer full and partial scholarships based on need, payment plans, and corporate sponsorship opportunities. The scholarship application is included in the main program application." },
    { id: 6, category: "Logistics & Support", question: "Is there support available during the program?", answer: "Yes! You'll have a dedicated program coordinator, 24/7 platform technical support, regular staff check-ins, and emergency contact for urgent issues." },
];

const FAQAccordion = () => {
    const [openId, setOpenId] = useState<number | null>(null);

    const toggleItem = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    // Group FAQs by category for better display organization
    const groupedFAQs = FAQs.reduce((acc, faq) => {
        if (!acc[faq.category]) {
            acc[faq.category] = [];
        }
        acc[faq.category].push(faq);
        return acc;
    }, {} as Record<string, FAQItem[]>);

    return (
        <div className={styles.faqSection}>
            {Object.keys(groupedFAQs).map(category => (
                <React.Fragment key={category}>
                    <h3 style={{marginTop: '2rem', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem'}}>{category}</h3>
                    {groupedFAQs[category].map(item => (
                        <div key={item.id} className={styles.faqItem}>
                            <div className={styles.faqQuestion} onClick={() => toggleItem(item.id)}>
                                <span>{item.question}</span>
                                {openId === item.id ? <FaChevronUp /> : <FaChevronDown />}
                            </div>
                            <div className={`${styles.faqAnswer} ${openId === item.id ? styles.open : ''}`}>
                                {typeof item.answer === 'string' ? <p>{item.answer}</p> : item.answer}
                            </div>
                        </div>
                    ))}
                </React.Fragment>
            ))}
        </div>
    );
};

export default FAQAccordion;