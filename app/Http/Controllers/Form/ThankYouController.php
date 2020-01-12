<?php

namespace App\Http\Controllers\Form;

use App\Multistep\Steps;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ThankYouController extends Controller
{


    public function index(Steps $steps)
    {
        $step = $steps->step('contact.send', 4);

        if($step->notCompleted(1,2,3))
        {
            return redirect()->route('contact.send.1.index');
        }

        $steps->clearAll();

        $client = request()->session()->get('client');

        return view('form.thanks', compact('client'));
    }


}
