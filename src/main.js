import './style.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// ═══════════════════════════════════════════════
// PRODUCT DATA — 8 products, matches data-product="0..7" on cards
// ═══════════════════════════════════════════════
const productData = [
  {
    icon: '☀️',
    name: 'Solar Panel Array',
    brands: 'Waaree · Luminous Solar · Ashapower',
    specs: ['1 kW to 1 MW+', 'Monocrystalline PERC', '25-year performance warranty'],
    components: [
      'Solar Cells — Convert photons directly into DC electricity via the photovoltaic effect',
      'EVA Encapsulant — Ethylene Vinyl Acetate layer protects cells from moisture and UV',
      'Tempered Glass — Anti-reflective coating increases light transmission by ~3%',
      'Aluminium Frame — Structural support and grounding path; anodised for corrosion resistance',
      'Junction Box — Houses bypass diodes; IP67 rated to withstand outdoor exposure',
      'Backsheet — Protects rear surface; white reflects heat, keeping cells cooler'
    ]
  },
  {
    icon: '⚡',
    name: 'Solar Inverter / UPS',
    brands: 'Schneider Electric · APC · Eaton · Microtek',
    specs: ['1 kVA to 100 kVA', 'Pure Sine Wave output', 'MPPT Solar Charging'],
    components: [
      'MPPT Circuit — Maximum Power Point Tracking; extracts maximum power from panels in all conditions',
      'PWM Controller — Pulse Width Modulation for precision battery charging and conditioning',
      'IGBT Inverter Stage — Insulated Gate Bipolar Transistors produce clean AC sine wave',
      'Transformer — Isolated galvanic separation between DC and AC circuits',
      'Display Panel — Real-time monitoring of load %, battery level, input voltage',
      'Solar DC Input Terminals — Direct connection for panel strings; rated for high DC voltages'
    ]
  },
  {
    icon: '🔋',
    name: 'Lithium Energy Storage (ESS)',
    brands: 'Power Oxigen (own brand)',
    specs: ['5 kWh to 500 kWh+', 'LFP Chemistry', '6000+ charge cycles'],
    components: [
      'LFP Battery Cells — Lithium Iron Phosphate; safest lithium chemistry, no thermal runaway risk',
      'BMS — Battery Management System monitors each cell for voltage, temperature, and state-of-charge',
      'Cell Balancing Circuit — Active/passive balancing equalises charge across all cells for longevity',
      'Thermal Management — Active cooling/heating maintains cells at optimal 15°C–35°C',
      'Bidirectional Converter — Converts between AC and DC in both directions for charge and discharge',
      'Front Panel Display — Shows State of Charge (%), power flow direction, and fault codes'
    ]
  },
  {
    icon: '🖥️',
    name: 'Commercial UPS',
    brands: 'Schneider · APC · Eaton · Vertiv · Fuji Electric',
    specs: ['1 kVA to 500 kVA', 'Online Double Conversion', 'Zero Transfer Time'],
    components: [
      'Rectifier — Converts incoming utility AC to clean DC, powering both inverter and battery charger',
      'Inverter — Continuously produces clean AC output; load never touches raw utility power',
      'Battery Bank — Provides runtime during outage; tubular, VRLA, or lithium depending on need',
      'Static Bypass Switch — Transfers load to utility in <1 cycle if inverter fails; no interruption',
      'Control Board — Manages protection, alarming, comms; SNMP card slot for network monitoring',
      'LCD Panel — Displays input/output voltage, load %, battery runtime, alarms, and efficiency'
    ]
  },
  {
    icon: '⚙️',
    name: 'Servo Voltage Stabilizer',
    brands: 'Power Gate Solution (own brand — self-manufactured)',
    specs: ['10 kVA to 1000 kVA', 'Servo motor controlled', '±1% output accuracy'],
    components: [
      'Servo Motor — Rotates precisely based on error signal to adjust autotransformer tap position',
      'Variac / Autotransformer — Provides stepless voltage adjustment from 0 to rated voltage',
      'Dimmerstat — Fine-tuned voltage control mechanism driven by the servo motor shaft',
      'Sensing & Control Circuit — Continuously measures output voltage and generates correction signal',
      'Voltmeter & Ammeter — Dual panel meters display input and output voltage/current in real-time',
      'Heavy-Duty Copper Terminals — Rated for full load current; tin-plated for corrosion resistance'
    ]
  },
  {
    icon: '📦',
    name: 'Distribution Board (DB Panel)',
    brands: 'Custom-Built by Solution Power',
    specs: ['Fully custom configurations', 'MCB, MCCB, RCCB protection', 'IP54 to IP65 rating'],
    components: [
      'MCBs — Miniature Circuit Breakers: individual protection for each outgoing circuit',
      'Main Busbar — Tinned copper bar rated for total incoming current capacity',
      'Neutral Bar — Dedicated neutral distribution point for all circuits',
      'Earth Bar — Safety earthing connection for all circuits and enclosure',
      'Contactors — Heavy-duty electromechanical switching for motor and high-load circuits',
      'Cable Glands — IP-rated compression glands for sealed cable entry; prevent dust and moisture'
    ]
  },
  {
    icon: '🔌',
    name: 'Generator / DG Set',
    brands: 'Silent Canopy Type · AMF Panel Included',
    specs: ['15 kVA to 1000 kVA', 'Diesel powered', 'Automatic Mains Failure (AMF)'],
    components: [
      'Diesel Engine — Multi-cylinder prime mover; direct injection for fuel efficiency',
      'Alternator — Generates 3-phase 415V / 1-phase 230V AC; brushless for low maintenance',
      'Fuel Tank — Built-in base tank sized for 8–12 hours of autonomy at full load',
      'AVM Pads — Anti-Vibration Mounts isolate engine vibration from the base frame',
      'AMF Panel — Automatic Mains Failure control starts generator and transfers load within seconds',
      'Acoustic Canopy — Sound-attenuated enclosure reduces noise to <75 dB at 1 metre'
    ]
  },
  {
    icon: '🔶',
    name: 'Battery Bank',
    brands: 'Exide · Luminous · Amaron Quanta · Power Oxigen · iPower',
    specs: ['12V to 48V systems', 'Tubular, AGM VRLA, Lithium LFP', '150Ah to 200Ah per unit'],
    components: [
      'Positive Plate — Tubular or flat-plate design; determines capacity and cycle life',
      'Negative Plate — Pasted plate with antimony-free alloy for low self-discharge',
      'Separator — Microporous polyethylene; prevents internal short circuit between plates',
      'Electrolyte — Dilute sulfuric acid (liquid), gel, or absorbed glass mat (AGM)',
      'Terminal Posts — Heavy copper-alloy posts with anti-corrosion coating',
      'Battery Rack — Powder-coated steel frame; ventilated for gas dispersal during charging'
    ]
  }
]

// ═══════════════════════════════════════════════
// PRODUCT MODAL
// Why: The modal is hidden by default (class="hidden"). openModal() removes 'hidden',
// adds 'is-open' (which sets display:flex via CSS), then animates the inner card.
// closeModal() reverses the animation, then re-hides the modal.
// ═══════════════════════════════════════════════
const modal       = document.getElementById('product-modal')
const modalCard   = modal?.querySelector('.modal-card')
const modalClose  = document.getElementById('modal-close')
const modalOverlay = document.getElementById('modal-overlay')

function openModal(idx) {
  const p = productData[idx]
  if (!modal || !p) return

  // Populate content
  document.getElementById('modal-icon').textContent   = p.icon
  document.getElementById('modal-name').textContent   = p.name
  document.getElementById('modal-brands').textContent = p.brands

  document.getElementById('modal-specs').innerHTML = p.specs
    .map(s => `<span class="bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-full">${s}</span>`)
    .join('')

  document.getElementById('modal-components').innerHTML = p.components
    .map(c => {
      const dash = c.indexOf(' — ')
      const part = dash !== -1 ? c.slice(0, dash) : c
      const desc = dash !== -1 ? c.slice(dash + 3) : ''
      return `
        <div class="flex items-start gap-3 py-2.5 border-b border-slate-100 last:border-0">
          <div class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
          <p class="text-sm text-dark leading-relaxed">
            <span class="font-semibold">${part}</span>
            ${desc ? `<span class="text-mid"> — ${desc}</span>` : ''}
          </p>
        </div>`
    }).join('')

  // Show modal
  modal.classList.remove('hidden')
  modal.classList.add('is-open')
  document.body.style.overflow = 'hidden'

  // Animate in
  gsap.fromTo(modalCard,
    { opacity: 0, y: 40, scale: 0.95 },
    { opacity: 1, y: 0, scale: 1, duration: 0.35, ease: 'power3.out' }
  )
}

function closeModal() {
  if (!modal) return
  gsap.to(modalCard, {
    opacity: 0, y: 24, scale: 0.95, duration: 0.22, ease: 'power2.in',
    onComplete: () => {
      modal.classList.add('hidden')
      modal.classList.remove('is-open')
      document.body.style.overflow = ''
    }
  })
}

// Attach modal triggers
document.querySelectorAll('.prod-card').forEach(card => {
  card.addEventListener('click', () => openModal(parseInt(card.dataset.product)))
})
modalClose?.addEventListener('click', closeModal)
modalOverlay?.addEventListener('click', closeModal)
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal() })

// ═══════════════════════════════════════════════
// TESTIMONIAL CAROUSEL
// Why: Fixed-height card with GSAP fade swap.
// pauseTestimonial/resumeTestimonial are window-scoped because they're called
// via inline onmouseenter/onmouseleave on the card element.
// ═══════════════════════════════════════════════
const testimonials = [
  {
    text: '"Solution Power installed our 50 KVA UPS within 48 hours of signing. Three years of operation — zero downtime."',
    name: 'Rajesh Mehta',
    role: 'Operations Manager, Colgate India'
  },
  {
    text: '"The hospital-grade UPS they designed for our ICU has been flawless. Their team understood critical load requirements perfectly."',
    name: 'Dr. Priya Palaskar',
    role: 'Director, Dr. Palaskar Hospital, Vasai'
  },
  {
    text: '"Our factory runs CNC machines 24/7. The Power Gate stabilizer eliminated all voltage fluctuation damage. ROI in under 8 months."',
    name: 'Suresh Agarwal',
    role: 'Plant Head, Boroplast Pvt. Ltd.'
  },
  {
    text: '"They powered our entire school — solar on the roof, UPS in the server room. Electricity bill dropped by 60%."',
    name: 'Amit Joshi',
    role: 'Principal, DY Patil International School'
  },
  {
    text: '"The PaaS model was a game-changer. No CAPEX, just reliable power every month. I recommend Solution Power to everyone."',
    name: 'Neeraj Shah',
    role: 'Facilities Manager, Rustomjee Urbania'
  },
  {
    text: '"38 bus shelters powered independently across Panvel in 6 months. Their execution was exceptional and on schedule."',
    name: 'Sanjay Kulkarni',
    role: 'Project Officer, Panvel Municipal Corporation'
  }
]

let currentT  = 0
let tInterval = null

function renderTestimonial(idx) {
  const t       = testimonials[idx]
  const textEl  = document.getElementById('testimonial-text')
  const nameEl  = document.getElementById('testimonial-name')
  const roleEl  = document.getElementById('testimonial-role')
  const dotsEl  = document.getElementById('testimonial-dots')
  if (!textEl) return

  gsap.to([textEl, nameEl, roleEl], {
    opacity: 0, y: 5, duration: 0.18,
    onComplete: () => {
      textEl.textContent = t.text
      nameEl.textContent = t.name
      roleEl.textContent = t.role
      gsap.to([textEl, nameEl, roleEl], { opacity: 1, y: 0, duration: 0.28 })
    }
  })

  if (dotsEl) {
    dotsEl.innerHTML = testimonials.map((_, i) =>
      `<div style="height:5px;border-radius:3px;transition:all 0.3s;${
        i === idx
          ? 'width:20px;background:#22c55e'
          : 'width:5px;background:rgba(255,255,255,0.3)'
      }"></div>`
    ).join('')
  }
}

function startTestimonialAuto() {
  tInterval = setInterval(() => {
    currentT = (currentT + 1) % testimonials.length
    renderTestimonial(currentT)
  }, 2500)
}

window.pauseTestimonial  = () => clearInterval(tInterval)
window.resumeTestimonial = () => startTestimonialAuto()

document.getElementById('testimonial-next')?.addEventListener('click', () => {
  currentT = (currentT + 1) % testimonials.length
  renderTestimonial(currentT)
  clearInterval(tInterval)
  startTestimonialAuto()
})

renderTestimonial(0)
startTestimonialAuto()

// ═══════════════════════════════════════════════
// NAVBAR SCROLL BEHAVIOUR
// Why we use inline styles instead of classList:
// Tailwind opacity classes like text-white/80 generate escaped class names that
// classList.replace() can struggle with. Inline style is always reliable.
// We store initial (transparent) state and scrolled (white bg) state.
// ═══════════════════════════════════════════════
const navbar         = document.getElementById('navbar')
const navUl          = navbar?.querySelector('ul')
const navLogoText    = navbar?.querySelector('.nav-logo-text')
const hamburgerLines = navbar?.querySelectorAll('.hamburger-line')

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY > 80

  if (!navbar) return

  // Background + shadow
  navbar.style.background = scrolled ? 'white' : 'transparent'
  navbar.style.boxShadow  = scrolled ? '0 1px 16px rgba(0,0,0,0.08)' : 'none'

  // Nav link colours (the <a> tags inherit from the <ul> but we override individually)
  navUl?.querySelectorAll('a').forEach(a => {
    a.style.color = scrolled ? '#334155' : ''
  })

  // Logo "Solution" text (the "Power" child keeps text-primary-light always)
  if (navLogoText) navLogoText.style.color = scrolled ? '#0F172A' : ''

  // Hamburger icon lines (visible on mobile only)
  hamburgerLines?.forEach(line => {
    line.style.backgroundColor = scrolled ? '#334155' : 'white'
  })
}, { passive: true })

// Mobile menu toggle
const menuBtn    = document.getElementById('menu-btn')
const mobileMenu = document.getElementById('mobile-menu')
menuBtn?.addEventListener('click', () => mobileMenu?.classList.toggle('hidden'))
mobileMenu?.querySelectorAll('a').forEach(link =>
  link.addEventListener('click', () => mobileMenu?.classList.add('hidden'))
)

// ═══════════════════════════════════════════════
// STAT COUNTER ANIMATION
// Why the 1500ms delay: the hero entrance timeline takes ~1.4s to complete.
// If we run counters at the same time, the user is watching elements fly in
// and completely misses the 0→35K count. By waiting until everything has
// settled, the counter becomes its own moment — the numbers pop up already
// visible, then start counting. Much more satisfying.
// ═══════════════════════════════════════════════
setTimeout(() => {
  document.querySelectorAll('.stat-num').forEach(el => {
    const target = parseInt(el.dataset.count)
    const suffix = el.dataset.suffix || '+'
    const obj    = { val: 0 }
    gsap.to(obj, {
      val: target,
      duration: 1.8,
      ease: 'power2.out',
      onUpdate() {
        el.textContent = Math.round(obj.val) + suffix
      }
    })
  })
}, 1500)
const heroTL = gsap.timeline({ defaults: { ease: 'power3.out' } })
heroTL
  .from('#hero-badge',          { opacity: 0, y: 18, duration: 0.7 }, 0.2)
  .from('#hero-headline',       { opacity: 0, y: 36, duration: 0.9 }, 0.4)
  .from('#hero-sub',            { opacity: 0, y: 26, duration: 0.8 }, 0.6)
  .from('#hero-ctas',           { opacity: 0, y: 18, duration: 0.7 }, 0.75)
  .from('.mobile-stat-pill',    { opacity: 0, y: 22, duration: 0.5, stagger: 0.08 }, 0.9)
  .from('#testimonial-card',    { opacity: 0, y: 22, duration: 0.6 }, 1.0)
  .from('#hero-stats > div',    { opacity: 0, y: 22, duration: 0.5, stagger: 0.08 }, 1.05)

// ═══════════════════════════════════════════════
// SCROLL-TRIGGERED ANIMATIONS
// Why staggerFadeUp: grids of cards look better entering one-by-one (stagger)
// rather than all at once. The stagger value (seconds between each item) is
// tuned per section — faster for small items, slower for large project cards.
// ═══════════════════════════════════════════════

function fadeUp(selector, trigger, extraDelay = 0) {
  gsap.from(selector, {
    scrollTrigger: { trigger: trigger || selector, start: 'top 82%', once: true },
    opacity: 0, y: 48, duration: 0.72, delay: extraDelay, ease: 'power2.out'
  })
}

function staggerFadeUp(selector, trigger, staggerSeconds = 0.1) {
  gsap.from(selector, {
    scrollTrigger: { trigger, start: 'top 80%', once: true },
    opacity: 0, y: 38, duration: 0.65, stagger: staggerSeconds, ease: 'power2.out'
  })
}

// Solutions
fadeUp('.sol-label',   '#solutions')
fadeUp('.sol-heading', '#solutions', 0.08)
fadeUp('.sol-sub',     '#solutions', 0.14)
staggerFadeUp('.sol-card', '.sol-grid', 0.08)

// Products
fadeUp('.prod-label',   '#products')
fadeUp('.prod-heading', '#products', 0.08)
fadeUp('.prod-sub',     '#products', 0.14)
staggerFadeUp('.prod-card', '.prod-grid', 0.06)

// Who We Serve
gsap.from('#scenarios .section-header', {
  scrollTrigger: { trigger: '#scenarios', start: 'top 82%', once: true },
  opacity: 0, y: 40, duration: 0.7, ease: 'power2.out'
})
gsap.from('#scenarios .scenario-tabs-col', {
  scrollTrigger: { trigger: '#scenarios', start: 'top 78%', once: true },
  opacity: 0, x: -30, duration: 0.7, delay: 0.15, ease: 'power2.out'
})
gsap.from('#scenarios .scenario-scene-col', {
  scrollTrigger: { trigger: '#scenarios', start: 'top 78%', once: true },
  opacity: 0, x: 30, duration: 0.7, delay: 0.15, ease: 'power2.out'
})

// How Solar Works
fadeUp('#how-it-works .section-header', '#how-it-works')
staggerFadeUp('.hiw-step', '#how-it-works', 0.14)

// PaaS
fadeUp('#paas .section-header', '#paas')
staggerFadeUp('.paas-card', '#paas', 0.16)

// Clients Marquee
fadeUp('#clients .section-header', '#clients')

// Brand Partners
fadeUp('#brands .section-header', '#brands')
staggerFadeUp('.brand-item', '.brands-grid', 0.04)

// Projects
fadeUp('#projects .section-header', '#projects')
staggerFadeUp('.project-card', '.projects-grid', 0.18)

// Journey / About
fadeUp('#about .section-header', '#about')
staggerFadeUp('.timeline-item', '#about', 0.14)

// Contact
gsap.from('.contact-info', {
  scrollTrigger: { trigger: '#contact', start: 'top 80%', once: true },
  opacity: 0, x: -40, duration: 0.75, ease: 'power2.out'
})
gsap.from('.contact-form-card', {
  scrollTrigger: { trigger: '#contact', start: 'top 80%', once: true },
  opacity: 0, x: 40, duration: 0.75, delay: 0.1, ease: 'power2.out'
})

// ═══════════════════════════════════════════════
// SCENARIO TABS
// Why: clicking a tab removes .is-active from all tabs, adds it to the clicked one,
// hides all scene panels, shows the matching one, and fades it in via GSAP.
// ═══════════════════════════════════════════════
const scenarioTabs   = document.querySelectorAll('.scenario-tab')
const scenarioPanels = document.querySelectorAll('.scene-panel')

scenarioTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const targetScene = tab.dataset.scene

    scenarioTabs.forEach(t => t.classList.remove('is-active'))
    tab.classList.add('is-active')

    scenarioPanels.forEach(panel => {
      if (panel.id === `scene-${targetScene}`) {
        panel.classList.remove('hidden')
        gsap.from(panel, { opacity: 0, y: 14, duration: 0.32, ease: 'power2.out' })
      } else {
        panel.classList.add('hidden')
      }
    })
  })
})

// Set first tab active on page load
scenarioTabs[0]?.classList.add('is-active')

// ═══════════════════════════════════════════════
// CONTACT FORM — visual feedback on click
// Note: Formspree won't work until YOUR_FORM_ID is replaced.
// The form has a proper <form> tag so it'll submit via POST when the ID is set.
// ═══════════════════════════════════════════════
const submitBtn = document.getElementById('submit-btn')
submitBtn?.addEventListener('click', () => {
  const original = submitBtn.innerHTML
  submitBtn.innerHTML = `
    <svg class="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10" stroke-opacity="0.25"/><path d="M12 2a10 10 0 0 1 10 10" stroke-opacity="1"/></svg>
    Sending...
  `
  submitBtn.disabled = true

  setTimeout(() => {
    submitBtn.innerHTML = `
      <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
      Enquiry Sent!
    `
    submitBtn.classList.replace('bg-primary', 'bg-green-600')
    setTimeout(() => {
      submitBtn.innerHTML = original
      submitBtn.disabled = false
      submitBtn.classList.replace('bg-green-600', 'bg-primary')
    }, 3000)
  }, 800)
})