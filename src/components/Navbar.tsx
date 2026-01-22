import { useState, useEffect } from "react";
import { Menu, X, Building2 } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (href: string) => {
    setIsOpen(false);

    if (!href.includes("#")) {
      navigate(href);
      window.scrollTo(0, 0);
      return;
    }

    const [path, hash] = href.split("#");

    if (location.pathname !== path) {
      navigate(href);
      return;
    }

    const element = document.getElementById(hash);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  // Helper for scroll restoration
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b border-black/5 dark:border-white/10 transition-all duration-300 ${isScrolled ? "bg-white/70 dark:bg-black/70 backdrop-blur-xl" : "bg-background/90 backdrop-blur-md"
        }`}
    >
      <div className="container flex h-16 items-center justify-between max-w-screen-xl mx-auto px-4 md:px-6">
        {/* Branding */}
        <a
          href="/"
          className="flex items-center gap-2 font-heading text-lg font-semibold text-foreground tracking-tight hover:opacity-80 transition-opacity mr-4"
          onClick={(e) => {
            e.preventDefault();
            handleNavigation("/");
          }}
        >
          <span className="hidden sm:inline">INFORMATION TECHNOLOGY & COMPUTER APPLICATIONS</span>
          <span className="sm:hidden font-bold">IT&CA</span>
        </a>

        {/* Desktop Navigation - Shadcn Style */}
        <div className="hidden md:flex flex-1 justify-end">
          <NavigationMenu>
            <NavigationMenuList>

              {/* Department Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">Department</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md cursor-pointer"
                          onClick={(e) => { e.preventDefault(); handleNavigation("/"); }}
                        >
                          <Building2 className="h-6 w-6" />
                          <div className="mb-2 mt-4 text-lg font-medium">IT & CA</div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Excellence in technological education and research.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/#about" title="About Us" onClick={() => handleNavigation("/#about")}>
                      Learn about our history and goals.
                    </ListItem>
                    <ListItem href="/#vision-mission" title="Vision & Mission" onClick={() => handleNavigation("/#vision-mission")}>
                      Our core values and future outlook.
                    </ListItem>
                    <ListItem href="/leadership" title="Leadership" onClick={() => handleNavigation("/leadership")}>
                      Meet our Head of Department.
                    </ListItem>
                    <ListItem href="/faculty" title="Faculty" onClick={() => handleNavigation("/faculty")}>
                      Distinguished professors and staff.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Academics Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">Academics</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    <ListItem href="/programs" title="All Programs" onClick={() => handleNavigation("/programs")}>
                      Explore UG, PG, and PhD courses.
                    </ListItem>
                    <ListItem href="/programs" title="Undergraduate" onClick={() => handleNavigation("/programs")}>
                      B.Tech in Information Technology.
                    </ListItem>
                    <ListItem href="/programs" title="Postgraduate" onClick={() => handleNavigation("/programs")}>
                      M.Tech, MCA, and M.Sc programs.
                    </ListItem>
                    <ListItem href="/programs" title="Research" onClick={() => handleNavigation("/programs")}>
                      Ph.D opportunities in Engineering & Science.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Simple Links */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), "bg-transparent cursor-pointer")}
                  onClick={() => handleNavigation("/#events")}
                >
                  Events
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), "bg-transparent cursor-pointer")}
                  onClick={() => handleNavigation("/#contact")}
                >
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors ml-4"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full h-[calc(100vh-4rem)] bg-background/95 backdrop-blur-2xl border-t border-border/50 animate-in slide-in-from-top-2 duration-200">
          <nav className="container py-6 flex flex-col space-y-2 px-6 overflow-y-auto">
            <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2 mt-2">Department</div>
            <MobileLink onClick={() => handleNavigation("/#about")}>About Us</MobileLink>
            <MobileLink onClick={() => handleNavigation("/#vision-mission")}>Vision & Mission</MobileLink>
            <MobileLink onClick={() => handleNavigation("/leadership")}>Leadership</MobileLink>
            <MobileLink onClick={() => handleNavigation("/faculty")}>Faculty</MobileLink>

            <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2 mt-6">Academics</div>
            <MobileLink onClick={() => handleNavigation("/programs")}>Programs</MobileLink>

            <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2 mt-6">Connect</div>
            <MobileLink onClick={() => handleNavigation("/#events")}>Events</MobileLink>
            <MobileLink onClick={() => handleNavigation("/#contact")}>Contact</MobileLink>
          </nav>
        </div>
      )}
    </header>
  );
}

const ListItem = ({ className, title, children, href, onClick, ...props }: any) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer",
            className
          )}
          onClick={(e) => {
            e.preventDefault();
            if (onClick) onClick();
          }}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
}

const MobileLink = ({ children, onClick }: { children: React.ReactNode, onClick: () => void }) => (
  <button
    className="flex w-full items-center justify-between text-left py-3 text-lg font-medium text-foreground border-b border-border/40 hover:text-primary transition-colors"
    onClick={onClick}
  >
    {children}
  </button>
);
