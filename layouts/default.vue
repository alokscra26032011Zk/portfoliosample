<template>
  <the-container>
    <nuxt-link
      :to="$i18n.path('')"
      class="c-logo-wrapper"
      title="Simon Wuyts - Interaction Designer"
      exact
    >
      <the-logo :color="logoColor"/>
    </nuxt-link>
    <!-- <language-switcher class="c-language-switcher--mobile"/> -->
    <the-preview/>
    <the-content>
      <nuxt/>
    </the-content>
  </the-container>
</template>

<script>
import LanguageSwitcher from '~/components/LanguageSwitcher.vue';
import TheContainer from '~/components/TheContainer.vue';
import TheContent from '~/components/TheContent.vue';
import TheLogo from '~/components/TheLogo.vue';
import ThePreview from '~/components/ThePreview.vue';

export default {
  components: {
    LanguageSwitcher,
    TheContainer,
    TheContent,
    TheLogo,
    ThePreview
  },
  computed: {
    logoColor() {
      return this.$store.state.logoColor;
    }
  }
};
</script>

<style lang="scss">
:root {
  font-size: 62.5%;
}

html {
  height: 100%;
}

body {
  box-sizing: border-box;
  font: 1.6rem/2.4rem 'bagatela', Georgia, serif;
  height: 100%;

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
}

.page-enter,
.page-leave-to {
  opacity: 0;
}

.page-enter-to,
.page-leave {
  opacity: 1;
  transform: translateX(0);
}

.page-enter {
  transform: translateY(0.8rem);
}

.page-leave-to {
  transform: translateY(-0.8rem);
}

.page-enter-active,
.page-leave-active {
  transition: all 0.15s ease-in-out;
}

.c-logo-wrapper {
  left: 2.4rem;
  position: absolute;
  top: 2.4rem;
  z-index: 5;
}

@media (min-width: 53em) {
  .c-logo-wrapper {
    left: 4rem;
    top: 4rem;
  }
}
</style>
