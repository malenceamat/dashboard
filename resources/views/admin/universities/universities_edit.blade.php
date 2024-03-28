@extends('admin.main')
@section('universities_edit')
    <div class="row">
        <div class="col-lg-6 col-12 ">
            <form action="/universities_update" method="POST">
                @csrf
                <div class="form-group">
                    <p>Название университета</p>
                    <label for="t-text" class="visually-hidden">Text</label>
                    <input type="hidden" name="id" value="{{$data['id']}}">
                    <input id="t-text" type="text" name="name" placeholder="Название университета" class="form-control"
                           value="{{$data['name']}}" required>
                    <input type="submit" class="mt-4 btn btn-primary" value="Обновить">
                </div>
            </form>
        </div>
        к какому показателю привязать
    </div>
@endsection