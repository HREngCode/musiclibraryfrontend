export const URL_HOST = 
    process.env.NODE_ENV === "production"
        // ? "PRODUCTIONBASEURLHERE"
        ? "https://cors-everywhere-me.herokuapp.com/http://musiclibrarybackend-env.eba-wfmpsunh.us-east-2.elasticbeanstalk.com"
        : "http://127.0.0.1:8000";