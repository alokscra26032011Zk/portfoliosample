<template>
  <svg
    id="animation"
    width="80"
    height="80"
    viewBox="0 0 80 80"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <mask id="animation__mask">
        <rect
          x="0"
          y="0"
          width="80"
          height="80"
          fill="#FFF"
        />
        <circle
          id="animation__maskcircle"
          cx="40"
          cy="40"
          r="26"
          fill="#000"
        />
      </mask>
    </defs>
    <circle
      id="animation__circleback"
      cx="40"
      cy="40"
      r="23"
      fill="#E5F1FF"
    />
    <g mask="url(#animation__mask)">
      <circle
        id="animation__circleborder"
        cx="40"
        cy="40"
        r="23"
        stroke="#0076FF"
        stroke-dasharray="145 145"
        stroke-width="2"
        fill="none"
      />
      <path
        id="animation__circlefill"
        stroke="#0076FF"
        stroke-dasharray="76 76"
        stroke-dashoffset="-76"
        stroke-width="24"
        d="M 40 28 C 46.627 28 52 33.373 52 40 C 52 46.627 46.627 52 40 52 C 33.373 52 28 46.627 28 40 C 28 33.373 33.373 28 40 28 Z"
        fill="none"
      />
    </g>
    <g id="animation__dots">
      <circle
        id="animation__dot1"
        cx="67.113"
        cy="16.201"
        r="4"
        fill="#4D9FFF"
      />
      <circle
        id="animation__dot2"
        cx="76"
        cy="40"
        r="4"
        fill="#4D9FFF"
      />
      <circle
        id="animation__dot3"
        cx="67.113"
        cy="67.113"
        r="4"
        fill="#4D9FFF"
      />
      <circle
        id="animation__dot4"
        cx="40"
        cy="76"
        r="4"
        fill="#4D9FFF"
      />
      <circle
        id="animation__dot5"
        cx="16.201"
        cy="67.113"
        r="4"
        fill="#4D9FFF"
      />
      <circle
        id="animation__dot6"
        cx="4"
        cy="40"
        r="4"
        fill="#4D9FFF"
      />
      <circle
        id="animation__dot7"
        cx="16.201"
        cy="16.201"
        r="4"
        fill="#4D9FFF"
      />
      <circle
        id="animation__dot8"
        cx="40"
        cy="4"
        r="4"
        fill="#4D9FFF"
      />
    </g>
  </svg>
</template>

<script>
import { TimelineMax } from 'gsap';

export default {
  mounted () {
    const animationTimeline = new TimelineMax();

    animationTimeline
      .set('#animation__maskcircle, #animation__dots circle', {
        transformOrigin: '50% 50%',
        scale: 0
      })
      .set('#animation__dot1', {
        transformOrigin: '0 100%'
      })
      .set('#animation__dot2', {
        transformOrigin: '0 50%'
      })
      .set('#animation__dot3', {
        transformOrigin: '0 0'
      })
      .set('#animation__dot4', {
        transformOrigin: '50% 0'
      })
      .set('#animation__dot5', {
        transformOrigin: '100% 0'
      })
      .set('#animation__dot6', {
        transformOrigin: '100% 50%'
      })
      .set('#animation__dot7', {
        transformOrigin: '100% 100%'
      })
      .set('#animation__dot8', {
        transformOrigin: '50% 100%'
      })
      .from('#animation', 0.5, {
        delay: 0.5,
        opacity: 0
      })
      .add('startCircling')
      .from('#animation__circleborder', 2, {
        ease: Power4.easeOut,
        strokeDashoffset: 145,
        rotation: -360,
        transformOrigin: '50% 50%'
      }, '-=0.2')
      .fromTo('#animation__circlefill', 0.6, {
        ease: Power4.easeInOut,
        opacity: 0,
        rotation: 180,
        transformOrigin: '50% 50%'
      }, {
        opacity: 1,
        strokeDashoffset: 0
      })
      .to('#animation__maskcircle', 0.8, {
        ease: Expo.easeInOut,
        scale: 1
      }, '+=0.6')
      .to('#animation__dots circle', 0.7, {
        opacity: 0,
        scale: 0.8
      }, '-=0.4')
      .to('#animation', 3, {
        opacity: 1
      });
  }
};
</script>
