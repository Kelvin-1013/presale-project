// pages/index.js
import Head from 'next/head';
import SaleNewsMd from './saleNewsMd';
import PresalePanel from './presalePanel';
import SaleNews from './saleNews';
import Particles from 'react-particles';
import { useCallback } from 'react';
import { loadFull } from 'tsparticles';

const particleOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: '#ffffff'
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000'
      },
      polygon: {
        nb_sides: 5
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#ffffff',
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'repulse'
      },
      onclick: {
        enable: true,
        mode: 'push'
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};

export default function page() {

  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);


  return (
    <div className="mt-[4rem] flex flex-col items-center justify-center min-h-screen text-white landing-page bg-gradient-to-r from-blue-900 to-purple-900">
      <Head>
        <title>$TMONK-PreSale</title>
        <meta name="description" content="Join the most promising meme coin of today!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="md:hidden">
        <SaleNewsMd />
      </div>
      <div className='flex items-center justify-between md:flex-row md:space-x-10 sm:m-0'>
         {/* <Particles
          id="tsparticles"
          init={particlesInit}
          options={particleOptions}
        /> */}
        <div className="hidden md:flex">
          <SaleNews />
        </div>
        <div className='flex flex-col items-center mx-auto '>
          <PresalePanel />
        </div>
      </div>
    </div>
  );
}
