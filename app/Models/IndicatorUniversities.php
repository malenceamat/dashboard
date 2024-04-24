<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class IndicatorUniversities extends Model
{
    use HasFactory;

    protected $table = 'indicator_universities';

    protected $fillable = ['indicator_id','university_id'];
}