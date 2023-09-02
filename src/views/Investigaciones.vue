<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Papa from 'papaparse';

// Variables
//-----------------------------------------------------------------------------
const router = useRouter();
const route = useRoute();
let investigacionId = route.params.id;
const fileGids = {
  'investigaciones': '1186279524',
  'productos': '1226549997',
  'hallazgos': '987529212',
};
const loading = ref(true);
const idDriveFile = '1mTpRd2lgxaY_FJj9XDcXHfMHEOfg2c6rxmUE-zR68WA';
const investigaciones = ref([]);
const productos = ref([]);
const hallazgos = ref([]);
const section = ref('table');
const dataOrigin = 'drive'
const currentInvestigacion = ref({
  'ID':-1,
  'Código':'-',
  'Título':'-',
  'Descripción':'-',
});
const filters = ref({
  q:'',
  entidad:''
});

// FUNCIONES
//-----------------------------------------------------------------------------

const csvPath = (sheetName) => {
  if (dataOrigin == 'drive') {
    return 'https://docs.google.com/spreadsheets/d/' + idDriveFile + '/export?format=csv&gid=' + fileGids[sheetName];  
  } else {
    return 'https://observatoriocultura.github.io/observatorio2023/data/pai_' + sheetName + '.csv';
  }
}

/**
 * Leer el contenido del listado de investigaciones
 * 2023-07-22
 */
const readCSV = () => {
  Papa.parse(csvPath('investigaciones'), {
    download: true,
    header: true,
    complete: (results) => {
      investigaciones.value = results.data;
    }
  });
};

/**
 * Leer el contenido del listado de productos
 * 2023-07-22
 */
const readCSVProductos = () => {
  Papa.parse(csvPath('productos'),
    {
      download: true,
      header: true,
      complete: (results) => {
        productos.value = results.data;
      }
    }
  );
};

/**
 * Leer el contenido del listado de productos
 * 2023-07-22
 */
const readCSVHallazgos = () => {
  Papa.parse(csvPath('hallazgos'), {
    download: true,
    header: true,
    complete: (results) => {
      hallazgos.value = results.data;
      loading.value = false
      console.log(loading.value)

      if ( route.params.id > 0 ) {
        setCurrent()
      }
    }
  });
};

const setInvestigacionId = (newValue) => {
  investigacionId = newValue
  //router.push({ name: 'investigaciones', params: { id: investigacionId } });
   // Crear un nuevo objeto de parámetros con el argumento actualizado
   const newParams = { ...route.params, id: investigacionId };

// Navegar a una nueva ruta con el argumento actualizado
  router.push({ name: route.name, params: newParams });
  setCurrent()
}

/**
 * Establecer investigación actual
 * 2023-07-22
 * @param {integer} investigacionId 
 */
const setCurrent = () =>{
  console.log(investigacionId);
  currentInvestigacion.value = investigaciones.value.find(item => item['ID'] == investigacionId)
  section.value = 'details'
};

const goToList = () => {
  section.value = 'table'
}

const filterInvestigaciones = () => {
  section.value = 'table'
}

const iconoTipoProucto = (tipoProducto) => {
  let icons = [];
  icons['Informe final'] = 'fa-solid fa-file-lines producto-pdf'
  icons['Informe cuantitativo'] = 'fa-solid fa-file-lines producto-cuantitativo'
  icons['Base de datos'] = 'fa-solid fa-table producto-db'
  icons['Presentación'] = 'fa-solid fa-display producto-presentacion'
  icons['Anexo'] = 'fa-solid fa-file producto-general'
  icons['Visualización/Infografía'] = 'fa-solid fa-chart-simple producto-dataviz'
  icons['Audiovisual'] = 'fa-solid fa-circle-play producto-audiovisual'

  return '<i class="' + icons[tipoProducto] + '"></i>'
}

const classButtonInvestigacion = (investigacion) => {
  let buttonClass = 'status-nd'
  
  if ( investigacion['Estado'] == 'Sin iniciar' ) buttonClass = 'status-sin-iniciar'
  if ( investigacion['Estado'] == 'En espera' ) buttonClass = 'status-en-espera'
  if ( investigacion['Estado'] == 'En ejecución' ) buttonClass = 'status-en-ejecucion'
  if ( investigacion['Estado'] == 'Finalizada' ) buttonClass = 'status-finalizada'
  
  if ( investigacion['ID'] == currentInvestigacion.value['ID'] ) {
    buttonClass += ' active'
  }
  return buttonClass
}

// Computed Properties
//-----------------------------------------------------------------------------
const filteredInvestigaciones = computed(() => {
  const filteredArray = investigaciones.value.filter(item => {
    const codigoIncluyePalabra = item['Código'].toLowerCase().includes(filters.value.q.toLowerCase());
    const nombreIncluyePalabra = item['Título'].toLowerCase().includes(filters.value.q.toLowerCase());
    const descripcionIncluyePalabra = item['Descripción'].toLowerCase().includes(filters.value.q.toLowerCase());
    return codigoIncluyePalabra || nombreIncluyePalabra || descripcionIncluyePalabra;
  });
  return filteredArray;
});

const filteredProductos = computed(() => {
  const filteredArray = productos.value.filter(item => {
    const inCurrentInvestigacion = item['ID Investigación'] == currentInvestigacion.value['ID'] && item['Orden'] > 0
    return inCurrentInvestigacion;
  });
  return filteredArray;
});

const filteredHallazgos = computed(() => {
  const filteredArray = hallazgos.value.filter(item => {
    const inCurrentInvestigacion = item['ID Investigación'] == currentInvestigacion.value['ID']
    return inCurrentInvestigacion;
  });
  return filteredArray;
});

onMounted(() => {
  readCSV();
  readCSVProductos();
  readCSVHallazgos();
});

</script>

<template>
  <h1 class="text-center page-title">Plan Anual de Investigaciones 2023</h1>
  <div class="text-center" v-if="loading">
    <div class="spinner-border text-secondary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <div class="container" v-else>
      

      <div class="mb-2 d-flex justify-content-center">
          <div class="input-group me-2" style="max-width: 320px;">
              <input type="text" name="q" v-model="filters.q" class="form-control" placeholder="Buscar" autofocus
                  v-on:change="filterInvestigaciones">
          </div>
          <button class="btn-delete-search" type="button" v-on:click="filters.q = ''">
              <i class="fas fa-times"></i>
          </button>
      </div>

      <div class="text-center my-2" v-show="section == 'table'">
          <span class="text-primary">{{ filteredInvestigaciones.length }}</span>
          de
          {{ investigaciones.length }}
      </div>
      <div class="text-center my-2" v-show="section == 'details'">
          ID Investigación &middot; <strong class="text-primary">{{ currentInvestigacion['ID'] }}</strong>
      </div>

      <div class="d-flex mb-2 justify-content-center">
          <div class="">
              <button type="button" class="investigacion-sqr me-1" v-for="(investigacion,i) in investigaciones"
                  :key="i" v-on:click="setInvestigacionId(investigacion['ID'])"
                  v-bind:class="classButtonInvestigacion(investigacion)" v-bind:title="investigacion['Código']">
              </button>
          </div>
      </div>

      <table class="table bg-white" v-show="section == 'table'">
          <thead>
              <tr>
                  <th>Núm</th>
                  <th class="only-lg">Solicitante</th>
                  <th>Investigación</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(investigacion,key) in filteredInvestigaciones" :key="key">
                  <td class="text-center">{{ investigacion['ID'] }}</td>
                  <td class="only-lg">
                      {{ investigacion['ENTIDAD'] }}
                      <br>
                      {{ investigacion['Dirección/Dependencia'] }}
                  </td>
                  <td>
                      <a type="button" class="investigacion-title" v-on:click="setInvestigacionId(investigacion['ID'])">
                          {{ investigacion['Código'] }}
                      </a>
                      <br>
                      <span class="badge"
                          v-bind:class="classButtonInvestigacion(investigacion)">{{ investigacion['Estado'] }}</span>
                      <p class="only-lg">
                          {{ investigacion['Objetivo de la investigación'] }}
                      </p>
                      <div class="progress d-none" style="height: 2px;">
                        <div class="progress-bar" role="progressbar" v-bind:style="`width: ` + investigacion['Porcentaje de avance']" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                        </div>
                      </div>
                  </td>
              </tr>
          </tbody>
      </table>

      <div v-show="section == 'details'">
          <button type="button" class="btn btn-light mb-2" v-on:click="goToList">
              <i class="fa-solid fa-arrow-left"></i> Tabla
          </button>
          <div class="center_box_800">
            <div class="progress mb-2">
              <div class="progress-bar" role="progressbar" v-bind:style="`width: ` + currentInvestigacion['Porcentaje de avance']" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                {{ currentInvestigacion['Porcentaje de avance'] }}
              </div>
            </div>
          </div>
          <div class="ficha shadow mb-3">
              <div class="ficha-header d-flex justify-content-between">
                  <div style="border-left: 3em solid #ffb80c; margin-left: 3em;" class="p-2">
                      <img class="logo-orfeo" src="/images/app/orfeo.png" alt="Logo Orfeo">
                      <strong>Orfeo</strong>
                      <br>
                      <span title="Expediente documental en Orfeo">{{ currentInvestigacion['EXPEDIENTE'] }}</span>
                  </div>
                  <div class="p-2 only-lg">
                      <img class="logo-dogcc" src="/images/app/logo-dogcc-yellow.png"
                          alt="Logo Observatorio de Cultura">
                  </div>
              </div>
              <div class="ficha-body">
                  <div class="row">
                      <div class="col-md-6">
                          <h3 class="title">
                              <span
                                  v-show="currentInvestigacion['Título'].length == 0">{{ currentInvestigacion['Código'] }}</span>
                              <span
                                  v-show="currentInvestigacion['Título'].length > 0">{{ currentInvestigacion['Título'] }}</span>
                          </h3>

                          <p v-show="currentInvestigacion['Descripción'].length == 0">
                              {{ currentInvestigacion['Objetivo de la investigación'] }}</p>
                          <p v-show="currentInvestigacion['Descripción'].length > 0">
                              {{ currentInvestigacion['Descripción'] }}</p>

                      </div>
                      <div class="col-md-6">
                          <table>
                              <tbody>
                                  <template v-for="(producto,j) in filteredProductos" :key="j">
                                      <tr v-if="currentInvestigacion['ID'] == producto['ID Investigación'] && producto['Link para ficha'].length > 0">
                                          <td width="65px" class="text-center">
                                              <a v-bind:href="producto['Link para ficha']" target="_blank">
                                                <div class="icon-container" v-bind:title="producto['Tipo producto']">
                                                        <span
                                                            v-html="iconoTipoProucto(producto['Tipo producto'])"></span>
                                                </div>
                                              </a>
                                          </td>
                                          <td>
                                              <a v-bind:href="producto['Link para ficha']"
                                                  target="_blank">{{ producto['Título'] }}</a>
                                              <br>
                                              <!-- <small class="text-muted">{{ producto['Tipo producto'] }}</small> -->
                                          </td>
                                          <td>

                                          </td>
                                      </tr>
                                  </template>
                              </tbody>
                          </table>
                      </div>
                  </div>
              </div>
          </div>
          <div class="center_box_800" v-if="filteredHallazgos.length > 0">
              <h3 class="text-center">Datos clave</h3>
              <p class="text-center">Hallazgos destacados como resultado de la investigación</p>
              <table class="table bg-white">
                  <tbody>
                      <tr v-for="(hallazgo,k) in filteredHallazgos" :key="k">
                          <td class="hallazgo-number">{{ k + 1 }}</td>
                          <td>{{ hallazgo['Texto hallazgo'] }}</td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>
  </div>
</template>

<style>
  .page-title{
    color: white;
    background-color: #C53C99;
    padding: 0.2em;
    margin-bottom: 0.5em;
    font-size: 1em;
  }

  .investigacion-title {
    color: #346fdb;
    text-decoration: none;
  }
  .investigacion-title:hover {
    color: #407be9;
    text-decoration: none;
  }

  .icon-container{
    cursor: pointer;
    display: flex;
    align-items:center;
    justify-content: center;
    background-color: #e0e0e0;
    width: 1.9em;
    height: 1.9em;
    border: 1px solid #FFF;
    border-radius: 50%;
    font-size: 1.5em;
    margin-bottom: 0.2em;
    text-align: center;
  }

  .btn-delete-search {
    border: 1px solid #ebedf2;
    width: 38px;
    border-radius: 3px;
    background-color: #f8f9fa;
  }

  .btn-delete-search:hover {
    border-color: #c0c3c9;
    background-color: #f9fafB;
  }

  .icon-container:hover{
    background-color: #FFF;
    border-color: #FFb80c;
  }

  .producto-general{
    color: rgb(80, 50, 140);
  }

  .producto-pdf{
    color: #ea4335;
  }
  .producto-audiovisual{
    color: #ea4335;
  }

  .producto-db{
    color: #30a338;
  }
  .producto-presentacion{
    color: #cc9111;
  }
  .producto-cuantitativo{
    color: #1450b3;
  }
  .producto-dataviz{
    color: #c99e05;
  }

  .ficha{
    border-radius: 0.5em;
    max-width: 800px;
    margin: 0 auto;
    color: #FFF;
    border: 0px;
  }

  .ficha .ficha-header {
    background-color: #FFF;
    color: rgb(80,50,140);
    border: 0px;
    border-radius:0.5em 0.5em 0em 0em; 
    height: 4em;
  }

  .logo-orfeo {
    width: 1em;
  }

  .logo-dogcc {
    width: 160px;
  }

  .ficha-body{
    background-color: rgb(35, 20, 60);
    padding: 2em 1em;
    min-height: 480px;
    border-radius:0em 0em 0.5em 0.5em;
    background: rgb(32,14,60);
    background: linear-gradient(180deg, rgba(32,14,60,1) 0%, rgba(70,43,121,1) 100%);
  }

  .ficha-body a {
    color: #FFF;
  }

  .ficha-body .text-muted{
    color: #CCC!important;
  }

  .ficha .title{
    color: rgb(250,185,55);
    font-size: 2em;
    font-weight: bold;
  }

  .investigacion-sqr{
    width: 1em;
    height: 1em;
    background-color: #FAFAFA;
    border: 1px solid #DDD;
  }

  .investigacion-sqr.active{
    background-color: #5e4296;
    border-color: #5e4296;
  }

  .status-sin-iniciar{
    background-color: #ffcfc9;
    color: #333;
  }
  .status-en-espera{
    color: #333;
    border-color: #ffd45e;
    background-color: #ffe5a0;
  }
  .status-en-ejecucion{
    color: #333;
    border-color: #6fbef0;
    background-color: #bfe1f6;
  }
  .status-finalizada{
    color: #333;
    border-color: #a4e765;
    background-color: #d4edbc;
  }

  .hallazgo-number{
    text-align: center;
    background-color: #ffb80c !important;
    color: #FFF;
    font-size:x-large;
    font-weight:bold;
  }
</style>
