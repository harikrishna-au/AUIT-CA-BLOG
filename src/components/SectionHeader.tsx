import { cn } from "@/lib/utils";

interface SectionHeaderProps {
    title: string;
    highlight: string;
    description: string;
    tag: string;
    index: string;
    className?: string;
    align?: "left" | "center" | "right";
}

export function SectionHeader({
    title,
    highlight,
    description,
    tag,
    index,
    className,
}: SectionHeaderProps) {
    return (
        <div className={cn("mb-12", className)}>
            <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 border-b-[6px] border-black pb-8">

                {/* Left Block: Title */}
                <div className="relative">
                    {/* Floating Index Number - Background */}
                    <span className="absolute -top-12 -left-4 text-9xl font-heading font-bold text-muted/20 select-none z-0 pointer-events-none">
                        {index}
                    </span>

                    <div className="relative z-10">
                        <div className="inline-block bg-black text-white px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest mb-2">
                            {tag}
                        </div>
                        <h2 className="font-heading text-5xl md:text-7xl font-bold uppercase leading-[0.85] tracking-tight text-black">
                            {title} <br />
                            <span className="inline-block bg-primary text-white px-2 mt-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                                {highlight}
                            </span>
                        </h2>
                    </div>
                </div>

                {/* Right Block: Content */}
                <div className="max-w-md">
                    <p className="font-mono text-base md:text-lg leading-relaxed text-black font-medium border-l-8 border-secondary pl-6">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}
