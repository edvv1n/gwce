import ProgramHero from '../components/shared/ProgramHero';
import SpeakerGallery from '../components/shared/SpeakerGallery';
import Button from '../components/shared/Button';
import styles from './OurWork.module.css';
import { IMAGES } from '../constants/images';

export default function GlobalSummit() {
    return (
        <div className={styles.programPage}>
            <ProgramHero 
                title="Global Women’s Cultural Summit 2026: Sisterhood Beyond Borders"
                subtitle="Where Cultural Wisdom Meets Global Impact. Join 300+ visionary women for a 5-day immersive experience."
                bgImage={IMAGES.PROGRAMS.EDUCATION}
            />

            <section className={`${styles.sectionBlock} container`}>
                <div className="text-content">
                    <h2>Why This Summit Will Change Your World</h2>
                    <p>
                        This Summit is unique. This is a carefully crafted journey of connection, learning, and transformation. For five immersive days, you'll be part of a living ecosystem of women leaders, change-makers, and cultural pioneers.
                    </p>
                    <ul>
                        <li>Cultural Immersion, Not Just Observation</li>
                        <li>Action-Oriented Programming</li>
                        <li>Curated Connections via "Wisdom Circles"</li>
                        <li>Intergenerational Wisdom Track</li>
                    </ul>
                    <div style={{marginTop: '2rem'}}>
                        <Button variant="primary" to="#">Register Now - Early Bird Pricing</Button>
                        <Button variant="secondary" to="#" style={{marginLeft: '1rem'}}>Download Summit Brochure</Button>
                    </div>
                </div>
            </section>

            <section className={`${styles.sectionBlock} section-padding-light`}>
                <div className="container">
                    <h2 style={{textAlign: 'center'}}>Your Journey Through Five Transformative Days</h2>
                    <div className={styles.programsGrid} style={{marginTop: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'}}>
                        <div>
                            <h3>Daily Rhythm</h3>
                            <ul>
                                <li>Mornings: Inspiring keynotes from global leaders</li>
                                <li>Afternoons: Interactive Wisdom Circles and skill-building panels</li>
                                <li>Evenings: Cultural showcases and organic networking</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Daily Themes</h3>
                            <ul>
                                <li>**Monday:** The Call to Sisterhood (Opening Ceremony)</li>
                                <li>**Tuesday:** Africa & Pacific Islands: Rooted Wisdom, Global Impact</li>
                                <li>**Wednesday:** Americas & Caribbean: Rhythms of Resilience & Revolution</li>
                                <li>**Thursday:** Europe & Asia: Bridging Traditions & Tomorrow</li>
                                <li>**Friday:** Inspiration to Action (Closing Ceremony)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className={`${styles.sectionBlock} container`}>
                <h2>Meet Our 2026 Speakers</h2>
                <SpeakerGallery />
                <div style={{textAlign: 'center', marginTop: '2rem'}}>
                    <Button variant="secondary" to="#">Apply to Speak</Button>
                </div>
            </section>

            <section className={`${styles.sectionBlock} section-padding-light`}>
                <div className="container">
                    <h2 style={{textAlign: 'center'}}>Experience Cultural Immersion</h2>
                    <div className={styles.programsGrid} style={{marginTop: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))'}}>
                        <div>
                            <h3>Evening Showcases</h3>
                            <ul>
                                <li>Traditional dance and music</li>
                                <li>Storytelling sessions</li>
                                <li>Global fashion shows</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Global Marketplace</h3>
                            <ul>
                                <li>Shop women artisans</li>
                                <li>Fair-trade crafts</li>
                                <li>Support women-owned businesses</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Interactive Workshops</h3>
                            <ul>
                                <li>Traditional tea ceremonies</li>
                                <li>Indigenous weaving arts</li>
                                <li>Global percussion sessions</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`${styles.sectionBlock} ${styles.fullWidthCta}`}>
                <div className="container">
                    <h2 style={{color: 'var(--text-light)', borderBottomColor: 'var(--accent-warm)'}}>Join Our Global Sisterhood</h2>
                    <p style={{color: 'var(--text-light)', marginBottom: '2rem'}}>Ready to cross borders and build bridges?</p>
                    <Button to="#" variant="accent">Register Now - Limited Early Bird Spots Available</Button>
                </div>
            </section>
        </div>
    );
}