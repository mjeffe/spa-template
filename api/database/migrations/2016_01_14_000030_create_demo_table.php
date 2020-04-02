<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDemoTable extends Migration {
    public function up() {
        Schema::create('demo', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->text('fice_code');
            $table->text('institution');
            $table->integer('institution_years');
        });
    }

    public function down() {
        Schema::dropIfExists('demo');
    }
}
