import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Button from '../components/shared/Button';
import styles from './Home.module.css';
import { IMAGES } from '../constants/images'; 

// ➡️ IMPORT FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGlobe,        // For Global Connection / Forum 
  faUserGraduate, // For Youth Mentorship
  faHandsHolding, // For Cultural Exchange / Sisterhood
  faHandHoldingDollar, // For Action Grants
  faPeopleGroup,  // For Collective Voice
  faBullhorn,     // For Actionable Sisterhood / Megaphone (using faBullhorn)
  faBuilding       // For Sponsor Logos Placeholder
} from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('*', { 
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      });
    }, heroRef); 

    return () => ctx.revert();
  }, []); 

  return (
    <div className={styles.homePage}>
      {/* 1. Hero Section */}
      <section 
        className={styles.heroSection}
        style={{ backgroundImage: `url(${IMAGES.HERO.MAIN})` }}
      >
        <div className={styles.heroOverlay} />
        <div ref={heroRef} className={styles.heroContent}>
          <h1>
            Building Global Sisterhood, One Connection at a Time
          </h1>
          <p>
            The Global Women Cultural Exchange is a nonprofit dedicated to uniting women across cultures to foster understanding, inspire action, and create lasting change.
          </p>
          <div className={styles.heroCtas}>
            <Button to="/about" variant="primary">
              Explore Our Mission
            </Button>
            <Button to="/programs" variant="secondary">
              Learn More About Our Programs
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Intro Section: Our World is Rich... */}
      <section className="container section-padding">
        <div className={styles.introSection}>
          <h2>Our World is Rich with Diversity. Our Strength Lies in Connection.</h2>
          <p>
            We believe that when women from different backgrounds come together to share their stories and wisdom, they become powerful catalysts for progress. Our programs are designed to break down barriers, build cultural bridges, and equip women and girls with the tools to lead in their communities and beyond. We move beyond dialogue to drive tangible action.
          </p>
        </div>
      </section>

      {/* 3. Pathways Grid: What We Do */}
      <section className="section-padding section-padding-light">
        <div className="container">
          <h2 className={styles.sectionTitle}>Our Pathways to Global Connection</h2>
          <p className={styles.sectionSubtitle}>
            Discover the different ways we are working to create a more interconnected and empowered world for women.
          </p>
          <div className={styles.pathwaysGrid}>
            <div className={styles.pathwayCard}>
              {/* Icon 1: Global Women's Cultural Forum */}
              <div className={styles.pathwayIcon}><FontAwesomeIcon icon={faGlobe} /></div>
              <h3>Global Women's Cultural Forum</h3>
              <p>Annual international summit creating spaces for cross-cultural dialogue.</p>
              <Link to="/programs/summit" className={styles.pathwayLink}>Learn about the 2026 Forum</Link>
            </div>
            <div className={styles.pathwayCard}>
              {/* Icon 2: Youth Mentorship Program */}
              <div className={styles.pathwayIcon}><FontAwesomeIcon icon={faUserGraduate} /></div>
              <h3>Youth Mentorship Program</h3>
              <p>Year-long leadership development connecting emerging leaders with established mentors.</p>
              <Link to="/programs/mentorship" className={styles.pathwayLink}>Meet Our Mentors</Link>
            </div>
            <div className={styles.pathwayCard}>
              {/* Icon 3: Cultural Exchange Initiatives */}
              <div className={styles.pathwayIcon}><FontAwesomeIcon icon={faHandsHolding} /></div>
              <h3>Cultural Exchange Initiatives</h3>
              <p>Upcoming programs that celebrate and share cultural traditions and women's wisdom.</p>
              <Link to="/programs/cultural" className={styles.pathwayLink}>Learn More</Link>
            </div>
            <div className={styles.pathwayCard}>
              {/* Icon 4: Action Grants */}
              <div className={styles.pathwayIcon}><FontAwesomeIcon icon={faHandHoldingDollar} /></div>
              <h3>Action Grants</h3>
              <p>Funding ideas that create real-world change by providing unrestricted seed funding.</p>
              <Link to="/programs/grants" className={styles.pathwayLink}>Learn More About Grants</Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* 4. Pillars Section */}
      <section className="container section-padding">
        <h2 className={styles.sectionTitle}>Our Core Pillars</h2>
        <div className={styles.pillarsGrid}>
          <div className={styles.pillarCard}>
            {/* Pillar 1: Global Connection, Local Impact */}
            <div className={styles.pillarIcon}><FontAwesomeIcon icon={faGlobe} /></div>
            <h3>Global Connection, Local Impact</h3>
            <p>Gain worldwide wisdom, create change in your community.</p>
          </div>
          <div className={styles.pillarCard}>
            {/* Pillar 2: The Power of Collective Voice */}
            <div className={styles.pillarIcon}><FontAwesomeIcon icon={faPeopleGroup} /></div>
            <h3>The Power of Collective Voice</h3>
            <p>Your story is your strength. Together, our voices are unstoppable.</p>
          </div>
          <div className={styles.pillarCard}>
            {/* Pillar 3: Actionable Sisterhood */}
            <div className={styles.pillarIcon}><FontAwesomeIcon icon={faBullhorn} /></div>
            <h3>Actionable Sisterhood</h3>
            <p>Move beyond inspiration to tangible, actionable connection.</p>
          </div>
        </div>
      </section>

      {/* 5. Featured News with Lazy Loading */}
      <section className="section-padding section-padding-light">
        <div className="container">
          <h2 className={styles.sectionTitle}>Featured News</h2>
          <div className={styles.newsGrid}>
            <div className={styles.newsCard}>
              <LazyLoadImage
                alt="News post thumbnail"
                src={IMAGES.NEWS.FEATURED}
                effect="blur"
                className={styles.newsImage}
              />
              <h3>Post Title</h3>
            </div>
            <div className={styles.newsCard}>
              <LazyLoadImage
                alt="News post thumbnail"
                src={IMAGES.NEWS.BLOG}
                effect="blur"
                className={styles.newsImage}
              />
              <h3>Post Title</h3>
            </div>
            <div className={styles.newsCard}>
              <LazyLoadImage
                alt="News post thumbnail"
                src={IMAGES.HERO.SECONDARY} 
                effect="blur"
                className={styles.newsImage}
              />
              <h3>Post Title</h3>
            </div>
            <p className={styles.comingSoon}>Coming Soon</p>
          </div>
          <div className={styles.viewAllCta}>
            <Link to="/news">
              View All Stories
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Sponsor Logos */}
      <section className="container section-padding">
        <h2 className={styles.sponsorTitle}>Proudly Supported By</h2>
        <div className={styles.sponsorLogos}>
          {/* Placeholder Icon for Sponsor Logos */}
          <FontAwesomeIcon icon={faBuilding} size="3x" color="var(--text-dark-secondary)" />
          <p style={{marginLeft: '1rem'}}>Placeholder for Sponsor Logos</p>
        </div>
      </section>

      {/* 7. CTA Section */}
      <section className={styles.fullWidthCta}>
        <h2>Join Us in Building a More Connected World.</h2>
        <p>
            Whether you want to attend an event, mentor a young leader, or support our mission, your journey starts here.
        </p>
        <Button to="/get-involved" variant="primary">
          Get Involved Today
        </Button>
      </section>
    </div>
  );
};

export default Home;