<?php

namespace App\Http\Controllers\Form;

use App\Multistep\Steps;
use App\Events\FormSubmited;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SendControllerStep4 extends Controller
{
    /**
     * [index description]
     * @param  Steps  $steps [description]
     * @return [type]        [description]
     */
    public function index(Steps $steps)
    {
        $step = $steps->step('contact.send', 4);

        if ($step->notCompleted(1, 2, 3)) {
            return redirect()->route('contact.send.3.index');
        }

        return view('form.4', compact('step'));
    }

    /**
     * [store description]
     * @param  Steps   $steps   [description]
     * @param  Request $request [description]
     * @return [type]           [description]
     */
    public function store(Request $request, Steps $steps)
    {
        $request->validate([
            'subject' => 'required|max:100',
            'message' => 'required'
        ]);

        $steps
            ->step('contact.send', 4)
            ->store($request->only('subject', 'message'))
            ->complete();

        event(new FormSubmited($steps->data()));

        return redirect()->route('contact.send.thanks')->withSuccess('Thank you for contacting us. We will get back to you as soon as posible');
    }
}
