import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Supportly collects, uses, and protects your personal information.",
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10 first:mt-0">
      <h2 className="text-xl font-semibold text-[#101010]">{title}</h2>
      <div className="mt-3 space-y-3 text-[#525252] leading-relaxed">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-[#F8F5F0] py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-[#101010] md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-[#767676]">Last updated: May 1, 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24 text-base">
        <p className="text-[#525252] leading-relaxed">
          At Supportly, Inc. (&ldquo;Supportly,&rdquo; &ldquo;we,&rdquo;
          &ldquo;us,&rdquo; or &ldquo;our&rdquo;), we are committed to
          protecting your privacy. This Privacy Policy explains how we collect,
          use, disclose, and safeguard your information when you use our website,
          applications, and services (collectively, the &ldquo;Service&rdquo;).
        </p>

        <Section title="1. Information We Collect">
          <p>
            We collect information you provide directly, such as your name, email
            address, company name, billing details, and any content you submit
            through the Service. We also automatically collect certain data when
            you interact with the Service, including your IP address, browser
            type, operating system, referring URLs, pages viewed, and timestamps.
          </p>
          <p>
            If you integrate third-party services with Supportly (for example, a
            CRM or messaging platform), we may receive data from those services
            in accordance with their own privacy policies and your
            authorization.
          </p>
        </Section>

        <Section title="2. How We Use Information">
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Provide, operate, and maintain the Service</li>
            <li>Process transactions and send related information</li>
            <li>Respond to your comments, questions, and support requests</li>
            <li>
              Send you technical notices, updates, security alerts, and
              administrative messages
            </li>
            <li>
              Analyze usage trends and improve the Service&rsquo;s functionality
              and user experience
            </li>
            <li>
              Detect, investigate, and prevent fraudulent or unauthorized
              activity
            </li>
          </ul>
        </Section>

        <Section title="3. Data Sharing">
          <p>
            We do not sell your personal information. We may share your data with
            trusted third-party service providers who assist us in operating the
            Service, such as hosting providers, payment processors, and
            analytics services. These providers are contractually obligated to
            use your data only as necessary to perform services on our behalf.
          </p>
          <p>
            We may also disclose your information if required by law, in
            response to a valid legal process, or to protect the rights, safety,
            or property of Supportly, our users, or the public.
          </p>
        </Section>

        <Section title="4. Data Security">
          <p>
            We implement industry-standard technical and organizational measures
            to protect your information, including encryption in transit (TLS)
            and at rest, regular security audits, and access controls. However,
            no method of electronic storage or transmission is 100% secure, and
            we cannot guarantee absolute security.
          </p>
        </Section>

        <Section title="5. Your Rights">
          <p>
            Depending on your jurisdiction, you may have the right to access,
            correct, or delete your personal data, restrict or object to certain
            processing, and request data portability. To exercise any of these
            rights, please contact us at{" "}
            <a
              href="mailto:privacy@supportly.io"
              className="text-[#0B57D0] hover:underline"
            >
              privacy@supportly.io
            </a>
            . We will respond to your request within 30 days.
          </p>
        </Section>

        <Section title="6. Cookies">
          <p>
            We use cookies and similar tracking technologies to collect
            information about your browsing activity. You can manage your cookie
            preferences through your browser settings or our cookie consent
            banner. For more details, please see our{" "}
            <a
              href="/cookies"
              className="text-[#0B57D0] hover:underline"
            >
              Cookie Policy
            </a>
            .
          </p>
        </Section>

        <Section title="7. Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. When we make
            material changes, we will notify you by posting the revised policy on
            our website and updating the &ldquo;Last updated&rdquo; date. Your
            continued use of the Service after changes are posted constitutes
            acceptance of the updated policy.
          </p>
        </Section>

        <Section title="8. Contact Us">
          <p>
            If you have any questions about this Privacy Policy or our data
            practices, please contact us at{" "}
            <a
              href="mailto:privacy@supportly.io"
              className="text-[#0B57D0] hover:underline"
            >
              privacy@supportly.io
            </a>{" "}
            or write to us at Supportly, Inc., 548 Market Street, Suite 45000,
            San Francisco, CA 94104.
          </p>
        </Section>
      </div>
    </>
  );
}
