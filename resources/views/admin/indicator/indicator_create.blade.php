@extends('admin.main')
@section('indicator_create')
    <script src={{asset("https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js")}}></script>
    <style>
        .modal-content {
            background-color: white;
        }
    </style>


    <button type="button" class="btn btn-light-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Добавить показатель
    </button>
    <br>
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Добавление показателя</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                             viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                             stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
                        </svg>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="col-lg-12 col-12">
                        <form action={{route('indicator.create')}} method="POST">
                            @csrf
                            <div class="form-group">
                                <label for="t-text">Название показателя</label>
                                <input id="t-text" type="text" name="name" placeholder="Название показателя"
                                       class="form-control" required>
                                <br>
                                <label for="t-discription">Описание</label>
                                <textarea id="t-discription" type="text-area" name="description" placeholder="Описание"
                                          class="form-control" required></textarea>
                                <br>
                                <input type="submit" class="btn btn-light-success" value="Добавить">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <br>

    @foreach($data as $el)
        <div class="modal fade" id="exampleModal-{{$el['id']}}-" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Изменение показателя</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                 stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
                            </svg>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="col-lg-12 col-12">
                            <form action={{route('indicator.update')}} method="POST">
                                @csrf
                                <div class="form-group">
                                    <label for="t-text">Название показателя</label>
                                    <input id="t-text" type="text" name="name" placeholder="Название показателя"
                                           class="form-control" value="{{$el['name']}}" required>
                                    <br>
                                    <label for="t-discription">Описание</label>
                                    <textarea id="t-discription" type="text-area" name="description" placeholder="Описание"
                                              class="form-control">{{$el['description']}}</textarea>
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




    <table id="zero-config" class="table table-bordered" style="width:100%">
        <thead>
        <tr>
            <th class="text-center">Название</th>
            <th class="text-center">Описание</th>
            <th class="text-center">Действия</th>
            <th class="text-center">Порядок отображения</th>
        </tr>
        <tr aria-hidden="true" class="mt-3 d-block table-row-hidden"></tr>
        </thead>
        <tbody>
        @foreach($data as $el)
            <tr>
                <td class="text-center">{{$el['name']}}</td>
                <td class="text-center">{{$el['description']}}</td>
                <td class="text-center">
                    <a href="/admin/indicator_edit_show/{{$el['id']}}">
                        <button class="btn btn-light-primary">Открыть</button>
                    </a>
                    <a data-bs-toggle="modal" data-bs-target="#exampleModal-{{$el['id']}}-">
                        <button class="btn btn-light-warning">Редактировать</button>
                    </a>
                    <form style="display: inline-block" method="POST" action="/admin/indicator/{{$el['id']}}">
                        @csrf
                        <button class="btn btn-light-danger">Удалить</button>
                        <input  id="{{$el['id']}}" type="hidden" value="{{$el['priority']}}" name="indicator_id">
                    </form>

                </td>
                <td style="width: 10%;">
                    <input onchange="changePriority({{$el->id}})" type="number" class="form-control"
                           id="priority-{{$el->id}}"
                           value="{{$el->priority}}">
                </td>
            </tr>
        @endforeach
        </tbody>
    </table>

    <script>
        function changePriority(id) {
            let val = document.getElementById('priority-' + id);
            $.ajax({
                url: '{{route('ajax.update_priority')}}',
                type: "POST",
                data: {
                    _token: "{{ csrf_token() }}",
                    id: id,
                    priority: val.value,
                },
                success: function (data) {
                    console.log(data)
                }
            })
        }
    </script>
@endsection
