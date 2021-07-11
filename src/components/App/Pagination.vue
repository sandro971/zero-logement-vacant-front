<template>
    <!-- pagination -->
    <div class="fr-grid-row--center fr-grid-row fr-pt-5w">

        <nav role="navigation" class="fr-pagination" aria-label="Pagination">
            <ul class="fr-pagination__list">
                <li>
                    <router-link class="fr-pagination__link fr-pagination__link--first "
                        :to="getFirstPageLink()">
                        Première page
                    </router-link>
                </li>
                <li>
                    <router-link class="fr-pagination__link fr-pagination__link--prev fr-pagination__link--lg-label"
                        :to="getPrevPageLink()">
                        Page précédente
                    </router-link>
                </li>


                <li v-for="id in getPageLinks()">
                    <router-link class="fr-pagination__link" 
                        v-bind:aria-current="page" 
                        title="Page 1" 
                        :to="'/app?page=' + id">
                        {{id}}
                    </router-link>
                </li>
                
                <li>
                    <router-link class="fr-pagination__link fr-pagination__link--next fr-pagination__link--lg-label"
                        :to="getNextPageLink()">
                        Page suivante
                    </router-link>
                </li>
                <li>
                    <router-link class="fr-pagination__link fr-pagination__link--last"
                        :to="getLastPageLink()">
                        Dernière page
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script>

    export default {
        name: 'AppPagination',
		components: {
		},

		mounted: ()=>{
           
		},
        data(){
            return {
                links:[],
                page:1
            }
        },
        methods: {
            getNextPageLink(){
                return "/app?page=" +4
            },
            getPrevPageLink(){
                return "/app?page=" +2
            },
            getFirstPageLink(){
                return "/app?page=" +1
            },
            getLastPageLink(){
                return "/app?page=" +10
            },
            getPageLinks(){
                return [
                    1
                ]
            }
        }
    }
</script>
