var BubbleShoot = window.BubbleShoot || {};
BubbleShoot.Game = (function($){
	var Game = function(){
		this.init = function(){
			console.log("Init Loaded...");
			$(".but_start_game").bind("click",startGame);
		};
		var startGame = function(){
			console.log("Staring Game...");
			$(".but_start_game").unbind("click");
			BubbleShoot.ui.hideDialog();
		};
	};
	return Game;
})(jQuery);