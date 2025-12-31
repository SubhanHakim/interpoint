
const Footer = () => {
    return (
        <footer className="w-full border-t border-white/5 bg-black/80 backdrop-blur-sm z-50 relative">
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

                {/* Left: System Status */}
                <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse" />
                    <span className="font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase">
                        System Active <span className="text-white/10 mx-2">|</span> ID: 0x92...8A
                    </span>
                </div>

                {/* Right: Minimal Links */}
                <div className="flex items-center gap-8">
                    <MinimalLink href="https://x.com" label="X / TERMINAL" />
                    <MinimalLink href="https://pump.fun" label="PUMP.FUN" />
                </div>
            </div>
        </footer>
    );
};

const MinimalLink = ({ href, label }: { href: string; label: string }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[10px] font-mono tracking-[0.15em] text-zinc-500 hover:text-cyan-400 transition-colors duration-300 uppercase"
    >
        {label}
    </a>
);

export default Footer;
