@extends('errors::app')

@section('title', __('Not Found'))
@section('code', '404')
@section('message', __('Not Found'))

@section('img')
    <img class="responsive__image" src="{{ asset('img/errors/404.svg') }}">
@endsection
