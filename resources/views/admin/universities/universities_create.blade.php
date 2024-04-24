@extends('admin.main')
@section('universities_create')
    <style>
        .modal-content {
            background-color: white;
        }
    </style>


    @foreach($university as $el)
        <div class="modal fade" id="exampleModal-{{$el['id']}}-" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Изменение института</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                 stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
                            </svg>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="col-lg-12 col-12">
                            <form action={{route('university.update')}} method="POST">
                                @csrf
                                <div class="form-group">
                                    <label for="t-text">Название института</label>
                                    <input id="t-text" type="text" name="name" placeholder="Название показателя"
                                           class="form-control" value="{{$el['name']}}" required>
                                    <br>
                                    <input type="submit" class="btn btn-light-success" value="Обновить">
                                    <input type="hidden" name="id" value="{{$el['id']}}">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    @endforeach

    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Добавление института</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                             viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                             stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
                        </svg>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="col-lg-12 col-12">
                        <form action='{{route('university.create')}}' method="POST">
                            @csrf
                            <div class="form-group">
                                <p>Название института</p>
                                <label for="t-text" class="visually-hidden">Text</label>
                                <input id="t-text" type="text" name="name" placeholder="Название института"
                                       class="form-control" required>
                                <br>
                                <input type="submit" class="btn btn-light-success" value="Добавить">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <table id="zero-config" class="table table-bordered" style="width:100%">
        <thead>
        <tr>
            <th class="text-center">Институты</th>
            <th class="text-center">
                <div style="display: inline-block">
                    <div class="text-center" style="text-align: center">
                        Действия
                    </div>
                </div>
                <div class="text-center" style="float:right; display: inline-block">
                    <button type="button" class="btn btn-light-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Добавить институт
                    </button>
                </div>
            </th>
        </tr>
        <tr aria-hidden="true" class="mt-3 d-block table-row-hidden"></tr>
        </thead>
        <tbody>
        @foreach($university as $un)
            <tr>
                <td class="text-center">{{$un['name']}}</td>
                <td class="text-center">
                    <a data-bs-toggle="modal" data-bs-target="#exampleModal-{{$un['id']}}-">
                        <button class="btn btn-light-warning">Редактировать</button>
                    </a>
                    <form style="display: inline-block" method="POST" action="/admin/universities/{{$un->id}}">
                        @csrf
                        <button class="btn btn-light-danger">Удалить</button>
                    </form>
            </tr>
        @endforeach
        </tbody>
    </table>
@endsection
