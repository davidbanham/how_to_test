# Run Sheet

This course is designed to be broken up across two days, separated by a couple of weeks.

The first day is to lay the basic foundation for why and how to test.

The second day is to add some extra wisdom once the participants have had a chance to find some of the sharp edges themselves.

### Housekeeping
Laptops closed outside of hands-on instruction.

Phones away.

### First section
Discuss objectives of training as prepared

Discuss desires of the group as to what they want to learn

Run through step one slides

### Second section
Practical & hands-on.

Live code the NIH example, test first.

Ask the group to implement another feature. Brainstorm what it should be. Backup idea: timeToExplosion. TTE is -(number of enemy spacecraft * 10) + (number of missiles * 5) + shield strength

Open up the mocha example. Observe the nice console output. Check out the setup and teardown functions and discuss what they're useful for. Mention async support and different output types.

Open up the coverage example.

Run `npm coverage` to see the results.

Run `npm coverage:report` and check out the html report.

Add some error handling to the function and see how the coverage report identifies it.

Add a test to get the coverage back to 100%.

Open up zen and take a look through the architecture.

Depending on time, add a new resource in a TDD style.

### Third section
Run through step two slides

### Fourth section
Workshop to go through some of the tests that the group has written independently on their own code.
