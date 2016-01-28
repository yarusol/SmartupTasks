angular.module('ui.bootstrap.demo', ['ngAnimate', 'ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('NiaCarouselCtrl', function ($scope) {

	$scope.myInterval = 3000;
	$scope.noWrapSlides = false;
	$scope.slides = [];
	$scope.addSlide = addSlide;
	$scope.randomize = randomize;		// Is it needed for us ?

	var slides = $scope.slides;
	var currIndex = 0;

	for (var i = 1; i <= 8; i++) {
		investors = [];
		for (var j = 0 ; j < 4 ; j++) {
			investors.push( new Investor(i) );
		}
		$scope.addSlide(investors);
	}


	function addSlide(investors) {
		slides.push({
			investors: investors,
			id: currIndex++
		});
	};



	/////////// Randomize logic below  //////////////////

	function Investor( i ) {
		this.avatar = getImagePath();
		this.name = getName();
		this.position = getPosition();
		this.textFront = getTextFront();
		this.textBack = getTextBack();
	}


	function getImagePath(idx) {
		var aTexts = [
			'img/investor1.jpg',
			'img/investor2.jpg',
			'img/investor3.jpg',
			'img/investor4.jpg'
		];
		if (idx) {
			return aTexts[i % aTexts.length];
		}
		else {
			return aTexts[Math.ceil(Math.random() * 10) % aTexts.length];
		}
	}

	function getName(idx) {
		var aTexts = [
			'Larry Page',
			'Eric Shmidt',
			'Linus Torvalds',
			'Bill Gates',
			'Gabe Newell'
		];
		if (idx) {
			return aTexts[i % aTexts.length];
		}
		else {
			return aTexts[Math.ceil(Math.random() * 10) % aTexts.length];
		}
	}

	function getPosition(idx) {
		var aTexts = [
			'Google Founder',
			'CEO, Google',
			'Entrepreneur',
			'Investor'
		];
		if (idx) {
			return aTexts[i % aTexts.length];
		}
		else {
			return aTexts[Math.ceil(Math.random() * 10) % aTexts.length];
		}
	}

	function getTextFront() {
		var aTexts = [
			"Most angels per pixel.",
			"The best aggregation of angel investors in the world.",
			"Good place to network with startup and investor ecosystem.",
			"This is better crowd investing market place than most others we work with."
		]
		return aTexts[Math.ceil(Math.random() * 10) % aTexts.length];
	}

	function getTextBack() {
		var aTexts = [
			"I felt I had a positive experience at the Smartup. Just being there communicating and receiving more input about what mattered to investors was quite beneficial to me. Experience the application process and however far it takes you. Having a conversation with people (backers) who invest in startups regularly is invaluable. A very good opportunity to make real connections.",
			"Well thought out and felt far more sincerely dedicated to getting the right people to meet. Excellent screening process and the blogs were exceptionally helpful. Great room of VCs and investors. I thought usable featuring, the pitch reviews, the showcase, all of that was wonderful."
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