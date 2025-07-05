import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-[#f3f2e9] font-serif text-[#1a1a1a]">
      <header className="bg-[#013220] text-gold flex items-center justify-between px-10 py-6">
        <h1 className="text-xl font-bold tracking-wide">SOCIIETY</h1>
        <nav className="space-x-6 text-gold font-sans font-semibold">
          <a href="#mission">Mission</a>
          <a href="#vision">Vision</a>
          <a href="#founder">Founder</a>
          <Link href="/pledge" className="underline hover:text-yellow-400">Join</Link>
        </nav>
      </header>

      <section id="mission" className="max-w-4xl mx-auto py-24 px-6 text-center">
        <h2 className="text-5xl text-[#4b0082] font-black mb-6 uppercase tracking-wide">Our Mission</h2>
        <p className="text-xl font-sans leading-relaxed">
          SOCIIETY exists to preserve legacy through privacy, exclusivity, and intention. It was built for those who move in silence but change the culture from within. We are not here to be seen — we are here to watch.
        </p>
      </section>

      <section id="vision" className="max-w-4xl mx-auto py-24 px-6 text-center">
        <h2 className="text-5xl text-[#4b0082] font-black mb-6 uppercase tracking-wide">Our Vision</h2>
        <p className="text-xl font-sans leading-relaxed">
          We envision a private society where greatness is verified through encrypted access, rare encounters, and meaningful contribution. Everything we do honors tradition, yet is tailored for tomorrow.
        </p>
      </section>

      <section id="founder" className="max-w-4xl mx-auto py-24 px-6 text-center">
        <h2 className="text-5xl text-[#4b0082] font-black mb-6 uppercase tracking-wide">From the Founder</h2>
        <p className="text-xl font-sans leading-relaxed">
          SOCIIETY was born from years of solo travels, quiet observation, and private ambition. In the shadows of crowded rooms and on the fringes of fashion weeks, I found truth: not everyone belongs — and that’s the point.
        </p>
        <p className="text-xl font-sans leading-relaxed mt-4">
          This is for those who never needed to be noticed to be remembered. Welcome to the inner world.
        </p>
      </section>

      <section className="bg-[#4b0082] text-white text-center py-24 px-6">
        <h2 className="text-4xl font-bold mb-4">Your Invitation to Legacy</h2>
        <p className="text-lg font-sans max-w-2xl mx-auto">
          SOCIIETY is not about joining — it's about being chosen. But even the chosen must apply. Begin your journey by pledging. Your legacy starts when we see you.
        </p>
        <Link href="/pledge" className="inline-block mt-8 px-10 py-4 bg-yellow-400 text-black text-lg font-bold rounded-xl shadow-lg hover:bg-yellow-300">
          Join the Waitlist
        </Link>
      </section>

      <footer className="bg-black text-gray-400 text-center py-10 text-sm">
        © SOCIIETY 2025 — Designed for Legacy | founders@sociietyworld.com
      </footer>
    </div>
  )
}
