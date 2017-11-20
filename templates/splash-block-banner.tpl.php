<div class="splash-block-banner">
  <div class="splash-block-banner-content">
    <?php if (!empty($elements['#block']->title)): ?>
      <h4 class="custom-banner-title"><?php print $elements['#block']->title; ?></h4>
    <?php endif; ?>
    <?php print $elements['#markup']; ?>
  </div>
  <a class="splash-block-banner-close" href="#">close</a>
</div>
