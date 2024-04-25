<?php

namespace App\Http\Controllers;

use App\Models\Indicator;
use App\Models\IndicatorProgram;
use App\Models\University;


class UserController extends Controller
{
    public function index()
    {
        $universities = University::get();
        $indicators = Indicator::orderBy('priority')->get();

        $data = [];
        foreach ($indicators as $indicator) {
            $totals = [];
            foreach ($universities as $university) {
                $program = IndicatorProgram::where('indicator_id', $indicator->id)
                    ->join('programs', 'program_id', '=', 'id')
                    ->where('programs.id_university', '=', $university->id)
                    ->orderBy('date', 'desc')->first();

                $university_total = [
                    'fact' => $program->fact ?? 0,
                    'plan' => $program->plan ?? 0,
                    'percent' => $program->percent ?? 0,
                ];
                $totals [$university->id] = array_merge($university_total);
            }
            $collection = collect($totals);
            $total = [
                'id' => $indicator->id,
                'name' => $indicator->name,
                'description' => $indicator->description,
                'fact' => $collection->sum('fact'),
                'plan' => $collection->sum('plan'),
                'percent' => round($collection->avg('percent'), 2),
            ];
            $data [$indicator->id] = array_merge($total);
        }

        return view('users.general', ['universities' => $universities, 'indicators' => $data]);
    }
}
