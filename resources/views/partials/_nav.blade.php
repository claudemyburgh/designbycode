<nav class="nav nav--fixed headroom">
    <div class="nav__wrapper">
        <div class="nav__brand"><a href="{{ url('/') }}">
            @include('partials._logo')
        </a></div>
        <div class="nav__navicon"></div>
        <div class="nav__links__wrapper nav__links--right">
            <ul class="nav__links">
                <li class="nav__links__item {{ set_active('/') }}"><a href="{{ url('/') }}">Home</a></li>
                <li class="nav__links__item {{ set_active('services') }}"><a href="{{ route('services') }}">Serivices</a></li>
                <li class="nav__links__item {{ set_active('contact*') }}"><a href="{{ route('contact.send.1.index') }}">Contact Us</a></li>
{{--                 @guest
                    <li class="nav__links__item {{ set_active('login') }}"><a href="{{ route('login') }}">Login</a></li>
                    <li class="nav__links__item {{ set_active('register') }}"><a href="{{ route('register') }}">Register</a></li>

                @else
                    <li class="nav__links__item nav__links__item--dropdown">
                        <a href="#">{{ Auth::user()->name }}</a>
                        <ul class="nav__links">
                            <li class="nav__links__item"><a href="#" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">{{ __('Logout') }}</a></li>
                        </ul>
                        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                            @csrf
                        </form>
                    </li>

                @endguest --}}
            </ul>
        </div>
    </div>
</nav>
