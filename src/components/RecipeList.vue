<template>
  <div>
    <div v-for="(recipe, idx) in recipes" :key="idx">
      <Recipe :recipe="recipe" />
    </div>
  </div>
</template>

<script>
import Recipe from '@/components/Recipe';

export default {
  name: 'RecipeList',
  components: {
    Recipe
  },
  props: {
    recipes: Array
  }
};
</script>

<style scoped>
</style>
