import { MapPin, Mail, Phone, ExternalLink } from "lucide-react";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Leadership", href: "#leadership" },
  { label: "Faculty", href: "#faculty" },
  { label: "Programs", href: "#programs" },
  { label: "Events", href: "#events" },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Department Info */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-4">
              Department of IT & Computer Applications
            </h3>
            <p className="text-primary-foreground/70 mb-4 leading-relaxed">
              A.U. College of Engineering (A)<br />
              Andhra University, Visakhapatnam
            </p>
            <p className="text-sm text-primary-foreground/60">
              Established in 2018-19, committed to excellence in education and research 
              in Information Technology and Computer Applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/70">
                  Andhra University Campus,<br />
                  Visakhapatnam, Andhra Pradesh,<br />
                  India - 530003
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/70">
                  hod.itca@andhrauniversity.edu.in
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/70">
                  +91 891 2844000
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Department of IT & Computer Applications, Andhra University. 
              All rights reserved.
            </p>
            <a
              href="https://www.andhrauniversity.edu.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              Andhra University
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
