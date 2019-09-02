<template>
  <nav class="c-navigation">
    <nuxt-link
      :to="$i18n.path('')"
      class="c-navigation__item"
      active-class="c-navigation__item--active"
      exact
    >
      {{ $t('links.home') }}
    </nuxt-link>
    <nuxt-link
      :to="$i18n.path('services')"
      class="c-navigation__item"
      active-class="c-navigation__item--active"
    >
      {{ $t('links.services') }}
    </nuxt-link>
    <nuxt-link
      :to="$i18n.path('work')"
      class="c-navigation__item"
      active-class="c-navigation__item--active"
    >
      {{ $t('links.work') }}
    </nuxt-link>
    <nuxt-link
      :to="$i18n.path('about')"
      class="c-navigation__item"
      active-class="c-navigation__item--active"
    >
      {{ $t('links.about') }}
    </nuxt-link>
    <nuxt-link
      :to="$i18n.path('contact')"
      class="c-navigation__item"
      active-class="c-navigation__item--active"
    >
      {{ $t('links.contact') }}
    </nuxt-link>
    <!-- <language-switcher class="c-language-switcher--desktop"/> -->
  </nav>
</template>

<script>
import LanguageSwitcher from '~/components/LanguageSwitcher.vue';

export default {
  components: {
    LanguageSwitcher
  }
}
</script>


<style lang="scss">
@import '../css/colors';
.c-navigation {
  display: flex;
  flex: none;
  font: 1.3rem/1 'adelle-sans', sans-serif;
  margin-bottom: 5.6rem;
  position: relative;
}

.c-navigation__item {
  color: $gray-400;
  text-decoration: none;
  text-transform: uppercase;
  transition: color 0.1s linear;

  &:hover:not(.c-navigation__item--active) {
    color: $blue-500;
  }
}

.c-navigation__item + .c-navigation__item {
  margin-left: 3.2rem;
}

.c-navigation__item--active {
  color: $gray-900;
  font-weight: 600;
}

@media (max-width: 53em) {
  .c-navigation {
    background: #FFF;
    box-shadow: 0 0.3rem 1rem 0.3rem rgba(0, 0, 0, 0.2);
    bottom: 0;
    justify-content: space-between;
    left: 0;
    margin: 0;
    padding: 2.4rem;
    position: fixed;
    right: 0;
    z-index: 10;
  }

  .c-navigation__item + .c-navigation__item {
    margin-left: 0;
  }
}

@media (max-width: 20em) {
  .c-navigation {
    font-size: 1.1rem;
  }
}
</style>
