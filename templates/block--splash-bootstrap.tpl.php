<div class="splash-content modal fade" tabindex="-1" role="dialog" aria-labelledby="AFSCModal">
  <div class="vertical-alignment-helper">
    <div class="modal-dialog vertical-align-center" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <?php if (!empty($elements['#block']->title)): ?>
            <h4 class="modal-title"><?php print $elements['#block']->title; ?></h4>
          <?php endif; ?>
        </div>
        <div class="modal-body">
          <?php print $elements['#markup']; ?>
        </div>
      </div>
    </div>
  </div>
</div>
