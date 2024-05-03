<?php

namespace App\Http\Controllers;

use App\Models\Indicator;
use App\Models\IndicatorProgram;
use App\Models\Program;
use App\Models\University;
use ArielMejiaDev\LarapexCharts\BarChart;
use Illuminate\Http\Request;

class AjaxController extends Controller
{
    public function get_table_with_ajax(Request $req)
    {
        $universities_data = University::get();
        $data_indicators = [];
        foreach ($universities_data as $university_data) {
            $university_id = $university_data->id;

            $programs = IndicatorProgram::where('indicator_id', $req->indicator)
                ->join('programs', 'program_id', '=', 'id')
                ->where('programs.id_university', '=', $university_id)
                ->orderBy('date', 'desc')->first();

            $data_indicator = array(
                'name' => $university_data->name,
                'description' => $programs->name ?? 0,
                'fact' => $programs->fact ?? 0,
                'plan' => $programs->plan ?? 0,
                'percent' => $programs->percent ?? 0
            );
            $data_indicators[$university_id] = array_merge($data_indicator);
        }
        return view('users.elements.indicator-table', ['data_indicators' => $data_indicators]);
    }

    public function get_chart_with_ajax(Request $req)
    {
        $universities_data = University::get();
        foreach ($universities_data as $university_data) {


        $data_charts = IndicatorProgram::where('indicator_id', $req->indicator)
            ->join('programs', 'program_id', '=', 'id')
            ->where('programs.id_university', '=', $university_data->id)
            ->orderBy('date', 'desc')->get();

        foreach ($data_charts as $data_chart) {
            $universities_name [] = University::where('id', $university_data->id)->value('name');
            $universities_plans [] = 100;

            if($data_chart['plan'] == 0) {
                $plan = 1;
            }
            else {
                $plan = $data_chart['plan'];
            }

            $universities_facts [] = round(($data_chart['fact'] * 100) / $plan , 2);
        }


        }
        $chart = (new BarChart())
            ->addData('Фактические значения %', $universities_facts)
            ->addData('Плановые значения %', $universities_plans)
            ->setXAxis($universities_name);
        $charts[$data_chart['id']] = $chart;


        return view('users.elements.chart-table', ['data_charts' => $charts]);
    }
    public function get_program_with_ajax(Request $req)
    {
        $data = IndicatorProgram::where('indicator_id', $req->id)
            ->join('programs', 'program_id', '=', 'id')
            ->where('programs.id_university', '=', $req->university_id)
            ->where('programs.date', '=', $req->date)
            ->get();

        return view('admin.program.components.table', compact('data'));
    }

    public function update_fact_with_ajax(Request $req)
    {
        $plan = Program::where('id', $req->id)->value('plan');
        $percent = round(($req->fact * 100) / $plan, 1);
        Program::where('id', $req->id)->update([
            'fact' => $req->fact,
            'percent' => $percent,
        ]);

        return('Успешно обновлено');
    }

    public function update_priority_with_ajax(Request $req)
    {
        Indicator::where('id', $req->id)->update([
            'priority' => $req->priority,
        ]);

        return('Успешно обновлено');
    }
}
