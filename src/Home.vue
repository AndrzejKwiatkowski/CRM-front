<template>
  <v-content>
    <router-view></router-view>
  </v-content>
</template>

<script>


export default {
  name: 'Home',
 
  data: () => ({
      drawer: null,
      items: [
        { icon: 'settings', text: 'Settings' },
        { icon: 'chat_bubble', text: 'Trash' },
        { icon: 'help', text: 'Help' },
        { icon: 'phonelink', text: 'App downloads' },
        { icon: 'keyboard', text: 'Keyboard shortcuts' }
      ]
    }),
    props: {
      source: String
    }
}
</script>
<style lang="stylus">
  #keep
    .v-navigation-drawer__border
      display: none
</style>
