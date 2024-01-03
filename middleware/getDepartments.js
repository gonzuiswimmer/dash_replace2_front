export default async function ({ store, route }) {
  const currentPath =  route.path

  if ( !store.state.department.departments.length && currentPath !== '/login'  ){
    await store.dispatch('department/fetchDepartments')
  }
}
