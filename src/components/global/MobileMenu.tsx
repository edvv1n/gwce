import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Icons for the mobile toggle
import AppNavLink from '../shared/AppNavLink';
import Button from '../shared/Button';
import styles from './MobileMenu.module.css';

type NavItem = {
  name: string;
  path: string;
  children?: NavItem[];
};

type MobileMenuProps = {
  navItems: NavItem[];
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileMenu({ navItems, isOpen, onClose }: MobileMenuProps) {
  // Local state to track which submenu path is open
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  if (!isOpen) return null;

  const toggleSubmenu = (path: string) => {
    // Toggles the submenu open/closed
    setOpenSubmenu(prev => (prev === path ? null : path));
  };

  return (
    <div 
      className={styles.mobileMenu}
      // Click on the menu background (not a link/button) closes it
      onClick={onClose} 
    >
      {navItems.map((item) => {
        const hasChildren = item.children && item.children.length > 0;
        const isSubmenuOpen = openSubmenu === item.path;
        
        return (
          <div key={item.path} className={styles.menuItem}>
            {hasChildren ? (
              <div className={styles.parentLink}>
                {/* AppNavLink for the parent item, which navigates and closes the menu */}
                <AppNavLink to={item.path} onClick={onClose}>
                  {item.name}
                </AppNavLink>
                {/* Button to toggle the submenu visibility (accordion) */}
                <button 
                  className={styles.chevron}
                  onClick={(e) => {
                    e.stopPropagation(); // Prevents the main menu close event
                    toggleSubmenu(item.path);
                  }}
                  aria-expanded={isSubmenuOpen}
                  aria-label={`Toggle submenu for ${item.name}`}
                >
                  {isSubmenuOpen ? <FaChevronUp size={16} /> : <FaChevronDown size={16} />}
                </button>
              </div>
            ) : (
              // Simple AppNavLink for leaf nodes (clicking closes the menu)
              <AppNavLink to={item.path} onClick={onClose}>
                {item.name}
              </AppNavLink>
            )}
            
            {/* Conditional rendering based on state */}
            {hasChildren && isSubmenuOpen && (
              <div className={styles.subItems} onClick={(e) => e.stopPropagation()}>
                {item.children.map((child) => (
                  <AppNavLink 
                    key={child.path} 
                    to={child.path}
                    onClick={onClose} // Clicking sub-link closes the menu
                  >
                    {child.name}
                  </AppNavLink>
                ))}
              </div>
            )}
          </div>
        );
      })}
      <div className={styles.ctaContainer}>
        <Button to="/donate" variant="primary" className={styles.ctaButton} onClick={onClose}>
          Donate Now
        </Button>
      </div>
    </div>
  );
}