<?php

namespace App\Http\Controllers;

use App\Charts\MonthlyUsersChart;
use App\Models\Dashboard;
use App\Models\Indicator;

class UserController extends Controller
{
    public function index(MonthlyUsersChart $chart)
    {
        $indicator = Indicator::with('programs')->orderBy('created_at')->get();
        $data = Dashboard::get();
//        return view('users.general',compact('data','indicator'));
        return view('users.general',['data' => $data,'indicator' => $indicator,'chart' => $chart->build()]);
    }
}
