<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Esr;
use Faker\Generator as Faker;

$factory->define(Esr::class, function (Faker $faker) {
    $degrees = [
        "Advanced Certificates",
        "Associate Degrees",
        "Baccalaureate Degrees",
        "Certificates of Proficiency",
        "Doctor's Degrees - Professional Practice",
        "Doctor's Degrees - Research/Scholarship",
        "Master's Degrees",
        "Post-Baccalaureate Certificates",
        "Post-Master's Degree Certificates",
        "Technical Certificates",
    ];

    return [
        'reporting_level' => 3,
        'fice_code' => $faker->randomNumber(6, true),
        'institution' => $faker->company(),
        'degree' => $faker->unique()->randomElement($degrees),
        'cip_2' => $faker->unique()->randomNumber(2, true),
        'cip_category' => $faker->words(3, true),
        'cip_4' => $faker->unique()->randomNumber(4, true),
        'cip_detail' => $faker->words(4, true),
        'graduates' => $faker->randomNumber(3),
        'pct_employed' => $faker->randomNumber(2, true),
        'avg_first_year_wages' => $faker->numberBetween(9000, 200000),
        'pct_full_time' => $faker->randomNumber(2),
        'avg_first_year_full_time_wages' => $faker->numberBetween(9000, 300000),
        'institution_years' => $faker->randomElement([2, 4]),
    ];
});
