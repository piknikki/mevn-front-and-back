<template>
  <h1>Profile View</h1>
  <p>{{ userStore.user }}</p>
</template>

<script>
import { useUserStore } from "../stores/UserStore";
export default {
  name: "ProfileView",
  setup() {
    const userStore = useUserStore()

    return {
      userStore
    }
  }
}
</script>

<style scoped>

</style>
