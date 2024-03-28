export default function ({ store, redirect, route }) {

  // role.jsのroleステートがadminかつ、ルーティングにadminが含まれていればログイン画面にリダイレクト
  if (store.state.role.role != 'admin' && route.path.indexOf('admin') > -1 ){
    console.log(route.path.indexOf('admin'));
    alert('アクセスする権限がありません');
    redirect('/');
  }
}
