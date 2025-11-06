import { Link } from 'react-router-dom';
import { FaUsers, FaHandshake, FaChalkboardTeacher, FaRegBuilding, FaSchool } from 'react-icons/fa';
import Button from '../components/shared/Button';
import styles from './GetInvolved.module.css';

// Helper for "Ways to Engage" buttons 
const EngageCard = ({ title, icon }: { title: string, icon: React.ReactNode }) => (
  <Link to="#" className={styles.engageCard}>
    <div className={styles.engageIcon}>{icon}</div>
    <span>{title}</span>
  </Link>
);

export default function GetInvolved() {
  return (
    <div className={styles.getInvolvedPage}>
      {/* 1. Hero Header */}
      <section className={styles.hero}>
        <h1>Find Your Place in Our Story</h1>
      </section>
      
      {/* 2. Ways to Engage */}
      <section className="section-padding section-padding-light">
        <div className="container">
          <h2 className={styles.sectionTitle}>Ways to Engage</h2>
          <div className={styles.engageGrid}>
            <EngageCard title="Attend" icon={<FaSchool size={40} />} />
            <EngageCard title="Sponsor" icon={<FaHandshake size={40} />} />
            <EngageCard title="Volunteer" icon={<FaUsers size={40} />} />
            <EngageCard title="Speak" icon={<FaChalkboardTeacher size={40} />} />
            <EngageCard title="Mentor" icon={<FaUsers size={40} />} />
            <EngageCard title="Partner" icon={<FaRegBuilding size={40} />} />
          </div>
        </div>
      </section>

      {/* 3. Sponsorship Tiers Table */}
      <section className="container section-padding">
        <h2 className={styles.sectionTitle}>Sponsorship</h2>
        <div className={styles.tableWrapper}>
          <table>
            <thead>
              <tr>
                <th>Level</th>
                <th>$5,000</th>
                <th>$10,000</th>
                <th>$15,000+</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Benefit 1</td><td>✓</td><td>✓</td><td>✓</td></tr>
              <tr><td>Benefit 2</td><td></td><td>✓</td><td>✓</td></tr>
              <tr><td>Benefit 3</td><td></td><td></td><td>✓</td></tr>
            </tbody>
          </table>
        </div>
        <div className={styles.tableCta}>
          <Button to="#" variant="primary">
            Download Sponsorship Package
          </Button>
        </div>
      </section>
      
      {/* 4. & 6. Partnership & Volunteer */}
      <section className="section-padding section-padding-light">
        <div className={`${styles.listsGrid} container`}>
          <div>
            <h2>Partnership Types</h2>
            <ul className={styles.styledList}>
              <li>Corporate</li>
              <li>Community</li>
              <li>Educational</li>
              <li>Cultural</li>
            </ul>
          </div>
          <div>
            <h2>Volunteer Opportunities</h2>
            <ul className={styles.styledList}>
              <li>Event Operations</li>
              <li>Facilitation</li>
              <li>Admin Support</li>
              <li>Cultural Expertise</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Donation Tiers */}
      <section className="container section-padding">
        <h2 className={styles.sectionTitle}>Make a Direct Impact</h2>
        <div className={styles.donationGrid}>
          <Link to="/donate" className={styles.donationCard}>$50</Link>
          <Link to="/donate" className={styles.donationCard}>$100</Link>
          <Link to="/donate" className={styles.donationCard}>$250</Link>
          <Link to="/donate" className={styles.donationCard}>$500</Link>
        </div>
        <div className={styles.tableCta}>
          <Button to="/donate" variant="primary">
            Donate a Custom Amount
          </Button>
        </div>
      </section>
    </div>
  );
}