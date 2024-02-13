<?php

namespace App\Http\Controllers;

use App\Models\Dashboard;
use App\Models\Stages;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $data = Dashboard::get();
        return view('admin.dashboard.dashboard',compact('data'));
    }
    public function new($id = null)
    {
        $data = $id ? Dashboard::find($id) : new Dashboard();
        return view('admin.dashboard.dashboard-create',compact('data'));
    }
    public function create(Request $req)
    {
        $data = Dashboard::create($req->all());
        $result = ($data->base) + ($data->special);     //считаем итог
        $data->result = $result;     //считаем итог

        $percent = ($data->base / $data->special) * 100;
        $data->percent = $percent;
        $data->save();
        return redirect('/dashboard');
    }
    public function update(Request $req)
    {
        $data = Dashboard::find($req->id);
        $data->sub_name = $req->sub_name;
        $data -> name = $req->name;
        $data -> base = $req->base;
        $data -> special = $req->special;

        $result = ($data->base) + ($data->special);  //считаем итог
        $data -> result = $result;                   //считаем итог


        $percent = ($data->special * 100) / $data->base;
        $data->percent = $percent;


        $data->save();
        return redirect('/dashboard');
    }
    public function delete($id)
    {
        $delete = Dashboard::find($id);
        $delete->delete();
        return redirect('/dashboard');
    }
}
