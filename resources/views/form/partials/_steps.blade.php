{{-- <h2 class="heading__devider text-align-center">Steps</h2> --}}
<div class="contact-form__steps">
    <ul>
        @for ($i = 1; $i <= 4; $i++)
            <li class="{{ set_active('contact/send/' . $i, 'contact-form__steps--active') }}"> {{ $i }} </li>
        @endfor
    </ul>
</div>
