
<section class="hero">

    <div class="wrapper">
        <div class="row">
            <div class="md-col-6 skew">
                <img src="{{ asset('img/hero/herotext.svg') }}" alt="{{ config('app.name') }}" class="responsive__image hero__text ">
            </div>
            <div class="md-col-6">
                @include('partials.svg._code-review')
            </div>
        </div>
    </div>
</section>
<div class="deviders">
    <img src="{{ asset('img/deviders/hero.svg') }}" alt="DesignByCode Devider image" class="deviders__hero">
</div>

