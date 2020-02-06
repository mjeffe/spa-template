<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;
use Illuminate\Auth\AuthenticationException;
//use Illuminate\Auth\Access\AuthorizationException;

/**
 * middleware to filter for admin users
 */
class IsAdmin {
    public function handle($request, Closure $next) {
        if (Auth::user() &&  Auth::user()->isAdmin()) {
            return $next($request);
        }

        throw new AuthenticationException("Admin only route");
    }
}

