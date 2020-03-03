<?php

class EsrInstitutionsTableSeeder extends BaseSeeder {

    public function run() {
        DB::table('esr_institutions')->truncate();
        $data = $this->parseCsv(database_path() . '/data/esr_2019_institutions.csv', '|');
        DB::table('esr_institutions')->insert($data);
    }
}
