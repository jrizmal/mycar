<template>
  <div class="main-container">
    <div class="flex-content">
      <router-view />
    </div>
    <div class="flex-navigation">
      <md-bottom-bar class="md-accent" md-sync-route>
        <md-bottom-bar-item
          to="/add"
          exact
          md-label="Add"
          :md-icon="require('@/assets/icons/plus.svg')"
        ></md-bottom-bar-item>
        <md-bottom-bar-item
          to="/dashboard"
          md-label="Dashboard"
          :md-icon="require('@/assets/icons/info.svg')"
        ></md-bottom-bar-item>
        <md-bottom-bar-item
          to="/other"
          md-label="Drugo"
          :md-icon="require('@/assets/icons/settings.svg')"
        ></md-bottom-bar-item>
      </md-bottom-bar>
    </div>
  </div>
</template>

<style lang="scss">
.main-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: black;
  color: white;
}
.flex-content {
  overflow: auto;
  flex: 1 1 auto;
  align-self: stretch;
}
.flex-navigation {
  display: inline-flex;
  align-items: flex-end;
  border: 1px solid rgba(#000, 0.26);
  background: rgba(#000, 0.06);
}
</style>
