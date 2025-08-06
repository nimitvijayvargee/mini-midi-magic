import Image from "next/image";
import { PianoFooter } from "./components/PianoFooter";
import { PianoNavbar } from "./components/PianoNavbar";
import { Hero } from "./components/Hero";
export default function Home() {
  return (
    <div className="min-h-screen">
      <PianoNavbar />
      <Hero />
      <PianoFooter />
    </div>
  );
}
