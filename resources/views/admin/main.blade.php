<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no">
    <title>Admin</title>
    <link rel="icon" type="image/x-icon" href={{asset("../src/assets/img/favicon.ico")}}/>
    <link href={{asset("/layouts/vertical-dark-menu/css/light/loader.css")}} rel="stylesheet" type="text/css"/>
    <script src={{asset("/layouts/vertical-dark-menu/loader.js")}}></script>
    <link href={{asset("https://fonts.googleapis.com/css?family=Nunito:400,600,700")}} rel="stylesheet">
    <link href={{asset("/src/bootstrap/css/bootstrap.min.css")}} rel="stylesheet" type="text/css"/>
    <link href={{asset("/layouts/vertical-dark-menu/css/light/plugins.css")}} rel="stylesheet" type="text/css"/>
    <link rel="stylesheet" type="text/css" href={{asset("../src/plugins/css/light/editors/quill/quill.snow.css")}}>
    <script src={{asset("https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js")}}></script>
    <script src={{asset("https://npmcdn.com/flatpickr/dist/l10n/ru.js") }}></script>
    <link href={{asset("../src/plugins/src/flatpickr/flatpickr_custom.css")}} rel="stylesheet" type="text/css">
</head>
<body class="layout-boxed">
@include('admin.navbar')
<div class="main-container " id="container">
    <div class="container">
        <div class="row layout-top-spacing">
            <div id="fuSingleFile" class="col-lg-12 layout-spacing">
                <div class="statbox widget box box-shadow">
                    @if ($errors->any())
                        <div class="alert alert-danger mt-1 mb-1">
                            <ul>
                                @foreach ($errors->all() as $error)
                                    <li>{{ $error }}</li>
                                @endforeach
                            </ul>
                        </div>
                </div>
                <br>
                @endif
                <div class="widget-content widget-content-area">
                    @yield('program_create')
                    @yield('program_update')
                    @yield('indicator_create')
                    @yield('indicator_edit')
                    @yield('universities_edit')
                    @yield('universities_create')
                </div>
            </div>
        </div>
    </div>
</div>


<script src={{asset("../src/bootstrap/js/bootstrap.bundle.min.js")}}></script>
<script src={{asset("../src/plugins/src/perfect-scrollbar/perfect-scrollbar.min.js")}}></script>
<script src={{asset("../src/plugins/src/mousetrap/mousetrap.min.js")}}></script>
<script src={{asset("../layouts/vertical-dark-menu/app.js")}}></script>

</body>
</html>

