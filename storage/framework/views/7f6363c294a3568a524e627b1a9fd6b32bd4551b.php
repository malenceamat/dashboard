<?php $__env->startSection('dashboard-create'); ?>
    <link rel="stylesheet" type="text/css" href=<?php echo e(asset("../src/plugins/css/light/editors/quill/quill.snow.css")); ?>>
    <script src=<?php echo e(asset("https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js")); ?>></script>
    <div class="profile-image">
        <form <?php if(isset($data->id)): ?> action="<?php echo e(url('dashboard-create/edit')); ?>"
              <?php else: ?> action="<?php echo e(url('dashboard-create/save')); ?>" <?php endif; ?> method="post"
              enctype="multipart/form-data" id="save">
            <?php echo csrf_field(); ?>
            <?php if($data->id): ?>
                <?php echo method_field('post'); ?>
            <?php endif; ?>
            <div class="tab-content" id="animateLineContent-4">
                <div class="tab-pane fade show active" id="animated-underline-home" role="tabpanel"
                     aria-labelledby="animated-underline-home-tab">
                    <div class="row">
                        <div class="col-xl-10 col-lg-12 col-md-8 mt-md-0 mt-4">
                            <div class="form">
                                <div class="row">
                                    <div class="col-md-6">



                                        <div class="form-group">
                                            <label for="spec_plan">Плановое значение</label>
                                            <input type="number" class="form-control mb-3"
                                                   placeholder="Плановые значения"
                                                   id="plan" name="plan"
                                                   value="<?php echo e($data['plan']); ?>">
                                        </div>
                                        <div class="form-group">
                                            <label for="fact">Фактическое значение</label>
                                            <input type="number" class="form-control mb-3"
                                                   placeholder="Фактические значения"
                                                   id="fact" name="fact"
                                                   value="<?php echo e($data['fact']); ?>">
                                        </div>
                                    </div>
                                    <input type="hidden" name="id" value="<?php echo e($data['id']); ?>">
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
                                                            <label for="hiddenArea"><?php echo $data['name']; ?></label>
                                                            <textarea name="name" style="display:none"
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
            <?php if(isset($data->id)): ?>
                <div class="container">
                    <button class="btn btn-outline-secondary btn-rounded mb-2 me-4">
                        Редактировать
                    </button>
                </div>
            <?php else: ?>
                <div class="container">
                    <button class="btn btn-outline-secondary btn-rounded mb-2 me-4">Создать
                    </button>
                </div>
            <?php endif; ?>
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

<?php echo $__env->make('admin.main', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/html/resources/views/admin/dashboard/dashboard-create.blade.php ENDPATH**/ ?>