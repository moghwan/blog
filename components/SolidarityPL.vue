<script setup lang="ts">

</script>

<template>
  <div class="palestine-box">
    <span class="palestine-title">🇵🇸 Solidarity with Palestine.</span>
    <span class="palestine-text">We seek justice and peace, and strongly oppose all forms of injustice and genocide.</span>
  </div>
</template>

<style scoped>
.palestine-box {
  background-color: #15803d;
  color: white;
  text-align: center;
  padding: 1rem;
  line-height: 1.25;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
}

.palestine-title {
  font-size: 1.25rem;
  font-weight: bold;
}

.palestine-text {
  display: inline;
  font-size: 0.75rem;
}

@media (min-width: 640px) {
  .palestine-text {
    font-size: 0.875rem;
  }
}

@media (min-width: 768px) {
  .palestine-text {
    font-size: 1rem;
  }
}
</style>