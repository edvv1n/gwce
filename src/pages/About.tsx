import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
// ➡️ Font Awesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHandshake, 
  faHeart, 
  faUsers, 
  faBookOpen, 
  faArrowUpRightDots
} from '@fortawesome/free-solid-svg-icons';
import { FaLinkedin } from 'react-icons/fa'; // Keep FaLinkedin for LinkedIn links
import styles from './About.module.css';
import { IMAGES } from '../constants/images'; // Assuming this path is correct
import Button from '../components/shared/Button';
import { Link } from 'react-router-dom'; // Added Link for team CTA

// --- Helper Components ---

const PrincipleCard = ({ icon, title, text }: { icon: React.ReactNode, title: string, text: string }) => (
  <div className={styles.principleCard}>
    <div className={styles.principleIcon}>{icon}</div>
    <h3>{title}</h3>
    <p>{text}</p>
  </div>
);

const ApproachStep = ({ num, title, desc }: { num: string, title: string, desc: string }) => (
  <div className={styles.approachStep}>
    <div className={styles.approachNumber}>{num}</div>
    <div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  </div>
);

const Endorsement = ({ quote, author, title }: { quote: string, author: string, title: string }) => (
    <div className={styles.endorsementCard}>
        <p className={styles.quoteText}>"{quote}"</p>
        <p className={styles.authorName}>{author}</p>
        <p className={styles.authorTitle}>{title}</p>
    </div>
);

// ➡️ New: TeamCard component migrated from Team.tsx
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

// ➡️ New: Team Data migrated from Team.tsx
const leadershipTeam = [
    { name: "Dr. Elena Vasquez", title: "Founder & CEO", bio: "Dr. Vasquez leads with a vision of global unity, drawing on her background in cross-cultural leadership and non-profit strategy.", 
      imgSrc: IMAGES.TEAM.LEADERSHIP
    },
    { name: "Maria Chen", title: "Chief Program Officer", bio: "Maria oversees the design and execution of all GWCE initiatives, ensuring they meet rigorous standards for impact and cultural sensitivity.", 
      imgSrc: IMAGES.TEAM.LEADERSHIP
    },
    { name: "Amina Yusuf", title: "Director of Operations", bio: "Amina ensures operational excellence and financial integrity, making sure GWCE runs efficiently to maximize its global reach.", 
      imgSrc: IMAGES.TEAM.LEADERSHIP
    },
    { name: "Sarah Goldstein", title: "Head of Partnerships", bio: "Sarah builds vital relationships with global NGOs, corporations, and community leaders to expand GWCE's network and resources.", 
      imgSrc: IMAGES.TEAM.LEADERSHIP
    },
    { name: "Kenji Tanaka", title: "Mentorship Lead", bio: "Kenji runs the Youth Mentorship Program, fostering intergenerational connections and developing the next cohort of female global leaders.", 
      imgSrc: IMAGES.TEAM.LEADERSHIP
    },
  ];
  
const advisoryCouncil = [
    { name: "Advisory Member 1", expertise: "Finance & Governance" },
    { name: "Advisory Member 2", expertise: "International Law" },
    { name: "Advisory Member 3", expertise: "Education Policy & Development" },
];


export default function About() {
  return (
    <div className={styles.aboutPage}>
      {/* 1. Hero Image */}
      {/* Changed to a div with background image, referencing a new image constant */}
      <section className={styles.hero} style={{ backgroundImage: `url(${IMAGES.ABOUT.HERO_BACKGROUND})` }}>
        <div className={styles.heroOverlay} />
        <div className="container">
          <h1>We Believe in a World Connected by Sisterhood.</h1>
          <p className={styles.heroSubtitle}>
            The Global Women Cultural Exchange was born from a powerful realization: in an increasingly divided world, the unique stories and wisdom of women are our most untapped resource for building bridges. Founded in [Year] with deep roots in the Thornton community, our organization was created to move beyond simple dialogue and forge the authentic, global connections that lead to tangible action and lasting change.
          </p>
        </div>
      </section>

      {/* 2. Mission + Vision Block */}
      <section className="container section-padding">
        <div className={styles.missionVisionBlock}>
            <div className={styles.missionBlock}>
                <h2>Our Mission</h2>
                <p>
                    "To empower and connect women beyond by fostering global awareness, cultural appreciation, and meaningful dialogue through highlighting the unique experiences of women from different regions that transform into inspired action, understanding, and lasting change."
                </p>
            </div>
            <div className={styles.visionBlock}>
                <h2>Our Vision</h2>
                <p>
                    "We envision a future where women feel deeply connected to the global sisterhood, where cultural exchange fuels personal and collective growth in women's empowerment, and elevates women's voices from every corner of the world."
                </p>
            </div>
        </div>
      </section>

      {/* 3. Guiding Principles Section */}
      <section className="section-padding section-padding-light">
        <div className="container">
          <h2 className={styles.sectionTitle}>Our Guiding Principles</h2>
          <div className={styles.principlesGrid}>
            <PrincipleCard 
                icon={<FontAwesomeIcon icon={faUsers} size="2x" />} 
                title="Radical Inclusivity" 
                text="We actively create spaces where every woman, regardless of background, feels a true sense of belonging. We celebrate diversity as our greatest strength." 
            />
            <PrincipleCard 
                icon={<FontAwesomeIcon icon={faBookOpen} size="2x" />} 
                title="Cultural Curiosity" 
                text="We approach different cultures with a desire to learn, not to judge. We believe that asking questions and listening deeply is the first step toward genuine understanding." 
            />
            <PrincipleCard 
                icon={<FontAwesomeIcon icon={faHeart} size="2x" />} 
                title="Authentic Connection" 
                text="We move beyond superficial networking. Our programs are designed to foster real relationships built on shared experiences, empathy, and trust." 
            />
            <PrincipleCard 
                icon={<FontAwesomeIcon icon={faHandshake} size="2x" />} 
                title="Action-Oriented Sisterhood" 
                text="Our solidarity is active, not passive. We channel the energy from our connections into concrete projects, mentorship, and support that lifts each other up." 
            />
            <PrincipleCard 
                icon={<FontAwesomeIcon icon={faArrowUpRightDots} size="2x" />} 
                title="Collective Impact" 
                text="We know that we are stronger together. By uniting women across borders, we amplify our individual efforts to create a wave of positive change that no one could achieve alone." 
            />
          </div>
        </div>
      </section>

      {/* 4. Our Approach */}
      <section className="container section-padding">
        <h2 className={styles.sectionTitle}>Our Approach: Beyond Inspiration to Lasting Impact</h2>
        <p className={styles.approachIntro}>
            Our philosophy moves beyond inspiration to create lasting impact through a structured methodology that honors both cultural wisdom and actionable outcomes.
        </p>
        <div className={styles.approachGrid}>
            <ApproachStep 
                num="1" 
                title="Center Cultural Wisdom as Strength: The Spark" 
                desc="We treat cultural heritage not as a performance, but as a vital source of innovation and leadership. Our speakers share solutions rooted in their cultural contexts, providing a global toolkit for local action." 
            />
            <ApproachStep 
                num="2" 
                title="Foster Authentic Dialogue & Connection: The Bridge" 
                desc="We create spaces where CEOs, activists, artists, and policymakers find common ground through structured conversations. It's about creating meaningful exchanges where cultural approaches collide to solve universal challenges facing women worldwide." 
            />
            <ApproachStep 
                num="3" 
                title="Build Active Sisterhood: The Engine" 
                desc="We believe sisterhood is a verb. This is shown through our intergenerational mentorship programs that cross geographical borders, creating brave spaces for honest conversations about privilege and power." 
            />
            <ApproachStep 
                num="4" 
                title="Drive Collective Action: The Impact" 
                desc="Every connection must lead to meaningful progress. We channel the energy from our exchanges into concrete outcomes through our Action Grants program and by facilitating ongoing collaborations." 
            />
          </div>
      </section>

      {/* 5. Our Story */}
      <section className="section-padding section-padding-light">
        <div className="container">
            <h2 className={styles.sectionTitle}>Our Story</h2>
            <div className={styles.storyGrid}>
              <div className={styles.storyText}>
                <p>
                    The Global Women Cultural Exchange was born from a powerful convergence of lives. Our founders—a collective of women from starkly different professional landscapes and cultural backgrounds—came together with a shared revelation: while their individual paths were unique, their core belief was identical. They each knew that the untapped power of women's collective wisdom, shared across cultural divides, was the world's most potent catalyst for change.
                </p>
                <p>
                    An anthropologist, a former mayor, a UN strategist, a refugee advocate, and an entrepreneur—this was not a likely team. Yet, it was precisely this diversity of experience that revealed the critical gap in women's empowerment. They saw that true progress requires more than just dialogue; it demands a space where cultural heritage and personal story are not just acknowledged, but celebrated as the very engine of innovation and connection.
                </p>
                <p>
                    From this realization, a new vision was forged. They moved beyond their individual missions to build something greater: a living, global ecosystem where a leader in business could find common ground with a grassroots organizer, where a artist's vision could inspire a policymaker's action. The Global Women Cultural Exchange is that promise made real—a testament to the revolutionary idea that our differences are not barriers, but the very materials from which we build a stronger, more connected future for all women.
                </p>
              </div>
              <LazyLoadImage
                src={IMAGES.HERO.SECONDARY} 
                alt="Image representing collaboration and shared vision"
                effect="blur"
                className={styles.storyImage}
              />
            </div>
        </div>
      </section>

      {/* 6. Endorsements & Team CTA */}
      <section className="container section-padding">
          <div className={styles.twoColumnGrid}>
            <div className={styles.endorsementsBlock}>
                <h2 className={styles.endorsementTitle}>What People Are Saying</h2>
                <Endorsement 
                    quote="GWCE doesn't just talk about global sisterhood—they architect the spaces where it becomes real. Their approach is a game-changer for women's empowerment."
                    author="Heidi Williams"
                    title="Former Mayor of Thornton & Community Leader"
                />
                <Endorsement 
                    quote="The emphasis on moving from dialogue to action is what sets this organization apart. They are building the infrastructure for a more connected and compassionate world."
                    author="Kate Freeman"
                    title="Academic & Social Justice Advocate"
                />
            </div>
            {/* Team CTA block from the original About page */}
            <div className={styles.teamCtaBlock}>
                <h2>Our Team</h2>
                <p>Click here to learn about our team</p>
                <Link to="/team"> {/* Using Link to point to the dedicated team page if it were to exist */}
                    <Button variant="primary">Meet the Leaders</Button>
                </Link>
            </div>
          </div>
      </section>

      {/* 7. ➡️ MERGED: Leadership Team Grid */}
      <section className="section-padding section-padding-light">
        <div className="container">
          <h2 className={styles.sectionTitle}>Leadership Team</h2>
          <div className={styles.teamGrid}>
            {leadershipTeam.map(member => (
              <TeamCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>
      
      {/* 8. ➡️ MERGED: Advisory Council List */}
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

      {/* 9. ➡️ MERGED: Employment Opportunities */}
      <section className="section-padding section-padding-light">
        <div className={styles.employmentCta}>
          <h2>Join Us</h2>
          <p>We are looking for passionate individuals.</p>
          <Button to="/careers" variant="primary">
            View Open Positions
          </Button>
        </div>
      </section>

      {/* 10. Legal & Financial Info */}
      <section className="section-padding">
        <div className={styles.transparencyBlock}>
          <h2>Legal & Financial Transparency</h2>
          <div className={styles.financialInfoGrid}>
                <div>
                    <h4>Legal Name</h4>
                    <p>Global Women Cultural Exchange</p>
                </div>
                <div>
                    <h4>Tax Status</h4>
                    <p>501(c)(3) status information</p>
                </div>
                <div>
                    <h4>EIN Number</h4>
                    <p>39-4648062</p>
                </div>
          </div>
          <p className={styles.transparencyStatement}>
            We are committed to financial transparency and operational integrity. As a new organization, our first annual report will be published following the close of our fiscal year.
          </p>
          <a href="#" className={styles.annualReportLink}>
            View Our Annual Reports (Coming Soon)
          </a>
        </div>
      </section>
    </div>
  );
}