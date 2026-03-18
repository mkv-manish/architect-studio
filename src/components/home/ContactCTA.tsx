import Container from "@/components/common/Container";
import PrimaryButton from "@/components/common/PrimaryButton";
import SecondaryButton from "@/components/common/SecondaryButton";
import { siteConfig } from "@/lib/constants";

export default function ContactCTA() {
    return (
        <section className="py-12 lg:py-16">
            <Container>
                <div className="rounded-[34px] border border-white/10 bg-white/10 p-8 backdrop-blur-2xl lg:p-10">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                        <div className="max-w-2xl">
                            <p className="mb-3 text-sm uppercase tracking-[0.28em] text-white/50">
                                Start Now
                            </p>
                            <h2 className="text-3xl font-semibold sm:text-4xl">
                                Ready To Discuss Your Project?
                            </h2>
                            <p className="mt-4 text-white/65">
                                WhatsApp, call ya detailed enquiry form ke
                                through humse turant contact karein.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <PrimaryButton href="/contact">
                                Send Enquiry
                            </PrimaryButton>
                            <SecondaryButton
                                href={`https://wa.me/${siteConfig.whatsapp}`}
                                target="_blank"
                            >
                                WhatsApp Now
                            </SecondaryButton>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
