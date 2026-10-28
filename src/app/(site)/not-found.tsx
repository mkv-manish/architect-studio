import Container from "@/components/common/Container";
import ButtonLink from "@/components/common/ButtonLink";
export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <p className="eyebrow mb-5">404 · Page not found</p>
      <h1 className="display-heading text-5xl">Let’s find your way back.</h1>
      <p className="my-7 text-sm text-white/60">
        This page may have moved. Explore the portfolio or start a conversation.
      </p>
      <ButtonLink href="/projects">Explore projects</ButtonLink>
    </Container>
  );
}
