import { PageContainer } from "@/components/layout/page-container";
import { StripeDivider } from "@/components/layout/stripe-divider";

export default function HomePage() {
  return (
    <>
      <section>
        <PageContainer className="py-16 md:py-section">
          <h1 className="text-3xl font-semibold tracking-tight">
            Alessandro Argenziano
          </h1>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Portfolio foundation in progress.
          </p>
        </PageContainer>
      </section>

      <StripeDivider />
    </>
  );
}
