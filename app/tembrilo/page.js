import Image from "next/image";
import Link from "next/link";

const title = "Tembrilo — app timers, on your terms";
const description = "A little more room for life. Tembrilo by FarNorth IT helps you manage time in Android apps with session timers, budgets and optional cooldowns. No account or automatic uploads.";
export const metadata = {
  title, description,
  alternates: { canonical: "/tembrilo/" },
  openGraph: { title, description, url: "/tembrilo/", type: "website" },
  twitter: { card: "summary", title, description }
};

const questions = [
  ["What happened to Reclaim?", <p key="rename">Tembrilo is the new name for the app previously developed as Reclaim by FarNorth IT. Its Android application identifier remains <code>au.com.farnorth.reclaim</code>, so the rename preserves the existing app identity and backup format.</p>],
  ["How do I get started?", <p key="start">Open Tembrilo and read the app-detection disclosure. Choose <strong>Agree &amp; open app detection</strong>, enable <strong>Tembrilo app timers</strong> in Android Accessibility, then return. Notifications are optional. Choose your first app to create a 15-minute session; edit it whenever you like.</p>],
  ["Why does it need Accessibility?", <p key="access">Tembrilo uses foreground-app events to detect a timed app and Android’s Home action when your chosen limit or cooldown applies. It does not retrieve screen content, type, or tap inside other apps. You can disable access in Android Settings. Read the <Link href="/tembrilo/privacy/">privacy policy</Link> for the full explanation.</p>],
  ["When does a session reset?", <p key="session">A session starts fresh when you leave an app and return. Daily, weekly and shared budgets keep counting across visits. An optional cooldown applies after session expiry. Tembrilo is a voluntary self-control tool; you can change limits, pause timers or disable detection.</p>],
  ["My timer is not detecting apps. What should I check?", <p key="health">Check app-detection health in Tembrilo Settings. Confirm the Accessibility service is enabled and connected, then switch to a timed app. Also check the timer is enabled, not paused and within its schedule. Interrupted monitoring is shown in Insights; missing activity is not reconstructed.</p>],
  ["Why is the countdown missing?", <p key="notifications">Check Android notification permission and the Active timer channel. Settings → Guided permission setup can help. Detection and notifications have separate health checks. Status-bar chips, live updates and pop-ups depend on your Android version and phone settings.</p>],
  ["Can I back up my settings?", <p key="backup">Use Settings to export readable JSON through Android’s file picker, with history optional. A selected cloud provider may sync the file. Keep it private. Restore replaces your app settings and included history after confirmation; Android permissions must be granted separately. Existing Reclaim backups remain compatible.</p>],
  ["How do I delete my data?", <p key="delete">Settings → Clear activity history erases measured usage, return-home events and monitoring gaps while keeping timers and preferences. For all local data, use Android’s Clear storage/data or uninstall. Delete exported backups separately. There is no Tembrilo account or server-side usage profile.</p>]
];

export default function TembriloSupport() {
  return <>
    <section className="tembrilo-hero" aria-labelledby="tembrilo-title">
      <div className="tembrilo-hero-copy">
        <div className="tembrilo-wordmark"><Image src="/assets/tembrilo/logo.svg" alt="" width={64} height={64}/><span>Tembrilo <small>by FarNorth IT</small></span></div>
        <p className="eyebrow">A little more room for life</p>
        <h1 id="tembrilo-title">Your time.<br/>Your terms.</h1>
        <p className="tembrilo-lead">Choose how long you want to spend in an app. Tembrilo gives you a gentle return Home when your time is up, with limits you can shape around your day.</p>
        <div className="tembrilo-actions"><a className="tembrilo-button" href="#setup">See how it works <span aria-hidden="true">↗</span></a><Link className="tembrilo-text-link" href="/tembrilo/privacy/">Read our privacy policy</Link></div>
        <p className="tembrilo-status">Preparing for Google Play · Android 9+ · No account required</p>
      </div>
      <div className="tembrilo-example" aria-label="Illustrative timer example">
        <p className="tembrilo-example-label">A limit you chose</p>
        <div className="tembrilo-example-top"><span className="tembrilo-example-dot"/><span>One app. A little intention.</span></div>
        <strong className="tembrilo-example-time">15:00</strong>
        <p>for this visit</p><div className="tembrilo-example-track"><span/></div>
        <p className="tembrilo-example-note">Then, a moment to choose what comes next.</p>
        <span className="tembrilo-example-caption">Illustrative session timer</span>
      </div>
    </section>
    <section className="tembrilo-facts" aria-label="What stays in your control">
      <div><span>01 / YOUR LIMITS</span><h2>Fit your real day.</h2><p>Session, daily and weekly budgets. Shared limits across apps. Schedules for work, evenings and weekends.</p></div>
      <div><span>02 / YOUR DEVICE</span><h2>Keep it local.</h2><p>No account, advertising or automatic uploads. Your settings and measured history stay on your device unless you export.</p></div>
      <div><span>03 / YOUR CHOICE</span><h2>Room to adjust.</h2><p>Pause a timer, change an allowance or add a cooldown. You stay in charge of the rules and Android permissions.</p></div>
    </section>
    <section id="setup" className="tembrilo-section" aria-labelledby="setup-title">
      <p className="eyebrow">Getting started</p><h2 id="setup-title">Three steps. Then get on with your day.</h2>
      <ol className="tembrilo-steps"><li><strong>Read, then decide.</strong><p>The app explains detection before asking you to enable Accessibility. You can decline and explore first.</p></li><li><strong>Choose one app.</strong><p>Start with the 15-minute session shortcut, then edit your timer, budget or schedule.</p></li><li><strong>Notice the moment.</strong><p>See an optional countdown. When your chosen limit applies, Tembrilo returns you Home.</p></li></ol>
    </section>
    <section className="tembrilo-section" aria-labelledby="help-title"><p className="eyebrow">Setup &amp; support</p><h2 id="help-title">A few things worth knowing.</h2><div className="tembrilo-faq">{questions.map(([question,answer])=><details key={question}><summary>{question}</summary><div>{answer}</div></details>)}</div></section>
    <section id="support" className="tembrilo-contact"><div><p className="eyebrow">A person, not a ticket maze</p><h2>Need a hand?</h2><p>For help, suggestions or privacy questions, email FarNorth IT.</p><a className="tembrilo-email" href="mailto:guy.corrigan@farnorthit.com.au?subject=Tembrilo%20support">guy.corrigan@farnorthit.com.au</a></div><div className="tembrilo-contact-note"><h3>Help us understand the moment.</h3><p>Include your app version, phone model, Android version and the steps that caused the issue. Hide private information in any screenshots.</p><p>Please do not send passwords, banking details or your full exported usage history. Tembrilo does not send diagnostics automatically.</p></div></section>
  </>;
}
