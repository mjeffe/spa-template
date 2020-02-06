<?php

namespace App\Http\Middleware;

use Closure;

class Cors
{
    // For development only
    public function handle($request, Closure $next) {
        return $next($request)
            ->header('Access-Control-Allow-Origin', 'http://localhost:8080')
            ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
            ->header('Access-Control-Allow-Headers', 'access-control-allow-methods, access-control-allow-origin, Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token, authorization');

    }
}
