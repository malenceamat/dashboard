
<div class="widget-content widget-content-area">
    <br>
        <table  style="width: 100%">
<tr>
    <td class="text-center" style="width: 25%">
        <form action="/" style="margin-bottom: 0">
            <button style="width: 80%" class="btn  btn-outline-dark btn-lg">На сайт</button>
        </form>
    </td>
    <td class="text-center" style="width: 25%">
        <form action="{{route("universities.index")}}" style="margin-bottom: 0">
            <button style="width: 80%;" class="btn btn-outline-dark btn-lg">Институты</button>
        </form>
    </td>
    <td class="text-center" style="width: 25%">
        <form action="{{route("indicator.index")}}" style="margin-bottom: 0">
            <button style="width: 80%;" class="btn btn-outline-dark btn-lg">Показатели</button>
        </form>
    </td>
    <td class="text-center" style="width: 25%">
            <form method="POST" action="{{ route('logout') }}" style="margin-bottom: 0">
                @csrf
            <button style="width: 90%;" class="btn btn-outline-dark btn-lg">Выйти из аккаунта</button>
            </form>
    </td>
</tr>
        </table>
</div>

