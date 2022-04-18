<template>
    <form @submit.prevent="handleSubmit"> 
        <h3> Recover Password </h3>

        <div class="form-group">
            <label> ID </label>
            <input type="number" class="form-control" v-model="id" placeholder="ID"/>
        </div>

       

           <!-- <div class="form-group">
            <label> Last Name </label>
            <input type="text" class="form-control" v-model="last_name" placeholder="Last name"/>
        </div> -->

        <div class="form-group">
            <label> Mobile Number </label>
            <input type="number" class="form-control" v-model="mobile" placeholder="Mobile Number"/>
        </div>

    

        <!--
              <div class="form-group">
            <label> Confirm Password </label>
            <input type="password" class="form-control"  v-model="password_confirm" placeholder="Confirm Password"/>
        </div> -->

        <p class="error" v-if="errors.message">{{ errors.message }}</p>

        <button  class="btn-primary btn-block" input type="submit"  > Sign Up </button>

          <!-- <input id="button" type="submit" value="Login"><br> -->

    </form>

</template>



<script>

import axios from 'axios'

export default {
        name: 'ForgetPassword',

        data(){
            return{
                id : '',
                name:'',
                mobile:'',
                errors: {
                    status: '',
                    message: ''
                }

            }
        },

        methods:{
            
            async handleSubmit(){
                    await axios.post('/forget.php', {
                    id: this.id,
                    name:this.name,
                
                    mobile : this.mobile
                
              }).then(res=>{
                  console.log(res)
              }).catch(err=>{
                  this.errors.status = err.status
                  this.errors.message = err.message
                  console.log(err);
              });
              

              localStorage.setItem('id', this.id)

            this.$router.push('/Forgetotp');
            console.log("Succesfull");
        }

    }
}
</script>
