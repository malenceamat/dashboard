<?php

namespace App\Http\Controllers;

use App\Models\Indicator;
use App\Models\IndicatorUniversities;
use App\Models\IndicatorProgram;
use App\Models\Program;
use App\Models\University;
use Illuminate\Http\Request;

class UniversityController extends Controller
{
    public function index()
    {
        $university = University::get();
        return view('admin.universities.universities_create', compact('university'));
    }

    public function create(Request $req)
    {
        University::create($req->all());
        return back();
    }

    public function delete($id)
    {
        $program_ids = Program::where('id_university', $id)->get('id');
        foreach ($program_ids as $program_id) {
            IndicatorProgram::where('program_id', $program_id->id)->delete();
        }
        IndicatorUniversities::where('university_id', $id)->delete();
        Program::where('id_university', $id)->delete();
        University::where('id', $id)->delete();

        return back();
    }

    public function update_show($id)
    {
        $indicators = Indicator::orderBy('created_at')->get();
        $data = University::with('pokazateli')->find($id);

        return view('admin.universities.universities_edit', compact('data', 'indicators'));
    }

    public function update(Request $req)
    {
        University::find($req->id)->update($req->all());
        University::find($req->id)->pokazateli()->sync($req->indicators);
        return redirect(route('universities.index'));
    }
}