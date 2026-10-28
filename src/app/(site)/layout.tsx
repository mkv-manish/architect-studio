import JsonLd from "@/components/common/JsonLd";
import { studioSchema } from "@/lib/structured-data";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingContactButtons from "@/components/common/FloatingContactButtons";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={studioSchema()} />
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" className="min-h-[65vh]">
        {children}
      </main>
      <Footer />
      <FloatingContactButtons />
    </>
  );
}
