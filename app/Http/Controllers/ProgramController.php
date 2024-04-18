<?php

namespace App\Http\Controllers;

use App\Models\Indicator;
use App\Models\Program;
use App\Models\University;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Date;

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
        $req_data = $req->all();
        $req_data['percent'] = round(($req->fact * 100) / $req->plan, 1);
        $req_data['date'] = date('Y-m-d',strtotime($req->date));

        $data = Program::create($req_data);
        $data->indicators()->sync($req->indicators_id);
        $data->universities_program()->sync($req->id_university);

        return redirect('/admin/indicator_edit_show/' . $req->indicators_id);
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
        $percent = round(($req->fact * 100) / $req->plan, 1);
        Program::find($req->id)->update(array_merge($req->all(),['percent' => $percent]));
        Program::find($req->id)->universities_program()->sync($req->id_university);
        return redirect('/admin/indicator_edit_show/' . $req->indicators_id );
    }
    public function delete($id)
    {
        Program::find($id)->universities_program()->detach();
        Program::find($id)->indicators()->detach();
        Program::find($id)->delete();
        return back();
    }
}
