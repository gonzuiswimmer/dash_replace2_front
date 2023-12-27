export const state = () => ({
  departments: []
})

export const getters = {
  getDepartments(state) {
    return state.departments
  }
}

export const mutations = {
  setDepartments(state, departments){
    state.departments = departments;
  },
  resetDepartments(state){
    state.departments = {}
  }
}

export const actions = {
  // async fetchCounter({ state }) {
  //   // make request
  //   const res = { data: 10 };
  //   state.counter = res.data;
  //   return res.data;
  // }
}
