<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Program extends Model
{
    use HasFactory;

    protected $table = 'programs';

    protected $fillable = ['name','fact','plan','percent','result','id_university','date'];


    public function indicators()
    {
        return $this->belongsToMany(Indicator::class,'indicator_program');
    }
    public function universities_program()
    {
        return $this->belongsToMany(University::class,'program_university');
    }
}
