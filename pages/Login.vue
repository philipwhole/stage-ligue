<template>
    <div>
        <h1>Login with Github</h1>
        <v-btn @click="signinWithGithub">Click me</v-btn>
        <h1>Login with Google</h1>
        <v-btn @click="signinWithGoogle">Click me</v-btn>
        <v-container>
            <v-row v-if="user.accessToken && !errorCode">
                <v-col>{{ JSON.stringify(credential) }}</v-col>
                <v-col>{{ JSON.stringify(token) }}</v-col>
                <v-col>
                    {{ JSON.stringify(user) }}
                </v-col>
            </v-row>
            <v-row v-else>
                <v-col>{{ errorCode }}</v-col>
                <v-col>{{ errorMessage }}</v-col>
                <v-col>{{ email }}</v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import { getAuth, signInWithPopup, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

export default {
    name: 'Login',
    data () {
        return {
            token: {},
            user: {},
            credential: {},
            errorCode: '',
            errorMessage: '',
            email: ''
        }
    },
    methods: {
        signinWithGithub() {
            this.errorCode = ''
            this.errorMessage = ''
            const provider = new GithubAuthProvider();
            const auth = getAuth();

            signInWithPopup(auth, provider)
            .then((result) => {
                this.providerName = 'Github'
                // This gives you a GitHub Access Token. You can use it to access the GitHub API.
                this.credential = GithubAuthProvider.credentialFromResult(result);
                this.token = this.credential.accessToken;

                // The signed-in user info.
                this.user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                this.errorCode = error.code;
                this.errorMessage = error.message;
                // The email of the user's account used.
                this.email = error.customData.email;
                // The AuthCredential type that was used.
                this.credential = GithubAuthProvider.credentialFromError(error);
                // ...
            });
        },
        signinWithGoogle() {
            this.errorCode = ''
            this.errorMessage = ''
            const provider = new GoogleAuthProvider();
            const auth = getAuth();

            signInWithPopup(auth, provider)
            .then((result) => {
                this.providerName = 'Google'
                // This gives you a GitHub Access Token. You can use it to access the GitHub API.
                this.credential = GoogleAuthProvider.credentialFromResult(result);
                this.token = this.credential.accessToken;

                // The signed-in user info.
                this.user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                this.errorCode = error.code;
                this.errorMessage = error.message;
                // The email of the user's account used.
                this.email = error.customData.email;
                // The AuthCredential type that was used.
                this.credential = GithubAuthProvider.credentialFromError(error);
                // ...
            });
        },
    }
}
</script>

<style scoped>
</style>