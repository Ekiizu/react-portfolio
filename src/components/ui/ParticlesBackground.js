import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                fullScreen: { enable: true },
                particles: {
                    number: {
                        value: 50,
                    },
                    color: {
                        value:  ["#f599b1", "b6f3a3"],
                    },
                    shape: {
                        type: "circle",
                    },
                    opacity: {
                        value: 1,
                    },
                    size: {
                        value: { min: 2, max: 5 },
                    },
                    move: {
                        enable: true,
                        speed: 2,
                        direction: "bottom",
                        outModes: {
                            default: "out",
                        },
                    },
                },
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "grab",
                        },
                    },
                },
            }}
        />
    );
};

export default ParticlesBackground;
