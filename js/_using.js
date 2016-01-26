
window.using = function( pathToJS ){
	$( function(){
		document.head.appendChild(
			(function(){
				var newScriptElement = document.createElement( "script" );
				newScriptElement.src = pathToJS;
				return newScriptElement;
			})()
		)
	})
};
