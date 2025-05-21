import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { RegistrationSection } from "@/components/registration-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <HeroSection />
      <AboutSection />
      <ContactSection />
      <RegistrationSection />
      <Footer />
    </main>
  );
}
