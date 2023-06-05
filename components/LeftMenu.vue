<template>
    <v-card
        id="inspire"
        elevation="2"
        class="left-nav-bar pa-4">
        <v-navigation-drawer
            v-model="drawer"
            app
            style="background-color: rgb(162, 90, 75);">
            <v-list dense nav
            >
                <v-list-item
                v-for="item in items"
                :key="item.title"
                :href="item.url"
                >
                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar
            style="background-color: rgb(162, 90, 75);"
            app>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-img
                class="left-logo"
                :lazy-src="srcLeftPartLogo"
                max-height="50"
                max-width="150"
                :src="srcLeftPartLogo"
                :alt="altLeftPartLogo"
                ></v-img>
            <v-img
                class="right-logo"    
                :lazy-src="srcLogo"
                max-height="50"
                max-width="50"
                msn-5
                :src="srcLogo"
                :alt="altLogo"
                ></v-img>
            <v-toolbar-title>{{ headerTitle }}</v-toolbar-title>
        </v-app-bar>
    </v-card>
</template>

<script>
export default {
    name: 'LeftMenu',
    data () {
      return {
        headerTitle: 'Internship League',
        srcLogo: 'https://laresolution.ca/wp-content/uploads/2021/09/logo-plain512.png',
        altLogo: 'logoLeftPartLogo',
        srcLeftPartLogo: 'http://laresolution.ca/internshipleague/wp-content/uploads/2023/04/financial-technology-40.png',
        altLeftPartLogo: 'Left Part Logo',
        drawer: null,
        items: [
          { title: 'Home', url: '/' },
          { title: 'Join Us', url: '/' },
          { title: 'Hire Us', url: '/hire' },
          { title: 'Members', url: '/members' },
          { title: 'Contact', url: '/contact' }
        ],
        right: null,
      }
    }
}
</script>
<style scoped>
.left-nav-bar {
    height: 96vh;
    min-width: 273.5px;
}
</style>