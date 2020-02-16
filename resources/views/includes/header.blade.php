@if (Route::has('login'))
<div class="top-right links">
    @auth
        <a href="{{ url('/home') }}">Home</a>
    @else
        <a href="{{ route('login') }}">Login</a>

        @if (Route::has('register'))
            <a href="{{ route('register') }}">Register</a>
        @endif
    @endauth
</div>
@endif

<div class="inner">
  <h3 class="masthead-brand">Cover</h3>
  <nav class="nav nav-masthead justify-content-center">
    <router-link to="/" exact class="nav-link" active-class="active"><a>Home</a></router-link>
    <router-link to="/features" class="nav-link" active-class="active"><a>Features</a></router-link>
    <router-link to="/contact" class="nav-link" active-class="active"><a>Contact</a></router-link>
  </nav>
</div>
