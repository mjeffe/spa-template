<?php

class DemoTableSeeder extends BaseSeeder {

    public function run() {
        DB::table('demo')->truncate();

        // see usage notes in the parseCsv() function before you use it!
        $data = $this->parseCsv(database_path() . '/data/demo.csv', '|');

        // load the table in chunks so we don't overload the db driver
        foreach (array_chunk($data, 10) as $chunk) {
            DB::table('demo')->insert($chunk);
        }
    }
}
