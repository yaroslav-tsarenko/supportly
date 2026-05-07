import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-[#F8F5F0] px-6 text-center">
      <p className="text-[140px] font-bold leading-none tracking-tighter text-[#0B57D0]/10 md:text-[200px]">
        404
      </p>
      <h1 className="-mt-4 text-3xl font-semibold text-[#101010] md:text-4xl">
        This page wandered off
      </h1>
      <p className="mt-3 max-w-md text-[#525252]">
        The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
        Let&rsquo;s get you back on track.
      </p>
      <div className="mt-8">
        <Button href="/" variant="primary" size="lg">
          Back to home
        </Button>
      </div>
    </div>
  );
}
