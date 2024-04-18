@extends('admin.main')
<link rel="stylesheet" type="text/css" href={{asset("../src/plugins/src/vanillaSelectBox/vanillaSelectBox.css")}}>
<link rel="stylesheet" type="text/css"
      href={{asset("../src/plugins/css/light/vanillaSelectBox/custom-vanillaSelectBox.css")}}>

@section('program_create')
    <link rel="stylesheet" type="text/css" href={{asset("../src/plugins/css/light/editors/quill/quill.snow.css")}}>
    <script src={{asset("https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js")}}></script>
    <link href={{asset("../src/plugins/src/flatpickr/flatpickr.css")}} rel="stylesheet" type="text/css">
    <div class="profile-image">
        <form action={{route('program.create')}} method="post" enctype="multipart/form-data" id="save">
            @csrf
            <div class="tab-content" id="animateLineContent-4">
                <div class="tab-pane fade show active" id="animated-underline-home" role="tabpanel"
                     aria-labelledby="animated-underline-home-tab">
                    <div class="row">
                        <div class="col-xl-10 col-lg-12 col-md-8 mt-md-0 mt-4">
                            <div class="form">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="fact">Фактическое значение</label>
                                            <input type="number" class="form-control mb-3"
                                                   placeholder="Фактическое значение" required
                                                   id="fact" name="fact">
                                        </div>
                                        <input type="hidden" value="{{$data['id']}}" name="indicators_id">
                                        <div class="form-group">
                                            <label for="plan">Плановое значение</label>
                                            <input type="number" class="form-control mb-3"
                                                   placeholder="Плановое значение" required
                                                   id="plan" name="plan">
                                        </div>
                                        <div class="form-group">
                                            <label for="date">Дата</label>
                                            <input id="date" name="date" class="form-control mb-3 flatpickr flatpickr-input active" placeholder="Выберите дату" required>
                                        </div>
                                        <div class="form-group">
                                            <label for="university">Институт</label>
                                        <select class="form-control mb-3" id="id_university" name="id_university">
                                            @foreach($data->universityes as $programs)
                                                <option value="{{$programs['id']}}">{{$programs['name']}}</option>
                                            @endforeach
                                        </select>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div id="basic" class="row layout-spacing layout-top-spacing">
                                            <div class="col-lg-12">
                                                <div class="statbox widget box box-shadow">
                                                    <div class="widget-header">
                                                        <div class="row">
                                                            <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                                                <h4> Описание </h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="widget-content widget-content-area">
                                                        <div id="editor-container">
                                                            <label for="hiddenArea"></label>
                                                            <textarea name="sub_name" style="display:none"
                                                                      id="hiddenArea"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                    <button class="btn btn-rounded btn-light-success btn-lg">Создать
                    </button>
        </form>
    </div>


    <script>
        flatpickr(document.getElementById('date'), {
            dateFormat: "d-m-Y",
        });

    </script>

    <script src={{asset("../src/plugins/src/editors/quill/quill.js")}}></script>
    <script> quill = new Quill('#editor-container', {
            modules: {
                toolbar: [
                    [{ header: [1, 2, false] }],
                    ['bold', 'italic', 'underline']
                ]
            },
            placeholder: 'Введите текст',
            theme: 'snow'
        });
        $(document).ready(function(){
            $("#save").on("submit", function () {
                let value = $('.ql-editor').html();
                $(this).append("<textarea name='name' style='display:none'>"+value+"</textarea>");
            });
        });
    </script>
@endsection
<script src={{asset("../src/assets/js/scrollspyNav.js")}}></script>
<script src={{asset("../src/plugins/src/vanillaSelectBox/vanillaSelectBox.js")}}></script>
<script src={{asset("../src/plugins/src/vanillaSelectBox/custom-vanillaSelectBox.js")}}></script>
<script src={{asset("../src/plugins/src/flatpickr/flatpickr.js")}}></script>
<script src={{asset("../src/plugins/src/flatpickr/custom-flatpickr.js")}}></script>