<template>
    <div class="container mt-3">
        <h4 style="text-align: center">{{$t('Login')}} {{$t('Page')}}</h4>
        <div class=" row mt-3 justify-content-center">
            <div class="col-md-4">
                <div class="mb-2">
                    <label>{{$t('UserName')}}</label>
                    <input type="text"  v-model="userName" class="form-control" />
                </div>

                <div class="mb-3">
                       <label>{{$t('Password')}}</label>
                    <input type="password"  v-model="password" class="form-control" />
                </div>
                <div class="mb-3">
                     <button  v-on:click="loginFn"  class="form-control btn btn-primary">{{$t('Login')}}</button> 

                </div>
            </div>
        </div>
    </div>
    </template>
<script>
import { mapActions } from 'vuex'
export default {
    name: 'LoginPage',
    data() {
        return {
            form:{
            userName: '',
            password: ''
            }
        }
    },
    validations() {

    },
    methods:{
       ...mapActions({
        signIn:'auth/signIn'
       }),
       loginFn(){
        this.signIn(this.form)
       }
    }
}
</script>
<style>
</style>