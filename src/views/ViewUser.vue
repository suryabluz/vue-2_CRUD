<template>
<div class="container mt-3">
    <h4 style="text-align: center"> {{$t('UserDetails')}} </h4>
    <div class="row justify-content-center mt-3">
        <div class="col-md-4">
            <form>
                <div class="mb-2">
                  <label>{{$t('Name')}}:</label>  <input type="text" v-model="list.name" class="form-control" disabled placeholder="Name"/>
                </div>
                <div class="mb-2">
                    <label>{{$t('DateOfBirth')}}:</label> <input type="text" v-model="list.dob" class="form-control" disabled placeholder="Date of birth"/>
                </div>
                <div class="mb-2">
                    <label>{{$t('Email')}}:</label> <input type="text" v-model="list.email"  class="form-control" disabled placeholder="Email"/>
                </div>
                <div class="mb-2">
                    <label>{{$t('Phone')}}:</label> <input type="text" v-model="list.phone" class="form-control" disabled placeholder="Phone Number"/>
                </div>
                <div class="mb-2">
                   <label>{{$t('Gender')}}:</label>   <input type="text" v-model="list.gender" class="form-control" disabled placeholder="Phone Number"/>
                </div>
                <div class="mb-2">
                  <router-link class="btn btn-success" to="/">{{$t('Back')}}</router-link>
                </div>
            </form>
        </div>
    </div>
</div>

</template>
<script>
import { UserService } from '@/service/UserService';

export default {

name: 'ViewUser',
data: function(){
    return{
        id: this.$route.params.id,
        list:{
            name:'',
            dob:'',
            email:'',
            phone:'',
            gender:''
        }
    }
},
created: async function(){
    try{
let response = await UserService.getUser(this.id);
this.list = response.data;
    }
    catch(err){
        console(err);
    }
}
}
</script>
<style>
/* body {
    text-align: center;
} */
</style>