Feature: Demo de cocumber DOS


    Esto es un demo de como utilizar cocumber

    Scenario: Demo de cocumber caso 1
    Given Abrir el navegador principal
    When Cargando el nombre rodrigo
    When Cargando el email rodr@gma.es
    And Cargando la Dirección direccion1
    Then Validar el nombre de la Página
   
    Scenario: Demo de cocumber caso 2
    Given Abrir el navegador principal
    When Cargando el nombre jose
    When Cargando el email joser@gma.es
    And Cargando la Dirección direccion jose
    Then Validar el nombre de la Página