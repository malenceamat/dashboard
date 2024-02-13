<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\DashboardController;
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
});
Route::get('/', [UserController::class, 'index']);
require __DIR__ . '/auth.php';
