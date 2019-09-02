<template>
  <div>
    <h1>{{ $t('contact.title') }}</h1>
    <p class="lead">
      {{ $t('contact.introduction') }}<br>
      <a href="mailto:alok.node@gmail.com">{{ $t('contact.cta') }}</a>
    </p>
    <p>
      Alok Kumar<br>
      <a href="mailto:alok.node@gmail.com">
        alok.node@gmail.com
      </a>
      <br>
      <a href="tel:9717226906">
        9717226906
      </a>
    </p>

    <p></p>
  </div>
</template>

<script>
import PreviewImage from '~/components/PreviewImage.vue';

export default {
  fetch({ store }) {
    store.commit('SET_PAGE', 'contact');
    store.commit('SET_LOGO_COLOR', '#FFF');
    store.commit('SET_PREVIEW_COLOR', '#0076FF');
    store.commit('SET_PREVIEW_IMAGE', {
      src: '/images/contact.png',
      srcRetina: '/images/contact@2x.png',
      width: 666,
      widthRetina: 1332,
      alt: 'Send me a letter',
      align: 'right',
      verticalOffset: 0
    });
  },
  head() {
    return {
      title: this.$t('contact.title')
    }
  },
  components: {
    PreviewImage
  }
}
</script>
