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

            <div class="panel contact-form comin">
                <div class="panel__header"><h1 class="heading__devider">Contact Us</h1></div>
                <form method="post" action="{{ route('contact.send.4.store') }}" novalidate>
                    @csrf
                    <div class="panel__body">
                        <div class="form__group {{ $errors->has('subject') ? ' has__danger' : '' }}">
                            <label for="subject" class="form__label font--bold" >Subject:</label>
                            <input type="text" placeholder="I heed a awesome website" autofocus autocomplete="subject" name="subject" id="subject" class="form__item contact-form__item" autocomplete="subject" value="{{ old('subject') ?: $step->subject  }}">
                            @if ($errors->has('subject'))
                            <strong class="form__helper">
                                {{ $errors->first('subject') }}
                            </strong>
                            @endif
                        </div>
                        <div class="form__group {{ $errors->has('message') ? ' has__danger' : '' }}">
                            <label for="message" class="form__label font--bold" >Message:</label>
                            <textarea class="form__item contact-form__item" name="message" id="message" rows="7"></textarea>
                            @if ($errors->has('message'))
                            <strong class="form__helper">
                                {{ $errors->first('message') }}
                            </strong>
                            @endif
                        </div>
                        <div class="form__group">
                            <button class="btn btn--nue btn--primary" type="submit">Submit</button>
                        </div>

                    </form>
                </div>
            </div>
            @include('form.partials._steps')
        </div>
    </div>
</div>
@endsection
