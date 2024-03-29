<?php

use App\Http\Controllers\AdminController;
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

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');
Route::middleware(['auth'])->group(function () {
    Route::get('/admin', [AdminController::class, 'index']);
    Route::get('/dashboard', [DashboardController::class, 'index']);
    Route::get('/dashboard-create/{id?}', [DashboardController::class, 'new']);
    Route::post('/dashboard-create/save', [DashboardController::class, 'create']);
    Route::post('/dashboard-create/edit', [DashboardController::class, 'update']);
    Route::delete('/dashboard/{delete}', [DashboardController::class, 'delete']);

    Route::get('/universities',[UniversityController::class,'index']);
    Route::post('/universities_create/{id?}',[UniversityController::class,'create']);
    Route::delete('/universities/{delete}', [UniversityController::class, 'delete']);
    Route::get('/universities_update_show/{id}',[UniversityController::class,'update_show']);
    Route::post('/universities_update',[UniversityController::class,'update']);

    Route::get('/indicator',[IndicatorController::class,'index']);
    Route::post('/indicator_create',[IndicatorController::class,'create']);
    Route::delete('/indicator/{delete}', [IndicatorController::class, 'delete']);

    Route::get('/indicator_edit_show/{id}',[IndicatorController::class,'edit_show']);
    Route::post('/indicator_update',[IndicatorController::class,'update']);

    Route::get('/program_create/{id}',[ProgramController::class,'index']);
    Route::post('/program_save',[ProgramController::class,'create']);
    Route::get('/program_show/{id}',[ProgramController::class,'show']);
    Route::post('/program_update',[ProgramController::class,'update']);

});
Route::get('/', [UserController::class, 'index']);
require __DIR__ . '/auth.php';
