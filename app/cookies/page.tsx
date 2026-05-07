import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Learn about how Supportly uses cookies and similar technologies.",
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

export default function CookiePolicyPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-[#F8F5F0] py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-[#101010] md:text-5xl">
            Cookie Policy
          </h1>
          <p className="mt-4 text-[#767676]">Last updated: May 1, 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24 text-base">
        <p className="text-[#525252] leading-relaxed">
          This Cookie Policy explains how Supportly, Inc.
          (&ldquo;Supportly,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
          &ldquo;our&rdquo;) uses cookies and similar tracking technologies when
          you visit our website or use our services. It explains what these
          technologies are, why we use them, and your rights to control their
          use.
        </p>

        <Section title="1. What Are Cookies">
          <p>
            Cookies are small text files that are placed on your device when you
            visit a website. They are widely used to make websites work more
            efficiently, provide a better browsing experience, and give website
            owners useful information about how their site is being used.
            Cookies can be &ldquo;persistent&rdquo; (remaining on your device
            until they expire or you delete them) or &ldquo;session&rdquo;
            (deleted automatically when you close your browser).
          </p>
        </Section>

        <Section title="2. How We Use Cookies">
          <p>
            We use cookies to recognize you when you return to our website, to
            remember your preferences, to understand how you interact with our
            Service, and to improve and personalize your experience. Some cookies
            are placed by us directly, while others are placed by third-party
            services we use for analytics, advertising, and functionality.
          </p>
        </Section>

        <Section title="3. Types of Cookies We Use">
          <p>
            <strong className="text-[#101010]">Essential Cookies.</strong> These
            cookies are strictly necessary for the Service to function. They
            enable core features such as authentication, security, and session
            management. The Service cannot operate properly without these
            cookies, and they cannot be disabled.
          </p>
          <p>
            <strong className="text-[#101010]">Analytics Cookies.</strong> These
            cookies help us understand how visitors interact with the Service by
            collecting and reporting information anonymously. We use this data to
            measure performance, identify popular content, and improve the user
            experience. Examples include Google Analytics and similar tools.
          </p>
          <p>
            <strong className="text-[#101010]">Functional Cookies.</strong>{" "}
            These cookies enable enhanced functionality and personalization, such
            as remembering your language preference, display settings, or the
            region you are in. If you do not allow these cookies, some or all of
            these features may not work correctly.
          </p>
          <p>
            <strong className="text-[#101010]">Marketing Cookies.</strong> These
            cookies are used to deliver advertisements that are more relevant to
            you and your interests. They may also be used to limit the number of
            times you see an advertisement and to measure the effectiveness of
            advertising campaigns. These cookies are usually placed by
            third-party advertising networks with our permission.
          </p>
        </Section>

        <Section title="4. Managing Cookies">
          <p>
            You can control and manage cookies in several ways. Most web browsers
            allow you to view, delete, and block cookies through the browser
            settings. Please note that blocking or deleting certain cookies may
            impact your experience and limit the functionality of the Service.
          </p>
          <p>
            You can also manage your cookie preferences through the consent
            banner displayed when you first visit our website. You may update
            your preferences at any time by clearing your browser cookies and
            revisiting the site.
          </p>
          <p>
            For opt-out options specific to analytics and advertising cookies,
            you can visit the{" "}
            <span className="text-[#0B57D0]">
              Digital Advertising Alliance
            </span>
            ,{" "}
            <span className="text-[#0B57D0]">
              Network Advertising Initiative
            </span>
            , or{" "}
            <span className="text-[#0B57D0]">
              Your Online Choices (EU)
            </span>{" "}
            websites.
          </p>
        </Section>

        <Section title="5. Changes to This Policy">
          <p>
            We may update this Cookie Policy from time to time to reflect
            changes in technology, regulation, or our business practices. When we
            make changes, we will update the &ldquo;Last updated&rdquo; date at
            the top of this page. We encourage you to review this policy
            periodically to stay informed.
          </p>
        </Section>

        <Section title="6. Contact Us">
          <p>
            If you have questions about our use of cookies or this Cookie Policy,
            please contact us at{" "}
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
