import { Hero } from "@/sections/Hero";
import { CompanyOpening } from "@/sections/CompanyOpening";
import { ClientJourney } from "@/sections/ClientJourney";
import { Specialties } from "@/sections/Specialties";
import { Services } from "@/sections/Services";
import { Differentials } from "@/sections/Differentials";
import { Testimonials } from "@/sections/Testimonials";
import { FAQ } from "@/sections/FAQ";
import { FinalCTA } from "@/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <CompanyOpening />
      <ClientJourney />
      <Specialties />
      <Services />
      <Differentials />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
