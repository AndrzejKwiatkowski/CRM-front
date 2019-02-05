<template>
   <v-content>
       <v-form @submit.prevent="login()" >
    <v-container>
      <v-layout>
        <v-flex
          xs12
          md4
        >
          <v-text-field
            v-model="loginData.email"
            label="E-mail"
            required
          ></v-text-field>
        </v-flex>

        <v-flex
          xs12
          md4
        >
          <v-text-field
            v-model="loginData.password"
            label="Password"
            required
          ></v-text-field>
        </v-flex>

           <v-btn type="submit" color="success">Zaloguj</v-btn>
      </v-layout>
    </v-container>
  </v-form>
    </v-content>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'login',
     data () {
        return {
          loginData: {
            email: '',
            password: ''
          }
        }
      },
      watch: {
          logged () {
              this.$router.push({path: '/roles'})}
          
      },
      computed: {
       ...mapGetters({
          logged: 'logged'
       }) 
    },
      
      methods: {
          login() {
             this.$store.dispatch('login', this.loginData)
          }
      }
}
</script>

<style>

</style>
