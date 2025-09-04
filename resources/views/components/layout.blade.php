<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
 <meta charset="utf-8">
 <meta name="viewport" content="width=device-width, initial-scale=1">
 <title>{{ $title ?? env('APP_NAME') }}</title>
 @php
 $cssPath = 'resources/css/' . ($stylesheet ?? 'app.css');
 $jsPath = 'resources/js/' . ($script ?? 'app.js');
 @endphp

 @vite(['resources/css/app.css', $cssPath, $jsPath])
</head>

<body>
 <div class="wrapper">
  {{ $slot }}
 </div>
</body>

</html>