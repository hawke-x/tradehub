<!DOCTYPE html>
<html>
	<head>
		<title>Trade Hub -- Products</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link href="_/css/bootstrap.min.css" rel="stylesheet" media="screen">
		<link href="_/css/mystyle.css" rel="stylesheet" media="screen">
	</head>
	<body id="products">
		<section class="container">
			<?php include "_/components/php/snippet-cart-bar.php";?>

			<div class="content row">
				<?php include "_/components/php/header.php"; ?>
				<h1>This is Products page</h1>
				<section class="sidebar col col-lg-3"><!-- define a section as COLUMN folowed by 8-Coloumns in total -->
					
					<h2>Side Bar</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</section><!--main area-->
				<section class="main col col-lg-9">
					<h2>Item List</h2>
					<?php include "_/components/php/snippet-all-items.php"; ?>

				</section><!-- Main-Content -->
			</div><!-- sidebar -->
			<?php include "_/components/php/footer.php"; ?>
		</section><!-- container -->

		<script src="_/js/jquery.js"></script>
		<script src="_/js/bootstrap.min.js"></script>
		<script src="_/js/myscript.js"></script>
	</body>
</html>