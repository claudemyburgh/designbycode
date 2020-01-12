<?php

namespace App\Http\Controllers\Form;

use App\Multistep\Steps;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SendControllerStep3 extends Controller
{
    /**
     * [index description]
     * @param  Steps  $steps [description]
     * @return [type]        [description]
     */
    public function index(Steps $steps)
    {
        $step = $steps->step('contact.send', 3);

        if ($step->notCompleted(1, 2)) {
            return redirect()->route('contact.send.2.index');
        }

        $client = request()->session()->get('client');

        return view('form.3', compact(['step', 'client']));
    }

    /**
     * [store description]
     * @param  Steps   $steps   [description]
     * @param  Request $request [description]
     * @return [type]           [description]
     */
    public function store( Request $request, Steps $steps)
    {
        $request->validate([
            'website' => 'nullable|url',
            'company_name' => 'nullable|string'
        ]);

        $steps
            ->step('contact.send', 3)
            ->store($request->only('website', 'company_name'))
            ->complete();



        return redirect()->route('contact.send.4.index');
    }
}
