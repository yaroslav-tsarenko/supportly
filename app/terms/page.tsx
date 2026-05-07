import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the terms and conditions that govern your use of Supportly.",
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

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-[#F8F5F0] py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-[#101010] md:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-[#767676]">Last updated: May 1, 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24 text-base">
        <p className="text-[#525252] leading-relaxed">
          These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and
          use of the website, products, and services (collectively, the
          &ldquo;Service&rdquo;) provided by Supportly, Inc.
          (&ldquo;Supportly,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
          &ldquo;our&rdquo;). By accessing or using the Service, you agree to be
          bound by these Terms.
        </p>

        <Section title="1. Acceptance of Terms">
          <p>
            By creating an account or using any part of the Service, you
            represent that you are at least 18 years of age and have the legal
            authority to enter into these Terms. If you are using the Service on
            behalf of an organization, you represent that you have the authority
            to bind that organization to these Terms.
          </p>
        </Section>

        <Section title="2. Use of Service">
          <p>
            We grant you a limited, non-exclusive, non-transferable, revocable
            license to access and use the Service in accordance with these Terms.
            You are responsible for maintaining the confidentiality of your
            account credentials and for all activities that occur under your
            account.
          </p>
        </Section>

        <Section title="3. User Accounts">
          <p>
            You must provide accurate and complete information when creating an
            account. You agree to update your information promptly if it changes.
            We reserve the right to suspend or terminate accounts that contain
            inaccurate or incomplete information, or that violate these Terms.
          </p>
        </Section>

        <Section title="4. Acceptable Use">
          <p>You agree not to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Use the Service for any unlawful purpose or in violation of any
              applicable laws or regulations
            </li>
            <li>
              Attempt to gain unauthorized access to any part of the Service or
              its related systems
            </li>
            <li>
              Transmit any viruses, malware, or other harmful code through the
              Service
            </li>
            <li>
              Interfere with or disrupt the integrity or performance of the
              Service
            </li>
            <li>
              Reverse-engineer, decompile, or disassemble any aspect of the
              Service
            </li>
            <li>
              Use the Service to send unsolicited communications or spam
            </li>
          </ul>
        </Section>

        <Section title="5. Intellectual Property">
          <p>
            The Service and all associated content, features, and functionality
            are owned by Supportly and are protected by copyright, trademark,
            and other intellectual property laws. You retain ownership of any
            content you submit through the Service, but you grant us a
            worldwide, royalty-free license to use, store, and process that
            content solely for the purpose of providing the Service.
          </p>
        </Section>

        <Section title="6. Limitation of Liability">
          <p>
            To the fullest extent permitted by law, Supportly shall not be
            liable for any indirect, incidental, special, consequential, or
            punitive damages arising out of or related to your use of the
            Service. Our total liability for any claim arising under these Terms
            shall not exceed the amount you paid us in the twelve months
            preceding the claim.
          </p>
        </Section>

        <Section title="7. Termination">
          <p>
            We may suspend or terminate your access to the Service at any time,
            with or without cause, upon reasonable notice. You may terminate your
            account at any time by contacting us. Upon termination, your right to
            use the Service ceases immediately, and we may delete your account
            data after a reasonable retention period.
          </p>
        </Section>

        <Section title="8. Governing Law">
          <p>
            These Terms are governed by and construed in accordance with the laws
            of the State of California, without regard to its conflict of law
            principles. Any disputes arising under these Terms shall be resolved
            exclusively in the state or federal courts located in San Francisco
            County, California.
          </p>
        </Section>

        <Section title="9. Changes to These Terms">
          <p>
            We reserve the right to modify these Terms at any time. When we make
            material changes, we will notify you by posting the updated Terms on
            our website and updating the &ldquo;Last updated&rdquo; date. Your
            continued use of the Service after changes are posted constitutes
            acceptance of the revised Terms.
          </p>
        </Section>

        <Section title="10. Contact Us">
          <p>
            If you have any questions about these Terms, please contact us at{" "}
            <a
              href="mailto:legal@supportly.io"
              className="text-[#0B57D0] hover:underline"
            >
              legal@supportly.io
            </a>{" "}
            or write to us at Supportly, Inc., 548 Market Street, Suite 45000,
            San Francisco, CA 94104.
          </p>
        </Section>
      </div>
    </>
  );
}
