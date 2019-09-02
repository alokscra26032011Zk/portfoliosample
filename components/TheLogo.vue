<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="c-logo"
    viewBox="0 0 64 64"
    preserveAspectRatio="none"
  >
    <defs>
      <mask id="logoMask">
        <circle
          cx="32"
          cy="32"
          r="32"
          fill="#FFF"
        />
        <g
          stroke="#000"
          fill="none"
          stroke-linecap="round"
          stroke-width="2"
        >
          <path
            class="c-logo__line"
            :class="{'c-logo__line--animating': isAnimating}"
            d="M44.963 26.545c.444-.505.46-1.256-.014-1.743l-5.854-6.037c-1.852-1.91-4.28-2.865-6.708-2.865s-4.856.955-6.708 2.865c-3.705 3.82-3.705 10.015 0 13.835l5.87 6.052c.243.23.548.348.851.348.302 0 .602-.118.838-.361l5.857-6.04 5.867-6.054z"
          />
          <path
            class="c-logo__line"
            :class="{'c-logo__line--animating': isAnimating}"
            d="M19.737 38.155c-.444.505-.46 1.256.014 1.743l5.854 6.037c1.852 1.91 4.28 2.865 6.708 2.865s4.856-.955 6.708-2.865c3.705-3.82 3.705-10.015 0-13.835l-5.87-6.052a1.246 1.246 0 0 0-.851-.348c-.302 0-.602.118-.838.361l-5.857 6.04-5.867 6.054z"
          />
        </g>
      </mask>
    </defs>
    <circle
      class="c-logo__circle"
      cx="32"
      cy="32"
      r="32"
      :fill="color"
      mask="url(#logoMask)"
    />
  </svg>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '#0076FF'
    }
  },
  data() {
    return {
      isAnimating: false
    }
  },
  computed: {
    currentPage() {
      return this.$store.state.currentPage;
    }
  },
  watch: {
    currentPage(newPage) {
      this.isAnimating = true;
      setTimeout(() => {
        this.isAnimating = false;
      }, 600);
    }
  }
}
</script>

<style lang="scss">
@keyframes circleAnimation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.c-logo {
  filter: drop-shadow(0 0.7rem 1rem rgba(0, 0, 0, 0.2));
  height: 4rem;
  width: 4rem;
}

.c-logo__circle {
  animation: 0.2s linear 1 1s both circleAnimation;
}

.c-logo__line {
  stroke-dasharray: 97, 97;
  stroke-dashoffset: 0;
}

.c-logo__line--animating {
  stroke-dashoffset: 194;
  transition: stroke-dashoffset 0.6s cubic-bezier(0.165, 0.840, 0.440, 1.000);
}

@media (min-width: 53em) {
  .c-logo {
    height: 5.6rem;
    width: 5.6rem;
  }
}
</style>
