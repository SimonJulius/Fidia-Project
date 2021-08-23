<template>
  <div class="c-auth-form">
    <h1 class="c-mb-7_p c-form-heading">Sign in to your account</h1>
    <b-form-group class="c-mb-10_p c-width-100" id="input-group-1" label="Email" label-for="input-1">
      <b-form-input id="input-1" v-model="email" type="email" placeholder="jane.doe@gmail.com" required></b-form-input>
    </b-form-group>

    <b-form-group class="c-mb-7_p c-width-100" id="input-group-2" label="Password" label-for="input-2">
      <span class="forgot-password c-links">Forgot your password?</span>
      <div class="password-icons c-icon-grey">
        <font-awesome-icon @click="toggleVisibility" v-if="isVisible" icon="eye" />
        <font-awesome-icon @click="toggleVisibility" v-if="!isVisible" icon="eye-slash" />
      </div>
      <b-form-input id="input-2" v-model="password" :type="'password'" placeholder=".............." required> </b-form-input>
    </b-form-group>

    <b-form-group class="c-height-20 c-mb-7_p c-width-100" id="input-group-4">
      <b-form-checkbox :button-variant="'red'" @click="togglePersistentState" v-model="shouldPersist">
        Stay signed in for a week
      </b-form-checkbox>
    </b-form-group>

    <b-button class="c-mb-7_p c-height-20 c-width-100" type="submit" variant="primary" @click="goToDashboard">Continue</b-button>

    <p class="c-width-100 c-links sso">Use single sign-on (SSO) instead</p>
  </div>
</template>

<script>
export default {
  computed: {
    state() {
      const simpleEmailValidationRegex = /.+@.+\..+/
      return simpleEmailValidationRegex.test(this.email)
    },
    invalidFeedback() {
      if (this.email.length > 0) {
        return 'Enter at least 4 characters.'
      }
      return 'Please enter something.'
    }
  },
  data() {
    return {
      email: '',
      password: '',
      shouldPersist: true,
      isVisible: true
    }
  },
  methods: {
    togglePersistentState() {
      this.shouldPersist = !this.shouldPersist
      console.log(this.shouldPersist)
    },
    toggleVisibility() {
      this.isVisible = !this.isVisible
    },
    goToDashboard() {
      this.$router.push(`/dashboard`)
    }
  }
}
</script>

<style scoped>
.forgot-password {
  position: absolute;
  top: 0;
  right: 0;
}
#input-group-2 {
  position: relative;
}
.sso {
  text-align: center;
}

.password-icons {
  position: absolute;
  bottom: 14%;
  right: 3%;
}
</style>
