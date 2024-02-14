@extends('admin.main')
@section('dashboard')
    <style>
        .sem {
            white-space: normal !important;
        }
    </style>
    <form action="/dashboard-create">
        @csrf
        <button class="btn btn-outline-secondary mb-2 me-4" style="margin: 10px">Создать строку</button>
    </form>
    <div class="table-responsive">
        <table class="table table-hover">
            <thead>
            <tr>
                <th class="col" scope="col">Название</th>
                <th class="text-center" scope="col">Спец. часть</th>
                <th class="text-center" scope="col">Базовая часть</th>
                <th class="text-center" scope="col">Итого</th>
                <th>
                </th>
            </tr>
            <tr aria-hidden="true" class="mt-3 d-block table-row-hidden"></tr>
            </thead>
            <tbody>
            @foreach($data as $me)
            <tr>
                <td class="text-center sem" style="text-align: left!important;">{!! $me['name'] !!}
                        <span>{!! $me['sub_name'] !!}</span>
                </td>
                <td class="text-center">
                    <span class="text-center">{{$me['special']}}</span>
                </td>
                <td class="text-center">{{$me['base']}}</td>
                <td class="text-center">
                    {{$me['result']}}
                </td>
                <td class="text-center">
                    <div class="action-btns">
                        <form method="POST" action="/dashboard/{{$me->id}}">
                            @csrf
                            {{method_field('DELETE')}}
                            <button class="btn btn-danger mb-2 me-4">Удалить</button>
                        </form>
                        <form method="get" action="/dashboard-create/{{$me->id}}">
                            @csrf
                            <button class="btn btn-outline-secondary mb-2 me-4" style="margin: 10px">Редактировать</button>
                        </form>
                    </div>
                </td>
            </tr>
            @endforeach
            </tbody>
        </table>
    </div>
@endsection
