@extends('users.main')
@section('dashboard_user')
    <style>
        .sem {
            white-space: pre-line !important;
            word-wrap: break-word !important;
        }
    </style>

    <div id="tableHover" class="col-lg-12 col-12 layout-spacing">
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
                    <table class="table table-hover">
                        <thead>
                        <tr>
                            <th class="ps-0 text-center" scope="col"
                                style="border-right: 1px solid #000000;color: black">Описание
                            </th>
                            <th class="text-center" scope="col"
                                style="border-right: 1px solid #000000;color: black">Фактическое значение
                            </th>
                            <th class="text-center" style="border-right: 1px solid #000000;color: black">
                                Плановое значение
                            </th>
                            <th class="text-center" style="border-right: 1px solid #000000;color: black">
                                % Выполенения
                            </th>
                        </tr>
                        <tr aria-hidden="true" class="mt-3 d-block table-row-hidden"></tr>
                        </thead>
                        <tbody>
                        @foreach($data as $dashboard)
                            <tr>
                                <td class="text-center sem"
                                    style="text-align: justify!important;border-right: 1px solid #000000;color: black">{!! $dashboard['name'] !!}
                                    <br>
                                </td>
                                <td class="text-center"
                                    style="border-right: 1px solid #000000;color: black">{{$dashboard['fact']}}</td>
                                <td class="text-center"
                                    style="border-right: 1px solid #000000;color: black">{{$dashboard['plan']}}</td>
                                <td class="text-center"
                                    style="border-right: 1px solid #000000;color: black">{{$dashboard['percent']}} </td>
                            </tr>
                        @endforeach
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    </div>






    @foreach($indicator as $table)
        <div id="tableHover" class="col-lg-12 col-12 layout-spacing">
            <div class="statbox widget box box-shadow">
                <div class="widget-header">
                    <div class="row">
                        <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                            <br>
                            <h4 class="text-center">{{$table['name']}}</h4>
                        </div>
                    </div>
                </div>
                <div class="widget-content widget-content-area">
                    <div class="table-responsive">
                        <table class="table table-hover">
                            <thead>
                            <tr>
                                <th class="text-center" scope="col"
                                    style="border-right: 1px solid #000000;color: black">Институты
                                </th>
                                <th class="ps-0 text-center" scope="col"
                                    style="border-right: 1px solid #000000;color: black">Описание
                                </th>
                                <th class="text-center" scope="col"
                                    style="border-right: 1px solid #000000;color: black">Фактическое значение
                                </th>
                                <th class="text-center" style="border-right: 1px solid #000000;color: black">
                                    Плановое значение
                                </th>
                                <th class="text-center" style="border-right: 1px solid #000000;color: black">
                                    % Выполенения
                                </th>
                            </tr>
                            <tr aria-hidden="true" class="mt-3 d-block table-row-hidden"></tr>
                            </thead>
                            <tbody>
                            @foreach($table->programs as $column)
                                @foreach($column->universities_program as $data)
                                    <tr>
                                        <td class="text-center" style="border-right: 1px solid #000000;color: black">
                                            {{$data['name']}}
                                        </td>
                                        <td class="text-center sem"
                                            style="text-align: justify!important;border-right: 1px solid #000000;color: black">{!! $column['name'] !!}
                                            <br>
                                        </td>
                                        <td class="text-center"
                                            style="border-right: 1px solid #000000;color: black">{{$column['fact']}}</td>
                                        <td class="text-center"
                                            style="border-right: 1px solid #000000;color: black">{{$column['plan']}}</td>
                                        <td class="text-center"
                                            style="border-right: 1px solid #000000;color: black">{{$column['percent']}} </td>
                                    </tr>
                                @endforeach
                            @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    @endforeach

@endsection