import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { FaLinkedin } from 'react-icons/fa';
import Button from '../components/shared/Button';
import styles from './Team.module.css';
// Import the IMAGES object
import { IMAGES } from '../constants/images';

// Helper component for Team Cards
const TeamCard = ({ name, title, bio, imgSrc }: { name: string, title: string, bio: string, imgSrc: string }) => (
  <div className={styles.teamCard}>
    <LazyLoadImage
      src={imgSrc}
      alt={name}
      effect="blur"
      className={styles.teamHeadshot}
    />
    <h3>{name}</h3>
    <p className={styles.teamTitle}>{title}</p>
    <p className={styles.teamBio}>{bio}</p>
    <a href="#" aria-label={`${name}'s LinkedIn`} className={styles.linkedinIcon}>
      <FaLinkedin size={24} />
    </a>
  </div>
);

export default function Team() {
  const leadershipTeam = [
    { name: "Dr. Elena Vasquez", title: "Founder & CEO", bio: "[Short bio...]", 
      // Using a placeholder image for headshots
      imgSrc: IMAGES.TEAM.LEADERSHIP // Placeholder for all team members
    },
    { name: "Maria Chen", title: "Chief Program Officer", bio: "[Short bio...]", 
      imgSrc: IMAGES.TEAM.LEADERSHIP
    },
    { name: "Amina Yusuf", title: "Director of Operations", bio: "[Short bio...]", 
      imgSrc: IMAGES.TEAM.LEADERSHIP
    },
    { name: "Sarah Goldstein", title: "Head of Partnerships", bio: "[Short bio...]", 
      imgSrc: IMAGES.TEAM.LEADERSHIP
    },
    { name: "Kenji Tanaka", title: "Mentorship Lead", bio: "[Short bio...]", 
      imgSrc: IMAGES.TEAM.LEADERSHIP
    },
  ];
  
  const advisoryCouncil = [
    { name: "Advisory Member 1", expertise: "Finance" },
    { name: "Advisory Member 2", expertise: "International Law" },
    { name: "Advisory Member 3", expertise: "Education Policy" },
  ];

  return (
    <div className={styles.teamPage}>
      {/* 1. Hero Header */}
      <section 
        className={styles.hero}
        // Use a relevant image for the team page background
        style={{ backgroundImage: `url(${IMAGES.TEAM.VOLUNTEERS})` }}
      >
        <div className={styles.heroOverlay} />
        <h1>Meet Our Team</h1>
      </section>

      {/* 2. Leadership Team Grid */}
      <section className="section-padding section-padding-light">
        <div className="container">
          <h2 className={styles.sectionTitle}>Leadership</h2>
          <div className={styles.teamGrid}>
            {leadershipTeam.map(member => (
              <TeamCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>
      
      {/* 3. Advisory Council List */}
      <section className="section-padding">
        <div className={`${styles.advisoryCouncil} container`}>
          <h2 className={styles.sectionTitle}>Advisory Council</h2>
          <ul>
            {advisoryCouncil.map(member => (
              <li key={member.name}>
                <span>{member.name}</span>
                <span>{member.expertise}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. Employment Opportunities */}
      <section className="section-padding section-padding-light">
        <div className={styles.employmentCta}>
          <h2>Join Us</h2>
          <p>We are looking for passionate individuals.</p>
          <Button to="/careers" variant="primary">
            View Open Positions
          </Button>
        </div>
      </section>
    </div>
  );
}