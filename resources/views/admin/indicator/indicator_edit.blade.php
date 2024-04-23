@extends('admin.main')
<link rel="stylesheet" type="text/css" href={{asset("src/plugins/src/vanillaSelectBox/vanillaSelectBox.css")}}>
<link rel="stylesheet" type="text/css"
      href={{asset("src/plugins/css/light/vanillaSelectBox/custom-vanillaSelectBox.css")}}>
@section('indicator_edit')
    <style>
        .sem {
            white-space: pre-line !important;
            word-wrap: break-word !important;
        }
    </style>
    <div class="row">

        <table style="width: 100%" class="table table-bordered">
            <form action={{route('indicator.update')}} method="POST">
                @csrf
                <input type="hidden" name="id" value="{{$indicator['id']}}">
                <thead>
                <tr>
                    <th style="width: 11%">
                        Название показателя:
                    </th>
                    <th class="text-center">
                        <input id="t-text" type="text" name="name" placeholder="Название показателя"
                               class="form-control"
                               value="{{$indicator['name']}}" required>
                    </th>
                    <th style="width: 11%" class="text-center">
                        <input type="submit" class="btn btn-light-success" value="Обновить">
                    </th>
                </tr>
                </thead>
            </form>
        </table>

    </div>



    <div class="table-responsive">
        <table class="table table-bordered">
            <thead>
            <tr>
                <th class="text-center" >
                    Институты
                </th>
                <th class="text-center">Описание</th>
                <th class="text-center" >Плановое<br>
                    значение
                </th>
                <th class="text-center" >Фактическое<br>
                    значение
                </th>
                <th class="text-center" >Выполнено
                </th>
                <th class="text-center" >Дата<br>обновления
                </th>
                <th class="text-center">
                    <div class="action-btns">
                        <a href="/admin/program_create/{{$indicator['id']}}">
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
                    <tr>
                        <td class="text-center">{{$el['university_name']}}</td>
                        <td class="text-center sem">{!! $el['description'] !!}</td>
                        <td class="text-center">{{$el['plan']}}</td>
                        <td class="text-center">{{$el['fact']}}</td>
                        <td class="text-center">{{$el['percent']}} %</td>
                        <td class="text-center">{{$el['date']}}</td>
                        <td class="text-center">
                            <div class="action-btns">
                                <form style="display: inline" method="get"
                                      action="/admin/program_show/{{$el['indicator_id']}}">
                                    <button class="btn btn-light-warning">Редактировать
                                    </button>
                                    <input type="hidden" value="{{$el['id']}}" name="id_indicator">
                                    <input type="hidden" value="{{$el['university_id']}}" name="university_id">
                                </form>
                                <form style="display: inline" method="POST"
                                      action="/admin/delete_column/{{$el['indicator_id']}}">
                                    @csrf
                                    <button class="btn btn-light-danger">Удалить</button>
                                    <input type="hidden" value="{{$el['id']}}" name="id_indicator">
                                    <input type="hidden" value="{{$el['university_id']}}" name="university_id">
                                </form>
                            </div>
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
@endsection
<script src={{asset("../src/assets/js/scrollspyNav.js")}}></script>
<script src={{asset("../src/plugins/src/vanillaSelectBox/vanillaSelectBox.js")}}></script>
<script src={{asset("../src/plugins/src/vanillaSelectBox/custom-vanillaSelectBox.js")}}></script>