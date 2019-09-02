<template>
  <div class="c-social">
    <h3>
      {{ $t('social.title') }}
      <!-- <nuxt-link :to="$i18n.path('contact')">
        {{ $t('social.cta') }}
      </nuxt-link> -->
    </h3>
    <ul class="c-social-links">
      <li class="c-social-links__item">
        <a
          href="https://www.instagram.com/alok_zk"
          target="_blank"
        >
          <svg class="c-social-links__icon" fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" /></svg>
          <span class="c-social-links__label">Instagram</span>
        </a>
      </li>
     
      <li class="c-social-links__item">
        <a
          href="https://www.github.com/alokscra26032011Zk"
          target="_blank"
        >
          <svg
            class="c-social-links__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M11.9991,2 C6.47774,2 2.00001,6.47712 2.00001,12.0006 C2.00001,16.4184 4.86504,20.1665 8.83877,21.489 C9.33909,21.5807 9.52142,21.272 9.52142,21.007 C9.52142,20.7696 9.51282,20.1407 9.50791,19.3062 C6.72636,19.9105 6.13948,17.9657 6.13948,17.9657 C5.68459,16.8105 5.02895,16.5029 5.02895,16.5029 C4.121,15.8824 5.09771,15.895 5.09771,15.895 C6.10143,15.9657 6.62936,16.9256 6.62936,16.9256 C7.52135,18.4537 8.97014,18.0125 9.53984,17.7565 C9.63069,17.1102 9.88914,16.6696 10.1746,16.4196 C7.95415,16.1672 5.61952,15.3093 5.61952,11.4773 C5.61952,10.3856 6.00934,9.49292 6.64902,8.79388 C6.54588,8.54089 6.20271,7.52417 6.74723,6.14739 C6.74723,6.14739 7.58643,5.87851 9.49686,7.17252 C10.2943,6.95073 11.1501,6.8398 12.0003,6.83594 C12.8499,6.8398 13.7051,6.95073 14.5038,7.17252 C16.413,5.87851 17.2509,6.14739 17.2509,6.14739 C17.7967,7.52417 17.4535,8.54089 17.351,8.79388 C17.9919,9.49292 18.3787,10.3856 18.3787,11.4773 C18.3787,15.3189 16.0403,16.1642 13.8131,16.4118 C14.1717,16.7205 14.4915,17.3308 14.4915,18.2637 C14.4915,19.6005 14.4792,20.6791 14.4792,21.007 C14.4792,21.2744 14.6597,21.5855 15.1668,21.4878 C19.1374,20.1629 22,16.4172 22,12.0006 C22,6.47712 17.5223,2 11.9991,2 Z"/>
          </svg>
          <span class="c-social-links__label">Github</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
@import '../css/colors';
.c-social {
  margin-top: 6.4rem;

  h3 {
    color: $gray-400;
    font: 500 1.2rem/2.4rem 'adelle-sans', sans-serif;
    margin-bottom: 1.6rem;
    padding-top: 4rem;
    position: relative;
    text-transform: uppercase;

    &:before {
      background-color: $gray-200;
      content: '';
      height: 1px;
      left: 0;
      position: absolute;
      top: 0;
      width: 16rem;
    }

    a {
      display: inline;
      margin: 0 0.2rem;
    }
  }
}

.c-social-links {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.8rem;
}

.c-social-links__item {
  margin-right: 2.4rem;

  a {
    align-items: center;
    color: $gray-500;
    display: flex;
    transition: color 0.1s linear;

    &:hover {
      color: $blue-500;
      border: 0;
    }
  }
}

.c-social-links__icon {
  margin-right: 0.8rem;

  * {
    fill: currentColor;
    transition: fill 0.1s linear;
  }
}

@media (max-width: 53em) {
  .c-social {
    margin-top: 4rem;
  }
  .c-social h3 {
    padding-top: 3.2rem;
    text-align: center;

    &:before {
      left: calc(50% - 8rem);
    }
  }

  .c-social-links {
    justify-content: center;
  }

  .c-social-links__item {
    margin: 0 1.2rem 1.6rem;
  }
}
</style>
