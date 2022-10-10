<template>
  <button class="add" :onclick="handleClick">+</button>
</template>

<script>
import { PaymentsStore } from '@/stores/PaymentsStore'
const { state, modifyPercentage, addPayment } = PaymentsStore

const handleClick = () => {
  const index = this.first ? 0 : state.payments.find(p => p.id === this.payment.id)
  const id = Math.max(state.payments.map(p => p.id))
  const percentage = this.payment.percentage / 2

  modifyPercentage(this.payment, percentage)

  addPayment(index, 0, {
    id,
    name: 'Nuevo',
    percentage,
    expiration: new Date()
  })
}

export default {
  name: 'Add',
  props: ['payment', 'first'],
  data () {
    return {
      handleClick
    }
  }
}
</script>

<style>
.add {
  align-self: center;
  background-color: var(--color-ice-blue);
  border: 0.2rem solid white;
  border-radius: 50%;
  color: transparent;
  content: "";
  height: 1rem;
  left: 2.5%;
  padding: 0;
  position: absolute;
  top: 2.5rem;
  transition: all 0.3s ease-in-out;
  width: 1rem;
  z-index: 1;
}

.payment .add {
  left: 96%;
  top: 1.5rem;
}

.add:hover {
  color: var(--color-primary-blue-400);
  height: 2rem;
  left: 1.5%;
  top: 2rem;
  width: 2rem;
}

.payment .add:hover {
  left: 92%;
  top: 1rem;
}
</style>
