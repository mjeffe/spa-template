<?php

class EsrInstitutionsTableSeeder extends BaseSeeder {

    public function run() {
        DB::table('esr_institutions')->truncate();
        $data = $this->parseCsv(database_path() . '/data/esr_2019_institutions.csv', '|');
        DB::table('esr_institutions')->insert($data);

        DB::table('esr_institutions')
            ->where('cip_4', 'ALL AREAS OF STUDY')
            ->where('cip_category', '')
            ->update([
                'cip_detail' => 'ALL AREAS OF STUDY',
                'cip_4' => null
            ]);

    }
}
