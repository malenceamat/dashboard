<?php

namespace Database\Seeders;

use App\Models\Indicator;
use Illuminate\Database\Seeder;

class IndicatorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Indicator::create([
            'name' => 'Пример: Количество студентов',
            'description' => 'Количество студентов на данный момент в университете',
            'priority' => '1',
        ]);

        Indicator::create([
            'name' => 'Пример: Средний балл',
            'description' => 'Средний балл всех университетов в университете',
            'priority' => '2',
        ]);

        Indicator::create([
            'name' => 'Пример: Количество абитуриентов',
            'description' => 'Количество абитуриентов подавших заявки',
            'priority' => '3',
        ]);
    }
}
