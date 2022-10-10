<template>
  <div class="accordion" :id="'accordion-' + id">
    <div class="accordion-item"><slot /></div>
  </div>
</template>

<script>
export default {
  name: 'Accordion',
  props: ['id']
}
</script>
