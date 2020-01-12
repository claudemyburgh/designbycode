@extends('layouts.app')

@section('title', 'Contact Us')

@section('content')
<div class="wrapper section">
    <div class="row">
        <div class="md-col-6 md-offset-3">
            @include('partials._contact-details')
            @if(session('success'))
                <div class="notify notify--success text--success">
                    {{ session('success') }}
                </div>
            @endif

            <div class="panel nue comin">
                <div class="panel__header"><h1 class="heading__devider">Thank You</h1></div>
                <div class="panel__body  text-align-center">
                    <p class="lead">
                        Hi, {{ $client['first_name'] }}
                    </p>
                    <p>
                        If you dont mind will you please follow us on facebook.
                    </p>
                    <div class="form__group">
                        <a href="https://www.facebook.com/DesignBycodeTeam/" target="_blank" class="btn btn--nue"> <i class="lunacon lunacon-facebook"></i> Follow Us </a>
                    </div>
                </div>
             </div>
         </div>
     </div>
 </div>
</div>
@endsection
