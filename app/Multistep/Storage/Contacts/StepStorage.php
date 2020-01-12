<?php

namespace App\Multistep\Storage\Contacts;

interface StepStorage
{
    /**
     * [put description]
     * @param  [type] $key   [description]
     * @param  [type] $value [description]
     * @return [type]        [description]
     */
    public function put($key, $value);

    /**
     * [get description]
     * @param  [type] $key [description]
     * @return [type]      [description]
     */
    public function get($key);

    /**
     * [forget description]
     * @param  [type] $key [description]
     * @return [type]      [description]
     */
    public function forget($key);

}
