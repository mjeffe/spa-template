<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Esr;
use App\Http\Controllers\BaseController;

use App\Http\Resources\EsrInstitution;

class EsrController extends BaseController {
    public function institution(Request $request, $ficeCode) {
        return new EsrInstitution(
            $this->institutionData($ficeCode)
        );
    }

    public function downloadCsv(Request $request, $ficeCode) {
        $headers = [
            'Cache-Control'       => 'must-revalidate, post-check=0, pre-check=0',
            'Content-type'        => 'text/csv',
            'Content-Disposition' => 'attachment; filename=galleries.csv',
            'Expires'             => '0',
            'Pragma'              => 'public'
        ];

        $data = $this->institutionData($ficeCode)->toArray();

        // add headers for each column in the CSV download
        array_unshift($data, array_keys($data[0]));

        // stream the data rather than create a temp file
        $callback = function() use ($data) {
            $FH = fopen('php://output', 'w');
            foreach ($data as $row) {
                fputcsv($FH, $row);
            }
            fclose($FH);
        };

        return response()->streamDownload($callback, "esr-fice-code-{$ficeCode}.csv", $headers);
    }

    protected function institutionData($ficeCode) {
        return Esr::where('fice_code', $ficeCode)
            ->orderBy('degree', 'asc')
            ->orderBy('cip_category', 'asc')
            ->orderBy('cip_detail', 'asc')
            ->get();
    }

}
