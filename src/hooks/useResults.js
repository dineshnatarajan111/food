import {useEffect ,useState} from 'react';
import yelp from '../api/yelp';

export default () => {
    const [result, setResult] = useState([]);
    const [errmsg, setErrmsg] = useState('');

    const searchApi = async (searchTerm) => {
        console.log("Hi !! TESTING");
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term : searchTerm,
                    location: "san jose"
                }
            });
            setResult(response.data.businesses);
        }
        catch (err) {
            console.log(err);
            setErrmsg("Something Went Wrong");
        }
    };

    useEffect(() => {
        searchApi("Tofu");
    }, []);

    return[result,errmsg, searchApi];
}; 