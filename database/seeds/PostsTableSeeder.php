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
            $imageArray = [
                'https://source.unsplash.com/500x500/?cars',
                'https://source.unsplash.com/500x500/?car',
                'https://source.unsplash.com/500x500/?sedans',
                'https://source.unsplash.com/500x500/?Audi+Car',
                'https://source.unsplash.com/500x500/?trucks+Car',
                'https://source.unsplash.com/500x500/?Convertable+Car',
                'https://source.unsplash.com/500x500/?Chevy+Car',
                'https://source.unsplash.com/500x500/?Porsche+Car',
                'https://source.unsplash.com/500x500/?Mercedes+Car',
                'https://source.unsplash.com/500x500/?Ford+Car',
                'https://source.unsplash.com/500x500/?Mazda+Car',
                'https://source.unsplash.com/500x500/?Nissan+Car',
                'https://source.unsplash.com/500x500/?Jeep+Car',
                'https://source.unsplash.com/500x500/?BMW+Car',
                'https://source.unsplash.com/500x500/?Jaguar+Car',
                'https://source.unsplash.com/500x500/?GMC+Car',
                'https://source.unsplash.com/500x500/?Volkswagen+Car',
                'https://source.unsplash.com/500x500/?Toyota+Car',
                'https://source.unsplash.com/500x500/?Honda+Car',
                'https://source.unsplash.com/500x500/?LandRover+Car',
            ];
            $image = $faker->randomElement($imageArray);

            Post::create([
                'user_id' => $user_id,
                'title' => $faker->words($nb = 3, $asText = true),
                'description' => $faker->sentence($nbWords = 6, $variableNbWords = true),
                'budget' => $faker->numberBetween(0,50000),
                'mileage' => $faker->words($nb = 3, $asText = true),
                'location' => $faker->city,
                'timeframe' => $timeframe,
                // VEHICLE INFO
                'vehicle_overview' => $faker->sentence($nbWords = 6, $variableNbWords = true),
                'vehicle_type' =>  $faker->words($nb = 2, $asText = true),
                'vehicle_make' =>  $faker->words($nb = 2, $asText = true),
                'vehicle_model' =>  $faker->words($nb = 2, $asText = true),
                'vehicle_year' => $faker->numberBetween(1950,2019),
                'vehicle_title_type' =>  $faker->words($nb = 2, $asText = true),
                // FEATURES
                'features' => $faker->sentence($nbWords = 6, $variableNbWords = true),
                // IMAGES
                'image_url' => $image,
                //PAYMENT OPTIONS
                'payment_type' => $faker->words($nb = 2, $asText = true),
                'seller_preference' => $faker->words($nb = 2, $asText = true),
                'loan_payment_method' => $faker->words($nb = 2, $asText = true),
                'dealer_door_price' => $faker->numberBetween(0,50000),
                'other_notes' => $faker->sentence($nbWords = 6, $variableNbWords = true),
            ]);
        }
    }
}
