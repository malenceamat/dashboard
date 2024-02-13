@foreach($banner as $data)
    <div class="header-banner bg-theme-alt" id="top">
        <div class="nk-banner bg-grad-special">
            <div class="banner banner-fs banner-single bg-grad-special-alt tc-light">
                <div class="banner-wrap mt-auto">
                    <div class="container">
                        <div class="row align-items-center justify-content-center justify-content-lg-between">
                            <div class="col-lg-6 order-lg-last animated" data-animate="fadeInUp" data-delay="1.25">
                                <div class="banner-gfx banner-gfx-re-s5">
                                    <img src="{{asset('/storage/'.$data['image'])}}" alt="header">
                                </div>
                            </div>
                            <div class="col-lg-6 text-center text-lg-start">
                                <div class="banner-caption cpn tc-light">
                                    <div class="cpn-head">
                                        <h1 class="title title-xl-2 title-lg title-semibold animated"
                                            data-animate="fadeInUp" data-delay="1.35">{{$data['text']}}</h1>
                                    </div>
                                    <div class="cpn-text">
                                        <p class="lead-s2 animated" data-animate="fadeInUp"
                                           data-delay="1.45">{{$data['smalltext']}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="nk-ovm shape-u shape-contain shape-left-top"></div>
                <div id="particles-bg" class="particles-container particles-bg" data-pt-base="#00c0fa"
                     data-pt-base-op=".3" data-pt-line="#2b56f5" data-pt-line-op=".5" data-pt-shape="#00c0fa"
                     data-pt-shape-op=".2"></div>
            </div>
        </div>
    </div>
@endforeach
