import {App} from "../handler/app";

const app = new App().run();
const port = 3000;

app.listen(port, () => {
    console.log(`Timezones by location application is running on port ${port}.`);
});
