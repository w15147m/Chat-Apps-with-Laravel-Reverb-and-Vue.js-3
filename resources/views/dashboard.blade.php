<x-app-layout>
    <div id="app">
          @auth
        <script>
            window.user = @json(auth()->user());
        </script>
    @endauth
    </div>
</x-app-layout>
