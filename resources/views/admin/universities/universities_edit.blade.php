@extends('admin.main')
<link rel="stylesheet" type="text/css" href={{asset("../src/plugins/src/vanillaSelectBox/vanillaSelectBox.css")}}>
<link rel="stylesheet" type="text/css"
      href={{asset("../src/plugins/css/light/vanillaSelectBox/custom-vanillaSelectBox.css")}}>
@section('universities_edit')
    <form action="/admin/universities_update" method="POST">
        <div class="row">
            <div class="col-lg-6 col-12 ">
                @csrf
                <div class="form-group">
                    <p>Название института</p>
                    <label for="t-text" class="visually-hidden">Text</label>
                    <input type="hidden" name="id" value="{{$data['id']}}">
                    <input id="t-text" type="text" name="name" placeholder="Название института" class="form-control"
                           value="{{$data['name']}}" required>
                </div>
                <select id="multipleSelect" multiple size="3" name="indicators[]">
                    @foreach($indicators as $indicator)
                        <option value="{{$indicator->id}}"
                                @if($data->pokazateli->contains('id', $indicator->id)) selected @endif>{{$indicator->name}}</option>
                    @endforeach
                </select>
            </div>
        </div>
        <input type="submit" class="mt-4 btn btn-primary" value="Обновить">
    </form>


    <script>selectBox3 = new vanillaSelectBox("#multipleSelect", {
            "minWidth": 178,
            "maxHeight": 200,
            "search": true,
            "stayOpen": true
        });
    </script>
@endsection
<script src={{asset("../src/assets/js/scrollspyNav.js")}}></script>
<script src={{asset("../src/plugins/src/vanillaSelectBox/vanillaSelectBox.js")}}></script>
<script src={{asset("../src/plugins/src/vanillaSelectBox/custom-vanillaSelectBox.js")}}></script>