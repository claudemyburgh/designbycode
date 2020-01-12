@extends('layouts.app')

@section('title', 'Contact Us')

@section('content')
<div class="wrapper section">
    <div class="row">
        <div class="md-col-6 md-offset-3">
            @include('partials._contact-details')
            @if(session('errors'))
                <div class="notify notify--danger text--danger font--bold">
                    Please check input
                </div>
            @endif

            <div class="panel  contact-form comin">
                <div class="panel__header"><h1 class="heading__devider">Contact Us</h1></div>
                    <form method="post" action="{{ route('contact.send.1.store') }}" novalidate>
                        @csrf
                        <div class="panel__body">
                           <div class="form__group {{ $errors->has('first_name') ? ' has__danger' : '' }}">
                               <label for="first_name" class="form__label font--bold" >First Name:</label>
                               <input type="first_name" name="first_name" id="first_name" class="form__item contact-form__item" autofocus autocomplete="first_name" value="{{ old('first_name') ?: $step->first_name }}">
                               @if ($errors->has('first_name'))
                                   <strong class="form__helper">
                                       {{ $errors->first('first_name') }}
                                   </strong>
                               @endif
                           </div>
                           <div class="form__group {{ $errors->has('last_name') ? ' has__danger' : '' }}">
                               <label for="last_name" class="form__label font--bold" >Last Name:</label>
                               <input type="last_name" name="last_name" id="last_name" class="form__item contact-form__item" autocomplete="last_name" value="{{ old('last_name') ?: $step->last_name }}">
                               @if ($errors->has('last_name'))
                                   <strong class="form__helper">
                                       {{ $errors->first('last_name') }}
                                   </strong>
                               @endif
                           </div>
                           <div class="form__group">
                               <button class="btn btn--nue btn--primary" type="submit">Next</button>
                           </div>

                    </form>
                </div>
            </div>
            @include('form.partials._steps')
        </div>
    </div>
</div>
@endsection
