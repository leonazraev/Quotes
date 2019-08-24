<template>
  <b-row class="my-1" center>
    <b-col sm="9">
      <b-form-input id="input-valid" :state="true" placeholder="Valid input" v-model="text"></b-form-input>
    </b-col>
    <b-col sm="3">
       <b-button variant="success" @click="insertQuote">Add Quote</b-button>
    </b-col>
  </b-row>
</template>
<script>
import {EventBus} from '../main.js'
export default {
    data : function(){
        return{
            text: ''
        }
    },
    methods: {
        insertQuote(){
            if(this.text === '')
            {
                alert('You try to insert an empty quote');
                return;
            }else{    
                EventBus.$emit('valid-quote',this.text);
            }
              
        },
    }
}
</script>
<style scoped>



</style>