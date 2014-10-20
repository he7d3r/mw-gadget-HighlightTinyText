/**
 * Add a link to highligh tiny text
 * @author: Helder (https://github.com/he7d3r)
 * @license: CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0/>
 */
( function ( mw, $ ) {
	'use strict';
	var minFontSize = 9;

	function addHighlightLink() {
		$( mw.util.addPortletLink(
			'p-cactions',
			'#',
			'Highlight tiny text',
			'ca-tiny-text',
			'Hightlight elements whose font-size is too small'
		) ).click( function ( e ) {
			$( '*' ).filter( function () {
				return parseInt( $( this ).css( 'font-size' ), 10 ) < minFontSize;
			} ).css( 'background-color', 'red' );
		} );
	}

	$( addHighlightLink );

}( mediaWiki, jQuery ) );
