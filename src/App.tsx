import { useState, useEffect } from 'react'

const CAR_IMG = '/images/cars.webp?w=900&h=560&fit=crop&auto=format'
const UJJAIN_IMG = '/images/ujjain.webp?w=480&h=320&fit=crop&auto=format'
const OMKARESHWAR_IMG = '/images/omkareshwar.webp?w=480&h=320&fit=crop&auto=format'

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-gold">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-4.5 h-4.5 stroke-gold stroke-[2.5]">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.02 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.9v2.02z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-11 h-11 stroke-gold stroke-[1.5]">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  )
}

function CarSeatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 stroke-gold stroke-[1.5]">
      <path d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11a2 2 0 012 2v3m-9 7h8l4-4v4h2" />
      <circle cx="7" cy="20" r="2" />
      <circle cx="17" cy="20" r="2" />
    </svg>
  )
}

function LuggageIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 stroke-gold stroke-[1.5]">
      <rect x="6" y="7" width="12" height="14" rx="2" />
      <path d="M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2" />
      <line x1="12" y1="11" x2="12" y2="17" />
      <line x1="9" y1="14" x2="15" y2="14" />
    </svg>
  )
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 stroke-gold stroke-[1.5]">
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

function Divider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
      <span className="text-gold text-lg">✦</span>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
    </div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeTab, setActiveTab] = useState<'ujjain' | 'omkareshwar'>('ujjain')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="bg-navy text-white font-sans overflow-x-hidden">
      {/* ── NAVBAR ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-350 px-[5vw] ${scrolled
          ? 'bg-navy/95 border-b border-gold/20 backdrop-blur-md'
          : 'bg-transparent border-b-0 backdrop-blur-none'
          }`}
      >
        <div className="max-w-[1200px] mx-auto flex items-center justify-between h-[72px]">
          <a href="#home" className="flex items-center gap-2.5">
            <img src="/images/logo.svg" alt="Cabscraft logo" className="h-[52px] w-auto" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {['Home', 'Routes', 'Packages', 'Fleet', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-[#c8d8e8] text-sm font-medium tracking-wider transition-colors duration-200 hover:text-gold-light"
              >
                {link}
              </a>
            ))}
            <a
              href="tel:+918839942363"
              className="bg-gradient-to-br from-gold to-gold-dark text-navy px-5 py-2 rounded-md font-bold tracking-wider transition-opacity duration-200 hover:opacity-85 font-rajdhani flex flex-col items-center justify-center text-center leading-tight"
            >
              <span className="text-xs">📞 BOOK NOW</span>
              <span className="text-[11px] opacity-90">+91-8839942363</span>
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden bg-transparent border-0 cursor-pointer p-1"
          >
            <div
              className={`w-6 h-0.5 bg-gold mb-1.25 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-x-1 translate-y-1.25' : ''
                }`}
            />
            <div
              className={`w-6 h-0.5 bg-gold mb-1.25 transition-all duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'
                }`}
            />
            <div
              className={`w-6 h-0.5 bg-gold transition-all duration-300 ${menuOpen ? '-rotate-45 translate-x-1 -translate-y-1.25' : ''
                }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="bg-navy/98 px-[5vw] pt-4 pb-6 border-t border-gold/15 flex flex-col gap-4 lg:hidden">
            {['Home', 'Routes', 'Packages', 'Fleet', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-[#c8d8e8] text-base font-medium"
              >
                {link}
              </a>
            ))}
            <a
              href="tel:8839942363"
              className="bg-gradient-to-br from-gold to-gold-dark text-navy py-2.75 px-5 rounded-md font-bold text-sm text-center font-rajdhani tracking-wider"
            >
              📞 BOOK NOW
            </a>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section
        id="home"
        className="relative min-h-screen bg-[radial-gradient(ellipse_at_70%_50%,#01316b_0%,#020d1d_65%)] flex items-center overflow-hidden pt-[72px]"
      >
        {/* Decorative Background Accents */}
        <div className="absolute top-[15%] right-[5%] w-[420px] h-[420px] rounded-full border border-gold/10 pointer-events-none" />
        <div className="absolute top-[20%] right-[8%] w-[300px] h-[300px] rounded-full border border-gold/10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

        <div className="max-w-[1200px] mx-auto px-[5vw] py-15 w-full relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/25 rounded px-3.5 py-1.25 mb-5">
                <span className="text-gold-light text-xs font-semibold tracking-widest font-rajdhani">
                  ✦ PREMIUM TAXI & CAB SERVICES FROM INDORE ✦
                </span>
              </div>

              {/* Large Brand Logo Header */}
              <div className="w-full max-w-[480px] my-2 -ml-1">
                <svg
                  viewBox="20 15 235 185"
                  className="w-full h-auto"
                  xmlns="http://www.w3.org/2000/svg"
                ><defs><linearGradient x1="100.139" y1="169.728" x2="101.74" y2="142.653" gradientUnits="userSpaceOnUse" id="b"><stop offset="0" stopColor="#de9f30" /><stop offset="1" stopColor="#f9d26d" /></linearGradient><linearGradient x1="98.977" y1="179.152" x2="98.334" y2="167.046" gradientUnits="userSpaceOnUse" id="c"><stop offset="0" stopColor="#c17c14" /><stop offset="1" stopColor="#d99829" /></linearGradient><linearGradient x1="148.384" y1="131.303" x2="150.05" y2="107.769" gradientUnits="userSpaceOnUse" id="d"><stop offset="0" stopColor="#023581" /><stop offset="1" stopColor="#016dd1" /></linearGradient><linearGradient x1="72.567" y1="179.077" x2="72.907" y2="153.291" gradientUnits="userSpaceOnUse" id="e"><stop offset="0" stopColor="#c67e10" /><stop offset="1" stopColor="#f3c55c" /></linearGradient><linearGradient x1="186.579" y1="179.437" x2="188.024" y2="153.151" gradientUnits="userSpaceOnUse" id="f"><stop offset="0" stopColor="#013b8b" /><stop offset="1" stopColor="#0167cb" /></linearGradient><linearGradient x1="213.476" y1="177.864" x2="208.926" y2="143.027" gradientUnits="userSpaceOnUse" id="g"><stop offset="0" stopColor="#004090" /><stop offset="1" stopColor="#016bd1" /></linearGradient><linearGradient x1="124.326" y1="179.056" x2="123.097" y2="153.493" gradientUnits="userSpaceOnUse" id="h"><stop offset="0" stopColor="#c88015" /><stop offset="1" stopColor="#f3c054" /></linearGradient><linearGradient x1="224.871" y1="179.045" x2="227.708" y2="146.508" gradientUnits="userSpaceOnUse" id="i"><stop offset="0" stopColor="#003c8d" /><stop offset="1" stopColor="#016ad0" /></linearGradient><linearGradient x1="148.931" y1="179.051" x2="146.599" y2="153.674" gradientUnits="userSpaceOnUse" id="j"><stop offset="0" stopColor="#013f8f" /><stop offset="1" stopColor="#0164c8" /></linearGradient><linearGradient x1="139.179" y1="74.633" x2="150.731" y2="75.649" gradientUnits="userSpaceOnUse" id="k"><stop offset="0" stopColor="#c9841a" /><stop offset="1" stopColor="#e7ae3f" /></linearGradient><linearGradient x1="48.362" y1="165.718" x2="46.08" y2="142.747" gradientUnits="userSpaceOnUse" id="l"><stop offset="0" stopColor="#dd9f31" /><stop offset="1" stopColor="#f4ca63" /></linearGradient><linearGradient x1="125.8" y1="69.104" x2="118.338" y2="84.064" gradientUnits="userSpaceOnUse" id="m"><stop offset="0" stopColor="#c77a0d" /><stop offset="1" stopColor="#fad36b" /></linearGradient><linearGradient x1="168.245" y1="178.466" x2="167.64" y2="153.674" gradientUnits="userSpaceOnUse" id="n"><stop offset="0" stopColor="#013f8f" /><stop offset="1" stopColor="#0161c2" /></linearGradient><linearGradient x1="163.627" y1="65.433" x2="163.222" y2="52.891" gradientUnits="userSpaceOnUse" id="o"><stop offset="0" stopColor="#eeb448" /><stop offset="1" stopColor="#f7d26e" /></linearGradient><linearGradient x1="147.095" y1="122.098" x2="148.512" y2="135.986" gradientUnits="userSpaceOnUse" id="p"><stop offset="0" stopColor="#f1bf64" /><stop offset="1" stopColor="#fcde75" /></linearGradient><linearGradient x1="111.197" y1="63.313" x2="119.299" y2="49.045" gradientUnits="userSpaceOnUse" id="q"><stop offset="0" stopColor="#c07912" /><stop offset="1" stopColor="#e9af3f" /></linearGradient><linearGradient x1="172.358" y1="101.116" x2="161.562" y2="88.263" gradientUnits="userSpaceOnUse" id="r"><stop offset="0" stopColor="#dd9928" /><stop offset="1" stopColor="#f5c763" /></linearGradient><linearGradient x1="209.336" y1="142.597" x2="209.196" y2="133.246" gradientUnits="userSpaceOnUse" id="s"><stop offset="0" stopColor="#cb7910" /><stop offset="1" stopColor="#dda338" /></linearGradient><clipPath id="a"><path fill="none" d="M0 0h299.991v236.68H0z" /></clipPath></defs><g clipPath="url(#a)" fill="none" strokeMiterlimit="10" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="inherit" style={{ mixBlendMode: 'normal' }}><path d="M0 0h300z" fill="#020d1d" /><path d="M92.446 142.883c2.024-.197 5.37-.617 7.308-.676-.67 4.152-1.485 9.902-2.363 13.983 2.732-2.202 5.176-3.276 8.773-2.9 8.717.91 6.412 11.53 4.81 17.255-1.178 4.435-4.561 7.943-9.157 8.695-3.41.558-5.818.364-8.488-1.872l-.432 1.59-6.277.02a42 42 0 0 1 .385-2.545c.733-4.061 1.232-8.26 2.058-12.298.153-1.901.771-5.023 1.098-7.017q1.188-7.11 2.285-14.236" fill="url(#b)" /><path d="M96.623 161.106c2.566-2.644 8.548-3.685 8.612 1.469.012.98-.206 2.085-.186 3.021.32.938-.221 1.846.005 2.181 1.02.07 2.012 1.447 3.012 1.857.962.396 1.906.635 2.909.911-1.179 4.435-4.562 7.943-9.158 8.695-3.41.558-5.818.364-8.488-1.872l-.432 1.59-6.277.02a42 42 0 0 1 .385-2.545c.733-4.061 1.232-8.26 2.058-12.298.244.798-.107 2.468-.25 3.336.893.054 5.977.466 6.361.38.356-.961.107-1.484.672-2.178.3-1.152.606-3.334.777-4.567" fill="url(#c)" /><path d="M96.623 161.106c2.566-2.644 8.548-3.685 8.612 1.469.012.98-.206 2.085-.186 3.021-.434 1.767-.501 3.2-1.292 4.964-1.852 4.133-5.252 4.423-9.045 2.74.175-2.286.86-5.202 1.134-7.627.3-1.152.606-3.334.777-4.567" style={{ fill: '#0c1a36' }} /><path d="M53.594 122.51c13.04-.393 20.796-4.693 32.586-9.067 18.36-6.812 39.29-9.076 58.59-5.6 13.016 2.346 23.674 10.494 35.215 16.259.418.208 4.524.259 5.343.288q4.44.149 8.877.42c14.74.892 30.928 2.993 43.96 10.299 1.529.857 4.113 2.187 5.248 3.374-19.98-10.648-46.519-11.63-68.727-12.519-.455-.018-1.57-.072-1.873-.312.23-.238.36-.322.428-.647l-.181-.247c-11.114-8.882-24.768-14.518-39.051-15.212-12.409-.603-35.628 1.142-45.275 9.647 3.407 2.808 11.695 4.503 16.085 4.756-.072.127-.09.2-.193.285-4.21-.424-8.435-.322-12.632-.83-1.898-.23-3.915-.712-5.817-1.055a54 54 0 0 0-7.761-.796c-3.55-.076-6.554.526-10.038.894-4.171.44-10.714 1.077-14.784.063" fill="url(#d)" /><path d="M65.909 155.24c4.406-1.731 18.897-5.21 19.068 4.05.041 2.232-1.145 9.34-1.744 11.586-.297 2.659-.941 5.39-1.287 8.09l-6.178-.01c-.055-.797-.097-1.663-.201-2.45-3.157 2.325-5.835 3.461-9.89 2.908-2.277-.31-3.645-1.381-4.622-3.444a10.4 10.4 0 0 1-.351-2.94c.223-9.357 9.633-9.535 16.583-9.34.114-.809.366-2.291.126-3-1.268-3.74-9.433-1.053-11.888-.27z" fill="url(#e)" /><path d="M76.176 174.074c1.257-.025 1.82.237 2.861.26.614.125 2.46-2.107 2.78-2.126 1.797-.116.491-.292 1.416-1.332-.297 2.659-.941 5.39-1.287 8.09l-6.178-.01c-.055-.797-.097-1.663-.201-2.45-3.157 2.325-5.835 3.461-9.89 2.908-2.277-.31-3.645-1.381-4.622-3.444 1.061.074 2.018-.33 2.932.742.153.558-.148.975-.255 1.576.31.528.085.238.576.45 2.055.893 1.963-.658 4.435-1.231l.215-.05c3.582 1.614 3.556 1.263 4.23-1.853.07-.33 1.165-.747 1.132-1.927-.618.281-1.136.586-1.834.527 1.536-.665 1.877-.9 3.063-2.09-.09.39-.276.67-.47 1.02.138.492.55.593 1.097.94" fill="#cc8920" /><path d="M72.486 174.204c-.457.065-.988.113-1.447.177-3.326.475-3.991-3.206-1.979-5.124 1.693-1.615 5.286-1.383 7.602-1.311-.254 1.63-.353 2.679-1.113 4.168-1.186 1.19-1.527 1.425-3.063 2.09" style={{ fill: '#09142a' }} /><path d="M188.23 153.261c4.713-.55 11.07-.061 11.087 6.115.007 2.723-.686 5.76-1.146 8.457a595 595 0 0 0-1.78 11.134l-5.976-.006-.003-2.654c-2.232 1.793-3.693 2.852-6.718 3.129-2.505.228-4.677.09-6.668-1.542-2.796-3.041-1.716-8.772 1.16-11.388 3.569-3.246 9.18-2.945 13.678-2.771.542-3.162.225-4.913-3.51-4.92-3.003-.007-5.653.75-8.477 1.645l.004-5.15c3.141-1.274 4.985-1.706 8.348-2.049" fill="url(#f)" /><path d="M187.567 167.9c1.383-.074 2.278.003 3.65.11-.573 3.807-.896 5.08-4.769 6.371-3.357.233-5.178-1.337-2.984-4.748.837-1.3 2.637-1.585 4.103-1.733" style={{ fill: '#0e1e3f' }} /><path d="M145.452 190.202c1.16-1.179 2.44-2.123 3.754-3.122 1.441 1.11 2.549 2.01 3.879 3.263 6.55-2.423 6.422 1.005 11.811 2.466 1.197.324 6.466.078 8.102.087l15.817.142 55.735.176c2.966-.08 29.042-.271 30.668.288l.09.133c-.966.29-14.216.267-15.78.14-2.14.095-4.934.024-7.138.027l-14.387.02-48.917.071-15.977.008c-1.712-.005-6.97-.216-8.3.09-5.578 1.279-5.289 4.593-11.897 2.174l-3.702 2.975c-1.387-1.023-2.371-1.761-3.665-2.902-7.465 2.491-7.455-2.311-12.691-2.321-8.74-.018-17.607-.041-26.357-.065l-64.957-.083c-1.874.143-16.473.165-16.925-.29l.014.174-.213-.08c.915-.677 8.682-.472 10.23-.48l16-.048 16.022-.009c3.278-.007 6.87-.086 10.128.027l27.18-.072q14.093-.147 28.187-.133c5.439.055 6.245-5.203 13.289-2.656" fill="#e7aa42" /><path d="M41.54 193.769c-1.874.143-16.473.165-16.926-.29l.015.174-.213-.08c.915-.677 8.682-.472 10.23-.48l16-.048 16.022-.009c3.278-.007 6.87-.086 10.128.027-4.339.281-10.799.145-15.25.139a610 610 0 0 0-22.143.208c-.833.016-5.274-.13-5.767.056 1.673.543 6.09-.226 7.904.303m203.01-.555c2.966-.08 29.042-.271 30.668.288l.09.133c-.966.29-14.216.267-15.78.14.85-.432 5.128.016 6.5-.232l-.074-.132c-4.88-.177-10.203.107-15.126-.035-1.69-.048-4.747.091-6.278-.162" fill="#a05d12" /><path d="M155.867 190.579c2.276-.208 4.517 1.527 6.474 2.73-1.741 1.016-3.243 2.028-5.184 2.576-1.42.025-1.996-.152-3.362-.584 1.22-.943 2.451-1.414 3.856-2.002-1.723-.715-2.255-1.039-3.705-2.212.657-.226 1.245-.353 1.92-.508m-14.426-.009c1.275-.1 1.899.09 3.11.442-1.929 1.731-2.79 1.922-5.239 2.366 1.403.088 4.545.482 5.178 1.912l-.231.244c-3.53.832-4.83-.386-7.84-2.23 1.535-.97 3.303-2.211 5.022-2.734m7.715-1.66c.641.276 1.958 1.503 2.534 2.019-.834.427-1.56.917-2.345 1.426-.485-.098-2.154-1.24-2.677-1.574a44 44 0 0 1 2.488-1.87m.023 4.982q1.213.796 2.419 1.605l-2.334 1.953c-.874-.579-1.721-1.247-2.555-1.882.87-.538 1.64-1.087 2.47-1.676" style={{ fill: '#0c1a36' }} /><path d="M145.42 191.687c.608.04 2.062 1.12 2.632 1.516l-2.088 1.418-.35.097c-.55-.273-1.527-1.11-2.05-1.532zm7.143.147c.468.042 1.779 1.116 2.264 1.466-.865.521-1.275.84-2.063 1.48-.745-.437-1.638-1.11-2.357-1.62.605-.437 1.494-.934 2.156-1.326" style={{ fill: '#0c1a36' }} /><path d="M205.97 153.636c1.23-10.476 4.327-12.59 14.946-11.21-.401 1.439-.806 3.773-1.005 5.256-5.975-.66-6.249.384-7.05 5.937l5.163.01c-.206 1.678-.59 3.702-.883 5.393-1.721.023-3.492-.005-5.216-.01-.569 4.663-1.56 9.423-2.262 14.077-.195 1.295-.43 2.987-.746 4.238-.054.401-.147 1.286-.23 1.643-1.229.007-6.017.083-6.895-.061.172-1.827.805-4.983 1.128-6.92a840 840 0 0 0 2.07-12.918l-3.49-.085c.065-1.296.597-3.9.808-5.367 1.203-.022 2.455.007 3.662.017" fill="url(#g)" /><path d="M208.917 177.327c-.054.401-.147 1.286-.23 1.643-1.229.007-6.017.083-6.895-.061.957-.35 4.607-.865 5.59-.446 1.5.64.76-.217 1.535-1.136" fill="#01479b" /><path d="M114.436 172.426c2.57 1.141 7.936 2.906 10.376 1.579 4.077-2.216.797-4.42-1.98-4.948-5.687-1.078-9.182-4.029-6.896-10.049 2.782-7.323 12.778-6.53 18.73-4.263a213 213 0 0 0-1.654 5.027c-2.348-.844-8.185-2.587-10.243-.065-1.049 1.428-.259 2.44 1.12 3.007 3.244 1.333 8.561 1.472 9.456 5.706.782 3.706-1.458 9.169-5.444 10.078-1.515.736-3.318.89-4.984.954-3.832.126-6.589-.401-10.124-1.81.597-1.628 1.133-3.539 1.642-5.216" fill="url(#h)" /><path d="M122.917 179.452c.336-1.068.682-2.585 1.506-3.301 1.184-.276.963.914 1.291 1.68.52.536 1.47.653 2.187.667-1.515.736-3.318.89-4.984.954" fill="#c17914" /><path d="M144.483 15.57c20.801-2.663 40.133 5.164 53.236 21.497 5.66 7.056 8.817 13.801 11.364 22.39l-.098.68c-.665.375-2.073 1.113-2.811.96-.23-.97-.954-3-1.3-3.957A59.8 59.8 0 0 0 189.5 34.07a58.3 58.3 0 0 0-34.149-15.474c-3.592-.338-6.37-.27-9.963-.131l-1.176-.104c.601-.025 1.43.002 1.954-.223.07-1.449.075-2.518-1.588-2.388z" fill="#f6cd6b" /><path d="M230.99 146.373c.132.62-1.033 6.223-1.228 7.232l5.854.02c-.192 1.68-.629 3.768-.992 5.416l-5.774-.068c-.648 3.836-1.35 7.668-1.988 11.508-.72 4.328 2.889 3.332 5.761 2.874q-.362 2.605-.778 5.202c-1.132.289-2.29.605-3.45.706-10.727 1.334-9.228-4.907-7.885-12.39q.703-3.91 1.305-7.834l-3.465-.102c.133-1.693.594-3.581.84-5.321 1.212-.02 2.476.011 3.692.023.22-1.801.649-3.98.958-5.797 2.16-.332 4.872-1.052 7.15-1.47" fill="url(#i)" /><path d="M149.42 153.255c3.467-.492 6.458.053 9.61 1.437-.405 1.493-1.09 4.154-1.646 5.528-3.16-1.405-5.37-1.81-8.915-.952-4.854 1.176-7.28 12.005-2.4 14.144 2.891 1.268 6.448.051 9.304-1.1l-.03 1.43c-.084 1.398-.081 2.677-.08 4.075-6.384 2.278-17.713 3.545-18.972-5.808-.605-4.495.483-10.153 3.259-13.813 2.456-3.242 5.96-4.435 9.87-4.94" fill="url(#j)" /><path d="m142.314 65.118.081.04c.552-.27 1.953-3.057 3.336-3.99.827-.085 4.26 2.176 4.626 3.06-4.177 7.954-4.187 15.769.235 23.648 2.86 4.2 3.936 4.743 8.174 7.248l-.18.17c-.443-.124-3.995-.247-4.386-.113-2.65.908-2.133 2.912-5.2.744l-.052.227c-3.089-1.567-6.455-5.616-7.807-8.804-1.561-1.745-2.332-8.182-2.256-10.665.1-3.26 1.383-8.914 3.43-11.565" fill="url(#k)" /><path d="m141.14 87.348.183-.033c.289.557.914 1.896 1.6 1.954 3.018.256 4.609-.254 7-1.85.301.213.196.113.382.459l.287-.002c2.86 4.2 3.936 4.743 8.174 7.248l-.18.17c-.443-.124-3.995-.247-4.386-.113-2.65.908-2.133 2.912-5.2.744l-.052.227c-3.089-1.567-6.455-5.616-7.807-8.804" fill="#f6cd6b" /><path d="M32.388 169.514c-1.038-4.435 1.058-12.773 2.804-17.025 4.372-10.641 17.542-12.82 27.495-8.165a349 349 0 0 0-1.895 6.523c-2.328-1.139-3.825-1.974-6.478-2.28-10.848-1.257-12.964 7.087-13.93 15.824l-.031.142c-.147.706-.145 1.012-.158 1.727-.042-.229-.035-.31-.16-.507-.846.04-6.777 1.336-7.406 1.807-.12.59-.145 1.64-.241 1.954" fill="url(#l)" /><path d="M108.259 61.656c.683.452 1.331.353 2.093.583.586.177 1.15 1.078 1.627 1.316 1.243.623 3.207.736 4.572.954.024.209.062.406.118.608l.17.054c1.182 11.464 8.22 19.486 20.1 19.685.323 1.096.786 2.342 1.162 3.436-9.003 1.322-19.572-1.617-25.246-9.046a24.07 24.07 0 0 1-4.596-17.59" fill="url(#m)" /><path d="M174.448 153.389c.823-.098 2.148-.135 2.915.202.173.59-.892 5.735-1.072 6.695-5.916-1.131-8.479 1.38-8.95 7.06-.31 3.747-1.453 7.836-1.698 11.64-2.005-.042-5.272.08-7.115-.061q1.906-12.59 3.955-25.154l6.428-.007c-.171 1.146-.224 2.303-.296 3.46 1.597-2.128 3.214-3.36 5.833-3.835" fill="url(#n)" /><path d="M32.388 169.514c.096-.315.121-1.365.24-1.954.63-.471 6.56-1.767 7.408-1.807.124.198.117.278.159.507.013-.715.011-1.021.158-1.727l.03-.142c.1 6.436 1.809 8.937 8.76 8.904 3.292-.017 5.795-.87 8.777-2.118a393 393 0 0 1-.752 6.046c-6.314 3.122-19.97 4.096-23.714-3.578-.468-.96-1.1-3.088-1.066-4.13" fill="#cc8920" /><path d="M119.823 43.406c.84-.7 2.258-1.411 3.276-1.87 9.062-4.084 20.395-3.438 29.42.313 0 1.726.116 8.082-.086 9.477l-.24.193c-.42-.142-.494-.333-.686-.758-3.984-8.812-15.219-10.936-23.456-7.17-2.675 1.224-3.56 2.366-5.645 4.166-1.216.404-1.054 1.166-2.085 1.87-.995.11-3.69-2.016-4.584-2.7.784-.613 3.829-2.94 4.086-3.521" fill="#f6cd6b" /><path d="M142.314 65.118c1.984-4.033 7.422-8.506 11.57-10.17 9.199-3.693 18.427-2.726 27.357.9-.033 1.453-.095 8.514-.336 9.526l-.359.07c-.36-.273-1.01-2.101-1.508-2.919a12.8 12.8 0 0 0-3.534-3.799c-3.684-2.62-8.834-3.5-13.237-2.722-5.753 1.017-8.685 3.655-11.91 8.223-.366-.883-3.8-3.144-4.626-3.06-1.383.934-2.784 3.721-3.336 3.992z" fill="url(#o)" /><path d="M100.676 126.704c7.1-.027 14.966.397 22.077.673a2443 2443 0 0 1 50.838 2.593c6.966.385 14.912 1.027 21.784 1.153.864.01 3.31.021 3.99.349-2.676.133-5.86.024-8.57.016-1.701-.005-4.659.074-6.261-.086-2.492.095-5.811-.002-8.35-.035l-15.294-.293c-20.413-.464-40.096-1.397-60.391-3.93z" fill="url(#p)" /><path d="M195.375 131.123c.864.01 3.31.021 3.99.349-2.676.133-5.86.024-8.57.016-1.701-.005-4.659.074-6.261-.086 1.696-.166 10.03.172 10.841-.28" fill="#cc8920" /><path d="M96.95 97.447c-9.347-20.672-5.924-43.358 8.722-60.665a60.7 60.7 0 0 1 30.373-19.49c2.633-.74 5.71-1.496 8.438-1.722l.095.18c1.663-.13 1.657.94 1.588 2.388-.525.225-1.353.198-1.954.223l1.176.104c-3.79.521-6.256.737-10.03 1.71a58.74 58.74 0 0 0-31.648 21.168C95.164 52.632 90.69 67.74 92.77 81.806c.613 4.138 2.437 11.523 4.356 15.264z" fill="#e7aa42" /><path d="M108.259 61.656c1.247-7.146 5.02-14.595 11.564-18.25-.257.58-3.302 2.908-4.086 3.52.895.685 3.589 2.812 4.584 2.7 1.032-.703.87-1.465 2.085-1.869-4.13 5.034-6.16 10.896-5.566 17.414l-.17-.054a4 4 0 0 1-.119-.608c-1.365-.218-3.329-.33-4.572-.954-.476-.238-1.041-1.139-1.627-1.316-.762-.23-1.41-.131-2.093-.583" fill="url(#q)" /><path d="M158.766 95.124c5.4 2.06 10.776 2.5 16.18.048a22 22 0 0 0 4.765-3.006c.553-.454 1.471-1.5 1.938-1.71 1.27 1.081-2.603 5.672-3.537 6.343-4.371 3.139-11.444 3.706-16.588 3.426-3.523-.192-10.35-1.878-12.576-4.073l.052-.227c3.067 2.168 2.55.164 5.2-.744.39-.134 3.943-.011 4.385.113z" fill="url(#r)" /><path d="M209.083 59.457c4.162 16.456 1.52 32.394-7.197 46.957a89 89 0 0 1-2.389 3.772l-.142-.383q.65-.976 1.24-1.99a60.14 60.14 0 0 0 7.583-37.116c-.45-3.597-1.078-6.153-2.004-9.6.738.153 2.146-.585 2.81-.96z" fill="#e7aa42" /><path d="M192.328 143.483c1.793-3.058 4.509-6.26 7.565-8.048 8.837-5.174 20.251-1.97 25.31 6.772l-.443.41q-.379-.408-.775-.8a21.64 21.64 0 0 0-15.466-6.193c-6.826.069-11.637 3.17-16.19 7.859" fill="url(#s)" /><path d="M76.392 123.97c4.476-.4 11.71.108 15.25 3.014-1.188-.018-2.421-.002-3.612 0 1.668 1.413 4.168 3.934 5.653 5.529-3.156-2.233-4.968-3.501-8.39-5.19-5.57-2.348-13.45-1.68-19.475-1.807-1.343-.028-4.066.104-5.252-.112.774-.258 4.333-.453 5.296-.552 3.499-.36 7.023-.633 10.53-.883m145.037 10.646c6.584.524 9.55 1.264 15.57 3.806l-.282.473c-2.723-.281-4.312.2-6.905.922-1.704.475-2.889-.464-4.006-1.576a32 32 0 0 0-4.377-3.624" fill="#cc8920" /><path d="M159.009 120.26q.432-.03.87-.038c3.983-.051 6.246 2.2 8.952 4.854l-2.567-.547c-3.167-.648-6.763-.537-10.01-.535.212-1.277.357-1.82.99-2.94.74-.442.946-.517 1.765-.793" fill="#01479b" /><path d="M54.963 125.156c2.66 1.593 3.767 1.214 6.609 1.937-2.425.485-3.585.712-5.757 1.927-1.319 1.001-2.487 2.224-3.67 3.39 1.58-2.562 2.785-4.18 2.818-7.254" fill="#a05d12" /><path d="M93.785 129.841c1.397-.26 4.63.027 6.009.444-.898.081-5.543.057-6.01-.444" fill="#cc8920" /><path d="M97.127 97.07a89 89 0 0 1 1.724 3.488l-.296.1c-.585-1.1-1.106-2.066-1.605-3.21zm99.96 15.943a103 103 0 0 1 2.268-3.21l.142.383a61 61 0 0 1-2.146 2.931z" fill="#a05d12" /><path d="M98.85 100.558c.578.81 1.244 2.145 1.71 3.059-.914-.924-1.41-1.811-2.005-2.96z" fill="#4a3821" /><path d="m224.76 142.617.444-.41c.546.981.927 1.688 1.378 2.731a103 103 0 0 1-1.822-2.32" fill="#c17914" /><path d="M97.099 126.568c1.17-.007 2.404.077 3.577.136l-.177.44a45 45 0 0 1-3.4-.576" fill="#e7aa42" /><path d="M104.819 123.949c.612.02 1.305-.027 1.831.232-.333.361-1.609.249-2.024.053.102-.085.121-.158.193-.285" fill="#0e2849" /><path d="M236.999 138.42c.662.304 1.32.595 1.961.94l-2.243-.466z" fill="#c17914" /><path d="M197.351 113.117c-.337.473-.753 1.175-1.283 1.31.107-.52.637-.99 1.02-1.414z" fill="#4a3821" /></g></svg>
              </div>

              <p className="text-[#7aa8cc] text-sm mb-5 italic">— आपकी हर यात्रा, आरामदायक और सुरक्षित —</p>

              <div className="mt-5 mb-7">
                <p className="text-[#c8d8e8] text-base leading-relaxed max-w-[440px]">
                  Experience seamless travel with Cabscraft — your trusted partner for{' '}
                  <strong className="text-gold-light">outstation rides, city travel, and custom tour packages</strong> from Indore. Comfortable cabs, professional drivers, doorstep pickup.
                </p>
              </div>

              <div className="flex gap-3 flex-wrap items-center mb-9">
                {['Comfort', 'Safety', 'Trust'].map((val, i) => (
                  <span key={val} className="flex items-center gap-1.5 text-[#c8d8e8] text-xs font-medium">
                    {i > 0 && <span className="text-gold/50">•</span>}
                    <CheckIcon />
                    {val}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — Car & Badge */}
            <div className="hidden md:flex relative justify-center items-center">
              {/* Price Badge */}
              <div className="absolute -top-2.5 right-2.5 z-10 bg-gradient-to-br from-navy-light to-[#0d3060] border-2 border-gold/50 rounded-lg p-3.5 text-center shadow-[0_8px_30px_rgba(0,0,0,0.5)] animate-pulse">
                <div className="flex gap-0.75 justify-center mb-1">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
                <p className="text-[#a0c4e8] text-[10px] font-semibold tracking-wider mb-0.5 font-rajdhani">
                  STARTING FROM
                </p>
                <p className="font-rajdhani text-32px font-bold m-0 bg-gradient-to-br from-gold-light to-gold bg-clip-text text-transparent leading-tight">
                  ₹1500/-
                </p>
                <p className="text-[#a0c4e8] text-[9px] tracking-wider mt-0.5 font-rajdhani">
                  से शुरू
                </p>
              </div>

              {/* Car Image */}
              <div className="w-full relative animate-[bounce_4s_ease-in-out_infinite]">
                <img
                  src={CAR_IMG}
                  alt="Comfortable cab for Darshan trips"
                  className="w-full max-w-[520px] rounded-xl object-cover h-[340px] drop-shadow-[0_20px_50px_rgba(0,0,0,0.7)] [mask-image:linear-gradient(to_right,transparent_0%,black_15%,black_85%,transparent_100%)]"
                />
              </div>

              {/* Floating "Book Your Ride" Button */}
              <a
                href="tel:+918839942363"
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-20 bg-gradient-to-r from-gold-light via-gold to-gold-dark text-navy px-8 py-3.5 rounded-full font-bold font-rajdhani tracking-wider inline-flex items-center gap-3 shadow-[0_10px_35px_rgba(222,159,48,0.4)] border-2 border-white/20 transition-all duration-200 hover:scale-105 hover:shadow-[0_14px_45px_rgba(222,159,48,0.55)] whitespace-nowrap"
              >
                <PhoneIcon />
                <span className="flex flex-col text-left leading-tight">
                  <span className="text-base font-extrabold tracking-widest">BOOK YOUR RIDE</span>
                  <span className="text-xs font-bold opacity-90">+91-88399-42363</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── ROUTES ── */}
      <section id="routes" className="py-25 px-[5vw] pb-20 bg-navy-mid relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-14">
            <p className="text-gold text-xs font-semibold tracking-widest mb-2.5 font-rajdhani">
              POPULAR ROUTES
            </p>
            <h2 className="font-rajdhani text-[clamp(32px,5vw,52px)] font-bold mb-4">
              INDORE TO <span className="text-gold-light">SACRED DESTINATIONS</span>
            </h2>
            <Divider className="max-w-sm mx-auto" />
          </div>

          {/* Tab Switcher */}
          <div className="flex justify-center mb-10 bg-navy/80 rounded-lg p-1 border border-gold/15 w-fit mx-auto">
            {(['ujjain', 'omkareshwar'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-7 py-2.5 rounded-md border-0 cursor-pointer font-rajdhani font-bold text-sm tracking-wider transition-all duration-250 ${activeTab === tab
                  ? 'bg-gradient-to-br from-gold-light to-gold text-navy'
                  : 'bg-transparent text-[#7aa8cc]'
                  }`}
              >
                {tab === 'ujjain' ? '🕉 UJJAIN' : '🌊 OMKARESHWAR'}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {[
              {
                id: 'ujjain',
                img: UJJAIN_IMG,
                from: 'INDORE',
                to: 'UJJAIN',
                title: 'MAHAKAL DARSHAN',
                subtitle: 'महाकालेश्वर ज्योतिर्लिंग',
                type: 'Round Trip',
                distance: '~56 km',
                duration: '~1.5 hrs',
                price: '₹1500',
                highlights: ['Mahakaleshwar Temple', 'Kal Bhairav Temple', 'Ram Ghat Aarti'],
              },
              {
                id: 'omkareshwar',
                img: OMKARESHWAR_IMG,
                from: 'INDORE',
                to: 'OMKARESHWAR',
                title: 'OMKARESHWAR DARSHAN',
                subtitle: 'ओंकारेश्वर ज्योतिर्लिंग',
                type: 'Round Trip',
                distance: '~78 km',
                duration: '~2 hrs',
                price: '₹2000',
                highlights: ['Omkareshwar Temple', 'Narmada Ghat', 'Mamleshwar Temple'],
              },
            ].map((route) => (
              <div
                key={route.id}
                className={`bg-gradient-to-br from-navy-light/80 to-navy/90 rounded-xl overflow-hidden transition-all duration-300 ${activeTab === route.id
                  ? 'border border-gold/40 scale-[1.02] shadow-[0_16px_48px_rgba(0,0,0,0.5)]'
                  : 'border border-gold/15 scale-100 shadow-[0_8px_32px_rgba(0,0,0,0.3)]'
                  }`}
              >
                <div className="relative h-[200px] overflow-hidden group">
                  <img
                    src={route.img}
                    alt={route.title}
                    className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 to-transparent" />
                  <div className="absolute bottom-3.5 left-3.5 flex items-center gap-2">
                    <span className="text-gold-light font-rajdhani font-bold text-base">{route.from}</span>
                    <span className="text-gold text-xs">━━▶</span>
                    <span className="text-white font-rajdhani font-bold text-base">{route.to}</span>
                  </div>
                  <div className="absolute top-3.5 right-3.5 bg-gold/15 border border-gold/35 rounded px-2.5 py-0.75 text-gold-light text-xs font-semibold font-rajdhani tracking-wider">
                    ROUND TRIP
                  </div>
                </div>

                <div className="p-5.5">
                  <h3 className="font-rajdhani font-bold text-xl mb-0.5 text-white">{route.title}</h3>
                  <p className="text-gold text-xs italic mb-3.5">{route.subtitle}</p>

                  <div className="flex gap-4 mb-4">
                    {[
                      ['📍', route.distance],
                      ['⏱', route.duration],
                    ].map(([icon, val]) => (
                      <div key={val} className="flex items-center gap-1.25 text-[#a0c4e8] text-xs">
                        <span>{icon}</span>
                        <span>{val}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mb-4.5 space-y-1.25">
                    {route.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2">
                        <CheckIcon />
                        <span className="text-[#c8d8e8] text-xs">{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center pt-2">
                    <div>
                      <span className="text-[#7aa8cc] text-[11px]">Starting from</span>
                      <div className="font-rajdhani font-bold text-26px text-gold-light">
                        {route.price}
                      </div>
                    </div>
                    <a
                      href="tel:8839942363"
                      className="bg-gradient-to-br from-gold-light to-gold-dark text-navy px-5 py-2.5 rounded-md font-bold text-xs font-rajdhani tracking-wider transition-opacity duration-200 hover:opacity-85"
                    >
                      BOOK NOW
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 text-gold text-2xl opacity-60">🔱</div>
        </div>
      </section>

      {/* ── PACKAGE INCLUDES ── */}
      <section id="packages" className="py-[90px] px-[5vw] bg-navy relative">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Left Column */}
            <div>
              <p className="text-gold text-xs font-semibold tracking-widest mb-2.5 font-rajdhani">
                WHAT YOU GET
              </p>
              <h2 className="font-rajdhani text-[clamp(28px,4vw,44px)] font-bold mb-5">
                PACKAGE <span className="text-gold-light">INCLUDES</span>
              </h2>
              <Divider className="mb-8" />
              <p className="text-[#a0c4e8] text-sm leading-relaxed mb-8 max-w-[420px]">
                Every booking comes fully loaded — no hidden charges, no surprises. We take care of everything so you can focus on your divine journey.
              </p>

              <div className="flex flex-col gap-4.5">
                {[
                  ['🏠', 'Doorstep Pickup & Drop', 'We come to your location — no extra charges'],
                  ['💰', 'Toll & Parking Included', 'All toll, parking & highway fees covered'],
                  ['👨‍✈️', 'Professional Driver', 'Experienced, verified, and courteous driver'],
                  ['🚗', 'Clean & Comfortable Cab', 'Well-maintained, sanitized AC vehicles'],
                  ['🛡️', 'Safe & Secure Journey', 'GPS tracked, insured rides for peace of mind'],
                ].map(([icon, title, desc]) => (
                  <div
                    key={title}
                    className="flex items-start gap-4 p-4 rounded-lg bg-navy-light/20 border border-gold/10 transition-all duration-200 hover:bg-gold/10 hover:border-gold/30 cursor-default"
                  >
                    <span className="text-22px leading-tight shrink-0">{icon}</span>
                    <div>
                      <div className="font-rajdhani font-bold text-base text-white mb-0.5">{title}</div>
                      <div className="text-[#7aa8cc] text-xs">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column — Trust Badge & Specs */}
            <div className="flex flex-col items-center gap-7">
              <div className="bg-gradient-to-br from-navy-light to-[#0a2a55] border-2 border-gold/35 rounded-2xl p-12 text-center relative shadow-[0_24px_64px_rgba(0,0,0,0.5)] max-w-[320px] w-full">
                <div className="mb-4 flex justify-center">
                  <ShieldIcon />
                </div>
                <div className="flex gap-0.75 justify-center mb-3">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
                <h3 className="font-rajdhani font-bold text-28px m-0 text-white tracking-wide">COMFORT</h3>
                <h3 className="font-rajdhani font-bold text-28px m-0 text-gold-light tracking-wide">SAFETY</h3>
                <h3 className="font-rajdhani font-bold text-28px mb-4 text-white tracking-wide">TRUST</h3>
                <p className="text-[#7aa8cc] text-xs italic tracking-wider m-0 leading-normal">
                  YOUR SAFETY,<br />OUR RESPONSIBILITY
                </p>

                {/* Corner Accents */}
                <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-gold/40" />
                <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-gold/40" />
                <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-gold/40" />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-gold/40" />
              </div>

              {/* Feature Cards Grid */}
              <div className="grid grid-cols-2 gap-4 w-full max-w-[320px]">
                {[
                  [<CarSeatIcon key="1" />, 'Spacious Vehicles', 'For a comfortable family journey'],
                  [<LuggageIcon key="2" />, 'Luggage Space', 'Ample space for your bags'],
                  [<UserIcon key="3" />, 'Trained Driver', 'Professional & courteous'],
                  [<ShieldIcon key="4" />, 'GPS Tracked', 'Real-time tracking enabled'],
                ].map(([icon, title, desc], i) => (
                  <div key={i} className="bg-navy-light/25 border border-gold/15 rounded-lg p-3.5 text-center">
                    <div className="mb-2 flex justify-center">{icon}</div>
                    <div className="font-rajdhani font-bold text-xs text-white mb-0.75">{title as string}</div>
                    <div className="text-[#7aa8cc] text-[11px] leading-tight">{desc as string}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FLEET ── */}
      <section id="fleet" className="py-20 px-[5vw] bg-navy-mid">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-13">
            <p className="text-gold text-xs font-semibold tracking-widest mb-2.5 font-rajdhani">
              OUR FLEET
            </p>
            <h2 className="font-rajdhani text-[clamp(28px,4vw,44px)] font-bold mb-4">
              CHOOSE YOUR <span className="text-gold-light">VEHICLE</span>
            </h2>
            <Divider className="max-w-xs mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { name: 'Honda Amaze', type: 'Sedan', seats: 4, ac: true, price: '₹1500', tag: 'POPULAR', img: CAR_IMG },
              { name: 'Toyota Innova', type: 'SUV / MPV', seats: 7, ac: true, price: '₹2200', tag: 'FAMILY PICK', img: CAR_IMG },
            ].map((car, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-navy-light/80 to-navy/90 border border-gold/20 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
              >
                <div className="relative h-[180px] overflow-hidden bg-navy-mid">
                  <img src={car.img} alt={car.name} className="w-full h-full object-cover opacity-70" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                  <div className="absolute top-3.5 left-3.5 bg-gradient-to-br from-gold-light to-gold text-navy rounded px-2.5 py-0.75 text-xs font-bold font-rajdhani tracking-wider">
                    {car.tag}
                  </div>
                </div>

                <div className="p-5.5">
                  <h3 className="font-rajdhani font-bold text-22px mb-1">{car.name}</h3>
                  <p className="text-gold text-xs mb-3.5">{car.type}</p>

                  <div className="flex gap-5 mb-4.5">
                    {[
                      ['👥', `${car.seats} Seats`],
                      ['❄️', 'AC'],
                      ['✅', 'GPS Tracked'],
                    ].map(([ic, lb]) => (
                      <span key={lb} className="text-[#a0c4e8] text-xs flex items-center gap-1">
                        {ic} {lb}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-[#7aa8cc] text-[11px]">From</span>
                      <div className="font-rajdhani font-bold text-24px text-gold-light">{car.price}</div>
                    </div>
                    <a
                      href="tel:8839942363"
                      className="border border-gold/35 text-gold-light px-4.5 py-2 rounded-md font-bold text-xs font-rajdhani transition-all duration-200 hover:bg-gold/10 hover:border-gold"
                    >
                      SELECT
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-20 px-[5vw] bg-navy">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold text-xs font-semibold tracking-widest mb-2.5 font-rajdhani">
              GET IN TOUCH
            </p>
            <h2 className="font-rajdhani text-[clamp(28px,4vw,44px)] font-bold mb-4">
              CONTACT <span className="text-gold-light">US</span>
            </h2>
            <Divider className="max-w-xs mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[800px] mx-auto">
            {[
              { icon: <PhoneIcon />, label: 'Call Us', value: '8839942363', href: 'tel:8839942363', sub: 'Primary' },
              { icon: <PhoneIcon />, label: 'Customer Care', value: '8872632363', href: 'tel:8872632363', sub: 'Support' },
              { icon: <MailIcon />, label: 'Email', value: 'cabscraft1@gmail.com', href: 'mailto:cabscraft1@gmail.com', sub: 'Write to us' },
              { icon: <GlobeIcon />, label: 'Website', value: 'www.cabscraft.com', href: 'https://www.cabscraft.com', sub: 'Visit us' },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="block text-center bg-navy-light/25 border border-gold/15 rounded-lg p-5.5 transition-all duration-250 hover:bg-gold/10 hover:border-gold/35 hover:-translate-y-0.75"
              >
                <div className="text-gold flex justify-center mb-2.5">{item.icon}</div>
                <div className="text-[#7aa8cc] text-[11px] tracking-widest mb-1 font-rajdhani">
                  {item.label}
                </div>
                <div className="text-white font-semibold text-sm break-all">{item.value}</div>
                <div className="text-gold text-xs mt-1">{item.sub}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-gradient-to-b from-navy-mid to-[#010810] border-t border-gold/15 pt-10 pb-6 px-[5vw]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex justify-between items-center flex-wrap gap-5 mb-8">
            <div className="flex items-center gap-3">
              <img src="/images/logo.svg" alt="Cabscraft" className="h-12" />
              <div>
                <div className="font-rajdhani font-bold text-xl text-white">CABSCRAFT</div>
                <div className="text-gold text-xs tracking-wider italic">Your Journey, Our Priority</div>
              </div>
            </div>

            <div className="flex gap-7">
              {['Home', 'Routes', 'Packages', 'Fleet', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-[#7aa8cc] text-xs transition-colors duration-200 hover:text-gold-light"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <Divider />

          <div className="flex justify-between items-center flex-wrap gap-3 mt-5 text-xs text-[#4a6a8a]">
            <p className="m-0">© 2024 Cabscraft. All rights reserved. | Comfort • Safety • Trust</p>
            <p className="m-0 italic">Designed with ❤️ for sacred journeys</p>
          </div>
        </div>
      </footer>
    </div>
  )
}