<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'description',
        'user_id',
        'budget',
        'mileage',
        'location',
        'timeframe',
        // VEHICLE INFO
        'vehicle_overview',
        'vehicle_type',
        'vehicle_make',
        'vehicle_model',
        'vehicle_year',
        'vehicle_title_type',
        // FEATURES
        'features',
        //IMAGES
        'image_url',
        // PAYMENT OPTIONS
        'payment_type',
        'seller_preference',
        'loan_payment_method',
        'dealer_door_price',
        'other_notes',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
   /* protected $hidden = [
        'id',
    ];*/
}
