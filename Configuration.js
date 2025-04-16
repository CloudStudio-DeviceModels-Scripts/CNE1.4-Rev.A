function getConfiguration(config) {
    // Esta función permite indicar valores de configuración generales para 
    // todos los dispositivos de este modelo.

    // Dependiendo del significado de la "dirección del dispositivo" en este 
    // dispositivo, es posible que desee cambiar la etiqueta que se utiliza 
    // para hacer referencia a la dirección en la interfaz de usuario.
    // Por ejemplo, si la dirección del dispositivo es en realidad una dirección 
    // MAC, es posible que desee utilizar el código siguiente.

    config.addressLabel = {en: "Serial Number", es: "Número de Serie"};
}

function getEndpoints(deviceAddress, endpoints) {
    // Esta función le permite indicar la configuración inicial de los endpoints
    // cuando se crea un dispositivo de este modelo. Esto mejora significativamente 
    // la experiencia del usuario final, ya que permite a la plataforma crear 
    // todos los endpoints incluidos en el dispositivo automáticamente cuando se 
    // crea el dispositivo.

    // En el código siguiente, se crean dos endpoints. El primero es un sensor de 
    // temperatura, mientras que el segundo es un sensor de dióxido de carbono.


    endpoints.addEndpoint("1", "WHP 1.4", endpointType.pressureSensor);
    endpoints.addEndpoint("2", "LP 1.4", endpointType.pressureSensor);
    endpoints.addEndpoint("3", "VALVE_STATUS 1.4", endpointType.appliance, applianceEndpointSubType.valve); 
    endpoints.addEndpoint("4", "LAST_SHUT_IN_HOUR 1.4", endpointType.runTimeMeter);
    endpoints.addEndpoint("5", "SHUT_IN_OPENING_PRE 1.4", endpointType.pressureSensor);
    endpoints.addEndpoint("6", "MAINT_CYCLES_OPENING_PRE 1.4", endpointType.pressureSensor);
    endpoints.addEndpoint("7", "MAX_PRE_TO_OPEN 1.3", endpointType.pressureSensor);
    // endpoints.addEndpoint("8", "LATITUDE", endpointType.locationTracker);
    // endpoints.addEndpoint("-", "LONGITUDE", endpointType.locationTracker);
    var openValveTimeEndpoint = endpoints.addEndpoint("9", "OPEN_VALVE_TIME_COUNTER 1.4", endpointType.genericSensor);
    openValveTimeEndpoint.variableTypeId = 1061;
    endpoints.addEndpoint("10", "WHT  1.4", endpointType.temperatureSensor);
    endpoints.addEndpoint("11", "UPSTREAM_PRE  1.4", endpointType.pressureSensor);
    endpoints.addEndpoint("12", "FLOW_REGIME  1.4", endpointType.flowSensor);
    var shutInMinTurnerEndpoint = endpoints.addEndpoint("13", "SHUT_IN_MIN_TURNER 1.4", endpointType.genericSensor);
    shutInMinTurnerEndpoint.variableTypeId = 1061;
    var maintCyclesMinTurnerEndpoint = endpoints.addEndpoint("14", "MAINT_CYCLES_MIN_TURNER 1.4", endpointType.genericSensor);
    maintCyclesMinTurnerEndpoint.variableTypeId = 1061;
    endpoints.addEndpoint("15", "GAS_FLOW_RATE 1.4", endpointType.flowSensor);
    endpoints.addEndpoint("16", "LIQUID_FLOW_RATE 1.4", endpointType.flowSensor);
    var ai1ConnectedEndpoint = endpoints.addEndpoint("17", "AI1_CONNECTED 1.4", endpointType.genericSensor);
    ai1ConnectedEndpoint.variableTypeId = 1062;
    var ai2ConnectedEndpoint = endpoints.addEndpoint("18", "AI2_CONNECTED 1.4", endpointType.genericSensor);
    ai2ConnectedEndpoint.variableTypeId = 1062;
    endpoints.addEndpoint("19", "AI3_CONNECTED 1.4", endpointType.iasSensor);
    var ai4ConnectedEndpoint = endpoints.addEndpoint("20", "AI4_CONNECTED 1.4", endpointType.genericSensor);
    ai4ConnectedEndpoint.variableTypeId = 1062;
    var shutInOpeningTimeEndpoint = endpoints.addEndpoint("21", "SHUT_IN_OPENING_TIME 1.4", endpointType.genericSensor);
    shutInOpeningTimeEndpoint.variableTypeId = 1061;
    var shutInClosingTimeEndpoint = endpoints.addEndpoint("22", "SHUT_IN_CLOSING_TIME 1.4", endpointType.genericSensor);
    shutInClosingTimeEndpoint.variableTypeId = 1061;
    var shutInMinClosedValveTimeEndpoint = endpoints.addEndpoint("23", "SHUT_IN_MIN_CLOSED_VALVE_TIME 1.4", endpointType.genericSensor);
    shutInMinClosedValveTimeEndpoint.variableTypeId = 1061;
    var shutInMaxClosedValveTimeEndpoint = endpoints.addEndpoint("24", "SHUT_IN_MAX_CLOSED_VALVE_TIME 1.4", endpointType.genericSensor);
    shutInMaxClosedValveTimeEndpoint.variableTypeId = 1061;
    var closedValveTimeCounterEndpoint = endpoints.addEndpoint("25", "CLOSED_VALVE_TIME_COUNTER 1.4", endpointType.genericSensor);
    closedValveTimeCounterEndpoint.variableTypeId = 1061;
    var maintCyclesClosingEndpoint = endpoints.addEndpoint("26", "MAINT_CYCLES_CLOSING_TIME 1.4", endpointType.genericSensor);
    maintCyclesClosingEndpoint.variableTypeId = 1061;
    var maintCyclesOpeningTimeEndpoint = endpoints.addEndpoint("27", "MAINT_CYCLES_OPENING_TIME 1.4", endpointType.genericSensor);
    maintCyclesOpeningTimeEndpoint.variableTypeId = 1061;
    var maintCyclesMinClosedValveEndpoint = endpoints.addEndpoint("28", "MAINT_CYCLES_MIN_CLOSED_VALVE_TIME 1.4", endpointType.genericSensor);
    maintCyclesMinClosedValveEndpoint.variableTypeId = 1061;
    var maintCyclesMaxClosedValveEndpoint = endpoints.addEndpoint("29", "MAINT_CYCLES_MAX_CLOSED_VALVE_TIME 1.4", endpointType.genericSensor);
    maintCyclesMaxClosedValveEndpoint.variableTypeId = 1061;
    var maintCyclesMinOpenValveEndpoint = endpoints.addEndpoint("30", "MAINT_CYCLES_MIN_OPEN_VALVE_TIME 1.4", endpointType.genericSensor);
    maintCyclesMinOpenValveEndpoint.variableTypeId = 1061;
    var maintCyclesMaxOpenValveEndpoint = endpoints.addEndpoint("31", "MAINT_CYCLES_MAX_OPEN_VALVE_TIME 1.4", endpointType.genericSensor);
    maintCyclesMaxOpenValveEndpoint.variableTypeId = 1061;

    
}

function validateDeviceAddress(address, result) {
    // Esta función permite validar la dirección de un dispositivo, cuando el usuario 
    // lo está creando. Si el dispositivo tiene reglas de validación especiales para 
    // la dirección, pueden verificarse aquí y devolver un mensaje de error en 
    // caso de que el formato de la dirección sea incorrecto.

    // En el código siguiente, se realiza una validación para asegurarse de que la 
    // dirección tiene exactamente 10 caracteres.

    // if (address.length != 10) {
    //   result.ok = false;
    //   result.errorMessage = {
    //     en: "The address must be 10 characters long", 
    //     es: "La dirección debe tener exactamente 10 caracteres"
    //   };
    // }
}

function updateDeviceUIRules(device, rules) {
    // Esta función permite especificar reglas de interfaz de usuario en el nivel de 
    // dispositivo. Por ejemplo, es posible habilitar o deshabilitar la creación 
    // de endpoints manualmente al dispositivo después de que se creó.

    // En el código siguiente, el agregado manual de endpoints está deshabilitada 
    // en la interfaz de usuario. Esto significa que el dispositivo se limitará a los 
    // endpoints definidos por la función getEndpoints() anterior.

    // rules.canCreateEndpoints = false;
}

function updateEndpointUIRules(endpoint, rules) {
    // Esta función permite especificar reglas de interfaz de usuario para cada
    // endpoint del dispositivo. Por ejemplo, es posible habilitar o inhabilitar la
    // eliminación de endpoints, o la edición de subtipo de endpoint.

    // En el código siguiente, se definen las siguientes reglas:
    // - Los endpoints no se pueden eliminar.
    // - El subtipo de endpoint se puede cambiar, pero solo para el segundo endpoint.

    // rules.canDelete = false;
    // rules.canEditSubType = (endpoint.address == "2");
}
