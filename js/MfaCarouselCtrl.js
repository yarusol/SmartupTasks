angular.module('ui.bootstrap.demo', ['ngAnimate', 'ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('MfaCarouselCtrl', function ($scope) {

	$scope.myInterval = 3000;
	$scope.noWrapSlides = false;
	$scope.slides = [];
	$scope.addSlide = addSlide;
	$scope.randomize = randomize;		// Is it needed for us ?

	var slides = $scope.slides;
	var currIndex = 0;

	for (var i = 1; i <= 8; i++) {

		var path = getImagePath(i);
		var title = getTitle(i);
		var text1 = getText();
		var text2 = getText();

		$scope.addSlide(path, title, text1, text2);
	}


	function addSlide(path, title, text1, text2 ) {
		slides.push({
			image: path,
			title: title,
			text1: text1,
			text2: text2,
			id: currIndex++
		});

	};



	/////////// Randomize logic below  //////////////////

	function getImagePath(idx) {
		var aTexts = [
			'img/launch1.jpg',
			'img/launch2.jpg',
			'img/launch3.jpg',
		];
		if (idx) {
			return aTexts[i % aTexts.length];
		}
		else {
			return aTexts[Math.ceil(Math.random() * 10) % aTexts.length];
		}
	}

	function getTitle(idx) {
		var aTexts = [
			'Really Big And Fast Money !',
			'Income exempt from tax !',
			'Revenue is growing !',
			'Let your money work for you!'
		];
		if (idx) {
			return aTexts[i % aTexts.length];
		}
		else {
			return aTexts[Math.ceil(Math.random() * 10) % aTexts.length];
		}
	}

	function getText() {
		var aTexts = [
			'Collaboratively administrate empowered markets via plug-and-play networks.',
			'Dynamically procrastinate B2C users after installed base benefits.',
			'Dramatically visualize customer directed convergence without revolutionary ROI.',
			'Efficiently unleash cross-media information without cross-media value.',
			'Quickly maximize timely deliverables for real-time schemas.',
			'Dramatically maintain clicks-and-mortar solutions without functional solutions.',
			'Completely synergize resource taxing relationships via premier niche markets.',
			'Proactively envisioned multimedia based expertise and cross-media growth strategies.'
		]
		return aTexts[Math.ceil(Math.random() * 10) % aTexts.length];
	}

	function randomize() {	
		var indexes = generateIndexesArray();
		assignNewIndexesToSlides(indexes);
	};	

	function assignNewIndexesToSlides(indexes) {
		for (var i = 0, l = slides.length; i < l; i++) {
			slides[i].id = indexes.pop();
		}
	}

	function generateIndexesArray() {
		var indexes = [];
		for (var i = 0; i < currIndex; ++i) {
			indexes[i] = i;
		}
		return shuffle(indexes);
	}

	// http://stackoverflow.com/questions/962802#962890
	function shuffle(array) {
		var tmp, current, top = array.length;

		if (top) {
			while (--top) {
				current = Math.floor(Math.random() * (top + 1));
				tmp = array[current];
				array[current] = array[top];
				array[top] = tmp;
			}
		}

		return array;
	}

});