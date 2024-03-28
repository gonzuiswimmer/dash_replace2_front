<template>
  <div>
    <v-card width="400px" class="mx-auto mt-5">
      <v-card-title>
        <h1 class="display-1">パスワードをお忘れですか？</h1>
      </v-card-title>
      <v-card-text>
        <v-form @submit.prevent="passwordReset()">
          <v-text-field prepend-icon="mdi-email-outline" type="email" label="メールアドレス" v-model="form.email"  />
          <v-text-field prepend-icon="mdi-lock" v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" label="パスワード" v-bind:type="showPassword ? 'text' : 'password'" @click:append="showPassword = !showPassword" v-model="form.password" />
          <v-text-field prepend-icon="mdi-lock" v-bind:append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'" label="パスワード" v-bind:type="showConfirmPassword ? 'text' : 'password'" @click:append="showConfirmPassword = !showConfirmPassword" v-model="form.password_confirmation" />
          <v-card-actions>
            <v-btn type="submit" class="info">パスワードを再設定する</v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
  export default {
    auth: false,
    data() {
      return {
        showPassword: false,
        showConfirmPassword: false,
        form: {
          email: this.$route.query.email || '',
          password: '',
          password_confirmation: '',
          token: this.$route.query.token || '',
        },
      };
    },
    mounted() {
      // csrf対策
      // nginxでRPする場合は/sanctumがapi側を見に行くようにしてください
      this.$axios.get('/sanctum/csrf-cookie');
    },
    methods: {
      async passwordReset() {
        try {
          const response = await this.$axios.post('/reset-password', this.form)
          .then((response) => {
            alert('パスワードを再設定しました');
            console.log(response);
            this.$router.push('/login');
          });
        } catch(error) {
          console.log(error);
          alert(error.response.data.message);
        }
      },
      showMessage(message){
        alert(message);
      }
    },
  };
</script>
