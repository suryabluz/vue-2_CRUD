<template>

    <div class="container mt-3">
        <h4 style="text-align: center">{{ $t('AddUserDetails') }}</h4>
        <div class="row mt-3 justify-content-center ">
            <div class="col-md-4">
                <form @submit.prevent="createUser()">
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
                    <div class="row mb-2">
                        <div class="col" style="margin-top: 7px;"> <label>{{$t('DateOfBirth')}}:</label></div>
                        <div class="col"> <input style="width: 230px;" type="date" :max='todayDate'
                                v-model="$v.list.dob.$model" class="form-control" placeholder="Date of birth"
                                :class="{ 'is-invalid': $v.list.dob.$error, 'is-valid': !$v.list.dob.$invalid }" />
                            <div class="invalid-feedback">
                                <span v-if="!$v.list.dob.required"> Date of birth field is required</span>

                            </div>
                        </div>

                    </div>
                    <div class="mb-2">
                          <label>{{$t('Gender')}}: </label>&nbsp;
                        <input id="Male" type="radio" v-model="$v.list.gender.$model" value="Male"
                            :class="{ 'is-invalid': $v.list.gender.$error, 'is-valid': !$v.list.gender.$invalid }" />
                        <label class="mr-20" for="Male">{{$t('Male')}}</label>
                        <input id="Female" type="radio" v-model="$v.list.gender.$model" value="Female"
                            :class="{ 'is-invalid': $v.list.gender.$error, 'is-valid': !$v.list.gender.$invalid }" />
                        <label for="Female">{{$t('Female')}}</label>
                        <div class="invalid-feedback">
                            <span v-if="!$v.list.gender.required">Gender field is required</span>

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
                        <router-link class="mr-5 btn btn-primary" to="/"><i class="fa fa-arrow-left"></i> {{ $t('Back') }}
                        </router-link>
                        <button value="" class="mr-5 btn btn-success">{{$t('Create')}}</button>

                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
// import useVuelidate from '@vuelidate/core'
import { UserService } from '@/service/UserService'
import { required, email, minLength, maxLength, sameAs } from 'vuelidate/lib/validators'
// import Vue from 'vue'
// Vue.use(window.vuelidate.default)
export default {
    name: 'AddUser',
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
                dob: { required },
                gender: { required },
                password: {
                    required,
                    minLength: minLength(8), maxLength: maxLength(15)
                },
                confirmPassword: {
                    required,
                    sameAsPassword: sameAs('password')
                }
            }
        }
    },
    data: function () {

        return {
            todayDate: '',


            list: {
                name: '',
                dob: '',
                email: '',
                phone: '',
                gender: '',
                password: '',
                confirmPassword: ''
            }
        }


    },


    created: function () {



        var currentDate = new Date();

        if (currentDate.getDate() < 10) {
            var date = '0' + currentDate.getDate();
        }
        else {
            date = currentDate.getDate();
        }
        if (currentDate.getMonth() + 1 < 10) {
            var month = '0' + (currentDate.getMonth() + 1);


        }
        else {
            month = currentDate.getMonth() + 1
        }
        this.todayDate = `${currentDate.getFullYear()}-${month}-${date}`



    },


    methods: {
        createUser: async function () {
            this.$v.$touch()

            if (!this.$v.$error) {
                try {
                    let response = await UserService.createNewUser(this.list);
                    let res = response
                    console.log(res)
                    if (response) {
                        return this.$router.push('/');
                    }
                    else {
                        return this.$router.push('/');
                    }
                }
                catch (err) {
                    this.errorMessage = err;
                }
            }
            else {
                this.$alert('Please Enter all required field')
            }

        }
    },


}

</script>
<style>
</style>