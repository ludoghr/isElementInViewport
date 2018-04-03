/**
  * @desc check whether an element is in viewport or not
  * @param {HTMLelement} el - the element to check
  * @param {string} section - top || bottom - the section of the element that must be inside the viewport
  * @return {bool} - if the element is inside the viewport or not
*/
export const isElementInViewport = (el, section='top') => {
	let rect = el.getBoundingClientRect();
	let sectionArray = [];

	sectionArray['top'] = rect.top;
	sectionArray['bottom'] = rect.bottom;

	return (
		sectionArray[section] <= (window.innerHeight || document.documentElement.clientHeight)
	);
}
