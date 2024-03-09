<template>

    <div class="container mt-3">
        <h4 style="text-align: center">{{$t('Signup')}}</h4>
        <div class="row mt-3 justify-content-center ">
            <div class="col-md-4">
                <form @submit.prevent="signUpSubmitr()">
                    <div class="mb-2">
                      <label>{{ $t('Name') }}:</label>
                        <input type="text" v-model.trim="$v.list.name.$model" class="form-control"
                            :class="{ 'is-invalid': $v.list.name.$error, 'is-valid': !$v.list.name.$invalid }"
                            placeholder="Name" />
                        
                        <div class="invalid-feedback">
                            <span v-if="!$v.list.name.required">Name field is required</span>
                            <span v-if="!$v.list.name.minLength">Minimum 3 characters</span>


                        </div>
                    </div>


                    <div class="mb-2">
                          <label>{{ $t('Email') }}:</label>
                        <input type="text" v-model="$v.list.email.$model" class="form-control"
                            :class="{ 'is-invalid': $v.list.email.$error, 'is-valid': !$v.list.email.$invalid }"
                            placeholder="Email" />
                        <div class="invalid-feedback">
                            <span v-if="!$v.list.email.required">Email field is required</span>
                            <span v-if="!$v.list.email.email">Invalid Email</span>


                        </div>
                    </div>
                    <div class="mb-2">
                         <label>{{ $t('PhoneNumber') }}:</label>
                        <input type="text" v-model="$v.list.phone.$model" class="form-control" maxlength="10"
                            :class="{ 'is-invalid': $v.list.phone.$error, 'is-valid': !$v.list.phone.$invalid }"
                            placeholder="Phone" />
                        <div class="invalid-feedback">
                            <span v-if="!$v.list.phone.required">Phone field is required</span>
                            <span v-if="!$v.list.phone.minLength">Invalid Phone number</span>
                        </div>
                    </div>
                    
                  

                    <div class="mb-2">
                          <label>{{$t('NewPassword')}}: </label>
                        <input type="text" v-model.trim="$v.list.password.$model" class="form-control"
                            :class="{ 'is-invalid': $v.list.password.$error, 'is-valid': !$v.list.password.$invalid }"
                            placeholder="New password" />
                       
                        <div class="invalid-feedback">
                            <span v-if="!$v.list.password.required">Password is required</span>
                            <span v-if="!$v.list.password.minLength">Minimum 8 characters</span>
                            <span v-if="!$v.list.password.maxLength">Maximum 8 characters</span>
                            


                        </div>
                    </div>
                    <div class="mb-2">
                         <label>{{$t('ConfirmPassword')}}: </label>
                        <input type="text" v-model.trim="$v.list.confirmPassword.$model" class="form-control"
                            :class="{ 'is-invalid': $v.list.confirmPassword.$error, 'is-valid': !$v.list.confirmPassword.$invalid }"
                            placeholder="Confirm Password" />
                       
                        <div class="invalid-feedback">
                            <span v-if="!$v.list.confirmPassword.required">Confirm Password is required</span>
                            <span v-if="!$v.list.confirmPassword.sameAsPassword">Confirm Password not match</span>
                            


                        </div>
                    </div>

                    <div class="mb-2">
                        <router-link class="mr-5 btn btn-primary" to="/login">{{$t('Login')}}
                        </router-link>
                        <button @click="signUpSubmitr" class="mr-5 btn btn-success">{{$t('Signup')}}</button>

                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import { UserService } from '@/service/UserService'
import { required, email, minLength, maxLength, sameAs } from 'vuelidate/lib/validators'
// import Vue from 'vue'
// Vue.use(window.vuelidate.default)
export default {
    name: 'SignUp',
    setup() {
        // return { $v: useVuelidate() }
    },
    validations() {
        return {
            list: {
                name: {
                    required,
                    minLength: minLength(3)
                },
                email: {
                    required,
                    email
                },
                phone: {
                    required,
                    minLength: minLength(10)
                },
               
                password:{ required,
                    minLength: minLength(8), maxLength:maxLength(15)},
                    confirmPassword:{ required,
                    sameAsPassword:sameAs('password')}
            }
        }
    },
    data: function () {

        return {
            todayDate: '',


            list: {
                name: '',
                
                email: '',
                phone: '',
               
                password:'',
                confirmPassword:''
            }
        }


    },


    created: function () {

    },


    methods: {
        signUpSubmitr: async function () {
            this.$v.$touch()

            if (!this.$v.$error) {
                try {
                    let response = await UserService.register(this.list);
                    let res = response
                    console.log(res)
                    if (response) {
                        return this.$router.push('/login');
                    }
                    
                }
                catch (err) {
                    this.errorMessage = err;
                }
            }
            else{
               this.$alert('Please Enter all required field')
            }

        }
    },


}

</script>
<style>
</style>
