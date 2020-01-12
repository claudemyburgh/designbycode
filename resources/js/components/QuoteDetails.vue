<template>
    <div class="panel panel--default contact-form">
        <div v-if="data.name" class="panel__header">Hi, {{ data.name }}</div>

        <div class="panel__body">
            <p v-if="data.name">Thank you for contacting us. This is just rough estimate of what it my cost. </p>
            <table v-if="data.service.length"> class="table table--striped table--bordered">
                <thead class="table__head">
                  <tr>
                    <th>Type</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody class="table__body">
                    <tr v-if="data.service.website">
                        <td data-title="Type">Domain</td>
                        <td data-title="Price">R 105.00</td>
                    </tr>
                    <tr v-if="data.service.website">
                        <td data-title="Type">SSL</td>
                        <td data-title="Price">R 600.00</td>
                    </tr>
                    <tr v-if="data.service.website">
                        <td data-title="Type">Website</td>
                        <td data-title="Price">R 3600.00</td>
                    </tr>
                    <tr v-if="data.service.logo">
                        <td data-title="Type">Logo Design</td>
                        <td data-title="Price">R 1200.00</td>
                    </tr>
                    <tr v-if="data.service.hosting">
                        <td data-title="Type">Logo Design</td>
                        <td data-title="Price">R 350.00</td>
                    </tr>
                </tbody>
            </table>
            <div v-if="data.service.website">The Website will cost R 3600.00</div>
            {{ data }}
        </div>
    </div>
</template>

<script>
    export default {
        name: "QuoteDetails",
        data() {
            return {
                data: {}
            }
        },
        computed: {
            getData() {
                return 'dta'
            }
        },
        mounted() {
            bus.$on('somedata', (data) => {
                this.data = data
            })

        }
    }
</script>
