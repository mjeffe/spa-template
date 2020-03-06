<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEsrInstitutionsTable extends Migration {
    public function up() {
        Schema::create('esr_institutions', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('reporting_level');
            $table->text('fice_code');
            $table->text('institution');
            $table->text('degree');
            $table->text('cip_2')->nullable();
            $table->text('cip_category')->nullable();
            $table->text('cip_4')->nullable();
            $table->text('cip_detail')->nullable();
            $table->integer('graduates');
            $table->integer('employed_pct');
            $table->integer('avg_first_year_wages');
            $table->integer('full_time_pct');
            $table->integer('avg_first_year_full_time_wages');
            $table->integer('institution_years');
        });
    }

    public function down() {
        Schema::dropIfExists('esr_institutions');
    }
}
