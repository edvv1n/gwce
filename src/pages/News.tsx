import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { FaSearch, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Button from '../components/shared/Button';
import styles from './News.module.css';
import { IMAGES } from '../constants/images';

// Helper component for Post Cards 
const PostCard = ({ title, snippet, imgSrc, featured = false }: { title: string, snippet: string, imgSrc: string, featured?: boolean }) => (
  <div className={`${styles.postCard} ${featured ? styles.featuredPost : ''}`}>
    <LazyLoadImage
      src={imgSrc}
      alt={title}
      effect="blur"
      className={styles.postImage}
    />
    <div className={styles.postContent}>
      <h3>{title}</h3>
      <p>{snippet}</p>
      <Link to="#">
        Read More
      </Link>
    </div>
  </div>
);

// Sidebar Component 
const Sidebar = () => (
  <div className={styles.sidebarContent}>
    {/* Search */}
    <div className={styles.sidebarWidget}>
      <div className={styles.searchBox}>
        <input type="text" placeholder="Search..." />
        <FaSearch />
      </div>
    </div>
    
    {/* Newsletter */}
    <div className={styles.sidebarWidget}>
      <h4>Subscribe</h4>
      <p>Get updates in your inbox.</p>
      <form className={styles.newsletterForm}>
        <input type="email" placeholder="Email" />
        <button type="submit">Go</button>
      </form>
    </div>
    
    {/* Categories */}
    <div className={styles.sidebarWidget}>
      <h4>Categories</h4>
      <ul className={styles.categoryList}>
        <li><Link to="#">Global Summit</Link></li>
        <li><Link to="#">Mentorship</Link></li>
        <li><Link to="#">Cultural Exchange</Link></li>
      </ul>
    </div>
  </div>
);

export default function News() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className={styles.newsPage}>
      {/* 1. Page Header */}
      <section className={styles.hero}>
        <h1>News & Stories</h1>
      </section>

      <div className={`${styles.mainLayout} container section-padding`}>
        {/* Mobile Sidebar Toggle */}
        <div className={styles.mobileSidebarToggle}>
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <span>Filter & Search</span>
            {isSidebarOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {isSidebarOpen && (
            <div className={styles.mobileSidebarContent}>
              <Sidebar />
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className={styles.mainContent}>
          {/* 2. Featured Post */}
          <section className={styles.featuredSection}>
            <h2>Featured Story</h2>
            <PostCard
              title="A New Bridge: Our 2024 Summit Highlights"
              snippet="[Snippet of featured post...]"
              imgSrc={IMAGES.NEWS.FEATURED}
              featured
            />
          </section>
          
          {/* 3. Post Grid */}
          <section>
            <h2>Latest Stories</h2>
            <div className={styles.postGrid}>
              <PostCard 
                title="Mentorship Success" 
                snippet="[Snippet...]" 
                imgSrc={IMAGES.PROGRAMS.COMMUNITY} 
              />
              <PostCard 
                title="Global Connections" 
                snippet="[Snippet...]" 
                imgSrc={IMAGES.HERO.SECONDARY} 
              />
              <PostCard 
                title="Cultural Exchange Recap" 
                snippet="[Snippet...]" 
                imgSrc={IMAGES.PROGRAMS.RESEARCH} 
              />
            </div>
          </section>
        </div>
        
        {/* 4. Desktop Sidebar */}
        <aside className={styles.desktopSidebar}>
          <Sidebar />
        </aside>
      </div>
      
      {/* 5. Media Kit */}
      <section className={`${styles.mediaKit} section-padding-light`}>
        <div className="container">
          <h2>For Press & Media</h2>
          <Button to="#" variant="primary">
            Download Media Kit
          </Button>
        </div>
      </section>
    </div>
  );
}