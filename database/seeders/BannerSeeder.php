<?php

namespace Database\Seeders;

use App\Models\Banner;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;
use Str;

class BannerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Banner::create([
            'image' => 'content/banner.png',
            'button' => 'Начать обучение',
            'emailbutton' => 'https://www.google.ru/',
            'text' => 'Цифровая Кафедра',
            'smalltext' => 'Цифровая кафедра — программа федерального проекта «Развитие кадрового потенциала ИТ-отрасли» национальной программы «Цифровая экономика Российской Федерации».',
            'secondbutton' => 'Программы',
        ]);

    }
}
