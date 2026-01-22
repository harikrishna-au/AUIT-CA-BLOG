import { useRef } from "react";
import { Target, Lightbulb, ShieldCheck } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

gsap.registerPlugin(ScrollTrigger);

export function VisionMissionSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const cards = gsap.utils.toArray<HTMLElement>(".vision-card");

        gsap.fromTo(cards,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-12 md:py-16 bg-secondary/20">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Vision */}
                    <Card className="vision-card border-border/50 shadow-sm hover:shadow-md transition-all">
                        <CardHeader className="pb-2">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                <Lightbulb className="w-6 h-6 text-primary" />
                            </div>
                            <CardTitle className="text-2xl font-bold text-foreground">Vision</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground leading-relaxed">
                                Create New Frontiers of Knowledge in Quest for Development of The Humane and Just Society.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Mission */}
                    <Card className="vision-card border-border/50 shadow-sm hover:shadow-md transition-all">
                        <CardHeader className="pb-2">
                            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                                <Target className="w-6 h-6 text-accent" />
                            </div>
                            <CardTitle className="text-2xl font-bold text-foreground">Mission</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-3 text-muted-foreground">
                                <li className="flex gap-2">
                                    <span className="text-accent font-bold">•</span>
                                    <span>To stimulate the academic for promotion of quality of teaching, learning and research.</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-accent font-bold">•</span>
                                    <span>To undertake quality-related research studies, consultancy and training programmes.</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-accent font-bold">•</span>
                                    <span>To foster global competencies among students and to inculcate value system in them.</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-accent font-bold">•</span>
                                    <span>To promote the use of state-of-the-art technology and quest for excellence.</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Quality Policy */}
                    <Card className="vision-card border-border/50 shadow-sm hover:shadow-md transition-all">
                        <CardHeader className="pb-2">
                            <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-4">
                                <ShieldCheck className="w-6 h-6 text-green-600" />
                            </div>
                            <CardTitle className="text-2xl font-bold text-foreground">Quality Policy</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4 text-muted-foreground">
                                Andhra University is committed to achieving excellence in teaching, research and consultancy:
                            </p>
                            <ul className="space-y-2 text-muted-foreground">
                                <li className="flex gap-2">
                                    <span className="text-green-600 font-bold">•</span>
                                    <span>By imparting globally focused education</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-green-600 font-bold">•</span>
                                    <span>By creating world class professionals</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-green-600 font-bold">•</span>
                                    <span>By establishing synergic relationships with industry and society</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-green-600 font-bold">•</span>
                                    <span>By developing state-of-the-art infrastructure and well-endowed faculty</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-green-600 font-bold">•</span>
                                    <span>By imparting knowledge through team work and incessant efforts</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
