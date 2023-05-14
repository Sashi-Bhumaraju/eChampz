import { useState } from "react";
import { useDispatch } from "react-redux";

function UseThunk (thunk) {
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState(null);
        const [data,setData] = useState('');
        const dispatch = useDispatch();

        const runThunk = (args) => {
            setLoading(true);
            setError(null);
            dispatch(thunk(args))
                .unwrap()
                .then(d=>setData(d))
                .catch(err=>setError(err))
                .finally(()=>setLoading(false));
        }

        return [runThunk, data, loading, error];
}

export default UseThunk;