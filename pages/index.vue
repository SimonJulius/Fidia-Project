<template>
  <div class="c-auth-page">
    <div class="c-auth-page-inner-div">
      <div class="c-auth-form-container">
        <img class="c-width-10 c-mb-10_p c-ml-5_p" src="~assets/img/stripe_logo.svg" alt="stripe logo" />
        <sign-in />
      </div>
    </div>
    <div class="page-cta">
      <div class="sign-up c-fontsize-sm">Don’t have an account? &nbsp; <span class="c-links">Sign up</span></div>
      <div class="copy-right mt-4">
        <span class="copy c-fontsize-sm"> &#169; Stripe &nbsp; .</span>
        <span class="contact c-fontsize-sm">&nbsp; Contact &nbsp; .</span>
        <span class="privacy c-fontsize-sm">&nbsp; Privacy & terms</span>
      </div>
    </div>
  </div>
</template>

<script>
import SignIn from '~/components/SignIn.vue'
export default {
  components: {
    SignIn
  }
}
</script>

<style scoped>
.page-cta {
  position: relative;
  bottom: 10%;
  left: 40%;
  z-index: 3;
}
.copy-right,
.sign-up {
  font-style: normal;
  font-weight: normal;
  line-height: 17px;
  display: flex;
  align-items: center;
  color: #4f566b;
}
</style>
