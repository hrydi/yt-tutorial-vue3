<script setup>
import Modal from '@/components/Modal.vue';
import { ref, inject } from 'vue';

const el = ref(null);
const items = ref([])

const $swal = inject('swal')
const open = () => el?.value?.open()
const close = () => el?.value?.close()
const addItemAttribute = () => {
  items.value.push({ text: '' })
}
const removeItemAttribute = (index) => {
  const item = items.value[index]

  if(item.text !== '') {
    $swal({
      title: 'Are you sure?',
      text: `You won't be able to revert this!`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, remove it!',
      allowOutsideClick: false
    }).then((result) => {
      if (result.isConfirmed) {
        $swal(`${item.text} removed!`, '', 'success')
        items.value = items.value.filter((_, i) => i !== Number(index))
      }
    })

    return
  }

  items.value = items.value.filter((_, i) => i !== Number(index))
}
const submit = () => {
  $swal({
    title: 'Do you want to save the changes?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Save',
    denyButtonText: `Don't save`,
    allowOutsideClick: false
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      
      console.log(items.value);

      $swal('Saved!', '', 'success').then(_ => {
        close()
      })
    } else if (result.isDenied) {
      $swal('Changes are not saved', '', 'info').then(_ => {
        close()
      })
    }
  })
}

defineExpose({
  open,
  close
});
</script>
<template>
  <Modal ref="el">
    <template #title>Form Input Product</template>
    <template #footer>
      <button type="button" class="btn btn-secondary" @click="el.close()">Cancel</button>
      <button type="button" class="btn btn-primary" @click="submit">Submit</button>
    </template>
    <div class="row">
      <div class="col-12">
        <div class="form-group">
          <label class="form-label">Product Name</label>
          <input class="form-control" placeholder="product name">
        </div>
      </div>
      <div class="col-12 mt-2">
        <div class="form-group">
          <button class="btn btn-default btn-outline-success" @click="addItemAttribute">
            Add attributes
          </button>
        </div>
      </div>
      <div class="col-12">
        <div class="form-group">
          <label class="form-label">Attributes</label>
          <div class="input-group mt-2" v-for="(item, index) in items" :key="index">
            <button class="btn btn-secondary" @click="removeItemAttribute(index)">Remove</button>
            <input class="form-control" placeholder="attribute name" v-model="item.text">
          </div>
        </div>
      </div>
    </div>
  </Modal>
</template>