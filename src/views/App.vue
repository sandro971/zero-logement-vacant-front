<template>
    <div>
        <Header/>
        <main id="app" class="fr-container">
                        
            <div class="fr-p-5w fr-grid-row fr-grid-row--gutters">
                
                <div class="fr-tabs fr-col-8 ">
                    <ul class="fr-tabs__list" role="tablist" aria-label="[A modifier | nom du système d'onglet]">
                        <li role="presentation">
                            <button id="tabpanel-404" class="fr-tabs__tab fr-fi-checkbox-line fr-tabs__tab--icon-left" tabindex="0" role="tab" aria-selected="true" aria-controls="tabpanel-404-panel">Tout</button>
                        </li>
                        <li role="presentation">
                            <button id="tabpanel-405" class="fr-tabs__tab fr-fi-checkbox-line fr-tabs__tab--icon-left" tabindex="-1" role="tab" aria-selected="false" aria-controls="tabpanel-405-panel">1. A prioriser</button>
                        </li>
                        <li role="presentation">
                            <button id="tabpanel-406" class="fr-tabs__tab fr-fi-checkbox-line fr-tabs__tab--icon-left" tabindex="2" role="tab" aria-selected="false" aria-controls="tabpanel-406-panel">2. A contacter</button>
                        </li>
                        <li role="presentation">
                            <button id="tabpanel-407" class="fr-tabs__tab fr-fi-checkbox-line fr-tabs__tab--icon-left" tabindex="3" role="tab" aria-selected="false" aria-controls="tabpanel-407-panel">3. Contactés</button>
                        </li>
                        <li role="presentation">
                            <button id="tabpanel-408" class="fr-tabs__tab fr-fi-checkbox-line fr-tabs__tab--icon-left" tabindex="4" role="tab" aria-selected="false" aria-controls="tabpanel-408-panel">4. Retours propriétaires</button>
                        </li>
                        <li role="presentation">
                            <button id="tabpanel-409" class="fr-tabs__tab fr-fi-checkbox-line fr-tabs__tab--icon-left" tabindex="5" role="tab" aria-selected="false" aria-controls="tabpanel-409-panel">5. Activés</button>
                        </li>
                        <li role="presentation">
                            <button id="tabpanel-410" class="fr-tabs__tab fr-fi-checkbox-line fr-tabs__tab--icon-left" tabindex="6" role="tab" aria-selected="false" aria-controls="tabpanel-410-panel">6. Sans suite</button>
                        </li>
                    </ul>
                    <div id="tabpanel-404-panel" class="fr-tabs__panel fr-tabs__panel--selected" role="tabpanel" aria-labelledby="tabpanel-404" tabindex="0">
                        
                        <!-- custom nav -->
                        <nav class="my-app-nav" >
                            <div class="fr-grid-row fr-grid-row--gutters">
                                <div class="fr-col-10">
                                    <ul class="fr-btns-group fr-btns-group--inline">
                                        <li>
                                            <button class="fr-btn fr-btn--secondary fr-fi-add-line">
                                            </button>
                                        </li>
                                        <li>
                                            <button class="fr-btn fr-btn--secondary fr-fi-calendar-line">
                                            </button>
                                        </li>
                                        <li>
                                            <button class="fr-btn fr-fi-search-line">
                                            </button>
                                        </li>
                                        <li>
                                            <button class="fr-btn fr-btn--secondary fr-fi-printer-line">
                                            </button>
                                        </li>
                                        <li>
                                            <button class="fr-btn fr-btn--secondary fr-fi-delete-line">
                                            </button>
                                        </li>
                                        <li>
                                            <button class="fr-btn fr-btn--secondary fr-fi-edit-line">
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                
                                <div class="fr-col-2">
                                    13 résultats
                                </div>
                            </div>
                            <div class="modale">
                                <vue-query-builder
                                    :rules="rules"
                                    :maxDepth="3"
                                    :labels="labels"
                                    v-model="query"
                                ></vue-query-builder>
                            </div> <!-- -->
                        </nav>

                        <!-- table -->
                        <div class="fr-grid-row fr-p-1w">
                            <div class="fr-table fr-table--no-scroll fr-col-12">
                                <table class="fr-container">
                                    <!-- <caption>Résumé du tableau (accessibilité)</caption> -->
                                    <thead>
                                        <tr>
                                            <th scope="col">
                                                <!-- check all -->
                                                <div class="fr-checkbox-group">
                                                    <input type="checkbox" id="checkbox" name="checkbox">
                                                    <label class="fr-label " for="checkbox"></label>
                                                </div>
                                            </th>
                                            <th scope="col">Adresse du logement</th>
                                            <th scope="col">Nom de la commune </th>
                                            <th scope="col">Propriétaire ou gestionnaire</th>
                                            <th scope="col">Etapes</th>
                                            <th scope="col">Commentaires</th>
                                            <th scope="col">Addesse email</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <!-- check all -->
                                                <div class="fr-checkbox-group">
                                                    <input type="checkbox" id="checkbox" name="checkbox">
                                                    <label class="fr-label" for="checkbox"></label>
                                                </div>
                                            </td>
                                            <td>0002 RUE GAY LUSSAC</td>
                                            <td>Paris</td>
                                            <td>Benjamin Doberset</td>
                                            <td><div class="fr-tag green-dark">À prioriser</div></td>
                                            <td>...</td>
                                            <td>@</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <!-- check all -->
                                                <div class="fr-checkbox-group">
                                                    <input type="checkbox" id="checkbox" name="checkbox">
                                                    <label class="fr-label" for="checkbox"></label>
                                                </div>
                                            </td>
                                            <td>Donnée</td>
                                            <td>Donnée</td>
                                            <td>Donnée</td>
                                            <td><div class="fr-tag  green-dark">À prioriser</div></td>
                                            <td>...</td>
                                            <td>@</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        
                        <!-- pagination -->
                        <div class="fr-grid-row--center fr-grid-row">

                            <nav role="navigation" class="fr-pagination" aria-label="Pagination">
                                <ul class="fr-pagination__list">
                                    <li>
                                        <a class="fr-pagination__link fr-pagination__link--first">
                                            Première page
                                        </a>
                                    </li>
                                    <li>
                                        <a class="fr-pagination__link fr-pagination__link--prev fr-pagination__link--lg-label">
                                            Page précédente
                                        </a>
                                    </li>
                                    <li>
                                        <a class="fr-pagination__link" aria-current="page" title="Page 1">
                                            1
                                        </a>
                                    </li>
                                    <li>
                                        <a class="fr-pagination__link" href="#" title="Page 2">
                                            2
                                        </a>
                                    </li>
                                    <li>
                                        <a class="fr-pagination__link fr-displayed-lg" href="#" title="Page 3">
                                            3
                                        </a>
                                    </li>
                                    <li>
                                        <a class="fr-pagination__link fr-displayed-lg">
                                            …
                                        </a>
                                    </li>
                                    <li>
                                        <a class="fr-pagination__link fr-displayed-lg" href="#" title="Page 130">
                                            130
                                        </a>
                                    </li>
                                    <li>
                                        <a class="fr-pagination__link fr-displayed-lg" href="#" title="Page 131">
                                            131
                                        </a>
                                    </li>
                                    <li>
                                        <a class="fr-pagination__link" href="#" title="Page 132">
                                            132
                                        </a>
                                    </li>
                                    <li>
                                        <a class="fr-pagination__link fr-pagination__link--next fr-pagination__link--lg-label" href="#">
                                            Page suivante
                                        </a>
                                    </li>
                                    <li>
                                        <a class="fr-pagination__link fr-pagination__link--last" href="#">
                                            Dernière page
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div id="tabpanel-405-panel" class="fr-tabs__panel" role="tabpanel" aria-labelledby="tabpanel-405" tabindex="0">
                        <!-- données de test -->
                        <p>Contenu 2</p>
                    </div>
                    <div id="tabpanel-406-panel" class="fr-tabs__panel" role="tabpanel" aria-labelledby="tabpanel-406" tabindex="0">
                        <!-- données de test -->
                        <p>Contenu 3</p>
                    </div>
                    <div id="tabpanel-407-panel" class="fr-tabs__panel" role="tabpanel" aria-labelledby="tabpanel-407" tabindex="0">
                        <!-- données de test -->
                        <p>Contenu 4</p>
                    </div>
                    <div id="tabpanel-408-panel" class="fr-tabs__panel" role="tabpanel" aria-labelledby="tabpanel-408" tabindex="0">
                        <!-- données de test -->
                        <p>Contenu 5</p>
                    </div>
                    <div id="tabpanel-409-panel" class="fr-tabs__panel" role="tabpanel" aria-labelledby="tabpanel-409" tabindex="0">
                        <!-- données de test -->
                        <p>Contenu 6</p>
                    </div>
                    <div id="tabpanel-410-panel" class="fr-tabs__panel" role="tabpanel" aria-labelledby="tabpanel-410" tabindex="0">
                        <!-- données de test -->
                        <p>Contenu 7</p>
                    </div>
                </div>
                <!-- map -->
                <div class="fr-col-4">
                    <l-map
                        class="frame"
                        :zoom="zoom"
                        :center="center"
                        :options="mapOptions"
                        @update:center="centerUpdate"
                        @update:zoom="zoomUpdate"
                        >
                        <l-tile-layer
                            :url="url"
                            :attribution="attribution"
                            />
                        <v-marker-cluster>
                            <v-marker v-for="p in points" :key="p._id"  :icon="icon" :lat-lng="p['place']['location']['point']['coordinates']">
                                <v-popup :content="'coucou'"></v-popup>
                            </v-marker>
                        </v-marker-cluster>
                    </l-map>
                </div>
            </div>
        </main>
        <Footer />
    </div>
</template>
<style>
    #app{
        width: 100%;
        height: 100%;
        min-width: 100vw;
        min-height: 100vh;
        display: block;
    }
</style>
<script>
	import Header from '../components/Header'
	import Footer from '../components/Footer'
    import axios from 'axios'

    
	import vueCustomScrollbar from 'vue-custom-scrollbar'
	import "vue-custom-scrollbar/dist/vueScrollbar.css"
    import Vue2LeafletMarkercluster  from 'vue2-leaflet-markercluster'
    import iconUrl from 'leaflet/dist/images/marker-icon.png'
    import shadowUrl from 'leaflet/dist/images/marker-shadow.png'
    import "leaflet/dist/leaflet.css";
    import "leaflet.markercluster/dist/MarkerCluster.css";
    import "leaflet.markercluster/dist/MarkerCluster.Default.css";


  	import * as Vue2Leaflet from 'vue2-leaflet'
    import { LMap, LTileLayer, LMarker, LPopup, LTooltip, LIconDefault  } from "vue2-leaflet";
    import { latLng, Icon, icon } from "leaflet";

    import VueQueryBuilder from 'vue-query-builder';

	export default {
		name: 'App',

		components: {
			Header,
			Footer,

            'vue-query-builder': VueQueryBuilder,
            
            LMap,
            LTileLayer,
            LIconDefault,
      		'v-marker': Vue2Leaflet.LMarker,
      		'v-popup': Vue2Leaflet.LPopup,
            LTooltip,
            'v-marker-cluster': Vue2LeafletMarkercluster
		},
		data() {
            let customicon = icon(Object.assign({},
                Icon.Default.prototype.options,
                {iconUrl, shadowUrl}
            ))


			return {
                labels: {
                    "matchType": "Match Type",
                    "matchTypes": [
                        {"id": "all", "label": "All"},
                        {"id": "any", "label": "Any"}
                    ],
                    "addRule": "Add Rule",
                    "removeRule": "&times;",
                    "addGroup": "Add Group",
                    "removeGroup": "&times;",
                    "textInputPlaceholder": "value",
                },
                query: {},
                rules: [
                    {
                        type: "text",
                        id: "vegetable",
                        label: "Vegetable",
                    },
                    {
                        type: "radio",
                        id: "fruit",
                        label: "Fruit",
                        choices: [
                            {label: "Apple", value: "apple"},
                            {label: "Banana", value: "banana"}
                        ]
                    },
                ],
                
                icon: customicon,
                points: [],
                clusterOptions: { disableClusteringAtZoom: 11 },
                results:{},
                zoom: 12,
                center: [
                    // this.$root.position.coords.latitude, 
                    // this.$root.position.coords.longitude
                    48.866667,
                    2.333333
                ],
                url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                
                currentZoom: 11.5,
                mapOptions: {
                    zoomControl: false,
                    scrollWheelZoom: false,
                    zoomSnap: 0.5
                }
			}
		},
		methods: {
            
            zoomUpdate(zoom) {
                this.currentZoom = zoom;
            },
            centerUpdate(center) {
                this.currentCenter = center;
				
            	this.move(Object.assign(this.$route.params, {
					latitude: center.lat,
					longitude: center.lng
				}))
            },
			search(e){
				e.preventDefault()
				e.stopPropagation()

			},
            move(params){
                params = Object.assign(
                    {
                        latitude: this.$root.position.coords.latitude,
                        longitude: this.$root.position.coords.longitude,
                        distance: 100
                    },
                    params
                )
				

                axios.post('/api/explore/search', params)
                    .then(response => {
                        if(!response.data.result){
                        }
                            console.log(response.data.data)

                        this.results = response.data.data
                    })

                axios.post('/api/explore/points', params)
                    .then(response => {
                        if(!response.data.result){
                            console.log('not found')
                        }

                        this.points = response.data.data.map(p=>{
                            p['place']['location']['point']['coordinates'] = latLng(p['place']['location']['point']['coordinates'].reverse())
                            return p
                        })
                    })
            }
		},
		mounted(){

		}
	}
</script>
