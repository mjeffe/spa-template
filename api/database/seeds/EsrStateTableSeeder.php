<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class EsrStateTableSeeder extends BaseSeeder {

    public function run() {
        DB::table('esr_state')->truncate();
        $data = $this->parseCsv(database_path() . '/data/esr_2019_state.csv', '|');
        DB::table('esr_state')->insert($data);
    }
}
