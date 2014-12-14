
$( document ).ready( function() {

	if(!Modernizr.svg) {
		$('img[src*="svg"]').attr('src', function () {
			return $(this).attr('src').replace('.svg', '.png');
		});
	}

	$("#main").onepage_scroll({
		sectionContainer: "section",
		easing: "ease",
		animationTime: 1000,
		pagination: true,
		updateURL: false,
	});


	$('.app-icons li').on( "over mouseover", function() {
		$('.gameInfo h1').text( $( this ).data( 'name' ) );
		$('.mobile .gameWindow').removeClass().addClass( 'gameWindow '+$( this ).attr('class'));
		$('.mobile .gameWindow').css('background-image', 'url(images/games/'+$( this ).data( 'name' )+'_captures.png)' );
		$( '#platformValue' ).html( $( this ).data( 'platform' ) );
	});

	$('.app-icons li').on( "click", function() {
		$('.app-icons li').removeClass( 'active');
		$( this ).addClass( 'active');
	});
});

