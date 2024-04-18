<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class IndicatorProgram extends Model
{
    use HasFactory;

//    public function indicators_array($indicator)
//    {
//        $universities_data = University::get();
//        $data_indicators = [];
//
//        foreach ($universities_data as $university_data) {
//            $university_id = $university_data->id;
//
//            $programs = $this->where('indicator_id', $indicator)
//                ->join('programs', 'program_id', '=', 'id')
//                ->where('programs.id_university', '=', $university_id)
//                ->orderBy('date')->first();
//
//
//            $data_indicator = array(
//                'name' => $university_data->name,
////                'description' => $programs->name,
////                'fact' => $programs->fact,
////                'plan' => $programs->plan,
////                'percent' => $programs->percent
//            );
//            $data_indicators[$university_id] = array_merge($data_indicator);
//        }
//        return $data_indicators;
//    }

    protected $table = 'indicator_program';

    protected $fillable = ['indicator_id','program_id'];
}
