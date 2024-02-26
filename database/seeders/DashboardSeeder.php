<?php

namespace Database\Seeders;

use App\Models\BlockHide;
use App\Models\Dashboard;
use Illuminate\Database\Seeder;

class DashboardSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Dashboard::create([
            'name' => 'Численность лиц, прошедших обучение по дополнительным профессиональным программам, из них:',
            'sub_name' => '',
            'base_plan' => '7500',
            'base_fact' => '',
            'base_percent' => '',
            'spec_plan' => '2500',
            'spec_fact' => '',
            'spec_percent' => '',
            'result' => '10000',
        ]);

        Dashboard::create([
            'name' => '- численность лиц, прошедших обучение по программам повышения квалификации',
            'sub_name' => '',
            'base_plan' => '6000',
            'base_fact' => '',
            'base_percent' => '',
            'spec_plan' => '2000',
            'spec_fact' => '',
            'spec_percent' => '',
            'result' => '8000',
        ]);

        Dashboard::create([
            'name' => '- численность лиц, прошедших обучение по программам профессиональной переподготовки',
            'sub_name' => '',
            'base_plan' => '1500',
            'base_fact' => '',
            'base_percent' => '',
            'spec_plan' => '500',
            'spec_fact' => '',
            'spec_percent' => '',
            'result' => '2000',
        ]);

        Dashboard::create([
            'name' => 'Доля обучающихся по образовательным программам бакалавриата, специалитета, магистратуры по очной форме обучения, получивших на бесплатной основе дополнительную квалификацию в общей численности обучающихся по образовательным программам бакалавриата, специалитета, магистратуры по очной форме обучения, из них:',
            'sub_name' => '',
            'base_plan' => '',
            'base_fact' => '',
            'base_percent' => '',
            'spec_plan' => '',
            'spec_fact' => '',
            'spec_percent' => '',
            'result' => '50.7',
        ]);

        Dashboard::create([
            'name' => '- численность обучающихся по образовательным программам бакалавриата, специалитета, магистратуры по очной форме обучения, получивших на бесплатной основе дополнительную квалификацию (очная форма)',
            'sub_name' => '',
            'base_plan' => '',
            'base_fact' => '',
            'base_percent' => '',
            'spec_plan' => '',
            'spec_fact' => '',
            'spec_percent' => '',
            'result' => '4000',
        ]);

        Dashboard::create([
            'name' => '- численность лиц, обучающихся на цифровой кафедре образовательной организации высшего образования',
            'sub_name' => '',
            'base_plan' => '',
            'base_fact' => '',
            'base_percent' => '',
            'spec_plan' => '',
            'spec_fact' => '',
            'spec_percent' => '',
            'result' => '1214',
        ]);
    }
}
