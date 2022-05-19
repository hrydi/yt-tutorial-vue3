<script setup>
import { Modal } from 'bootstrap'

import { ref, onMounted } from 'vue';

const el = ref(null);
const modal = ref(null);
const emit = defineEmits(['onShow', 'onShown', 'onHide', 'onHidden'])
defineExpose({ open, close })

onMounted(() => {
  modal.value = new Modal(el.value, { keyboard: false, backdrop: 'static' })
  el.value.addEventListener('show.bs.modal', ev => emit('onShow', ev))
  el.value.addEventListener('shown.bs.modal', ev => emit('onShown', ev))
  el.value.addEventListener('hide.bs.modal', ev => emit('onHide', ev))
  el.value.addEventListener('hidden.bs.modal', ev => emit('onHidden', ev))
});

function open() { modal?.value?.show() }
function close() { modal?.value?.hide() }

</script>
<template>
  <div class="modal" tabindex="-1" ref="el">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            <slot name="title"></slot>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div class="modal-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>