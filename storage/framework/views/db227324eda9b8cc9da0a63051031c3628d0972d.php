<?php $__env->startSection('indicator_edit'); ?>
    <style>
        .sem {
            white-space: pre-line !important;
            word-wrap: break-word !important;
        }
    </style>
    <div class="row">
        <div class="col-lg-6 col-12 ">
            <form action="/indicator_update" method="POST">
                <?php echo csrf_field(); ?>
                <div class="form-group">
                    <p>Название показателя</p>
                    <label for="t-text" class="visually-hidden">Text</label>
                    <input type="hidden" name="id" value="<?php echo e($indicator['id']); ?>">
                    <input id="t-text" type="text" name="name" placeholder="Название показателя" class="form-control"
                           value="<?php echo e($indicator['name']); ?>" required>
                    <input type="submit" class="mt-4 btn btn-primary" value="Обновить">
                </div>
            </form>
        </div>
    </div>
    <br>
    <div class="table-responsive">
        <table class="table table-hover">
            <thead>
            <tr>
                <th class="text-center" scope="col" style="border-right: 1px solid #000000;color: black">
                    Университет
                </th>
                <th class="text-center" style="border-right: 1px solid #000000;color: black">Описание</th>
                <th class="text-center" scope="col" style="border-right: 1px solid #000000;color: black">Фактическое
                    значение
                </th>
                <th class="text-center" scope="col" style="border-right: 1px solid #000000;color: black">Плановое
                    значение
                </th>
                <th class="text-center" scope="col" style="border-right: 1px solid #000000;color: black">% Выполнения
                </th>
                <th>
                </th>
            </tr>
            <tr aria-hidden="true" class="mt-3 d-block table-row-hidden"></tr>
            </thead>
            <tbody>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td class="text-center">
                    <div class="action-btns">
                        <a href="/program_create/<?php echo e($indicator['id']); ?>">
                            <button class="btn btn-outline-secondary mb-2 me-4" style="margin: 10px">Добавить строку</button>
                        </a>
                    </div>
                </td>
            </tr>
            <?php $__currentLoopData = $indicator->programs; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $program): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <tr>
                    <td class="text-center"
                        style="border-right: 1px solid #000000;color: black"><?php echo e($program['university']); ?>

                    </td>
                    <td class="text-center sem"
                        style="max-width: 650px;text-align: justify!important;border-right: 1px solid #000000;color: black"><?php echo $program['name']; ?></td>
                    <td class="text-center"
                        style="border-right: 1px solid #000000;color: black"><?php echo e($program['fact']); ?></td>
                    <td class="text-center"
                        style="border-right: 1px solid #000000;color: black"><?php echo e($program['plan']); ?></td>
                    <td class="text-center"
                        style="border-right: 1px solid #000000;color: black"><?php echo e($program['percent']); ?></td>
                    <td class="text-center">
                        <div class="action-btns">
                            <form method="POST" action="/delete_column/">
                                <?php echo csrf_field(); ?>
                                <?php echo e(method_field('DELETE')); ?>

                                <button class="btn btn-danger mb-2 me-4">Удалить</button>
                            </form>
                            <a href="/program_show/<?php echo e($program['id']); ?>">
                                <button class="btn btn-outline-secondary mb-2 me-4" style="margin: 10px">Редактировать</button>
                            </a>
                        </div>
                    </td>
                </tr>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            </tbody>
        </table>
    </div>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('admin.main', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/html/resources/views/admin/indicator/indicator_edit.blade.php ENDPATH**/ ?>