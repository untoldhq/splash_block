<?php if ($splash_block_js == 0): ?>
  <div id="splash-block-overlay"></div>
  <div id="splash-block-modal">
    <div id="splash-block-splash">
      <?php echo $elements['#markup']; ?>
    </div>
    <a id="splash-block-close" href="#">close</a>
  </div>
<?php elseif ($splash_block_js == 1): ?>
  <div class="splash-content modal fade" tabindex="-1" role="dialog" aria-labelledby="AFSCModal">
    <div class="vertical-alignment-helper">
      <div class="modal-dialog vertical-align-center" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          </div>
          <?php echo $elements['#markup']; ?>
        </div>
      </div>
    </div>
  </div>
<?php endif; ?>
