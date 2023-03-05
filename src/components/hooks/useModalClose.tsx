import React, {RefObject} from "react";

export const useModalClose = (ref: RefObject<HTMLDivElement>, handler: () => void) => {
	React.useEffect(() => {
		const reference = ref?.current;
		
		const listener = (e: MouseEvent) => {
			if (reference === e.target) handler()
		}
		reference?.addEventListener('mousedown', listener)
		
		return () => reference?.removeEventListener('mousedown', listener)
	}, [ref, handler])
}