<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TableCategory extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    protected $table = 'table_categories';
}
