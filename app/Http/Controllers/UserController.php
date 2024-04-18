<?php

namespace App\Http\Controllers;

use App\Models\Dashboard;
use App\Models\Indicator;
use App\Models\IndicatorProgram;
use App\Models\Program;
use App\Models\University;
use ArielMejiaDev\LarapexCharts\AreaChart;
use Illuminate\Support\Facades\DB;


class UserController extends Controller
{
    public function index()
    {
        $universities = University::get();
        $data = Dashboard::get();
        $indicators = Indicator::get();

        return view('users.general', ['data' => $data,
            'universities' => $universities, 'indicators' => $indicators]);
    }
}
