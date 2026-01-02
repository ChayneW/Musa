// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { SplitText } from "gsap/SplitText";
// import Lenis from "lenis";


// document.addEventListener("DOMContentLoaded", () => {
// 	gsap.registerPlugin(ScrollTrigger, SplitText);

// 	const lenis = new Lenis();

// 	lenis.on("scroll", ScrollTrigger.update); 
// 	gsap.ticker.add((time) => {
// 		lenis.raf(time * 1000);
// 	});

// 	gsap.ticker.lagSmoothing(0);

// 	const slides = [
// 		{
// 			title: " 1 testing 1, 3, nah test 2 if i was you...",
// 			image: "/images/serene-monochromatic-landscape.png",
// 		},
// 		{
// 			title: " 2 testing 1, 3, nah test 2 if i was you...",
// 			image: "/images/desert-pink-moon.png",
// 		},
// 		{
// 			title: " 3 testing 1, 3, nah test 2 if i was you...",
// 			image: "/images/roman-unsplash.jpg",
// 		},
// 		{
// 			title: " 4 testing 1, 3, nah test 2 if i was you...",
// 			image: "/images/pose-japan.jpg",
// 		},
// 		{
// 			title: " 5 testing 1, 3, nah test 2 if i was you...",
// 			image: "/images/skeletal-figure.png",
// 		},
// 		{
// 			title: " 6 testing 1, 3, nah test 2 if i was you...",
// 			image: "/images/battle-japan.jpg",
// 		},
// 		{
// 			title: " 7 testing 1, 3, nah test 2 if i was you...",
// 			image: "/images/pose-japan.jpg",
// 		},
// 	];

// 	const pinDistance = window.innerHeight * slides.length;
// 	const progressBar = document.querySelector(".slider-progress");
// 	const sliderImages = document.querySelector(".slider-images");
// 	const sliderTitle = document.querySelector(".slider-title");
// 	const sliderIndices = document.querySelector(".slider-indices");

// 	let activeSlide = 0;
// 	let currentSplit = null;

// 	function createIndices() {
// 		sliderIndices.innerHTML = "";

// 		slides.forEach((_, index) => {
// 			const indexNum = (index + 1).toString().padStart(2, "0");
// 			const indicatorElement = document.createElement("p");
// 			indicatorElement.dataset.index = index;
// 			indicatorElement.innerHTML = `<span class="marker"></span><span class="index">${indexNum}</span>`
			
// 			sliderIndices.appendChild(indicatorElement);

// 			if (index === 0) {
// 				gsap.set(indicatorElement.querySelector(".index"), {
// 					opacity: 1,
// 				});
// 				gsap.set(indicatorElement.querySelector(".marker"), {
// 					scaleX: 1,
// 				});
// 			} else {
// 				gsap.set(indicatorElement.querySelector(".index"), {
// 					opacity: 0.35,
// 				});
// 				gsap.set(indicatorElement.querySelector(".marker"), {
// 					scaleX: 0,
// 				});
// 			}


// 		});
// 	}

// 	function animateNewSlide(index) {
// 		const newSliderImage = document.createElement("img");
// 		newSliderImage.src = slides[index].image;
// 		newSliderImage.alt = `Slide ${index + 1}`;

// 		gsap.set(newSliderImage, {
// 			opacity: 0,
// 			scale: 1.1,
// 		});

// 		sliderImages.appendChild(newSliderImage);

// 		gsap.to(newSliderImage, {
// 			opacity: 1,
// 			duration: 0.5,
// 			ease: "power2.out",
// 		});

// 		const allImages = sliderImages.querySelectorAll("img");
		
// 		if (allImages.length > 3) {
// 			const removeCount = allImages.length - 3;
// 			for (let i = 0; i < removeCount; i++) {
// 				sliderImages.removeChild(allImages[i]);
// 			}
// 		}

// 		animateNewTitle(index);
// 		animateIndicators(index);
// 	}


// 	function animateIndicators(index) {
// 		const indicators = sliderIndices.querySelectorAll("p");

// 		indicators.forEach((indicator, i) => {
// 			const markerElement = indicator.querySelector(".marker");
// 			const indexElement = indicator.querySelector(".index");
// 			if (i === index) {
// 				gsap.to(indexElement, {
// 					opacity: 1,
// 					duration: 0.3,
// 					ease: "power2.out",
// 				});

// 				gsap.to(markerElement, {
// 					scaleX: 1,
// 					duration: 0.3,
// 					ease: "power2.out",
// 				});
// 			} else {
// 				gsap.to(indexElement, {
// 					opacity: 0.5,
// 					duration: 0.3,
// 					ease: "power2.out",
// 				});
// 			}
// 		});
// 	}

// 	function animateNewTitle(index) {

// 		if (currentSplit) {
// 			currentSplit.revert();
// 		}

// 		sliderTitle.innerHTML = `<h1>${slides[index].title}</h1>`;

// 		currentSplit = new SplitText(sliderTitle.querySelector("h1"), {
// 			type: "lines",
// 			lineClass: "line",
// 			mask: "lines",
// 		});

// 		gsap.set(currentSplit.lines, {
// 			yPercent: 100,
// 			opacity: 0,
// 		});

// 		gsap.to(currentSplit.lines, {
// 			yPercent: 0,
// 			opacity: 1,
// 			duration: 0.75,
// 			stagger: 0.1,
// 			ease: "power3.out",
// 		});

// 	} //end

// 	createIndices();

// 	ScrollTrigger.create({
// 		trigger: ".slider",
// 		start: "top top",
// 		end: `+=${pinDistance}px`,
// 		scrub: 1,
// 		pin: true,
// 		pinSpacing: true,
// 		onUpdate: (self) => {
// 			gsap.set(progressBar, {
// 				scaleY: self.progress,
// 			});

// 			const currentSlide = Math.floor(self.progress * slides.length);

// 			if (activeSlide !== currentSlide && currentSlide < slides.length) {
// 				activeSlide = currentSlide;
// 				animateNewSlide(activeSlide);
// 			}
// 		},
// 	});

// });



import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";
import posthog from "posthog-js";


import { inject } from '@vercel/analytics';

if (import.meta.env.PROD) {
  inject();
};


posthog.init(import.meta.env.VITE_POSTHOG_KEY, {
	api_host: import.meta.env.VITE_POSTHOG_HOST,
	capture_pageview: true,
	autocapture: false,
});

posthog.init('phc_w7SEYPkYDjoBJh9AZIgOnMbuKvsR5tZCb1XH66R56z0',
    {
        api_host: 'https://us.i.posthog.com',
        person_profiles: 'identified_only' // or 'always' to create profiles for anonymous users as well
    }
)


// const loader = document.querySelector(".loader");
// document.body.classList.add("is-loading");


document.addEventListener("DOMContentLoaded", () => {


	const loader = document.querySelector(".loader");
	document.body.classList.add("is-loading");
	

	const digit1 = document.querySelector(".digit-1");
	const digit2 = document.querySelector(".digit-2");
	const digit3 = document.querySelector(".digit-3");
	const digit4 = document.querySelector(".digit-4");

	function splitTextIntoSpans(selector) {
		var element = document.querySelector(selector);
		if (element) {
			var text = element.innerText;
			var splitText = text.split("").map((char) => `<span>${char}</span>`).join("");
			element.innerHTML = splitText;
		}
	}
	// splitTextIntoSpans()

	for(let i = 0; i < 2; i++) {
		for(let j = 0; j < 10; j++) {
			const div = document.createElement("div");
			div.className = "num";
			div.textContent = j;
			digit3.appendChild(div);

		}
	}

	const finalDigit = document.createElement("div");
	finalDigit.className = "num";
	finalDigit.textContent = "0";
	digit3.appendChild(finalDigit);

	function animate(digit, duration, delay = 1) {
		const numHeight = digit.querySelector(".num").clientHeight;

		const totalDistance = (digit.querySelectorAll(".num").length - 1) * numHeight;
		gsap.to(digit, {
		y: -totalDistance,
		duration: duration,
		delay: delay,
		ease: "power2.inOut",
		})
	}

	animate(digit3, 5);
	animate(digit2, 6);
	animate(digit1, 2, 5);
	

	// const loader = document.querySelector(".loader");
	// document.body.classList.add("is-loading");

	gsap.registerPlugin(ScrollTrigger, SplitText);

	const lenis = new Lenis();
	lenis.on("scroll", ScrollTrigger.update);
	gsap.ticker.add((time) => lenis.raf(time * 1000));
	gsap.ticker.lagSmoothing(0);

	const slides = [
		{
			title: " Echoes preserved in ink and silence... ",
			image: "/images/serene-monochromatic-landscape.png",
		},
		{
			title: " Under soft hum of streetlights she watch... ",
			image: "/images/foggy-neon.png",
		},
		{
			title: " Not all battles belong to history... ",
			image: "/images/roman-unsplash.jpg",
		},
		{
			title: " Grace sharpened into stillness... ",
			image: "/images/pose-japan.jpg",
		},
		{
			title: " Death, dressed in bright colors... ",
			image: "/images/skeletal-figure.png",
		},
		{
			title: " A still frame caught between empire and legend... ",
			image: "/images/battle-japan.jpg",
		},
		{
			title: " A stillness that refuses to sink... ",
			image: "/images/solitary-figure.png",
		},
	];

	const pinDistance = window.innerHeight * slides.length;
	const progressBar = document.querySelector(".slider-progress");
	const sliderImages = document.querySelector(".slider-images");
	const sliderTitle = document.querySelector(".slider-title");
	const sliderIndices = document.querySelector(".slider-indices");

	let activeSlide = 0;
	let currentSplit = null;
	let preloadedImages = [];

	function preloadImages(slides) {
		return Promise.all(
			slides.map((slide) => {
				return new Promise((resolve, reject) => {
					const img = new Image();
					img.src = slide.image;
					img.onload = () => resolve(img);
					img.onerror = reject;
				});
			})
		);
	}

	function createIndices() {
		sliderIndices.innerHTML = "";

		slides.forEach((_, index) => {
			const indexNum = (index + 1).toString().padStart(2, "0");
			const indicator = document.createElement("p");
			indicator.innerHTML = `<span class="marker"></span><span class="index">${indexNum}</span>`;
			sliderIndices.appendChild(indicator);

			gsap.set(indicator.querySelector(".index"), {
				opacity: index === 0 ? 1 : 0.35,
			});
			gsap.set(indicator.querySelector(".marker"), {
				scaleX: index === 0 ? 1 : 0,
			});
		});
	}

	function animateNewSlide(index) {
		const newImage = preloadedImages[index].cloneNode();
		newImage.alt = `Slide ${index + 1}`;

		gsap.set(newImage, { opacity: 0, scale: 1.1 });
		sliderImages.appendChild(newImage);

		gsap.to(newImage, {
			opacity: 1,
			duration: 0.5,
			ease: "power2.out",
		});

		const images = sliderImages.querySelectorAll("img");
		if (images.length > 3) {
			images[0].remove();
		}

		animateNewTitle(index);
		animateIndicators(index);
	}

	function animateIndicators(index) {
		const indicators = sliderIndices.querySelectorAll("p");

		indicators.forEach((el, i) => {
			gsap.to(el.querySelector(".index"), {
				opacity: i === index ? 1 : 0.5,
				duration: 0.3,
			});
			gsap.to(el.querySelector(".marker"), {
				scaleX: i === index ? 1 : 0,
				duration: 0.3,
			});
		});
	}

	function animateNewTitle(index) {
		if (currentSplit) currentSplit.revert();

		sliderTitle.innerHTML = `<h1>${slides[index].title}</h1>`;
		currentSplit = new SplitText(sliderTitle.querySelector("h1"), {
			type: "lines",
			lineClass: "line",
			mask: "lines",
		});

		gsap.fromTo(
			currentSplit.lines,
			{ yPercent: 100, opacity: 0 },
			{
				yPercent: 0,
				opacity: 1,
				duration: 0.75,
				stagger: 0.1,
				ease: "power3.out",
			}
		);
	}

	function initScrollTrigger() {
		ScrollTrigger.create({
			trigger: ".slider",
			start: "top top",
			end: `+=${pinDistance}px`,
			scrub: 1,
			pin: true,
			onUpdate: (self) => {
				gsap.set(progressBar, { scaleY: self.progress });

				const currentSlide = Math.floor(self.progress * slides.length);
				if (activeSlide !== currentSlide && currentSlide < slides.length) {
					activeSlide = currentSlide;
					animateNewSlide(activeSlide);
				}
			},
		});
	}

	preloadImages(slides).then((images) => {
		preloadedImages = images;
		createIndices();
		initScrollTrigger();



		// loading loader here:

		// Fade out loader
		gsap.to(".loader", {
			opacity: 0,
			duration: .8,
			delay: 9,
			ease: "power2.out",
			onComplete: () => {
				loader.remove();
				document.body.classList.remove("is-loading");
			},
		}); 

	});
});

