@extends('admin.main')
@section('dashboard')
    <style>
        .sem {
            word-wrap: break-word !important;
            white-space: normal !important;
        }
    </style>
    <div class="table-responsive">
        <table class="table table-bordered">
            <thead>
            <tr>
                <th class="ps-0 text-center" >

                        <form  action="/admin/dashboard-create" style="float:left">
                            @csrf
                            <button class="btn btn-light-success mb-2 me-4" style="margin: 10px">Создать строку</button>
                        </form>
                    Описание
                </th>
                <th class="text-center">Фактические значения</th>
                <th class="text-center">Плановые значения</th>
                <th class="text-center">Выполнено</th>
                <th class="text-center">Действия</th>
            </tr>
            <tr aria-hidden="true" class="mt-3 d-block table-row-hidden"></tr>
            </thead>
            <tbody>

            @foreach($data as $me)
                <tr>
                    <td class="text-center sem">{!! $me['name'] !!}<span>{!! $me['sub_name'] !!}</span></td>
                    <td class="text-center">{{$me['plan']}}</td>
                    <td class="text-center">{{$me['fact']}}</td>
                    <td class="text-center">{{$me['percent']}} %</td>
                    <td class="text-center">
                        <div class="action-btns">
                            <form style="display: inline-block" method="get" action="/admin/dashboard-create/{{$me->id}}">
                                @csrf
                                <button class="btn btn-light-warning" >Редактировать
                                </button>
                            </form>
                            <form style="display: inline-block" method="POST" action="/admin/dashboard/{{$me->id}}">
                                @csrf
                                {{method_field('DELETE')}}
                                <button class="btn btn-light-danger">Удалить</button>
                            </form>
                        </div>
                    </td>
                </tr>
            @endforeach
            </tbody>
        </table>
    </div>
@endsection
