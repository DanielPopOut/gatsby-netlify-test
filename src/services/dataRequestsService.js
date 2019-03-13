
import axios from 'axios';

export default class dataRequestsService  {
    BASE_URL = 'http://www.allomatch.com/iphone.php/';

    getUpComingMatches = axios.get(baseUrl + 'match/upcomingMatches/version/2')

}