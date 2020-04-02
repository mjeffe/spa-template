<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Demo extends Model {
    protected $table = 'demo';
    
    // read-only table, so fillable is empty
    protected $fillable = [];

    // do not expect timestamps on the table
    // used by model factories when seeding
    public $timestamps = false;

}
