<?php

namespace App;

use App\Traits\Multitenantable;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    use Multitenantable;
    protected $appends = ['gallery'];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function getGalleryAttribute()
    {
        return [
            $this->image1,
            $this->image2,
            $this->image3,
            $this->image4,
        ];
    }
}
