
import ObservationTerminal from './ObservationTerminal';

interface ObservationNode {
    x: number;
    y: number;
}

interface Observation {
    id: string;
    title: string;
    description: string;
    nodes: ObservationNode[];
    connections: [number, number][]; // Indices of connected nodes
}

const observations: Observation[] = [
    {
        id: "OBS_001",
        title: "UNALIGNED CLUSTER",
        description: "Four points occupy the same field.\nDistances remain inconsistent.\nNo dominant relation detected.",
        nodes: [{ x: 20, y: 30 }, { x: 80, y: 20 }, { x: 30, y: 80 }, { x: 70, y: 70 }],
        connections: []
    },
    {
        id: "OBS_004",
        title: "MOMENTARY ALIGNMENT",
        description: "Two distant points briefly converge.\nA connection appears, then dissolves.\nNo persistence recorded.",
        nodes: [{ x: 30, y: 30 }, { x: 70, y: 70 }],
        connections: [[0, 1]]
    },
    {
        id: "OBS_007",
        title: "SILENT PROXIMITY",
        description: "Multiple nodes exist in close range.\nNo signal exchange observed.\nRelation inferred through distance alone.",
        nodes: [{ x: 45, y: 45 }, { x: 55, y: 40 }, { x: 50, y: 60 }, { x: 60, y: 55 }],
        connections: []
    },
    {
        id: "OBS_011",
        title: "FALSE CENTER",
        description: "Several relations suggest a focal point.\nSystem rejects centralization.\nStructure collapses back into distribution.",
        nodes: [{ x: 50, y: 20 }, { x: 80, y: 50 }, { x: 50, y: 80 }, { x: 20, y: 50 }],
        connections: [[0, 1], [1, 2], [2, 3], [3, 0]] // A hollow square/circle
    },
    {
        id: "OBS_015",
        title: "ASYMMETRIC RELATION",
        description: "One point influences multiple others.\nNo reciprocal alignment detected.\nBalance remains unresolved.",
        nodes: [{ x: 30, y: 50 }, { x: 70, y: 20 }, { x: 70, y: 50 }, { x: 70, y: 80 }],
        connections: [[0, 1], [0, 2], [0, 3]] // One point connected to three vertical ones
    },
    {
        id: "OBS_019",
        title: "RESIDUAL PATTERN",
        description: "Connections appear without clear cause.\nNo prior alignment recorded.\nPattern remains unexplained.",
        nodes: [{ x: 20, y: 20 }, { x: 50, y: 80 }, { x: 80, y: 30 }],
        connections: [[0, 2], [1, 2]] // Zigzag
    }
];

const NodeCluster = ({ nodes, connections }: { nodes: ObservationNode[], connections: [number, number][] }) => {
    return (
        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible pointer-events-none">
            {/* Connections - Subtle lines */}
            {connections.map(([start, end], i) => (
                <line
                    key={i}
                    x1={nodes[start].x}
                    y1={nodes[start].y}
                    x2={nodes[end].x}
                    y2={nodes[end].y}
                    className="stroke-cyan-500/20 stroke-[0.5] transition-all duration-700 group-hover:stroke-cyan-500/40"
                />
            ))}

            {/* Nodes */}
            {nodes.map((node, i) => (
                <g key={i}>
                    {/* Glow effect */}
                    <circle
                        cx={node.x}
                        cy={node.y}
                        r="8"
                        className="fill-cyan-500/0 group-hover:fill-cyan-500/10 transition-all duration-500"
                    />
                    {/* Core point */}
                    <circle
                        cx={node.x}
                        cy={node.y}
                        r="1.5"
                        className="fill-white/80 group-hover:fill-cyan-400 transition-colors duration-300"
                    />
                </g>
            ))}
        </svg>
    );
};

interface FieldGalleryProps {
    limit?: number;
    onViewAll?: () => void;
    activeId?: string | null;
    onSelect?: (id: string | null) => void;
}

const FieldGallery = ({ limit, onViewAll, activeId, onSelect }: FieldGalleryProps) => {
    const displayedObservations = limit ? observations.slice(0, limit) : observations;

    // Handle selection logic based on props availability
    const handleSelect = (id: string | null) => {
        if (onSelect) {
            onSelect(id);
        }
    };

    return (
        <section className="relative w-full py-32 px-6 md:px-12 z-10 bg-black/50 backdrop-blur-sm min-h-screen">
            {/* Section Header */}
            <div className="max-w-7xl mx-auto mb-24 flex items-end gap-6 border-b border-white/5 pb-8">
                <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white">
                    <span className="text-cyan-500/50 mr-4">/</span> FIELD
                </h2>
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">
                    Observed Relations {limit && `[Preview]`}
                </span>
            </div>

            {/* Gallery Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24">
                {displayedObservations.map((obs) => (
                    <div
                        key={obs.id}
                        className="group flex flex-col gap-6 cursor-pointer"
                        onClick={() => handleSelect(obs.id)}
                    >
                        {/* Visual Container */}
                        <div className="relative w-full aspect-square border border-white/5 bg-white/[0.01] group-hover:bg-white/[0.05] group-hover:border-cyan-500/20 transition-all duration-500 rounded-sm p-8">
                            <NodeCluster nodes={obs.nodes} connections={obs.connections} />

                            {/* Corner Markers */}
                            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/10 group-hover:border-cyan-500/50 transition-colors duration-500" />
                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/10 group-hover:border-cyan-500/50 transition-colors duration-500" />

                            {/* Access Indicator */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-xs font-mono tracking-[0.3em] text-cyan-400 bg-black/80 px-4 py-2 border border-cyan-500/30">
                                    [ ACCESS LOG ]
                                </span>
                            </div>
                        </div>

                        {/* Metadata */}
                        <div className="space-y-3 font-mono">
                            <div className="flex items-center justify-between text-[10px] tracking-[0.2em] text-cyan-500/60 uppercase">
                                <span>{obs.id}</span>
                                <span className="w-1 h-1 bg-cyan-500/0 group-hover:bg-cyan-500 rounded-full transition-colors duration-300" />
                            </div>

                            <h3 className="text-sm text-white/90 tracking-widest font-bold uppercase group-hover:text-cyan-400 transition-colors">
                                {obs.title}
                            </h3>

                            <p className="text-xs text-zinc-500 leading-relaxed font-light whitespace-pre-line group-hover:text-zinc-300 transition-colors duration-500">
                                {obs.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* View All Button */}
            {limit && onViewAll && (
                <div className="flex justify-center mt-24">
                    <button
                        onClick={onViewAll}
                        className="group flex items-center gap-4 text-xs tracking-[0.2em] text-white hover:text-cyan-400 transition-colors px-8 py-4 border border-white/10 hover:border-cyan-400/50"
                    >
                        ACCESS FULL ARCHIVE
                        <span className="text-cyan-500 group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                </div>
            )}

            {/* Terminal Modal */}
            {activeId && (
                <ObservationTerminal
                    observationId={activeId}
                    onClose={() => handleSelect(null)}
                />
            )}
        </section>
    );
};

export default FieldGallery;
