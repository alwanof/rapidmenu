<?php

namespace App;

use App\Traits\Multitenantable;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use Multitenantable;
    // cd /home/whatsappneed.com/public_html
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
