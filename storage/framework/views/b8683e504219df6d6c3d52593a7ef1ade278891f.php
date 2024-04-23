<?php $__env->startSection('indicator_create'); ?>
    <style>
        .modal-content {
            background-color: white;
        }
    </style>



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
                        <form action="admin//indicator_create" method="POST">
                            <?php echo csrf_field(); ?>
                            <div class="form-group">
                                <h5>Название показателя</h5>
                                <label for="t-text" class="visually-hidden">Text</label>
                                <input id="t-text" type="text" name="name" placeholder="Название показателя"
                                       class="form-control" required>
                                <br>
                                <input type="submit" class="btn btn-light-success" value="Добавить">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <table id="zero-config" class="table table-bordered" style="width:100%">
        <thead>
        <tr>
            <th class="text-center">Показатели</th>
            <th class="text-center">
                <div style="display: inline-block">
                    <div class="text-center" style="text-align: center">
                        Действия
                    </div>

                </div>
                <div class="text-center" style="float:right; display: inline-block">
                    <button type="button" class="btn btn-light-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Добавить показатель
                    </button>
                </div>
            </th>
        </tr>
        <tr aria-hidden="true" class="mt-3 d-block table-row-hidden"></tr>
        </thead>
        <tbody>
        <?php $__currentLoopData = $data; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $el): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <tr>
                <td class="text-center"><?php echo e($el['name']); ?></td>
                <td class="text-center">
                    <a href="/admin/indicator_edit_show/<?php echo e($el['id']); ?>">
                        <button class="btn btn-light-warning">Редактировать</button>
                    </a>
                    <form style="display: inline-block" method="POST" action="/admin/indicator/<?php echo e($el['id']); ?>">
                        <?php echo csrf_field(); ?>
                        <button class="btn btn-light-danger">Удалить</button>
                        <input type="hidden" name="indicator_id" value="<?php echo e($el['id']); ?>">
                    </form>

                </td>
            </tr>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </tbody>
    </table>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('admin.main', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/html/resources/views/admin/indicator/indicator_create.blade.php ENDPATH**/ ?>