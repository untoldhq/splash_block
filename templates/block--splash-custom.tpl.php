<div class="splash-block-overlay"></div>
<div class="splash-block-modal">
  <div class="splash-block-splash">
    <?php if (!empty($elements['#block']->title)): ?>
      <h4 class="custom-modal-title"><?php print $elements['#block']->title; ?></h4>
    <?php endif; ?>
    <?php print $elements['#markup']; ?>
  </div>
  <a class="splash-block-close" href="#">close</a>
</div>
