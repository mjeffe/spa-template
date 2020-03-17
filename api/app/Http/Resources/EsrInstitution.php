<?php

namespace App\Http\Resources;

use Illuminate\Http\JsonResponse;

/*
 * NOTE!!!  This one is weird
 *
 * This is not a Laravel, Eloquent API Resource object! 
 *
 * This is a custom "resource" like object that transforms the collection that
 * make up an institution, into our special tre-like structure. Note that it
 * does NOT extend Laravel's Base Resource.  Instead, it extends Laravel's
 * JsonResponse.
 *
 * The entire point of this object, is to extract all of this ugly logic from
 * the controller, and allow the controller to treat it like any other API
 * Resource; just new it up and return it.
 */
class EsrInstitution extends JsonResponse {

    /**
     * The collection that this resource accepts
     *
     * @var Collection
     */
    protected $collection;

    /**
     * The resource that this resource builds
     *
     * @var object
     */
    protected $resource;


    public function __construct($collection) {
        $this->collection = $collection;

        $this->resource = $this->buildResource($this->collection);

        parent::__construct($this->resource);
    }

    /*
     * We want to create a tree like structure, but preserve the order in
     * which rows were returned. To do this, we need to create simple
     * arrays of objects, NOT associative arrays (because associative
     * arrays do not preserve the order in which they were created).
     *
     * We accomplish this by maintaining pointers to each array as we build it,
     * and push new objects onto it.  We keep track of current degree and
     * cip_2, and simply switch our array pointer as as each degree or cip_2
     * value changes. 
     *
     * The object we return should look roughly like this:
     *
     * $data = [
     *    "fice_code" => "001092"
     *    "institution" => "University of Central Arkansas"
     *    "degrees" => [
     *      0 => [
     *        "degree" => "Associate Degrees"
     *        "degree_desc" => "Associate Degrees"
     *        "cip_2s" => [
     *          0 => [
     *            "cip_2" => ""
     *            "cip_2_desc" => "ALL AREAS OF STUDY"
     *            "cip_4s" => array:1 [
     *              0 => [
     *                "cip_4" => null
     *                "cip_4_desc" => ""
     *                "graduates" => "88"
     *                "employed_pct" => "67"
     *                "avg_first_year_wages" => "18267"
     *                ...
     */
    protected function buildResource($rows) {
        $data = [
            'fice_code' => $rows[0]['fice_code'],
            'institution' => $rows[0]['institution'],
            'degrees' => [],
        ];

        // pointers to the current arrays we are working on
        $degPtr = &$data['degrees'];
        $cip2Ptr = null;
        $cip4Ptr = null;

        // keep track of current values as we iterate
        // set these to something, because empty columns will match null or ''
        $degree = '--nothing--';
        $cip_2 = '--nothing--';

        foreach ($rows as $row) {
            if ($degree != $row['degree']) {
                $degree = $row['degree'];

                // push a new degree object
                $degPtr[] = $this->transformDegree($row);

                // point to the cip_2s array, in the new degree object we just pushed
                $cip2Ptr = &$degPtr[array_key_last($degPtr)]['cip_2s'];
            }

            if ($cip_2 != $row['cip_2']) {
                $cip_2 = $row['cip_2'];

                // push a new cip_2 object
                $cip2Ptr[] = $this->transformCip2($row);

                // point to the cip_4s array, in the new cip_2 object we just pushed
                $cip4Ptr = &$cip2Ptr[array_key_last($cip2Ptr)]['cip_4s'];
            }

            // push this cip_4 object to the array that $cip4Ptr is currently pointing to
            $cip4Ptr[] = $this->transformCip4($row);
        }

        return $this->wrap($data);
    }

    protected function transformDegree($row) {
        return [
            'degree' => $row['degree'],
            'degree_desc' => $row['degree'],
            'cip_2s' => [],
        ];
    }

    protected function transformCip2($row) {
        return [
            'cip_2' => $row['cip_2'],
            'cip_2_desc' => $row['cip_category'],
            'cip_4s' => [],
        ];
    }

    protected function transformCip4($row) {
        return [
            'cip_4' => $row['cip_4'],
            'cip_4_desc' => $row['cip_detail'],
            'graduates' => $row['graduates'],
            'pct_employed' => $row['pct_employed'],
            'avg_first_year_wages' => $row['avg_first_year_wages'],
            'pct_full_time' => $row['pct_full_time'],
            'avg_first_year_full_time_wages' => $row['avg_first_year_full_time_wages'],
        ];
    }

    protected function wrap($data) {
        return ['data' => $data];
    }

}
