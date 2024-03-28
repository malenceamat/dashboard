<?php

namespace App\Http\Controllers;

use App\Models\Indicator;
use App\Models\Program;
use Illuminate\Http\Request;

class ProgramController extends Controller
{
    public function index($id)
    {
        $data = Indicator::find($id);
        return view('admin.program.program_create',compact('data'));
    }
    public function create(Request $req)
    {
        Program::create($req->all())->indicators()->sync($req->indicators_id);
        return redirect('indicator_edit_show/' . $req->indicators_id );
    }
    public function show(Request $req,$id)
    {
        $data = Indicator::find($id);
        $program = Program::find($req->id);
        return view('admin.program.program_update',compact('program','data'));
    }
    public function update(Request $req)
    {
        Program::find($req->id)->update($req->all());
        return redirect('indicator_edit_show/' . $req->indicators_id );
    }
}
