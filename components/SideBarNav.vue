<template>
  <div :class="className">
    <div class="nav-options_dropdown">
      <h6 class="c-fs-18">
        <img src="~assets/icons/store.svg" alt="store icon" /> Store name
        <img src="~assets/icons/dropdown-arrow-down.svg" alt="store icon" />
      </h6>
    </div>
    <div class="homeLink c-my-1">
      <img class="c-pr-0_5" src="~assets/icons/home.svg" alt="home icon" />
      Home
    </div>
    <ul class="customers-interactions">
      <li class="c-active"><img class="c-pr-0_5" src="~assets/icons/payment.svg" alt="store icon" /> Payments</li>
      <li class="c-ml-1_7">Reviews</li>
      <li class="c-ml-1_7">Disputes</li>
      <li class="c-ml-1_7">Top-ups</li>
      <li class="c-ml-1_7">Collected fees</li>
      <li class="c-ml-1_7">Transfers</li>
      <li class="c-ml-1_7">Payouts</li>
      <li class="c-ml-1_7">All transactions</li>
    </ul>
    <ul class="infos">
      <li><img class="c-pr-0_5 " src="~assets/icons/arrow-up-down.svg" alt="arrows icon" /> Balances</li>
      <li><img class="c-pr-0_5 " src="~assets/icons/customer.svg" alt="store icon" /> Customers</li>
      <li><img class="c-pr-0_5 " src="~assets/icons/connected.svg" alt="store icon" /> Connected accounts</li>
      <li><img class="c-pr-0_5 " src="~assets/icons/product.svg" alt="store icon" /> Products</li>
      <li><img class="c-pr-0_5 " src="~assets/icons/report.svg" alt="store icon" /> Reports</li>
    </ul>
    <ul class="others">
      <li><img class="c-pr-0_5 " src="~assets/icons/developer.svg" alt="store icon" /> Developers</li>
      <li class="d-flex  align-items-center">
        <b-form-checkbox class="c-pr-0_5" v-model="checked" name="check-button" switch /> View test data
      </li>
      <li><img class="c-pr-0_5 " src="~assets/icons/settings.svg" alt="store icon" /> Settings</li>
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
