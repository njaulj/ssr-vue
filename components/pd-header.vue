<template>
    <div class="pd-header flex">
        <div class="fluid">{{comName}}</div>
        <div class="fixed">666</div>
        <div class="fluid">666</div>        
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
.pd-header {
  box-shadow: 1px 1px 1px #f2f2f2;
}

.fluid {
  flex: 1;
}

.fixed {
  width: 100%;
  max-width: 960px;
}
</style>
