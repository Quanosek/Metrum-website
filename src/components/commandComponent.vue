<script setup lang="ts">
import { reactive } from "vue";

import CopyIcon from "@/components/icons/copyIcon.vue";

const element = defineProps<{
  title: string;
  name: string;
  description: string;
  aliases?: string;
  embed?: string;
}>();

const copied: any = reactive({
  visibility: "hidden",
  opacity: 0,
});

const copyButton = () => {
  navigator.clipboard.writeText(element.title);

  copied.visibility = "visible";
  copied.opacity = 1;

  window.setTimeout(() => {
    copied.visibility = "hidden";
    copied.opacity = 0;
  }, 1000);
};
</script>

<template>
  <div class="container">
    <div class="title">
      <div class="name">
        <h2>{{ name }}</h2>
        <p v-if="aliases">[ {{ aliases }} ]</p>
      </div>

      <div class="copyButton">
        <button title="Kliknij, aby skopiować!" @click="copyButton">
          <span class="copied" :style="copied">Skopiowano komendę!</span>
          <CopyIcon />
        </button>
      </div>
    </div>

    <p class="description">{{ description }}</p>
    <div v-if="embed" v-html="embed" class="embed" />
  </div>
</template>

<style scoped lang="scss">
.container {
  padding: 1.5rem 3rem;
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  font-size: 110%;
  border-radius: 8px;
  background-color: #2e3035;
  border: 1px solid #25272a;

  &:hover {
    border-color: #121214;
  }

  @media (max-width: 768px) {
    padding: 5% 6%;
    width: 94%;
    font-size: 90%;
  }
}

.title {
  display: flex;
  justify-content: space-between;

  p {
    position: relative;
    top: 3px;
  }
}

.name {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.8rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;

    p {
      margin-left: 10px;
    }
  }
}

.copyButton {
  position: relative;

  button {
    padding: 0.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    border: 1px solid #131517;
    border-radius: 5px;
    transition: 0.15s, filter 0.5s ease-in;
    user-select: none;
    cursor: pointer;

    &:hover {
      background-color: #cdcecf;
    }
    &:active {
      background-color: #b9bbbe;
    }

    @media (max-width: 768px) {
      padding: min(2.5vw, 8px);

      svg {
        height: min(8vw, 1.2rem);
        width: auto;
      }
    }
  }
}

.copied {
  z-index: 10;
  padding: 0.5rem 1.5rem;
  position: absolute;
  bottom: 125%;

  font-size: 80%;
  text-align: center;
  color: #ffffff;
  background-color: #40444b;
  border-radius: 3px;
  transition: 0.15s, filter 0.5s ease-in;

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -6px;
    border-width: 6px;
    border-style: solid;
    border-color: #40444b transparent transparent transparent;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    bottom: 30%;
    right: 125%;
    font-size: 70%;

    &::after {
      top: 37%;
      left: 106%;
      border-color: transparent transparent transparent #40444b;
    }
  }
}

.description {
  margin-left: 5px;

  @media (max-width: 768px) {
    margin-left: 6px;
    font-size: 110%;
  }
}
</style>
