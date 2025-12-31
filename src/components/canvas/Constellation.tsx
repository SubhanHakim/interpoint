
import { useEffect, useRef } from 'react';
import type { Point } from '../../types/canvas';

interface ConstellationProps {
    fullscreen?: boolean;
    className?: string;
}

const Constellation = ({ fullscreen = true, className = "" }: ConstellationProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const updateDimensions = () => {
            if (fullscreen) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            } else if (canvas.parentElement) {
                canvas.width = canvas.parentElement.clientWidth;
                canvas.height = canvas.parentElement.clientHeight;
            }
        };

        updateDimensions();

        const points: Point[] = [];
        // Adjust density based on size
        const area = canvas.width * canvas.height;
        const pointCount = Math.floor(area / 20000) || 15; // Dynamic count based on area
        const connectionDistance = 150;
        const mouseDistance = 200;

        const mouse = { x: -1000, y: -1000 };

        // Initialize points
        for (let i = 0; i < pointCount; i++) {
            points.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 1.5 + 0.5,
            });
        }

        let animationFrameId: number;

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update and draw points
            points.forEach((point, i) => {
                // Move points
                point.x += point.vx;
                point.y += point.vy;

                // Bounce off edges
                if (point.x < 0 || point.x > canvas.width) point.vx *= -1;
                if (point.y < 0 || point.y > canvas.height) point.vy *= -1;

                // Draw point
                ctx.beginPath();
                ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
                ctx.fill();

                // Check connections with other points
                for (let j = i + 1; j < points.length; j++) {
                    const p2 = points[j];
                    const dx = point.x - p2.x;
                    const dy = point.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < connectionDistance) {
                        ctx.beginPath();
                        ctx.moveTo(point.x, point.y);
                        ctx.lineTo(p2.x, p2.y);
                        const opacity = 1 - dist / connectionDistance;
                        ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.2})`;
                        ctx.stroke();
                    }
                }

                // Check connection with mouse
                const dx = point.x - mouse.x;
                const dy = point.y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < mouseDistance) {
                    ctx.beginPath();
                    ctx.moveTo(point.x, point.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    const opacity = 1 - dist / mouseDistance;
                    ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.5})`;
                    ctx.stroke();

                    // Slight attraction to mouse
                    point.x -= dx * 0.01;
                    point.y -= dy * 0.01;
                }
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            updateDimensions();
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (fullscreen) {
                mouse.x = e.clientX;
                mouse.y = e.clientY;
            } else if (canvas) {
                const rect = canvas.getBoundingClientRect();
                mouse.x = e.clientX - rect.left;
                mouse.y = e.clientY - rect.top;
            }
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, [fullscreen]);

    return (
        <canvas
            ref={canvasRef}
            className={`${fullscreen ? 'fixed top-0 left-0 w-full h-full -z-10 bg-[#050505]' : 'absolute inset-0 w-full h-full bg-transparent'} ${className}`}
        />
    );
};

export default Constellation;
