<template>
    <div>
        <b-progress 
        :value="indexValue" 
        :max="max" 
        class="mb-3"
        show-value
        ></b-progress>
    </div>
</template>
<script>

export default {
    props:['max','indexValue'],
    data: function(){
        return{
        show: true
        }
    },
    components: {
    
    }
}
</script>
<style scoped>

</style>