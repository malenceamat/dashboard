@extends('admin.main')
@section('dashboard')
    <style>
        .sem {
            word-wrap: break-word !important;
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
                <th class="ps-0 text-center" scope="col" style="border-right: 1px solid #000000;color: black">Название</th>
                <th class="text-center" style="border-right: 1px solid #000000;color: black">Фактические значения</th>
                <th class="text-center" scope="col" style="border-right: 1px solid #000000;color: black">Плановые значения</th>
                <th class="text-center" scope="col" style="border-right: 1px solid #000000;color: black">% Выполнения</th>
                <th class="text-center" scope="col" style="border-right: 1px solid #000000;color: black">Итого</th>
                <th>
                </th>
            </tr>
            <tr aria-hidden="true" class="mt-3 d-block table-row-hidden"></tr>
            </thead>
            <tbody>

            @foreach($data as $me)
                <tr>
                    <td class="text-center sem" style="text-align: left!important;border-right: 1px solid #000000;color: black">{!! $me['name'] !!}<span>{!! $me['sub_name'] !!}</span></td>
                    <td class="text-center" style="border-right: 1px solid #000000;color: black">{{$me['plan']}}</td>
                    <td class="text-center" style="border-right: 1px solid #000000;color: black">{{$me['fact']}}</td>
                    <td class="text-center" style="border-right: 1px solid #000000;color: black">{{$me['percent']}}</td>
                    <td class="text-center" style="border-right: 1px solid #000000;color: black"><span>{{$me['result']}}</span></td>
                    <td class="text-center">
                        <div class="action-btns">
                            <form method="POST" action="/dashboard/{{$me->id}}">
                                @csrf
                                {{method_field('DELETE')}}
                                <button class="btn btn-danger mb-2 me-4">Удалить</button>
                            </form>
                            <form method="get" action="/dashboard-create/{{$me->id}}">
                                @csrf
                                <button class="btn btn-outline-secondary mb-2 me-4" style="margin: 10px">Редактировать
                                </button>
                            </form>
                        </div>
                    </td>
                </tr>
            @endforeach
            </tbody>
        </table>
    </div>
@endsection
