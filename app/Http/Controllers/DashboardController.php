<?php

namespace App\Http\Controllers;

use App\Models\Dashboard;
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
        $percent = round(($req->fact * 100) / $req->plan, 1);
        Dashboard::create(array_merge($req->all(), ['percent' => $percent]));
        return redirect('/dashboard');
    }
    public function update(Request $req)
    {
        $percent = round(($req->fact * 100) / $req->plan, 1);
        Dashboard::find($req->id)->update(array_merge($req->all(),['percent' => $percent]));
        return redirect('/dashboard');
    }
    public function delete($id)
    {
        $delete = Dashboard::find($id);
        $delete->delete();
        return redirect('/dashboard');
    }
}
