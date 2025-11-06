import ProgramHero from '../components/shared/ProgramHero';
import FAQAccordion from '../components/shared/FAQAccordion';
import Button from '../components/shared/Button';
import styles from './OurWork.module.css';
import { IMAGES } from '../constants/images';

export default function YouthLeadership() {
    return (
        <div className={styles.programPage}>
            <ProgramHero 
                title="Youth Global Leadership Program"
                subtitle="Shaping the Women Who Will Shape the World. A 12-month immersive mentorship program."
                bgImage={IMAGES.PROGRAMS.COMMUNITY}
            />

            <section className={`${styles.sectionBlock} container`}>
                <div className="text-content">
                    <h2>Program Experience: What You'll Gain</h2>
                    <p>
                        Our program connects emerging female leaders (ages 21-26) with established global professionals for a transformative journey of cross-cultural growth and career acceleration.
                    </p>
                    <div className={styles.programsGrid} style={{marginTop: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))'}}>
                        <div>
                            <h3>Key Benefits</h3>
                            <ul>
                                <li>Global Network across 6 continents</li>
                                <li>Personalized Career Roadmap</li>
                                <li>Cultural Intelligence Mastery</li>
                                <li>Practical Skill Development (negotiation, public speaking)</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Program Journey (12 Months)</h3>
                            <ul>
                                <li>**Months 1-3:** Foundation Building & Core Workshops</li>
                                <li>**Months 4-9:** Deep Dive One-on-One Mentorship</li>
                                <li>**Months 10-12:** Capstone Project & Launch</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className={`${styles.sectionBlock} section-padding-light`}>
                <div className="container">
                    <h2 style={{textAlign: 'center'}}>Application Timeline 2026</h2>
                    <div className={styles.programsGrid} style={{marginTop: '2rem', gridTemplateColumns: 'repeat(3, 1fr)', textAlign: 'center'}}>
                        <div className={styles.pathwayCard}>
                            <h4>Phase 1: Apply</h4>
                            <p>Jan 15: Applications Open<br/>Mar 30: Deadline</p>
                        </div>
                        <div className={styles.pathwayCard}>
                            <h4>Phase 2: Selection</h4>
                            <p>Apr 15-30: Interviews<br/>May 15: Cohort Announced</p>
                        </div>
                        <div className={styles.pathwayCard}>
                            <h4>Phase 3: Launch</h4>
                            <p>June 1: Program Launch<br/>May 2027: Graduation</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`${styles.sectionBlock} container`}>
                <h2 style={{textAlign: 'center'}}>Frequently Asked Questions</h2>
                <FAQAccordion />
            </section>
            
            <section className={`${styles.sectionBlock} ${styles.fullWidthCta}`}>
                <div className="container">
                    <h2 style={{color: 'var(--text-light)', borderBottomColor: 'var(--accent-warm)'}}>Join Our Next Generation of Leaders</h2>
                    <p style={{color: 'var(--text-light)', marginBottom: '2rem'}}>
                        "We don't just mentor careers—we cultivate global citizens who will lead with cultural wisdom and compassionate action."
                    </p>
                    <Button to="#" variant="accent">Apply for the Program</Button>
                    <Button to="#" variant="secondary" style={{marginLeft: '1rem'}}>Become a Mentor</Button>
                </div>
            </section>
        </div>
    );
}