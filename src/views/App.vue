<template>
    <div>
        <Header/>
        <main id="app">
            <div class="fr-container">
                <div class="fr-pt-4w fr-pl-4w ">
                    <label  class="fr-label" for="step">Sélectionner une étape</label>
                    
                    <select class="fr-select fr-col-4" id="step" name="step" v-model="step">
                        <option value="" selected>Tout</option>
                        <option value="1">1. A prioriser</option>
                        <option value="2">2. A contacter</option>
                        <option value="3">3. Contactés</option>
                        <option value="4">4. Retours propriétaires</option>
                        <option value="4">5. Activés</option>
                        <option value="4">6. Sans suite</option>
                    </select>
                </div>
                <div class="fr-grid-row fr-grid-row--gutters">
                    <div class=" fr-col-12 fr-p-5w  ">
                        
                        <div class="fr-tabs">
                            <ul class="fr-tabs__list" role="tablist" aria-label="[A modifier | nom du système d'onglet]">
                                <li role="presentation">
                                    <button id="tabpanel-404" class="fr-tabs__tab fr-fi-checkbox-line fr-tabs__tab--icon-left" tabindex="0" role="tab" aria-selected="true" aria-controls="tabpanel-404-panel">Liste + Carte</button>
                                </li>
                                <li role="presentation">
                                    <button id="tabpanel-405" class="fr-tabs__tab fr-fi-checkbox-line fr-tabs__tab--icon-left" tabindex="-1" role="tab" aria-selected="false" aria-controls="tabpanel-405-panel">Liste</button>
                                </li>
                                <li role="presentation">
                                    <button id="tabpanel-406" class="fr-tabs__tab fr-fi-checkbox-line fr-tabs__tab--icon-left" tabindex="-1" role="tab" aria-selected="false" aria-controls="tabpanel-406-panel">Carte</button>
                                </li>
                            </ul>
                            <div id="tabpanel-404-panel" class="fr-tabs__panel fr-tabs__panel--selected" role="tabpanel" aria-labelledby="tabpanel-404" tabindex="-1">
                                <!-- custom nav -->
                                <TableNav />

                                <div class="fr-grid-row fr-grid-row--gutters fr-pt-2w">
                                    <!-- table -->
                                    <div class="fr-col-8" >
                                        <Table />
                                    </div>

                                    <!-- map -->
                                    <div  class="fr-col-4">
                                        <Map style="height: 30em; display: block; witdh: 100%;" />
                                    </div>
                                </div>
                            </div>
                            <div id="tabpanel-405-panel" class="fr-tabs__panel" role="tabpanel" aria-labelledby="tabpanel-405" tabindex="0">
                                <!-- custom nav -->
                                <TableNav />

                                <!-- table -->
                                <Table  class="fr-pt-4w" />
                            </div>
                            <div id="tabpanel-406-panel" class="fr-tabs__panel" role="tabpanel" aria-labelledby="tabpanel-406" tabindex="0">
                                <!-- custom nav -->
                                <TableNav />

                                <div class="fr-grid-row fr-grid-row--gutters">
                                    <!-- map -->
                                    <div class="fr-container fr-pt-4w fr-pb-2w fr-col-12">
                                        <Map style="height: 50em" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <Footer />
    </div>
</template>
<style>
</style>
<script>
	import Header from '../components/Header'
	import Footer from '../components/Footer'
    import Table from '../components/App/Table.vue'
    import TableNav from '../components/App/TableNav.vue'
    import Map from '../components/App/Map.vue'
    import axios from 'axios'

	export default {
		name: 'App',

		components: {
			Header,
			Footer,
            
            Table,
            TableNav,
            Map,

		},
		data(){
            return {
                table_filter: null,
                step: '',
                results: {
                    page: 1,
                    count: 0,
                    data: []
                }
            }
        },
        watch:{
            step(val){

            }
        },
		methods: {
            getStepName(idx){
                return [
                    'À prioriser',
                    'À contacter',
                    'Contactés',
                    'Retours propriétaires',
                    'Activés',
                    'Sans suite'
                ][idx-1]
            },
			search(params){
                this.$store.dispatch('getPosition')
                    .then(pos=>{
                        params = Object.assign(
                            {
                                latitude: pos.coords.latitude,
                                longitude: pos.coords.longitude,
                                distance: 100
                            },
                            params
                        )

                        axios.post('/api/property/search', params)
                            .then(response => {
                                if(!response.data.result){
                                }
                                    console.log(response.data.data)

                                this.results = response.data.data
                            })
                    })
                    .catch(err=>{
                        console.log(err)

                    })
                
			}
		},
		mounted(){
            this.search(
                Object.assign(
                    {

                    },
                    this.$route.params
                )
            )
		}
	}
</script>
