<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder {

    public function run() {
        DB::table('users')->insert([
            [
                'fname' => 'Matt',
                'lname' => 'Jeffery',
                'email' => 'matt.jeffery@arkansas.gov',
                'password' => Hash::make('asdf'),
                'is_admin' => true,
            ],
            [
                'fname' => 'Jake',
                'lname' => 'Walker',
                'email' => 'jake.walker@arkansas.gov',
                'password' => Hash::make('Welcome2'),
                'is_admin' => true,
            ],
            [
                'fname' => 'Abc',
                'lname' => 'Xyz',
                'email' => 'abc@xyz.com',
                'password' => Hash::make('abcxyz'),
                'is_admin' => null,
            ],
        ]);
    }
}
