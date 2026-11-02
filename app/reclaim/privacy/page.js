import Link from "next/link";

const title = "Reclaim privacy policy";
const description = "How Reclaim by FarNorth IT handles app detection, local usage history, permissions, backups, support enquiries and data deletion.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/reclaim/privacy/" },
  openGraph: { title: `${title} | FarNorth IT`, description, url: "/reclaim/privacy/", type: "website" },
  twitter: { card: "summary", title: `${title} | FarNorth IT`, description }
};

export default function ReclaimPrivacy() {
  return (
    <>
      <header className="reclaim-intro reclaim-policy-intro">
        <p className="eyebrow">Reclaim by FarNorth IT</p>
        <h1>Privacy policy</h1>
        <p className="reclaim-lead">Your app-use history belongs on your device. This page explains what Reclaim accesses, why it needs that information, and how you stay in control.</p>
        <p className="reclaim-status">Effective 2 November 2026 · Reclaim for Android · Version 0.6.1</p>
      </header>

      <div className="reclaim-policy-grid">
        <aside className="reclaim-toc">
          <nav aria-label="On this page">
            <h2>On this page</h2>
            <a href="#about">Who we are</a>
            <a href="#information">Information on your device</a>
            <a href="#accessibility">Accessibility &amp; permissions</a>
            <a href="#sharing">Sharing &amp; backups</a>
            <a href="#security">Storage &amp; security</a>
            <a href="#deletion">Retention &amp; deletion</a>
            <a href="#support-data">Support &amp; website visits</a>
            <a href="#changes">Changes &amp; contact</a>
          </nav>
        </aside>

        <article className="reclaim-policy">
          <div className="reclaim-summary">
            <h2>The essentials</h2>
            <p>Reclaim does not require an account and does not upload your app-use history to FarNorth IT. There are no advertising, analytics or automatic crash-reporting services in the app. Your settings and history stay on your device unless you choose to export a backup or send information to us yourself.</p>
          </div>

          <section id="about">
            <h2>1. Who we are and what this covers</h2>
            <p>Reclaim is an Android app developed by FarNorth IT, based in Queensland, Australia. Its application identifier is <code>au.com.farnorth.reclaim</code>. Reclaim helps you manage time in apps using timers, budgets, schedules and optional cooldowns.</p>
            <p>This policy covers Reclaim’s handling of information, Reclaim support enquiries and visits to these Reclaim pages. It does not describe unrelated FarNorth IT client services or the independent practices of Android, Google Play, your device manufacturer or any other app.</p>
          </section>

          <section id="information">
            <h2>2. Information Reclaim accesses and stores</h2>
            <p>Reclaim processes the following information locally to provide its features:</p>
            <ul>
              <li><strong>Apps on your device:</strong> names, icons and package identifiers of apps with a launcher entry, so you can choose apps to time. The list is not uploaded to FarNorth IT.</li>
              <li><strong>The foreground app:</strong> package transitions reported by Android Accessibility, so Reclaim can recognise when a timed app is being used. Foreground events are observed while the service is enabled, including when Reclaim’s own screen is closed. Usage totals are recorded for applicable, enabled timers.</li>
              <li><strong>Your timer settings:</strong> chosen apps, limits, schedules, shared budgets, cooldowns, pauses, warning preferences and related configuration.</li>
              <li><strong>Measured activity:</strong> daily and hourly usage totals for timed apps, shared-budget totals, and the app name and time associated with a successful return-to-Home action. These records power timers and Insights; they do not represent a complete record of everything you do on your phone.</li>
              <li><strong>Setup and monitoring information:</strong> setup choices, permission-related preferences, service heartbeat timestamps and periods of interrupted or delayed detection, so Reclaim can show connection health and explain incomplete reports.</li>
            </ul>
            <p>Reclaim does not retrieve screen content, messages, passwords, typed text, browsing content, photos, contacts, microphone recordings or camera images. It does not request location access or use advertising identifiers.</p>
          </section>

          <section id="accessibility">
            <h2>3. Accessibility and other Android permissions</h2>
            <p><strong>AccessibilityService:</strong> after you read the in-app disclosure and enable Reclaim app timers in Android Settings, the service receives window-state events to identify the foreground app. When a limit or cooldown applies, it uses Android’s Home action to return you to the launcher. It does not retrieve the view tree, inspect screen text, capture screenshots, tap controls in other apps or type on your behalf. It does not force-stop apps or require root access.</p>
            <p>Accessibility access is optional, but app timers require it. You can disable it at any time in Android Settings → Accessibility → Reclaim app timers. The exact menu name varies by device.</p>
            <p><strong>Notifications:</strong> if allowed, Reclaim shows countdowns, advance warnings and return-home reminders. These may display the timed app’s name and remaining time on your device, including the lock screen according to your Android settings. You control notification permission and channel visibility.</p>
            <p><strong>File access:</strong> exports and restores use Android’s document picker. You choose the file and storage provider; Reclaim does not request broad access to your files.</p>
          </section>

          <section id="sharing">
            <h2>4. Sharing, network access and backups</h2>
            <p>The current Reclaim app has no Internet permission, backend, advertising SDK, analytics SDK or automatic crash-report upload. FarNorth IT does not receive, sell or share your locally stored app-use history through the app.</p>
            <p>Reclaim excludes its app data from Android automatic cloud backup and device transfer. You may explicitly export a readable JSON backup containing timer settings and, optionally, usage and event history. A file or cloud provider you select may store or sync that backup under its own terms and privacy policy. Exported files are not encrypted by Reclaim.</p>
            <p>You decide whether to share an export, screenshot or other information with someone else, including FarNorth IT support. Links and email actions open external apps or websites, whose providers handle information under their own policies.</p>
          </section>

          <section id="security">
            <h2>5. Storage and security</h2>
            <p>Reclaim stores its database and preferences in Android’s app-private storage. Access is protected by Android’s application sandbox and your device’s security settings; Reclaim does not add its own database encryption. Protect your device with its available security controls and keep exported backups in a location you trust.</p>
            <p>No storage or transmission method can be guaranteed completely secure. Anyone you give an exported backup to may be able to read its contents.</p>
          </section>

          <section id="deletion">
            <h2>6. Retention and deletion</h2>
            <p>Local settings and history remain on your device until you remove them. The seven-day view in Insights is a reporting window, not an automatic deletion schedule.</p>
            <ul>
              <li><strong>Clear measured history:</strong> choose Settings → Clear history in Reclaim. This removes usage totals, shared-budget and hourly history, return-home events and monitoring-gap records, and resets usage allowances. Timer rules and preferences remain; existing cooldown deadlines are not cancelled.</li>
              <li><strong>Remove all local app data:</strong> use Android Settings → Apps → Reclaim → Storage → Clear storage/data, or uninstall Reclaim. This removes Reclaim’s local settings and database. Menu names vary by device.</li>
              <li><strong>Remove exported copies:</strong> delete backup files separately from their storage location and any cloud provider, including retained or shared copies. Clearing Reclaim’s data does not delete those files.</li>
            </ul>
            <p>Removing an individual timer does not erase its historical usage. There is no Reclaim account or server-side usage database for FarNorth IT to delete or recover.</p>
          </section>

          <section id="support-data">
            <h2>7. Support enquiries and website visits</h2>
            <p>If you contact FarNorth IT, we receive the contact details, message and any attachments you choose to send. We use that information to answer your enquiry, investigate the issue and manage related correspondence. Email and hosting providers process information needed to deliver those services; information may also be disclosed when legally required. Please send only the information needed to explain your issue.</p>
            <p>Support correspondence is kept for as long as needed to deal with the enquiry and applicable business or legal recordkeeping requirements. To ask about access, correction or deletion of information you have sent us, use the contact below. This is separate from local app data, which we cannot access remotely.</p>
            <p>These pages are hosted on GitHub Pages. Visiting them sends ordinary request information, such as your IP address, to the hosting provider. GitHub describes its handling of this information in its <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement">privacy statement</a>. These Reclaim pages do not add advertising, analytics or a support form; emailing us opens your chosen email app.</p>
          </section>

          <section id="changes">
            <h2>8. Changes and contact</h2>
            <p>We may update this policy as Reclaim changes. The current policy and effective date will be published on this page. If future features change how sensitive information is accessed or shared, the relevant disclosures and consent flow will also need to be updated.</p>
            <p>For privacy questions or Reclaim support, contact <strong>FarNorth IT</strong> at <a href="mailto:guy.corrigan@farnorthit.com.au?subject=Reclaim%20privacy">guy.corrigan@farnorthit.com.au</a>.</p>
            <p><Link href="/reclaim/">Return to Reclaim support →</Link></p>
          </section>
        </article>
      </div>
    </>
  );
}
