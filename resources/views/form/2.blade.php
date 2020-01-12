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
                    <form method="post" action="{{ route('contact.send.2.store') }}" novalidate>
                        @csrf
                        <div class="panel__body">
                           <div class="form__group {{ $errors->has('email') ? ' has__danger' : '' }}">
                               <label for="email" class="form__label font--bold" >Email:</label>
                               <input type="email" name="email" id="email" class="form__item contact-form__item" autofocus autocomplete="email" value="{{ old('email') ?: $step->email  }}">
                               @if ($errors->has('email'))
                                   <strong class="form__helper">
                                       {{ $errors->first('email') }}
                                   </strong>
                               @endif
                           </div>
                           <div class="form__group {{ $errors->has('phone') ? ' has__danger' : '' }}">
                               <label for="phone" class="form__label font--bold" >Phone:</label>
                               <input type="tel" name="phone" id="phone" class="form__item contact-form__item" autocomplete="phone" value="{{ old('phone') }}">
                               @if ($errors->has('phone'))
                               <strong class="form__helper">
                                   {{ $errors->first('phone') }}
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
