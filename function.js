function vowel_amount(strng)
{
	var vowels = "aeiou";
	var count = 0;
	for(var p = 0; p < strng.length; p++)
	{
		if (vowels.indexOf(strng[p])!== -1)
		{
			count += 1;
		}
	}
	return count;
}
alert(vowel_amount("having fun with javascript"));


function date_check(str)
{

	// split the value sam using '/' save it to var parts
	
	var parts = str.split("/")
	var month = parts[0]
	var day = parts[1]
	var year = parts[2]

	// if parts length is more than three it's invalid
		if (parts.length != 3) {
			console.log("invalid!")
			return
		}

	// if parts[0] is longer than two it's invalid
		if (month.length != 2) {
			console.log("invalid!")
			return
		}

	// if parts[1] is longer than two it's invalid
		if (day.length != 2) {
			console.log("invalid!")
			return
		}

	// if parts[2] is longer than four it's invalid
		if (year.length != 4) {
			console.log("invalid!")
			return
		}

	// if all of those things are ok, then the date is valid
	console.log('VALID@@@!!');
	return
}
date_check("06/15/1990");