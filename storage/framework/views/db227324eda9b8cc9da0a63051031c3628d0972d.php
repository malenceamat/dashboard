<link rel="stylesheet" type="text/css" href=<?php echo e(asset("src/plugins/src/vanillaSelectBox/vanillaSelectBox.css")); ?>>
<link rel="stylesheet" type="text/css"
      href=<?php echo e(asset("src/plugins/css/light/vanillaSelectBox/custom-vanillaSelectBox.css")); ?>>
<?php $__env->startSection('indicator_edit'); ?>
    <style>
        .sem {
            white-space: pre-line !important;
            word-wrap: break-word !important;
        }
    </style>
    <div class="row">
            <form action="/admin/indicator_update" method="POST">
                <?php echo csrf_field(); ?>
                <table style="width: 100%">
                    <tr>
                        <th>
                        <label style="display: inline">Название показателя:</label>
                        </th>
                    <input  type="hidden" name="id" value="<?php echo e($indicator['id']); ?>">
                        <th>
                            <input  id="t-text" type="text" name="name" placeholder="Название показателя" class="form-control"
                           value="<?php echo e($indicator['name']); ?>" required>
                        </th>
                        <th class="text-center">
                    <input type="submit" class="mt-4 btn btn-primary" value="Обновить">
                        </th>
                    </tr>

                </table>
            </form>
        </div>




     <div class="table-responsive">
         <table class="table table-hover">
             <thead>
             <tr>
                 <th class="text-center" scope="col" style="border-right: 1px solid #000000;color: black">
                     Институты
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
                         <a href="/admin/program_create/<?php echo e($indicator['id']); ?>">
                             <button class="btn btn-outline-secondary mb-2 me-4" style="margin: 10px">Добавить строку
                             </button>
                         </a>
                     </div>
                 </td>
             </tr>
             <?php $__currentLoopData = $indicator->programs; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $program): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                 <?php $__currentLoopData = $program->universities_program; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $data): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                 <tr>
                     <td class="text-center"
                         style="border-right: 1px solid #000000;color: black"><?php echo e($data['name']); ?>

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
                             <form method="POST" action="/admin/delete_column/<?php echo e($program['id']); ?>">
                                 <?php echo csrf_field(); ?>
                                 <?php echo e(method_field('DELETE')); ?>

                                 <button class="btn btn-danger mb-2 me-4">Удалить</button>
                             </form>
                             <form method="get" action="/admin/program_show/<?php echo e($program['id']); ?>">
                                 <button class="btn btn-outline-secondary mb-2 me-4" style="margin: 10px">Редактировать
                                 </button>
                                 <input type="hidden" value="<?php echo e($indicator['id']); ?>" name="id_indicator">
                             </form>

                         </div>
                     </td>
                 </tr>
                 <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
             <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
             </tbody>
         </table>
     </div>
<?php $__env->stopSection(); ?>
<script src=<?php echo e(asset("../src/assets/js/scrollspyNav.js")); ?>></script>
<script src=<?php echo e(asset("../src/plugins/src/vanillaSelectBox/vanillaSelectBox.js")); ?>></script>
<script src=<?php echo e(asset("../src/plugins/src/vanillaSelectBox/custom-vanillaSelectBox.js")); ?>></script>
<?php echo $__env->make('admin.main', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/html/resources/views/admin/indicator/indicator_edit.blade.php ENDPATH**/ ?>