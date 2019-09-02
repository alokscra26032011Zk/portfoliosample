<template>
  <svg
    id="webapp"
    width="80"
    height="80"
    viewBox="0 0 80 80"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <mask id="webapp__mask">
        <rect
          width="60"
          height="32"
          x="10"
          y="30"
          fill="#FFF"
          rx="1"
        />
      </mask>
    </defs>
    <path
      id="webapp__frame"
      fill="#0076FF"
      d="M 7 12 L 73 12 C 74.657 12 76 13.343 76 15 L 76 65 C 76 66.657 74.657 68 73 68 L 7 68 C 5.343 68 4 66.657 4 65 L 4 15 C 4 13.343 5.343 12 7 12 Z M 7 26 C 6.448 26 6 26.448 6 27 L 6 65 C 6 65.552 6.448 66 7 66 L 73 66 C 73.552 66 74 65.552 74 65 L 74 27 C 74 26.448 73.552 26 73 26 L 7 26 Z"
    />
    <rect
      id="webapp__content"
      width="60"
      height="32"
      x="10"
      y="30"
      fill="#E5F1FF"
      rx="1"
    />
    <g mask="url(#webapp__mask)">
      <circle
        id="webapp__ripple"
        cx="54.5"
        cy="41.5"
        r="50.5"
        fill="#B3D6FF"
      />
      <path
        id="webapp__cursor"
        fill="#0076FF"
        d="M 55 42 L 55 53.918 L 58 50.939 L 60.5 55.905 C 60.5 55.905 61.176 56.119 61.5 55.905 C 61.824 55.69 62.146 55.259 62 54.912 C 61.312 53.272 59.5 49.946 59.5 49.946 L 63 49.946 L 55 42 Z"
      />
    </g>
    <path
      id="webapp__url"
      stroke="#FFFFFF"
      stroke-linecap="round"
      stroke-width="4"
      stroke-dasharray="44 44"
      d="M 26 19 L 70 19"
      fill="none"
    />
    <polygon
      id="webapp__back"
      fill="#FFFFFF"
      points="8 19 12 16 12 22"
    />
    <polygon
      id="webapp__next"
      fill="#FFFFFF"
      points="20 19 16 22 16 16"
    />
  </svg>
</template>

<script>
import { TweenMax } from 'gsap';

export default {
  mounted () {
    const webappTimeline = new TimelineMax({
      onComplete() {
        this.play('repeat');
      }
    });

    webappTimeline
      .from('#webapp', 0.5, {
        delay: 0.5,
        opacity: 0
      })
      .from(['#webapp__back', '#webapp__next'], 0.7, {
        opacity: 0
      })
      .from('#webapp__url', 0.7, {
        ease: Power4.easeInOut,
        strokeDashoffset: 44
      }, '-=0.7')
      .from('#webapp__content', 0.4, {
        opacity: 0,
        scaleY: 0,
        transformOrigin: '0 0'
      }, '-=0.4')
      .from('#webapp__cursor', 1, {
        ease: Power4.easeOut,
        x: 30,
        y: 30
      }, '-=0.4')
      .fromTo('#webapp__ripple', 1, {
        ease: Power4.easeOut,
        opacity: 1,
        scale: 0,
        transformOrigin: '50% 50%'
      }, {
        opacity: 0,
        scale: 1
      })
      .add('repeat')
      .to('#webapp__cursor', 1, {
        ease: Power4.easeOut,
        x: -30,
        y: -5
      }, '+=1')
      .to('#webapp__cursor', 1, {
        ease: Power4.easeOut,
        x: 0,
        y: 0
      }, '+=1')
      .fromTo('#webapp__ripple', 1, {
        ease: Power4.easeOut,
        opacity: 1,
        scale: 0,
        transformOrigin: '50% 50%'
      }, {
        opacity: 0,
        scale: 1
      });
      }
    };
</script>
