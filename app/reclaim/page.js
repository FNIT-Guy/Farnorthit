import Link from "next/link";

const title = "Reclaim support";
const description = "Setup help, troubleshooting and privacy information for Reclaim, the Android app timer from FarNorth IT.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/reclaim/" },
  openGraph: { title: `${title} | FarNorth IT`, description, url: "/reclaim/", type: "website" },
  twitter: { card: "summary", title: `${title} | FarNorth IT`, description }
};

const questions = [
  {
    question: "How do I get started?",
    answer: <p>Open Reclaim and follow the guided setup. Read the app detection disclosure, then choose <strong>Agree &amp; open app detection</strong> if you want to use timers. Android controls the Accessibility permission: enable <strong>Reclaim app timers</strong> and return to the app. Notifications are optional. Choose your first app to create a 15-minute starter timer, which you can edit afterwards.</p>
  },
  {
    question: "Why does Reclaim ask for Accessibility access?",
    answer: <p>Reclaim uses Android Accessibility to detect which app is in the foreground and return you to the Home screen when your chosen limit or cooldown applies. It does not read screen content or type or tap inside other apps. You can turn this access off in Android Settings at any time; app timers need it to work. Read the <Link href="/reclaim/privacy/">privacy policy</Link> for the full explanation.</p>
  },
  {
    question: "My timer is not detecting apps. What should I check?",
    answer: <p>Open Reclaim Settings and check app detection health. Confirm <strong>Reclaim app timers</strong> is enabled in Android Settings → Accessibility (it may be under Installed apps or Downloaded apps). If it is enabled but disconnected, turn that service off and on, then reopen a timed app to generate a new detection event. Also check that the timer is enabled, not paused, and within its scheduled hours. Reclaim cannot reconstruct usage from a period when detection was disconnected.</p>
  },
  {
    question: "Why can I not see countdowns or reminders?",
    answer: <p>Check both Android notification permission and Reclaim’s timer/reminder notification channels. You can reopen <strong>Settings → Guided permission setup</strong> in Reclaim. Notification appearance, including status-bar chips and live updates, depends on your Android version and device. App detection and notification health are separate, so a missing notification does not necessarily mean detection has stopped.</p>
  },
  {
    question: "Can I pause a timer or change a limit?",
    answer: <p>Yes. Open the timer to edit its limit, schedule, cooldown or shared daily budget. You can pause or disable a timer. Reclaim is a voluntary self-control tool: it returns you Home rather than uninstalling, force-stopping or permanently blocking another app.</p>
  },
  {
    question: "How do I back up or move my settings?",
    answer: <p>Use Reclaim Settings to export a JSON backup through Android’s file picker. You can include history or export settings only. Keep the file private: it is readable text and may contain app names and usage activity. A cloud file provider you choose may upload or sync it. Restoring a backup replaces your existing Reclaim settings and history after confirmation. Android permissions must be granted again separately.</p>
  },
  {
    question: "How do I delete my data?",
    answer: <p>Use <strong>Settings → Clear history</strong> in Reclaim to erase measured usage, return-home events and monitoring-gap history while keeping your timers and preferences. For all local Reclaim data, use Android Settings → Apps → Reclaim → Storage → Clear storage/data, or uninstall Reclaim. Delete any exported backups separately, including copies held by cloud providers. There is no Reclaim account or server-side usage profile to delete.</p>
  },
  {
    question: "Where can I download Reclaim?",
    answer: <p>Reclaim is currently in development. A Google Play link will be added here when the app is published.</p>
  }
];

export default function ReclaimSupport() {
  return (
    <>
      <section className="reclaim-intro">
        <p className="eyebrow">Reclaim for Android</p>
        <h1>A little more intention.<br />A little less scrolling.</h1>
        <p className="reclaim-lead">App timers, cooldowns and daily budgets that help you decide when it is time to return Home. Built by FarNorth IT, with your usage history kept on your device.</p>
        <div className="reclaim-actions">
          <a className="reclaim-button" href="#support">Get support</a>
          <Link className="reclaim-text-link" href="/reclaim/privacy/">Read the privacy policy <span aria-hidden="true">↗</span></Link>
        </div>
        <p className="reclaim-status">In development · Android 9 or later · No account required</p>
      </section>

      <section className="reclaim-facts" aria-label="Reclaim at a glance">
        <div><span>01</span><h2>Your limits</h2><p>Choose session, daily or weekly budgets, schedules and optional cooldowns.</p></div>
        <div><span>02</span><h2>Your device</h2><p>Settings and measured usage stay local. Backups happen only when you choose to export.</p></div>
        <div><span>03</span><h2>Your choice</h2><p>Pause timers, change limits or switch app detection off whenever you need to.</p></div>
      </section>

      <section className="reclaim-section" aria-labelledby="help-title">
        <p className="eyebrow">Getting comfortable</p>
        <h2 id="help-title">Setup &amp; common questions</h2>
        <div className="reclaim-faq">
          {questions.map(({ question, answer }) => (
            <details key={question}><summary>{question}</summary><div>{answer}</div></details>
          ))}
        </div>
      </section>

      <section id="support" className="reclaim-contact" aria-labelledby="support-title">
        <div>
          <p className="eyebrow">A person, not a ticket maze</p>
          <h2 id="support-title">Need a hand?</h2>
          <p>For Reclaim support, bug reports, feature suggestions or privacy questions, email FarNorth IT.</p>
          <a className="reclaim-email" href="mailto:guy.corrigan@farnorthit.com.au?subject=Reclaim%20support">guy.corrigan@farnorthit.com.au</a>
        </div>
        <div className="reclaim-contact-note">
          <h3>Help us understand the problem</h3>
          <p>Include your Reclaim version, phone model, Android version, what you expected to happen and the steps that caused the issue. If useful, attach a screenshot with private information hidden.</p>
          <p>Please do not send passwords, banking details or your full exported usage history. You choose what to share; the app does not send diagnostics automatically.</p>
        </div>
      </section>
    </>
  );
}
