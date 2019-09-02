<template>
  <svg
    id="mobile"
    width="80"
    height="80"
    viewBox="0 0 80 80"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="mobile__phone">
      <path
        id="mobile__frame"
        fill="#0076FF"
        d="M 27 8 L 53 8 C 54.657 8 56 9.343 56 11 L 56 69 C 56 70.657 54.657 72 53 72 L 27 72 C 25.343 72 24 70.657 24 69 L 24 11 C 24 9.343 25.343 8 27 8 Z M 27 15 C 26.448 15 26 15.448 26 16 L 26 63 C 26 63.552 26.448 64 27 64 L 53 64 C 53.552 64 54 63.552 54 63 L 54 16 C 54 15.448 53.552 15 53 15 L 27 15 Z M 40 70 C 41.105 70 42 69.105 42 68 C 42 66.895 41.105 66 40 66 C 38.895 66 38 66.895 38 68 C 38 69.105 38.895 70 40 70 Z M 37 11 C 36.448 11 36 11.448 36 12 C 36 12.552 36.448 13 37 13 L 43 13 C 43.552 13 44 12.552 44 12 C 44 11.448 43.552 11 43 11 L 37 11 Z"
      />
      <rect
        id="mobile__notification2"
        width="24"
        height="7"
        x="28"
        y="35"
        fill="#E5F1FF"
        rx="2"
      />
      <rect
        id="mobile__notification1"
        width="24"
        height="7"
        x="28"
        y="27"
        fill="#E5F1FF"
        rx="2"
      />
    </g>
    <g id="mobile__waves">
      <path
        id="mobile__wave4"
        stroke="#B3D6FF"
        stroke-linecap="round"
        stroke-width="2"
        d="M 72 32 C 74.647 36.85 74.667 43.13 72 48"
        fill="none"
      />
      <path
        id="mobile__wave3"
        stroke="#B3D6FF"
        stroke-linecap="round"
        stroke-width="2"
        d="M 63 29 C 67 35.075 67 44.925 63 51"
        fill="none"
      />
      <path
        id="mobile__wave2"
        stroke="#B3D6FF"
        stroke-linecap="round"
        stroke-width="2"
        d="M 17 29 C 13 35.075 13 44.925 17 51"
        fill="none"
      />
      <path
        id="mobile__wave1"
        stroke="#B3D6FF"
        stroke-linecap="round"
        stroke-width="2"
        d="M 8 32 C 5.353 36.85 5.333 43.13 8 48"
        fill="none"
      />
    </g>
  </svg>
</template>

<script>
import { TweenMax } from 'gsap';

export default {
  mounted () {
    const mobileTimeline = new TimelineMax({
      onComplete() {
        this.play('startVibrating');
      }
    });

    mobileTimeline
      .from('#mobile', 0.5, {
        delay: 0.5,
        ease: Power0.easeNone,
        opacity: 0
      })
      .add('startVibrating')
      .to('#mobile__phone', 0.07, {
        rotation: -3,
        transformOrigin: '50% 50%'
      })
      .to('#mobile__phone', 0.07, {
        rotation: 3,
        repeat: 6,
        yoyo: true
      })
      .to('#mobile__phone', 0.07, {
        rotation: 0
      })
      .fromTo(['#mobile__waves'], 0.3, {
        opacity: 0
      }, {
        opacity: 1
      }, 'startVibrating')
      .to(['#mobile__waves'], 0.5, {
        opacity: 0
      }, 'startVibrating+=0.5')
      .set({}, {}, 5);
  }
};
</script>
