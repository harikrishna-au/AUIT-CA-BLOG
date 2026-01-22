import { MapPin, Mail, Phone, ExternalLink, ArrowUpRight } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const quickLinks = [
  { label: "About", href: "/#about", type: "scroll" },
  { label: "Leadership", href: "/leadership", type: "route" },
  { label: "Faculty", href: "/faculty", type: "route" },
  { label: "Programs", href: "/programs", type: "route" },
  { label: "Events", href: "/events", type: "route" },
];

export function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (href: string, type: string) => {
    if (type === "route") {
      navigate(href);
      window.scrollTo(0, 0);
    } else {
      // Handle scroll type
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const id = href.split("#")[1];
          const element = document.getElementById(id);
          if (element) element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const id = href.split("#")[1];
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer id="contact" className="bg-black text-white border-t-2 border-black">
      <div className="container">

        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-b-2 border-white/20">

          {/* Brand Block */}
          <div className="lg:col-span-5 p-12 border-b-2 lg:border-b-0 lg:border-r-2 border-white/20">
            <h3 className="font-heading text-3xl font-bold uppercase mb-6 leading-none">
              Dept. IT & CA<br />
            </h3>
            <p className="font-mono text-xs text-white/60 mb-8 max-w-sm">
              A.U. College of Engineering (A)<br />
              Andhra University, Visakhapatnam
            </p>
            <div className="inline-block border border-white px-4 py-2 font-mono text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors cursor-default">
              EST. 2018-19
            </div>
          </div>

          {/* Contact Block */}
          <div className="lg:col-span-4 p-12 border-b-2 lg:border-b-0 lg:border-r-2 border-white/20 bg-accent/5">
            <h4 className="font-heading text-xl font-bold uppercase mb-6 text-accent">Contact Base</h4>
            <div className="space-y-6 font-mono text-sm">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-accent shrink-0" />
                <span className="opacity-80">
                  Andhra University Campus,<br />
                  Visakhapatnam - 530003
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span className="opacity-80">hod.itca@andhrauniversity.edu.in</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span className="opacity-80">+91 891 2844000</span>
              </div>
            </div>
          </div>

          {/* Links Block */}
          <div className="lg:col-span-3 p-12 bg-primary/10">
            <h4 className="font-heading text-xl font-bold uppercase mb-6 text-primary">Navigation</h4>
            <nav className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavigation(link.href, link.type)}
                  className="text-left font-mono text-sm uppercase hover:text-primary hover:tracking-widest transition-all flex items-center justify-between group border-b border-white/10 pb-2"
                >
                  {link.label}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="p-8 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-xs text-white/40">
          <p>
            © {new Date().getFullYear()} DEPT IT & CA. ALL RIGHTS RESERVED.
          </p>
          <a
            href="https://www.andhrauniversity.edu.in"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            ANDHRA UNIVERSITY MAIN SITE
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
