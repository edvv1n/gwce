import { useState } from 'react';
import Button from '../components/shared/Button';
import styles from './Donate.module.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { IMAGES } from '../constants/images';
// --- NEW IMPORT ---
import ImpactChart from '../components/shared/ImpactChart'; 

export default function Donate() {
  // Use null or 0 for amount on initial load
  const [amount, setAmount] = useState<number | null>(100); 
  const [isRecurring, setIsRecurring] = useState(false);
  const [isTribute, setIsTribute] = useState(false);
  const presetAmounts = [25, 50, 100, 250];

  return (
    <div className={styles.donatePage}>
      {/* 1. Hero Banner */}
      <section className={styles.hero} style={{ backgroundImage: `url(${IMAGES.DONATE.MAIN})` }}>
        <div className={styles.heroOverlay} />
        <h1>Your Gift Creates Global Change</h1>
      </section>
      
      <section className={`${styles.donateLayout} container section-padding`}>
        {/* Donation Form Column (Omitted for brevity) */}
        <div className={styles.formWrapper}>
          <h2>Make Your Donation</h2>
          
          {/* 3. Donation Form (Omitted for brevity) */}
          <form className={styles.donationForm} onSubmit={(e) => e.preventDefault()}>
            {/* ... (Preset Amounts, Custom Amount, Toggles, Payment Details) ... */}
            
            <div className={styles.presetGrid}>
              {presetAmounts.map(preset => (
                <button 
                  type="button" 
                  key={preset} 
                  onClick={() => setAmount(preset)}
                  className={`${styles.presetButton} ${amount === preset ? styles.active : ''}`}
                >
                  ${preset}
                </button>
              ))}
            </div>
            
            <div className={styles.formField}>
              <label htmlFor="customAmount">Custom Amount</label>
              <input 
                type="number" 
                id="customAmount"
                placeholder="Enter Amount"
                value={amount ?? ''}
                onChange={(e) => setAmount(Number(e.target.value) || null)}
                min="1"
              />
            </div>
            
            <div className={styles.formCheck}>
              <input 
                type="checkbox" 
                id="recurring" 
                checked={isRecurring}
                onChange={() => setIsRecurring(!isRecurring)}
              />
              <label htmlFor="recurring">Make this a recurring monthly donation</label>
            </div>
            <div className={styles.formCheck}>
              <input 
                type="checkbox" 
                id="tribute" 
                checked={isTribute}
                onChange={() => setIsTribute(!isTribute)}
              />
              <label htmlFor="tribute">Make this a tribute gift</label>
            </div>

            <div className={styles.paymentSection}>
              <h3>Payment Details</h3>
              <div className={styles.paymentPlaceholder}>[Payment Details Placeholder]</div>
            </div>
            
            <Button type="submit" variant="primary">
              Donate ${amount || '...'} Securely
            </Button>
          </form>
        </div>
        
        {/* Impact Column (Omitted for brevity) */}
        <div className={styles.impactColumn}>
          <h2>How Your Gift Helps</h2>
          <div className={styles.impactImageWrapper}>
            <LazyLoadImage
              src={IMAGES.DONATE.IMPACT}
              alt="Visual representation of donation impact"
              effect="blur"
              className={styles.impactImage}
            />
          </div>
          <p>
            Your contribution directly funds Youth Mentorship programs, Cultural Exchange scholarships, and enables us to host the annual Global Women's Summit, building connections that foster lasting change across continents.
          </p>
          
          {/* 4. Where Money Goes - PIE CHART IMPLEMENTATION */}
          <div className={styles.impactModule}>
            <h3>Where Your Money Goes</h3>
            <div className={styles.chartPlaceholder}>
              <ImpactChart /> {/* ⬅️ CHART COMPONENT HERE */}
            </div>
          </div>
          
          {/* 5. Transparency Pledge (Omitted for brevity) */}
          <div className={styles.impactModule}>
            <h3>Our Transparency Pledge</h3>
            <p>
              We are committed to financial transparency, ensuring every dollar maximizes its impact. Our detailed annual reports outline exactly how your support advances global women's empowerment.
            </p>
            <a href="#">
              Download Annual Report 
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}