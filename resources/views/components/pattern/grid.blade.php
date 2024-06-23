<div aria-hidden="true" {{ $attributes->merge(['class' => 'w-full fixed top-0 inset-x-0 mask-image-b mask-image-end-80' ]) }}>
    <div class="w-1/2 h-1/4 bg-gradient-to-b from-primary-500 to-primary-500/40 rounded-b-full mx-auto blur-3xl">
        <div class="w-1/4 h-[70px] mix-blend-color-dodge bg-primary-800 "></div>
        <div class="w-1/2 h-[70px] mix-blend-color-dodge bg-secondary-500/70 ml-auto"></div>
    </div>
    <div id="main-banner" class="absolute inset-0 w-full h-full opacity-50 text-primary-500/70">
        {{ $slot }}
    </div>
</div>
