<template>
  <div class="payment">
    <div class="circle" />
    <h3>{{ payment.name }}</h3>
    <p>
      <strong>
        {{ Math.round(total * payment.percentage * 10) / 10 }} {{ unit }}
      </strong>
      ({{ payment.percentage * 100 }}%)
    </p>
    <p>{{ toShortFormat(payment.expiration) }}</p>
    <Add :payment="payment" />
  </div>
</template>

<script>
import Add from './Add.vue'

const toShortFormat = date => {
  const monthNames = [
    'Ene',
    'Feb',
    'Mar',
    'Abr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]

  const day = date.getDate()

  const monthIndex = date.getMonth()
  const monthName = monthNames[monthIndex]

  const year = date.getFullYear()

  return `${day} ${monthName}, ${year}`
}

export default {
  name: 'Payment',
  props: ['payment', 'total', 'unit'],
  components: { Add },
  data () {
    return {
      toShortFormat
    }
  }
}
</script>

<style>
.payment {
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  position: relative;
  width: 25%;
}

.circle {
  background-color: var(--color-ice-blue);
  border: 0.2rem solid white;
  border-radius: 50%;
  height: 3rem;
  margin: 0.5rem;
  transition: all 0.3s ease-in-out;
  width: 3rem;
}

.circle:hover {
  background-color: unset;
  border: 0.2rem solid var(--color-primary-blue-400);
}

.payment::before {
  background-color: var(--color-ice-blue);
  content: "";
  height: 0.1rem;
  left: 0;
  position: absolute;
  top: 1.95rem;
  width: 100%;
}

.payment p {
  margin: 0;
}
</style>
