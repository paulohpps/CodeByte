<script setup lang="ts">

</script>
<template>
    <NuxtLayout name="login">
            <div class="loginBox">
                <form >
                    <h1>Login</h1>
                    <div class="input-box">
                        <input class="form-control" type="text" required placeholder="Email" />
                        <font-awesome-icon class="icon" :icon="['fas', 'user']" />
                    </div>
                    <div class="input-box">
                        <input class="form-control" type="password" required placeholder="Senha" />
                        <font-awesome-icon class="icon" :icon="['fas', 'lock']" />
                    </div>
                    <div class="input-box">
                        <button class="btn btn-primary me-3" type="submit">Login</button>
                    </div>
                    <div class="input-box">
                        <NuxtLink class="register-link" to="/register">Não Tem Conta?</NuxtLink>
                    </div>
                </form>
            </div>
    </NuxtLayout>
</template>