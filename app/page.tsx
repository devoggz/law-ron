import {
  Hero,
  About,
  Services,
  LogoTicker,
  Team,
  FAQ,
} from "@/components/sections";

export default function Home() {
  return (
    <main>
      <Hero />
      <LogoTicker />
      <About />
      <Services />
      <Team />
      <FAQ />
    </main>
  );
}
