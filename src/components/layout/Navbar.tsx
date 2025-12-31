
import { useState, useEffect } from 'react';

// Icons with basic animation readiness
const MenuIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
);

const CloseIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);

interface NavbarProps {
    active: string;
    onNavigate: (page: string) => void;
}

const Navbar = ({ active, onNavigate }: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            if (!mobile) setIsOpen(false);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleClick = (id: string) => {
        onNavigate(id);
        setIsOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-[100]">
            {/* Header / Top Bar - Ensure z-index is higher than overlay */}
            <div className="relative z-[102] flex items-center justify-between px-6 py-6 md:px-12 md:py-8 bg-gradient-to-b from-black/80 to-transparent">

                {/* LOGO */}
                <div
                    onClick={() => handleClick('home')}
                    className="flex items-center gap-3 cursor-pointer select-none group"
                >
                    <div className="text-cyan-400 group-hover:rotate-180 transition-transform duration-700 ease-in-out">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="5" r="2" fill="currentColor" stroke="none" />
                            <circle cx="5" cy="19" r="2" fill="currentColor" stroke="none" />
                            <circle cx="19" cy="19" r="2" fill="currentColor" stroke="none" />
                            <path d="M12 5L5 19M12 5L19 19M5 19H19" opacity="0.5" />
                        </svg>
                    </div>
                    <span className="font-mono font-bold tracking-[0.2em] text-sm text-white group-hover:text-cyan-400 transition-colors">
                        INTERPOINT
                    </span>
                </div>

                {/* DESKTOP MENU */}
                {!isMobile && (
                    <ul className="flex gap-12">
                        {[
                            { name: 'HOME', id: 'home' },
                            { name: 'ABOUT', id: 'about' },
                            { name: 'GALLERY', id: 'gallery' },
                        ].map((item) => (
                            <li key={item.name}>
                                <button
                                    onClick={() => handleClick(item.id)}
                                    className={`text-xs tracking-[0.1em] font-mono transition-colors
                                        ${active === item.id
                                            ? 'text-cyan-400'
                                            : 'text-zinc-500 hover:text-cyan-400'
                                        }`}
                                >
                                    {item.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                )}

                {/* MOBILE BUTTON */}
                {isMobile && (
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 text-white hover:text-cyan-400 transition-all active:scale-95"
                        aria-label="Toggle Menu"
                    >
                        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}>
                            {isOpen ? <CloseIcon /> : <MenuIcon />}
                        </div>
                    </button>
                )}
            </div>

            {/* MOBILE MENU OVERLAY */}
            <div
                className={`
                    fixed inset-0 bg-black/95 backdrop-blur-xl z-[101] flex flex-col items-center justify-center
                    transition-all duration-500 ease-in-out
                    ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-8'}
                `}
            >
                <ul className="flex flex-col items-center gap-10">
                    {[
                        { name: 'HOME', id: 'home' },
                        { name: 'ABOUT', id: 'about' },
                        { name: 'GALLERY', id: 'gallery' },
                    ].map((item, idx) => (
                        <li
                            key={idx}
                            className={`transform transition-all duration-500 delay-[${idx * 100}ms]
                                ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
                            `}
                        >
                            <button
                                onClick={() => handleClick(item.id)}
                                className={`text-2xl tracking-[0.2em] font-light font-mono uppercase transition-colors
                                    ${active === item.id ? 'text-cyan-400' : 'text-white/70 hover:text-white'}
                                `}
                            >
                                {item.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
