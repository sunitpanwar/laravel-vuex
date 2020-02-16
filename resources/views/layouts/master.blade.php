<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        @include('includes.head')
    </head>
    <body class="text-center">
        <div id="app">
            <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">
                <header class="masthead mb-auto">
                    @include('includes.header')
                </header>
                <main role="main" class="inner cover">
                    @yield('content')
                </main>
                <footer class="mastfoot mt-auto">
                    @include('includes.footer')
                </footer>
            </div>
        </div>
        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
