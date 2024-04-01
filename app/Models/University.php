<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class University extends Model
{
    use HasFactory;

    protected $table = 'universities';

    protected $fillable = ['name'];

    public function pokazateli()
    {
        return $this->belongsToMany(Indicator::class,'indicator_universities');
    }
    public function program_universities()
    {
        return $this->belongsToMany(Program::class,'program_university');
    }
}
