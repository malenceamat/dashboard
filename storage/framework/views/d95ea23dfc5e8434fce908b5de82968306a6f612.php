<link rel="stylesheet" type="text/css" href=<?php echo e(asset("../src/plugins/src/vanillaSelectBox/vanillaSelectBox.css")); ?>>
<link rel="stylesheet" type="text/css"
      href=<?php echo e(asset("../src/plugins/css/light/vanillaSelectBox/custom-vanillaSelectBox.css")); ?>>
<?php $__env->startSection('program_update'); ?>
    <link rel="stylesheet" type="text/css" href=<?php echo e(asset("../src/plugins/css/light/editors/quill/quill.snow.css")); ?>>
    <script src=<?php echo e(asset("https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js")); ?>></script>
    <script src=<?php echo e(asset("https://npmcdn.com/flatpickr/dist/l10n/ru.js")); ?>></script>
    <link href=<?php echo e(asset("../src/plugins/src/flatpickr/flatpickr_custom.css")); ?> rel="stylesheet" type="text/css">

    <style>
        .modal-content {
            background-color: white;
        }
    </style>
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
        <div class="modal-dialog modal-sm" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Выберите дату</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                             viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                             stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
                        </svg>
                    </button>
                </div>
                <div class="modal-body">
                    <form action='<?php echo e(route('date.create')); ?>' method="POST">
                        <?php echo csrf_field(); ?>
                        <div class="form-group">
                            <input hidden id="date" name="date" class="flatpickr flatpickr-input" required>
                            <input type="hidden" name="indicator_id" value="<?php echo e($data['id_indicator']); ?>">
                            <input type="hidden" name="university_id" value="<?php echo e($data['university_id']); ?>">
                            <input type="hidden" name="plan" value="<?php echo e($programs['plan']); ?>">
                            <input type="hidden" name="name" value="<?php echo $programs['name']; ?>">
                            <br>
                            <div style="text-align: center">
                                <input type="submit" class="btn btn-light-success" value="Добавить">
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>


    <div class="tab-content" id="animateLineContent-4">
        <div class="tab-pane fade show active" id="animated-underline-home" role="tabpanel"
             aria-labelledby="animated-underline-home-tab">
            <div class="row">

                <div class="form">
                    <div class="row">
                        <div class="col-md">
                            <div>
                                <div style="float: left">
                                    <button form="save" class="btn btn-light-success btn-rounded btn-lg ">
                                        Обновить
                                    </button>
                                </div>
                                <div style="float: right">
                                    <button type="button" class="btn btn-rounded btn-light-primary btn-lg"
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal">Добавить дату
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="btndefault">
                                    </div>
                                </div>
                            </div>
                            <br><br><br>
                            <div class="row" id="date-table">
                                <?php echo $__env->make("admin.program.components.table", \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <form action=<?php echo e(route('program.update')); ?> method="post" enctype="multipart/form-data" id="save">
                                <?php echo csrf_field(); ?>
                                <div class="form-group">
                                    <label for="fact">Плановое значение</label>
                                    <input type="number" class="form-control mb-3"
                                           placeholder="Фактическое значение"
                                           id="plan" name="plan"
                                           value="<?php echo e($programs['plan']); ?>">
                                </div>
                                <div class="statbox widget box box-shadow">
                                    <div class="widget-header">
                                        <div class="row">
                                            <div>
                                                <h4> Описание </h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="widget-content widget-content-area">
                                        <div id="editor-container" style="height: 35%">
                                            <label for="hiddenArea"><?php echo $programs['name']; ?></label>
                                            <textarea name="name" style="display:none"
                                                      id="hiddenArea"></textarea>
                                        </div>
                                    </div>

                                </div>
                                <input type="hidden" name="indicator_id" value="<?php echo e($data['id_indicator']); ?>">
                                <input type="hidden" name="university_id" value="<?php echo e($data['university_id']); ?>">
                            </form>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    </div>
    <br>

    <script src=<?php echo e(asset("../src/plugins/src/editors/quill/quill.js")); ?>></script>
    <script>
        function changeFact(id) {
            let val = document.getElementById('fact-' + id);
            $.ajax({
                url: '<?php echo e(route('ajax.update_fact')); ?>',
                type: "POST",
                data: {
                    _token: "<?php echo e(csrf_token()); ?>",
                    id: id,
                    fact: val.value,
                },
                success: function (data) {
                    console.log(data)
                }
            })
        }


        quill = new Quill('#editor-container', {
            modules: {
                toolbar: [
                    [{header: [1, 2, false]}],
                    ['bold', 'italic', 'underline']
                ]
            },
            placeholder: 'Введите текст',
            theme: 'snow'
        });
        $(document).ready(function () {
            $("#save").on("submit", function () {
                let value = $('.ql-editor').html();
                $(this).append("<textarea name='name' style='display:none'>" + value + "</textarea>");
            });
        });

        flatpickr(document.getElementById('date'), {
            dateFormat: "d-m-Y",
            inline: true,
            "locale": "ru",
        });
    </script>
<?php $__env->stopSection(); ?>
<script src=<?php echo e(asset("../src/assets/js/scrollspyNav.js")); ?>></script>
<script src=<?php echo e(asset("../src/plugins/src/vanillaSelectBox/vanillaSelectBox.js")); ?>></script>
<script src=<?php echo e(asset("../src/plugins/src/vanillaSelectBox/custom-vanillaSelectBox.js")); ?>></script>
<script src=<?php echo e(asset("../src/plugins/src/flatpickr/flatpickr.js")); ?>></script>
<script src=<?php echo e(asset("../src/plugins/src/flatpickr/custom-flatpickr.js")); ?>></script>
<?php echo $__env->make('admin.main', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/html/resources/views/admin/program/program_update.blade.php ENDPATH**/ ?>