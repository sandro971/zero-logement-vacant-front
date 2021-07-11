<template>
    <div>
        <table class="fr-table fr-col-12">
            <!-- <caption>Résumé du tableau (accessibilité)</caption> -->
            <thead>
                <tr>
                    <th scope="col">
                        <!-- check all -->
                        <div class="fr-checkbox-group">
                            <input type="checkbox" id="checkbox-all" name="checkbox" value="on" v-model="all_checked">
                            <label class="fr-label " for="checkbox-all"></label>
                        </div>
                    </th>
                    <th scope="col">Adresse</th>
                    <th scope="col">Commune </th>
                    <th scope="col">Propriétaire</th>
                    <th scope="col">Etapes</th>
                    <th scope="col">Commentaires</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <!-- check all -->
                        <div class="fr-checkbox-group">
                            <input type="checkbox" id="checkbox-1" name="checkbox" value="1" v-model="checked">
                            <label class="fr-label" for="checkbox-1"></label>
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
                            <input type="checkbox" id="checkbox-2" name="checkbox" value="2" v-model="checked">
                            <label class="fr-label" for="checkbox-2"></label>
                        </div>
                    </td>
                    <td>Donnée</td>
                    <td>Donnée</td>
                    <td>Donnée</td>
                    <td><div class="fr-tag  green-dark">À prioriser</div></td>
                    <td>...</td>
                    <td>@</td>
                </tr>
                <tr v-for="p in $parent.results.properties">
                    <td>
                        <!-- check all -->
                        <div class="fr-checkbox-group">
                            <input type="checkbox" v-bind:id="'checkbox-'+p._id" name="checkbox">
                            <label class="fr-label" v-bind:for="'checkbox-'+p._id"></label>
                        </div>
                    </td>
                    <td>{{p.adresse_logement}}</td>
                    <td>{{p.nom_commune}}</td>
                    <td>{{p.proprietaire}}</td>
                    <td><div class="fr-tag green-dark">getStepName(p.etape)</div></td>
                    <td>{{p.commentaire}}</td>
                    <td>{{p.email}}</td>
                </tr>
            </tbody>
        </table>
        
        <!-- pagination -->
        <Pagination />
    </div>
</template>

<script>
    import Pagination from './Pagination.vue'

    export default {
        name: 'AppTable',
		components: {
            Pagination
		},

		mounted: ()=>{
           
		},
        data(){
            return {
                checked: [],
                all_checked: []
            }
        },
        watch: {
            checked(){
                console.log(this.checked)
            },
            all_checked(val){
                if(val == 'on'){
                    this.checked = [1,2]
                }
                else{
                    this.checked = []
                }
            }
        }
    }
</script>