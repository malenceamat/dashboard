<?php $__env->startSection('program_create'); ?>
    <link rel="stylesheet" type="text/css" href=<?php echo e(asset("../src/plugins/css/light/editors/quill/quill.snow.css")); ?>>
    <script src=<?php echo e(asset("https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js")); ?>></script>
    <div class="profile-image">
        <form action="/program_save" method="post" enctype="multipart/form-data" id="save">
            <?php echo csrf_field(); ?>
            <div class="tab-content" id="animateLineContent-4">
                <div class="tab-pane fade show active" id="animated-underline-home" role="tabpanel"
                     aria-labelledby="animated-underline-home-tab">
                    <div class="row">
                        <div class="col-xl-10 col-lg-12 col-md-8 mt-md-0 mt-4">
                            <div class="form">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="fact">Фактическое значение</label>
                                            <input type="number" class="form-control mb-3"
                                                   placeholder="Фактическое значение"
                                                   id="fact" name="fact">
                                        </div>
                                        <input type="hidden" value="<?php echo e($data['id']); ?>" name="indicators_id">
                                        <div class="form-group">
                                            <label for="plan">Плановое значение</label>
                                            <input type="number" class="form-control mb-3"
                                                   placeholder="Плановое значение"
                                                   id="plan" name="plan">
                                        </div>
                                        <div class="form-group">
                                            <label for="university">Название университета</label>
                                            <input type="text" class="form-control mb-3"
                                                   placeholder="Название университета"
                                                   id="university" name="university">
                                        </div>
                                    </div>
                                    <input type="hidden" name="id">
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
                                                            <label for="hiddenArea"></label>
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
                <div class="container">
                    <button class="btn btn-outline-secondary btn-rounded mb-2 me-4">Создать
                    </button>
                </div>
        </form>
    </div>

    <script src=<?php echo e(asset("../src/plugins/src/editors/quill/quill.js")); ?>></script>
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
                $(this).append("<textarea name='name' style='display:none'>"+value+"</textarea>");
            });
        });
    </script>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('admin.main', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/html/resources/views/admin/program/program_create.blade.php ENDPATH**/ ?>