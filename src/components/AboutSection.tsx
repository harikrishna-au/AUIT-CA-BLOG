import { Brain, Database, Cloud, Code2 } from "lucide-react";

const domains = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description: "Machine learning, neural networks, and intelligent systems research",
  },
  {
    icon: Database,
    title: "Data Science",
    description: "Big data analytics, data mining, and statistical computing",
  },
  {
    icon: Code2,
    title: "Software Systems",
    description: "Software engineering, distributed systems, and application development",
  },
  {
    icon: Cloud,
    title: "Cloud & Emerging Tech",
    description: "Cloud computing, IoT, and next-generation technologies",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            About the Department
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Established in 2018-19, the Department of Information Technology & Computer Applications 
            at Andhra University is committed to producing industry-ready professionals through a 
            balanced emphasis on theoretical foundations and practical applications. Our programs 
            are designed around outcome-based education principles, fostering innovation and research 
            in emerging technological domains.
          </p>
        </div>

        {/* Domain cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {domains.map((domain, index) => (
            <div
              key={domain.title}
              className="group p-6 rounded-xl bg-card border border-border/50 shadow-card hover:shadow-lg hover:border-accent/30 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <domain.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {domain.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {domain.description}
              </p>
            </div>
          ))}
        </div>

        {/* Key points */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">6+</div>
            <div className="text-muted-foreground">Years of Excellence</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">5+</div>
            <div className="text-muted-foreground">Academic Programs</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">9+</div>
            <div className="text-muted-foreground">Expert Faculty</div>
          </div>
        </div>
      </div>
    </section>
  );
}
