<template>
    <div class="contact-form" @change="getData">
        <div class="form__group">
            <label for="name" class="form__label font--bold" >Name:</label>
            <input id="name" class="form__item contact-form__item" v-model="form.name" autocomplete="name"></input>
        </div>
        <div class="form__group">
            <label for="email" class="form__label font--bold">Email:</label>
            <input id="email" class="form__item contact-form__item" v-model="form.email" autocomplete="email"></input>
        </div>
        <div class="form__group">
            <label for="subject" class="form__label font--bold">Subject:</label>
            <select id="subject" class="form__item contact-form__item" v-model="form.subject">
                <option :selected="selected" disabled>Select a option</option>
                <option value="quote">Get Quote</option>
                <option value="help">Need Help</option>
            </select>
        </div>
        <div class="row" v-if="checkSubject">
            <div class="md-col-12 text-align-center">
                <p class="font--bold">What do you need?</p>
            </div>
            <div class="md-col-4">
                <div class="form__group">
                    <label>
                        <input type="checkbox" name="test" v-model="form.service.website">
                        <div class="block"> Website </div>
                    </label>
                </div>
            </div>
            <div class="md-col-4">
                <div class="form__group">
                    <label>
                        <input type="checkbox" name="test" v-model="form.service.logo">
                        <div class="block"> Logo </div>
                    </label>
                </div>
            </div>
            <div class="md-col-4">
                <div class="form__group">
                    <label>
                        <input type="checkbox" name="test" v-model="form.service.hosting">
                        <div class="block"> Hosting </div>
                    </label>
                </div>
            </div>
        </div>
        <div class="form__group">
            <label class="form__label font--bold">Message:</label>
            <textarea class="form__item contact-form__item" rows="6"></textarea>
        </div>

        <div class="form__group">
            <button @click.prevent="submitForm" class="btn btn--primary-gradient">Send</button>
        </div>
        {{ form }}
    </div>
</template>

<script>
    export default {
        name: "ContactForm",
        data() {
            return {
                data: null,
                form: {
                    service: {}
                },
                errors: [],
                processing: false,
                service: false
            }
        },
        computed: {
            checkSubject() {
                return (this.form.subject !== "quote") ? false : true
            }
        },
        created() {


        },
        methods: {
            submitForm() {

            },
            getData() {
                bus.$emit('somedata', this.form)
            }
        },
        mounted() {
        }
    }
</script>
