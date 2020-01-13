{{-- <div class="deviders shift--down">
    <img src="{{ asset('img/deviders/hero.svg') }}" alt="DesignByCode Devider image" class="deviders__hero">
</div>
 --}}

<footer class="footer section-margin--md-top">
    <div class="deviders__footer">
        <img src="{{ asset('img/deviders/footer.svg') }}" alt="DesignByCode Devider image" class="footer__devider">
    </div>
    <div class="wrapper">
        <div class="row">
            <div class="md-col-9">
                <h3>Website Links</h3>
                <a href="{{ route('welcome') }}">
                    <img class="footer__logo" src="{{ asset('img/logos/logo.svg') }}" alt="" class="responsive__imag">
                </a>

                <div class="links__inline">
                    <a href="{{ route('welcome') }}"
                        class="links__inline__item  {{ Set::isActive('/', 'links__inline__item--active') }}">{{__('HOME')}}</a>
                    &bull; &nbsp;


                    <a href="{{ route('services') }}"
                        class="links__inline__item  {{ Set::isActive('services', 'links__inline__item--active') }}">{{
                        __('SERVICES') }}</a> &bull; &nbsp;

                    <a href="{{ route('contact.send.1.index') }}"
                        class="links__inline__item  {{ Set::isActive('contact/*', 'links__inline__item--active') }}">{{
                        __('CONTACT US') }}</a>
                </div>
            </div>
            <div class="md-col-3">
                <h3>About the company</h3>
                <p>Follow DesignByCode on the following social networks to keep up to date with our doings.</p>
                <div class="btn__group">
                    <a target="_blank" href="https://www.facebook.com/DesignBycodeTeam" class="btn btn--nue-dark"><i class="lunacon lunacon-facebook"></i></a>
                    {{-- <a target="_blank" href="#" class="btn btn--nue-dark"><i class="lunacon lunacon-youtube"></i></a> --}}
                    <a target="_blank" href="https://github.com/DesignByCode" class="btn btn--nue-dark"><i class="lunacon lunacon-github"></i></a>
                </div>
            </div>
        </div>
    </div>
</footer>
