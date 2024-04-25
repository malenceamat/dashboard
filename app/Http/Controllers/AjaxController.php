<?php

namespace App\Http\Controllers;

use App\Models\Indicator;
use App\Models\IndicatorProgram;
use App\Models\Program;
use App\Models\University;
use ArielMejiaDev\LarapexCharts\AreaChart;
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
        $data_charts = IndicatorProgram::where('indicator_id', $req->indicator)
            ->join('programs', 'program_id', '=', 'id')
            ->where('programs.id_university', '=', $req->university_id)
            ->orderBy('date')->get();

        foreach ($data_charts as $data_chart) {
            $universities_name  = University::where('id', $data_chart->id_university)->value('name');
            $universities_plan [] = $data_chart['plan'];
            $universities_fact [] = $data_chart['fact'];
            $date [] = $data_chart['date'];
        }

        $chart = (new AreaChart)
            ->setTitle($universities_name)
            ->addData('Фактические значения', $universities_fact)
            ->addData('Плановые значения', $universities_plan)
            ->setXAxis($date);
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
