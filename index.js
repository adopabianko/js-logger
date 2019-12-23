const logLib = require('./log-activity');

logLib.createLog(['GET', '119.110.87.74', 'https://www.google.com/', "param=param1", {"status": "00"}]);
logLib.createLog(['POST', '119.110.87.74', 'https://www.google.com/', {"email": "ado@ganteng.com", "password": "admin123"}, {"status": "00"}]);