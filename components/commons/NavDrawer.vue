<template>
  <div>
    <v-navigation-drawer
      hide-overlay
      permanent
      stateless
      style="position: fixed"
      :absolute="isMobile"
      :temporary="isMobile"
      :expand-on-hover="!isMobile"
      clipped
      clipped-left
      app
      color="var(--v-appBar-base)"
    >
      <div class="d-flex flex-column justify-between" style="height: 100%">
        <div v-if="isMobile" style="height: 50px">
          <logo :in-nav-drawer="true" />
        </div>
        <div style="height: 100%">
          <v-row class="my-0 mx-2">
            <v-list nav dense style="width: 100%; padding: 0">
              <v-list-item @click="addEditDialog = true">
                <v-list-item-icon>
                  <v-icon class="primaryColor">mdi-plus</v-icon>
                </v-list-item-icon>
                <v-list-item-title>{{
                  $t('navDrawer.addFilm')
                }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-row>
        </div>
        <div style="height: 50px">
          <v-row
            v-if="isMobile"
            class="ma-0 mb-3"
            no-gutters
            align="start"
            justify="space-around"
          >
            <v-col cols="10">
              <switch-lang />
            </v-col>
            <v-col cols="2">
              <theme-switcher :tooltipBottom="false" />
            </v-col>
          </v-row>
        </div>
      </div>
    </v-navigation-drawer>
    <add-edit-dialog
      v-if="addEditDialog"
      v-model="addEditDialog"
      :add-new="true"
    />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import commonMixin from '@/mixins'

@Component({
  mixins:[commonMixin]
})
export default class NavDrawer extends Vue {
  addEditDialog = false
}
</script>
