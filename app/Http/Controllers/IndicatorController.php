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
    public function edit_show($id)
    {
        $indicator = Indicator::with('programs')->find($id);
        return view('admin.indicator.indicator_edit',compact('indicator'));
    }
    public function update(Request $req)
    {
        Indicator::find($req->id)->update($req->all());
        return back();
    }
}
