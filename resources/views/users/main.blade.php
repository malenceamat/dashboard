<!DOCTYPE html>
<html lang="zxx" class="js">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <link rel="shortcut icon" href={{asset("dashboard/public/images/logo-novgu-blue.png")}}>
    <title>Цифровая Кафедра</title>
    <link rel="stylesheet" href={{asset("dashboard/public/assets/css/vendor.bundle.css")}}>
    <link rel="stylesheet" href={{asset("dashboard/public/assets/css/style-azure.css")}}>
    <link rel="stylesheet" href={{asset("dashboard/public/assets/css/theme.css")}}>
    <link href={{asset("dashboard/public/layouts/vertical-dark-menu/css/light/plugins.css")}} rel="stylesheet" type="text/css" />
    <link href={{asset("dashboard/public/layouts/vertical-dark-menu/css/dark/plugins.css")}} rel="stylesheet" type="text/css" />
    <style>
        font-face {
            font-family: 'PT Sans', sans-serif;
        }
    </style>
</head>
<body class="nk-body ">
<div class="nk-wrap">
    <header class="nk-header page-header is-transparent is-sticky is-shrink is-dark has-fixed" id="header">
        @include('users.header')
    </header>
    <br>
    <br>
    <br>
    <br>
    <div class="container">
        @yield('dashboard_user')
    </div>
    @include('users.footer')
</div>
<div class="preloader"><span class="spinner spinner-round"></span></div>
<script src={{asset("dashboard/public/assets/js/jquery.min.js")}}></script>
<script src={{asset("dashboard/public/assets/js/jquery.bundle.js")}}></script>
<script src={{asset("dashboard/public/assets/js/scripts.js")}}></script>
<script src={{asset("dashboard/public/assets/js/charts.js")}}></script>
<script src={{asset("https://cdn.jsdelivr.net/npm/apexcharts") }}></script>
</body>
</html>
