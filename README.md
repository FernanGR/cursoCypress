# cursoCypress
Curso Udemy Cypress

Bienvenidos al curso de Cypress.

1.- npm init

2.- npm install cypress --save-dev  //instalación

3.- Npx instalacion  https://ww.npmjs.com/package/npx
3.1---> npm install -g npx  // problemas version 
3.2---> npx cypress install --force  // por si da problemas version en el apartado 3. fuerza su instalación


4.- node_modules\.bin\cypress open
 
--- /// <reference types="cypress" />  añadir esto arriba de la prueba para comprobar

5.- npx cypress open 	//abrir cypress

6.- plugin tab
    6.1 npm install -D cypress-plugin-tab
    6.2 require('cypress-plugin-tab')  // añadir esto la parte superior para usarlonpm install -D cypress-xpath



7.- instalacion xpath
    7.1 npm install -D cypress-xpath
    7.2 require('cypress-xpath')  // añadir esto en la parte superior para usarlo    

8.- comandos consola: 

    //desde consola- pasar todos los test (cmd)
    node_modules\.bin\cypress run    //desde cmd
    npx cypress run   // desde gbash
    npx cypress run --headed  // desde navegador
    npx cypress run --borwser chrome  // navegador crhome
    npx cypress run --spec "cypress\integration\seccion_2\Asserts.js"  // especifico
    npx cypress run --spec "cypress\integration\seccion_1\*"  // especifico todos 


9.- pluggin subir archivos
https://github.com/abramenal/cypress-file-upload

npm install --save-dev cypress-file-upload

import 'cypress-file-upload';   //añadir en codigo

10- drag and drop mouse
https://github.com/4teamwork/cypress-drag-drop

npm install --save-dev @4tw/cypress-drag-drop

require('@4tw/cypress-drag-drop') // añadir al codigo


11.- plantillas snippets
ctrl+P
escribir  >snippets y buscar: 
javascript.json 

//template con snippet

	"Plantilla_cypress": {
		"prefix": "c_plantilla_cypress",
		"body": [
			"/// <reference types='cypress' />",
			"require('cypress-plugin-tab')",
			"require('cypress-xpath')",
			"import { filter } from 'bluebird';",
			"import 'cypress-file-upload';",
			"import { find, first, last } from 'lodash';",
			"require('@4tw/cypress-drag-drop')",
			"",
			"",
			"describe('${1:descripcion}', ()=>{",
			"",
				"\tit('${2:descripcion}', ()=>{",
					"\t\tlet tiempo = 800;",
					"\t\tcy.visit('${3:url web}');",
					"\t\tcy.title().should('eq','${4:title}')",
					"\t\tcy.wait(tiempo)",
				"",
				"\t})",
			"",

			"})",
            
		],
		"description": "Plantilla cypress"
	}


//comandos personalizados
ruta:
	D:\cursos\Cypress_curso_2021\cypress\support\commands.js

// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })


//errores
 
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})


//configuracion de tiempos

en cypress.json
"pageLoadTime": xxxx,   // tiempo carga web
"defaultCommandTimeout" : xxxxx,  // tiempo fallo


//crear video de prueba  ( con el run ) 
	$ npx cypress run --spec "cypress\integration\seccion_6\pageObject_1.js"


// fixture para guardar datos.json y luego importarlos


// cucumber
	https://github.com/TheBrainFamily/cypress-cucumber-preprocessor
		npm install --save-dev cypress-cucumber-preprocessor

	cypress/plugins/index.js	// aqui añadir :
		const cucumber = require('cypress-cucumber-preprocessor').default
			module.exports = (on, config) => {
			on('file:preprocessor', cucumber())
		}

	D:\cursos\Cypress_curso_2021\cypress.json  //
		   "testFiles": "**/*.feature" // añadiendo esto saldran solo cocumbers
    
	package.json:	//aqui añadir:
		"cypress-cucumber-preprocessor": {
		"nonGlobalStepDefinitions": true
		}


//jenkins
