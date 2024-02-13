<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use App\Models\Dashboard;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $data = Dashboard::get();
        return view('users.general',compact('data'));
    }
}
