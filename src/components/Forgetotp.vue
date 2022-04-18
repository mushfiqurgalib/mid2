<template>
    <form @submit.prevent="handleSubmit"> 
        <h3> OTP </h3>

        <div class="form-group">
            <label> Enter OTP </label>
            <input type="text" class="form-control" v-model="token" placeholder="OTP"/>
        </div>

        <button  class="btn-primary btn-block" input type="submit"  > Submit </button>
        

    </form>

</template>




<script>

import axios from 'axios'

export default {
        name: 'forgetotp',

        data(){
            return{
                token : ''
            }
        },

        methods:{
            
            async handleSubmit(){
                
                 //console.log(this.token);
                    await axios.post('/otpverify.php', {   
                    token : this.token,
                    id: localStorage.getItem('id')
                
              }).then((res)=>{
                  console.log(res)
              });


            this.$router.push('/recoveredpass');
            console.log("Succesfull");
        }

    }
}
</script>
