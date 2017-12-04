<?php if ( 'on' === et_get_option( 'divi_back_to_top', 'false' ) ) : ?>

	<span class="et_pb_scroll_top et-pb-icon"></span>

<?php endif;

if ( ! is_page_template( 'page-template-blank.php' ) ) : ?>

			<footer id="main-footer">

				<script type="text/javascript">

				jQuery(function($) {
				// 	('#circle').circleProgress({
				// 		value: 0.75,
				// 		size: 80,
				// 		fill: {
				// 			gradient: ["red", "orange"]
				// 		}
				// 	});
				});


		</script>

				<div class="footer-location">

					<div class="grid">
						<div class="col-1-2">
							<h3 class="baron white">contact us</h3>
<div class="contact">
							<p>Elevate USA <br />
5310 Ward Road<br />
Suite G-05<br />
Arvada, CO 80002<br />

Phone: 720-320-0252<br /><p>
</div>
	<p class="terms">©2017 Elevate, USA all right reserved. Contact Us with questions.</p>
						</div>
						<div class="col-1-3">
							<img src="http://devel.elevatetheusa.org/wp-content/uploads/2017/10/Group-933-1.svg">

						</div>

					</div>
				</div>


			</footer> <!-- #main-footer -->
		</div> <!-- #et-main-area -->

<?php endif; // ! is_page_template( 'page-template-blank.php' ) ?>

	</div> <!-- #page-container -->

	<?php wp_footer(); ?>
</body>
</html>
