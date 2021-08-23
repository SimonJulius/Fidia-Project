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

      <div class="d-flex c-pr-3 c-pl-2 c-pt-1_2">
        <h3 class="c-dashboard-header">Payments</h3>
        <div class="ctas d-flex ml-auto">
          <div class="c-py-0_15 filter c-px-0_5 btn btn-outline-secondary">
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.4982 2.5C12.9146 2.5 13.2529 2.83609 13.2529 3.25021C13.2528 3.4172 13.1968 3.57935 13.0939 3.71083L8.75617 9.25487L8.75167 12.7943C8.75175 12.893 8.73238 12.9907 8.69466 13.0818C8.65694 13.1729 8.60162 13.2558 8.53186 13.3255L7.37954 14.4778C7.3691 14.4883 7.35576 14.4955 7.34122 14.4985C7.32668 14.5015 7.31159 14.5 7.29786 14.4944C7.28413 14.4888 7.27237 14.4792 7.26408 14.4669C7.25578 14.4546 7.25132 14.4401 7.25126 14.4253V9.25487L2.90906 3.71083C2.84818 3.63314 2.80329 3.54414 2.777 3.449C2.7507 3.35385 2.74352 3.25444 2.75587 3.15651C2.76821 3.05857 2.79984 2.96405 2.84893 2.87841C2.89801 2.79277 2.96358 2.7177 3.04185 2.65754C3.17449 2.55532 3.33726 2.49992 3.50472 2.5H12.4982Z"
                fill="#4F566B"
              />
            </svg>
            Filter
          </div>
          <div class="c-py-0_15 export p-1 btn btn btn-outline-secondary mx-1">
            <span class="export-icon c-pr-0_15">&#8599;</span>Exports
          </div>
          <div class="c-py-0_15 create-payment  btn btn-primary">
            <img src="~assets/icons/plus.svg" alt="funnel-icon" class="c-pr-0_15" /> Create Payment
          </div>
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
            class="c-fs-12 c-width-20"
            id="checkbox-1"
            v-model="status"
            name="checkbox-1"
            value="accepted"
            unchecked-value="not_accepted"
          >
            <div class="c-ml-1  c-fs-12">AMOUNT</div>
          </b-form-checkbox>
          <div class="c-fs-12 c-width-35 c-ml-5_p">DESCRIPTION</div>
          <div class="c-fs-12 c-width-15 ml-auto">CUSTOMER</div>
          <div class="c-fs-12 c-width-10 ml-3">DATE</div>
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

export default {
  components: {
    SideBarNav
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
.fa-bell:hover,
.fa-user:hover,
.fa-question-circle:hover {
  color: #1a1f36;
  cursor: pointer;
}

.filter:hover > svg > path {
  fill: #fff;
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
