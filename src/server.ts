import app from './app';
import config from './config'

console.log("PORT: ", config.PORT);

(async () => {
    try {
        console.log('enter async');
        app.listen(config.PORT, () => {
            console.log(`Server running on http://localhost:${config.PORT}`);
        })
    } catch(error) {
        console.error('Failed to start server:', error);

        if(config.NODE_ENV === 'production') {
            process.exit(1);
        }
    }
})();
