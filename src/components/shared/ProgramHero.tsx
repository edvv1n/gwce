import styles from '../../pages/OurWork.module.css';

const ProgramHero = ({ 
    title, 
    subtitle, 
    bgImage 
}: { 
    title: string, 
    subtitle: string, 
    bgImage: string 
}) => {
    return (
        <section className={styles.heroBanner} style={{ backgroundImage: `url(${bgImage})` }}>
            <div className={styles.heroOverlay} />
            <div className={styles.heroContent}>
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>
        </section>
    );
};

export default ProgramHero;