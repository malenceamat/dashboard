<?php

namespace App\Http\Controllers;

use App\Models\Indicator;
use App\Models\Program;
use App\Models\University;
use Illuminate\Http\Request;

class ProgramController extends Controller
{
    public function index($id)
    {
        $data = Indicator::with('universityes')->find($id);
        $indicators = University::with('pokazateli')->find($id);
        return view('admin.program.program_create',compact('data','indicators'));
    }
    public function create(Request $req)
    {
        $fact = $req->fact;
        $plan = $req->plan;
        $percent = round(($fact * 100) / $plan, 1);
        $data = Program::create(array_merge($req->all(), ['percent' => $percent]));
        $data->indicators()->sync($req->indicators_id);
        $data->universities_program()->sync($req->id_university);

        return redirect('indicator_edit_show/' . $req->indicators_id);
    }
    public function show(Request $req,$id)
    {
        $id_indicator = $req->id_indicator;
        $data = Indicator::with('universityes')->find($id_indicator);
        $programs = Program::with('universities_program')->find($id);
        return view('admin.program.program_update',compact('programs','data'));
    }
    public function update(Request $req)
    {
        $fact = $req->fact;
        $plan = $req->plan;
        $percent = round(($fact * 100) / $plan, 1);
        Program::find($req->id)->update(array_merge($req->all(),['percent' => $percent]));
        Program::find($req->id)->universities_program()->sync($req->id_university);
        return redirect('indicator_edit_show/' . $req->indicators_id );
    }
    public function delete($id)
    {
        Program::find($id)->universities_program()->detach();
        Program::find($id)->indicators()->detach();
        Program::find($id)->delete();
        return back();
    }
}
