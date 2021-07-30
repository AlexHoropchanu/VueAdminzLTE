<template>
  <div class="wrapper"> 
    <h1>Login</h1>
        <form @submit.prevent="submitHandler">
          <input type="email" v-model="email" />
          <input type="password" v-model="password" />
    <button type="submit">submit</button></form>
    <div v-if="error" class="error" >{{getEmail}}</div>
  </div>
</template>

<script>


export default {

  name: "Login",
  props: {},
  data(){
    return{
    email: 'd@gmail.com',
    password:'111111'
    }
  },
  methods:{
    async submitHandler(){
      try {
        await this.$store.dispatch('login', {email:this.email, password:this.password})
      } catch (error) {
        console.log('ola')
      }
      
    }
  }

}
</script>

<style lang ="scss" scoped>
h1{
  text-align: center;
  color: yellow;
  margin-bottom: 50px;
}
.wrapper{
  display: flex;
  justify-content: center;
  flex-direction: column;
}
form{
  display: flex;
  flex-direction: column;
      justify-content: center;
      align-items: center;
  input{
    margin-bottom: 20px;
    width: 300px;
    color: yellow;
    background-color: rgb(92, 92, 1);
  }
  button{
    background-color: orange;
    border: none;
    width: 150px;
  }
}
</style>
