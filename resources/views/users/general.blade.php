@extends('users.main')
<link href={{asset("dashboard/publicsrc/plugins/src/apex/apexcharts.css")}} rel="stylesheet" type="text/css">
<link href={{asset("dashboard/publicsrc/assets/css/light/components/list-group.css")}} rel="stylesheet" type="text/css">
<link href={{asset("dashboard/publicsrc/assets/css/light/dashboard/dash_2.css")}} rel="stylesheet" type="text/css"/>
<link href={{asset("https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css")}} rel="stylesheet">
@section('dashboard_user')
    <style>
        .sem {
            white-space: pre-line !important;
            word-wrap: break-word !important;
        }
    </style>
    <div id="tableBordered" class="col-lg-12 col-12 layout-spacing">
        <div class="statbox widget box box-shadow">
            <div class="widget-header">
                <div class="row">
                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                        <br>
                        <h4 class="text-center">Цели ДПО. 2024</h4>
                    </div>
                </div>
            </div>
            <div class="widget-content widget-content-area">
                <div class="table-responsive">
                    <table class="table table-bordered" >
                        <thead>
                        <tr>
                            <th class="text-center">Название показателя</th>
                            <th class="text-center" scope="col"
                            >Описание
                            </th>
                            <th class="text-center">
                                Плановое значение
                            </th>
                            <th class="text-center" scope="col"
                            >Фактическое значение
                            </th>
                            <th class="text-center">
                                Выполнено
                            </th>
                        </tr>
                        <tr aria-hidden="true" class="mt-3 d-block table-row-hidden"></tr>
                        </thead>
                        <tbody>
                        @foreach($indicators as $indicator)
                            <tr style="word-break: break-all">
                                <td class="text-center">{{$indicator['name']}}</td>
                                <td class="text-center sem" >{!!$indicator['description']!!}</td>
                                <td class="text-center">{{$indicator['planned']}}</td>
                                <td class="text-center">{{$indicator['fact']}}</td>
                                <td class="text-center">{{$indicator['percent']}} %</td>
                            </tr>
                        @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    @foreach($indicators as $indicator)
        <div id="tableHover" class="col-lg-12 col-10 layout-spacing">
            <div class="statbox widget box box-shadow">
                <div class="widget-header">
                    <div class="row">
                        <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                            <br>

                            <h4 class="text-center">{{$indicator['name']}}</h4>
                        </div>
                    </div>
                </div>
                <div class="widget-content widget-content-area">
                    <div class="table-responsive" id="indicator_table-{{$indicator['id']}}">
                        {{--                @include('users.elements.indicator-table')--}}
                    </div>
                    <div id="chart_table-{{$indicator['id']}}">
                        {{--                                                @include('users.elements.chart-table')--}}
                    </div>
                </div>
            </div>
        </div>
    @endforeach
    <script>
        window.onload = () => {
            @foreach($indicators as $indicator)
            loadTable({{$indicator['id']}});
            changeChart({{$indicator['id']}});
            @endforeach

        }

        function loadTable(id) {
            $.ajax({
                    url: '{{route('ajax.update-table')}}',
                    type: "POST",
                    data: {
                        _token: "{{ csrf_token() }}",
                        indicator: id,
                    },
                    success: function (data) {
                        $('#indicator_table-' + id).html(data);

                    },
                }
            )
        }

        function changeChart(id) {
            $.ajax({
                    url: '{{route('ajax.update-chart')}}',
                    type: "POST",
                    data: {
                        _token: "{{ csrf_token() }}",
                        indicator: id,
                    },
                    success: function (data) {
                        $('#chart_table-' + id).html(data);

                    },
                }
            )
        }

    </script>
    <script src="{{asset('https://cdn.jsdelivr.net/npm/chart.js')}}"></script>

@endsection