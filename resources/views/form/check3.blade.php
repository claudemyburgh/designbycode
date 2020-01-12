@extends('layouts.app')

@section('title', 'Contact Us')

@section('content')
<div class="wrapper section">
    <div class="row">
        <div class="md-col-6 md-offset-3">
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
                     <div class="form__group {{ $errors->has('services') ? ' has__danger' : '' }}">
                        <div class="row">
                            <div class="md-col-6 lg-col-3">
                                <label>
                                    <input type="checkbox" name="website">
                                    <div class="block {{ $errors->has('website') ? ' has__danger' : '' }}"> Website </div>
                                </label>
                            </div>
                            <div class="md-col-6 lg-col-3">
                                <label>
                                    <input type="checkbox" name="logo">
                                    <div class="block"> Logo </div>
                                </label>
                            </div>
                            <div class="md-col-6 lg-col-3">
                                <label>
                                    <input type="checkbox" name="hosting">
                                    <div class="block"> Hosting </div>
                                </label>
                            </div>
                            <div class="md-col-6 lg-col-3">
                                <label>
                                    <input type="checkbox" name="other">
                                    <div class="block"> Other </div>
                                </label>
                            </div>
                        </div>
                         @if ($errors->has('website'))
                             <strong class="form__helper has__danger">
                                 {{ $errors->first('website') }}
                             </strong>
                         @endif
                     </div>
                     <div class="form__group">
                         <button class="btn btn--nue btn--primary" type="submit">Send</button>
                     </div>
                 </form>
             </div>
         </div>
         @include('form.partials._steps')
     </div>
 </div>
</div>
@endsection
