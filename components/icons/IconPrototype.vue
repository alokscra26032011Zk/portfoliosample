<template>
  <svg
    id="prototype"
    width="80"
    height="80"
    viewBox="0 0 80 80"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <mask id="prototype__heromask">
        <rect
          width="62"
          height="18"
          x="9"
          y="29"
          rx="3"
          fill="#FFF"
        />
      </mask>
    </defs>
    <path
      id="prototype__diagonal1"
      stroke="#B3D6FF"
      stroke-linecap="round"
      stroke-width="2"
      stroke-dasharray="20 20"
      d="M 10 10 L 22 22"
      fill="none"
    />
    <path
      id="prototype__diagonal2"
      stroke="#B3D6FF"
      stroke-linecap="round"
      stroke-width="2"
      stroke-dasharray="20 20"
      d="M 22 10 L 10 22"
      fill="none"
    />
    <path
      id="prototype__diagonal3"
      stroke="#B3D6FF"
      stroke-linecap="round"
      stroke-width="2"
      stroke-dasharray="63 63"
      d="M 10 30 L 70 46"
      fill="none"
    />
    <path
      id="prototype__diagonal4"
      stroke="#B3D6FF"
      stroke-linecap="round"
      stroke-width="2"
      stroke-dasharray="63 63"
      d="M 70 30 L 10 46"
      fill="none"
    />
    <rect
      id="prototype__logo"
      width="14"
      height="14"
      x="9"
      y="9"
      stroke="#B3D6FF"
      stroke-linecap="round"
      stroke-width="2"
      stroke-dasharray="56 56"
      rx="2"
      fill="rgba(255,255,255,0)"
    />
    <circle
      id="prototype__image"
      cx="40"
      cy="88"
      r="44"
      fill="#B3D6FF"
      mask="url(#prototype__heromask)"
      opacity="0"
    />
    <rect
      id="prototype__hero"
      width="62"
      height="18"
      x="9"
      y="29"
      stroke="#B3D6FF"
      stroke-linecap="round"
      stroke-width="2"
      stroke-dasharray="160 160"
      rx="3"
      fill="none"
    />
    <rect
      id="prototype__text1"
      width="28"
      height="18"
      x="9"
      y="53"
      stroke="#B3D6FF"
      stroke-linecap="round"
      stroke-width="2"
      stroke-dasharray="92 92"
      rx="3"
      fill="none"
    />
    <rect
      id="prototype__text2"
      width="28"
      height="18"
      x="43"
      y="53"
      stroke="#B3D6FF"
      stroke-linecap="round"
      stroke-width="2"
      stroke-dasharray="92 92"
      rx="3"
      fill="none"
    />
    <g id="prototype__nav">
      <path
        id="prototype__nav1"
        stroke="#B3D6FF"
        stroke-linecap="round"
        stroke-width="2"
        stroke-dasharray="8 8"
        d="M 37 16 L 45 16"
        fill="none"
      />
      <path
        id="prototype__nav2"
        stroke="#B3D6FF"
        stroke-linecap="round"
        stroke-width="2"
        stroke-dasharray="6 6"
        d="M 51 16 L 57 16"
        fill="none"
      />
      <path
        id="prototype__nav3"
        stroke="#B3D6FF"
        stroke-linecap="round"
        stroke-width="2"
        stroke-dasharray="8 8"
        d="M 63 16 L 71 16"
        fill="none"
      />
    </g>
    <g id="prototype__textlines">
      <path
        id="prototype__textline1"
        stroke="#0076FF"
        stroke-linecap="round"
        stroke-width="2"
        d="M 9 55 L 29 55"
        stroke-dasharray="20 20"
        opacity="0"
        fill="none"
      />
      <path
        id="prototype__textline2"
        stroke="#0076FF"
        stroke-linecap="round"
        stroke-width="2"
        d="M 9 60 L 35 60"
        stroke-dasharray="26 26"
        opacity="0"
        fill="none"
      />
      <path
        id="prototype__textline3"
        stroke="#0076FF"
        stroke-linecap="round"
        stroke-width="2"
        d="M 9 65 L 19 65"
        stroke-dasharray="10 10"
        opacity="0"
        fill="none"
      />
      <path
        id="prototype__textline4"
        stroke="#0076FF"
        stroke-linecap="round"
        stroke-width="2"
        d="M 43 55 L 69 55"
        stroke-dasharray="26 26"
        opacity="0"
        fill="none"
      />
      <path
        id="prototype__textline5"
        stroke="#0076FF"
        stroke-linecap="round"
        stroke-width="2"
        d="M 43 60 L 60 60"
        stroke-dasharray="17 17"
        opacity="0"
        fill="none"
      />
      <path
        id="prototype__textline6"
        stroke="#0076FF"
        stroke-linecap="round"
        stroke-width="2"
        d="M 43 65 L 56 65"
        stroke-dasharray="13 13"
        opacity="0"
        fill="none"
      />
    </g>
  </svg>
</template>

<script>
import { TweenMax } from 'gsap';

export default {
  mounted () {
    const prototypeTimeline = new TimelineMax({
      onComplete() {
        this.play('startBouncing');
      }
    });

    prototypeTimeline
      .from('#prototype', 0.5, {
        delay: 0.5,
        opacity: 0
      })
      .from('#prototype__diagonal1', 0.7, {
        ease: Power4.easeInOut,
        opacity: 0,
        strokeDashoffset: 20
      }, '-=0.5')
      .from('#prototype__diagonal2', 0.7, {
        ease: Power4.easeInOut,
        opacity: 0,
        strokeDashoffset: -20
      }, '-=0.7')
      .from('#prototype__nav1', 0.5, {
        ease: Power4.easeInOut,
        opacity: 0,
        strokeDashoffset: 8
      }, '-=0.7')
      .from('#prototype__nav2', 0.5, {
        ease: Power4.easeInOut,
        opacity: 0,
        strokeDashoffset: 6
      }, '-=0.4')
      .from('#prototype__nav3', 0.5, {
        ease: Power4.easeInOut,
        opacity: 0,
        strokeDashoffset: 8
      }, '-=0.4')
      .from('#prototype__diagonal3', 0.7, {
        ease: Power4.easeInOut,
        opacity: 0,
        strokeDashoffset: 63
      }, '-=0.5')
      .from('#prototype__diagonal4', 0.7, {
        ease: Power4.easeInOut,
        opacity: 0,
        strokeDashoffset: -63
      }, '-=0.7')
      .add('startDrawing')
      .to('#prototype__logo', 0.8, {
        ease: Power4.easeInOut,
        fill: '#0076FF',
        stroke: '#0076FF',
        attr: {
          rx: '7'
        }
      })
      .to('#prototype__nav path, #prototype__hero', 0.4, {
        ease: Power4.easeInOut,
        stroke: '#0076FF'
      }, 'startDrawing')
      .to('#prototype__textlines path', 0.4, {
        opacity: 1
      }, 'startDrawing')
      .from('#prototype__textline1', 0.4, {
        ease: Power4.easeInOut,
        strokeDashoffset: 20
      }, 'startDrawing')
      .from('#prototype__textline2', 0.4, {
        ease: Power4.easeInOut,
        strokeDashoffset: 26
      }, 'startDrawing')
      .from('#prototype__textline3', 0.4, {
        ease: Power4.easeInOut,
        strokeDashoffset: 10
      }, 'startDrawing')
      .from('#prototype__textline4', 0.4, {
        ease: Power4.easeInOut,
        strokeDashoffset: 26
      }, 'startDrawing')
      .from('#prototype__textline5', 0.4, {
        ease: Power4.easeInOut,
        strokeDashoffset: 17
      }, 'startDrawing')
      .from('#prototype__textline6', 0.4, {
        ease: Power4.easeInOut,
        strokeDashoffset: 13
      }, 'startDrawing')
      .fromTo('#prototype__image', 0.8, {
        ease: Power4.easeInOut,
        attr: {
          cy: 100
        }
      }, {
        attr: {
          cy: 80
        },
        opacity: 1
      })
      .to('#prototype__diagonal1, #prototype__diagonal2, #prototype__diagonal3, #prototype__diagonal4, #prototype__text1, #prototype__text2', 0.1, {
        opacity: 0
      }, 'startDrawing')
      .add('startBouncing')
      .to('#prototype__image', 3, {
        ease: Power4.easeInOut,
        attr: {
          cy: 84
        }
      })
      .to('#prototype__image', 3, {
        ease: Power4.easeInOut,
        attr: {
          cy: 80
        }
      });
  }
};
</script>
