<?php $block_id = $elements['#block']->bid; $has_title = empty($elements['#block']->title) ? FALSE : TRUE; ?>
<div class="splash-content modal fade" tabindex="-1" role="dialog" <?php if ($has_title) print 'aria-labelledby="splash-block-' . $block_id . '"'; ?>>
  <div class="vertical-alignment-helper">
    <div class="modal-dialog vertical-align-center" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <?php if ($has_title): ?>
            <h4 id="splash-block-<?php print $block_id; ?>" class="modal-title"><?php print $elements['#block']->title; ?></h4>
          <?php endif; ?>
        </div>
        <div class="modal-body">
          <?php print $elements['#markup']; ?>
        </div>
      </div>
    </div>
  </div>
</div>
