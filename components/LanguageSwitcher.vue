<template>
  <nuxt-link
    v-if="$i18n.locale === 'en'"
    :to="`/nl` + $route.fullPath"
    class="c-language-switcher"
    exact
  >
    <svg
      class="c-language-switcher__background"
      width="26"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="none"
        stroke-width="1"
        d="M11.5 23.149l.177-.107a16.953 16.953 0 0 0 2.003-1.426c.732-.61 1.352-1.25 1.825-1.908l.15-.208H23a2.5 2.5 0 0 0 2.5-2.5V3A2.5 2.5 0 0 0 23 .5H3A2.5 2.5 0 0 0 .5 3v14A2.5 2.5 0 0 0 3 19.5h8.5v3.649z"
      />
    </svg>
    <span class="c-language-switcher__label">
      NL
    </span>
  </nuxt-link>
  <nuxt-link
    v-else
    :to="$route.fullPath.replace(/^\/[^\/]+/, '')"
    class="c-language-switcher"
    exact
  >
    <svg
      class="c-language-switcher__background"
      width="26"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="none"
        stroke-width="1"
        d="M11.5 23.149l.177-.107a16.953 16.953 0 0 0 2.003-1.426c.732-.61 1.352-1.25 1.825-1.908l.15-.208H23a2.5 2.5 0 0 0 2.5-2.5V3A2.5 2.5 0 0 0 23 .5H3A2.5 2.5 0 0 0 .5 3v14A2.5 2.5 0 0 0 3 19.5h8.5v3.649z"
      />
    </svg>
    <span class="c-language-switcher__label">
      EN
    </span>
  </nuxt-link>
</template>

<style lang="scss">
@import '../css/colors';
.c-language-switcher {
  color: $gray-500;
  display: block;
  height: 2.4rem;
  position: absolute;
  transition: color 0.1s linear;
  width: 2.6rem;
  z-index: 5;
}

.c-language-switcher__background {
  display: block;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;

  path {
    fill: #FFF;
    stroke: none;
    transition: all 0.1s linear;
  }
}

.c-language-switcher__label {
  font: 1.1rem/2rem 'adelle-sans', sans-serif;
  left: 0;
  position: absolute;
  right: 0;
  text-align: center;
  top: 0;
}

.c-language-switcher--desktop {
  display: none;
  right: 0;
  top: -4px;

  &:hover {
    color: $blue-500;
  }

  .c-language-switcher__background path {
    fill: none;
    stroke: $gray-200;
  }

  &:hover .c-language-switcher__background path {
    stroke: $blue-500;
  }
}

.c-language-switcher--mobile {
  filter: drop-shadow(0 0.7rem 1rem rgba(0, 0, 0, 0.2));
  right: 3.3rem;
  top: 3.2rem;
}

@media (min-width: 53em) {
  .c-language-switcher {
    color: $gray-400;
  }

  .c-language-switcher--desktop {
    display: block;
  }

  .c-language-switcher--mobile {
    display: none;
  }
}
</style>
