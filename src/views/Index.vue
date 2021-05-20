<template>
    <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-8">
                <router-link :to="{ name: 'post' }" class="btn btn-success btn-sm rounded shadow mb-3">Tambah Data</router-link>
            <div class="card rounded shadow">
                <div class="card-header rounded mx-3 my-3 shadow">
                    Data Gedung
                </div>
                <div class="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Nama Gedung</th>
                                <th>Kapasitas</th>
                                <th>Fasilitas</th>
                                <th>Tim Kebersihan</th>
                                <th>Luas</th>
                                <th>Penjaga</th>
                                <th>Opsi</th>
                            </tr>   
                        </thead>
                        <tbody>
                            <tr v-for="(gedung, index) in gedung.data" :key="index">
                                <td>{{gedung.nama_gedung}}</td>
                                <td>{{gedung.kapasitas}}</td>
                                <td>{{gedung.fasilitas}}</td>
                                <td>{{gedung.m_id_tim_kebersihan}}</td>
                                <td>{{gedung.luas}}</td>
                                <td>{{gedung.m_id_penjaga}}</td>
                                <td>
                                    <div class="btn-group">
                                        <button class="btn btn-primary btn-sm rounded shadow mt-1">Edit</button>
                                        <buttons class="btn btn-danger btn-sm rounded shadow mx-1 mt-1">Delete</buttons>
                                    </div>
                                    
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import {onMounted, ref} from 'vue'

export default {
    setup(){
        let gedung = ref([]);

        onMounted(() => {
            axios.get('http://127.0.0.1:8000/api/gedung')
            .then((result) => {
                gedung.value = result.data
            }).catch((err) => {
                console.log(err.response)
            })
        })

        return{
            gedung
        }
    }
}
</script>