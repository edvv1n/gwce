import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import styles from '../../pages/OurWork.module.css';
import { IMAGES } from '../../constants/images';

// Placeholder array for speakers (15 slots)
const SPEAKERS = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    name: `Speaker Name ${i + 1}`,
    title: `Global Leader in Field ${i % 5 + 1}`,
    // Placeholder image: Switched to ABOUT.MAIN to bypass a type inference error on IMAGES.HERO
    imgSrc: IMAGES.ABOUT.MAIN, 
}));

const SpeakerGallery = () => {
    return (
        <div className={styles.galleryGrid}>
            {SPEAKERS.map(speaker => (
                <div key={speaker.id} className={styles.speakerCard}>
                    <LazyLoadImage
                        src={speaker.imgSrc}
                        alt={speaker.name}
                        effect="blur"
                        className={styles.speakerImage}
                    />
                    <h4>{speaker.name}</h4>
                    <p>{speaker.title}</p>
                </div>
            ))}
        </div>
    );
};

export default SpeakerGallery;