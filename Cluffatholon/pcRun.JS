const logRun = () => {
  const difficulty = document.getElementById('difficulty').value;
  const lowDifficulty = difficulty.toLowerCase();
  const distance = document.getElementById('distance').value;
  const points = document.getElementById('points');

  if (lowDifficulty === 'long' && distance > 0 && distance <= 2) {
    let totalPoints = distance * 3;
    let totalPoints2 = totalPoints.toFixed(2);
    points.innerHTML = `You gained ${totalPoints2} points!`;
  } else if (lowDifficulty === 'long' && distance > 2 && distance <= 4) {
    let totalPoints = distance * 4;
    let totalPoints2 = totalPoints.toFixed(2);
    points.innerHTML = `You gained ${totalPoints2} points!`;
  } else if (lowDifficulty === 'long' && distance > 4 && distance <= 6) {
    let totalPoints = distance * 5;
    let totalPoints2 = totalPoints.toFixed(2);
    points.innerHTML = `You gained ${totalPoints2} points!`;
  } else if (lowDifficulty === 'long' && distance > 6 && distance <= 8) {
    let totalPoints = distance * 6;
    let totalPoints2 = totalPoints.toFixed(2);
    points.innerHTML = `You gained ${totalPoints2} points!`;
  } else if (lowDifficulty === 'long' && distance > 8 && distance <= 10) {
    let totalPoints = distance * 7;
    let totalPoints2 = totalPoints.toFixed(2);
    points.innerHTML = `You gained ${totalPoints2} points!`;
  } else if (lowDifficulty === 'long' && distance > 10 && distance <= 12) {
    let totalPoints = distance * 8;
    let totalPoints2 = totalPoints.toFixed(2);
    points.innerHTML = `You gained ${totalPoints2} points!`;
  } else if (lowDifficulty === 'long' && distance > 12 && distance <= 14) {
    let totalPoints = distance * 9;
    let totalPoints2 = totalPoints.toFixed(2);
    points.innerHTML = `You gained ${totalPoints2} points!`;
  } else if (lowDifficulty === 'long' && distance > 14 && distance <= 16) {
    let totalPoints = distance * 10;
    let totalPoints2 = totalPoints.toFixed(2);
    points.innerHTML = `You gained ${totalPoints2} points!`;
  } else if (lowDifficulty === 'long' && distance > 16 && distance <= 18) {
    let totalPoints = distance * 11;
    let totalPoints2 = totalPoints.toFixed(2);
    points.innerHTML = `You gained ${totalPoints2} points!`;
  } else if (lowDifficulty === 'long' && distance > 18 && distance <= 20) {
    let totalPoints = distance * 12;
    let totalPoints2 = totalPoints.toFixed(2);
    points.innerHTML = `You gained ${totalPoints2} points!`;
  } else if (lowDifficulty === 'long' && distance > 20) {
    let totalPoints = distance * 13;
    let totalPoints2 = totalPoints.toFixed(2);
    points.innerHTML = `You gained ${totalPoints2} points!`;
  }

    else if (lowDifficulty === 'tempo' && distance > 0 && distance <= 2) {
    let totalPoints = distance * 3.6;
    let totalPoints2 = totalPoints.toFixed(2);
    points.innerHTML = `You gained ${totalPoints2} points!`;
  } else if (lowDifficulty === 'tempo' && distance > 2 && distance <= 4) {
    let totalPoints = distance * 4.8;
    let totalPoints2 = totalPoints.toFixed(2);
    points.innerHTML = `You gained ${totalPoints2} points!`;
  } else if (lowDifficulty === 'tempo' && distance > 4 && distance <= 6) {
    let totalPoints = distance * 6;
    let totalPoints2 = totalPoints.toFixed(2);
    points.innerHTML = `You gained ${totalPoints2} points!`;
  } else if (lowDifficulty === 'tempo' && distance > 6 && distance <= 8) {
    let totalPoints = distance * 7.2;
    let totalPoints2 = totalPoints.toFixed(2);
    points.innerHTML = `You gained ${totalPoints2} points!`;
  } else if (lowDifficulty === 'tempo' && distance > 8 && distance <= 10) {
    let totalPoints = distance * 8.4;
    let totalPoints2 = totalPoints.toFixed(2);
    points.innerHTML = `You gained ${totalPoints2} points!`;
  } else if (lowDifficulty === 'tempo' && distance > 10 && distance <= 12) {
    let totalPoints = distance * 9.6;
    let totalPoints2 = totalPoints.toFixed(2);
    points.innerHTML = `You gained ${totalPoints2} points!`;
  } else if (lowDifficulty === 'tempo' && distance > 12 && distance <= 14) {
    let totalPoints = distance * 10.8;
    let totalPoints2 = totalPoints.toFixed(2);
    points.innerHTML = `You gained ${totalPoints2} points!`;
  } else if (lowDifficulty === 'tempo' && distance > 14 && distance <= 16) {
    let totalPoints = distance * 12;
    let totalPoints2 = totalPoints.toFixed(2);
    points.innerHTML = `You gained ${totalPoints2} points!`;
  } else if (lowDifficulty === 'tempo' && distance > 16 && distance <= 18) {
    let totalPoints = distance * 13.2;
    let totalPoints2 = totalPoints.toFixed(2);
    points.innerHTML = `You gained ${totalPoints2} points!`;
  } else if (lowDifficulty === 'tempo' && distance > 18 && distance <= 20) {
    let totalPoints = distance * 14.4;
    let totalPoints2 = totalPoints.toFixed(2);
    points.innerHTML = `You gained ${totalPoints2} points!`;
  } else if (lowDifficulty === 'tempo' && distance > 20) {
    let totalPoints = distance * 15.6;
    let totalPoints2 = totalPoints.toFixed(2);
    points.innerHTML = `You gained ${totalPoints2} points!`;
  }

    else if (lowDifficulty === 'speed' && distance > 0 && distance <= 2) {
    let totalPoints = distance * 4.5;
    let totalPoints2 = totalPoints.toFixed(2);
    points.innerHTML = `You gained ${totalPoints2} points!`;
  } else if (lowDifficulty === 'speed' && distance > 2 && distance <= 4) {
    let totalPoints = distance * 6;
    let totalPoints2 = totalPoints.toFixed(2);
    points.innerHTML = `You gained ${totalPoints2} points!`;
  } else if (lowDifficulty === 'speed' && distance > 4 && distance <= 6) {
    let totalPoints = distance * 7.5;
    let totalPoints2 = totalPoints.toFixed(2);
    points.innerHTML = `You gained ${totalPoints2} points!`;
  } else if (lowDifficulty === 'speed' && distance > 6 && distance <= 8) {
    let totalPoints = distance * 9;
    let totalPoints2 = totalPoints.toFixed(2);
    points.innerHTML = `You gained ${totalPoints2} points!`;
  } else if (lowDifficulty === 'speed' && distance > 8 && distance <= 10) {
    let totalPoints = distance * 10.5;
    let totalPoints2 = totalPoints.toFixed(2);
    points.innerHTML = `You gained ${totalPoints2} points!`;
  } else if (lowDifficulty === 'speed' && distance > 10 && distance <= 12) {
    let totalPoints = distance * 12;
    let totalPoints2 = totalPoints.toFixed(2);
    points.innerHTML = `You gained ${totalPoints2} points!`;
  } else if (lowDifficulty === 'speed' && distance > 12 && distance <= 14) {
    let totalPoints = distance * 13.5;
    let totalPoints2 = totalPoints.toFixed(2);
    points.innerHTML = `You gained ${totalPoints2} points!`;
  } else if (lowDifficulty === 'speed' && distance > 14 && distance <= 16) {
    let totalPoints = distance * 15;
    let totalPoints2 = totalPoints.toFixed(2);
    points.innerHTML = `You gained ${totalPoints2} points!`;
  } else if (lowDifficulty === 'speed' && distance > 16 && distance <= 18) {
    let totalPoints = distance * 16.5;
    let totalPoints2 = totalPoints.toFixed(2);
    points.innerHTML = `You gained ${totalPoints2} points!`;
  } else if (lowDifficulty === 'speed' && distance > 18 && distance <= 20) {
    let totalPoints = distance * 18;
    let totalPoints2 = totalPoints.toFixed(2);
    points.innerHTML = `You gained ${totalPoints2} points!`;
  } else if (lowDifficulty === 'speed' && distance > 20) {
    let totalPoints = distance * 19.5;
    let totalPoints2 = totalPoints.toFixed(2);
    points.innerHTML = `You gained ${totalPoints2} points!`;
  }

    else {
    alert('please enter valid info');
  }




}


let log = document.getElementById('log');
log.addEventListener('click', logRun);
