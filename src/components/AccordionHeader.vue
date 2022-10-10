<template>
  <h2 class="accordion-header d-flex justify-content-between" :id="'heading-' + id">
    <button
      class="accordion-button"
      type="button"
      data-bs-toggle="collapse"
      :data-bs-target="'#' + bodyId"
      aria-expanded="true"
      :aria-controls="bodyId"
    >
      Pagos
    </button>
    <div class="d-flex align-items-center">
      <button class="btn edit-button">
        Editar
      </button>
      <div class="header-text me-1">Por cobrar</div>
      <div class="header-total">{{ total }} {{ unit }}</div>
    </div>
  </h2>
</template>

<script>
export default {
  name: 'AccordionHeader',
  props: ['id', 'total', 'unit'],
  data () {
    return {
      bodyId: 'collapse-' + this.id
    }
  }
}
</script>

<style>
.accordion-header {
  font-size: 1.5rem;
}

.accordion-header:not(.collapsed) {
  box-shadow: inset 0 calc(-1 * var(--bs-accordion-border-width)) 0
    var(--bs-accordion-border-color);
}

.btn {
  color: var(--color-primary-blue-400);
  font-weight: 600;
}

.btn:hover {
  color: var(--color-primary-blue-400);
}

.accordion-button {
  background-color: var(--bs-accordion-btn-bg) !important;
  color: var(--color-primary-blue-400);
  font-size: 1.5rem;
  width: unset;
}

.accordion-button::after {
  background-image: var(--bs-accordion-btn-active-icon);
  margin-left: 0.5rem;
}

.edit-button {
  align-items: center;
  display: flex;
}

.edit-button::after {
  content: url("../assets/edit.svg");
  margin-left: 0.5rem;
}

.header-text {
  color: var(--color-neutral-grey-400);
  font-size: 1.5rem;
}

.header-total {
  font-size: 1.5rem;
  padding-right: 1.25rem;
}
</style>
