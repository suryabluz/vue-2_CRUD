<template>
<nav style="justify-content: left" class="navbar navbar-dark bg-success ">
    <div>
<router-link to="/" class="navbar-brand">
<i class="fa fa-group"></i> {{$t('Users')}}
</router-link>
</div>
<div>
<router-link to="/signup" class="navbar-brand">
 {{$t('Signup')}}
</router-link>
</div>
<div>
<router-link to="/login" class="navbar-brand">
 {{$t('Login')}}
</router-link>
</div>
<div class="lang">
<select class="custom-select" v-model="lang" @change="handleChange($event)">
<option value="en">English</option>
<option value="tm">Tamil</option>
<option value="tg">Telugu</option>

</select>
</div>
</nav>
</template>
<script>
export default {
    
name: 'NavBar',
data(){

    const lang = localStorage.getItem('lang') || 'en'
   return{
   lang:lang
}
},
methods:{
    handleChange(event){
        localStorage.setItem('lang',event.target.value);
        window.location.reload();
    }
}
}
</script>
<style>
.lang{
    position: absolute;
    right: 1%;
}
</style>