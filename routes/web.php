<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AjaxController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\IndicatorController;
use App\Http\Controllers\ProgramController;
use App\Http\Controllers\UniversityController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [UserController::class, 'index']);


Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

Route::post('ajax_update_table',[AjaxController::class,'get_table_with_ajax'])->name('ajax.update-table');
Route::post('ajax_update_chart',[AjaxController::class,'get_chart_with_ajax'])->name('ajax.update-chart');


Route::middleware(['auth'])->group(function () {

    Route::prefix('/admin')->group(function () {
        Route::get('/', [AdminController::class, 'index'])->name('/');
        Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard.index');
        Route::get('/dashboard-create/{id?}', [DashboardController::class, 'new']);
        Route::post('/dashboard-create/save', [DashboardController::class, 'create']);
        Route::post('/dashboard-create/edit', [DashboardController::class, 'update']);
        Route::delete('/dashboard/{delete}', [DashboardController::class, 'delete']);

        Route::get('/universities',[UniversityController::class,'index'])->name('universities.index');
        Route::post('/universities_create/{id?}',[UniversityController::class,'create'])->name('university.create');
        Route::delete('/universities/{delete}', [UniversityController::class, 'delete']);
        Route::get('/universities_update_show/{id}',[UniversityController::class,'update_show'])->name('university.update.show');
        Route::post('/universities_update',[UniversityController::class,'update'])->name('university.update');

        Route::get('/indicator',[IndicatorController::class,'index'])->name('indicator.index');
        Route::post('/indicator_create',[IndicatorController::class,'create']);
        Route::post('/indicator/{delete}', [IndicatorController::class, 'delete']);
        Route::get('/indicator_edit_show/{id}',[IndicatorController::class,'edit_show'])->name('indicator.edit.show');
        Route::post('/indicator_update',[IndicatorController::class,'update'])->name('indicator.update');

        Route::get('/program_create/{id}',[ProgramController::class,'index']);
        Route::post('/program_save',[ProgramController::class,'create'])->name('program.create');
        Route::get('/program_show/{id}',[ProgramController::class,'show']);
        Route::post('/program_update',[ProgramController::class,'update']);
        Route::post('/delete_column/{delete}', [ProgramController::class, 'delete']);

        Route::get('/program_edit_show/{id}',[ProgramController::class,'edit_show'])->name('program.edit.show');
        Route::post('/program_update',[ProgramController::class,'update'])->name('program.update');
        Route::post('/program_delete', [ProgramController::class, 'program_delete'])->name('program.delete');

        Route::post('/date_create', [ProgramController::class, 'date_create'])->name('date.create');

        Route::post('ajax_get_program', [AjaxController::class, 'get_program_with_ajax'])->name('ajax.get_program');
        Route::post('ajax_update_fact', [AjaxController::class, 'update_fact_with_ajax'])->name('ajax.update_fact');
    });
});
require __DIR__ . '/auth.php';
