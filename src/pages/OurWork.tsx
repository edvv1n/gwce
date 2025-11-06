import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { FaUsers, FaHandHoldingHeart, FaGlobeAmericas } from 'react-icons/fa';
import Button from '../components/shared/Button';
import styles from './OurWork.module.css';
import { IMAGES } from '../constants/images';

// Helper component for Program Cards
const ProgramCard = ({ 
  title, 
  desc, 
  ctaText, 
  ctaLink, 
  imgSrc, 
  icon 
}: { 
  title: string, 
  desc: string, 
  ctaText: string, 
  ctaLink: string, 
  imgSrc?: string, 
  icon?: React.ReactNode 
}) => (
  <div className={styles.programCard}>
    <div className={styles.cardImageWrapper}>
      {imgSrc ? (
        <LazyLoadImage
          src={imgSrc}
          alt={title}
          effect="blur"
          className={styles.cardImage}
        />
      ) : (
        <div className={styles.cardIcon}>
          {icon}
        </div>
      )}
    </div>
    <div className={styles.cardContent}>
      <h3>{title}</h3>
      <p>{desc}</p>
      <Button to={ctaLink} variant="primary">
        {ctaText}
      </Button>
    </div>
  </div>
);

export default function Programs() {
  return (
    <div className={styles.ourWorkPage}>
      {/* Hero Header */}
      <section className={`${styles.heroBanner} ${styles.overview}`} style={{backgroundImage: `url(${IMAGES.HERO.MAIN})`}}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
            <h1>Our Pathways to Global Connection</h1>
            <p>
                We break down cultural barriers and build bridges of understanding through four core programs that foster leadership, empathy, and collaborative action across continents.
            </p>
        </div>
      </section>

      {/* Program Sections (Grid) */}
      <section className="section-padding section-padding-light">
        <div className={`${styles.programsGrid} container`}>
          {/* 1. Global Women's Cultural Summit */}
          <ProgramCard
            title="Global Women's Cultural Summit"
            desc="Our annual summit is the cornerstone of our mission, creating a dynamic gathering where dialogue becomes tangible action and cross-cultural collaboration."
            ctaText="Explore Summit"
            ctaLink="/programs/summit"
            imgSrc={IMAGES.PROGRAMS.EDUCATION}
          />
          
          {/* 2. Youth Global Leadership Program */}
          <ProgramCard
            title="Youth Global Leadership Program"
            desc="A 12-month mentorship program cultivating the next generation of female leaders with cultural intelligence, confidence, and a robust global network."
            ctaText="Apply Now"
            ctaLink="/programs/mentorship"
            icon={<FaUsers size={80} />}
          />
          
          {/* 3. Cultural Immersion Programs */}
          <ProgramCard
            title="Cultural Immersion Programs"
            desc="Moving learning from theory to practice through intimate Fireside Chats, digital exchanges, and travel journeys designed for shared experience and genuine connection."
            ctaText="View Upcoming Events"
            ctaLink="/programs/cultural"
            icon={<FaGlobeAmericas size={80} />}
          />
          
          {/* 4. Action Grants */}
          <ProgramCard
            title="Action Grants"
            desc="Providing seed funding and support to women-led initiatives that address community challenges through a cultural or collaborative lens."
            ctaText="Learn About Eligibility"
            ctaLink="/programs/grants"
            icon={<FaHandHoldingHeart size={80} />}
          />
        </div>
      </section>
    </div>
  );
}