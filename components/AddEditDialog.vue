<template>
  <v-dialog v-model="model" width="400px">
    <v-card>
      <v-card-title class="primaryBg white--text">
        {{ title }}
        <v-spacer />
        <v-icon color="white">{{ icon }}</v-icon>
      </v-card-title>
      <v-card-text>
        <v-form ref="form">
          <v-row>
            <v-col>
              <v-text-field
                v-model="filmData.title"
                class="text--primary"
                :label="$t('filmDialog.form.title')"
                :rules="[rules.reqField, rules.maxEqual]"
                counter="30"
              >
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                v-model="filmData.director"
                :label="$t('filmDialog.form.director')"
                :rules="[rules.reqField, rules.maxEqual]"
                counter="30"
              >
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <!-- Genre -->
            <v-col>
              <v-select
                v-model="filmData.genre"
                :label="$t('filmDialog.form.genre')"
                :rules="[rules.reqField]"
                :items="filmsGenre"
              >
              </v-select>
            </v-col>
          </v-row>
          <v-row>
            <!-- Date -->
            <v-col>
              <v-menu
                v-model="menuDate"
                :close-on-content-click="true"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="date"
                    :label="$t('filmDialog.form.year')"
                    prepend-icon="mdi-calendar"
                    readonly
                    class="pointerField"
                    :rules="[rules.reqField]"
                    @click:prepend="menuDate = true"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  ref="picker"
                  v-model="date"
                  reactive
                  :max="maxDate"
                  no-title
                >
                </v-date-picker>
              </v-menu>
            </v-col>
          </v-row>
          <v-row justify="start" align="end">
            <!-- Rating -->
            <v-col
              cols="12"
              sm=""
              :class="
                $vuetify.breakpoint.smAndUp
                  ? ''
                  : 'd-flex flex-column align-center'
              "
            >
              <span>{{ $t('filmDialog.form.rating') }}</span>
              <v-rating
                v-model="filmData.rating"
                background-color="var(--v-primary-base)"
                class="primaryColor"
                half-increments
                hover
              ></v-rating>
            </v-col>
            <!-- Icon -->
            <v-col
              cols="12"
              sm=""
              class="d-flex justify-center justify-sm-start mb-2"
            >
              <v-menu offset-y>
                <template v-slot:activator="{ on }">
                  <v-btn color="primary" outlined v-on="on" tile>
                    {{ $t('filmDialog.form.icon') }}
                    <v-icon v-if="filmData.icon" class="ml-2">{{
                      filmData.icon
                    }}</v-icon>
                  </v-btn>
                </template>
                <v-row
                  justify="center"
                  align="center"
                  style="min-height: 150px; min-width: 150px"
                  no-gutters
                  class="menuBg"
                >
                  <v-col
                    v-for="icon in genreIcons"
                    :key="icon"
                    cols="3"
                    class="d-flex justify-space-around"
                    style="height: 1%"
                  >
                    <v-icon
                      style="cursor: pointer"
                      @click="filmData.icon = icon"
                      >{{ icon }}</v-icon
                    >
                  </v-col>
                </v-row>
              </v-menu>
            </v-col>
          </v-row>
        </v-form>
        <v-card-actions class="mt-5">
          <v-row justify="end" align="center">
            <v-btn color="primary" @click="save" tile>
              {{ $t('buttons.save') }}
            </v-btn>
          </v-row>
        </v-card-actions>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script lang="ts">
import {
  Component,
  Vue,
  VModel,
  Prop,
  Watch,
  Ref,
} from 'nuxt-property-decorator'
import { Film, FilmsGenre } from '@/interfaces/commons'
import { TranslateResult } from 'vue-i18n'
import { SnackbarTypes } from '@/enums/enums'
import { mapGetters } from 'vuex'
import { $vxm } from '@/utils/api'

@Component({
  computed: {
    ...mapGetters({
      filmsGenre: 'dashboard/filmsGenre',
      genreIcons: 'dashboard/genreIcons',
    }),
  },
})
export default class AddEditDialog extends Vue {
  @VModel() model!: boolean
  @Ref('picker') picker!: HTMLFormElement
  @Ref('form') form!: HTMLFormElement
  @Prop({ required: false, default: false }) addNew?: boolean

  filmsGenre!: Array<FilmsGenre>
  genreIcons!: string[]
  menuDate = false
  maxDate = new Date().getFullYear().toString() + '-Nan-Nan'
  rules = {
    reqField: (v: string): TranslateResult | boolean =>
      !!v || this.$t('messages.reqField'),
    maxEqual: (v: string): TranslateResult | boolean =>
      v.length <= 30 || this.$tc('messages.maxLength', 30),
  }

  filmData: Film = {
    title: '',
    year: '',
    director: '',
    genre: '',
    icon: '',
    rating: NaN,
  }

  get title(): TranslateResult {
    return this.addNew
      ? this.$t('filmDialog.addFilm')
      : this.$t('filmDialog.editFilm')
  }

  get snackMessage(): TranslateResult {
    return Object.values(this.filmData).every((x) => !!x)
      ? this.$t('messages.correctFields')
      : this.$t('messages.fillAllFields')
  }

  get icon(): string {
    return this.addNew ? 'mdi-plus' : 'mdi-pencil'
  }

  get date() {
    return this.filmData.year
  }

  set date(newValue) {
    this.filmData.year = newValue.substring(0, 4)
  }

  save(): void {
    if (this.form.validate()) {
      $vxm.dashboard
        .dispatchAddFilm(this.filmData)
        .then(() => $vxm.dashboard.dispatchFilms())
      this.$emit('input', false)
    } else {
      $vxm.snackbar.setSnack({
        text: this.snackMessage,
        type: SnackbarTypes.ERROR,
      })
    }
  }

  @Watch('menuDate')
  onMenuChange(val: boolean) {
    val && this.$nextTick(() => (this.picker.activePicker = 'YEAR'))
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
