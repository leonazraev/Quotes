<template>
  <div class="container">
    <my-header></my-header>
    <ProgressBar :indexValue="indexValue" :max="max"></ProgressBar>
    <new-quote></new-quote>
     <b-table :slot="dquote" :items="arrQuotes" :fields="[id,quote]" :tbody-tr-class="rowClass" hover @row-clicked="mclicked"></b-table>
    
  </div>
</template>

<script>
import MyHeader from "./components/Header.vue";
import ProgressBar from "./components/ProgressBar.vue";
import newQuote from "./components/NewQuote.vue";
import DisplayQuote from './components/DisplayQuote.vue'
import { EventBus } from "./main.js";
export default {
  data: function() {
    return {
      arrQuotes: [],
      max: 10,
      indexValue: 0
    };
  },
  components: {
    MyHeader,
    ProgressBar,
    newQuote,
    DisplayQuote
  },
  created() {
    EventBus.$on("valid-quote", data => {
      if (this.arrQuotes.length < this.max) {
        this.arrQuotes.push({ id: this.arrQuotes.length +1, quote: data });
        this.indexValue++;
      }
    });
  },
    methods:{
        mclicked(record,index){
           this.arrQuotes =  this.arrQuotes.filter( el => {
                return el !== record;
            })
            this.indexValue--;
        }
    }
};
</script>

<style>
</style>
