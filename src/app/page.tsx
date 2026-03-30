import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Speakers from "@/components/Speakers";
import ConferenceInfo from "@/components/ConferenceInfo";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <div className="fixed top-0 left-0 right-0 z-50">
        <TopBar />
        <Navbar />
      </div>
      <Hero />
      <ConferenceInfo />
      <Speakers />
      <Gallery />
      <ContactForm />
      <Footer />
    </main>
  );
}
