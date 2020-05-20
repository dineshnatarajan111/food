import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses' ,
    headers: {
        Authorization: 'Bearer PCfBcwyWGBW-jh1cRSgUpKVsS0ymsNAtbvZDFXIAepA-TVAjKI7-8kTBnjHchVG2cyCQo4uIjOm_pdRJrfeZGpU-TdORdPGRNp0g8hesWZbt5UbIs1BBn0CgedamXnYx'
    },
});


