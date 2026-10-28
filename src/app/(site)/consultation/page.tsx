import { Check, MessageCircle, Ruler } from "lucide-react";
import Container from "@/components/common/Container";
import EnquiryForm from "@/components/forms/EnquiryForm";
import { createMetadata } from "@/lib/metadata";
export const metadata = createMetadata(
  "Book a Consultation",
  "Request a design discussion with BTC Design Studio. Share your plot, requirements, and a preferred consultation date.",
  "/consultation",
);
export default function ConsultationPage() {
  return (
    <Container className="page-section">
      <div className="grid items-start gap-9 lg:grid-cols-2 lg:gap-14">
        <div>
          <p className="eyebrow mb-5">A conversation is a good start</p>
          <h1 className="page-title">Plan your project with us.</h1>
          <p className="mt-6 text-base leading-8 text-white/60">
            Talk through your plot, priorities, and the kind of space you want
            to create. Request a preferred date and we’ll confirm the next steps
            directly.
          </p>
          <h2 className="mb-5 mt-10 flex items-center gap-3 text-lg">
            <Ruler className="text-[#dfc39c]" size={21} /> What to have ready
          </h2>
          <ul className="space-y-4">
            {[
              "Plot dimensions and project location",
              "Rooms, floors, and spaces you need",
              "Style references or existing drawings",
              "Your priorities and intended timeline",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm text-white/65">
                <Check size={16} className="shrink-0 text-[#dfc39c]" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-10 rounded-md border border-white/10 p-6">
            <MessageCircle className="mb-3 text-[#dfc39c]" size={22} />
            <p className="text-sm leading-7 text-white/60">
              Your preferred date is a request. Send the prepared message in
              WhatsApp, and the studio will confirm availability with you.
            </p>
          </div>
        </div>
        <EnquiryForm initialMode="consultation" />
      </div>
    </Container>
  );
}
