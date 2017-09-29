<template>
    <div class="pd-header">
        <span class="text-google-green">{{comName}}<b class="text-red">bb</b></span>
    </div>
</template>
<script>
export default {
    data () {
        return {
            comName: 'padaio'
        }
    }
}
</script>
<style scoped>
.text-red {
    color: red;
    background-image: url('../assets/avatar.png');
}
</style>
