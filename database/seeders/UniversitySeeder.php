<?php

namespace Database\Seeders;

use App\Models\University;
use Illuminate\Database\Seeder;

class UniversitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        University::create([
            'name' => 'ИГУМ'
        ]);

        University::create([
            'name' => 'ИПТ'
        ]);

        University::create([
            'name' => 'ИЦЭУС'
        ]);

        University::create([
            'name' => 'ИЮР'
        ]);

        University::create([
            'name' => 'ИБХИ'
        ]);

        University::create([
            'name' => 'ИЭИС'
        ]);

        University::create([
            'name' => 'ПИ'
        ]);

        University::create([
            'name' => 'ИМО'
        ]);
    }
}
