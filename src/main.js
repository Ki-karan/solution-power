import './style.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// ─── NAVBAR ───────────────────────────────────────
const navbar = document.getElementById('navbar')
window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    navbar.classList.add('bg-white', 'shadow-md')
    navbar.classList.remove('bg-transparent')
    navbar.querySelectorAll('ul a').forEach(a => {
      a.classList.remove('text-white/80')
      a.classList.add('text-mid')
    })
    navbar.querySelector('span.font-extrabold').classList.remove('text-white')
    navbar.querySelector('span.font-extrabold').classList.add('text-dark')
  } else {
    navbar.classList.remove('bg-white', 'shadow-md')
    navbar.classList.add('bg-transparent')
    navbar.querySelectorAll('ul a').forEach(a => {
      a.classList.add('text-white/80')
      a.classList.remove('text-mid')
    })
    navbar.querySelector('span.font-extrabold').classList.add('text-white')
    navbar.querySelector('span.font-extrabold').classList.remove('text-dark')
  }
})

const menuBtn = document.getElementById('menu-btn')
const mobileMenu = document.getElementById('mobile-menu')
menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'))
mobileMenu.querySelectorAll('a').forEach(l => l.addEventListener('click', () => mobileMenu.classList.add('hidden')))

// ─── HERO ANIMATIONS ──────────────────────────────
gsap.from('#hero-badge', { opacity: 0, y: 20, duration: 0.8, delay: 0.2, ease: 'power3.out' })
gsap.from('#hero-headline', { opacity: 0, y: 40, duration: 1, delay: 0.4, ease: 'power3.out' })
gsap.from('#hero-sub', { opacity: 0, y: 30, duration: 0.8, delay: 0.6, ease: 'power3.out' })
gsap.from('#hero-ctas', { opacity: 0, y: 20, duration: 0.8, delay: 0.8, ease: 'power3.out' })
gsap.from('#hero-stats > div', { opacity: 0, y: 30, duration: 0.6, delay: 1, stagger: 0.1, ease: 'power2.out' })

// ─── SCROLL ANIMATIONS ────────────────────────────
const fadeUp = (selector, trigger, delay = 0) => {
  gsap.from(selector, {
    scrollTrigger: { trigger: trigger || selector, start: 'top 80%' },
    opacity: 0, y: 40, duration: 0.7, delay, ease: 'power2.out'
  })
}

const staggerUp = (selector, trigger) => {
  gsap.from(selector, {
    scrollTrigger: { trigger, start: 'top 80%' },
    opacity: 0, y: 40, duration: 0.6, stagger: 0.1, ease: 'power2.out'
  })
}

fadeUp('.sol-label', '#solutions')
fadeUp('.sol-heading', '#solutions', 0.1)
fadeUp('.sol-sub', '#solutions', 0.2)
staggerUp('.sol-card', '.sol-grid')
staggerUp('.hiw-step', '#how-it-works')
staggerUp('.paas-card', '#paas')
staggerUp('.project-card', '.projects-grid')
staggerUp('.timeline-item', '#about')
staggerUp('.brand-item', '.brands-grid')

// ─── SCENARIO TABS ────────────────────────────────
const tabs = document.querySelectorAll('.scenario-tab')
const scenes = document.querySelectorAll('.scene-panel')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const scene = tab.dataset.scene

    tabs.forEach(t => {
      t.classList.remove('bg-primary', 'text-white', 'active-tab')
      t.classList.add('hover:bg-light')
    })
    tab.classList.add('bg-primary', 'text-white')
    tab.classList.remove('hover:bg-light')

    scenes.forEach(s => {
      if (s.id === `scene-${scene}`) {
        s.classList.remove('hidden')
        gsap.from(s, { opacity: 0, y: 20, duration: 0.4, ease: 'power2.out' })
      } else {
        s.classList.add('hidden')
      }
    })
  })
})

// Set first tab active on load
tabs[0].classList.add('bg-primary', 'text-white')

// ─── MARQUEE CSS ──────────────────────────────────
const style = document.createElement('style')
style.textContent = `
  .marquee-wrapper { mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent); }
  .marquee-track { animation: marquee 35s linear infinite; padding-right: 3rem; }
  @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
`
document.head.appendChild(style)

// ─── CONTACT FORM ─────────────────────────────────
document.getElementById('submit-btn').addEventListener('click', () => {
  const btn = document.getElementById('submit-btn')
  btn.textContent = '✓ Enquiry Sent!'
  btn.classList.add('bg-green-600')
  btn.classList.remove('bg-primary')
  setTimeout(() => {
    btn.innerHTML = 'Send Enquiry <svg class="w-4 h-4 inline ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>'
    btn.classList.remove('bg-green-600')
    btn.classList.add('bg-primary')
  }, 3000)
})