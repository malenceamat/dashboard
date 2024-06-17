 <table class="table table-bordered">
            <thead>
            <tr>
                <th class="text-center" scope="col"
                >Институт
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
            <tr style="word-break: break-all">
                <td class="text-center"
                >{{ $el['name'] }}
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

                <tr style="word-break: break-all">
                    <td class="text-center"><strong>Итого</strong></td>
                    <td class="text-center"><strong>{{$sum_data_indicator['plan']}}</strong></td>
                    <td class="text-center"><strong>{{$sum_data_indicator['fact']}}</strong></td>
                    <td class="text-center"><strong>{{$sum_data_indicator['percent']}} %</strong></td>
                </tr>
            </tbody>
        </table>

