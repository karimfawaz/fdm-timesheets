import Particles from "react-tsparticles"

const BackgroundParticles = () => {
  return (
    <Particles
    options={{
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },

          resize: true,
        },
        modes: {

          push: {
            quantity: 2,
          },

        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        // collisions: {
        //   enable: true,
        // },
        move: {
          direction: "none",
          enable: true,
          outMode: "bounce",
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 1000,
          },
          value: 100,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "star",
          
        },
        size: {
          random: true,
          value: 5,
        },
      },

    }} />
  )
}

export default BackgroundParticles