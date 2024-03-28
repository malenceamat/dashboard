<?php

namespace App\Http\Controllers;

use App\Models\Indicator;
use App\Models\Program;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\In;

class IndicatorController extends Controller
{
    public function index()
    {
        $data = Indicator::get();
        return view('admin.indicator.indicator_create',compact('data'));
    }
    public function create(Request $req)
    {
        Indicator::create($req->all());
        return back();
    }
    public function delete($id)
    {
        Indicator::find($id)->delete();
        return back();
    }
    public function edit_show(Request $req, $id)
    {

        $programs = Program::get();
        $indicator = Indicator::find($id);
        dd($indicator);
        return view('admin.indicator.indicator_edit',compact('indicator','programs'));
    }
    public function update(Request $req)
    {
        Indicator::find($req->id)->update($req->all());
        return back();
    }
}
