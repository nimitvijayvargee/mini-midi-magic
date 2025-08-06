import Link from "next/link";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-led-blue/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl text-white mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text animate-glow">
            MINI MIDI
            <br />
            <span className="text-5xl md:text-7xl">MAGIC</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Design your custom MIDI controller from scratch
            <br />
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href={"https://minimidimagic.fillout.com/t/8NZRbaKn8kus"}>
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-white/90 px-8 py-3 text-lg font-semibold shadow-glow-primary hover:shadow-glow-primary/75 transition-all duration-300 cursor-pointer"
              >
                RSVP
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-3 text-lg font-semibold transition-all duration-300 cursor-pointer hover:bg-[#1d1d1d]"
              disabled
            >
              Start Working
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-border/30">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">PCB</div>
              <div className="text-muted-foreground">Design the PCB</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">Case</div>
              <div className="text-muted-foreground">Make a CAD of the Case</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-led-orange mb-2">Firmware</div>
              <div className="text-muted-foreground">Write a Firmware</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};