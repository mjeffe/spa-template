<?php

class EsrInstitutionsTableSeeder extends BaseSeeder {

    public function run() {
        DB::table('esr_institutions')->truncate();
        $data = $this->parseCsv(database_path() . '/data/esr_2019_institutions.csv', '|');

        // load the table in chunks so we don't overload the db driver
        foreach (array_chunk($data, 100) as $chunk) {
            DB::table('esr_institutions')->insert($chunk);
        }

        DB::table('esr_institutions')
            ->where('cip_4', 'ALL AREAS OF STUDY')
            ->where('cip_category', '')
            ->update([
                'cip_detail' => 'ALL AREAS OF STUDY',
                'cip_4' => null
            ]);

    }
}
