@extends('admin.main')
@section('universities_create')
    <style>
        .modal-content {
            background-color: white;
        }
    </style>


    <div class="text-center">
        <button type="button" class="btn btn-primary mr-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Добавить университет
        </button>
    </div>
    <br>
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Добавление университета</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                             viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                             stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
                        </svg>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="col-lg-12 col-12">
                        <form action="/universities_create" method="POST">
                            @csrf
                            <div class="form-group">
                                <p>Название университета</p>
                                <label for="t-text" class="visually-hidden">Text</label>
                                <input id="t-text" type="text" name="name" placeholder="Название университета"
                                       class="form-control" required>
                                <input type="submit" class="mt-4 btn btn-primary" value="Добавить">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <table id="zero-config" class="table dt-table-hover" style="width:100%">
        <thead>
        <tr>
            <th class="text-center">Университет</th>
            <th class="text-center">С каким показателем связан</th>
            <th class="text-center"></th>
        </tr>
        </thead>
        <tbody>
        @foreach($university as $un)
            <tr>
                <td class="text-center">{{$un['name']}}</td>
                <td class="text-center">Показатель 1</td>
                <td class="text-center">
                    <form method="POST" action="/universities/{{$un->id}}">
                        @csrf
                        {{method_field('DELETE')}}
                        <button class="btn btn-danger mb-2 me-4">Удалить</button>
                    </form>
                    <a href="/universities_update_show/{{$un->id}}">
                        <button class="btn btn-outline-secondary mb-2 me-4">Редактировать</button>
                    </a>
                </td>
            </tr>
        @endforeach
        </tbody>
    </table>
@endsection
