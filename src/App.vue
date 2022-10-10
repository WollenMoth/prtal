<template>
  <div id="app" class="container">
    <Payments id="payments" :total="182" unit="UF" />
  </div>
</template>

<script>
import Payments from './components/Payments'

export default {
  name: 'App',
  components: { Payments }
}
</script>

<style>
:root {
  --color-primary-blue-400: #3460dc;
  --color-neutral-grey-400: #94a3b8;
  --color-ice-blue: #e2e8f0;
}

#app {
  font-family: "Inter", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0f172a;
  margin-top: 60px;
}
</style>
