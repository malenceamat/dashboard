@extends('admin.main')
@section('indicator_edit')
    <style>
        .sem {
            white-space: pre-line !important;
            word-wrap: break-word !important;
        }
        .image img{
            width: 100%;
            height: 100%;
        }
    </style>

    <div class="col-lg-12 col-12">
    <div class="table-responsive">
        <table class="table table-bordered">
            <thead>
            <tr>
                <th class="text-center" >
                    Институты
                </th>
                <th class="text-center">Описание</th>
                <th class="text-center" >Плановое
                    значение
                </th>
                <th class="text-center" >Фактическое
                    значение
                </th>
                <th class="text-center" >Выполнено
                </th>
                <th class="text-center" >Дата обновления
                </th>
                <th class="text-center">
                    <div class="action-btns">
                        <a href="/dashboard/admin/program_create/{{$indicator['id']}}">
                            <button class="btn btn-light-success">Добавить строку
                            </button>
                        </a>
                    </div>
                </th>
            </tr>
            <tr aria-hidden="true" class="mt-3 d-block table-row-hidden"></tr>
            </thead>
            <tbody>
                @foreach($data as $el)
                    <tr style="word-break: break-all">
                        <td class="text-center">{{$el['university_name']}}</td>
                        <td class="text-center sem image" >{!! $el['description'] !!}</td>
                        <td class="text-center">{{$el['plan']}}</td>
                        <td class="text-center">{{$el['fact']}}</td>
                        <td class="text-center">{{$el['percent']}} %</td>
                        <td class="text-center">{{$el['date']}}</td>
                        <td class="text-center" style="width: 20%;">
                                <form style="display: inline" method="get"
                                      action="/dashboard/admin/program_show/{{$el['indicator_id']}}">
                                    <button class="btn btn-light-warning">Редактировать
                                    </button>
                                    <input type="hidden" value="{{$el['id']}}" name="id_indicator">
                                    <input type="hidden" value="{{$el['university_id']}}" name="university_id">
                                </form>
                                <form style="display: inline" method="POST"
                                      action="/dashboard/admin/delete_column/{{$el['indicator_id']}}">
                                    @csrf
                                    <button class="btn btn-light-danger">Удалить</button>
                                    <input type="hidden" value="{{$el['id']}}" name="id_indicator">
                                    <input type="hidden" value="{{$el['university_id']}}" name="university_id">
                                </form>
                        </td>
                    </tr>
                @endforeach
            </tbody>

                <thead>
                <tr aria-hidden="true" class="mt-3 d-block table-row-hidden"></tr>
                <tr>
                <th style="border-right: 1px solid #ebedf2; border-bottom-right-radius: 10px; border-top-right-radius: 10px" class="text-center">Итого:</th>
                <th style="border: 0px"></th>
                <th style="border-bottom-left-radius: 10px; border-top-left-radius: 10px" class="text-center">{{$totals['total_plan']}}</th>
                <th class="text-center">{{$totals['total_fact']}}</th>
                <th style="border-bottom-right-radius: 10px; border-top-right-radius: 10px" class="text-center">{{$totals['total_percent']}} %</th>
                <th style="border: 0px"></th>
                <th style="border: 0px"></th>
                </tr>
                </thead>

        </table>
    </div>
    </div>
@endsection