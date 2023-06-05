<template>
    <v-app 
        id="inspire"
        elevation="2"
        class="pa-4">
        <v-navigation-drawer
            v-model="drawer"
            app>
            <v-list dense nav>
                <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    :to="item.url"
                    class="text-uppercase font-weight-bold pointer"
                >{{ item.title }}</v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar
            app
            class="bcg">
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-img
                :lazy-src="srcLeftPartLogo"
                max-height="50"
                max-width="150"
                :src="srcLeftPartLogo"
                :alt="altLeftPartLogo"
                ></v-img>
            <v-img
                class="ms-n5"    
                :lazy-src="srcLogo"
                max-height="50"
                max-width="50"
                :src="srcLogo"
                :alt="altLogo"
                ></v-img>
            <v-toolbar-title
                class="absolut-text display-2 font-weight-bold mx-auto">
                {{ headerTitle }}
            </v-toolbar-title>
        </v-app-bar>
        <v-main>
            <Nuxt />
        </v-main>
        <v-footer padless class="d-flex flex-column">
            <v-row justify="center" no-gutters>
                <v-btn
                    v-for="item in items"
                    :key="item.title"
                    :to="item.url"
                    text
                    rounded
                    class="my-4 title font-weight-bold"
                >{{ item.title }}</v-btn>
            </v-row>
            <v-row
                no-gutters
                class="title font-weight-bold pb-4">
                Copyright © {{ new Date().getFullYear() }} — Laresolution
            </v-row>
        </v-footer>
    </v-app>
</template>

<script>
export default {
    data () {
      return {
        headerTitle: 'Internship League',
        srcLogo: './img/logo-plain512-150x150.webp',
        altLogo: 'logoLeftPartLogo',
        srcLeftPartLogo: './img/financial-technology-40.png',
        altLeftPartLogo: 'Left Part Logo',
        drawer: null,
        items: [
          { title: 'Home', url: '/' },
         
          { title: 'Hire Us', url: '/hire' },
          { title: 'Members', url: '/members' },
          { title: 'Products', url: '/products' },
          { title: 'Contact', url: '/contact' }
        ],
        right: null,
      }
    }
}
</script>
<style scoped type="scss">
.absolut-text{
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
}

</style>