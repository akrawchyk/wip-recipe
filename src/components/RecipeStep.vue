<template>
  <div class="boxShadow">
    <div class="recipeStep" :class="step.type" :style="[linearGradient]">
      <span class="itemType">{{typeLabel}}</span>
      <span>{{step.text}}</span>
      <span v-if="step.after">, and {{step.after}}</span>
      <span v-if="step.duration && step.type !== 'prep'">, {{humanizeDuration(step.duration)}}</span>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

import durationUtils from '@/mixins/durationUtils'

export default {
  name: 'RecipeStep',
  mixins: [durationUtils],
  props: {
    step: Object,
    steps: Array,
    stepIdx: Number,
    totalTime: Object
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
    },
    backgroundColor() {
      switch (this.step.type) {
        case 'prep':
          return 'rgba(128,0,128,0.45)';
        case 'perform':
          return 'rgba(0,128,0,0.45)';
        case 'cook':
          return 'rgba(255,128,0,0.45)';
        default:
          return ''
      }
    },
    linearGradient() {
      // get linear gradient string for blank steps before us and our step
      const gradientSteps = []
      const ourDuration = (() => {
        if (this.step.duration) {
          return moment.duration(this.getMaxDuration(this.step.duration)).as('milliseconds')
        }

        return 0
      })()

      const durationBeforeStep = this.steps
        .filter((s, idx) => idx < this.stepIdx)
        .reduce(this.gatherStepsDurations, [])
        .map(this.getMaxDuration)
        .map(this.momentDuration)
        .reduce(this.sumMomentDurations, moment.duration(0))
        .as('milliseconds')

      // 'before (nothing), our chunk time, after (nothing)'

      // before
      let before = (durationBeforeStep / this.totalTime.as('milliseconds') * 100).toFixed(3)

      let ours
      if (ourDuration === 0) {
        const showOffset = 0.33
        ours = (+before + showOffset).toFixed(3)
        before = (+before - showOffset * 2).toFixed(3)
      } else {
        ours = +(ourDuration / this.totalTime.as('milliseconds') * 100).toFixed(3) + +before
      }

      // before
      gradientSteps.push(`#fff 0%, #fff ${before}%`)

      // ours
      gradientSteps.push(`${this.backgroundColor} ${before}%, ${this.backgroundColor} ${ours}%`)

      // after
      gradientSteps.push(`#fff ${ours}%, #fff 100%`)

      return {
        'background-image': `linear-gradient(to right, ${gradientSteps.join(',')})`
      }
    }
  }
}
</script>

<style scoped>
.boxShadow {
  border-bottom: 1px solid #ddd;
  border-left: 1px solid #ddd;
  box-shadow: 0 2px 5px #ddd;
  margin-bottom: 1rem;
}

.recipeStep {
  border: 0.5em solid white;
  display: flex;
  align-items: center;
}

.prep,
.perform,
.cook {
  /* margin-bottom: 0.75rem; */
  padding: 0.5rem;
}

.itemType {
  /* background-color: white; */
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
