<template>
  <div>
    <h1>{{ $t('work.title') }}</h1>
    <p class="lead">{{ $t('work.introduction') }}</p>
    <h2>{{ $t('work.projects') }}</h2>
    <ul class="c-cases">
      <li class="c-cases__item">
          <a href="https://www.colourwalls.com" target="_blank">Colourwalls</a>
        </li>
        <li class="c-cases__item">
          <a href="https://www.interiocafe.com" target="_blank">InterioCafe</a>
        </li>
        <li class="c-cases__item">
          <a href="https://www.interiogreens.com" target="_blank">InterioGreens</a>
        </li>

      <!-- <li class="c-cases__item">
        <nuxt-link
          :to="$i18n.path('work/gva-archief')"
          exact
        >
          {{ $t('cases.archive.title') }}
        </nuxt-link>
      </li>
      <li class="c-cases__item">
        <nuxt-link
          :to="$i18n.path('work/kempenkuur')"
          exact
        >
          {{ $t('cases.cycling.title') }}
        </nuxt-link>
      </li>
      <li class="c-cases__item">
        <nuxt-link
          :to="$i18n.path('work/bedrock')"
          exact
        >
          {{ $t('cases.bedrock.title') }}
        </nuxt-link>
      </li>
      <li class="c-cases__item">
        <nuxt-link
          :to="$i18n.path('work/portfolio')"
          exact
        >
          {{ $t('cases.portfolio.title') }}
        </nuxt-link>
      </li> -->
    </ul>
    <social-links/>
  </div>
</template>

<script>
import PreviewImage from '~/components/PreviewImage.vue';
import SocialLinks from '~/components/SocialLinks.vue';

export default {
  fetch({ store }) {
    store.commit('SET_PAGE', 'work');
    store.commit('SET_LOGO_COLOR', '#FFF');
    store.commit('SET_PREVIEW_COLOR', '#0076FF');
    store.commit('SET_PREVIEW_IMAGE', {
      src: '/images/work.png',
      srcRetina: '/images/work@2x.png',
      width: 666,
      widthRetina: 1332,
      alt: 'Work',
      align: 'left',
      verticalOffset: 0
    });
  },
  head() {
    return {
      title: this.$t('work.title')
    }
  },
  components: {
    PreviewImage,
    SocialLinks
  }
}
</script>

<style lang="scss">
.c-cases__item {
  margin-bottom: 1.6rem;

  a {
    &:after {
      background: url('/images/icons/arrow-right.svg') no-repeat 0 0;
      content: '';
      display: inline-block;
      height: 1.2rem;
      margin-left: 0.8rem;
      opacity: 0.5;
      transition: 0.1s all ease-in-out;
      vertical-align: middle;
      width: 0.8rem;
    }

    &:hover {
      border: 0;
    }

    &:hover:after {
      opacity: 1;
      transform: translateX(0.4rem);
    }
  }
}
</style>
