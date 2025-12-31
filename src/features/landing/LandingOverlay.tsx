
import { useEffect, useState } from 'react';

const LandingOverlay = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <>
            <main className="z-10 flex flex-col items-center justify-center w-full h-full pointer-events-none px-6">
                <div className={`flex flex-col items-center transition-all duration-1000 ease-out transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    {/* Main Title with Glitch/Glow potential */}
                    <h1 className="text-5xl md:text-8xl font-bold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 mb-8 drop-shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                        INTERPOINT
                    </h1>

                    {/* Decorative Line */}
                    <div className="flex items-center gap-4 mb-8 opacity-50">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-400" />
                        <div className="w-1.5 h-1.5 rotate-45 border border-cyan-400" />
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-400" />
                    </div>

                    {/* Subtext */}
                    <p className="font-mono text-xs md:text-sm tracking-[0.15em] text-cyan-100/60 text-center max-w-lg leading-loose mb-12">
                        DISTRIBUTED INTELLIGENCE FIELD<br />
                        <span className="text-cyan-400">NO CENTRAL ORIGIN</span>
                    </p>

                    {/* Action Buttons */}
                    <div className="flex gap-6 pointer-events-auto">
                        <SocialButton href="#" label="X / TERMINAL" />
                        <SocialButton href="#" label="PUMP.FUN" />
                    </div>
                </div>
            </main>

            {/* Status Footer */}
            <div className="absolute bottom-10 left-0 w-full flex justify-between px-12 text-[10px] tracking-[0.2em] text-white/20 font-mono pointer-events-none uppercase">
                <div className="flex gap-4">
                    <span>SYSTEM: ONLINE</span>
                    <span className="animate-pulse text-cyan-400">●</span>
                </div>
                <div>COORDINATES: UNKNOWN</div>
            </div>
        </>
    );
};

const SocialButton = ({ href, label }: { href: string; label: string }) => (
    <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="group relative px-8 py-3 bg-black/50 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden"
    >
        <div className="absolute inset-0 bg-cyan-400/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
        <span className="relative font-mono text-xs tracking-[0.2em] text-white/70 group-hover:text-cyan-300 transition-colors">
            {label}
        </span>

        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-white/30 group-hover:border-cyan-400 transition-colors" />
        <div className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-white/30 group-hover:border-cyan-400 transition-colors" />
    </a>
);

export default LandingOverlay;
