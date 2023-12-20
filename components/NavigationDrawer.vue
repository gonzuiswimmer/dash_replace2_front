<template>
  <div>
   <v-app-bar clipped-left fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon>
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-toolbar-title class="ml-2"><v-btn>{{ title }}</v-btn></v-toolbar-title>
      <v-spacer />
    </v-app-bar>
    <v-navigation-drawer
        v-model="drawer"
        clipped
        fixed
        app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <!-- ログアウト -->
      <v-list v-if="this.$auth.loggedIn">
        <v-list-item>
          <v-list-item-action>
            <v-icon icon="mdi-close"></v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title><v-btn @click="logout()" role="button">Logout</v-btn></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      title: 'B-Dash',
    }
  },
  // methods: {
  //     async login() {
  //       try {
  //         const response = await this.$auth.loginWith('laravelSanctum', { data: this.form });
  //         this.$auth.setUser(response.data[0]);
  //         await this.$auth.fetchUser();
  //         console.log(response);
  //       } catch(error) {
  //         console.log(error);
  //       }
  //     },
  //   },
  methods: {
    async logout() {
      try{
        const response = await this.$auth.logout();
        console.log(response);
      }catch(error){
        console.log(error);
      }
    }
  }
}
</script>

<style>

</style>
