<template>
  <div class="c-container">
    <slot/>
  </div>
</template>

<style lang="scss">
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.c-container {
  animation: 0.3s linear 0.3s 1 both fadeIn;
}

@media (min-width: 53em) {
  .c-container {
    bottom: 0;
    display: flex;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
}
</style>
