<template>
  <v-col cols="12">
    <v-card>
      <v-subheader>{{ announcements.contentTitle }}</v-subheader>
      <v-list two-line>
        <template v-for="(content, index) in announcements.data">
          <v-list-item
            :key="index"
          >
            <v-list-item-avatar color="grey darken-1">
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>名前 <span>【所属:yyy年mm月入社】</span> </v-list-item-title>

              <v-list-item-subtitle>
                {{ content.title }}
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
            v-if="index !== 3"
            :key="`divider-${index}`"
            inset
          ></v-divider>
        </template>
      </v-list>
    </v-card>
    <div class="d-flex flex-row justify-end mt-2">
      <v-btn to="/">{{ announcements.contentTitle }}一覧はこちら</v-btn>
    </div>
  </v-col>
</template>

<script>
export default {
  props: {
    announcements: {
      type: Object,
      default: {},
    }
  }
}
</script>

<style>

</style>
