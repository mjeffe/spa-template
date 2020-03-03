<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEsrStateTable extends Migration {
    public function up() {
        Schema::create('esr_state', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->text('grouping');
            $table->text('degree_abbr');
            $table->integer('graduates');
            $table->integer('employed');
            $table->integer('avg_first_year_wage');
            $table->integer('full_time_denominator');
            $table->integer('full_time_employed');
            $table->integer('full_time_avg_first_year_wage');
        });
    }

    public function down() {
        Schema::dropIfExists('esr_state');
    }
}
