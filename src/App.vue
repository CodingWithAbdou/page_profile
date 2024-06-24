<template>
    <div>
        <BackgroundDesgin />
        <NavigationBar />
        <router-view></router-view>
    </div>
</template>

<script setup>
import BackgroundDesgin from './components/BackgroundDesgin.vue';
import NavigationBar from './components/NavigationBar.vue';
</script>
