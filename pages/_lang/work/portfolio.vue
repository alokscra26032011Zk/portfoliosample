<template>
  <div>
    <h1>{{ $t('cases.portfolio.title') }}</h1>
    <p
      class="lead"
      v-html="$t('cases.portfolio.introduction')"
    />
    <div v-html="$t('cases.portfolio.description')"/>
    <social-links/>
  </div>
</template>

<script>
import PreviewImage from '~/components/PreviewImage.vue';
import SocialLinks from '~/components/SocialLinks.vue';

export default {
  fetch({ store }) {
    store.commit('SET_PAGE', 'portfolio');
    store.commit('SET_LOGO_COLOR', '#FFF');
    store.commit('SET_PREVIEW_COLOR', '#0076FF');
    store.commit('SET_PREVIEW_IMAGE', {
      src: '/images/work/portfolio.png',
      srcRetina: '/images/work/portfolio@2x.png',
      width: 666,
      widthRetina: 1332,
      alt: 'Portfolio Website',
      align: 'right',
      verticalOffset: 0
    });
  },
  head() {
    return {
      title: 'Portfolio',
      meta: [
        {
          hid: 'theme',
          name: 'theme-color',
          content: '#0076FF'
        }
      ]
    }
  },
  components: {
    PreviewImage,
    SocialLinks
  }
}
</script>
