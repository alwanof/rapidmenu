<?php

namespace App;

use App\Traits\Multitenantable;
use Illuminate\Database\Eloquent\Model;

class Driver extends Model
{
    use Multitenantable;

    public function orders()
    {
        return $this->hasMany(Order::class);
    }
}
