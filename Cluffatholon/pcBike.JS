const logRide = () => {
let place = document.getElementById('place').value;
let lowPlace = place.toLowerCase();
let difficulty = document.getElementById('difficulty').value;
let lowDifficulty = difficulty.toLowerCase();
let distance = document.getElementById('distance').value;
let points = document.getElementById('points');

if (lowPlace === 'outdoor' && lowDifficulty === 'easy' && distance > 0 && distance <= 10) {
  totalPoints = distance * 1;
  points.innerHTML = `You gained ${totalPoints} points!`;
} else if (lowPlace === 'outdoor' && lowDifficulty === 'easy' && distance > 10 && distance <= 20) {
  totalPoints = distance * 1.1;
  totalPoints2 = totalPoints.toFixed(2);
  points.innerHTML = `You gained ${totalPoints2} points!`;
} else if (lowPlace === 'outdoor' && lowDifficulty === 'easy' && distance > 20 && distance <= 30) {
  totalPoints = distance * 1.2;
  totalPoints2 = totalPoints.toFixed(2);
  points.innerHTML = `You gained ${totalPoints2} points!`;
} else if (lowPlace === 'outdoor' && lowDifficulty === 'easy' && distance > 30 && distance <= 40) {
  totalPoints = distance * 1.3;
  totalPoints2 = totalPoints.toFixed(2);
  points.innerHTML = `You gained ${totalPoints2} points!`;
} else if (lowPlace === 'outdoor' && lowDifficulty === 'easy' && distance > 40 && distance <= 50) {
  totalPoints = distance * 1.5;
  totalPoints2 = totalPoints.toFixed(2);
  points.innerHTML = `You gained ${totalPoints2} points!`;
} else if (lowPlace === 'outdoor' && lowDifficulty === 'easy' && distance > 50 && distance <= 60) {
  totalPoints = distance * 1.7;
  totalPoints2 = totalPoints.toFixed(2);
  points.innerHTML = `You gained ${totalPoints2} points!`;
} else if (lowPlace === 'outdoor' && lowDifficulty === 'easy' && distance > 60 && distance <= 70) {
  totalPoints = distance * 1.9;
  totalPoints2 = totalPoints.toFixed(2);
  points.innerHTML = `You gained ${totalPoints2} points!`;
} else if (lowPlace === 'outdoor' && lowDifficulty === 'easy' && distance > 70 && distance <= 80) {
  totalPoints = distance * 2.2;
  totalPoints2 = totalPoints.toFixed(2);
  points.innerHTML = `You gained ${totalPoints2} points!`;
} else if (lowPlace === 'outdoor' && lowDifficulty === 'easy' && distance > 80 && distance <= 90) {
  totalPoints = distance * 2.5;
  totalPoints2 = totalPoints.toFixed(2);
  points.innerHTML = `You gained ${totalPoints2} points!`;
} else if (lowPlace === 'outdoor' && lowDifficulty === 'easy' && distance > 90 && distance <= 100) {
  totalPoints = distance * 3.9;
  totalPoints2 = totalPoints.toFixed(2);
  points.innerHTML = `You gained ${totalPoints2} points!`;
} else if (lowPlace === 'outdoor' && lowDifficulty === 'easy' && distance > 100) {
  totalPoints = distance * 4;
  totalPoints2 = totalPoints.toFixed(2);
  points.innerHTML = `You gained ${totalPoints2} points!`;
} else if (lowPlace === 'outdoor' && lowDifficulty === 'hard' && distance > 0 && distance <= 10) {
  totalPoints = distance * 1.4;
  totalPoints2 = totalPoints.toFixed(2);
  points.innerHTML = `You gained ${totalPoints2} points!`;
} else if (lowPlace === 'outdoor' && lowDifficulty === 'hard' && distance > 10 && distance <= 20) {
  totalPoints = distance * 1.54;
  totalPoints2 = totalPoints.toFixed(2);
  points.innerHTML = `You gained ${totalPoints2} points!`;
} else if (lowPlace === 'outdoor' && lowDifficulty === 'hard' && distance > 20 && distance <= 30) {
  totalPoints = distance * 1.68;
  totalPoints2 = totalPoints.toFixed(2);
  points.innerHTML = `You gained ${totalPoints2} points!`;
} else if (lowPlace === 'outdoor' && lowDifficulty === 'hard' && distance > 30 && distance <= 40) {
  totalPoints = distance * 1.82;
  totalPoints2 = totalPoints.toFixed(2);
  points.innerHTML = `You gained ${totalPoints2} points!`;
} else if (lowPlace === 'outdoor' && lowDifficulty === 'hard' && distance > 40 && distance <= 50) {
  totalPoints = distance * 2.1;
  totalPoints2 = totalPoints.toFixed(2);
  points.innerHTML = `You gained ${totalPoints2} points!`;
} else if (lowPlace === 'outdoor' && lowDifficulty === 'hard' && distance > 50 && distance <= 60) {
  totalPoints = distance * 2.38;
  totalPoints2 = totalPoints.toFixed(2);
  points.innerHTML = `You gained ${totalPoints2} points!`;
} else if (lowPlace === 'outdoor' && lowDifficulty === 'hard' && distance > 60 && distance <= 70) {
  totalPoints = distance * 2.66;
  totalPoints2 = totalPoints.toFixed(2);
  points.innerHTML = `You gained ${totalPoints2} points!`;
} else if (lowPlace === 'outdoor' && lowDifficulty === 'hard' && distance > 70 && distance <= 80) {
  totalPoints = distance * 3.1;
  totalPoints2 = totalPoints.toFixed(2);
  points.innerHTML = `You gained ${totalPoints2} points!`;
} else if (lowPlace === 'outdoor' && lowDifficulty === 'hard' && distance > 80 && distance <= 90) {
  totalPoints = distance * 3.5;
  totalPoints2 = totalPoints.toFixed(2);
  points.innerHTML = `You gained ${totalPoints2} points!`;
} else if (lowPlace === 'outdoor' && lowDifficulty === 'hard' && distance > 90 && distance <= 100) {
  totalPoints = distance * 5.46;
  totalPoints2 = totalPoints.toFixed(2);
  points.innerHTML = `You gained ${totalPoints2} points!`;
} else if (lowPlace === 'outdoor' && lowDifficulty === 'hard' && distance > 100) {
  totalPoints = distance * 5.6;
  totalPoints2 = totalPoints.toFixed(2);
  points.innerHTML = `You gained ${totalPoints2} points!`;
}

  else if (lowPlace === 'indoor' && lowDifficulty === 'easy' && distance > 0 && distance <= 10) {
  totalPoints = distance * 1;
  points.innerHTML = `You gained ${totalPoints} points!`;
} else if (lowPlace === 'indoor' && lowDifficulty === 'easy' && distance > 10 && distance <= 20) {
  totalPoints = distance * 1.1;
  totalPoints2 = totalPoints.toFixed(2);
  points.innerHTML = `You gained ${totalPoints2} points!`;
} else if (lowPlace === 'indoor' && lowDifficulty === 'easy' && distance > 20 && distance <= 30) {
  totalPoints = distance * 1.2;
  totalPoints2 = totalPoints.toFixed(2);
  points.innerHTML = `You gained ${totalPoints2} points!`;
} else if (lowPlace === 'indoor' && lowDifficulty === 'easy' && distance > 30 && distance <= 40) {
  totalPoints = distance * 1.3;
  totalPoints2 = totalPoints.toFixed(2);
  points.innerHTML = `You gained ${totalPoints2} points!`;
} else if (lowPlace === 'indoor' && lowDifficulty === 'easy' && distance > 40 && distance <= 50) {
  totalPoints = distance * 1.5;
  totalPoints2 = totalPoints.toFixed(2);
  points.innerHTML = `You gained ${totalPoints2} points!`;
} else if (lowPlace === 'indoor' && lowDifficulty === 'easy' && distance > 50 && distance <= 60) {
  totalPoints = distance * 1.7;
  totalPoints2 = totalPoints.toFixed(2);
  points.innerHTML = `You gained ${totalPoints2} points!`;
} else if (lowPlace === 'indoor' && lowDifficulty === 'easy' && distance > 60 && distance <= 70) {
  totalPoints = distance * 1.9;
  totalPoints2 = totalPoints.toFixed(2);
  points.innerHTML = `You gained ${totalPoints2} points!`;
} else if (lowPlace === 'indoor' && lowDifficulty === 'easy' && distance > 70 && distance <= 80) {
  totalPoints = distance * 2.2;
  totalPoints2 = totalPoints.toFixed(2);
  points.innerHTML = `You gained ${totalPoints2} points!`;
} else if (lowPlace === 'indoor' && lowDifficulty === 'easy' && distance > 80 && distance <= 90) {
  totalPoints = distance * 2.5;
  totalPoints2 = totalPoints.toFixed(2);
  points.innerHTML = `You gained ${totalPoints2} points!`;
} else if (lowPlace === 'indoor' && lowDifficulty === 'easy' && distance > 90 && distance <= 100) {
  totalPoints = distance * 3.9;
  totalPoints2 = totalPoints.toFixed(2);
  points.innerHTML = `You gained ${totalPoints2} points!`;
} else if (lowPlace === 'indoor' && lowDifficulty === 'easy' && distance > 100) {
  totalPoints = distance * 4;
  totalPoints2 = totalPoints.toFixed(2);
  points.innerHTML = `You gained ${totalPoints2} points!`;
} else if (lowPlace === 'indoor' && lowDifficulty === 'hard' && distance > 0 && distance <= 10) {
  totalPoints = distance * 1.4;
  totalPoints2 = totalPoints.toFixed(2);
  points.innerHTML = `You gained ${totalPoints2} points!`;
} else if (lowPlace === 'indoor' && lowDifficulty === 'hard' && distance > 10 && distance <= 20) {
  totalPoints = distance * 1.54;
  totalPoints2 = totalPoints.toFixed(2);
  points.innerHTML = `You gained ${totalPoints2} points!`;
} else if (lowPlace === 'indoor' && lowDifficulty === 'hard' && distance > 20 && distance <= 30) {
  totalPoints = distance * 1.68;
  totalPoints2 = totalPoints.toFixed(2);
  points.innerHTML = `You gained ${totalPoints2} points!`;
} else if (lowPlace === 'indoor' && lowDifficulty === 'hard' && distance > 30 && distance <= 40) {
  totalPoints = distance * 1.82;
  totalPoints2 = totalPoints.toFixed(2);
  points.innerHTML = `You gained ${totalPoints2} points!`;
} else if (lowPlace === 'indoor' && lowDifficulty === 'hard' && distance > 40 && distance <= 50) {
  totalPoints = distance * 2.1;
  totalPoints2 = totalPoints.toFixed(2);
  points.innerHTML = `You gained ${totalPoints2} points!`;
} else if (lowPlace === 'indoor' && lowDifficulty === 'hard' && distance > 50 && distance <= 60) {
  totalPoints = distance * 2.38;
  totalPoints2 = totalPoints.toFixed(2);
  points.innerHTML = `You gained ${totalPoints2} points!`;
} else if (lowPlace === 'indoor' && lowDifficulty === 'hard' && distance > 60 && distance <= 70) {
  totalPoints = distance * 2.66;
  totalPoints2 = totalPoints.toFixed(2);
  points.innerHTML = `You gained ${totalPoints2} points!`;
} else if (lowPlace === 'indoor' && lowDifficulty === 'hard' && distance > 70 && distance <= 80) {
  totalPoints = distance * 3.1;
  totalPoints2 = totalPoints.toFixed(2);
  points.innerHTML = `You gained ${totalPoints2} points!`;
} else if (lowPlace === 'indoor' && lowDifficulty === 'hard' && distance > 80 && distance <= 90) {
  totalPoints = distance * 3.5;
  totalPoints2 = totalPoints.toFixed(2);
  points.innerHTML = `You gained ${totalPoints2} points!`;
} else if (lowPlace === 'indoor' && lowDifficulty === 'hard' && distance > 90 && distance <= 100) {
  totalPoints = distance * 5.46;
  totalPoints2 = totalPoints.toFixed(2);
  points.innerHTML = `You gained ${totalPoints2} points!`;
} else if (lowPlace === 'indoor' && lowDifficulty === 'hard' && distance > 100) {
  totalPoints = distance * 5.6;
  totalPoints2 = totalPoints.toFixed(2);
  points.innerHTML = `You gained ${totalPoints2} points!`;
}

else {
  alert('please enter valid info');
}
}

let log = document.getElementById('log');
log.addEventListener('click', logRide);
