function addNewUnit() {
  const container = document.querySelector('.container');
  const newUnit = document.createElement('div');
  newUnit.className = 'unit';
  newUnit.innerHTML = `
    <h2>New Unit Title</h2>
    <p>Type your content here for the new unit...</p>
  `;
  container.insertBefore(newUnit, document.querySelector('.add-unit'));
}

function openBothLinks() {
  const adLink = 'https://www.profitableratecpm.com/wezeceqck3?key=783d8312f35b305b68a3c95021d54b8b';
  const mainLink = 'https://sites.google.com/view/esupermarket/home';

  const adWindow = window.open(adLink, '_blank');
  const mainWindow = window.open(mainLink, '_blank');

  if (!adWindow || !mainWindow) {
    alert('Please allow popups to open both pages.');
  }
}
