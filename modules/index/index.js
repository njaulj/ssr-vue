import Vue from 'vue'
import $ from 'jquery'
import pdHeader from '../../components/pd-header.vue'
import '../../styles/common.css'

new Vue({
    el: '#app',
    mounted: function() {
        console.log('mounted')
        $.ajax({
            url:'http://www.xici.net',
            type:'get',
            success:function(data) {
                console.log(data)
            }
        })
    },
    data: function() {
        return {

        }
    },
    components: {
        'pd-header':  pdHeader
    }
})