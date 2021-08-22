<template>
  <div class="c-dashboard">
    <side-bar-nav :class="'c-dashboard-left'" />
    <div class="c-dashboard-right">
      <div class="search-bar d-flex">
        <div class="icon mr-2 mt-1 c-icon-grey">
          <font-awesome-icon class="c-width-20" icon="search" />
        </div>
        <input class="border-0" type="search" name="search" id="" placeholder="Search..." />
        <div class="icons c-icon-grey ml-auto">
          <font-awesome-icon icon="bell" />
          <font-awesome-icon icon="question-circle" class="ml-3 mr-3" />
          <font-awesome-icon icon="user" />
        </div>
      </div>

      <div class="d-flex c-pr-3 c-pl-2 c-pt-1_5">
        <h3 class="c-dashboard-header">Payments</h3>
        <div class="ctas ml-auto">
          <div class="fiter p-1 btn btn-outline-secondary"><font-awesome-icon icon="filter" />Filter</div>
          <div class="export p-1 btn btn btn-outline-secondary mx-1">
            <font-awesome-icon icon="export" /> <span class="export-icon">&#8599;</span>Exports
          </div>
          <div class="create-payment p-1 btn btn-primary"><font-awesome-icon icon="plus" /> Create Payment</div>
        </div>
      </div>
      <div class="main-content mt-2 c-pr-3 c-pl-2">
        <div class="content-nav">
          <span class="mr-4">All</span>
          <span class="mr-4 active-section-nav">Succeeded</span>
          <span class="mr-4">Refunded</span>
          <span>Uncaptured</span>
        </div>
      </div>
      <div class="content-table c-pr-3 c-pl-2">
        <div class="table-head c-fontsize-xsm d-flex c-py-1 c-border-bottom-secondary">
          <b-form-checkbox
            class="c-fontsize-xsm c-width-20 border border-primary"
            id="checkbox-1"
            v-model="status"
            name="checkbox-1"
            value="accepted"
            unchecked-value="not_accepted"
          >
            <div class="c-fontsize-sm">AMOUNT</div>
          </b-form-checkbox>
          <div class="c-fontsize-sm c-width-35 border border-primary">DESCRIPTION</div>
          <div class="c-fontsize-sm c-width-15">CUSTOMER</div>
          <div class="c-fontsize-sm c-width-15">DATE</div>
          <div class="c-width-10"></div>
        </div>
        <div class="table-body">
          <div class="c-table-item d-flex c-border-bottom-secondary c-py-0_5">
            <div class="amount c-width-20 d-flex justify-content-between border border-primary">
              <b-form-checkbox
                class="c-fontsize-xsm"
                id="checkbox-2"
                v-model="status"
                name="checkbox-2"
                value="accepted"
                unchecked-value="not_accepted"
              />US$352.22
              <div class="status border border-primary">Succeeded <span class="check-mark">&#10003;</span></div>
            </div>

            <div class="description c-width-35">fe3d8216-58f9-4dc1-aaef-2f19463b5258</div>
            <div class="customer-info border border-primary c-width-15">hefovo87@ereyemind...</div>
            <div class="date c-width-15">7 Jul, 14:04</div>
            <span class="hamburger c-width-10">&#8943;</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBarNav from '~/components/SideBarNav.vue'
import TableComponent from '~/components/TableComponent.vue'

export default {
  components: {
    SideBarNav,
    TableComponent
  },
  data() {
    return {
      items: [
        {
          amount: 'first',
          description: 'second',
          customer: 'customer',
          date: 'date'
        },
        {
          amount: 'Aburo',
          description: 'egbon',
          customer: 'Janikin',
          date: 'Dab'
        },
        {
          amount: 'tana',
          description: 'yara',
          customer: 'fagbaha',
          date: 'jadabaha'
        },
        {
          amount: 'migaha',
          description: 'sagah',
          customer: 'jadala',
          date: 'miayagsg'
        }
      ]
    }
  }
}
</script>

<style scoped>
.search-bar {
  padding: 0.956rem 2.324rem;
  box-shadow: inset 0px -1px 0px #e3e8ee;
}

.icon {
  font-size: 14px;
}
.content-nav {
  border-bottom: 1px solid #e3e8ee;
  padding-bottom: 0.48%;
}
</style>
