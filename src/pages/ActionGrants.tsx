import ProgramHero from '../components/shared/ProgramHero';
import Button from '../components/shared/Button';
import styles from './OurWork.module.css';
import { IMAGES } from '../constants/images';

export default function ActionGrants() {
    return (
        <div className={styles.programPage}>
            <ProgramHero 
                title="Action Grants: Turning Vision into Impact"
                subtitle="From Inspired Ideas to Tangible Change. Providing seed funding and support for women-led initiatives."
                bgImage={IMAGES.PROGRAMS.ACTION}
            />

            <section className={`${styles.sectionBlock} container`}>
                <div className="text-content">
                    <h2>What We Fund</h2>
                    <p>
                        Our micro-grant program provides the critical seed funding and support system that transforms visionary ideas into community-changing realities. We invest in women who are building bridges and solving challenges through cultural understanding and collaboration.
                    </p>
                </div>

                <div className={styles.programsGrid} style={{marginTop: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'}}>
                    <div className={styles.pathwayCard} style={{textAlign: 'left'}}>
                        <h3>Cultural Preservation & Innovation</h3>
                        <p>Projects that preserve traditional knowledge through modern methods and make cultural education accessible.</p>
                    </div>
                    <div className={styles.pathwayCard} style={{textAlign: 'left'}}>
                        <h3>Cross-Cultural Community Building</h3>
                        <p>Initiatives addressing local challenges through global perspectives and bringing diverse communities together through shared experiences.</p>
                    </div>
                    <div className={styles.pathwayCard} style={{textAlign: 'left'}}>
                        <h3>Women-Led Social Enterprises</h3>
                        <p>Early-stage businesses with strong social impact missions, creating economic opportunities for marginalized women.</p>
                    </div>
                    <div className={styles.pathwayCard} style={{textAlign: 'left'}}>
                        <h3>Arts & Storytelling for Social Change</h3>
                        <p>Projects using artistic expression to bridge cultural understanding and amplify underrepresented women's voices.</p>
                    </div>
                </div>
            </section>
            
            <section className={`${styles.sectionBlock} section-padding-light`}>
                <div className="container">
                    <h2>Grant Details & Timeline</h2>
                    <div className={styles.programsGrid} style={{marginTop: '2rem', gridTemplateColumns: '1fr 1fr'}}>
                        <div>
                            <h3>Funding Amounts</h3>
                            <ul>
                                <li>Seed Grants: $1,000 - $5,000</li>
                                <li>Project Grants: $5,000 - $15,000</li>
                                <li>Partnership Grants: $15,000 - $25,000</li>
                            </ul>
                            <h3>What's Included</h3>
                            <ul>
                                <li>Financial funding</li>
                                <li>Access to our global network</li>
                                <li>Visibility through our channels</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Application Timeline 2026</h3>
                            <ul>
                                <li>**Jan 15 - Mar 15:** Application Period (Submit Full Application)</li>
                                <li>**Mar 15 - May 15:** Review Period (6-8 weeks)</li>
                                <li>**May 15 - Jun 15:** Award Notification (Within 12 weeks of deadline)</li>
                            </ul>
                            <h3>Eligibility</h3>
                            <p>We fund women-led organizations and initiatives demonstrating clear community impact and strong cultural/collaborative components.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`${styles.sectionBlock} ${styles.fullWidthCta}`}>
                <div className="container">
                    <h2 style={{color: 'var(--text-light)', borderBottomColor: 'var(--accent-warm)'}}>Ready to Make Your Impact?</h2>
                    <p style={{color: 'var(--text-light)', marginBottom: '2rem'}}>
                        Don't just imagine change—create it. We're here to help you build it.
                    </p>
                    <Button to="#" variant="accent">Start Your Application</Button>
                    <Button to="#" variant="secondary" style={{marginLeft: '1rem'}}>Download Guidelines</Button>
                </div>
            </section>
        </div>
    );
}