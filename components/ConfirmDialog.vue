<template>
  <v-dialog v-model="model" persistent width="500px">
    <v-card>
      <v-card-title class="primaryBg white--text">
        {{ $t('filmDialog.deleteTitle') }}
        <v-spacer />
        <v-icon color="white">{{ 'mdi-delete-forever' }}</v-icon>
      </v-card-title>
      <v-card-text class="mt-5">
        <v-row justify="center" class="my-5">
          <span>{{
            $t('filmDialog.deleteConfirm', { film: film.title })
          }}</span>
        </v-row>
        <v-card-actions>
          <v-row justify="end" align="center">
            <v-btn @click="closeDialog" tile>
              {{ $t('buttons.cancel') }}
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="deleteFilm" tile>
              {{ $t('buttons.delete') }}
            </v-btn>
          </v-row>
        </v-card-actions>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script lang="ts">
import { Component, Vue, VModel, Prop } from 'nuxt-property-decorator'
import { Film } from '@/interfaces/commons'
import { $vxm } from '@/utils/api'
import { SnackbarTypes } from '@/enums/enums'

@Component
export default class ConfirmDialog extends Vue {
  @VModel() model!: boolean
  @Prop({ required: true }) film!: Film

  closeDialog() {
    this.$emit('input', false)
  }

  deleteFilm() {
    $vxm.dashboard
      .dispatchDeleteFilm(this.film.id)
      .then(() =>
        $vxm.snackbar.setSnack({
          text: this.$t('messages.successDone'),
          type: SnackbarTypes.PRIMARY,
        })
      )
      .catch((e) => {
        $vxm.snackbar.setSnack({
          text: this.$t('messages.error'),
          type: SnackbarTypes.ERROR,
        })
        throw new Error(e)
      })
      .finally(() => {
        this.closeDialog()
        $vxm.dashboard.dispatchFilms()
      })
  }
}
</script>
<style scoped>
.pointerField >>> input:hover {
  cursor: pointer;
}

.v-rating >>> button:first-child {
  padding-left: 0px;
}

.v-input >>> .v-icon {
  color: var(--v-primary-base);
}
</style>
