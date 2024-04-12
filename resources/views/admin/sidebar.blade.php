<div class="sidebar-wrapper sidebar-theme">
    <nav id="sidebar">
        <div class="navbar-nav theme-brand flex-row  text-center">
            <div class="nav-logo">
                <div class="nav-item theme-logo">
                    <a href="">
                        <img src={{asset("../src/assets/img/logo.svg")}} class="navbar-logo" alt="logo">
                    </a>
                </div>
                <div class="nav-item theme-text">
                    <a href="/" class="nav-link"> ADMIN </a>
                </div>
            </div>
            <div class="nav-item sidebar-toggle">
                <div class="btn-toggle sidebarCollapse">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         class="feather feather-chevrons-left">
                        <polyline points="11 17 6 12 11 7"></polyline>
                        <polyline points="18 17 13 12 18 7"></polyline>
                    </svg>
                </div>
            </div>
        </div>
        <div class="shadow-bottom"></div>
        <ul class="list-unstyled menu-categories" id="accordionExample">
            <li class="menu active">
                <a href="#layouts" data-bs-toggle="collapse" aria-expanded="true" class="dropdown-toggle">
                    <div class="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             class="feather feather-terminal">
                            <polyline points="4 17 10 11 4 5"></polyline>
                            <line x1="12" y1="19" x2="20" y2="19"></line>
                        </svg>
                        <span>Главная страница</span>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             class="feather feather-chevron-right">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </div>
                </a>
                <ul class="collapse submenu list-unstyled show" id="layouts" data-bs-parent="#accordionExample">
                    <li class="{{ (request()->is('dashboard')) ? 'active' : '' }}">
                        <a href="/dashboard"> Дэшборд </a>
                    </li>
                    <li class="{{ (request()->is('universities')) ? 'active' : '' }}">
                        <a href="/universities"> Институты </a>
                    </li>
                    <li class="{{ (request()->is('indicator')) ? 'active' : '' }}">
                        <a href="/indicator"> Показатели </a>
                    </li>
                    <li>
                        <a href="#level-three" data-bs-toggle="collapse" aria-expanded="{{ (request()->is('slider','slider_show')) ? 'true' : 'false'}}"
                           class="dropdown-toggle collapsed"> Таблицы
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" class="feather feather-chevron-right">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </a>
                        <ul class="collapse submenu list-unstyled sub-submenu {{ (request()->is('slider','slider_show')) ? 'show' : ''}}" id="level-three" data-bs-parent="#pages">
                            <li class="{{ (request()->is('slider')) ? 'active' : ''}}">

                                <a href=""> ПП/ПК </a>
                            </li>
                            <li class="{{ (request()->is('slider_show')) ? 'active' : ''}}">
                                <a href=""> Показатели </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div class="mt-3 space-y-1">
                            <form method="POST" action="{{ route('logout') }}">
                                @csrf

                                <x-responsive-nav-link :href="route('logout')"
                                                       onclick="event.preventDefault();
                                        this.closest('form').submit();">
                                    {{ __('Выйти из аккаунта') }}
                                </x-responsive-nav-link>
                            </form>
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</div>
