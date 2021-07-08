<template>
    <div>
        
    </div>
</template>
<style>

</style>
<script>
    import "~leaflet/dist/leaflet.css";
    import "~leaflet.markercluster/dist/MarkerCluster.css";
    import "~leaflet.markercluster/dist/MarkerCluster.Default.css";
    
	// import vueCustomScrollbar from 'vue-custom-scrollbar'
	// import "vue-custom-scrollbar/dist/vueScrollbar.css"
    import Vue2LeafletMarkercluster  from 'vue2-leaflet-markercluster'
    import iconUrl from 'leaflet/dist/images/marker-icon.png'
    import shadowUrl from 'leaflet/dist/images/marker-shadow.png'


  	import * as Vue2Leaflet from 'vue2-leaflet'
    import { LMap, LTileLayer, LMarker, LPopup, LTooltip, LIconDefault  } from "vue2-leaflet";
    import { latLng, Icon, icon } from "leaflet";
</script>