//rsc
import {useEffect, useRef, useState} from 'react';

export const useFetch = (url) => {

    const isMounted = useRef(true);// se ocupa para validar si esta montado o no
    const [state, setState] = useState({data: null, loading: true, error: null,});

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {

        setState({data: null, loading: true, error: null,})

        fetch(url)
            .then(resp => resp.json())
            .then(data => {

                if (isMounted.current) {
                    setState({
                        loading: false,
                        error: null,
                        data: data
                    })
                }

            });

    }, [url]);//haga un cambio cada vez que vea un cambio en la url

    return state;

};
