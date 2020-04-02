<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Demo;
use Faker\Generator as Faker;

$factory->define(Demo::class, function (Faker $faker) {
    return [
        'fice_code' => $faker->randomNumber(6, true),
        'institution' => $faker->company(),
        'institution_years' => $faker->randomElement([2, 4]),
    ];
});
