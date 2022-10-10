<template>
  <div
    :id="'collapse-' + id"
    class="accordion-collapse collapse show"
    :aria-labelledby="'heading-' + id"
    :data-bs-parent="'#accordion-' + id"
  >
    <div class="accordion-body row">
      <Add :payment="state.payments[0]" first />
      <Payment
        v-for="payment in state.payments"
        :key="payment.id"
        :payment="payment"
        :total="total"
        :unit="unit"
      />
    </div>
  </div>
</template>

<script>
import Payment from './Payment.vue'
import Add from './Add.vue'
import { PaymentsStore } from '@/stores/PaymentsStore'

const { state } = PaymentsStore

export default {
  name: 'AccordionBody',
  props: ['id', 'total', 'unit'],
  components: { Payment, Add },
  data () {
    return {
      state
    }
  }
}
</script>

<style>
.accordion-body {
  flex-wrap: nowrap;
  overflow-x: scroll;
  padding-left: 2rem;
  padding-right: 2rem;
  position: relative;
}
</style>
