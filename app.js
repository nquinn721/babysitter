const express = require('express'),
	  app = express();

app.use(express.static('./public'));
app.listen(3000, () => console.log('Server running on port 3000\n Please open in the browser'));