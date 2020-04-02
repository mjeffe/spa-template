<?php

use Illuminate\Database\Seeder;

class BaseSeeder extends Seeder {

    /**
     * Slurp CSV file into an array of arrays.
     *
     * There are much better ways to do this! But this is a quick and dirty way
     * to load relatively small CSV files into the database for the demo. It
     * requires the CSV file have a header row where field names match the
     * table columns.
     *
     * It depends on your box, but in general, you should probably break your
     * load into chunks. This is especially true for sqlite. So the calling
     * function should do something like this: 
     *
     *      $data = $this->parseCsv(database_path() . '/data/file.csv');
     *      foreach (array_chunk($data, 10) as $chunk) {
     *          DB::table($table)->insert($chunk);
     *      }
     *
     * @param $filename
     * @param string $delimiter
     *
     * @return array
     */
    protected function parseCsv($filename, $delimiter = ",") {
        if (!file_exists($filename) || !is_readable($filename)) {
            throw new \Exception("Unable to read from CSV file: {$filename}{$PHP_EOL}");
        }
 
        $data = [];
        $header = null;
 
        if (($fh = fopen($filename, 'r')) !== FALSE) {
            while (($row = fgetcsv($fh, 1024, $delimiter)) !== FALSE) {
                if (empty($header)) {
                    $header = $row;
                } else {
                    $data[] = array_combine($header, $row);
                }
            }
            fclose($fh);
        }
 
        return $data;
    }
}
