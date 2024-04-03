<?php

namespace App\Charts;

use App\Models\Indicator;
use ArielMejiaDev\LarapexCharts\AreaChart;
use ArielMejiaDev\LarapexCharts\LarapexChart;

class MonthlyUsersChart
{
    protected $chart;
    public function __construct(LarapexChart $chart)
    {
        $this->chart = $chart;
    }
    public function build(): AreaChart
    {
           return $this->chart->areaChart()
               ->setTitle('qwe')
               ->setSubtitle('График изменений фактический значений')
               ->addData('Physical sales', [40, 93, 35, 42, 18, 82])
               ->addData('Digital sales', [70, 29, 77, 28, 55, 45])
               ->setXAxis(['January', 'February', 'March', 'April', 'May', 'June']);

    }
}
