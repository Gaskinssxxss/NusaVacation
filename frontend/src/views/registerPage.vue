<template>
    <div class="flex justify-center uppercase pt-20">
        <div class="bg-maryjane border-2 border-black px px-20 py-10">
            <h1 class="font-Karantina text-5xl font-bold text-center">Register</h1>
            <form @submit.prevent="register" class="space-y-6 py-4">
                <div class="form-part">
                    <h1 class="font-Karantina text-3xl font-bold" for="username">Username</h1>
                    <input type="text" v-model="username" id="username" placeholder="Username" required
                        class="border-2 border-black py-2 w-full pl-2">
                </div>

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
</template>
  
<script>
import Api from "@/services/api";

export default {
    name: "RegisterView",
    data() {
        return {
            username: "",
            email: "",
            password: ""
        }
    },
    methods: {
        register() {
            Api.post("/users/register", {
                username: this.username,
                email: this.email,
                password: this.password
            })
                .then(() => {
                    this.$toast.success("Registration succeeded!", { position: "bottom-left", duration: 1000 });
                    this.$router.push("/login");
                })
                .catch((err) => {
                    console.log(err);
                    this.$toast.error("Registration failed!", { position: "bottom-left", duration: 1000 });
                })
        }
    }
}
</script>