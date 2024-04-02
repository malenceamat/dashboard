<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use App\Models\Dashboard;
use App\Models\Indicator;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $indicator = Indicator::with('programs')->orderBy('created_at')->get();
        $data = Dashboard::get();
        return view('users.general',compact('data','indicator'));
    }
}
