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
    </body>
</template>

<script setup>
</script>

<style>
body{
    overflow: hidden;
    background-image: url("../assets/background.png");
    background: cover;
    background-size: cover;
    background-repeat: no-repeat;
    padding: -10px;
    background-attachment: fixed;
}



.animation-slow img{
  position: absolute;
  animation: moves 20s infinite linear;
}

.animation{
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
      transform: rotate( 40deg );
   }

   100% {
      top: 100%;
      left: 100%;
      transform: rotate(-40deg );
   }
}

.animation-wiggle img{
  position: absolute;
  animation: wiggle 15s infinite ease-in-out;
}

.animation{
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
      transform: rotate( 360deg );
   }
}
</style> 