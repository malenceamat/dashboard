<?php

namespace App\Http\Controllers;

use App\Models\Indicator;
use App\Models\indicator_universities;
use App\Models\IndicatorProgram;
use App\Models\Program;
use App\Models\TableCategory;
use App\Models\University;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Validation\Rules\In;

class IndicatorController extends Controller
{
    public function index()
    {
        $data = Indicator::with('tables')->get();
        return view('admin.indicator.indicator_create', compact('data'));
    }

    public function create(Request $req)
    {
        Indicator::create($req->all());

        return back();
    }

    public function delete(Request $req)
    {
        $ids = IndicatorProgram::where('indicator_id', $req->indicator_id)->get('program_id');
        foreach ($ids as $id) {
            Program::where('id', $id->program_id)->delete();
        }
        indicator_universities::where('indicator_id', $req->indicator_id)->delete();
        IndicatorProgram::where('indicator_id', $req->indicator_id)->delete();
        Indicator::where('id', $req->indicator_id)->delete();

        return back();
    }

    public function edit_show($id)
    {
        $indicator = Indicator::with(['programs', 'universityes'])->find($id);
        $universities = $indicator->universityes;
        $data = [];
        foreach ($universities as $university) {
            $programs = $indicator->programs->where('id_university', $university->id)->sortBy('date')->last();
            $program = [
                'id' => $id ?? 0,
                'indicator_id' => $programs->id ?? 0,
                'university_name' => $university->name,
                'university_id' => $university->id,
                'description' => $programs->name ?? 0,
                'fact' => $programs->fact ?? 0,
                'plan' => $programs->plan ?? 0,
                'percent' => $programs->percent ?? 0,
                'date' => date('d.m.Y', strtotime($programs->date ?? 0)),
            ];
            $data [$university->id] = array_merge($program);
        }
        $collection = collect($data);
        $totals = [
            'total_plan' => $collection->sum('plan'),
            'total_fact' => $collection->sum('fact'),
            'total_percent' => round($collection->avg('percent'), 2),
        ];

        return view('admin.indicator.indicator_edit', compact('indicator', 'data', 'totals'));
    }

    public function update(Request $req)
    {
        Indicator::find($req->id)->update($req->all());
        Indicator::find($req->id)->tables()->sync($req->tables);
        return back();
    }
}