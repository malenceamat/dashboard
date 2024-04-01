@extends('admin.main')
@section('indicator_edit')
    <style>
        .sem {
            white-space: pre-line !important;
            word-wrap: break-word !important;
        }
    </style>
    <div class="row">
        <div class="col-lg-6 col-12 ">
            <form action="/indicator_update" method="POST">
                @csrf
                <div class="form-group">
                    <p>Название показателя</p>
                    <label for="t-text" class="visually-hidden">Text</label>
                    <input type="hidden" name="id" value="{{$indicator['id']}}">
                    <input id="t-text" type="text" name="name" placeholder="Название показателя" class="form-control"
                           value="{{$indicator['name']}}" required>
                    <input type="submit" class="mt-4 btn btn-primary" value="Обновить">
                </div>
            </form>
        </div>
    </div>
    <br>
    <div class="table-responsive">
        <table class="table table-hover">
            <thead>
            <tr>
                <th class="text-center" scope="col" style="border-right: 1px solid #000000;color: black">
                    Университет
                </th>
                <th class="text-center" style="border-right: 1px solid #000000;color: black">Описание</th>
                <th class="text-center" scope="col" style="border-right: 1px solid #000000;color: black">Фактическое
                    значение
                </th>
                <th class="text-center" scope="col" style="border-right: 1px solid #000000;color: black">Плановое
                    значение
                </th>
                <th class="text-center" scope="col" style="border-right: 1px solid #000000;color: black">% Выполнения
                </th>
                <th>
                </th>
            </tr>
            <tr aria-hidden="true" class="mt-3 d-block table-row-hidden"></tr>
            </thead>
            <tbody>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td class="text-center">
                    <div class="action-btns">
                        <a href="/program_create/{{$indicator['id']}}">
                            <button class="btn btn-outline-secondary mb-2 me-4" style="margin: 10px">Добавить строку
                            </button>
                        </a>
                    </div>
                </td>
            </tr>
            @foreach($indicator->programs as $program)
                @foreach($program->universities_program as $data)
                <tr>
                    <td class="text-center"
                        style="border-right: 1px solid #000000;color: black">{{$data['name']}}
                    </td>
                    <td class="text-center sem"
                        style="max-width: 650px;text-align: justify!important;border-right: 1px solid #000000;color: black">{!! $program['name'] !!}</td>
                    <td class="text-center"
                        style="border-right: 1px solid #000000;color: black">{{$program['fact']}}</td>
                    <td class="text-center"
                        style="border-right: 1px solid #000000;color: black">{{$program['plan']}}</td>
                    <td class="text-center"
                        style="border-right: 1px solid #000000;color: black">{{$program['percent']}}</td>
                    <td class="text-center">
                        <div class="action-btns">
                            <form method="POST" action="/delete_column/{{$program['id']}}">
                                @csrf
                                {{method_field('DELETE')}}
                                <button class="btn btn-danger mb-2 me-4">Удалить</button>
                            </form>
                            <form method="get" action="/program_show/{{$program['id']}}">
                                <button class="btn btn-outline-secondary mb-2 me-4" style="margin: 10px">Редактировать
                                </button>
                                <input type="hidden" value="{{$indicator['id']}}" name="id_indicator">
                            </form>

                        </div>
                    </td>
                </tr>
                @endforeach
            @endforeach
            </tbody>
        </table>
    </div>
@endsection