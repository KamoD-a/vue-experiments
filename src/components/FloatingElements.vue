<template>

    <body>
        <div class="main-container">
            <div class="animated_objects">
                <div class="animation-slow">
                    <img src="../assets/cloud_pink.png">
                </div>
                <div class="animation-wiggle">
                    <img src="../assets/wiggle_yellow.png">
                </div>
                <div class="animation-slow">
                    <img src="../assets/cloud_pink.png">
                </div>
                <div class="animation-slow">
                    <img src="../assets/cloud_pink.png">
                </div>
            </div>
        </div>
        <div class="button-container">
            <a href="" class="action-button">Back</a>
            <div :class="{ shake: disabled }">
                <p class="action-button" @click="warnDisabled">Change Color</p>
            </div>
        </div>
    </body>
</template>

<script setup>
import { ref } from 'vue'

const disabled = ref(false)

function warnDisabled() {
    disabled.value = true
    setTimeout(() => {
        disabled.value = false
    }, 1500)
}
</script>

<style>

</style>

<style scoped>
body {
    overflow: hidden;
    background-image: url("../assets/background.png");
    background: cover;
    background-size: cover;
    background-repeat: no-repeat;
    padding: -10px;
    background-attachment: fixed;
}

.button-container {
    margin-top: 85%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.action-button {
    text-decoration: none;
    color: black
}

.action-button {
    size: 10%;
    background-color: aquamarine;
    margin: 5px;
    padding: 5px;
    border-radius: 8px;
    font-size: 12px;
    font-weight: bolder;
}

.action-button:hover {
    background-color: #2b58d2;
    transition: 0.7s;
    color: antiquewhite;
}

.action-button:active {
    background-color: #6f1bdd;
    transition: 0.2s;
}

.animation-slow img {
    position: absolute;
    animation: moves 20s infinite linear;
}

.animation {
    display: flex;
}

@keyframes moves {
    0% {
        top: -100%;
        left: -100%;
    }

    50% {
        top: 50%;
        left: 50%;
        transform: rotate(40deg);
    }

    100% {
        top: 100%;
        left: 100%;
        transform: rotate(-40deg);
    }
}

.animation-wiggle img {
    position: absolute;
    animation: wiggle 15s infinite ease-in-out;
}

.animation {
    display: flex;
}

@keyframes wiggle {
    from {
        top: -100%;
        left: -100%;
    }

    to {
        top: 50%;
        left: 100%;
        transform: rotate(360deg);
    }
}

.shake {
    animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
}

@keyframes shake {

    10%,
    90% {
        transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
        transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
        transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
        transform: translate3d(4px, 0, 0);
    }
}
</style>