<?php

namespace App\Multistep\Controllers;

use Illuminate\Http\Request;


class MultiStepRedirectController
{

    public function __invoke(Request $request)
    {
        return redirect($request->getUri() . '/1');
    }

}
