<script setup>
import { ref, inject } from 'vue';
const Swal = inject('swal')
const open = () => Swal({
  position: 'top-end',
  icon: 'success',
  title: 'Your work has been saved',
  showConfirmButton: false,
  timer: 1500
})
</script>
<template>
  <h1>Home page</h1>
  <div class="row">
    <div class="col-12">
      <div class="panel panel-default">
        <div class="panel-body">
          <button class="btn btn-success" @click="open">
            Call Sweetalert from plugins
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
