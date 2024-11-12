<template>
  <div class="mt-6">
     <div class="text-2xl text-orange-300 font-bold">
      Experience
    </div>
     <div class="ml-5 mt-2">
      <ul>
        <li
          class="list-disc"
          v-for="(experience, index) in experiences"
          :key="index"
        >
          {{ experience }}
        </li>
      </ul>
    </div>
  </div>
</template>
 
<script setup>
const experiences = ref([
  "Workshop Framework",
  "Figma Foundation(UX/UI Designer)",
])
</script>