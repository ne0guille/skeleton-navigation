export class MyTechnologies {
	
	constructor(){
		this.swiper;
	}

	attached(){
	 var mySwiper = new Swiper('.swiper-container', {
	    speed: 400,
	    spaceBetween: 100
	 });	
	 
	 this.swiper = mySwiper;	
	}
}