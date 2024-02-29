<script setup>
import { onMounted, ref, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const drawer = ref(false);

const miniState = ref(false);
const drawerClick = (e) => {
  if (miniState.value) {
    miniState.value = false;
    e.stopPropagation();
  }
};

const pageHeight = ref("");
const getWebHeight = () => {
  pageHeight.value = document.documentElement.clientHeight;
  return pageHeight.value;
};

onMounted(() => {
  getWebHeight();
  window.onresize = () => {
    getWebHeight();
  };
});
</script>

<template>
  <q-layout view="lHh Lpr lff">
    <q-header class="text-white" style="background-color: #fff">
      <q-toolbar style="height: 50px">
        <q-toolbar-title>
          <label style="font-size: 18px" class="q-ml-md text-aid2 text-regular">
            Dashboard
          </label>
        </q-toolbar-title>
        <q-space />
        <div class="flex items-center q-gutter-x-md">
          <q-btn
            round
            dense
            flat
            style="color: #999c9e"
            icon="bi-bell-fill"
            size="10px"
          />
          <div class="cursor-pointer q-pr-md">
            <div class="row items-center text-aid1" @click="logOut">
              <span class="q-mr-sm">
                <q-icon
                  name="bi-box-arrow-right"
                  size="16px"
                  style="color: #999c9e"
                />
              </span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      class="drawerMenu bg-bg3 text-white"
      show-if-above
      :width="220"
      :breakpoint="500"
      height="100%"
      :mini="!drawer || miniState"
      @click.capture="drawerClick"
    >
      <q-scroll-area class="fit">
        <q-list class="text-white">
          <div
            class="column justify-between"
            :style="{ height: `${pageHeight - 20}px` }"
          >
            <div class="q-mt-sm">
              <q-item>
                <q-item-section>
                  <div class="row flex-center">
                    <q-toolbar-title>
                      <label
                        style="font-size: 24px; font-weight: 500"
                        class="text-white"
                        >Whole GRAIN</label
                      >
                    </q-toolbar-title>
                  </div>
                </q-item-section>
              </q-item>

              <q-item clickable active-class="active-menu-link" to="dashboard">
                <q-item-section avatar>
                  <q-icon size="xs" name="bi-speedometer2"></q-icon>
                </q-item-section>
                <q-item-section active-class="text-white">
                  <q-item-label>Dashboard</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable active-class="active-menu-link">
                <q-item-section avatar>
                  <q-icon size="xs" name="bi-ui-checks-grid"></q-icon>
                </q-item-section>
                <q-item-section>
                  <q-item-label>Events</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable active-class="active-menu-link">
                <q-item-section avatar>
                  <q-icon size="xs" name="bi-search"></q-icon>
                </q-item-section>
                <q-item-section>
                  <q-item-label>Scan</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable active-class="active-menu-link">
                <q-item-section avatar>
                  <q-icon size="xs" name="bi-bar-chart-line"></q-icon>
                </q-item-section>
                <q-item-section>
                  <q-item-label>Analytics</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable active-class="active-menu-link">
                <q-item-section avatar>
                  <q-icon size="xs" name="bi-gear"></q-icon>
                </q-item-section>
                <q-item-section>
                  <q-item-label>Settings</q-item-label>
                </q-item-section>
              </q-item>
            </div>

            <div class="flex justify-end" style="padding-right: 10px">
              <q-btn
                flat
                @click="miniState = !miniState"
                round
                dense
                color="grey-5"
                size="md"
                :icon="
                  miniState
                    ? 'bi-chevron-double-right'
                    : 'bi-chevron-double-left'
                "
              ></q-btn>
            </div>
          </div>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style lang="scss">
.circle {
  height: 35px;
  width: 35px;
  background-color: #5e97ff;
  border-radius: 999em;
}

.drawerMenu {
  .q-item__section--avatar {
    min-width: 0px;
  }
  .q-item__section--side > .q-icon {
    font-size: 18px;
  }
  .q-item {
    padding-left: 20px;
  }

  .inMenu .q-item {
    border-radius: 0 32px 32px 0;
    padding-left: 33px;
  }
}

.hoverStyle:hover {
  background-color: #131717;
  border-radius: 10px;
}

.active-menu-link {
  color: #4ac2d7;
  background: rgba(74, 194, 215, 0.15);
}
</style>
