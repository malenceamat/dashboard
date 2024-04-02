<?php

namespace Database\Seeders;

use App\Models\indicator_universities;
use Illuminate\Database\Seeder;

class Indicator_UniversitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        indicator_universities::create([
            'indicator_id' => '1',
            'university_id' => '1'
        ]);

        indicator_universities::create([
            'indicator_id' => '2',
            'university_id' => '1'
        ]);

        indicator_universities::create([
            'indicator_id' => '3',
            'university_id' => '1'
        ]);

        indicator_universities::create([
            'indicator_id' => '1',
            'university_id' => '2'
        ]);

        indicator_universities::create([
            'indicator_id' => '2',
            'university_id' => '2'
        ]);

        indicator_universities::create([
            'indicator_id' => '3',
            'university_id' => '2'
        ]);

        indicator_universities::create([
            'indicator_id' => '1',
            'university_id' => '3'
        ]);

        indicator_universities::create([
            'indicator_id' => '2',
            'university_id' => '3'
        ]);

        indicator_universities::create([
            'indicator_id' => '3',
            'university_id' => '3'
        ]);

        indicator_universities::create([
            'indicator_id' => '1',
            'university_id' => '4'
        ]);

        indicator_universities::create([
            'indicator_id' => '2',
            'university_id' => '4'
        ]);

        indicator_universities::create([
            'indicator_id' => '3',
            'university_id' => '4'
        ]);

        indicator_universities::create([
            'indicator_id' => '1',
            'university_id' => '5'
        ]);

        indicator_universities::create([
            'indicator_id' => '2',
            'university_id' => '5'
        ]);

        indicator_universities::create([
            'indicator_id' => '3',
            'university_id' => '5'
        ]);

        indicator_universities::create([
            'indicator_id' => '1',
            'university_id' => '6'
        ]);

        indicator_universities::create([
            'indicator_id' => '2',
            'university_id' => '6'
        ]);

        indicator_universities::create([
            'indicator_id' => '3',
            'university_id' => '6'
        ]);

        indicator_universities::create([
            'indicator_id' => '1',
            'university_id' => '7'
        ]);

        indicator_universities::create([
            'indicator_id' => '2',
            'university_id' => '7'
        ]);

        indicator_universities::create([
            'indicator_id' => '3',
            'university_id' => '7'
        ]);

        indicator_universities::create([
            'indicator_id' => '1',
            'university_id' => '8'
        ]);

        indicator_universities::create([
            'indicator_id' => '2',
            'university_id' => '8'
        ]);

        indicator_universities::create([
            'indicator_id' => '3',
            'university_id' => '8'
        ]);
    }
}
