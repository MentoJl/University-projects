class Tab {
    constructor(selector) {
        this.tabsContainer = document.querySelector(selector);
        this.tabs = [];
        this.contents = [];
    }

    addTab(tabName, content) {
        const tab = document.createElement('div');
        tab.classList.add('tab');
        tab.textContent = tabName;
        tab.addEventListener('click', () => this.switchTab(tab));

        this.tabs.push(tab);
        this.tabsContainer.appendChild(tab);

        const contentContainer = document.createElement('div');
        contentContainer.classList.add('tab-content', 'hidden');
        contentContainer.innerHTML = content;

        this.contents.push(contentContainer);
        this.tabsContainer.appendChild(contentContainer);

        if (this.tabs.length === 1) {
            this.switchTab(tab);
        }
    }

    switchTab(selectedTab) {
        this.tabs.forEach((tab, index) => {
            const content = this.contents[index];

            if (tab === selectedTab) {
                tab.classList.add('active');
                content.classList.remove('hidden');
            } else {
                tab.classList.remove('active');
                content.classList.add('hidden');
            }
        });
    }
}

const myTabs = new Tab('#myTabs');
myTabs.addTab('Tab 1', '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, numquam! Delectus consequuntur repellat eos rerum ut fugit architecto asperiores commodi iste natus aliquam alias, itaque ratione accusantium quod eum at.</p>');
myTabs.addTab('Tab 2', '<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde repudiandae libero repellat provident ex facilis ab expedita aut beatae, est itaque modi labore, totam porro! Quidem ab sequi amet commodi.</p>');
myTabs.addTab('Tab 3', '<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae voluptatibus ex nam impedit repellendus labore, molestiae quidem fuga esse minima, asperiores possimus eum nisi ipsam voluptas similique tempora culpa repellat?</p>');