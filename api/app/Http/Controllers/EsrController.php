<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\EsrInstitution;
use App\Http\Resources\EsrCollection;
use App\Http\Resources\Esr as EsrResource;
use App\Http\Controllers\BaseController;

class EsrController extends BaseController {

    // table format - pretty much return as is
    public function Xinstitution(Request $request, $ficeCode) {
        return new EsrCollection(
            EsrInstitution::where('fice_code', $ficeCode)
                ->orderBy('degree', 'asc')
                ->orderBy('cip_category', 'asc')
                ->orderBy('cip_detail', 'asc')
                ->get()
        );
    }

    // coerce into a nested tree format
    public function institution(Request $request, $ficeCode) {
        $rows = EsrInstitution::where('fice_code', $ficeCode)
            ->orderBy('degree', 'asc')
            ->orderBy('cip_category', 'asc')
            ->orderBy('cip_detail', 'asc')
            ->get();

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

        /*
         * We want to create a tree like structure, but preserve the order in
         * which rows were returned. To do this, we need to create simple
         * arrays of objects, NOT associative arrays (because associative
         * arrays do not preserve the order in which they were created).
         *
         * We can accomplish this by maintaining pointers the the current array
         * we are working on and simply push new objects onto it.  We keep
         * track of each degree and cip_2, then switch our pointer as each one
         * of these changes.
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
        foreach ($rows as $row) {
            if ($degree != $row['degree']) {
                $degree = $row['degree'];

                // push a new degree object
                $degPtr[] = [
                    'degree' => $row['degree'],
                    'degree_desc' => $row['degree'],
                    'cip_2s' => [],
                ];

                // point to the cip_2s array, in the new degree object we just pushed
                $cip2Ptr = &$degPtr[array_key_last($degPtr)]['cip_2s'];
            }

            if ($cip_2 != $row['cip_2']) {
                $cip_2 = $row['cip_2'];

                // push a new cip_2 object
                $cip2Ptr[] = [
                    'cip_2' => $row['cip_2'],
                    'cip_2_desc' => $row['cip_category'],
                    'cip_4s' => [],
                ];

                // point to the cip_4s array, in the new cip_2 object we just pushed
                $cip4Ptr = &$cip2Ptr[array_key_last($cip2Ptr)]['cip_4s'];
            }

            // push this cip_4 object to the array that $cip4Ptr is currently pointing to
            $cip4Ptr[] = [
                'cip_4' => $row['cip_4'],
                'cip_4_desc' => $row['cip_detail'],
                'graduates' => $row['graduates'],
                'pct_employed' => $row['pct_employed'],
                'avg_first_year_wages' => $row['avg_first_year_wages'],
                'pct_full_time' => $row['pct_full_time'],
                'avg_first_year_full_time_wages' => $row['avg_first_year_full_time_wages'],
            ];
        }

        //return new EsrCollection($rows);
        return response()->json(['data' => $data]);
    }
}
