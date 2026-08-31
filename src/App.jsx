import { useEffect } from 'react'
import { Link, Route, Routes } from 'react-router-dom'

function useChatWidget() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://widgets.leadconnectorhq.com/loader.js'
    script.setAttribute(
      'data-resources-url',
      'https://widgets.leadconnectorhq.com/chat-widget/loader.js',
    )
    script.setAttribute('data-widget-id', '6a8b4666f707f5549134ddb5')
    script.setAttribute('data-source', 'WEB_USER')
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])
}

function Layout({ children }) {
  useChatWidget()

  return (
    <div className="page-wrap">
      {children}
      <footer>
        <div>DB Guitar Setup &middot; Middle Tennessee</div>
        <div>2104 Hollandale Circle, Columbia, TN 38401</div>
        <div>
          <Link to="/privacy-policy">Privacy Policy</Link> &middot;{' '}
          <Link to="/terms">Terms of Service</Link> &middot;{' '}
          <a href="mailto:dbguitarsetup@gmail.com">Email</a> &middot;{' '}
          <a href="tel:+19512182663">Call</a>
        </div>
      </footer>
    </div>
  )
}

function HomePage() {
  return (
    <Layout>
      <header className="hero">
        <p className="eyebrow">DB Guitar Setup</p>
        <h1>Guitar Setup</h1>
        <p className="tagline">Play Better. Sound Better.</p>
        <p className="intro">
          Thoughtful acoustic, electric, and bass guitar setups in Middle
          Tennessee.
        </p>
        <div className="hero-actions">
          <a
            className="button"
            href="sms:+19512182663?body=Hi%20DB%20Guitar%20Setup%2C%20I%27d%20like%20to%20schedule%20a%20setup."
          >
            Text to book a setup
          </a>
          <a className="button secondary" href="mailto:dbguitarsetup@gmail.com">
            Email us
          </a>
        </div>
      </header>

      <main>
        <section className="section">
          <h2>One complete setup. No guesswork.</h2>
          <p>
            Drew and Bradley provide thoughtful setups that make your instrument
            easier to play, cleaner, and more enjoyable.
          </p>
          <p className="price">Full setup: $70</p>
          <p>Acoustic, electric, and bass guitars. Parts and strings are extra.</p>
        </section>

        <section className="section soft">
          <h2>Every setup covers the details.</h2>
          <ul>
            <li>Fret prep and polish</li>
            <li>Fretboard rehydration</li>
            <li>String change</li>
            <li>Truss rod and action adjustment</li>
            <li>Intonation check and adjustment</li>
            <li>Hardware check and basic cleaning</li>
          </ul>
        </section>

        <section className="section gallery">
          <h2>Recent work</h2>
          <div className="grid2">
            <figure>
              <img src="/images/work-before.jpg" alt="Guitar before service" />
              <figcaption>Before</figcaption>
            </figure>
            <figure>
              <img src="/images/work-after.jpg" alt="Guitar after service" />
              <figcaption>After</figcaption>
            </figure>
          </div>
        </section>

        <section className="section team">
          <h2>The hands behind the setup.</h2>
          <div className="grid2">
            <figure>
              <img src="/images/drew.jpg" alt="Drew of DB Guitar Setup" />
              <figcaption>Drew</figcaption>
            </figure>
            <figure>
              <img src="/images/bradley.jpg" alt="Bradley of DB Guitar Setup" />
              <figcaption>Bradley</figcaption>
            </figure>
          </div>
        </section>
      </main>
    </Layout>
  )
}

function LegalPage({ title, updated, children }) {
  return (
    <Layout>
      <main>
        <section className="section legal">
          <h1>{title}</h1>
          <p className="small">Last updated: {updated}</p>
          {children}
          <p>
            <Link to="/">Back to homepage</Link>
          </p>
        </section>
      </main>
    </Layout>
  )
}

function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="August 23, 2026">
      <p>
        DB Guitar Setup (“we,” “our,” or “us”) values your privacy. This policy
        explains how we collect, use, and protect information.
      </p>
      <h2>Information We Collect</h2>
      <p>
        We may collect information you provide directly, including your name,
        phone number, email address, guitar details, and messages.
      </p>
      <h2>How We Use Information</h2>
      <p>
        We use your information to respond to inquiries, schedule service, and
        provide support. We do not sell your information.
      </p>
      <h2>Text Messaging</h2>
      <p>
        Message frequency varies. Reply HELP for help or STOP to opt out.
        Message and data rates may apply.
      </p>
      <h2>Contact</h2>
      <p>
        DB Guitar Setup
        <br />
        2104 Hollandale Circle
        <br />
        Columbia, TN 38401
        <br />
        dbguitarsetup@gmail.com
      </p>
    </LegalPage>
  )
}

function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="August 23, 2026">
      <p>
        These Terms govern your use of DB Guitar Setup’s website, services, and
        text communications.
      </p>
      <h2>Services</h2>
      <p>
        We provide guitar setup and related maintenance services. Pricing may
        change and does not include major repairs or parts unless quoted.
      </p>
      <h2>Appointments</h2>
      <p>
        Turnaround estimates may vary based on work volume, condition, or parts
        availability.
      </p>
      <h2>Instrument Care</h2>
      <p>
        We take reasonable care with every instrument and are not responsible
        for pre-existing issues or latent defects.
      </p>
      <h2>Text Messaging</h2>
      <p>
        Message frequency varies. Reply STOP to opt out and HELP for help.
        Message and data rates may apply.
      </p>
      <h2>Contact</h2>
      <p>
        DB Guitar Setup
        <br />
        2104 Hollandale Circle
        <br />
        Columbia, TN 38401
        <br />
        dbguitarsetup@gmail.com
      </p>
    </LegalPage>
  )
}

function NotFoundPage() {
  return (
    <Layout>
      <main>
        <section className="section legal">
          <h1>Page not found</h1>
          <p>
            Sorry, we couldn't find that page. <Link to="/">Return home</Link>.
          </p>
        </section>
      </main>
    </Layout>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacy-policy" element={<PrivacyPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
