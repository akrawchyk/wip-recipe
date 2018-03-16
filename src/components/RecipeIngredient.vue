<template>
  <div class="recipeIngredient" itemprop="recipeIngredient">
    {{ingredient.amount}} {{ingredient.text}}
  </div>
</template>

<script>
export default {
  name: 'RecipeIngredient',
  props: {
    ingredient: Object
  }
}
</script>

<style scoped>
</style>
