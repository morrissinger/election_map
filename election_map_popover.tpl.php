<div class="popover popover-<?php print $term->tid ?> right">
	<div class="throbber">Loading data...</div>
	<div class="data">
		<div class="arrow"></div>
		<h3 class="popover-title"><?php print $term->name ?></h3>
		<div class="popover-content">
			<?php foreach($nodes as $nid => $node) : ?>
				<?php print theme('node', $node); ?>
			<?php endforeach; ?>
		</div>          
	</div>
</div>