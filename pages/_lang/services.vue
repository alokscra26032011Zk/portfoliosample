<template>
  <div>
    <h1>{{ $t('services.title') }}</h1>
    <p class="lead">{{ $t('services.introduction') }}</p>
    <div>
      <div class="c-service">
        <div class="c-service__icon">
          <img
            src="/images/icons/webapp.svg"
            alt="Webapp Design"
          >
        </div>
        <div class="c-service__description">
          <h2>{{ $t('services.web.title') }}</h2>
          <p>{{ $t('services.web.description') }}</p>
        </div>
      </div>
      <div class="c-service">
        <div class="c-service__icon">
          <img
            src="/images/icons/mobile.svg"
            alt="Mobile Design"
          >
        </div>
        <div class="c-service__description">
          <h2>{{ $t('services.mobile.title') }}</h2>
          <p>{{ $t('services.mobile.description') }}</p>
        </div>
      </div>
      <div class="c-service">
        <div class="c-service__icon">
          <img
            src="/images/icons/prototype.svg"
            alt="Prototyping"
          >
        </div>
        <div class="c-service__description">
          <h2>{{ $t('services.prototyping.title') }}</h2>
          <p>{{ $t('services.prototyping.description') }}</p>
        </div>
      </div>
      <div class="c-service">
        <div class="c-service__icon">
          <img
            src="/images/icons/frontend.svg"
            alt="Front-end Development"
          >
        </div>
        <div class="c-service__description">
          <h2>{{ $t('services.frontend.title') }}</h2>
          <p>{{ $t('services.frontend.description') }}</p>
        </div>
      </div>
      <div class="c-service">
        <div class="c-service__icon">
          <img
            src="/images/icons/animation.svg"
            alt="Animation"
          >
        </div>
        <div class="c-service__description">
          <h2>{{ $t('services.animation.title') }}</h2>
          <p>{{ $t('services.animation.description') }}</p>
        </div>
      </div>
      <div class="c-service">
        <div class="c-service__icon">
          <img
            src="/images/icons/consultancy.svg"
            alt="Consultancy"
          >
        </div>
        <div class="c-service__description">
          <h2>{{ $t('services.consultancy.title') }}</h2>
          <p>{{ $t('services.consultancy.description') }}</p>
        </div>
      </div>
    </div>
    <social-links/>
  </div>
</template>

<script>
// import IconAnimation from '~/components/icons/IconAnimation.vue';
// import IconConsultancy from '~/components/icons/IconConsultancy.vue';
// import IconFrontend from '~/components/icons/IconFrontend.vue';
// import IconMobile from '~/components/icons/IconMobile.vue';
// import IconPrototype from '~/components/icons/IconPrototype.vue';
// import IconWebapp from '~/components/icons/IconWebapp.vue';
import PreviewImage from '~/components/PreviewImage.vue';
import SocialLinks from '~/components/SocialLinks.vue';

export default {
  fetch({ store }) {
    store.commit('SET_PAGE', 'services');
    store.commit('SET_LOGO_COLOR', '#FFF');
    store.commit('SET_PREVIEW_COLOR', '#0076FF');
    store.commit('SET_PREVIEW_IMAGE', {
      src: '/images/services.png',
      srcRetina: '/images/services@2x.png',
      width: 666,
      widthRetina: 1332,
      alt: 'Services',
      align: 'left',
      verticalOffset: 0
    });
  },
  head() {
    return {
      title: this.$t('services.title')
    }
  },
  components: {
    // IconAnimation,
    // IconConsultancy,
    // IconFrontend,
    // IconMobile,
    // IconPrototype,
    // IconWebapp
    SocialLinks
  }
}
</script>

<style lang="scss">
.c-service {
  margin-top: 4rem;

  p:last-child {
    margin-bottom: 0;
  }
}

.c-service__icon {
  margin-bottom: 2.4rem;

  img {
    border: 0;
    margin: 0;
  }
}

@media (min-width: 53em) {
  .c-service {
    display: flex;
  }

  .c-service__icon {
    flex: none;
    margin: 4rem 3.2rem 0 0;
  }

  .c-service__description {
    flex: 1 1 auto;
  }
}
</style>
