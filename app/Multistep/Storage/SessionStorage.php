<?php

namespace App\Multistep\Storage;

use Illuminate\Http\Request;
use App\Multistep\Storage\Contacts\StepStorage;



class SessionStorage implements StepStorage
{
    /**
     * [$request description]
     * @var [type]
     */
    protected $request;

    /**
     * [__construct description]
     * @param Request $request [description]
     */
    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    /**
     * [put description]
     * @param  [type] $key   [description]
     * @param  [type] $value [description]
     * @return [type]        [description]
     */
    public function put($key, $value)
    {
        return $this->request->session()->put($key, $value);
    }

    /**
     * [get description]
     * @param  [type] $key [description]
     * @return [type]      [description]
     */
    public function get($key)
    {
        return $this->request->session()->get($key);
    }

    /**
     * [forget description]
     * @param  [type] $key [description]
     * @return [type]      [description]
     */
    public function forget($key)
    {
        return $this->request->session()->forget($key);
    }


}
