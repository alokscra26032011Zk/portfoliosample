<template>
  <div class="c-content">
    <the-navigation/>
    <div class="c-content__wrapper">
      <slot/>
    </div>
  </div>
</template>

<script>
import SocialLinks from '~/components/SocialLinks.vue';
import TheNavigation from '~/components/TheNavigation.vue';

export default {
  components: {
    SocialLinks,
    TheNavigation
  }
}
</script>

<style lang="scss">
@import '../css/colors';
.c-content {
  padding: 3.2rem 3.2rem 9.2rem;
}

.c-content__wrapper {
  h1 {
    font: 800 3.2rem/4.8rem 'adelle-sans', sans-serif;
    margin-bottom: 2.4rem;
  }

  .lead {
    color: $gray-500;
    font: 1.8rem/3rem 'adelle-sans', sans-serif;
    margin-bottom: 3.2rem;

    strong {
      color: $gray-900;
      font-weight: 600;
    }
  }

  h2 {
    font: 600 1.6rem/2.4rem 'adelle-sans', sans-serif;
    margin: 4rem 0 1.6rem;
    text-transform: uppercase;

    &:first-child {
      margin-top: 0;
    }
  }

  p {
    color: $gray-500;
    line-height: 2.8rem;
    margin-bottom: 1.6rem;
  }

  .note {
    color: $gray-400;
    font-size: 1.3rem;
    font-style: italic;
  }

  a {
    color: $blue-500;
    text-decoration: none;

    &:hover {
      border-bottom: 1px solid $blue-500;
    }
  }

  img {
    border: 1px solid rgba($gray-900, 0.05);
    display: block;
    margin: 2.4rem 0;
    max-width: 100%;
  }
}

@media (min-width: 53em) {
  .c-content {
    display: flex;
    flex: none;
    flex-grow: 1;
    flex-direction: column;
    min-width: 64rem;
    overflow: auto;
    padding: 5.6rem 7.2rem;
    width: 50%;
  }

  .c-content__wrapper {
    flex: none;
    margin-top: auto;
    margin-bottom: auto;
    max-width: 56rem;

    h1 {
      font-size: 4rem;
      line-height: 5.6rem;
    }

    p {
      line-height: 2.4rem;
    }
  }
}
</style>
