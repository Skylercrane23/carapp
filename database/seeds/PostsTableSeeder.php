<?php

use Illuminate\Database\Seeder;
use App\Post;
use App\User;

class PostsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();

        $users = User::all()->pluck('id')->toArray();

        for ($i = 0; $i < 15; $i++) {

            $user_id = $faker->randomElement($users);

            Post::create([
                'user_id' => $user_id,
                'title' => $faker->words($nb = 3, $asText = true),
                'body' => $faker->sentence($nbWords = 6, $variableNbWords = true),
            ]);
        }
    }
}
