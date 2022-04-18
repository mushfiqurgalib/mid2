<template>
    <form @submit.prevent ="handleSubmit"  >
        <h3> Login </h3>

        <div class="form-group">
            <label> ID </label>
            <input type="text" class="form-control" v-model="id" placeholder="ID"/>
        </div>

        <div class="form-group">
            <label> Password </label>
            <input type="password" class="form-control" v-model="password"  placeholder="Password"/>
        </div>

        <button type="submit " class="btn btn-primary btn-block"> Login </button>
    </form>


</template>


<script>
import axios from 'axios'
export default{
    name: 'Login',

    data(){
        return {
            id: '',
            password:''
        }
    },

    methods:{
        
        async handleSubmit() {
            console.log(this.id + this.password);
    
            const response= await axios.post('login.php',{
                id :this.id,
                password: this.password
            });
            
             localStorage.setItem('token', response.data.token);

            
             this.$router.push('/') ;
            
        },

        
    }
}

</script>