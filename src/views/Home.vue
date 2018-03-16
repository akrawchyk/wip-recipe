<template>
  <div class="home">
    <h1>Recipes</h1>
    <RecipeList :recipes="recipes" />
  </div>
</template>

<script>
import RecipeList from '@/components/RecipeList.vue';

export default {
  name: 'home',
  components: {
    RecipeList
  },
  data() {
    return {
      recipes: [
        {
          title: 'Sweet and Sour Peppers',
          ingredients: [
            { text: "olive oil" },
            { text: "red onion", amount: 1 },
            { text: "red peppers", amount: 2 },
            { text: "sea salt" },
            { text: "freshly ground pepper" },
            { text: "sugar", amount: "1 tbsp" },
            { text: "red wine vinegar", amount: "3 tbsp" },
            { text: "extra virgin olive oil", amount: "1 tbsp" },
            { text: "basil, leaves only", amount: "small bunch" }
          ],

          steps: [
            {
              type: "prep",
              text: "Seed and thinly sliced the red peppers",
              duration: { minutes: 3 }
            },
            {
              type: "prep",
              text: "Shred the basil, leaves only",
              duration: { minutes: 1 }
            },
            {
              type: "prep",
              text: "Peel and slice the red onion",
              duration: { minutes: 3 }
            },
            {
              type: "perform",
              text: "Heat olive oil in a large frying pan",
              duration: { minutes: 2 }
            },
            {
              type: "perform",
              text:
              "Add the onions and peppers, then season with salt and pepper."
            },
            { type: "perform", text: "Add the sugar", after: "stir" },
            {
              type: "perform",
              text: "Saute over high heat until soft and colored",
              duration: { minutes: "4-5" }
            },
            { type: "perform", text: "Add the vinegar" },
            {
              type: "perform",
              text:
              "Let the vinegar bubble until it has reduced and the peppers are soft",
              duration: { minutes: "1-2" }
            },
            { type: "perform", text: "Turn down the heat to medium" },
            { type: "cook", text: "Cook", duration: { minutes: "2-3" } },
            { type: "perform", text: "Stir in the shredded basil" },
            { type: "cook", text: "Cook", duration: { seconds: 30 } }
          ]
        }
      ]
    }
  }
};
</script>
