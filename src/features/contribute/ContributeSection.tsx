
import { useState } from 'react';

const ContributeSection = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <div className="relative w-full py-32 flex flex-col items-center justify-center text-center px-6">

            {/* Top Star Icon */}
            <div className="mb-8 text-cyan-400 animate-pulse-slow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="2" x2="12" y2="22" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                    <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
                </svg>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl font-normal tracking-[0.1em] text-white mb-6 font-mono">
                Contribute to the Constellation
            </h2>

            {/* Subtext */}
            <p className="max-w-2xl text-zinc-400 text-sm md:text-base leading-relaxed tracking-wider mb-12 font-mono">
                The field grows with each observation. If you have data to weave
                into the branches, or wish to explore the network yourself,
                initialize the link.
            </p>

            {/* Action Button */}
            <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex items-center justify-center px-8 py-4 transition-all duration-300"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                {/* Button Glow Background */}
                <div className={`absolute inset-0 bg-cyan-900/20 blur-xl transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`} />

                {/* Button Container */}
                <div className="relative z-10 flex items-center gap-4 text-cyan-400 font-mono tracking-[0.2em] text-sm group-hover:text-cyan-300 transition-colors">
                    <span>[</span>
                    <span className={`relative transition-all duration-300 ${hovered ? 'tracking-[0.3em] text-white' : ''}`}>
                        X
                    </span>
                    <span>]</span>
                </div>

                {/* Border Container (Optional for 'boxed' look, but image shows minimal brackets) */}
                <div className={`absolute inset-0 border border-cyan-500/30 transition-all duration-500 ${hovered ? 'scale-105 border-cyan-400/60' : 'scale-100'}`} />
            </a>

        </div>
    );
};

export default ContributeSection;
