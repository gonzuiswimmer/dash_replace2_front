<template>
  <v-app dark>
    <NavigationDrawer />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer absolute app>
      <span class="mx-auto">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import NavigationDrawer from '../components/NavigationDrawer.vue'
export default {
  components: { NavigationDrawer },
  name: 'DefaultLayout',
  data() {
    return {
    }
  },
}
</script>
