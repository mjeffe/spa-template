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
                'email' => 'matt@mattjeffery.dev',
                'password' => Hash::make('asdf'),
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
