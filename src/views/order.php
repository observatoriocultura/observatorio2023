<template>
    <div class="container">
        <h1 class="text-center">Plan Anual de Investigaciones 2023</h1>

        <div class="mb-2 d-flex justify-content-center">
            <div class="input-group" style="max-width: 320px;">
                <input type="text" name="q" v-model="filters.q" class="form-control" placeholder="Buscar" autofocus
                    v-on:change="filterInvestigaciones">
                <button class="btn btn-light" type="button" v-on:click="filters.q = ''">
                    <i class="fas fa-times"></i>
                </button>
            </div>
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
                    :key="i" v-on:click="setCurrent(investigacion['ID'])"
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
                        <a type="button" class="investigacion-title" v-on:click="setCurrent(investigacion['ID'])">
                            {{ investigacion['Código'] }}
                        </a>
                        <br>
                        <span class="badge"
                            v-bind:class="classButtonInvestigacion(investigacion)">{{ investigacion['Estado'] }}</span>
                        <p class="only-lg">
                            {{ investigacion['Objetivo de la investigación'] }}
                        </p>
                    </td>
                </tr>
            </tbody>
        </table>

        <div v-show="section == 'details'">
            <button type="button" class="btn btn-sm btn-light mb-2" v-on:click="goToList">
                <i class="fas fa-arrow-left"></i>
                Volver
            </button>
            <div class="ficha shadow mb-3">
                <div class="ficha-header d-flex justify-content-between">
                    <div style="border-left: 3em solid #ffb80c; margin-left: 3em;" class="p-2">
                        <img class="logo-orfeo" src="images/app/orfeo.png" alt="Logo Orfeo">
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
                                        <tr v-if="currentInvestigacion['ID'] == producto['ID Investigación']">
                                            <td width="65px" class="text-center">
                                                <div class="icon-container" v-bind:title="producto['Tipo producto']">
                                                    <a v-bind:href="producto['Link para ficha']" target="_blank">
                                                        <span
                                                            v-html="iconoTipoProucto(producto['Tipo producto'])"></span>
                                                    </a>
                                                </div>
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
            <div>
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