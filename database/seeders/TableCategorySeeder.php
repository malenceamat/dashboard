<?php

namespace Database\Seeders;

use App\Models\TableCategory;
use Illuminate\Database\Seeder;

class TableCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        TableCategory::create([
            'name' => 'Показатели'
        ]);

        TableCategory::create([
            'name' => 'ПК/ПП'
        ]);
    }
}
