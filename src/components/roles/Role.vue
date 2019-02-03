<template>
     <v-form @submit.prevent="save()" v-model="valid">
    <v-container>
      <v-layout>
        <v-flex
          xs12
          md4
        >
          <v-text-field
            v-model="role.name"
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
export default {
    name: 'role',
    data() {
        return {
            valid: false,
            role: {
                id: null,
                name: ''
            },
             nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 50 || 'Name must be less than 50 characters'
      ],
        }
    },
    methods: {
        save() {
            if(!this.valid) {
                return
            }
            if(this.role.id) {
                axios.put(`/roles/${this.role.id}`, this.role)
                .then(() => this.$router.push({path: '/roles'}))
            }else {
                axios.post('roles', this.role)
                .then(() => this.$router.push({path: '/roles'}))
            }
           
            
        }
    },
    created () {
        if(this.$route.params.id) {
            axios(`/roles/${this.$route.params.id}`)
            .then(result => this.role = result.data.data)
        }
    }
    
}
</script>

<style>

</style>
