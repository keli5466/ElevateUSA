<?php if ( 'on' === et_get_option( 'divi_back_to_top', 'false' ) ) : ?>

	<span class="et_pb_scroll_top et-pb-icon"></span>

<?php endif;

if ( ! is_page_template( 'page-template-blank.php' ) ) : ?>

			<footer id="main-footer">




				<!-- <script>
				  $('#circle').circleProgress({
				    value: 0.75,
				    size: 80,
				    fill: {
				      gradient: ["red", "orange"]
				    }
				  });
				</script> -->
				<!-- <div  id="selections"></div>
	<img id="vegetables" src="http://elevateusa.dev/wp-content/uploads/2017/10/Group-833.png" usemap="#veg">
	<map id="veg_map" name="veg">
	  <area alt="Flordia " name="Flordia" href="#" coords="669,431,676,439,724,434,739,439,761,473,760,480,777,535,774,544,759,543,747,530,739,522,724,501,731,491,720,493,721,473,706,460,691,451,686,457,671,461,652,450,626,453,628,446,622,437" shape="poly">
	    <area shape="poly" name="Nevada" coords="88,159,180,179,157,306,144,302,143,309,142,330,71,220,88,159" href="#">
	    <area shape="poly" name="Phoenix" coords="162,282,244,296,227,420,191,416,127,379,137,371,132,368,134,360,141,350,148,344,143,331,146,303,156,306,161,281" href="#">
	     <area alt="Denver" name="Denver" href="#" coords="254,211,373,225,364,311,243,299" shape="poly">
	     <area target="" alt="Indianapolis" name="Indianapolis" href="#" coords="603,204,648,199,653,257,645,271,632,283,618,289,602,293,601,279,607,262,606,230" shape="poly">
	    <area target="" alt="NYC" name="NYC" href="#" coords="808,180,804,193,804,203,812,211,803,222,806,228,817,233,822,222,826,204,825,189" shape="poly">
	    <area target="" alt="New England" name="NewEngland" href="#" coords="827,160,857,154,864,162,873,154,861,143,861,135,824,148,820,158" shape="poly">
	</map>  -->
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
