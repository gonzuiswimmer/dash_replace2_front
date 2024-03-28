export default async function ({ store, route }) {
  const currentPath =  route.path
  const excludePath = ['/login','/resetPassword','/forgotPassword'];

  if ( !store.state.department.departments.length ){
    if( !excludePath.includes(currentPath) ){
      await store.dispatch('department/fetchDepartments');
    };
  };
}
