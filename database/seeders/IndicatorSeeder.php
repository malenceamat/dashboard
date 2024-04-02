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
            'name' => '1 показатель'
        ]);

        Indicator::create([
            'name' => '2 показатель'
        ]);

        Indicator::create([
            'name' => '3 показатель'
        ]);
    }
}
