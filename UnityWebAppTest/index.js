var express = require('express');
var app = express();

app.set('view engine', 'ejs');


var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

//import the necessary classes
var User = require('./User.js');



app.use('/submitResult', (req, res) => {
	//get the username and result from the body of the HTML
	var username = req.body.username;
	var result = req.body.speedInput;
	console.log(username);
	//if the user exists then add the result to the Person object found
	//If they don't exist then add a new user with the result
	User.findOne( { name: username }, (err, user) => {
		if(err) {
			console.log("ERROR");
			res.type('html').status(500);
			res.send('Error: ' + err);
		}
		else if(!user) {
			console.log("new person should have been created");
			//add new User to the database
			var newUser = new User({name: username, result: [result]});

				newUser.save( (err) => {
					if (err) {
					    res.type('html').status(500);
					    res.send('Error: ' + err);
					}

    } );
		//show submission complete page
		//res.render('submissionComplete', {user: user});
		}
		else {
			//add this new result to the User found
			var newResult = user.result.concat(result);
			user.result = newResult;
			//and update the user on the database
			user.save((err) => {
				if (err) {
						res.type('html').status(500);
						res.send('Error: ' + err);
				}
	});
	//show submission complete page
	res.render('submissionComplete', {user: user});
}
});
});

// //clear all people from the database
// app.use('/clear', (req, res) => {
// 	Person.find((err, allPeople) => {
// 		allPeople.forEach((person) => {
// 			person.remove();
// 		});
//
// 		if(err) {
// 			res.type('html').status(500);
// 			res.send('Error: ' + err);
// 		} else if(allPeople.length == 0) {
// 			res.type('html').status(500);
// 			res.send('No people in database');
// 		} else {
// 			res.render('clearAll');
// 		}
// 	});
// });
//
//
//
//
// app.use('/update', (req, res) => {
// 	var updateName = req.body.username;
// 	Person.findOne({name: updateName}, (err, person) => {
// 		if(err) {
// 			res.type('html').status(500);
// 			res.send('Error: ' + err);
// 		} else if(!person) {
// 			res.type('html').status(500);
// 			res.send("No person named " + updateName);
// 		}
// 		else {
// 			person.age = req.body.age;
// 			person.save( (err) => {
// 				if(err) {
// 					res.type('html').status(500);
// 					res.send('Error: ' + err);
// 				}
// 				else {
// 					res.render('updated', {person: person});
// 				}
// 			});
// 		}
// 	});
// });
//
// //show the information for a single person
// app.use('/person', (req, res) => {
// 	var searchName = req.query.name;
// 	Person.findOne( { name: searchName }, (err, person) => {
// 		if(err) {
// 			res.type('html').status(500);
// 			res.send('Error: ' + err);
// 		}
// 		else if(!person) {
// 			res.type('html').status(200);
// 			res.send('No person named ' + searchName);
// 		}
// 		else {
// 			res.render('personInfo', { person : person});
// 		}
// 	});
// });
//
//
// //to show once a new person is created
// app.use('/create', (req, res) => {
// 	var newPerson = new Person ({
// 		name: req.body.name,
// 		age: req.body.age,
// 	    });
//
// 	newPerson.save( (err) => {
// 		if (err) {
// 		    res.type('html').status(500);
// 		    res.send('Error: ' + err);
// 		}
// 		else {
// 		    res.render('created', {person : newPerson});
// 		}
// 	    } );
//
//     });





app.use('/public', express.static('public'));

app.use('/', (req, res) => { res.redirect('/public/unity_embed_test.html'); } );



app.listen(3000,  () => {
	console.log('Listening on port 3000');
    });
