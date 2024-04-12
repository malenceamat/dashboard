<?php

namespace App\Http\Controllers;

use App\Charts\MonthlyUsersChart;
use App\Models\Dashboard;
use App\Models\Indicator;
use ArielMejiaDev\LarapexCharts\BarChart;
use ArielMejiaDev\LarapexCharts\LarapexChart;

class UserController extends Controller
{
    public function index()
    {
        $indicator = Indicator::with('universityes')->orderBy('created_at')->get();
        foreach($indicator as $qwe) {
            $universities_name = [];
            $universities_plan = [];
            $universities_fact = [];
            foreach ($qwe->programs as $lem) {
                $universities_plan [] = $lem['plan'];
                $universities_fact [] = $lem['fact'];
            }

            foreach ($qwe->universityes as $pep) {
                $universities_name [] =  $pep['name'];
            }
            $chart = (new BarChart)
                ->setTitle($qwe['name'])
                ->addData('Фактические значения', $universities_fact)
                ->addData('Плановые значения',$universities_plan )
                ->setXAxis($universities_name);
            $charts[$qwe->id] = $chart;
        }
        $data = Dashboard::get();
        return view('users.general',['data' => $data,'indicator' => $indicator,'charts' => $charts]);
    }
}
