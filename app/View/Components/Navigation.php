<?php

namespace App\View\Components;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class Navigation extends Component
{
    /**
     * Create a new component instance.
     */
    public function __construct()
    {
        //
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        $links = collect([
            (object) [
                'name' => 'Home',
                'route' => 'home',
                'active' => '/',
                'children' => null,
            ],
        ]);

        return view('components.navigation.index', [
            'links' => $links,
        ]);
    }
}
