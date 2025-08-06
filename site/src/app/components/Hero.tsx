import { Button } from "./ui/button";
export const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden pt-32">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-led-blue/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10 pt-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-glow">
            MIDI BOARD
            <br />
            <span className="text-5xl md:text-7xl">MAKER EVENT</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Design your custom MIDI controller from scratch
            <br />
            <span className="text-primary">PCB • CAD • Firmware • Reality</span>
          </p>
          <div className="max-w-2xl mx-auto mb-12">
            <p className="text-lg text-foreground/80 mb-4">
              Join our innovative event where creativity meets technology. Design your dream MIDI board, 
              create the PCB layout, design the case with CAD, develop the firmware, and get grants to 
              bring your vision to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-accent text-sm">
              <span className="bg-card px-3 py-1 rounded-full border border-accent/30">Hardware Design</span>
              <span className="bg-card px-3 py-1 rounded-full border border-accent/30">3D Modeling</span>
              <span className="bg-card px-3 py-1 rounded-full border border-accent/30">Embedded Programming</span>
              <span className="bg-card px-3 py-1 rounded-full border border-accent/30">Grant Funding</span>
            </div>
          </div>
          
       
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold shadow-glow-primary hover:shadow-glow-primary/75 transition-all duration-300"
            >
              Register Now
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-3 text-lg font-semibold transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/30">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">$50K+</div>
              <div className="text-muted-foreground">Grant Pool</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">72hrs</div>
              <div className="text-muted-foreground">Design Sprint</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-led-orange mb-2">100+</div>
              <div className="text-muted-foreground">Makers Expected</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};