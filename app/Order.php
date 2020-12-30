<?php

namespace App;

use App\Traits\Multitenantable;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use Multitenantable;
    // ssh root@142.93.174.231
    //#!S_~2-0-2-1/A*M*T%o%t%i%l+!
    //murad_alwan
    //F3MuRaD*-%%^A*M
    // cd /home/marasiel.com/public_html
    //rm -rf storage

    public function driver()
    {
        return $this->belongsTo(Driver::class);
    }

    public function rest()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function actor()
    {
        return $this->belongsTo(User::class, 'parent');
    }
}
