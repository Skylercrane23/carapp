@extends('layouts.app')

@section('content')
    <div id="register" class="animated fadeIn">
        <div class="container-fluid">
            <div class="row" id="row-container">
                <div class="col-lg-4 col-md-4 blue-bg d-none d-md-block sidebar">
                    <div class="sidebar-content text-center">
                        <h3 class="white">Sellers</h3>
                        <p class="white">Sellers can proactively search for posts that match their vehicle.</p>
                        <a href="/#how-it-works" class="button white transparent-white circle">Learn More</a>
                    </div>
                </div>
               <div class="col-lg-8 col-md-8 white-bg">
                    <div class="form-container">
                        <h3>Get Started with CarApp</h3>
                        <p>Please enter your details below.</p>
                        <form class="mt-4 register-form" method="POST" action="{{ route('register') }}">
                            @csrf

                            <div class="form-group row">
                                <div class="col-sm-12">
                                    <label for="name" class="col-form-label"><i class="fas fa-user mr-2 blue"></i>{{ __('Name') }}</label>
                                    <input id="name" type="text"
                                           class="form-control{{ $errors->has('name') ? ' is-invalid' : '' }}" name="name"
                                           value="{{ old('name') }}" required autofocus>

                                    @if ($errors->has('name'))
                                        <span class="invalid-feedback">
                                        <strong>{{ $errors->first('name') }}</strong>
                                    </span>
                                    @endif
                                </div>
                            </div>

                            <div class="form-group row mb-4">

                                <div class="col-md-12">
                                    <label for="email"
                                           class="col-form-label"><i class="fas fa-envelope mr-2 blue"></i> {{ __('E-Mail Address') }}</label>
                                    <input id="email" type="email"
                                           class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email"
                                           value="{{ old('email') }}" required>

                                    @if ($errors->has('email'))
                                        <span class="invalid-feedback">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                    @endif
                                </div>
                            </div>

                            <div class="form-group row mb-4">

                                <div class="col-md-12">
                                    <label for="password"
                                           class="col-form-label"><i class="fas fa-lock mr-2 blue"></i> {{ __('Password') }}</label>
                                    <input id="password" type="password"
                                           class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}"
                                           name="password" required>

                                    @if ($errors->has('password'))
                                        <span class="invalid-feedback">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                    @endif
                                </div>
                            </div>

                            <div class="form-group row mb-4">

                                <div class="col-md-12">
                                    <label for="password-confirm"
                                           class="col-form-label"><i class="fas fa-lock mr-2 blue"></i> {{ __('Confirm Password') }}</label>
                                    <input id="password-confirm" type="password" class="form-control"
                                           name="password_confirmation" required>
                                </div>
                            </div>

                            <div class="form-group row mb-0">
                                <div class="col-md-12">
                                    <button type="submit" class="button circle blue w-290 h-auto mb-2">
                                        {{ __('Register') }}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div>
@endsection
