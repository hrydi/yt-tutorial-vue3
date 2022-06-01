<script setup>
import { ref, inject, onMounted } from 'vue';
const Swal = inject('swal')
const Api = inject('http')
const product = ref({
  loading: false,
  items: [],
  error: null
})
const open = () => Swal({
  position: 'top-end',
  icon: 'success',
  title: 'Your work has been saved',
  showConfirmButton: false,
  timer: 1500
})

const fetchProductItems = async () => {
  product.value.loading = true
  try {
    product.value.items = await Api('https://jsonplaceholder.typicode.com/posts')
    product.value.loading = false
  } catch (e) {
    product.value.loading = false
    product.value.error = e.message
    Swal({
      title: 'Error Occurred !',
      html: e.message,
      icon: 'error'
    })
  }
}

onMounted(function() {
  fetchProductItems()
})
</script>
<template>
  <h1>Home page</h1>
  <div class="row">
    <div class="col-12">
      <div class="panel panel-default">
        <div class="panel-body">
          <div class="btn-group">
            <button class="btn btn-success" @click="open">
              Call Sweetalert from plugins
            </button>
            <button class="btn btn-warning" @click="fetchProductItems" :disabled="product.loading">
              <template v-if="product.loading">
                <span v-if="!product.error">Please wait...</span>
                <span v-else>{{ product.error }}</span>
              </template>
              <template v-else>
                Fetch Product Items
              </template>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
