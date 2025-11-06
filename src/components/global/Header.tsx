import { useState } from 'react';
import { Link } from 'react-router-dom';
import AppNavLink from '../shared/AppNavLink';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaChevronDown } from 'react-icons/fa'; // Icon for desktop dropdown
import MobileMenu from './MobileMenu';
import Button from '../shared/Button';
import styles from './Header.module.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { 
      name: 'Programs', 
      path: '/programs',
      children: [
        { name: "Global Women’s Summit", path: '/programs/summit' },
        { name: 'Youth Mentorship', path: '/programs/mentorship' },
        { name: 'Cultural Exchange', path: '/programs/exchange' },
        { name: 'Action Grants', path: '/programs/grants' },
      ]
    },
    { 
      name: 'Get Involved', 
      path: '/get-involved',
      children: [
        { name: 'Become a Member', path: '/get-involved/member' },
        { name: 'Volunteer Opportunities', path: '/get-involved/volunteer' },
        { name: 'Partnership & Sponsorship', path: '/get-involved/partnership' },
        { name: 'Make a Donation', path: '/donate' },
      ]
    },
    { name: 'News & Stories', path: '/news' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={styles.header}> 
      <nav className={`${styles.nav} container`}>
        <Link to="/" title="GWCE Home" className={styles.logoLink}>
          <img src="/logo.png" alt="GWCE Logo" className={styles.logo} /> 
        </Link>

        {/* --- Desktop Navigation --- */}
        <div className={styles.desktopNav}>
          {navItems.map((item) => {
            const hasChildren = item.children && item.children.length > 0;

            if (hasChildren) {
              return (
                <div key={item.path} className={styles.navItem}>
                  {/* Parent link with dropdown chevron */}
                  <AppNavLink to={item.path} isDesktop>
                    {item.name} <FaChevronDown size={10} className={styles.desktopChevron} />
                  </AppNavLink>
                  
                  {/* Dropdown Content, revealed via CSS hover on .navItem */}
                  <div className={styles.dropdownContent}>
                    {item.children!.map((child) => (
                      <AppNavLink key={child.path} to={child.path}>
                        {child.name}
                      </AppNavLink>
                    ))}
                  </div>
                </div>
              );
            }
            
            // Standard AppNavLink for items without children
            return (
              <AppNavLink key={item.path} to={item.path} isDesktop>
                {item.name}
              </AppNavLink>
            );
          })}
          
          <Button to="/donate" variant="primary" className={styles.headerCta}>
            Donate Now 
          </Button>
        </div>

        {/* --- Mobile Navigation Toggle --- */}
        <div className={styles.mobileToggle}>
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation">
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />} 
          </button>
        </div>
      </nav>

      {/* --- Mobile Menu (Dropdown) --- */}
      <MobileMenu navItems={navItems} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
}