<template>
  <v-snackbar v-model="show" :color="type" :timeout="3500" transition="scale-transition">
    {{ message }}
    <template v-slot:action="{ attrs }">
      <v-btn icon v-bind="attrs" @click="show = false">
        <v-icon small>mdi-close</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { TranslateResult, LocaleMessage } from "vue-i18n";
import { SnackbarTypes } from "@/enums/enums";
import { $vxm } from "@/utils/api";

@Component
export default class Snackbar extends Vue {
  show = false
  message: TranslateResult | LocaleMessage = ''
  type = ''
  watcher: any = null

  created() {
    this.watcher = $vxm.snackbar.$watch('text', () => {
      if ($vxm.snackbar.text) {
        this.show = true
        this.message = $vxm.snackbar.text
        this.type = $vxm.snackbar.type
        $vxm.snackbar.setSnack({text: '',type: SnackbarTypes.SUCCESS})
      }
    })
  }

  beforeDestroy() {
    this.watcher()
  }
}


</script>
