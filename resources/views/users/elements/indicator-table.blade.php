 <table class="table table-bordered" >
            <thead>
            <tr>
                <th class="ps-0 text-center" scope="col"
                >Институт
                </th>
                <th class="text-center">
                    Описание
                </th>
                <th class="text-center">
                    Плановое значение
                </th>
                <th class="text-center" scope="col"
                >Фактическое значение
                </th>

                <th class="text-center">
                    Выполнено
                </th>
            </tr>
            <tr aria-hidden="true" class="mt-3 d-block table-row-hidden"></tr>
            </thead>
            <tbody>
@foreach($data_indicators as $el)
            <tr>
                <td class="text-center sem"
                >{{ $el['name'] }}
                </td>
                <td class="text-center sem"
                >{!!$el['description']!!}
                </td>
                <td class="text-center"
                >{{$el['plan']}}
                </td>
                <td class="text-center"
                >{{$el['fact']}}
                </td>
                <td class="text-center"
                >{{$el['percent']}} %
                </td>
            </tr>
        @endforeach
            </tbody>
        </table>

