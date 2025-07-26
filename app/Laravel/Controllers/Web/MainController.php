<?php

namespace App\Laravel\Controllers\Web;

class MainController extends Controller{
    protected $data;

    public function __construct(){

    }

    public function index(){
        return inertia('Web/Index');
    }
}