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
          <div class="export p-1 btn btn btn-outline-secondary mx-1"><span class="export-icon">&#8599;</span>Exports</div>
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
            class="c-fontsize-xsm c-width-20"
            id="checkbox-1"
            v-model="status"
            name="checkbox-1"
            value="accepted"
            unchecked-value="not_accepted"
          >
            <div class="c-fontsize-sm">AMOUNT</div>
          </b-form-checkbox>
          <div class="c-fontsize-sm c-width-35 c-ml-5_p">DESCRIPTION</div>
          <div class="c-fontsize-sm c-width-15 ml-auto">CUSTOMER</div>
          <div class="c-fontsize-sm c-width-7_5 ml-3">DATE</div>
          <div class="c-width-5"></div>
        </div>
        <div class="table-body">
          <div v-for="(item, index) in items" :key="index" class="c-table-item d-flex c-border-bottom-secondary align-item-center c-py-0_5">
            <div class="amount c-width-20 d-flex justify-content-between">
              <b-form-checkbox
                :id="`checkbox-${index + 3}`"
                v-model="status"
                :name="`checkbox-${index + 3}`"
                :value="item.description"
                unchecked-value="not_accepted"
              /><span class="c-fontsize-sm"> {{ item.amount }}</span>
              <div class="status c-fs-12">Succeeded <span class="check-mark">&#10003;</span></div>
            </div>

            <div class="description c-width-35 c-fs-13 c-ml-3_5_p">{{ item.description }}</div>
            <div class="customer-info c-width-15 ml-auto c-fontsize-sm">{{ item.customerEmail }}</div>
            <div class="date c-width-10 ml-3 c-fontsize-sm">{{ item.date }}</div>
            <span class="hamburger c-width-5 d-flex justify-content-end pr-4">&#8943;</span>
          </div>
        </div>
      </div>
      <div class="pagination c-pr-3 c-pl-2 c-py-1  d-flex align-items-center">
        <div class="counts">{{ items.length }} Results</div>
        <div class="ml-auto control">
          <buton class="btn btn-outline-secondary" disabled>Previous</buton>
          <buton class="btn btn-outline-secondary">Next</buton>
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
      items: [],
      status: 'succeeded'
    }
  },
  created() {
    this.getItems(16)
  },

  methods: {
    getItems(numberOfItems) {
      for (let item = 0; item < numberOfItems; ++item) {
        const amount = 'US$' + (Math.random() * 263).toFixed(2)
        const customerEmail = this.$faker().internet.email()
        const date = this.$luxon(
          this.$faker()
            .date.past()
            .toISOString(),
          { input: 'iso', output: { format: `MMM dd, hh:mm` } }
        )
        const description =
          Math.random()
            .toString(36)
            .substring(2, 10) +
          '-' +
          Math.random()
            .toString(36)
            .substring(2, 6) +
          '-' +
          Math.random()
            .toString(36)
            .substring(2, 6) +
          '-' +
          Math.random()
            .toString(36)
            .substring(2, 6) +
          '-' +
          Math.random()
            .toString(36)
            .substring(2, 15) +
          Math.random()
            .toString(36)
            .substring(2, 3)

        const item = { amount, customerEmail, description, date }

        this.items.push(item)
      }
      console.log(this.items)
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
.status {
  background-color: #cbf4c9;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 5.5rem;
  padding: 0px 4px;
}
.customer-info {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
