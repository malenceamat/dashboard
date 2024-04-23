<?php

namespace App\Http\Controllers;

use App\Http\Requests\DateRequest;
use App\Models\Indicator;
use App\Models\indicator_universities;
use App\Models\IndicatorProgram;
use App\Models\Program;
use App\Models\University;
use Illuminate\Http\Request;


class ProgramController extends Controller
{
    public function index($id)
    {
        $data = Indicator::with('universityes')->find($id);
        $universities = University::get();
        return view('admin.program.program_create', compact('data', 'universities'));
    }

    public function create(Request $req)
    {
        $req_data = $req->all();
        $req_data['percent'] = round(($req->fact * 100) / $req->plan, 1);
        $req_data['date'] = date('Y-m-d', strtotime($req->date));

        $id = Program::create($req_data);
        indicator_universities::create([
            'indicator_id' => $req->indicators_id,
            'university_id' => $req->id_university
        ]);
        IndicatorProgram::insert([
            'indicator_id' => $req->indicators_id,
            'program_id' => $id->id,
        ]);

        return redirect('/admin/indicator_edit_show/' . $req->indicators_id);
    }

    public function show(Request $req, $id)
    {
        $dates = IndicatorProgram::where('indicator_id', $req->id_indicator)
            ->join('programs', 'program_id', '=', 'id')
            ->where('programs.id_university', '=', $req->university_id)
            ->orderBy('date', 'desc')->get();
        $data = $req->all();


        $programs = Program::with('universities_program')->find($id);


        return view('admin.program.program_update', compact('programs', 'dates', 'data'));
    }

    public function update(Request $req)
    {
        $programs_ids = IndicatorProgram::where('indicator_id', $req->indicator_id)->get('program_id');
        foreach ($programs_ids as $program_id) {
            $program = Program::where('id', $program_id->program_id)
                ->where('id_university', '=', $req->university_id);

            $program->update([
                'plan' => $req->plan,
                'name' => $req->name,
            ]);
            $program->update(['percent' => round(($program->value('fact') * 100) / $req->plan, 1)]);

        }

        return redirect('/admin/indicator_edit_show/' . $req->indicator_id);
    }

    public function delete(Request $req)
    {

        $programs_ids = IndicatorProgram::where('indicator_id', $req->id_indicator)
            ->join('programs', 'program_id', '=', 'id')
            ->where('programs.id_university', '=', $req->university_id)->get('id');
        foreach ($programs_ids as $program_id) {
            Program::where('id', $program_id->id)->delete();
            IndicatorProgram::where('program_id', $program_id->id)->delete();
        }
        indicator_universities::where('indicator_id', $req->id_indicator)->where('university_id', $req->university_id)->delete();

        return back();
    }

    public function date_create(DateRequest $req)
    {
        $programs_ids = IndicatorProgram::where('indicator_id', $req->indicator_id)
            ->join('programs', 'program_id', '=', 'id')
            ->where('programs.id_university', '=', $req->university_id)->get('date');

        if ($programs_ids->where('date', date('Y-m-d', strtotime($req->date)))->all()) {
            return back()->withErrors(['unique' => 'Дата уже используется']);
        } else {
            $id = Program::create([
                'date' => date('Y-m-d', strtotime($req->date)),
                'name' => $req->name,
                'plan' => $req->plan,
                'id_university' => $req->university_id,
            ]);

            IndicatorProgram::insert([
                'indicator_id' => $req->indicator_id,
                'program_id' => $id->id,
            ]);
            return back();
        }
    }

    public function program_delete(Request $req)
    {
        Program::where('id', $req->program_id)->delete();
        IndicatorProgram::where('program_id', $req->program_id)->delete();
        return back();
    }
}
