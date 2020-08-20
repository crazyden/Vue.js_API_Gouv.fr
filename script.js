const vm = new Vue({
    el: "#app-api",
    data: {
        info: [],
        codeVille: '',
        urlCode: 'https://geo.api.gouv.fr/communes?codePostal=',
        newUrl: '',
        error: '',
        communes: [],
        codeDept: '',
        urlDept: 'https://geo.api.gouv.fr/departements/',
        newDept: '',
        
    },
    methods:{
        codeEnter: function(){
          this.newUrl = this.urlCode + this.codeVille

            axios
            .get(this.newUrl)
            .then(response => (this.info = response.data))
            .finally(() => this.newUrl = '') 
        },

        deptEnter: function(){
            this.newDept = this.urlDept + this.codeDept + '/communes'
  
              axios
              .get(this.newDept)
              .then(response => (this.communes = response.data))
              .finally(() => this.newDept = '') 
          }
    }
});