<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Indicator extends Model
{
    use HasFactory;

    protected $table = 'indicators';

    protected $fillable = ['name', 'description', 'plan', 'fact', 'percent', 'planned'];

    public function programs()
    {
        return $this->belongsToMany(Program::class,'indicator_program');
    }
    public function universityes()
    {
        return $this->belongsToMany(University::class,'indicator_universities');
    }
}
