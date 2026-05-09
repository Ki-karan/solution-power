import './style.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// --- Navbar scroll effect ---
// Set initial navbar state (transparent over dark hero)
navbar.classList.add('bg-transparent')

window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    navbar.classList.add('bg-white', 'shadow-md')
    navbar.classList.remove('bg-transparent')
    navbar.querySelectorAll('a, span').forEach(el => el.classList.remove('text-white'))
  } else {
    navbar.classList.remove('bg-white', 'shadow-md')
    navbar.classList.add('bg-transparent')
  }
})

const navbar = document.getElementById('navbar')
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('bg-white', 'shadow-md')
    navbar.classList.remove('bg-transparent')
  } else {
    navbar.classList.remove('bg-white', 'shadow-md')
  }
})

// --- Mobile menu toggle ---
const menuBtn = document.getElementById('menu-btn')
const mobileMenu = document.getElementById('mobile-menu')
menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden')
})

// Close mobile menu on link click
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.add('hidden'))
})

// --- Hero entrance animations ---
gsap.from('#hero-badge', { opacity: 0, y: 20, duration: 0.8, delay: 0.2, ease: 'power3.out' })
gsap.from('#hero-headline', { opacity: 0, y: 40, duration: 1, delay: 0.4, ease: 'power3.out' })
gsap.from('#hero-sub', { opacity: 0, y: 30, duration: 0.8, delay: 0.6, ease: 'power3.out' })
gsap.from('#hero-ctas', { opacity: 0, y: 20, duration: 0.8, delay: 0.8, ease: 'power3.out' })
gsap.from('#hero-stats > div', {
  opacity: 0, y: 30, duration: 0.6, delay: 1,
  stagger: 0.1, ease: 'power2.out'
})