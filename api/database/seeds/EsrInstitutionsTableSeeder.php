<?php

class EsrInstitutionsTableSeeder extends BaseSeeder {

    public function run() {
        DB::table('esr_institutions')->truncate();
        $data = $this->parseCsv(database_path() . '/data/esr_2019_institutions.csv', '|');

        //
        // TODO: the right way would be to create a new loadFromCsv($path, $callback, $delimiter)
        // where $callback would do something with each chunk. In our case, the callback would
        // be the table insert code
        //
        // load the table in chunks so we don't overload the db driver
        foreach (array_chunk($data, 10) as $chunk) {
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
