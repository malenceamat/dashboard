<?php

namespace App\Charts;

use App\Models\Indicator;
use ArielMejiaDev\LarapexCharts\BarChart;
use ArielMejiaDev\LarapexCharts\LarapexChart;

class MonthlyUsersChart
{
    protected $chart;
    public function __construct(LarapexChart $chart)
    {
        $this->chart = $chart;
    }
    public function build($indicatorId): BarChart
    {
        $indicator = Indicator::with('universityes')->find($indicatorId);

        foreach ($indicator->universityes as $universitye) {

            $chart = $this->chart->barChart()
               ->setTitle($indicator['name'])
               ->setSubtitle('Wins during season 2021.')
               ->addData('San Francisco', [6, 9, 3, 4, 10, 8])
               ->addData('Boston', [7, 3, 8, 2, 6, 4])
               ->setXAxis([$universitye['name']]);


        }

        return $chart;

    }
}
