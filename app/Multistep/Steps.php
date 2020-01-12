<?php

namespace App\Multistep;

use Illuminate\Http\Request;
use App\Multistep\Storage\Contacts\StepStorage;


class Steps
{

    protected $name;

    protected $step;

    protected $storage;

    /**
     * [__construct description]
     * @param Request $request [description]
     */
    public function __construct(StepStorage $storage)
    {
        $this->storage = $storage;
    }

    /**
     * [step description]
     * @param  [type] $name [description]
     * @param  [type] $step [description]
     * @return [type]       [description]
     */
    public function step ($name, $step)
    {
        $this->name = $name;
        $this->step = $step;

        return $this;
    }

    /**
     * [key description]
     * @return [type] [description]
     */
    protected function key()
    {
        return "multistep.{$this->name}";
    }

    /**
     * [store description]
     * @param  [type] $data [description]
     * @return [type]       [description]
     */
    public function store ($data)
    {
        $this->storage->put($this->key() . ".{$this->step}.data", $data);

        return $this;
    }

    /**
     * [complete description]
     * @return [type] [description]
     */
    public function complete ()
    {
        $this->storage->put($this->key() . ".{$this->step}.complete", true);

        return $this;
    }

    /**
     * [data description]
     * @return [type] [description]
     */
    public function data()
    {
        $data = collect($this->storage->get($this->key()))
            ->pluck('data')
            ->collapse()
            ->toArray();

        return $data;
    }


    /**
     * Clear all session data
     * @return [type] [description]
     */
    public function clearAll()
    {
        $this->storage->forget($this->key());

        return $this;
    }

    /**
     * [__get description]
     * @param  [type] $property [description]
     * @return [type]           [description]
     */
    public function __get($property)
    {
        return $this->storage->get($this->key() . ".{$this->step}.data.{$property}");
    }

    /**
     * [notCompleted description]
     * @param  [type] $steps [description]
     * @return [type]        [description]
     */
    public function notCompleted(...$steps)
    {
        foreach ($steps as $step) {
            if(!$this->storage->get($this->key() . ".{$step}.complete")) {
                return true;
            }
        }
        return false;
    }

}
