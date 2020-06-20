

// CODE SOURCE ULR : dev.to/vitaliemaldur/resize-event-listener-using-react-hooks-1k0c
import  {useEffect,useState} from 'react'

const getWidth = () => window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;

    function useCurrentWitdh(){
        // save current window width in the state object
        var [width, setWidth] = useState(getWidth())

        // console.log(width)
            
        // in this case useEffect will execute only once because
        // it does not have any dependencies.
        useEffect(() => {
            
            // timeoutId for debounce mechanism
            let timeoutId = null;
            const resizeListener = () => {
                // prevent execution of previous setTimeout
                clearTimeout(timeoutId);
                // change width from the state object after 150 milliseconds
                timeoutId = setTimeout(() => setWidth(getWidth()), 50);
                
                
            };            
            // set resize listener
            window.addEventListener('resize', resizeListener)
            // clean up function
            return () => {
                // remove resize listener
                window.removeEventListener('resize', resizeListener)
            }
                
        }, [])

        let listener = {width}
        return listener
    }
    
    export default useCurrentWitdh













// let resizeListener = () => {
//     const getWidth = () => window.innerWidth
//         || document.documentElement.clientWidth
//         || document.body.clientWidth;
    
//     console.log(getWidth())
//     return getWidth()


// }; 
// window.addEventListener('resize', resizeListener);
// export default resizeListener
