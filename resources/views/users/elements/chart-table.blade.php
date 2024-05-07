<div style="height: 50%;">
<canvas id="{{$data_charts['id']}}"></canvas>
</div>
<script>
    var ctx = document.getElementById('{{$data_charts['id']}}');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [
                @foreach($data_charts['axis'] as $axis)
                    '{{$axis}}',
                @endforeach
            ],
            datasets: [{
                type: 'line',
                data: [
                    @foreach($data_charts['plan'] as $plan)
                        '{{$plan}}',
                    @endforeach
                ],
                fill: false,
                borderColor: 'red',
            }, {
                data: [
                    @foreach($data_charts['fact'] as $fact)
                        '{{$fact}}',
                    @endforeach
                ],
                borderWidth: 1,
                borderColor: 'rgba(0,143,251,0.85)',
                backgroundColor: 'rgba(0,143,251,0.85)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: false
            }
        }
    });
</script>