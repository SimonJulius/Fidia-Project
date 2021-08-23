<template>
  <div :class="className">
    <div class="nav-options_dropdown">
      <h3><img src="~assets/icons/store.svg" alt="store icon" /> Store Name</h3>
    </div>
    <div class="homeLink">
      <img src="~assets/icons/home.svg" alt="home icon" />
      Home
    </div>
    <ul class="customers-interactions">
      <li class="c-active"><img src="~assets/icons/payment.svg" alt="store icon" /> Payments</li>
      <li>Reviews</li>
      <li>Disputes</li>
      <li>Top-ups</li>
      <li>Collected fees</li>
      <li>Transfers</li>
      <li>Payouts</li>
      <li>All transactions</li>
    </ul>
    <ul class="infos">
      <li><img src="~assets/icons/arrow-up-down.svg" alt="arrows icon" /> Balances</li>
      <li><img src="~assets/icons/customer.svg" alt="store icon" /> Customers</li>
      <li><img src="~assets/icons/connected.svg" alt="store icon" /> Connected accounts</li>
      <li><img src="~assets/icons/product.svg" alt="store icon" /> Products</li>
      <li><img src="~assets/icons/report.svg" alt="store icon" /> Reports</li>
    </ul>
    <ul class="others">
      <li><img src="~assets/icons/developer.svg" alt="store icon" /> Developers</li>
      <li class="d-flex"><b-form-checkbox v-model="checked" name="check-button" switch /> View test data</li>
      <li><img src="~assets/icons/settings.svg" alt="store icon" /> Settings</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    className: {
      type: String
    }
  }
}
</script>

<style scoped></style>
