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

        $data = new Dashboard;
        $data->name = $req->name;
        $data->sub_name = $req->sub_name;
        $data->plan = $req->plan;
        $data->fact = $req->fact;
        $data->result =  ($req->plan) + ($req->fact);
        $data->percent = round(($req->fact * 100) / $req->plan, 1);

        $data->save();
        return redirect('/dashboard');
    }
    public function update(Request $req)
    {
        $data = Dashboard::find($req->id);
        $data->sub_name = $req->sub_name;
        $data -> name = $req->name;
        $data -> base_plan = $req->base_plan;
        $data -> base_fact = $req->base_fact;
        $data -> spec_plan = $req->spec_plan;
        $data -> spec_fact = $req->spec_fact;

        $result = ($data->spec_plan) + ($data->base_plan);   //считаем итог
        $data->result = $result;                             //считаем итог

        $percents_spec = ($data->spec_fact * 100) / $data->spec_plan;
        $percent_spec = round($percents_spec, 1);
        $data->spec_percent = $percent_spec;

        $percents_base = ($data->base_fact * 100) / $data->base_plan;
        $percent_base = round($percents_base, 1);
        $data->base_percent = $percent_base;

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
