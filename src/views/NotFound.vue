<template>
  <Error msg="Not Found the Page" />
</template>

<script>
// @ is an alias to /src
import Error from '@/components/Error.vue'

export default {
  name: 'notFound',
  components: {
    Error
  }
}
</script>
