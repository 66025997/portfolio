<template>
    <div>
      <div class="container mx-auto mt-6">
        <div class="text-2xl text-orange-300 font-bold">
          Skills
        </div>
        <div class="grid grid-cols-12 mt-2">
          <div class="col-span-6 ">
            <Skill 
              title="Hard Skill"
              :skills="hardSkills"
            />
          </div>
          <div class="col-span-6">
            <Skill
              title="Framework"
              :skills="framework"
            />
          </div>
   
        </div>
   
        <Experience />
        <Education/>
        <photo/>
      </div>
    </div>
  </template>
   
  <script setup>
  const hardSkills = ref([
    'c+',
    'pyhton',
    'Figma',
    'HTML',
    'Javascript'
  ])
   
  const framework = ref([
    'nuxt',
    'vue',
    'bootstrap',
  ])
  </script>