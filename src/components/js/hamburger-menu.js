const buttonHamburgerMenu=$("button#hamburger-menu");const headerMenu=$("nav#menu");let headerMenuIsActive=false;buttonHamburgerMenu.click((event)=>{headerMenu.toggleClass('active');headerMenuIsActive=true;})
$('body').click((event)=>{const elementClicked=event.target;if(headerMenuIsActive&&elementClicked.parentElement.id!='hamburger-menu'&&elementClicked.id!='menu'){headerMenu.toggleClass('active');headerMenuIsActive=false;}})