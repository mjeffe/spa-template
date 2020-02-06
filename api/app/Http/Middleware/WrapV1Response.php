<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\App;

class WrapV1Response {
    /**
     * Handle an incoming request.
     *
     * This is an "after" middleware used to apply the json wrapper appropriate
     * for API version1.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  String $apiVersion
     * @return mixed
     */
    public function handle($request, Closure $next) {
        $response = $next($request);

        /*
         * Downloads return a Symfony\Component\HttpFoundation\BinaryFileResponse
         * object which we don't want to mess with.  For now, the only thing we
         * know how to handle are plain old Illuminate\Http\JsonResponse
         */
        if (get_class($response) == 'Illuminate\Http\JsonResponse') {
            return $this->handleJsonResponse($response);
        }

        return $response;
    }

    protected function handleJsonResponse($response) {
        $original = $response->getOriginalContent();

        $wrapped = ($response->status())
            ? $this->success($original)
            : $this->error($original['message'], ($original['errors'] ?? null));

        // plain http responses accept an array, but json responses need json
        $response->setContent(json_encode($wrapped));

        return $response;
    }

    protected function success($data) {
        return [
            'status' => 'success',
            'data' => $data,
        ];
    }

    protected function error($message, $errors) {
        return [
            'status' => 'error',
            'message' => $message,
            'errors' => $errors,
        ];
    }
}

