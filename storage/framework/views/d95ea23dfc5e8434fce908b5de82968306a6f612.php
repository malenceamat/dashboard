<link rel="stylesheet" type="text/css" href=<?php echo e(asset("../src/plugins/src/vanillaSelectBox/vanillaSelectBox.css")); ?>>
<link rel="stylesheet" type="text/css"
      href=<?php echo e(asset("../src/plugins/css/light/vanillaSelectBox/custom-vanillaSelectBox.css")); ?>>
<?php $__env->startSection('program_update'); ?>
    <link rel="stylesheet" type="text/css" href=<?php echo e(asset("../src/plugins/css/light/editors/quill/quill.snow.css")); ?>>
    <script src=<?php echo e(asset("https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js")); ?>></script>

    <div class="profile-image">
        <form action="/admin/program_update" method="post" enctype="multipart/form-data" id="save">
            <?php echo csrf_field(); ?>
        </form>
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
                                                   id="fact" name="fact"
                                                   value="<?php echo e($programs['fact']); ?>">
                                        </div>
                                        <div class="form-group">
                                            <label for="plan">Плановое значение</label>
                                            <input type="number" class="form-control mb-3"
                                                   placeholder="Плановое значение"
                                                   id="plan" name="plan" value="<?php echo e($programs['plan']); ?>">
                                        </div>
                                        <select id="multipleSelect" name="id_university">
                                            <?php $__currentLoopData = $data->universityes; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $program): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                <option value="<?php echo e($program['id']); ?>"
                                                        <?php if($programs->universities_program->contains('id', $program->id)): ?> selected <?php endif; ?> ><?php echo e($program['name']); ?>

                                                </option>
                                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                        </select>
                                    </div>
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
                                                            <label for="hiddenArea"><?php echo $programs['name']; ?></label>
                                                            <textarea name="name" style="display:none"
                                                                      id="hiddenArea"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <input type="hidden" name="id" value="<?php echo e($programs['id']); ?>">
                                <input type="hidden" value="<?php echo e($data['id']); ?>" name="indicators_id">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br>
            <div class="container">
                <button class="btn btn-outline-secondary btn-rounded mb-2 me-4">Обновить</button>
            </div>

    </div>
    <script>selectBox3 = new vanillaSelectBox("#multipleSelect", {
            "minWidth": 178,
            "maxHeight": 200,
            "search": true,
            "stayOpen": true
        });
    </script>
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
<script src=<?php echo e(asset("../src/assets/js/scrollspyNav.js")); ?>></script>
<script src=<?php echo e(asset("../src/plugins/src/vanillaSelectBox/vanillaSelectBox.js")); ?>></script>
<script src=<?php echo e(asset("../src/plugins/src/vanillaSelectBox/custom-vanillaSelectBox.js")); ?>></script>
<?php echo $__env->make('admin.main', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/html/resources/views/admin/program/program_update.blade.php ENDPATH**/ ?>