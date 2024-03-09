<template>
  <div class="container mt-3">
    <h4 style="text-align: center">{{ $t('EditUserDetails') }}</h4>
    <div class="row mt-3 justify-content-center">
      <div class="col-md-4">
        <form @submit.prevent="updateUser()">
          <div class="mb-2">
            <label>{{ $t('Name') }}:</label>
            <input
              type="text"
              v-model.trim="list.name"
              class="form-control"
              :class="{
                'is-invalid': $v.list.name.$error,
                'is-valid': !$v.list.name.$invalid,
              }"
              placeholder="Name"
            />

            <div class="invalid-feedback">
              <span v-if="!$v.list.name.required">Name field is required</span>
              <span v-if="!$v.list.name.minLength">Minimum 3 characters</span>
            </div>
          </div>

          <div class="mb-2">
            <label>{{ $t('Email') }}:</label>
            <input
              type="text"
              v-model="list.email"
              class="form-control"
              :class="{
                'is-invalid': $v.list.email.$error,
                'is-valid': !$v.list.email.$invalid,
              }"
              placeholder="Email"
            />
            <div class="invalid-feedback">
              <span v-if="!$v.list.email.required"
                >Email field is required</span
              >
              <span v-if="!$v.list.email.email">Invalid Email</span>
            </div>
          </div>
          <div class="mb-2">
            <label>{{ $t('PhoneNumber') }}:</label>
            <input
              type="text"
              v-model="list.phone"
              class="form-control"
              maxlength="10"
              :class="{
                'is-invalid': $v.list.phone.$error,
                'is-valid': !$v.list.phone.$invalid,
              }"
              placeholder="Phone"
            />
            <div class="invalid-feedback">
              <span v-if="!$v.list.phone.required"
                >Phone field is required</span
              >
              <span v-if="!$v.list.phone.minLength">Invalid Phone number</span>
            </div>
          </div>
          <div class="row mb-2">
            <div class="col" style="margin-top: 7px">
              <label>{{ $t('DateOfBirth') }}:</label>
            </div>
            <div class="col">
              <input
                style="width: 230px"
                type="date"
                :max="todayDate"
                v-model="list.dob"
                class="form-control"
                placeholder="Date of birth"
                :class="{
                  'is-invalid': $v.list.dob.$error,
                  'is-valid': !$v.list.dob.$invalid,
                }"
              />
              <div class="invalid-feedback">
                <span v-if="!$v.list.dob.required">
                  Date of birth field is required</span
                >
              </div>
            </div>
          </div>
          <div class="mb-2">
            <label>{{ $t('Gender') }}: </label>&nbsp;
            <input
              id="Male"
              type="radio"
              v-model="list.gender"
              value="Male"
              :class="{
                'is-invalid': $v.list.gender.$error,
                'is-valid': !$v.list.gender.$invalid,
              }"
            />
            <label class="mr-20" for="Male">{{ $t('Male') }}</label>
            <input
              id="Female"
              type="radio"
              v-model="list.gender"
              value="Female"
              :class="{
                'is-invalid': $v.list.gender.$error,
                'is-valid': !$v.list.gender.$invalid,
              }"
            />
            <label for="Female">{{ $t('Female') }}</label>
            <div class="invalid-feedback">
              <span v-if="!$v.list.gender.required"
                >Gender field is required</span
              >
            </div>
          </div>
          <div class="mb-3">
            <router-link class="mr-5 btn btn-primary" to="/"
              ><i class="fa fa-arrow-left"></i> {{ $t('Back') }}
            </router-link>
            <button @click="updateUser" value="" class="btn btn-success">
              {{ $t('Update') }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { UserService } from '@/service/UserService';
import { required, email, minLength } from 'vuelidate/lib/validators';
export default {
  name: 'EditUser',
  validations() {
    return {
      list: {
        name: {
          required,
          minLength: minLength(3),
        },
        email: {
          required,
          email,
        },
        phone: {
          required,
          minLength: minLength(10),
        },
        dob: { required },
        gender: { required },
      },
    };
  },

  data: function () {
    return {
      id: this.$route.params.id,
      todayDate: '',

      list: {
        name: '',
        dob: '',
        email: '',
        phone: '',
        gender: '',
      },
    };
  },
  created: async function () {
    var currentDate = new Date();

    if (currentDate.getDate() < 10) {
      var date = '0' + currentDate.getDate();
    } else {
      date = currentDate.getDate();
    }
    if (currentDate.getMonth() + 1 < 10) {
      var month = '0' + (currentDate.getMonth() + 1);
    } else {
      month = currentDate.getMonth() + 1;
    }
    this.todayDate = `${currentDate.getFullYear()}-${month}-${date}`;

    try {
      let response = await UserService.getUser(this.id);
      this.list = response.data;
    } catch (err) {
      this.errorMessage = err;
    }
  },
  methods: {
    async updateUser() {
      this.$v.$touch();

      if (!this.$v.$error) {
        try {
          let response = UserService.updateUser(this.id, this.list);
          if (response) {
            this.$router.push('/');
          }
        } catch (err) {
          this.errorMessage = err;
        }
      } else {
        this.$alert('Please Enter all required field');
      }
    },
  },
};
</script>
<style></style>
