@extends('users.main')
@section('dashboard_user')
    <style>
        .sem {
            white-space: normal !important;
            max-width:400px !important;
            word-wrap:break-word !important;
        }
        li{

        }
    </style>
    <div id="tableHover" class="col-lg-12 col-12 layout-spacing">
        <div class="statbox widget box box-shadow">
            <div class="widget-header">
                <div class="row">
                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                        <h4 class="text-center">Цели ДПО. 2024</h4>
                    </div>
                </div>
            </div>
            <div class="widget-content widget-content-area">
                <div class="table-responsive">
                    <table class="table table-hover">
                        <thead>
                        <tr>
                            <th class="ps-0 text-center" scope="col">Название</th>
                            <th class="text-center">Фактические значения</th>
                            <th class="text-center" scope="col">Плановые значения</th>
                            <th class="text-center" scope="col">Процент выполнения</th>
                        </tr>
                        <tr aria-hidden="true" class="mt-3 d-block table-row-hidden"></tr>
                        </thead>
                        <tbody>
                        @foreach($data as $dashboard)
                            <tr>
                                <td class="text-center sem" style="text-align: left!important;">{!! $dashboard['name'] !!}
                                    <br>
                                <span>{!! $dashboard['sub_name'] !!}</span>
                                </td>
                                <td class="text-center">{{$dashboard['special']}}</td>
                                <td class="text-center">{{$dashboard['base']}}</td>
                                <td class="text-center">
                                    <span>{{$dashboard['percent']. '%'}}</span>
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
