
const ConnectSection = () => {
    return (
        <section className="relative w-full py-48 px-6 flex flex-col items-center justify-center z-10">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-900/10 blur-[100px] rounded-full pointer-events-none" />

            {/* Icon */}
            <div className="mb-12 text-cyan-400 animate-pulse">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="4" r="2" fill="currentColor" stroke="none" />
                    <circle cx="4" cy="20" r="2" fill="currentColor" stroke="none" />
                    <circle cx="20" cy="20" r="2" fill="currentColor" stroke="none" />
                    <path d="M12 4L4 20M12 4L20 20M4 20H20" opacity="0.5" />
                </svg>
            </div>

            {/* Headline */}
            <h2 className="text-3xl md:text-5xl font-mono text-white tracking-tight mb-8 text-center">
                EXPAND THE FIELD
            </h2>

            {/* Subtext */}
            <p className="max-w-xl text-center text-zinc-400 text-sm md:text-base leading-loose tracking-wide mb-12 font-light">
                The constellation is not static. It requires observers to collapse the wave function.
                If you wish to weave your signals into the network or explore the grid yourself, establish a link.
            </p>

            {/* CTA Button */}
            <button className="group relative px-8 py-4 bg-transparent border border-cyan-500/30 hover:border-cyan-400 transition-colors duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-cyan-900/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />

                <span className="relative font-mono text-xs tracking-[0.25em] text-cyan-400 group-hover:text-cyan-200 transition-colors">
                    [ ESTABLISH LINK ]
                </span>

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-500/50" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-500/50" />
            </button>

            {/* Footer decoration */}
            <div className="mt-24 w-full max-w-xs h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </section>
    );
};

export default ConnectSection;
