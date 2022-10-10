export const PaymentsStore = {
  state: {
    payments: [
      {
        id: 1,
        name: 'Anticipo',
        percentage: 0.25,
        expiration: new Date()
      },
      {
        id: 2,
        name: 'Anticipo',
        percentage: 0.25,
        expiration: new Date()
      },
      {
        id: 3,
        name: 'Anticipo',
        percentage: 0.25,
        expiration: new Date()
      },
      {
        id: 4,
        name: 'Anticipo',
        percentage: 0.25,
        expiration: new Date()
      }
    ]
  },
  addPayment (payment, index) {
    this.state.payments.splice(index, 0, payment)
  },
  modifyPercentage (payment, percentage) {
    const index = this.state.payments.indexOf(payment)
    this.state.payments[index].percentage = percentage
  }
}
