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
                            style="border-right: 1px solid #000000;color: black">Название
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
                            <th class="text-center" scope="col">Итого</th>
                        </tr>
                        <tr aria-hidden="true" class="mt-3 d-block table-row-hidden"></tr>
                        </thead>
                        <tbody>
                        @foreach($data as $dashboard)
                            <tr>
                                <td class="text-center sem"
                                    style="text-align: justify!important;border-right: 1px solid #000000;color: black">{!! $dashboard['name'] !!}
                                    <br>
                                    <span>{!! $dashboard['sub_name'] !!}</span>
                                </td>
                                <td class="text-center"
                                    style="border-right: 1px solid #000000;color: black">{{$dashboard['fact']}}</td>
                                <td class="text-center"
                                    style="border-right: 1px solid #000000;color: black">{{$dashboard['plan']}}</td>
                                <td class="text-center"
                                    style="border-right: 1px solid #000000;color: black">{{$dashboard['percent']}} </td>
                                <td class="text-center">
                                    <span>{{$dashboard['result']}}</span>
                                </td>
                            </tr>
                        @endforeach
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    </div>












    <div id="tableHover" class="col-lg-12 col-12 layout-spacing">
        <div class="statbox widget box box-shadow">
            <div class="widget-header">
                <div class="row">
                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                        <br>
                        <h4 class="text-center">Показатели</h4>
                    </div>
                </div>
            </div>
            <div class="widget-content widget-content-area">
                <div class="table-responsive">
                    <table class="table table-hover">
                        <thead>
                        <tr>
                            <th class="ps-0 text-center" scope="col"
                                style="border-right: 1px solid #000000;color: black">Институты
                            </th>
                            <th class="text-center" colspan="3" style="border-right: 1px solid #000000;color: black">
                                План
                            </th>
                            <th class="text-center" scope="col" colspan="3"
                                style="border-right: 1px solid #000000;color: black">Фактические значения
                            </th>

                            <th class="text-center" scope="col">Итого</th>
                        </tr>
                        <tr aria-hidden="true" class="mt-3 d-block table-row-hidden"></tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td style="border-right: 1px solid #000000;color: black"></td>
                            <td rowspan="1" class="text-center">ПК</td>
                            <td colspan="1" class="text-center">ПП</td>
                            <td colspan="1" class="text-center" style="border-right: 1px solid #000000;color: black">
                                Итог
                            </td>

                            <td rowspan="1" class="text-center">ПК</td>
                            <td colspan="1" class="text-center">ПП</td>
                            <td colspan="1" class="text-center" style="border-right: 1px solid #000000;color: black">
                                Итог
                            </td>
                        </tr>

                        @foreach($data as $dashboard)
                            <tr>
                                <td class="text-center sem"
                                    style="text-align: justify!important;border-right: 1px solid #000000;color: black">{!! $dashboard['name'] !!}
                                    <br>
                                    <span>{!! $dashboard['sub_name'] !!}</span>
                                </td>
                                <td class="text-center">{{$dashboard['spec_plan']}}</td>
                                <td class="text-center">{{$dashboard['spec_fact']}}</td>
                                <td class="text-center" style="border-right: 1px solid #000000;color: black">{{$dashboard['spec_percent']}}</td>
                                <td class="text-center">{{$dashboard['base_plan']}}</td>
                                <td class="text-center">{{$dashboard['base_fact']}}</td>
                                <td class="text-center" style="border-right: 1px solid #000000;color: black">{{$dashboard['base_percent']}}</td>
                                <td class="text-center">
                                    <span>{{$dashboard['result']}}</span>
                                </td>
                            </tr>
                        @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>


@endsection