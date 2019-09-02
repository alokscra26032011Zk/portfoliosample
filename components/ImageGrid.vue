<template>
  <div class="c-image-grid">
    <slot/>
  </div>
</template>

<style lang="scss">
.c-image-grid {
  columns: 1;
  column-gap: 2.4rem;
  display: block;
  margin: 4rem 0;

  img {
    margin: 0 0 2.4rem 0;
  }
}

@media (min-width: 29em) {
  .c-image-grid {
    columns: 2;
  }
}
</style>
