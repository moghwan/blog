<script setup lang="ts">
import { withTrailingSlash } from 'ufo'

const props = defineProps({
  path: {
    type: String,
    default: 'til'
  }
})

// @ts-ignore
const { data: _tils } = await useAsyncData('tils', async () => await queryContent(withTrailingSlash(props.path)).where({draft: false}).sort({ cover: -1 }).find())

const tils = computed(() => _tils.value || [])
</script>

<template>
  <div v-if="tils?.length" class="tils-list">
    <div>
      <TilsListItem class="til-item" v-for="(til, index) in tils" :key="index" :til="til" />
    </div>
  </div>
  <div v-else class="tour">
    <p>Seems like there are no tils yet.</p>
    <p>
      You can start by
      <!-- eslint-disable-next-line -->
      <ProseA href="https://alpine.nuxt.space/tils/write-tils">creating</ProseA> one in the <ProseCodeInline>tils</ProseCodeInline> folder.
    </p>
  </div>
</template>

<style scoped lang="ts">
css({
  '.tils-list': {
    '.til-item': {
      marginBottom: '{space.12}',
    },
    '@sm': {
      px: '{space.12}',
    },
    '@md': {
      px: 0,
    },
    '.layout': {
      display: 'grid',
      gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
      gap: '{space.12}',
      '@md': {
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
        gap: '{space.8}',
      },
      '@lg': {
        gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
      },
    }
  },
  '.tour': {
    minHeight: '30vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
</style>
