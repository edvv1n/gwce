import ProgramHero from '../components/shared/ProgramHero';
import Button from '../components/shared/Button';
import styles from './OurWork.module.css';
import { IMAGES } from '../constants/images';

export default function CulturalProgramsPage() {
    return (
        <div className={styles.programPage}>
            <ProgramHero 
                title="Cultural Immersion Programs"
                subtitle="Experience Culture, Don't Just Observe It. Where learning moves from theory to shared experience."
                bgImage={IMAGES.HERO.SECONDARY}
            />

            <section className={`${styles.sectionBlock} container`}>
                <div className="text-content">
                    <h2>Our Ongoing Initiatives</h2>
                    <p>
                        At the heart of our mission is the belief that true understanding happens when we move beyond theory into shared experience. Our Cultural Programs are designed to transform abstract concepts into meaningful connections through hands-on learning.
                    </p>
                </div>
                
                <div className={styles.programsGrid} style={{marginTop: '2rem'}}>
                    <div className={styles.pathwayCard} style={{textAlign: 'left'}}>
                        <h3>Global Immersion Journeys</h3>
                        <p>Travel with Purpose: Yearly curated cultural exchanges to destinations like Nigeria, Mexico, and El Salvador. Meet with local women leaders and participate in traditional ceremonies.</p>
                        <Button to="#" variant="secondary">Learn More</Button>
                    </div>
                    <div className={styles.pathwayCard} style={{textAlign: 'left'}}>
                        <h3>Signature Program: Fireside Chats</h3>
                        <p>Intimate Conversations with Global Leaders: Share tea with a Maori elder or learn from a Nigerian tech entrepreneur in a casual, intimate setting. Our most beloved program for deep learning.</p>
                        <Button to="#" variant="secondary">Register for Next Chat</Button>
                    </div>
                </div>

                <div className={styles.programsGrid} style={{marginTop: '2rem'}}>
                    <div className={styles.pathwayCard} style={{textAlign: 'left'}}>
                        <h3>Community Partnership Programs</h3>
                        <p>Building Local Bridges: Collaborations with cultural centers, heritage month celebrations, and cross-cultural dialogue dinners.</p>
                        <Button to="#" variant="secondary">Get Involved Locally</Button>
                    </div>
                    <div className={styles.pathwayCard} style={{textAlign: 'left'}}>
                        <h3>Digital Cultural Exchange</h3>
                        <p>Connect Across Continents: Virtual cultural exchange pen-pal programs, documentary screenings, and a global book club focusing on women authors worldwide.</p>
                        <Button to="#" variant="secondary">Join Exchange</Button>
                    </div>
                </div>
            </section>
            
            <section className={`${styles.sectionBlock} section-padding-light`}>
                <div className="container">
                    <h2 style={{textAlign: 'center'}}>Why Join Our Cultural Programs?</h2>
                    <div className={styles.programsGrid} style={{marginTop: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'}}>
                        <div>
                            <h3>Build Genuine Friendships</h3>
                            <ul>
                                <li>Connect with diverse women</li>
                                <li>Share your own heritage</li>
                                <li>Create lasting bonds</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Develop Cultural Intelligence</h3>
                            <ul>
                                <li>Gain cross-cultural communication skills</li>
                                <li>Navigate differences with confidence</li>
                                <li>Develop a global perspective</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Experience Safe Spaces</h3>
                            <ul>
                                <li>Ask questions without judgment</li>
                                <li>Share experiences freely</li>
                                <li>Learn in environments designed for curiosity</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`${styles.sectionBlock} ${styles.fullWidthCta}`}>
                <div className="container">
                    <h2 style={{color: 'var(--text-light)', borderBottomColor: 'var(--accent-warm)'}}>Ready to Begin Your Journey?</h2>
                    <Button to="/events" variant="accent">View Our Full Event Calendar</Button>
                </div>
            </section>
        </div>
    );
}