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

const smsLink =
  "sms:+19512182663?body=Hi%20DB%20Guitar%20Setup%2C%20I'd%20like%20to%20schedule%20a%20setup."

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
        <p className="brand-mark" aria-hidden="true">DB</p>
        <h1>Guitar Setup</h1>
        <p className="tagline">Play Better. Sound Better.</p>
        <p className="intro">
          Drew and Bradley provide thoughtful setups that make your instrument
          easier to play, cleaner, and more enjoyable.
        </p>
        <div className="hero-actions">
          <a
            className="button"
            href={smsLink}
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
            We set up acoustic guitars, electric guitars, and basses with the
            care they need to feel right in your hands.
          </p>
          <div className="service-card">
            <div>
              <h3>Full guitar setup</h3>
              <p>Acoustic, electric, and bass guitars.</p>
            </div>
            <p className="price">$70</p>
          </div>
          <p className="small">Parts and strings are additional unless noted.</p>
        </section>

        <section className="section soft">
          <h2>Every setup covers the details.</h2>
          <ul>
            <li>Fret prep and fret polish</li>
            <li>Fretboard rehydration</li>
            <li>Body polish</li>
            <li>String change</li>
            <li>Truss rod adjustment</li>
            <li>Neck relief and action adjustment</li>
            <li>Intonation check and adjustment</li>
            <li>Hardware check and basic cleaning</li>
            <li>Wipe down</li>
          </ul>
        </section>

        <section className="section soft">
          <h2>Simple from drop-off to pick-up.</h2>
          <div className="grid2 details-grid">
            <div>
              <h3>Get in touch</h3>
              <p>Text or email us with your guitar and what you would like improved.</p>
            </div>
            <div>
              <h3>Drop off and play</h3>
              <p>We'll arrange a drop-off and confirm the turnaround before work begins. Typical turnaround is 1-3 days.</p>
            </div>
          </div>
        </section>

        <section className="section team">
          <h2>The hands behind the setup.</h2>
          <p>Meet the people caring for your instrument from drop-off to pick-up.</p>
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

        <section className="section feature">
          <h2>Our flagship guitar.</h2>
          <div className="grid2">
            <img src="/images/flagship-guitar.jpg" alt="2012 Gibson Les Paul Studio Satin with custom pyrography artwork" />
            <div>
              <h3>2012 Gibson Les Paul Studio Satin</h3>
              <p>Commissioned by Raye Smith of Raye Ann Pyrography. We disassembled and sanded the guitar for her artwork, then reassembled it for a full setup.</p>
              <p><a href="https://www.instagram.com/rayeannpyrography/" target="_blank" rel="noreferrer">Follow Raye on Instagram: @rayeannpyrography</a></p>
            </div>
          </div>
        </section>

        <section className="section gallery">
          <h2>See the difference a careful setup makes.</h2>
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

        <section className="section soft">
          <h2>Ready to play better?</h2>
          <p>Text us to schedule your guitar setup. We'll help get your guitar playing its best in no time.</p>
          <a className="button" href={smsLink}>Text to book a setup</a>
          <p className="small">By texting our number, you consent to receive setup-related SMS messages. Message frequency varies. Reply HELP for help or STOP to opt out. Message and data rates may apply.</p>
        </section>

        <section className="section">
          <h2>A thank-you to the people who taught us.</h2>
          <p>We learned everything we know from the generosity, instruction, and example of Setup2Worship.</p>
          <h3>Steve and Joanne Cocking</h3>
          <p><a href="https://setup2worship.com/" target="_blank" rel="noreferrer">Visit Setup2Worship.com</a></p>
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
        DB Guitar Setup (“we,” “our,” or “us”), a sole proprietor operating as
        DB Guitar Setup, values your privacy. This policy explains how we collect,
        use, and protect information when you contact us, request a setup, or send
        a text message.
      </p>
      <h2>Information We Collect</h2>
      <p>
        We may collect information you provide directly, including your name,
        phone number, email address, guitar details, and messages you send us through
        text, email, or our website.
      </p>
      <h2>How We Use Information</h2>
      <p>
        We use your information to respond to inquiries, schedule and complete guitar
        setups, communicate with you about your service, and provide support. We do
        not sell your information.
      </p>
      <h2>Text Messaging</h2>
      <p>
        By opting in to text messages, you confirm that you are the owner or authorized
        user of the phone number and agree to receive setup-related SMS communications.
        Message frequency varies. Reply HELP for help or STOP to opt out at any time.
        Message and data rates may apply.
      </p>
      <h2>Data Sharing</h2>
      <p>We may share information with trusted service providers only when needed to operate our business and communicate with you. We do not buy, sell, rent, or trade personal information or lead lists.</p>
      <h2>Your Rights</h2>
      <p>You may contact us to request access to, correction of, or deletion of your personal information, or to opt out of communications.</p>
      <h2>Contact</h2>
      <p>
        DB Guitar Setup
        <br />
        2104 Hollandale Circle
        <br />
        Columbia, TN 38401
        <br />
        dbguitarsetup@gmail.com
        <br />
        +1 (951) 218-2663
      </p>
    </LegalPage>
  )
}

function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="August 23, 2026">
      <p>
        These Terms of Service govern your use of DB Guitar Setup’s website,
        services, and text communications for the sole-proprietor business operating
        as DB Guitar Setup.
      </p>
      <h2>Services</h2>
      <p>
        We provide guitar setup and related maintenance services. Pricing is subject
        to change and does not include major repairs or parts unless specifically quoted.
      </p>
      <h2>Appointments</h2>
      <p>
        Customers are responsible for communicating their needs clearly and providing
        accurate instrument information. Turnaround times are estimates and may vary
        based on work volume, item condition, or parts availability.
      </p>
      <h2>Instrument Care</h2>
      <p>
        We take reasonable care with every instrument entrusted to us and will be
        responsible for damage directly caused by our work. We are not responsible for
        pre-existing conditions, latent defects, or damage resulting from normal risks
        inherent in guitar setup and adjustment.
      </p>
      <h2>Text Messaging</h2>
      <p>
        By texting our number or submitting your phone number for a setup, you confirm
        that you are the owner or authorized user of the number and consent to receive
        setup-related text messages and scheduling updates. Message frequency varies.
        Reply STOP to opt out at any time or HELP for help. Message and data rates may apply.
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
        <br />
        +1 (951) 218-2663
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

function VerificationPage() {
  return (
    <Layout>
      <main>
        <section className="section legal">
          <p className="eyebrow">Text preferences</p>
          <h1>Stay in tune with us.</h1>
          <p>Manage messages from DB Guitar Setup about your setup, scheduling, pickup, and service updates.</p>
          <div className="service-card">
            <div>
              <h3>Receive text updates</h3>
              <p>Tap below to open a text addressed to us with START already filled in. Send the message to opt in.</p>
            </div>
            <a className="button" href="sms:+19512182663?body=START">Text START to opt in</a>
          </div>
          <h2>No longer want messages?</h2>
          <p>Tap below to open a text addressed to us with STOP already filled in. Send the message to opt out.</p>
          <a className="button secondary" href="sms:+19512182663?body=STOP">Text STOP to opt out</a>
          <p><a href="sms:+19512182663?body=HELP">Need help? Text HELP</a></p>
          <p className="small">By texting START, you agree to receive text messages from DB Guitar Setup. Message frequency varies. Message and data rates may apply. Reply STOP to opt out or HELP for help.</p>
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
      <Route path="/verification" element={<VerificationPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
