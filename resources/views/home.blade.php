<x-main-layout>
    <x-pattern.grid @class(['h-[500px] mask-image-b'])>
        <svg id="dbc-svg-93b61f87-8fa5-448c-bf96-91e672247426" class="dbc-svg" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
                <pattern id="dbc-pattern-93b61f87-8fa5-448c-bf96-91e672247426" patternUnits="userSpaceOnUse" width="50" height="50" y="-42" x="-2" patternTransform="rotate(0) skewX(0) scale(1)">
                    <rect transform="skewX(28)" x="-22" y="-1" rx="10" width="50" height="50" stroke-width="1.5" stroke="currentColor" fill="none"/>
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dbc-pattern-93b61f87-8fa5-448c-bf96-91e672247426)"/>
        </svg>
{{--        {!! $pattern->snippet !!}--}}
    </x-pattern.grid>
    <x-hero/>

    <div class="w-full card bg-primary-50 border-y border-primary-500 dark:bg-gray-900 my-12 py-24 relative isolate overflow-x-clip">
        <div class="wrapper grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <h2 class="heading-1 mb-6 card">
                    Author of several <span class="grad">Javascript</span> and <span class="grad">PHP</span> open source packages.
                </h2>
                <a class="cta"
                   href="{{ route("home") }}">View
                    all packages</a>
            </div>
            <div class="grid card sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-6">
{{--                @foreach($packages as $package)--}}
{{--                    <x-package-card :$package class="dark:border-primary-500"/>--}}
{{--                @endforeach--}}
            </div>
        </div>
    </div>


</x-main-layout>
