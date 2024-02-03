<script setup lang="ts">
import { reactive } from "vue";

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

function copyButton() {
  navigator.clipboard.writeText(element.title);

  copied.visibility = "visible";
  copied.opacity = 1;

  window.setTimeout(() => {
    copied.visibility = "hidden";
    copied.opacity = 0;
  }, 1000);
}
</script>

<template>
  <div class="commandHandler">
    <div class="command">
      <div class="title">
        <div class="name">
          <h2>{{ name }}</h2>
          <p v-if="aliases">[ {{ aliases }} ]</p>
        </div>

        <div class="copyHandler">
          <button title="Kliknij, aby skopiować!" @click="copyButton">
            <span :style="copied" class="copied">Skopiowano komendę!</span>
            <img src="@/assets/icons/copy.svg" alt="copy" draggable="false" />
          </button>
        </div>
      </div>

      <p class="description">{{ description }}</p>
      <div v-if="embed" v-html="embed" class="embed"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.commandHandler {
  padding: 1.4rem 5vw 0.5rem;
  width: 80vw;
  display: flex;
  flex-direction: column;
  font-size: 1.1rem;
  background-color: var(--my-1);
  border: 1px solid var(--web-2);
  border-radius: var(--roundedMedium);

  @media (min-width: 1025px) {
    &:hover {
      border-color: var(--dev-3);
    }
  }

  .command {
    flex-direction: column;
  }
}

.title {
  display: flex;
  justify-content: space-between;

  p {
    position: relative;
    top: 3px;
    margin: 0;
  }
}

.name {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.8rem;
}

.copyHandler {
  position: relative;
  display: inline-block;

  button {
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--white);
    border: 1px solid var(--dev-3);
    border-radius: var(--roundedMedium);
    transition: var(--transitionFast);
    user-select: none;
    cursor: pointer;

    img {
      scale: 0.9;
    }

    @media (min-width: 1025px) {
      &:hover {
        background-color: var(--font-color-2);
      }

      &:active {
        background-color: var(--font-color-3);
      }
    }
  }
}

.copied {
  z-index: 10;
  padding: 0.5rem 1.5rem;
  position: absolute;
  bottom: 125%;
  color: var(--white);
  background-color: var(--app-1);
  border-radius: var(--roundedSmall);
  transition: var(--transitionFast);
}

.copied::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -6px;
  border-width: 6px;
  border-style: solid;
  border-color: var(--app-1) transparent transparent transparent;
}

.description {
  margin-left: 1.2rem;
}

@media (max-width: 768px) {
  .name {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.6rem;

    p {
      margin-left: 0.8rem;
    }
  }

  .description {
    margin-left: 0.8rem;
  }

  .copied {
    padding: 0.5rem 1rem;
    bottom: 38%;
    right: 125%;
    font-size: 0.65rem;
  }

  .copied::after {
    top: 37%;
    left: 106%;
    border-color: transparent transparent transparent var(--app-1);
  }
}
</style>
