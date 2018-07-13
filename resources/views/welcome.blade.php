@extends('layouts.app')

@section('content')
    <div id="Landing-Page">
        <div class="jumbotron  d-flex flex-column justify-content-center align-content-center">
            <div class="container">
                <h1 class="text-center text-white">CAR APP</h1>
                <h3 class="text-center text-white">Auto purchases made easy.</h3>
                <a href="/register" class="button large circle transparent-white mt-4 text-capitalize">Get Started
                    for
                    Free</a>
            </div>
            <div class="down-arrow">
                <a id="down-arrow" href="#how-it-works">
                    <i class="material-icons white">arrow_downward</i>
                </a>
            </div>
        </div>

        {{--HOW IT WORKS SECTION--}}
        <div class="container">
            <div id="how-it-works">
                <h2 class="text-center">How it Works</h2>
                <hr class="heading-underline">
                <p class="text-center mx-auto">Most car buying sites focus on the buyer spending an exhausting amount of
                    time researching to find the
                    right car. For seller’s, it is difficult because you post what you have to sell and wait for offers
                    to
                    come to you instead of being able to be proactive about selling your car. The Car App makes buying
                    and
                    selling vehicles easy and stress free for both buyer and seller. Experience it for yourself by
                    following
                    the simple steps below. </p>
                <p class="mt-5 mb-5 text-center mx-auto blue w-bold">Are you buying or selling?</p>

                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="buying-tab" data-toggle="tab" href="#buying" role="tab"
                           aria-controls="buying" aria-selected="true">Buying</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="selling-tab" data-toggle="tab" href="#selling" role="tab"
                           aria-controls="selling" aria-selected="false">Selling</a>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="buying" role="tabpanel" aria-labelledby="buying-tab">
                        <div class="row animated fadeIn">
                            <div class="col-md-12 col-lg-4 text-center">
                                <i class="fas fa-user blue"></i>
                                <h4 class="mt-3">Step 1</h4>
                                <p>Create your free Car App account and sign in.</p>
                            </div>
                            <div class="col-md-12 col-lg-4  text-center">
                                <i class="far fa-list-alt blue"></i>
                                <h4 class="mt-3">Step 2</h4>
                                <p>Specify what vehicle, options, and features you want in your next car.</p>
                            </div>
                            <div class="col-md-12 col-lg-4  text-center">
                                <i class="fas fa-handshake blue"></i>
                                <h4 class="mt-3">Step 3</h4>
                                <p>Post your listing, sit back and wait for offers to come to you.</p>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="selling" role="tabpanel" aria-labelledby="selling-tab">
                        <div class="row animated fadeIn">
                            <div class="col-md-12 col-lg-4  text-center">
                                <i class="fas fa-user blue"></i>
                                <h4 class="mt-3">Step 1</h4>
                                <p>Create your free Car App account and sign in.</p>
                            </div>
                            <div class="col-md-12 col-lg-4  text-center">
                                <i class="fas fa-search blue"></i>
                                <h4 class="mt-3">Step 2</h4>
                                <p>Browse listings, and search for posts that match your vehicle</p>
                            </div>
                            <div class="col-md-12 col-lg-4  text-center">
                                <i class="fas fa-phone blue"></i>
                                <h4 class="mt-3">Step 3</h4>
                                <p>Contact the buyer and determine terms and conditions sale </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        {{-- ABOUT US SECTION --}}
        <div class="container-fluid px-0">
            <div id="about-us">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 col-lg-6">
                            <h2>About Us</h2>
                            <hr class="heading-underline mx-0">
                            <p class="text-left">Here at Car App, we have experienced the stress it takes to buy and
                                sell a
                                vehicle at the right price. Car App is the new auto buying experience people have been
                                waiting
                                for. This new platform is designed to make your next vehicle purchase a breeze. Users
                                can
                                post
                                specifics of vehicles they want, and at a reasonable price they are willing to pay. This
                                allows
                                you to sit back, relax, and watch offers come to you. Users interested in selling can
                                browse
                                through postings that match the vehicle criteria of the buyer and make a sale. Our goal
                                for
                                Car
                                App users is to eliminate the stress of buying and selling a vehicle. No more sales
                                tactics
                                and
                                wasted time searching. </p>
                        </div>
                        <div class="col-md-12 col-lg-6">
                            <img src="/img/about-us.jpg" class="img-fluid shadow-lg" alt="Responsive image">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div id="features">
                <h2 class="text-center">Features</h2>
                <hr class="heading-underline">
                <div class="row animated fadeIn">
                    <div class="col-md-12 col-lg-4 text-center">
                        <i class="fas fa-couch blue"></i>
                        <h4 class="mt-3">Step 1</h4>
                        <p>Buyers can post what vehicle they want, sit back, relax, and wait for offers to come to
                            them.</p>
                    </div>
                    <div class="col-md-12 col-lg-4 text-center">
                        <i class="fas fa-search blue"></i>
                        <h4 class="mt-3">Step 2</h4>
                        <p>Sellers can proactively search for posts that match their vehicle.</p>
                    </div>
                    <div class="col-md-12 col-lg-4 text-center">
                        <i class="fas fa-envelope blue"></i>
                        <h4 class="mt-3">Step 3</h4>
                        <p>As a buyer, receive messages from potential sellers directly in the app.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid blue-bg  py-3" id="footer">
            <div class="container">
                <div class="d-flex justify-content-between align-content-center align-items-center">
                    <p class="white small mx-0 my-0">&copy; CarApp LLC.</p>
                    <div class="d-flex justify-content-center align-content-center align-items-center">
                        <a href=""><i class="fab fa-facebook-f px-3 white"></i></a>
                        <a href=""><i class="fab fa-instagram px-3 white"></i></a>
                        <a href=""><i class="fab fa-twitter px-3 white"></i></a>
                    </div>
                </div>
            </div>
        </div>

    </div>
@endsection

@section('custom-scripts')
    <script>
        $("#down-arrow").click(function () {
            $('html, body').animate({
                scrollTop: $("#how-it-works").offset().top - 60
            }, 1250);
        });
    </script>
@endsection

