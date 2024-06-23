<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="w-full scroll-smooth">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=gochi-hand:400|jetbrains-mono:200,400,700" rel="stylesheet" />

    <!-- Scripts -->
    @vite(['resources/css/app.css', 'resources/ts/app.ts'])

    <!-- Styles -->
    @livewireStyles
</head>
<body class="font-mono text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-950 antialiased overflow-x-clip min-h-screen">
<x-banner />

<a class="bg-gray-200 text-gray-900 dark:text-gray-100 dark:bg-gray-950 border border-primary-500  focus:px-5 rounded-lg shadow-2xl text-sm font-semibold focus:outline-2 focus:outline-primary-500 focus:py-3 focus:fixed focus:z-[1000]
top-5 left-5 not-sr-only:block sr-only focus:not-sr-only"
   href="#main-content">
    {{ __('Skip to main') }}
</a>
    <x-navigation/>
    <!-- Page Content -->
    <main id="main-content">
        {{ $slot }}
    </main>

    <x-part.scroll-to-top/>
    <x-footer/>
@stack('modals')

@livewireScripts
</body>
</html>
