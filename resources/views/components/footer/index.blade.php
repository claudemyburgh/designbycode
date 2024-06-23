@php use Carbon\Carbon; @endphp

<div class="wrapper py-12 text-gray-900 dark:text-gray-200 lg:flex justify-between">
    <p>
        &copy;{{ Carbon::now()->year }} {{ __('DesignByCode, Inc. All rights reserved.') }}
    </p>
    <p>
        Design <abbr class="no-underline" title="and">&amp;</abbr> Developed by <a class="hover:text-primary-500 underline decoration-gray-300/10 hover-underline decoration-1" href="https://designbycode.co.za">DesignByCode</a>
    </p>
</div>
