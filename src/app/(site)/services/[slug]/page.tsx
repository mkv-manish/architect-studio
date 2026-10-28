import JsonLd from "@/components/common/JsonLd";
import { businessId, breadcrumbSchema } from "@/lib/structured-data";
import { absoluteUrl } from "@/lib/metadata";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";
import Container from "@/components/common/Container";
import ButtonLink from "@/components/common/ButtonLink";
import ServiceGrid from "@/components/common/ServiceGrid";
import { services } from "@/data/services";
import { createMetadata } from "@/lib/metadata";
type Props = { params: Promise<{ slug: string }> };
const images = [
  "/projects/villa-1.webp",
  "/projects/commercial-1.webp",
  "/projects/blueprint-1.webp",
  "/projects/elevation-1.webp",
];
export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  return createMetadata(service.title, service.desc, `/services/${slug}`);
}
export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const index = services.findIndex((item) => item.slug === slug);
  if (index < 0) notFound();
  const service = services[index];
  return (
    <Container className="page-section">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            description: service.detail,
            url: absoluteUrl(`/services/${slug}`),
            provider: { "@id": businessId },
            image: absoluteUrl(images[index]),
          },
          breadcrumbSchema([
            { name: "Services", path: "/services" },
            { name: service.title, path: `/services/${slug}` },
          ]),
        ]}
      />

      <Link
        href="/services"
        className="mb-10 inline-flex min-h-11 items-center gap-3 text-sm text-white/55 hover:text-white"
      >
        <ArrowLeft size={16} /> All services
      </Link>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow mb-5">Design services / 0{index + 1}</p>
          <h1 className="page-title">{service.title}</h1>
          <p className="mt-6 text-base leading-8 text-white/65">
            {service.detail}
          </p>
          <ul className="my-8 space-y-4">
            {service.focus.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-white/65">
                <Check size={17} className="shrink-0 text-[#dfc39c]" />
                {item}
              </li>
            ))}
          </ul>
          <ButtonLink href="/consultation">
            Discuss your requirements
          </ButtonLink>
          <p className="mt-5 text-xs leading-6 text-white/45">
            Scope, deliverables, fees, and timelines are agreed for each
            project.
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-md">
          <Image
            src={images[index]}
            alt={`${service.title} architectural concept`}
            fill
            priority
            sizes="(min-width:1024px) 50vw,100vw"
            className="object-cover"
          />
        </div>
      </div>
      <div className="mt-20 border-t border-white/10 pt-12">
        <h2 className="section-title mb-7">Explore our services</h2>
        <ServiceGrid />
      </div>
    </Container>
  );
}
