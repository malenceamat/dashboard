@extends('admin.main')
@section('dashboard-create')
    <link rel="stylesheet" type="text/css" href={{asset("../src/plugins/css/light/editors/quill/quill.snow.css")}}>
    <script src={{asset("https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js")}}></script>
    <div class="profile-image">
        <form @if (isset($data->id)) action="{{url('dashboard-create/edit')}}"
              @else action="{{url('dashboard-create/save')}}" @endif method="post"
              enctype="multipart/form-data" id="save">
            @csrf
            @if($data->id)
                @method('post')
            @endif
            <div class="tab-content" id="animateLineContent-4">
                <div class="tab-pane fade show active" id="animated-underline-home" role="tabpanel"
                     aria-labelledby="animated-underline-home-tab">
                    <div class="row">
                        <div class="col-xl-10 col-lg-12 col-md-8 mt-md-0 mt-4">
                            <div class="form">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="special">Спец. часть</label>
                                            <input type="number" class="form-control mb-3"
                                                   placeholder="Спец. часть"
                                                   id="special" name="special"
                                                   value="{{$data['special']}}">
                                        </div>
                                        <div class="form-group">
                                            <label for="base">Базовая часть</label>
                                            <input type="number" class="form-control mb-3"
                                                   placeholder="Плановые значения"
                                                   id="base" name="base"
                                                   value="{{$data['base']}}">
                                        </div>
                                        <div class="form-group">
                                            <label for="name">Название</label>
                                            <input type="text" class="form-control mb-3"
                                                   placeholder="Название"
                                                   id="name" name="name"
                                                   value="{{$data['name']}}">
                                        </div>
                                    </div>
                                    <input type="hidden" name="id" value="{{$data['id']}}">
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
                                                            <label for="hiddenArea">{!! $data['sub_name'] !!}</label>
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
            @if(isset($data->id))
                <div class="container">
                    <button class="btn btn-outline-secondary btn-rounded mb-2 me-4">
                        Редактировать
                    </button>
                </div>
            @else
                <div class="container">
                    <button class="btn btn-outline-secondary btn-rounded mb-2 me-4">Создать
                    </button>
                </div>
            @endif
        </form>
    </div>

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
                $(this).append("<textarea name='sub_name' style='display:none'>"+value+"</textarea>");
            });
        });
    </script>
@endsection
