const bergerHandle = () => {
  let isMenuVisible = true;

  menuButton.addEventListener('click', () => {
    isMenuVisible = !isMenuVisible;
    if (isMenuVisible) {
      bergerMenu.style.display = 'none';
    } else {
      bergerMenu.style.display = 'inline'; // 또는 'block'
    }
  });
}

export default bergerHandle;