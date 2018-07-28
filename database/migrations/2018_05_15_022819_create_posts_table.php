<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
            $table->integer('user_id')->unsigned();
            $table->foreign('user_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');
            $table->string('title')->nullable();
            $table->longText('description')->nullable();
            $table->integer('budget')->nullable();
            $table->integer('mileage')->nullable();
            $table->string('location')->nullable();
            $table->string('timeframe')->nullable();

            // Vehicle Info
            $table->longText('vehicle_overview')->nullable();
            $table->string('vehicle_type')->nullable();
            $table->string('vehicle_make')->nullable();
            $table->string('vehicle_model')->nullable();
            $table->integer('vehicle_year')->nullable();
            $table->string('vehicle_title_type')->nullable();

            // Features
            $table->longText('features')->nullable();

            // Images
            $table->string('image_url')->nullable();

            // Payment Options
            $table->string('payment_type')->nullable();
            $table->string('seller_preference')->nullable();
            $table->string('loan_payment_method')->nullable();
            $table->string('dealer_door_price')->nullable();
            $table->longText('other_notes')->nullable();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */

    public function down()
    {
        Schema::dropIfExists('posts');
    }
}
