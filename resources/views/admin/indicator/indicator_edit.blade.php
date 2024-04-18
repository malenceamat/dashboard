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
            <form action="/admin/indicator_update" method="POST">
                @csrf
                <table style="width: 100%">
                    <tr>
                        <th>
                        <label style="display: inline">Название показателя:</label>
                        </th>
                    <input  type="hidden" name="id" value="{{$indicator['id']}}">
                        <th>
                            <input  id="t-text" type="text" name="name" placeholder="Название показателя" class="form-control"
                           value="{{$indicator['name']}}" required>
                        </th>
                        <th class="text-center">
                    <input type="submit" class="mt-4 btn btn-primary" value="Обновить">
                        </th>
                    </tr>

                </table>
            </form>
        </div>




     <div class="table-responsive">
         <table class="table table-hover">
             <thead>
             <tr>
                 <th class="text-center" scope="col" style="border-right: 1px solid #000000;color: black">
                     Институты
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
                         <a href="/admin/program_create/{{$indicator['id']}}">
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
                             <form method="POST" action="/admin/delete_column/{{$program['id']}}">
                                 @csrf
                                 {{method_field('DELETE')}}
                                 <button class="btn btn-danger mb-2 me-4">Удалить</button>
                             </form>
                             <form method="get" action="/admin/program_show/{{$program['id']}}">
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
<script src={{asset("../src/assets/js/scrollspyNav.js")}}></script>
<script src={{asset("../src/plugins/src/vanillaSelectBox/vanillaSelectBox.js")}}></script>
<script src={{asset("../src/plugins/src/vanillaSelectBox/custom-vanillaSelectBox.js")}}></script>