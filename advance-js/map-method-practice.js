var scores = [
    { subject: 'Math', score: 89 },
    { subject: 'Programming', score: 100 },
    { subject: 'Physics', score: 95 },
    { subject: 'Chemistry', score: 75 },
    { subject: 'History', score: 59 },
];

var gradedScores = scores.map( function( item ) {
    var grade;
    if (item.score >= 91) {
        grade = 'A';
    }
    else if (item.score >= 81) {
        grade = 'B';
    }
    else if (item.score >= 71) {
        grade = 'C';
    }
    else {
        grade = 'D';
    }
    return { 
        subject: item.subject, 
        score: item.score, 
        grade: grade 
    };
});

console.log(gradedScores);