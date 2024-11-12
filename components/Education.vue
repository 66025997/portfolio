<template>
  <div class="mt-6">
     <div class="text-2xl text-orange-300 font-bold">
      Education
    </div>
     <div class="ml-5 mt-2">
      <ul>
        <li
          class="list-disc"
          v-for="(education, index) in education"
          :key="index"
        >
          {{ education }}
        </li>
      </ul>
    </div>
  </div>
</template>
 
<script setup>
const education = ref([
  "End of Sukhothai Wittayakom School 2019-2022",
   "University of Phayao 2023-until now",
])
</script>