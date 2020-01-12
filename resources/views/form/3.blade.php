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
                <form method="post" action="{{ route('contact.send.3.store') }}" novalidate>
                   @csrf
                   <div class="panel__body">
                    <p class="lead">
                        Hi, {{ $client['first_name'] ??  '' }}
                    </p>
                    <p>
                        Only fill in the following detail if exist.
                    </p>
                    <div class="form__group {{ $errors->has('company_name') ? ' has__danger' : '' }}">
                        <label for="company_name" class="form__label font--bold" >Your Company Name:</label>
                        <input type="text" placeholder="DesignByCode" name="company_name" id="company_name" class="form__item contact-form__item" autofocus autocomplete="company_name" value="{{ old('company_name') ?: $step->company_name  }}">
                        @if ($errors->has('company_name'))
                            <strong class="form__helper">
                                {{ $errors->first('company_name') }}
                            </strong>
                        @endif
                    </div>
                    <div class="form__group {{ $errors->has('website') ? ' has__danger' : '' }}">
                        <label for="website" class="form__label font--bold" >Your Website:</label>
                        <input type="url" placeholder="https://designbycode.co.za" autocomplete="website" name="website" id="website" class="form__item contact-form__item" autocomplete="website" value="{{ old('website') ?: $step->website  }}">
                        @if ($errors->has('website'))
                            <strong class="form__helper">
                                {{ $errors->first('website') }}
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
