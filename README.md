# TODOx


### Setup

Assuming you have Python3.8 installed. Make the following commands:

```shell script
$ python3.8 -m venv venv
# For Windows:
$ cd venv/Scripts/
$ activate
$ cd ..
$ cd ..

# For Linux:
$ source venv/bin/activate

# Install requirements.
$ pip install -r requirements.txt
$ npm install

# Run.
$ python manage.py runserver
``` 


## Frontend React app

**PATH:** `todox/frontend/src`


### How to build?

- **With hot reload**
```shell script
$ npn run dev
```

- **Production build**

```shell script
$ npm run build
```


## API Endpoints

### Authorization

**BASE URL:** `/api/auth`

- `/register/`
- `/authorize/`
- `/user/`
- `/revoke/`


### Todo

**BASE URL:** `/api`

- `/tasks/`
