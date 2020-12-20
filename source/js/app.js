'use strict';
(() => {
  const ACTIVE_TAB_CLASS = 'tabs__nav-link--active';
  const ACTIVE_TAB_CONTENT_CLASS = 'tabs__wrapper--active';
  const navList = document.querySelector('.tabs__nav-list');
  const countriesList = document.querySelector('.countries__list');
  const navLinks = document.querySelectorAll('.tabs__nav-link');

  const removeClass = () => {
    const currentTab = document.querySelector(`.${ACTIVE_TAB_CLASS}`);
    if (currentTab) {
      currentTab.classList.remove(ACTIVE_TAB_CLASS);
    }
    const currentTabContent = document.querySelector(`.${ACTIVE_TAB_CONTENT_CLASS}`);
    if (currentTabContent) {
      currentTabContent.classList.remove(ACTIVE_TAB_CONTENT_CLASS);
    }
  };

  const openPanelHandler = (e) => {
    const tabId = e.target.dataset.tabId;

    if (tabId) {
      removeClass();
      e.target.classList.add(ACTIVE_TAB_CLASS);
      const tabContent = document.getElementById(tabId);
      if (tabContent) {
        tabContent.classList.add(ACTIVE_TAB_CONTENT_CLASS);
      }
    }
  };

  const openTab = (e) => {
    const country = e.target.hash.replace('#', '');
    const activeLink = Array.from(navLinks).filter((link) => link.dataset.tabId === country);

    if (country) {
      removeClass();
      activeLink[0].classList.add(ACTIVE_TAB_CLASS);

      // e.target.classList.add(ACTIVE_TAB_CLASS);
      const tabContent = document.getElementById(country);
      if (tabContent) {
        tabContent.classList.add(ACTIVE_TAB_CONTENT_CLASS);
      }
    }
  };

  if (navList) {
    navList.addEventListener('click', (e) => {
      if (e.target.matches('.tabs__nav-link')) {
        openPanelHandler(e);
      }
    });
  }

  if (countriesList) {
    countriesList.addEventListener('click', (e) => {
      if (e.target.matches('.countries__link')) {
        openTab(e);
      }
    });
  }
})();


