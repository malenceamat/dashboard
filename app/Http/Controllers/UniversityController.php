<?php

namespace App\Http\Controllers;

use App\Models\Indicator;
use App\Models\University;
use Illuminate\Http\Request;

class UniversityController extends Controller
{
    public function index()
    {
        $university = University::get();
        return view('admin.universities.universities_create',compact('university'));
    }
    public function create(Request $req)
    {
        University::create($req->all());
        return back();
    }
    public function delete($id)
    {
        University::find($id)->pokazateli()->detach();
        University::find($id)->delete();
        return back();
    }
    public function update_show($id)
    {
        $indicators = Indicator::orderBy('created_at')->get();
        $data = University::with('pokazateli')->find($id);

        return view('admin.universities.universities_edit',compact('data','indicators'));
    }
    public function update(Request $req)
    {
        University::find($req->id)->update($req->all());
        University::find($req->id)->pokazateli()->sync($req->indicators);
        return redirect('/universities');
    }
}