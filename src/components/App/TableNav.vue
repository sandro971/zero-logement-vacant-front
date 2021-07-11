<template>
    <!-- custom nav -->
    <nav class="my-app-nav" >
        <div class="fr-grid-row fr-grid-row--gutters">
            <div class="fr-col-10">
                <ul class="fr-btns-group fr-btns-group--inline">
                    <li>
                        <button class="fr-btn fr-btn--secondary fr-fi-add-line" @click="add">
                        </button>
                    </li>
                    <li>
                        <button class="fr-btn fr-btn--secondary fr-fi-calendar-line" @click="table_filter = 'query'">
                        </button>
                    </li>
                    <li>
                        <button class="fr-btn fr-fi-search-line" @click="table_filter = 'query'">
                        </button>
                    </li>
                    <li>
                        <button class="fr-btn fr-btn--secondary fr-fi-printer-line" @click="print">
                        </button>
                    </li>
                    <li>
                        <button class="fr-btn fr-btn--secondary fr-fi-delete-line" @click="del">
                        </button>
                    </li>
                    <li>
                        <button class="fr-btn fr-btn--secondary fr-fi-edit-line" @click="edit">
                        </button>
                    </li>
                </ul>
            </div>
            
            <div class="fr-col-2">
                {{$parent.results.count}} résultat{{$parent.results.count > 0 ? 's': ''}}
            </div>
        </div>
        <div class="modale" v-if="table_filter == 'calendar'"></div>
        <div class="modale" v-if="table_filter == 'query'">
            <!-- <vue-query-builder
                :rules="vqb_rules"
                :maxDepth="3"
                :labels="vqb_labels"
                v-model="vqb_query"
            ></vue-query-builder> -->
        </div>
    </nav>
</template>
<script>
    import axios from 'axios'
    import VueQueryBuilder from 'vue-query-builder';
    

	export default {
		name: 'AppTableNav',

		components: {
            'vue-query-builder': VueQueryBuilder,
		},
		data() {
			return {
                table_filter: 'query',
                vqb_rules: undefined,
                vqb_labels: undefined,
                vqb_query: undefined
			}
		},
		methods: {
            del(){

            },
            add(){

            },
            print(){

            },
            edit(){

            },
		}
	}
</script>
