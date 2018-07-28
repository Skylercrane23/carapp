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

            $timeFrameArray = ['Within 1 Week', 'Within 1 Month', '1 - 3 Months', '3 - 6 Months', '6 Months or More' ];
            $user_id = $faker->randomElement($users);
            $timeframe= $faker->randomElement($timeFrameArray);

            Post::create([
                'user_id' => $user_id,
                'title' => $faker->words($nb = 3, $asText = true),
                'description' => $faker->sentence($nbWords = 6, $variableNbWords = true),
                'budget' => $faker->numberBetween(0,50000),
                'mileage' => $faker->numberBetween(10000,100000),
                'location' => $faker->city,
                'timeframe' => $timeframe,
                // VEHICLE INFO
                'vehicle_type' =>  $faker->words($nb = 2, $asText = true),
                'vehicle_make' =>  $faker->words($nb = 2, $asText = true),
                'vehicle_model' =>  $faker->words($nb = 2, $asText = true),
                'vehicle_year' => $faker->numberBetween(1950,2019),
                'vehicle_title_type' =>  $faker->words($nb = 2, $asText = true),
            ]);
        }
    }
}
