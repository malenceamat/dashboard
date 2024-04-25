@foreach($data_charts as $data_chart)
{!! $data_chart->container() !!}
{{ $data_chart->script() }}
@endforeach