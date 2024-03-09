<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col-sm-6">
        <p class="h3 text-success">
          {{ $t('UsersList') }}
          <router-link to="/user/add" class="btn btn-success btn-sm"
            ><i class="fa fa-plus-circle"></i>&nbsp;
            {{ $t('New') }}</router-link
          >
        </p>
      </div>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th>
            {{ $t('Name') }}
          </th>
          <th>
            {{ $t('Gender') }}
          </th>
          <th>
            {{ $t('DateOfBirth') }}
          </th>
          <th>
            {{ $t('PhoneNumber') }}
          </th>
          <th>
            {{ $t('Email') }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="lis in list" :key="lis._id">
          <td>
            {{ lis.name }}
          </td>
          <td>
            {{ lis.gender }}
          </td>
          <td>
            {{ lis.dob }}
          </td>
          <td>
            {{ lis.phone }}
          </td>
          <td>
            {{ lis.email }}
          </td>
          <td>
            <router-link
              class="mr-5 btn btn-success btn-sm btn-block"
              :to="`/user/view/${lis._id}`"
              ><i class="fa fa-eye"></i> {{ $t('View') }}</router-link
            >
            <router-link
              class="mr-5 btn btn-warning btn-sm"
              :to="`/user/edit/${lis._id}`"
              ><i class="fa fa-pencil"></i> {{ $t('Edit') }}</router-link
            >
            <button
              class="mr-5 btn btn-danger btn-sm"
              @click="deletefn(lis._id)"
            >
              <i class="fa fa-trash"></i> {{ $t('Delete') }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { UserService } from '../service/UserService';
export default {
  name: 'UserList',
  data: function () {
    return {
      list: [],
    };
  },
  methods: {
    async deletefn(id) {
      try {
        let response = await UserService.deleteUser(id);
        if (response) {
          let response = await UserService.getAllUsers();
          this.list = response.data;
        }
      } catch (err) {
        this.errorMessage = err;
      }
    },
  },

  created: async function () {
    try {
      let response = await UserService.getAllUsers();
      this.list = response.data;
    } catch (error) {
      this.errorMessage = error;
    }
  },
};
</script>
<style>
table {
  text-align: center;
}
</style>
