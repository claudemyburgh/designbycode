<?php

namespace App\Multistep\Routing;

use Illuminate\Support\Facades\Route;
use App\Multistep\Controllers\MultiStepRedirectController;

class PendingMultiStepRegistration
{

    protected $uri;

    protected $controller;

    protected $steps;

    protected $name;

    /**
     * [__construct description]
     * @param [type] $uri        [description]
     * @param [type] $controller [description]
     */
    public function __construct($uri, $controller)
    {
        $this->uri = $uri;
        $this->controller = $controller;
    }

    /**
     * [steps description]
     * @param  [type] $steps [description]
     * @return [type]        [description]
     */
    public function steps($steps)
    {
        $this->steps = $steps;

        return $this;
    }

    /**
     * [name description]
     * @param  [type] $name [description]
     * @return [type]       [description]
     */
    public function name($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * [__destruct description]
     */
    public function __destruct()
    {

        Route::get($this->uri, '\\' . MultiStepRedirectController::class);

        collect()->times($this->steps, function ($step) {
            Route::group([
                'prefix' => $this->uri
            ], function () use ($step) {
                Route::resource($step, "{$this->controller}Step{$step}")
                ->only('index', 'store')
                ->names([
                    'index' => "{$this->name}.{$step}.index",
                    'store' => "{$this->name}.{$step}.store"
                ]);
            });
        });
    }

}
