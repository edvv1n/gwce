import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Common GSAP animations
export const fadeInUp = (element: string | Element, delay: number = 0) => {
  return gsap.from(element, {
    y: 50,
    opacity: 0,
    duration: 1,
    delay,
    ease: "power3.out",
    scrollTrigger: {
      trigger: element,
      start: "top bottom-=100",
      toggleActions: "play none none reverse"
    }
  });
};

export const staggerFadeIn = (elements: string | Element[], stagger: number = 0.2) => {
  return gsap.from(elements, {
    opacity: 0,
    y: 30,
    stagger,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: elements[0],
      start: "top bottom-=100",
      toggleActions: "play none none reverse"
    }
  });
};