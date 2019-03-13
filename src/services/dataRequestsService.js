
import axios from 'axios';

const BASE_URL = 'http://www.allomatch.com/iphone.php/';


export default class DataRequestsService  {

    static getUpComingMatches = () => axios.get(BASE_URL + 'match/upcomingMatches/version/2').then(response =>response.data);

}