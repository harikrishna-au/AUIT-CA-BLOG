import { useRef } from "react";
import { ArrowRight, Square, Circle, Zap, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // 1. Elegant Entrance
    tl.from(".hero-line", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
    })
      .from(".hero-subtitle", {
        y: 20,
        opacity: 0,
        duration: 0.8,
      }, "-=0.6")
      .from(".hero-btn", {
        y: 20,
        opacity: 0,
        duration: 0.8,
      }, "-=0.6")
      .from(".hero-visual-item", {
        x: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 1.0,
      }, "-=0.8");

    // 2. Professional Continuous Motion (Subtle Floating)
    gsap.to(".shape-float", {
      y: -15,
      duration: 3,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      stagger: {
        each: 1,
        from: "random"
      }
    });

    // 3. Mouse Parallax Effect
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 20;
      const yPos = (clientY / window.innerHeight - 0.5) * 20;

      gsap.to(".parallax-layer", {
        x: xPos,
        y: yPos,
        duration: 1,
        ease: "power2.out"
      });
      gsap.to(".parallax-layer-reverse", {
        x: -xPos * 1.5,
        y: -yPos * 1.5,
        duration: 1,
        ease: "power2.out"
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);

  }, { scope: containerRef });

  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={containerRef} className="relative min-h-screen bg-background pt-20 overflow-hidden bauhaus-grid flex flex-col">
      <div className="container px-4 flex-grow flex flex-col justify-center pb-0">

        <div className="grid grid-cols-12 gap-0 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white">

          {/* Main Title Block */}
          <div className="col-span-12 lg:col-span-8 border-b-2 lg:border-b-0 lg:border-r-2 border-black p-8 md:p-16 relative flex flex-col justify-center overflow-hidden">

            <div className="mb-2 overflow-hidden">
              <h1 className="hero-line font-heading font-bold text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter uppercase">
                ITT
              </h1>
            </div>
            <div className="mb-2 overflow-hidden">
              <h1 className="hero-line font-heading font-bold text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter uppercase text-primary">
                Technology &
              </h1>
            </div>
            <div className="mb-8 overflow-hidden">
              <h1 className="hero-line font-heading font-bold text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter uppercase">
                Computer Applications
              </h1>
            </div>

            <p className="hero-subtitle font-mono text-sm md:text-base max-w-md mb-10 border-l-4 border-accent pl-6 uppercase font-bold tracking-wide text-muted-foreground">
              Empowering Innovation Through<br />
              <span className="text-foreground">Computational Excellence</span>
            </p>

            <div className="hero-btn">
              <Button
                size="lg"
                className="mech-button rounded-none text-lg px-8 py-6 bg-white text-black hover:bg-black hover:text-white group border-2 border-black transition-all"
                onClick={scrollToAbout}
              >
                EXPLORE DEPARTMENT <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Side Visuals Block */}
          <div className="col-span-12 lg:col-span-4 flex flex-col">

            {/* Shapes Block - Professional Motion */}
            <div className="hero-visual-item h-72 bg-secondary p-8 flex items-center justify-center border-b-2 border-black relative overflow-hidden group">
              <div className="shape-float parallax-layer-reverse absolute top-8 left-8">
                <Square className="w-24 h-24 text-white stroke-[1] opacity-20 rotate-12" />
              </div>
              <div className="shape-float parallax-layer absolute bottom-8 right-8">
                <Circle className="w-32 h-32 text-accent stroke-[1] opacity-20" />
              </div>

              <img src="/au-logo-white.png" alt="Andhra University Logo" className="w-48 h-48 object-contain relative z-10 drop-shadow-xl rounded-full bg-white p-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] parallax-layer" />
            </div>

            {/* Info Block */}
            <div className="flex-1 bg-accent p-8 flex flex-col justify-between relative hero-visual-item">
              <div className="space-y-4">
                <div className="border-2 border-black bg-white p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all cursor-default">
                  <div className="flex justify-between items-start mb-1">
                    <span className="block font-mono text-xs font-bold tracking-widest text-muted-foreground">ESTABLISHED</span>
                    <Terminal className="w-4 h-4 text-black" />
                  </div>
                  <span className="font-heading text-3xl font-bold block">2018-19</span>
                </div>

                <div className="border-2 border-black bg-white p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all cursor-default">
                  <div className="flex justify-between items-start mb-1">
                    <span className="block font-mono text-xs font-bold tracking-widest text-muted-foreground">ACCREDITATION</span>
                    <Zap className="w-4 h-4 text-black" />
                  </div>
                  <span className="font-heading text-2xl font-bold text-primary block">NAAC A++</span>
                </div>
              </div>

              <div className="mt-6 font-mono text-xs font-bold border-t-2 border-black pt-4">
                A.U. COLLEGE OF ENGINEERING (A)
                <br />VISAKHAPATNAM
              </div>
            </div>
          </div>
        </div>

        {/* Refined Professional Marquee */}
        <div className="mt-0 border-x-2 border-b-2 border-black bg-black text-white py-4 overflow-hidden whitespace-nowrap">
          <div className="animate-marquee inline-block">
            <span className="mx-8 font-heading text-lg font-bold tracking-wider">ESTABLISHED 2018-19</span>
            <span className="mx-4 text-accent">★</span>
            <span className="mx-8 font-heading text-lg font-bold tracking-wider">PROGRAMS: B.TECH (IT) • M.TECH (IT) • MCA • M.SC (CS) • PH.D</span>
            <span className="mx-4 text-primary">★</span>
            <span className="mx-8 font-heading text-lg font-bold tracking-wider">INDUSTRY-ORIENTED CURRICULUM</span>
            <span className="mx-4 text-secondary">★</span>
            <span className="mx-8 font-heading text-lg font-bold tracking-wider">INTERDISCIPLINARY RESEARCH</span>
            <span className="mx-4 text-accent">★</span>
            <span className="mx-8 font-heading text-lg font-bold tracking-wider">STATE-OF-THE-ART LABORATORIES</span>
            <span className="mx-4 text-primary">★</span>
            <span className="mx-8 font-heading text-lg font-bold tracking-wider">ESTABLISHED 2018-19</span>
            <span className="mx-4 text-accent">★</span>
            <span className="mx-8 font-heading text-lg font-bold tracking-wider">PROGRAMS: B.TECH (IT) • M.TECH (IT) • MCA • M.SC (CS) • PH.D</span>
            <span className="mx-4 text-secondary">★</span>
          </div>
        </div>

      </div>
    </section>
  );
}
