import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useMediaQuery } from '@react-hook/media-query';

function Particle() {
const columns = useMediaQuery('(min-width: 768px)') ? 10 : 4;

const particlesInit = async (main) => {
    console.log(main);
   await loadFull(main )
}
const particlesLoaded = (container) => {
    console.log(container);
}

return ( 
    <Particles  className='particles-div' id='tsparticles' init={particlesInit}
    loaded={particlesLoaded}

    options={{
        "fullScreen": {
            "enable": true,
        },
        "particles": {
            "number": {
                "value": columns,
                "density": {
                    "enable": false,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ca8a04"
            },
            "shape": {
                "type": "square",
                "options": {
                    "sides": 5
                }
            },
            "opacity": {
                "value": 0.8,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 4,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 70,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "rotate": {
                "value": 0,
                "random": true, 
                "direction": "clockwise",
                "animation": {
                    "enable": true,
                    "speed": 5,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 600,
                "color": "#ca8a04",
                "opacity": 0.4,
                "width": 2
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",    
                "random": false,
                "straight": false,
                "out_mode": "out",
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": ["grab"]
                },
                "onclick": {
                    "enable": false,
                    "mode": "bubble"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true,
        "background": {
            "color": "inherit",
            "image": "",
            "position": "50% 50%",
            "repeat": "no-repeat",
            "size": "inherit"
        }
    }}
    />
)

}

export default Particle