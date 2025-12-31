
import Constellation from '../../components/canvas/Constellation';

const AboutSection = () => {
    return (
        <section className="relative min-h-screen w-full flex items-center justify-center py-24 px-6 md:px-24 z-10">
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                {/* Visual/Field Column */}
                <div className="relative group w-full h-[500px] md:h-auto md:aspect-square">
                    {/* Background Ambience */}
                    <div className="absolute -inset-10 bg-cyan-500/5 blur-3xl opacity-20 pointer-events-none" />

                    {/* Main Field Container - Not a box, but a region */}
                    <div className="relative w-full h-full border-l border-white/10 bg-gradient-to-r from-white/[0.02] to-transparent overflow-hidden">

                        {/* Interactive Constellation Field */}
                        <div className="absolute inset-0 opacity-60 mix-blend-screen">
                            <Constellation fullscreen={false} />
                        </div>

                        {/* Minimal Data Overlay */}
                        <div className="absolute top-6 left-6 z-20">
                            <h3 className="text-[10px] text-cyan-400/60 tracking-[0.3em] font-mono mb-2">FIELD STATUS</h3>
                            <div className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
                                <span className="text-xs text-white/40 font-mono tracking-widest">OBSERVING</span>
                            </div>
                        </div>

                        {/* Scanner Line Effect */}
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent -translate-y-full hover:translate-y-[200%] transition-transform duration-[3s] ease-in-out pointer-events-none" />

                        {/* Bottom Metric */}
                        <div className="absolute bottom-6 left-6 z-20 font-mono text-[10px] text-white/20 tracking-[0.2em]">
                            COORDINATES: UNKNOWN
                        </div>
                    </div>
                </div>

                {/* Text Content Column */}
                <div className="space-y-10 text-left pl-0 md:pl-10">
                    {/* 1. Revised Title: SYSTEM CONTEXT */}
                    <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight">
                        <span className="text-cyan-500/80 mr-4">/</span>
                        SYSTEM CONTEXT
                    </h2>

                    <div className="space-y-6 text-sm md:text-base leading-loose text-zinc-400 font-light tracking-wide">
                        <p>
                            <strong className="text-white font-normal">INTERPOINT</strong> is an observational system focused on relationships rather than objects.
                            It does not define meaning — it reveals how meaning emerges through distance, proximity, and alignment.
                        </p>
                        <p>
                            There is no center, no hierarchy, and no fixed structure.
                            Each point exists independently, yet significance forms only in relation to others.
                        </p>
                        <p>
                            INTERPOINT does not guide interpretation or provide conclusions.
                            It exists as a field for observation, where patterns are inferred rather than explained.
                        </p>
                        <div className="pt-4 border-l border-cyan-500/20 pl-6">
                            <p className="text-cyan-200/80 italic text-sm">
                                "What matters is not the point itself, but what happens between."
                            </p>
                        </div>
                    </div>

                    {/* 3. Revised CTA: Passive Status Indicator */}
                    <div className="pt-8">
                        <div className="inline-flex items-center gap-4 py-2 pr-6 border-b border-white/5">
                            <div className="flex space-x-1">
                                <span className="w-1 h-3 bg-cyan-500/80 animate-[pulse_1s_ease-in-out_infinite]" />
                                <span className="w-1 h-3 bg-cyan-500/60 animate-[pulse_1s_ease-in-out_0.2s_infinite]" />
                                <span className="w-1 h-3 bg-cyan-500/40 animate-[pulse_1s_ease-in-out_0.4s_infinite]" />
                            </div>
                            <span className="text-[10px] tracking-[0.2em] text-white/40 font-mono uppercase">
                                Auto-Scan In Progress
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutSection;
