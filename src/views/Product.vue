<script setup>
import FormModalProduct from '@/components/FormModalProduct.vue';

import { ref } from 'vue';

const modal = ref(null);

</script>
<template>
  <h1>Product page</h1>
  <div class="row">
    <div class="col-12">
      <div class="card card-default">
        <div class="card-header">
          <h4>Inherit base modal example</h4>
        </div>
        <div class="card-body">
          <button class="btn btn-success" @click="modal.open()">
            Add Product
          </button>
        </div>
      </div>
    </div>
  </div>

  <FormModalProduct ref="modal" />
</template>
