<template>
  <div>
    <v-hover v-slot="{ hover }">
      <v-card
        style="position: relative; height: 130px; cursor: pointer"
        class="my-5 mt-sm-10 primaryBorder d-flex flex-column justify-center"
        tile
      >
        <div
          class="iconContainer d-flex justify-center align-center"
          :class="darkThemeIsOn ? 'primaryBorder' : ''"
        >
          <v-icon class="primaryColor" large>{{
            film.icon || 'mdi-video-vintage'
          }}</v-icon>
        </div>
        <v-card-text class="pt-6 pb-0">
          <transition name="fade">
            <div v-if="hover" class="cardOptions">
              <div v-for="(option, i) in cardAction" :key="i">
                <v-btn
                  :class="option.class"
                  color="primary"
                  small
                  icon
                  tile
                  @click="option.action"
                >
                  <v-icon>{{ option.icon }}</v-icon>
                </v-btn>
              </div>
            </div>
          </transition>
          <v-row align="center" no-gutters class="ma-0">
            <v-col>
              <h3>{{ film.title }}</h3>
              <span>{{ film.year }}</span>
              <p class="caption mb-0">{{ film.director }}</p>
              <v-rating
                v-model="film.rating"
                background-color="var(--v-primary-base)"
                class="primaryColor"
                half-increments
                readonly
              ></v-rating>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-hover>
    <add-edit-dialog
      :filmId="film.id"
      v-if="addEditDialog"
      v-model="addEditDialog"
    />
    <confirm-dialog :film="film" v-if="confirmDialog" v-model="confirmDialog" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { Film } from '@/interfaces/commons'
import themeMixin from '@/mixins/themeMixin'

@Component({
  mixins: [themeMixin],
})
export default class FilmBox extends Vue {
  @Prop({ required: true }) film!: Film

  addEditDialog = false
  confirmDialog = false

  get cardAction() {
    return [
      {
        icon: 'mdi-pencil',
        class: 'mb-1 mt-2 optBtn',
        action: () => (this.addEditDialog = true),
      },
      {
        icon: 'mdi-close',
        class: 'mt-1 mb-2 optBtn',
        action: () => (this.confirmDialog = true),
      },
    ]
  }
}
</script>

<style scoped>
.iconContainer {
  position: absolute;
  background-color: var(--v-filmContainerbg-base);
  top: -30px;
  right: 20px;
  height: 55px;
  width: 55px;
}
.v-rating >>> button:first-child {
  padding-left: 0px;
}
.v-rating >>> button {
  padding-top: 5px;
}
.v-card {
  transition: transform 0.4s ease-in-out;
}

.v-card >>> .v-card__text {
  color: var(--v-boxTextColor-base);
}

.v-card:hover {
  transform: scale(1.03);
  box-shadow: 0 0 0.3rem var(--v-primary-base);
}

.cardOptions {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 15%;
  height: 100%;
}

.optBtn:hover {
  color: var(--v-secondary-base) !important;
}
</style>
