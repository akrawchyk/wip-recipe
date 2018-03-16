<template>
  <div class="BetaRecipeTimeBar">
    <div v-for="(step, idx) in steps" :key="idx" :class="step.type">
      &nbsp;
    </div>
  </div>
</template>

<script>
export default {
  name: 'BetaRecipeTimeBar',
  props: {
    steps: Array
  }
}
</script>

<style scoped>
.BetaRecipeTimeBar {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 1rem;
}

.BetaRecipeTimeBar > div {
  flex: 1;
}
</style>
