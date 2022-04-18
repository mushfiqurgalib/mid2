<template>
    <form @submit.prevent="handleSubmit" > 
        <p align='center' style="color:Green;">Account Recovered Successfully</p>
        <h3> Password </h3>

        <div class="form-group">
            <label> Enter Password </label>
            <input type="password" class="form-control" id="pass" v-model="password" placeholder="Password"/>
        </div>

        <button  class="btn-primary btn-block" input type="submit"  > Submit </button>
        

    </form>

</template>




<script>

import axios from 'axios'

export default {
        name: 'Recoveredpassword',

        data(){
            return{
                password : '',
            }
        },

        methods:{
            
            async handleSubmit(){
                

                 //console.log(this.token);
                    await axios.post('/password.php', {   
                    password : this.password,
                     id: localStorage.getItem('id')
                
            
              }).then((res)=>{
                  console.log(res)
              });

            this.$router.push('/login');
            console.log("Succesfull");
        },

    }
}
</script>

