<template>
  <div>
    <h1>{{ $t('cases.cycling.title') }}</h1>
    <p
      class="lead"
      v-html="$t('cases.cycling.introduction')"
    />
    <div v-html="$t('cases.cycling.description')"/>
    <image-grid>
      <img
        src="/images/work/kempenkuur-2.png"
        srcset="/images/work/kempenkuur-2.png 268w, /images/work/kempenkuur-2@2x.png 536w"
        alt="Mobile Design"
      >
      <img
        src="/images/work/kempenkuur-3.png"
        srcset="/images/work/kempenkuur-3.png 268w, /images/work/kempenkuur-3@2x.png 536w"
        alt="Mobile Design"
      >
      <img
        src="/images/work/kempenkuur-1.png"
        srcset="/images/work/kempenkuur-1.png 268w, /images/work/kempenkuur-1@2x.png 536w"
        alt="Mobile Design"
      >
    </image-grid>
    <p class="note">{{ $t('cases.cycling.copyright') }}</p>
    <social-links/>
  </div>
</template>

<script>
import ImageGrid from '~/components/ImageGrid.vue';
import PreviewImage from '~/components/PreviewImage.vue';
import SocialLinks from '~/components/SocialLinks.vue';

export default {
  fetch({ store }) {
    store.commit('SET_PAGE', 'kempenkuur');
    store.commit('SET_LOGO_COLOR', '#FFF');
    store.commit('SET_PREVIEW_COLOR', '#78B533');
    store.commit('SET_PREVIEW_IMAGE', {
      src: '/images/work/kempenkuur-preview.png',
      srcRetina: '/images/work/kempenkuur-preview@2x.png',
      width: 666,
      widthRetina: 1332,
      alt: 'Mobile Web App for Kempen',
      align: 'center',
      verticalOffset: 10
    });
  },
  head() {
    return {
      title: 'Kempenkuur',
      meta: [
        {
          hid: 'theme',
          name: 'theme-color',
          content: '#78B533'
        }
      ]
    }
  },
  components: {
    ImageGrid,
    PreviewImage,
    SocialLinks
  }
}
</script>
