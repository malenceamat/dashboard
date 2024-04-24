<?php $__env->startSection('indicator_create'); ?>
    <script src=<?php echo e(asset("https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js")); ?>></script>
    <style>
        .modal-content {
            background-color: white;
        }
    </style>


    <button type="button" class="btn btn-light-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Добавить показатель
    </button>
    <br>
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Добавление показателя</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                             viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                             stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
                        </svg>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="col-lg-12 col-12">
                        <form action=<?php echo e(route('indicator.create')); ?> method="POST">
                            <?php echo csrf_field(); ?>
                            <div class="form-group">
                                <label for="t-text">Название показателя</label>
                                <input id="t-text" type="text" name="name" placeholder="Название показателя"
                                       class="form-control" required>
                                <br>
                                <label for="t-discription">Описание</label>
                                <textarea id="t-discription" type="text-area" name="description" placeholder="Описание"
                                          class="form-control" required></textarea>
                                <br>
                                <input type="submit" class="btn btn-light-success" value="Добавить">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <br>

    <?php $__currentLoopData = $data; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $el): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <div class="modal fade" id="exampleModal-<?php echo e($el['id']); ?>-" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Изменение показателя</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                 stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
                            </svg>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="col-lg-12 col-12">
                            <form action=<?php echo e(route('indicator.update')); ?> method="POST">
                                <?php echo csrf_field(); ?>
                                <div class="form-group">
                                    <label for="t-text">Название показателя</label>
                                    <input id="t-text" type="text" name="name" placeholder="Название показателя"
                                           class="form-control" value="<?php echo e($el['name']); ?>" required>
                                    <br>
                                    <label for="t-discription">Описание</label>
                                    <textarea id="t-discription" type="text-area" name="description" placeholder="Описание"
                                              class="form-control"><?php echo e($el['description']); ?></textarea>
                                    <br>
                                    <input type="submit" class="btn btn-light-success" value="Обновить">
                                    <input type="hidden" name="id" value="<?php echo e($el['id']); ?>">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>




    <table id="zero-config" class="table table-bordered" style="width:100%">
        <thead>
        <tr>
            <th class="text-center">Название</th>
            <th class="text-center">Описание</th>
            <th class="text-center">Действия</th>
            <th class="text-center">Порядок отображения</th>
        </tr>
        <tr aria-hidden="true" class="mt-3 d-block table-row-hidden"></tr>
        </thead>
        <tbody>
        <?php $__currentLoopData = $data; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $el): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <tr>
                <td class="text-center"><?php echo e($el['name']); ?></td>
                <td class="text-center"><?php echo e($el['description']); ?></td>
                <td class="text-center">
                    <a href="/admin/indicator_edit_show/<?php echo e($el['id']); ?>">
                        <button class="btn btn-light-primary">Открыть</button>
                    </a>
                    <a data-bs-toggle="modal" data-bs-target="#exampleModal-<?php echo e($el['id']); ?>-">
                        <button class="btn btn-light-warning">Редактировать</button>
                    </a>
                    <form style="display: inline-block" method="POST" action="/admin/indicator/<?php echo e($el['id']); ?>">
                        <?php echo csrf_field(); ?>
                        <button class="btn btn-light-danger">Удалить</button>
                        <input  id="<?php echo e($el['id']); ?>" type="hidden" value="<?php echo e($el['priority']); ?>" name="indicator_id">
                    </form>

                </td>
                <td style="width: 10%;">
                    <input onchange="changePriority(<?php echo e($el->id); ?>)" type="number" class="form-control"
                           id="priority-<?php echo e($el->id); ?>"
                           value="<?php echo e($el->priority); ?>">
                </td>
            </tr>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </tbody>
    </table>

    <script>
        function changePriority(id) {
            let val = document.getElementById('priority-' + id);
            $.ajax({
                url: '<?php echo e(route('ajax.update_priority')); ?>',
                type: "POST",
                data: {
                    _token: "<?php echo e(csrf_token()); ?>",
                    id: id,
                    priority: val.value,
                },
                success: function (data) {
                    console.log(data)
                }
            })
        }
    </script>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('admin.main', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/html/resources/views/admin/indicator/indicator_create.blade.php ENDPATH**/ ?>