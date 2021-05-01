const displayJeffName = () => {
  let jeffTitle = document.getElementById('jeff-title');
  jeffTitle.style.display = 'block';
  let jeffInfo = document.getElementById('jeff-info');
  jeffInfo.style.display = 'block';
}

const takeJeffName = () => {
  let jeffTitle = document.getElementById('jeff-title');
  jeffTitle.style.display = 'none';
  let jeffInfo = document.getElementById('jeff-info');
  jeffInfo.style.display = 'none';
}

const jeffPic = document.getElementById('dad-pic');
jeffPic.addEventListener('mouseover', displayJeffName);
jeffPic.addEventListener('mouseout', takeJeffName);

const displayNicoleName = () => {
  let nicoleTitle = document.getElementById('nicole-title');
  nicoleTitle.style.display = 'block';
  let nicoleInfo = document.getElementById('nicole-info');
  nicoleInfo.style.display = 'block';
}

const takeNicoleName = () => {
  let nicoleTitle = document.getElementById('nicole-title');
  nicoleTitle.style.display = 'none';
  let nicoleInfo = document.getElementById('nicole-info');
  nicoleInfo.style.display = 'none';
}

const nicolePic = document.getElementById('mom-pic');
nicolePic.addEventListener('mouseover', displayNicoleName);
nicolePic.addEventListener('mouseout', takeNicoleName);

const displayEmilyName = () => {
  let emilyTitle = document.getElementById('emily-title');
  emilyTitle.style.display = 'block';
  let emilyInfo = document.getElementById('emily-info');
  emilyInfo.style.display = 'block';
}

const takeEmilyName = () => {
  let emilyTitle = document.getElementById('emily-title');
  emilyTitle.style.display = 'none';
  let emilyInfo = document.getElementById('emily-info');
  emilyInfo.style.display = 'none';
}

const emilyPic = document.getElementById('emily-id-pic');
emilyPic.addEventListener('mouseover', displayEmilyName);
emilyPic.addEventListener('mouseout', takeEmilyName);

const displayTysonName = () => {
  let tysonTitle = document.getElementById('tyson-title');
  tysonTitle.style.display = 'block';
  let tysonInfo = document.getElementById('tyson-info');
  tysonInfo.style.display = 'block';
}

const takeTysonName = () => {
  let tysonTitle = document.getElementById('tyson-title');
  tysonTitle.style.display = 'none';
  let tysonInfo = document.getElementById('tyson-info');
  tysonInfo.style.display = 'none';
}

const tysonPic = document.getElementById('tyson-id-pic');
tysonPic.addEventListener('mouseover', displayTysonName);
tysonPic.addEventListener('mouseout', takeTysonName);

const displayJustinName = () => {
  let justinTitle = document.getElementById('justin-title');
  justinTitle.style.display = 'block';
  let justinInfo = document.getElementById('justin-info');
  justinInfo.style.display='block';
}

const takeJustinName = () => {
  let justinTitle = document.getElementById('justin-title');
  justinTitle.style.display = 'none';
  let justinInfo = document.getElementById('justin-info');
  justinInfo.style.display='none';
}

const justinPic = document.getElementById('justin-id-pic');
justinPic.addEventListener('mouseover', displayJustinName);
justinPic.addEventListener('mouseout', takeJustinName);

const displayRyanName = () => {
  let ryanTitle = document.getElementById('ryan-title');
  ryanTitle.style.display = 'block';
  let ryanInfo = document.getElementById('ryan-info');
  ryanInfo.style.display = 'block'
}

const takeRyanName = () => {
  let ryanTitle = document.getElementById('ryan-title');
  ryanTitle.style.display = 'none';
  let ryanInfo = document.getElementById('ryan-info');
  ryanInfo.style.display = 'none'
}

const ryanPic = document.getElementById('ryan-id-pic');
ryanPic.addEventListener('mouseover', displayRyanName);
ryanPic.addEventListener('mouseout', takeRyanName);

const displayAbbyName = () => {
  let abbyTitle = document.getElementById('abby-title');
  abbyTitle.style.display = 'block';
  let abbyInfo = document.getElementById('abby-info');
  abbyInfo.style.display = 'block'
}

const takeAbbyName = () => {
  let abbyTitle = document.getElementById('abby-title');
  abbyTitle.style.display = 'none';
  let abbyInfo = document.getElementById('abby-info');
  abbyInfo.style.display = 'none'
}

const abbyPic = document.getElementById('abby-id-pic');
abbyPic.addEventListener('mouseover', displayAbbyName);
abbyPic.addEventListener('mouseout', takeAbbyName);
