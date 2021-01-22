<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Order: #{{order.slug}}</div>

                    <div class="card-body">
                        <ul>
                            <li>Name: <span class="text-danger">{{order.name}}</span> </li>
                            <li>Email:<span class="text-danger">{{order.email}}</span></li>
                            <li>phone:<span class="text-danger">{{order.phone}}</span></li>
                            <li>address :<span class="text-danger">{{order.address }}</span></li>
                            <li>dist :<span class="text-danger">{{order.dist }}</span></li>
                            <li>aprt:<span class="text-danger">{{order.aprt}}</span></li>
                            <li>house :<span class="text-danger">{{order.house}}</span></li>
                            <li>bell:<span class="text-danger">{{order.bell}}</span></li>
                            <li>coordinates:<span class="text-danger">{{order.lat}},{{order.lng}}</span></li>
                            <li>status:<span class="text-danger">{{order.status}}</span></li>
                            <li>total:<span class="text-danger">{{order.total}}</span></li>
                            <li>driver_id:<span class="text-danger">{{order.driver_id}}</span></li>
                            <li> note_a:<span class="text-danger">{{order.note_a }}</span></li>
                            <li> note_b:<span class="text-danger">{{order.note_b }}</span></li>
                            <li> user_id:<span class="text-danger">{{order.user_id }}</span></li>
                            <li> parent:<span class="text-danger">{{order.parent }}</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:['order'],
        data() {
            return {
                feed:null
            }
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
