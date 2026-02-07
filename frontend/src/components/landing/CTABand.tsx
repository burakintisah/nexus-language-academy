import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import FloatingShapes from "@/components/ui/FloatingShapes";
import FadeInOnScroll from "@/components/ui/FadeInOnScroll";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { getWhatsAppLink } from "@/lib/whatsapp";
import landing from "@/data/tr/landing.json";
import common from "@/data/tr/common.json";

export default function CTABand() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary to-primary-light pt-8 pb-16 sm:pt-10 sm:pb-20 lg:pb-24">
      <FloatingShapes variant="cta" />
      <Container className="relative text-center">
        <FadeInOnScroll>
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            {landing.ctaBand.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base sm:text-lg text-white/90">
            {landing.ctaBand.subtitle}
          </p>
          <div className="mt-6 sm:mt-8">
            <Button
              variant="secondary"
              href={getWhatsAppLink(common.whatsapp.lessonRequest)}
              target="_blank"
              rel="noopener noreferrer"
              className="border-white bg-white text-primary hover:bg-transparent hover:text-white"
            >
              <WhatsAppIcon />
              {landing.ctaBand.cta}
            </Button>
          </div>
        </FadeInOnScroll>
      </Container>
    </section>
  );
}
