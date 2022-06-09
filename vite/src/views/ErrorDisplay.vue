<script>
export default {
  props: {
    error: {
      type: String,
      default: 'Some random error happened'
    }
  }
}
</script>

<template>
  <h4>Oops! There was an error:</h4>
  <p>{{ error }}</p>
</template>
