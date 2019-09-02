<template>
  <img
    class="c-preview-image"
    :class="alignClass"
    :src="src"
    :srcset="srcSet"
    :alt="alt"
    :width="width"
    :style="offsetStyles"
    :key="src"
  >
</template>

<script>
export default {
  props: {
    alt: {
      type: String,
      default: ''
    },
    align: {
      type: String,
      default: 'full'
    },
    src: {
      type: String,
      required: true
    },
    width: {
      type: Number,
      required: true
    },
    srcRetina: {
      type: String,
      default: null
    },
    widthRetina: {
      type: Number,
      default: null
    },
    verticalOffset: {
      type: Number,
      default: 0
    }
  },
  computed: {
    srcSet() {
      let srcSet = `${this.src} ${this.width}w`;
      if (this.srcRetina !== null && this.widthRetina !== null) {
        srcSet += `, ${this.srcRetina} ${this.widthRetina}w`;
      }
      return srcSet;
    },
    alignClass() {
      const alignClasses = {
        full: 'c-preview-image--full',
        center: 'c-preview-image--center',
        left: 'c-preview-image--left',
        right: 'c-preview-image--right'
      };
      return alignClasses[this.align];
    },
    offsetStyles() {
      if(this.verticalOffset > 0 && this.align === 'center') {
        return {
          transform: `translate(-50%, ${(50 - this.verticalOffset) * -1}%)`
        }
      } else if(this.verticalOffset > 0 && this.align === 'right') {
        return {
          transform: `translate(0, ${(50 - this.verticalOffset) * -1}%)`
        }
      } else if(this.verticalOffset > 0 && this.align === 'left') {
        return {
          transform: `translate(0, ${(50 - this.verticalOffset) * -1}%)`
        }
      }
      else {
        return {}
      }
    }
  }
}
</script>

<style lang="scss">
.c-preview-image--full {
  height: 100%;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
}

.c-preview-image--center {
  left: 50%;
  min-width: 32rem;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: auto;
}

.c-preview-image--left {
  left: 0;
  min-width: 32rem;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  width: auto;
}

.c-preview-image--right {
  min-width: 32rem;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(0, -50%);
  width: auto;
}

@media (min-width: 53em) {
  .c-preview-image--center,
  .c-preview-image--left,
  .c-preview-image--right {
    max-height: none;
    max-width: 100%;
  }
}
</style>


