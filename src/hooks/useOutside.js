import {useEffect} from 'react'

const useOutside = (element, handler) => {
    useEffect(() => {
        const eventListener = (event) => {
            if (!element.current || element.current.contains(event.target)) {
                return
            } else {
                handler(event)
            }
        };
        document.addEventListener('click', eventListener)

        return () => {
            document.removeEventListener('click', eventListener)
        }
    }, [element, handler])
}

export default useOutside
