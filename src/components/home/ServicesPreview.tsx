import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import ServiceGrid from "@/components/common/ServiceGrid";
export default function ServicesPreview() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <SectionHeading
          badge="03 / Our expertise"
          title="Considered from every angle."
          description="A complete approach to architecture, from understanding your space to helping you picture its possibilities."
        />
        <div className="mt-10">
          <ServiceGrid />
        </div>
      </Container>
    </section>
  );
}
