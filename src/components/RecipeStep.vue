<template>
  <div class="recipeStep" :class="step.type">
    <span class="itemType">{{typeLabel}}</span>
    <span>{{step.text}}</span>
    <span v-if="step.after">, and {{step.after}}</span>
    <span v-if="step.duration && step.type !== 'prep'">, {{humanizeDuration(step.duration)}}</span>
  </div>
</template>

<script>
import durationUtils from '@/mixins/durationUtils'

export default {
  name: 'RecipeStep',
  mixins: [durationUtils],
  props: {
    step: Object
  },
  computed: {
    typeLabel() {
      switch (this.step.type) {
        case 'perform':
          return 'active'
        case 'cook':
          return 'wait'
        default:
          return this.step.type
      }
    }
  }
}
</script>

<style scoped>
.recipeStep {
  display: flex;
  align-items: center;
}

.prep,
.perform,
.cook {
  margin-bottom: 0.75rem;
  padding: 0.5rem;
}

.itemType {
  background-color: white;
  padding: 0.25em;
  margin-right: 0.5em;
}

.prep .itemType {
  color: rgb(128,0,128);
}

.perform .itemType {
  color: rgb(0,165,90);
}

.cook .itemType {
  color: rgb(255,165,0);
}
</style>
