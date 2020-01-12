<?php

namespace App\Http\Controllers\Form;

use App\Multistep\Steps;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SendControllerStep2 extends Controller
{
    /**
     * [index description]
     * @param  Steps  $steps [description]
     * @return [type]        [description]
     */
    public function index(Steps $steps)
    {
        $step = $steps->step('contact.send', 2);

        if ($step->notCompleted(1)) {
            return redirect()->route('contact.send.1.index');
        }

        return view('form.2', compact('step'));
    }

    /**
     * [store description]
     * @param  Steps   $steps   [description]
     * @param  Request $request [description]
     * @return [type]           [description]
     */
    public function store(Steps $steps, Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'phone' => 'required'
        ]);

        $steps
            ->step('contact.send', 2)
            ->store($request->only('email', 'phone'))
            ->complete();

        return redirect()->route('contact.send.3.index');
    }
}
