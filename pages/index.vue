<template>
    <v-container
      class="py-8 px-6"
      fluid
    >
      <v-row>
        <v-col
          v-for="card in cards"
          :key="card"
          cols="12"
        >
          <v-card>
            <v-subheader>{{ card }}</v-subheader>
            <v-list two-line>
              <template v-for="n in 6">
                <v-list-item
                  :key="n"
                >
                  <v-list-item-avatar color="grey darken-1">
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title>Message {{ n }}</v-list-item-title>

                    <v-list-item-subtitle>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique
                    </v-list-item-subtitle>
                    <div class="d-flex flex-row justify-end">
                      <template v-for="m in 3">
                        <v-chip
                          x-small
                          class="ma-2"
                          color="green"
                          text-color="white"
                          :key="m"
                          >
                          タグ
                        </v-chip>
                      </template>
                      <v-icon x-small>mdi-message</v-icon><span class="ma-2" style="font-size : x-small">コメント数</span>
                      <v-icon x-small>mdi-thumb-up-outline</v-icon><span class="ma-2" style="font-size : x-small">いいね数</span>
                    </div>
                  </v-list-item-content>
                </v-list-item>

                <v-divider
                  v-if="n !== 6"
                  :key="`divider-${n}`"
                  inset
                ></v-divider>
              </template>
            </v-list>
          </v-card>
          <div class="d-flex flex-row justify-end mt-2">
            <v-btn to="/">こちら</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
  export default {
    data: () => ({
      // 将来的に、cardの中身はオブジェクト化し、3コンテンツそれぞれでtitle, 取得データ, リンクなどを設定する
      cards: ['お知らせ一覧', '最近投稿された月報','フォローしているユーザーの月報'],
    }),
    name: 'indexページ',
  }
</script>
