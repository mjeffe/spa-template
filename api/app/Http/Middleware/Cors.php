<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Log;

class Cors
{
    // For development only
    public function handle($request, Closure $next) {
        $response = $next($request);

        // NOTE: downloads (files or streams) return some other kind of object
        // that we don't want to mess with.  For now, the only thing we know
        // how to handle are plain old Illuminate\Http\JsonResponse or our
        // Resources, which are based on that.
        if (method_exists($response, 'header')) {
            return $response
                ->header('Access-Control-Allow-Origin', 'http://localhost:8080')
                ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
                ->header('Access-Control-Allow-Headers', 'access-control-allow-methods, access-control-allow-origin, '
                        .' Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token, authorization');
        }

        return $response;
    }
}
