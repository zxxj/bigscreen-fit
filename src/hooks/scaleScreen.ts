
export const useScaleScreen = (el: any) => {
	const scaleScreen = () => {
		if (el) {
			el.style.transform = `scale(${getScale()}) translate(-50%, -50%)`
		}
	}
	
	const getScale = () => {
		const w = window.innerWidth / 1920
		const h = window.innerHeight / 1080
		return w < h ? w : h
	}
	
	window.onresize = () => {
		scaleScreen()
	}
}