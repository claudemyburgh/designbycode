@extends('layouts.app')

@section('title', 'Serivices page')

@section('content')

@include('partials.pricing._hero')

<div class="wrapper section skew">
    <div class="row padding scroll__trigger">
        <div class="md-col-8 md-offset-2 text-align-center">
            <h1 class="heading__devider scroll__trigger--element">Website Development</h1>
            <p class="lead scroll__trigger--element">Unlike most ✌️web design companies✌️ we handcraft each and every theme, layout, template and design yourself.</p>
            <p class="lead scroll__trigger--element">We dont copy we design.</p>
            <div class="devider scroll__trigger--element">
                <i class="lunacon lunacon-coffee lunacon--size-x3 text--secondary pulse"></i>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="md-col-4 scroll__trigger">
            <img class="resposive__img scroll__trigger--element" src="{{ asset('img/undraw/static.svg') }}">
            <h2 class="heading__devider scroll__trigger--element">Static Website</h2>
            <div class="nue detail__block scroll__trigger--element">
                <p>The static website is for companies or individual that doesn't need a lot of pages and only need to display content that don't require authentication and content.</p>
                <p>In most cases this will be a 1 to 5 page website. The website content is static and will not change.</p>
                <div class="detail__block__price"> R 350.00</div>
            </div>
        </div>
        <div class="md-col-4 scroll__trigger">
            <img class="resposive__img scroll__trigger--element" src="{{ asset('img/undraw/laravel.svg') }}">
            <h2 class="heading__devider scroll__trigger--element">Dynamic Website </h2>
            <div class="nue detail__block scroll__trigger--element">
               <p> A Dynamic website or CMS is for displaying loads content on pages and is not limited to a set amount.</p>
                <p>Pages can be added and edited by you the client without contacting us the developer.</p>
                <p>Or we can just handle it for you and do all the hard work for you.</p>

                <div class="detail__block__price"> R 600.00</div>
            </div>
        </div>
        <div class="md-col-4 scroll__trigger">
            <img class="resposive__img scroll__trigger--element" src="{{ asset('img/undraw/woo.svg') }}">
            <h2 class="heading__devider scroll__trigger--element">Ecommerce Website</h2>
            <div class="nue detail__block scroll__trigger--element">
                <p>An ecommerce website is basically the same as a CMS website with the ability to sell products online and accepting payment.</p>
                <p>This allows you to sell your product all over South Africa and even the world</p>
                <p>You can add stock, create specials, do inventory, and many more.</p>
                <div class="detail__block__price"> R 650.00</div>
            </div>
        </div>
    </div>
</div>
@endsection
