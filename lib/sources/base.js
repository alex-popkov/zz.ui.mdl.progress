/**
 * @fileoverview Provide zz.ui.mdl.progress base object.
 * @license Apache-2.0
 * @author popkov.aleksander@gmail.com (Popkov ALexander)
 */

goog.provide( 'zz.ui.mdl.progress' );

goog.require( 'zz.ui.mdl.progress.tpl' );
/**
 * Base namespace for zz.ui.mdl.progress module.
 * @const
 */
zz.ui.mdl.progress = zz.ui.mdl.progress || { };

/**
 * Bootstrap module method.
 */
zz.ui.mdl.progress.bootstrap = function( ){

    soy.renderElement( goog.dom.getElement( 'root' ), zz.ui.mdl.progress.tpl.default );
	var prg1 = new zz.ui.mdl.Progress( );
		prg1.decorate( goog.dom.getElement( '1' ) );
		prg1.setProgress( 10 );
	var prg2 = new zz.ui.mdl.Progress( );
		prg2.decorate( goog.dom.getElement( '2' ) );
	var prg3 = new zz.ui.mdl.Progress( );
		prg3.decorate( goog.dom.getElement( '3' ) );
};
window[ 'zz.ui.mdl.progress.bootstrap' ] = zz.ui.mdl.progress.bootstrap;