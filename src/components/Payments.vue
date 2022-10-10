<template>
  <Accordion :id="id">
    <AccordionHeader :id="id" :total="total" :unit="unit" />
    <AccordionBody :id="id" :total="total" :unit="unit" />
  </Accordion>
</template>

<script>
import Accordion from './Accordion.vue'
import AccordionHeader from './AccordionHeader.vue'
import AccordionBody from './AccordionBody.vue'

export default {
  name: 'Payments',
  props: ['id', 'total', 'unit'],
  components: { Accordion, AccordionHeader, AccordionBody }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
