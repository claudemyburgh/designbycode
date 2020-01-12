<template>
    <div class="panel nue">
        <div class="panel__header"><h1 class="heading__devider">Contact Us</h1></div>

        <div class="panel__body">
           <div class="form__group">
               <label for="name" class="form__label font--bold" >Name:</label>
               <input id="name" class="form__item contact-form__item" v-model="form.name" autocomplete="name"></input>
           </div>
           <div class="form__group">
               <label for="email" class="form__label font--bold">Email:</label>
               <input id="email" class="form__item contact-form__item" v-model="form.email" autocomplete="email"></input>
           </div>
           <div class="form__group">
               <a href="#" class="btn btn--nue btn--primary">Send</a>
           </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "FormContact",
        data() {
            return {
                form: {},
                errors: []
            }
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
