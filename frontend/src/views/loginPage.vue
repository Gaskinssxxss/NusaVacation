<template>
    <div>
        <div class="flex justify-center uppercase pt-20">
            <div class="bg-maryjane border-2 border-black px px-20 py-10">
                <h1 class="font-Karantina text-5xl font-bold text-center">Admin Login</h1>
                <form @submit.prevent="login()" class="space-y-10 py-10">
                    <div class="form-part">
                        <h1 class="font-Karantina text-3xl font-bold" for="email">Email</h1>
                        <input type="email" v-model="email" id="email" placeholder="Email" required
                            class="border-2 border-black py-2 w-full pl-2">
                    </div>

                    <div class="form-part">
                        <h1 class="font-Karantina text-3xl font-bold" for="password">Password</h1>
                        <input type="password" v-model="password" id="password" placeholder="Password" required
                            class="border-2 border-black py-2 w-full pl-2">
                    </div>

                    <button class="border-2 border-black w-full py-2 bg-maryjane hover:bg-ocean hover:text-white">
                        <h1 class="font-Karantina text-3xl font-bold uppercase">
                            Login
                        </h1>
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "LoginView",
    data() {
        return {
            email: "",
            password: ""
        }
    },
    computed: {
        isUserLoggedIn() {
            return this.$store.state.userLoggedIn;
        }
    },
    methods: {
        async login() {
            try {
                await this.$store.dispatch("login", { email: this.email, password: this.password });
                if (this.isUserLoggedIn) {
                    this.$toast.success("Authentication succeeded.", { position: "bottom-left", duration: 1000 });
                    await this.$router.push("/admin");
                }
            } catch (err) {
                console.log(err);
                this.$toast.error(`Authentication failed! Error: ${err}`, { position: "bottom-left", duration: 1000 });
            }
        }
    }
}
</script>
