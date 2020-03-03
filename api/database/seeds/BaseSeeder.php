<?php

use Illuminate\Database\Seeder;

class BaseSeeder extends Seeder {

    /**
     * Slurp CSV file into an array of arrays.
     *
     * This is NOT efficient, it's quick and dirty. Also note, it requires the
     * CSV file have a header row where field names match the table columns.
     *
     * @param $filename
     * @param string $deliminator
     *
     * @return array
     */
    protected function parseCsv($filename, $delimitor = ",") {
        if (!file_exists($filename) || !is_readable($filename)) {
            throw new \Exception("Unable to read from CSV file: {$filename}{$PHP_EOL}");
        }
 
        $data = [];
        $header = null;
 
        if (($handle = fopen($filename, 'r')) !== FALSE) {
            while (($row = fgetcsv($handle, 1000, $delimitor)) !== FALSE) {
                if (empty($header)) {
                    $header = $row;
                } else {
                    $data[] = array_combine($header, $row);
                }
            }
            fclose($handle);
        }
 
        return $data;
    }
}
