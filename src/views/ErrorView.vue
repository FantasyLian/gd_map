<template>
  <error-info msg="Page not found" />
</template>

<script>
// @ is an alias to /src
import ErrorInfo from '@/components/ErrorInfo.vue'

export default {
  name: 'ErrorView',
  components: {
    ErrorInfo
  }
}
</script>
