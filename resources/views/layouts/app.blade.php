<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>CarApp</title>

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

    {{-- ICONS --}}
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
          integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">

    {{-- ANIMATE LIBRARY --}}
    <link rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css">

    <script
            src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
            integrity="sha256-3edrmyuQ0w65f8gfBsqowzjJe2iM6n0nKciPUp8y+7E="
            crossorigin="anonymous">
    </script>

</head>
<body>
<div id="app">
    <nav class="navbar navbar-expand-md fixed-top  @auth blue-bg @endauth" id="Navigation">
        {{--<div class="container">--}}
        <a class="navbar-brand white "
           href="{{ url('/') }}">
            {{ config('app.name', 'Laravel') }}
        </a>
        <a class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
           aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="material-icons {{ Request::is('login') || Request::is('register') ? 'dark-grey' : 'white' }}">
                menu
            </i>
        </a>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <!-- Left Side Of Navbar -->
            <ul class="navbar-nav mr-auto">

            </ul>

            <!-- Right Side Of Navbar -->
            <ul class="navbar-nav ml-auto">
                <!-- Authentication Links -->
                @guest
                    @if (Request::is('login'))
                        <li class="nav-link mr-md-0 mr-3">Don't have an account?</li>
                        <li>
                            <a class="{{ Request::is('login') || Request::is('register') ? 'dark-grey' : 'white' }} button blue circle transparent-blue"
                               href="{{ route('register') }}">{{ __('Register') }}</a></li>
                    @elseif (Request::is('register'))
                        <li class="nav-link mr-md-0 mr-3"><p>Already have an account?</p></li>
                        <li>
                            <a class="{{ Request::is('login') || Request::is('register') ? 'dark-grey' : 'white' }} button blue circle transparent-blue"
                               href="{{ route('login') }}" href="{{ route('login') }}">{{ __('Login') }}</a></li>
                    @else
                        @if (Route::has('login'))
                            <div class="top-right links">
                                @auth
                                    <a class="white" href="{{ url('/home') }}">Dashboard</a>
                                @else
                                    <a class="white" href="#how-it-works">How it Works</a>
                                    <a class="white" href="#features">Features</a>
                                    <a class="white" href="{{ route('login') }}">Login</a>
                                    <a class="white nav-button" href="{{ route('register') }}">Sign Up</a>
                                @endauth
                            </div>
                        @endif
                    @endif
                @else
                    <li><a class="nav-link white dash-links" href="/dashboard">Dashboard</a></li>
                    <li><a class="nav-link white dash-links" href="/home/messages">Messages</a></li>
                    <li><a class="nav-link white dash-links" href="/home/buy">Buy</a></li>
                    <li><a class="nav-link white dash-links" href="/home/sell">Sell</a></li>
                    <li><a class="nav-link white dash-links" href="/home/browse-all">Browse All</a></li>
                    <li class="nav-item dropdown">
                        <a id="navbarDropdown" class="nav-link white dropdown-toggle" href="#" role="button"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                            {{ Auth::user()->name }} <i class="fas fa-angle-down ml-1"></i>
                        </a>

                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <div class="top">
                                <div class="left">
                                    <i class="fas fa-user blue"></i>
                                </div>
                                <div class="right">
                                    <p class="name">{{ Auth::user()->name }} {{ Auth::user()->last_name }}</p>
                                    <p class="email">{{ Auth::user()->email }}</p>
                                </div>
                            </div>
                            <hr>

                            <a class="dropdown-item" href="{{ route('logout') }}"
                               onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                {{ __('Logout') }}
                            </a>

                            <form id="logout-form" action="{{ route('logout') }}" method="POST"
                                  style="display: none;">
                                @csrf
                            </form>
                        </div>
                    </li>
                @endguest
            </ul>
        </div>
        {{--</div>--}}
    </nav>

    {{-- MAIN CONTENT --}}
    <main class="py-0">
        @yield('content')

        {{--ROOT FOR REACT FRONT END--}}
        <div id="root"></div>
    </main>

</div>

@yield('custom-scripts')

<!-- Scripts -->
<script defer src="{{ asset('js/app.js') }}"></script>


<script>
    $(window).scroll(function () {
        $('#Navigation').toggleClass('scrolled', $(this).scrollTop() > 200);
    });
</script>
</body>
</html>
