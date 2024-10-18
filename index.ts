import { Configuration, LocationsApi } from '@YaSuenag/casdk';

const conf = new Configuration({basePath: 'http://localhost:8080'});
const locApi = new LocationsApi(conf);

locApi.getAllLocations()
      .then((response) => console.log(response.data));
