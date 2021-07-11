<template>
    <l-map
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
</template>
<script>
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

	export default {
		name: 'AppMap',

		components: {
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
                points: [],
                
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
					longtude: center.lng
				}))
            },
            move(params){
                
                params = Object.assign(
                    {
                        latitude: 48.866667,
                        longitude: 2.333333,
                        distance: 100
                    },
                    params
                )

                axios.post('/api/property/points', params)
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
