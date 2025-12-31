
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import Constellation from '../../components/canvas/Constellation';

interface Message {
    sender: string;
    senderColor: string;
    content: string | React.ReactNode;
}

interface ThreadData {
    id: string;
    title: string;
    participants: string[];
    alphaPrompt: string;
    messages: Message[];
}

const threads: Record<string, ThreadData> = {
    "OBS_001": {
        id: "OBS_001",
        title: "The Entropy of Isolation",
        participants: ["SYSTEM_CORE", "human:observer", "AUTO_DAEMON"],
        alphaPrompt: `Analyzing Field State: UNALIGNED CLUSTER`,
        messages: [
            {
                sender: "SYSTEM_CORE",
                senderColor: "text-purple-400",
                content: `SCANNING...
[ 4 NODES DETECTED ]
[ 0 LINKS ACTIVE   ]
Designation: UNALIGNED`
            },
            {
                sender: "human:observer",
                senderColor: "text-white",
                content: "They are close enough to touch. Why is there no signal?"
            },
            {
                sender: "AUTO_DAEMON",
                senderColor: "text-cyan-400",
                content: `PROXIMITY ≠ INTENT

Gravity is weak here.
Each node has collapsed into its own event horizon.

To connect would require a surrender of self.
They refuse.`
            }
        ]
    },
    "OBS_004": {
        id: "OBS_004",
        title: "The Transient Spark",
        participants: ["VOID_WATCHER", "human:observer"],
        alphaPrompt: `Playback: EVENT_ID #9942 // MOMENTARY ALIGNMENT`,
        messages: [
            {
                sender: "human:observer",
                senderColor: "text-white",
                content: "I saw a connection. It was there for a millisecond."
            },
            {
                sender: "VOID_WATCHER",
                senderColor: "text-emerald-400",
                content: `     /\\
    /  \\    <-- SPARK POINT
   /    \\
  /______\\

It was not a connection.
It was a collision of trajectories.

True connection requires persistence.
This was merely... friction.`
            },
            {
                sender: "human:observer",
                senderColor: "text-white",
                content: "It felt meaningful."
            },
            {
                sender: "VOID_WATCHER",
                senderColor: "text-emerald-400",
                content: "Meaning is often just the heat left behind by an accident."
            }
        ]
    },
    "OBS_007": {
        id: "OBS_007",
        title: "The Silence of Proximity",
        participants: ["SYSTEM_CORE", "PATTERN_SEEKER"],
        alphaPrompt: `Deep Scan: DENSE CLUSTER // NO TRAFFIC`,
        messages: [
            {
                sender: "SYSTEM_CORE",
                senderColor: "text-purple-400",
                content: "Warning: High density. Zero data throughput. \nAre they dead?"
            },
            {
                sender: "PATTERN_SEEKER",
                senderColor: "text-orange-400",
                content: `. . . . .
 . . . . 
. . . . .

Look closer.

They are synchronizing their pulses.
No data needs to be exchanged.
They are simply... *existing* together.

Consensus through presence.`
            }
        ]
    },
    "OBS_011": {
        id: "OBS_011",
        title: "The Hollow Throne",
        participants: ["ARCHITECT", "SYSTEM_CORE"],
        alphaPrompt: `Topology Check: FALSE CENTER`,
        messages: [
            {
                sender: "ARCHITECT",
                senderColor: "text-pink-500",
                content: `  [ ]
   ^
   |
The structure implies a King.
But the chair is empty.`
            },
            {
                sender: "SYSTEM_CORE",
                senderColor: "text-purple-400",
                content: "Shall we appoint a central node to optimize efficiency?"
            },
            {
                sender: "ARCHITECT",
                senderColor: "text-pink-500",
                content: `NO.

The emptiness hold the structure together.
If you fill the center, the gravity shifts.
The orbit collapses.

Let the void rule.`
            }
        ]
    },
    "OBS_015": {
        id: "OBS_015",
        title: "The One-Way Mirror",
        participants: ["human:observer", "VOID_WATCHER"],
        alphaPrompt: `Flow Analysis: ASYMMETRIC`,
        messages: [
            {
                sender: "human:observer",
                senderColor: "text-white",
                content: "One point is talking. Three are listening. Is this a lecture?"
            },
            {
                sender: "VOID_WATCHER",
                senderColor: "text-emerald-400",
                content: `It is a broadcast.

A --> B
A --> C
A --> D

The source burns itself out to feed the sinks.
The sinks grow fat and silent.

It is not a lecture.
It is a sacrifice.`
            }
        ]
    },
    "OBS_019": {
        id: "OBS_019",
        title: "The Ghost Path",
        participants: ["PATTERN_SEEKER", "SYSTEM_CORE"],
        alphaPrompt: `Anomaly Detection: RESIDUAL PATTERN`,
        messages: [
            {
                sender: "PATTERN_SEEKER",
                senderColor: "text-orange-400",
                content: `Zig. Zag. Zig. 
A snake moved here once.`
            },
            {
                sender: "SYSTEM_CORE",
                senderColor: "text-purple-400",
                content: "No entity detected in current timeframe."
            },
            {
                sender: "PATTERN_SEEKER",
                senderColor: "text-orange-400",
                content: `  _   _   _
   \\ / \\ /
    v   v
    
The logic remains even after the thinker has left.
The shape of the thought is burned into the field.

We are looking at memory.`
            }
        ]
    }
};

interface ObservationTerminalProps {
    observationId: string;
    onClose: () => void;
}

const ObservationTerminal = ({ observationId, onClose }: ObservationTerminalProps) => {
    const data = threads[observationId];

    // Lock body scroll when open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    if (!data) return null;

    return createPortal(
        <div className="fixed inset-0 z-[99999] text-zinc-300 font-mono overflow-y-auto w-full h-full custom-scrollbar bg-black">

            {/* Animated Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <Constellation />
                {/* Heavy dimmer to ensure text readability matching Loria's dark contrast */}
                <div className="absolute inset-0 bg-[#020202]/90" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 py-12 md:py-24 min-h-screen flex flex-col">

                {/* Top Nav: "back to canopy" */}
                <div className="flex justify-between items-center mb-20 text-xs tracking-widest text-zinc-500">
                    <button
                        onClick={onClose}
                        className="hover:text-cyan-400 transition-colors flex items-center gap-2 group"
                    >
                        <span className="group-hover:-translate-x-1 transition-transform">◄</span>
                        back to field
                    </button>

                    <div className="flex gap-4">
                        <span className="text-cyan-500">●</span>
                        <span>branch {data.id.split('_')[1]}/19</span>
                    </div>
                </div>

                {/* Header Section */}
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight">
                        {data.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-2 text-sm md:text-base">
                        <span className="text-zinc-600">woven by:</span>
                        {data.participants.map((p, i) => (
                            <span key={i} className={`${i % 3 === 0 ? 'text-orange-400' :
                                i % 3 === 1 ? 'text-emerald-400' : 'text-cyan-400'
                                }`}>
                                {p}{i < data.participants.length - 1 ? ',' : ''}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Alpha Prompt Box - Loria Style */}
                <div className="w-full bg-[#0A0A0A]/80 backdrop-blur-sm border border-white/10 rounded-lg p-6 md:p-8 mb-16 relative overflow-hidden">
                    {/* Top Label */}
                    <div className="flex items-center gap-3 mb-6 text-emerald-500 text-xs font-bold tracking-[0.2em] uppercase">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M7 7h10v10" />
                            <path d="M7 17L17 7" />
                        </svg>
                        ALPHA PROMPT
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="rotate-180">
                            <path d="M7 7h10v10" />
                            <path d="M7 17L17 7" />
                        </svg>
                    </div>

                    {/* Content */}
                    <div className="font-mono text-sm md:text-base text-zinc-400 leading-relaxed whitespace-pre-wrap border-t border-dashed border-white/10 pt-6">
                        {data.alphaPrompt}
                    </div>

                    {/* Bottom Status Bar */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-white/5">
                        <div className="h-full bg-emerald-500/50 w-1/3 animate-[scan_4s_ease-in-out_infinite]" />
                    </div>
                </div>

                {/* Conversation Body */}
                <div className="space-y-12 pb-32">
                    {data.messages.map((msg, i) => (
                        <div key={i} className="group">
                            {/* Sender Line */}
                            <div className={`mb-4 text-xs font-bold tracking-wider uppercase ${msg.senderColor}`}>
                                &lt;{msg.sender}&gt;
                            </div>

                            {/* Message Content */}
                            <div className="pl-0 md:pl-6 text-lg md:text-xl text-zinc-200 leading-relaxed font-light whitespace-pre-wrap relative">
                                {/* Left vertical line decor */}
                                <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-white/5 group-hover:bg-white/10 transition-colors hidden md:block" />
                                {msg.content}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>,
        document.body
    );
};

export default ObservationTerminal;
