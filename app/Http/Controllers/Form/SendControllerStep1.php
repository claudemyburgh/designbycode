<?php

namespace App\Http\Controllers\Form;


use App\Multistep\Steps;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SendControllerStep1 extends Controller
{

    /**
     * [index description]
     * @param  Steps  $steps [description]
     * @return [type]        [description]
     */
    public function index(Steps $steps)
    {
        $step = $steps->step('contact.send', 1);

        return view('form.1', compact('step'));
    }

    /**
     * [store description]
     * @param  Steps   $steps   [description]
     * @param  Request $request [description]
     * @return [type]           [description]
     */
    public function store(Steps $steps, Request $request)
    {
        // $request->session()->forget(['multistep', 'client']);
        // return redirect()->back();

        $request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
        ]);

        $request->session()->put('client', ['first_name' => $request->first_name]);

        $steps
            ->step('contact.send', 1)
            ->store($request->only('first_name', 'last_name'))
            ->complete();

        return redirect()->route('contact.send.2.index');
    }
}
