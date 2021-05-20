<template>
    <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-8">
                <router-link :to="{ name: 'index' }" class="btn btn-success btn-sm rounded shadow mb-3">Kembali</router-link>
            <div class="card rounded shadow">
                <div class="card-header rounded mx-3 my-3 shadow">
                    Tambah Data Gedung
                </div>
                <div class="card-body">
                   <form @submit.prevent="store()">
                        <div class="mb-3">
                            <label for="" class="form-label">
                                Nama Gedung
                            </label>
                            <input type="text" class="form-control" v-model="gedung.nama_gedung">
                            <div class="text-danger">
                                Validation message
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="" class="form-label">
                                Kapasitas
                            </label>
                            <input type="text" class="form-control" v-model="gedung.kapasitas">
                            <div class="text-danger">
                                Validation message
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="" class="form-label">
                                Fasilitas
                            </label>
                            <input type="text" class="form-control" v-model="gedung.fasilitas">
                            <div class="text-danger">
                                Validation message
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="" class="form-label">
                                Luas
                            </label>
                            <input type="text" class="form-control" v-model="gedung.luas">
                            <div class="text-danger">
                                Validation message
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="" class="form-label">
                                Id Penjaga
                            </label>
                            <select type="text" class="form-control" v-model="gedung.m_id_penjaga">
                                <option value="1">M Tohir</option>
                                <option value="2">Sukirman</option>
                            </select>
                            <div class="text-danger">
                                Validation message
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="" class="form-label">
                                Id Tim Kebersihan
                            </label>
                            <select type="text" class="form-control" v-model="gedung.m_id_tim_kebersihan">
                                <option value="1">Tim Alpha</option>
                                <option value="2">Tim Beta</option>
                                <option value="3">Tim Charlie</option>
                                <option value="4">Tim Delta</option>
                                <option value="5">Tim Elephant</option>
                                <option value="6">Tim Furton</option>
                            </select>
                            <div class="text-danger">
                                Validation message
                            </div>
                        </div>
                        <button class="btn btn-outline-success float-end">Submit</button>
                   </form>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

export default {
    setup(){
        const gedung = reactive({
            nama_gedung: '',
            kapasias: '',
            fasilitas: '',
            luas: '',
            m_id_penjaga: '',
            m_id_tim_kebersihan: '',
        })

        const validation = ref([])

        const router = useRouter()

        function store(){
            axios.post(
                'http://127.0.0.1:8000/api/gedung',
                gedung
            ).then(() => {
                router.push({
                    name: 'index'
                })
            }).catch((err) => {
                validation.value = err.response.data
            })
        }

        return {
            gedung,
            validation,
            router,
            store
        }
    }    
}
</script>