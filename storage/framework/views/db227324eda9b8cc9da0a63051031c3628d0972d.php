<?php $__env->startSection('indicator_edit'); ?>


    <div class="table-responsive">
        <table class="table table-bordered">
            <thead>
            <tr>
                <th class="text-center" >
                    Институты
                </th>
                <th class="text-center">Описание</th>
                <th class="text-center" >Плановое<br>
                    значение
                </th>
                <th class="text-center" >Фактическое<br>
                    значение
                </th>
                <th class="text-center" >Выполнено
                </th>
                <th class="text-center" >Дата<br>обновления
                </th>
                <th class="text-center">
                    <div class="action-btns">
                        <a href="/admin/program_create/<?php echo e($indicator['id']); ?>">
                            <button class="btn btn-light-success">Добавить строку
                            </button>
                        </a>
                    </div>
                </th>
            </tr>
            <tr aria-hidden="true" class="mt-3 d-block table-row-hidden"></tr>
            </thead>
            <tbody>
                <?php $__currentLoopData = $data; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $el): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <tr>
                        <td class="text-center"><?php echo e($el['university_name']); ?></td>
                        <td class="text-center sem"><?php echo $el['description']; ?></td>
                        <td class="text-center"><?php echo e($el['plan']); ?></td>
                        <td class="text-center"><?php echo e($el['fact']); ?></td>
                        <td class="text-center"><?php echo e($el['percent']); ?> %</td>
                        <td class="text-center"><?php echo e($el['date']); ?></td>
                        <td class="text-center">
                            <div class="action-btns">
                                <form style="display: inline" method="get"
                                      action="/admin/program_show/<?php echo e($el['indicator_id']); ?>">
                                    <button class="btn btn-light-warning">Редактировать
                                    </button>
                                    <input type="hidden" value="<?php echo e($el['id']); ?>" name="id_indicator">
                                    <input type="hidden" value="<?php echo e($el['university_id']); ?>" name="university_id">
                                </form>
                                <form style="display: inline" method="POST"
                                      action="/admin/delete_column/<?php echo e($el['indicator_id']); ?>">
                                    <?php echo csrf_field(); ?>
                                    <button class="btn btn-light-danger">Удалить</button>
                                    <input type="hidden" value="<?php echo e($el['id']); ?>" name="id_indicator">
                                    <input type="hidden" value="<?php echo e($el['university_id']); ?>" name="university_id">
                                </form>
                            </div>
                        </td>
                    </tr>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            </tbody>

                <thead>
                <tr aria-hidden="true" class="mt-3 d-block table-row-hidden"></tr>
                <tr>
                <th style="border-right: 1px solid #ebedf2; border-bottom-right-radius: 10px; border-top-right-radius: 10px" class="text-center">Итого:</th>
                <th style="border: 0px"></th>
                <th style="border-bottom-left-radius: 10px; border-top-left-radius: 10px" class="text-center"><?php echo e($totals['total_plan']); ?></th>
                <th class="text-center"><?php echo e($totals['total_fact']); ?></th>
                <th style="border-bottom-right-radius: 10px; border-top-right-radius: 10px" class="text-center"><?php echo e($totals['total_percent']); ?> %</th>
                <th style="border: 0px"></th>
                <th style="border: 0px"></th>
                </tr>
                </thead>

        </table>

    </div>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('admin.main', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/html/resources/views/admin/indicator/indicator_edit.blade.php ENDPATH**/ ?>