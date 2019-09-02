<template>
  <div
    class="c-preview"
    :style="{backgroundColor: previewColor}"
  >
    <transition name="fade">
      <preview-image
        :src="previewImage.src"
        :src-retina="previewImage.srcRetina"
        :width="previewImage.width"
        :width-retina="previewImage.widthRetina"
        :alt="previewImage.alt"
        :align="previewImage.align"
        :vertical-offset="previewImage.verticalOffset"
      />
    </transition>
  </div>
</template>

<script>
import PreviewImage from '~/components/PreviewImage.vue';

export default {
  components: {
    PreviewImage
  },
  computed: {
    previewColor() {
      return this.$store.state.previewColor;
    },
    previewImage() {
      return this.$store.state.previewImage;
    }
  }
}
</script>


<style lang="scss">
@import '../css/colors';
.c-preview {
  height: 45vh;
  min-height: 40rem;
  overflow: hidden;
  position: relative;
  transition: background-color 0.15s linear;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter {
  opacity: 0;
}

@media (min-width: 53em) {
  .c-preview {
    flex: 1 1 50%;
    height: auto;
    max-width: 80rem;
  }
}
</style>
