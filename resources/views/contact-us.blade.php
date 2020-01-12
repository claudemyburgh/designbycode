@extends('layouts.app')

@section('title', 'Contact Us')

@section('content')
<div class="wrapper section">
    <div class="row">
        <div class="md-col-6 md-offset-3">
            <div class="panel nue">
                <div class="panel__header"><h1 class="heading__devider">Contact Us</h1></div>

                <div class="panel__body">
                   <div class="form__group">
                       <label for="name" class="form__label font--bold" >Name:</label>
                       <input id="name" class="form__item contact-form__item" autocomplete="name"></input>
                   </div>
                   <div class="form__group">
                       <label for="email" class="form__label font--bold">Email:</label>
                       <input id="email" class="form__item contact-form__item" autocomplete="email"></input>
                   </div>
                   <div class="form__group">
                       <button class="btn btn--nue btn--primary" type="submit">Next</button>
                   </div>

                </div>
            </div>
        </div>
    </div>
</div>
@endsection
