<template>
    <div>
        <Dialog v-if="dialog" :config="dialog"/>
        <router-view/>
    </div>
</template>

<style>

</style>

<script>
    import Vue from 'vue'
    import '@gouvfr/dsfr/dist/css/dsfr.min.css'
    import '@gouvfr/dsfr/dist/js/dsfr.module.min.js'

    import Dialog from './components/Dialog.vue' 


    export default {
        name: 'App',
		components: {
            Dialog
		},

		mounted(){
		},
        data(){
            return {
                dialog : null
            }
        }
    }
</script>