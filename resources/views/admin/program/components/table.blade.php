<hr>
@foreach($dates as $el)
    <form action='{{route('program.delete')}}' method="POST">
        @csrf
        <div class="form-group">
            <div style="float: left">
                <label for="spec_plan">Фактическое значение для {{$el->date}}</label>
                <input onchange="changeFact({{$el->id}})" type="number" class="form-control mb-3"
                       placeholder="Фактическое значение"
                       id="fact-{{$el->id}}"
                       value="{{$el->fact}}">
            </div>
            <div style="float: right">
                <br>
                <button class="btn btn-rounded btn-light-danger btn-lg"> Удалить</button>
            </div>
        </div>
        <input type="hidden" name="program_id" value="{{$el->id}}">
        <input type="hidden" name="indicator_id" value="{{$data['id_indicator']}}">
        <input type="hidden" name="university_id" value="{{$data['university_id']}}">
    </form>
    <hr>
@endforeach