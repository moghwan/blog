<script setup lang="ts">
import { useContentPreview } from '#imports'

type Til = {
  _path: string
  title: string
  date: string
  description: string
  badges?: { bg: string, text: string, content: string }[]
}

const props = defineProps({
  til: {
    type: Object,
    required: true,
    validator: (value: Til) => {
      if (value?._path && value.title) { return true }
      return false
    }
  },
  featured: {
    type: Boolean,
    default: false
  }
})

const id = computed(() => {
  // @ts-ignore
  return (process.dev || useContentPreview()?.isEnabled()) ? props.til?._id : undefined
})
</script>

<template>
  <article
    v-if="til._path && til.title"
    :data-content-id="id"
  >
      <NuxtLink :to="til._path">
    <div class="content">
        <h1
        class="headline"
        >
          {{ til.title }}
        </h1>

      <p class="description">
        {{ til.description }}
      </p>
      <time>
        {{ formatDate(til.date) }}
      </time>
    </div>
      </NuxtLink>
  </article>
</template>

<style scoped lang="ts">
css({
  article: {
    border: '1px solid #eee',
    borderRadius: '5px',
    boxShadow: '0px 0px 4px 2px rgba(0,0,0,0.1)',
    margin: 'auto 6rem',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '{space.4}',
    img: {
      width: '100%',
      aspectRatio: '16 / 9',
      objectFit: 'cover',
      borderRadius: '{radii.md}',
    },
    '.content': {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      '.headline': {
        text: '2xl',
        marginBottom: '{space.2}',
        fontWeight: '{fontWeight.semibold}',
        lineClamp: 2,
      },
      '.description': {
        marginBottom: '{space.4}',
        lineClamp: 2,
      },
      time: {
        text: 'sm',
        // TODO: add secondary color token
        color: '{color.gray.500}',
        '@dark': {
          color: '{color.gray.500}',
        }
      }
    },
  }
})
</style>
