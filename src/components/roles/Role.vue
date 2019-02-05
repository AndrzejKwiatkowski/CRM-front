<template>
     <v-form @submit.prevent="save()" v-model="valid">
    <v-container>
      <v-layout>
        <v-flex
          xs12
          md4
        >
          <v-text-field
            v-model="item.name"
            :rules="nameRules"
            label="Name"
            required
          ></v-text-field>
        </v-flex>

        
      </v-layout>
    </v-container>
    <v-btn type="submit" color="success">Zapisz role</v-btn>
  </v-form>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'role',
    data() {
        return {
            valid: false,
            nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 50 || 'Name must be less than 50 characters'
      ]
     }
    },
      computed: {
       ...mapGetters({
           item: 'item',
           refresh: 'refresh'
       }) 
    },
      watch: {
        refresh() {
            this.$router.push({path: '/roles'})
        }
    },
    methods: {
        save() {
            if(!this.valid) {
                return
            }
            if(this.item.id) {
                this.$store.dispatch('updateItem', this.item)
            }else {
                this.$store.dispatch('storeItem', this.item)
            }
           
            
        }
    },
    created () {
        if(this.$route.params.id) {
            this.$store.dispatch('getItem', this.$route.params.id)
        }
    }
    
}
</script>

<style>

</style>
