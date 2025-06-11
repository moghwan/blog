<template>
  <main>

    <div class="til-header">
      <p class="til-title">Today I learned</p>
      <p>Random cool stuffs I learned at random moments</p>
    </div>

    <slot/>
  </main>
</template>

<style scoped lang="ts">
css({
  '.til-header': {
    minHeight: '20vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '.til-title': {
      fontWeight: 'bold',
      fontSize: '2rem',
    }
    },
})
</style>