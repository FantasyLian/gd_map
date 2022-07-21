<template>
  <Error msg="Server Error" />
</template>

<script>
// @ is an alias to /src
import Error from '@/components/Error.vue'

export default {
  name: 'serverError',
  components: {
    Error
  }
}
</script>
