<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Dashboard extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dashboard', function (Blueprint $table) {
            $table->id();
            $table->longText('name')->nullable();
            $table->longText('base_plan')->nullable();
            $table->longText('base_percent')->nullable();
            $table->longText('base_fact')->nullable();
            $table->longText('spec_plan')->nullable();
            $table->longText('spec_fact')->nullable();
            $table->longText('spec_percent')->nullable();
            $table->longText('sub_name')->nullable();
            $table->longText('result')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('dashboard');
    }
}
