<!DOCTYPE html>
<html>
	<head>
		<title>Trade Hub</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link href="_/css/bootstrap.min.css" rel="stylesheet" media="screen">
		<link href="_/css/mystyle.css" rel="stylesheet" media="screen">
	</head>
	<body id="home">
		
		<section class="container">
			<!--<div class="content row" >-->
		<!-- <section class="personal-watch"> -->
			<?php include "_/components/php/snippet-cart-bar.php";?>
		<!-- </section>	 -->	
			<!--</div>-->
				<div class="content row">
					<?php include "_/components/php/header.php";?>
					<?php include "_/components/php/snippet-carousel.php";?>

					<section class="main col col-lg-8"><!-- define a section as COLUMN folowed by 8-Coloumns in total -->					
						<?php include "_/components/php/article-intro.php";?>
						
						<h2>Main Content</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					</section><!--main area-->
					<section class="sidebar col col-lg-4">
						<h2>Sidebar</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					</section><!-- sidebar -->
				</div> <!-- end of "content row" -->

				<div class="content row clearfix">
					<?php include "_/components/php/snippet-services.php"; ?>
				</div><!-- end of services content row -->
			
			<div class="content row clearfix">
				<?php include "_/components/php/footer.php"; ?>
			</div><!-- Footer end -->
		</section><!-- container -->

		<script src="_/js/jquery.js"></script>
		<script src="_/js/bootstrap.min.js"></script>
		<script src="_/js/myscript.js"></script>
	</body>
</html>