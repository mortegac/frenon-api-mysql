## Ejemplo de conexión a Mysql

Se utiliza express y mysql

## Métodos

- GET:  http://localhost:5000/api/users/  
- GET:  http://localhost:5000/api/users/:id

- POST  http://localhost:5000/api/users/ 

body: raw tipo JSON
```
{ 
	"user":{
		"mail": "lala@lala.cl" , 
		"status": "6"
	}
}
```
- PUT: http://localhost:5000/api/users/:id
```
{ 
	"user":{
		"mail": "lala@lala.cl" , 
		"status": "6"
	}
}
```

- DELETE: http://localhost:5000/api/users/:id


### create a new repository on the command line
echo "# frenon-api-mysql" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M master
git remote add origin https://github.com/mortegac/frenon-api-mysql.git
git push -u origin master
                
### push an existing repository from the command line
git remote add origin https://github.com/mortegac/frenon-api-mysql.git
git branch -M master
git push -u origin master
