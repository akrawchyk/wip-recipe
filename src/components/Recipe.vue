<template>
  <div class="Recipe" itemscope itemtype="http://schema.org/Recipe">
    <h2>{{recipe.title}}</h2>
    <h3>Timings</h3>
    <BetaRecipeTimeBar :steps="recipe.steps" />
    <div class="prepTime">
      Prep Time: <meta itemprop="prepTime" :content="prepTime"> {{humanize(prepTime)}}
    </div>
    <div class="performTime">
      Active Time: <meta itemprop="performTime" :content="performTime"> {{humanize(performTime)}}
    </div>
    <div>
      Wait time: {{humanize(cookTime)}}
    </div>
    <div class="totalTime">
      <strong>
        Total Time: <meta itemprop="totalTime" :content="totalTime"> {{humanize(totalTime)}}
      </strong>
    </div>
    <h2>Ingredients</h2>
    <ul>
      <li v-for="(ingredient, iidx) in recipe.ingredients" :key="iidx">
        <RecipeIngredient :ingredient="ingredient" />
      </li>
    </ul>
    <h2>Steps</h2>
    <ol class="recipeInstructions" itemprop="recipeInstructions">
      <li v-for="(step, sidx) in recipe.steps" :key="sidx" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
        <RecipeStep :step="step" />
      </li>
    </ol>
  </div>
</template>

<script>
import moment from 'moment';

import RecipeStep from '@/components/RecipeStep';
import RecipeIngredient from '@/components/RecipeIngredient';
import BetaRecipeTimeBar from '@/components/BetaRecipeTimeBar';
import durationUtils from '@/mixins/durationUtils';

export default {
  name: 'Recipe',
  components: {
    RecipeStep,
    RecipeIngredient,
    BetaRecipeTimeBar
  },
  mixins: [durationUtils],
  props: {
    recipe: {
      type: Object,
      default() {
        return {
          ingredients: [],
          steps: []
        }
      }
    }
  },
  computed: {
    prepSteps() {
      return this.recipe.steps.filter(s => s.type === "prep");
    },

    performSteps() {
      // even though we have cook steps for ui display, we ultimately consider them perform steps
      return this.recipe.steps.filter(s => s.type === "perform");
    },

    cookSteps() {
      return this.recipe.steps.filter(s => ['cook', 'wait'].includes(s.type));
    },

    prepTime() {
      // prep steps durations sum
      return this.prepSteps
        .reduce(this.gatherStepsDurations, [])
        .map(this.getMaxDuration)
        .map(this.momentDuration)
        .reduce(this.sumMomentDurations, moment.duration(0));
    },

    performTime() {
      // perform steps + cook steps durations sum
      return this.performSteps
        .reduce(this.gatherStepsDurations, [])
        .map(this.getMaxDuration)
        .map(this.momentDuration)
        .reduce(this.sumMomentDurations, moment.duration(0));
    },

    cookTime() {
      return this.cookSteps
        .reduce(this.gatherStepsDurations, [])
        .map(this.getMaxDuration)
        .map(this.momentDuration)
        .reduce(this.sumMomentDurations, moment.duration(0));
    },

    totalTime() {
      // prepTime + performTime durations sum
      return [
        this.prepTime,
        this.performTime,
        this.cookTime
      ]
        .map(this.momentDuration)
        .reduce(this.sumMomentDurations, moment.duration(0));
    }
  },
  methods: {
    gatherStepsDurations(arr, s) {
      if (s.duration) {
        return arr.concat(s.duration);
      }

      return arr;
    }
  }
}
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul,
ol {
  display: flex;
  flex-direction: column;
  padding: 0;
}

ul {
  list-style-type: none;
}

.Recipe >>> .prep {
  background-color: rgba(128,0,128,0.45);
}

.Recipe >>> .perform {
  background-color: rgba(0,128,0,0.45);
}

.Recipe >>> .cook {
  background-color: rgba(255,128,0,0.45);
}
</style>
