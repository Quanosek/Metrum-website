<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <a :href="link" class="bot" target="_blank">
    <img :src="img" alt="logo" draggable="false" />
    <p>{{ name }}</p>
  </a>
</template>

<style lang="scss" scoped>
.bot {
  height: 10rem;
  width: 8rem;
  background-color: var(--app-3);
  padding: 0.6rem 0.6rem;
  border-radius: var(--roundedBig);
  transition: var(--transitionFast);

  img {
    height: 8rem;
    width: auto;
    border-radius: var(--roundedMedium);
  }

  p {
    margin-top: 0.5rem;
    color: var(--font-color-3);
    font-size: 90%;
    font-weight: 600;
    transition: 0.15s;
  }
}

@media (min-width: 1025px) {
  .bot:hover {
    background-color: var(--app-4);
    box-shadow: var(--boxShadow);
    transform: translateY(-5%);

    p {
      color: var(--white);
    }
  }
}

@media (max-width: 768px) {
  .bot {
    height: 8rem;
    width: 6rem;

    img {
      height: 6rem;
    }

    p {
      font-size: 85%;
    }
  }
}
</style>
