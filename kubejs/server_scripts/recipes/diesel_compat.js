ServerEvents.recipes(event => {
	event.custom(
	{
		"type": "createaddition:liquid_burning",
		"input": {
			"fluid": "createdieselgenerators:diesel",
			"amount": 100
		},
		"burnTime": 15,
		"superheated": true
	});
        event.custom(
        {
                "type": "tconstruct:melting_fuel",
                "duration": 200,
                "fluid": {
                        "amount": 10,
                        "fluid": "createdieselgenerators:diesel"
                },
                "temperature": 1500
        });

	event.custom(
	{
		"type": "createaddition:liquid_burning",
		"input": {
			"fluid": "createdieselgenerators:biodiesel",
			"amount": 100
		},
		"burnTime": 15,
		"superheated": true
	});
        event.custom(
        {
                "type": "tconstruct:melting_fuel",
                "duration": 200,
                "fluid": {
                        "amount": 10,
                        "fluid": "createdieselgenerators:biodiesel"
                },
                "temperature": 1500
        });

	event.custom(
	{
		"type": "createaddition:liquid_burning",
		"input": {
			"fluid": "createdieselgenerators:gasoline",
			"amount": 100
		},
		"burnTime": 8,
		"superheated": true
	});
        event.custom(
        {
                "type": "tconstruct:melting_fuel",
                "duration": 150,
                "fluid": {
                        "amount": 10,
                        "fluid": "createdieselgenerators:gasoline"
                },
                "temperature": 1500
        });

	event.custom(
	{
		"type": "createaddition:liquid_burning",
		"input": {
			"fluid": "createdieselgenerators:plant_oil",
			"amount": 100
		},
		"burnTime": 960,
		"superheated": false
	});
        event.custom(
        {
		"type": "tconstruct:melting_fuel",
		"duration": 96,
		"fluid": {
			"amount": 10,
			"fluid": "createdieselgenerators:plant_oil"
		},
		"temperature": 1000
        });

	event.custom(
	{
		"type": "createaddition:liquid_burning",
		"input": {
			"fluid": "createdieselgenerators:crude_oil",
			"amount": 100
		},
		"burnTime": 960,
		"superheated": false
	});
        event.custom(
        {
		"type": "tconstruct:melting_fuel",
		"duration": 96,
		"fluid": {
			"amount": 10,
			"fluid": "createdieselgenerators:crude_oil"
		},
		"temperature": 1000
        });

	event.custom(
	{
		"type": "createaddition:liquid_burning",
		"input": {
			"fluid": "createdieselgenerators:ethanol",
			"amount": 100
		},
		"burnTime": 480,
		"superheated": false
	});
        event.custom(
        {
		"type": "tconstruct:melting_fuel",
		"duration": 480,
		"fluid": {
			"amount": 100,
			"fluid": "createdieselgenerators:ethanol"
		},
		"temperature": 600
        });

})
