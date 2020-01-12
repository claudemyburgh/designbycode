@extends('layouts.app')

@section('title', 'Home page')

@section('content')

@include('partials.frontpage._hero')

<div class="wrapper skew section ">
    <section class="row margin-bottom scroll__trigger">
        <div class="md-col-10 md-offset-1 text-align-center">
            <h1 class="heading__devider scroll__trigger--element">Do you need a website?</h1>
            <p class="lead scroll__trigger--element">Let us take care of it for you.
                We will design, maintain and keep
                it up to date for you.</p>
            <p class="lead scroll__trigger--element">We create website in many variety of whys and in different formats.
                From single page apps to full featured online stores we can make it for you.</p>
            <div class="devider scroll__trigger--element">
                <i class="lunacon lunacon-heart-solid lunacon--size-x3 text--danger pulse"></i>
            </div>
        </div>
    </section>
    <section class="row scroll__trigger">
        <div class="md-col-8 md-offset-2">
            <img class="cartoon scroll__trigger--element" src="{{ asset('/img/claude-cartoon.png') }}"
                alt="Claude Myburgh Cartoon Design By Code">
            <aside class="cartoon__aside scroll__trigger--element">
                <br>
                <h2 class="text--primary scroll__trigger--element">Hello 😉, I am Claude Myburgh</h2>
                <p class="lead scroll__trigger--element">A <mark>freelance</mark> web designer based out of
                    <strong>Kuilsriver</strong>, <strong>Cape Town</strong> with a <i>passion</i> for creating
                    <mark>sublime</mark> website that work on mobile, tablets and pc’s</p>
            </aside>
        </div>
    </section>
</div>
<div class="deviders">
    <img src="{{ asset('img/deviders/hero.svg') }}" alt="DesignByCode Devider image" class="deviders__hero">
</div>
{{-- @include('partials.frontpage._laptop') --}}
@include('partials._pricing')


@endsection

