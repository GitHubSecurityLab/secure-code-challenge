# Code Security Challenge by the GitHub Security Lab

## 👋 Welcome

The mission of the GitHub Security Lab is to inspire and enable the community to secure the open source software we all depend on. Today, we are excited to present you a code security challenge inspired from real-world code, with which you can feel part of us through the thrill of finding and fixing a security issue to win [GitHub Shop](https://www.thegithubshop.com/) vouchers!

## 🎮 Time to PLAY!

#### 🛠️ Clone the repository

1. Click **Use this template** followed by **Create a new repository**.
2. In the new tab, most of the prompts will automatically fill in for you. For the rest:
- For owner, choose your personal account.
- For repository name, choose a name of your preference.
- For description, you can leave it blank.
- For visibility, choose **Public** if you wish to use code scanning for free, with the downside of others being able to see your code. Choose **Private** if you wish to keep your code private, with the downside of not being able to use code scanning as you will need a paid plan.
1. Click the **Create repository** button at the bottom of the form.
1. You can now proceed to the following section.

#### 💻 Run it in seconds via Codespaces (Recommended)

The challenge is configured to run instantly with Codespaces, a fully configured dev environment in the cloud with up to 60 hours a month free. For more information, checkout [Codespaces](https://docs.github.com/en/codespaces/overview). If you prefer to work locally, please follow the local installation guide in the next section.

To create a codespace: 
1. Click the **Code** drop down button in the upper-right of your repository navigation bar.
1. Click **Create codespace on main**.
1. After creating a codespace, wait for around a minute for the background installations to complete.
1. Upon completion, ignore any files that may have changed such as `node_modules` and `package-lock.json`. There's no need to commit these changes.
1. You can now scroll to the 🚀 PLAY section!

#### 💻️ OR Run it locally

Please note: You don't need this step if you are using Codespaces, skip to the next section!

1. Install [Nodejs](https://nodejs.org/en/download). 
1. Install express, body-parser and express-rate-limit using npm by running the following command in your terminal:

```bash
npm install express body-parser express-rate-limit
```

Once installation has completed, clone your repository to your local machine and install required dependencies.

1. From your repository, click the **Code** drop down button in the upper-right of your repository navigation bar.
1. Select the `Local` tab from the menu.
1. Copy the repository's URL.
1. In your terminal, change the working directory to the location where you want the cloned directory.
1. Type `git clone` and paste the copied URL.
1. Press **Enter** to create your local clone.
1. Change the working directory to the cloned directory.

#### 🚀 PLAY!

1. Open a terminal and run:
`node server.js`. To open a terminal in Codespaces, click **Terminal** in the top left menu and then **New Terminal**.
1. If you're inside a Codespace, you will notice a prompt appearing on the bottom right corner. Click **Open in browser**. If you're running the challenge locally, open a web browser and navigate to `http://localhost:3000/`.
1. Spot the security issue by reviewing the code in `script.js`, `server.js`, `index.html` and `styles.css`.
1. If you enjoy this challenge, we have 10 more challenges for you in the [Secure Code Game](https://gh.io/securecodegame)!

#### 🔐 Submit your solution!

1. Answer [3 simple questions](https://forms.gle/EdGsWrqMcQZQ8myN6) about this challenge and win [GitHub Shop](https://www.thegithubshop.com/) vouchers!
1. The competition will run in a first-come, first-served basis where winners will be the first to submit the correct answers.
1. We will inform the winners via email and we will publish our model solutions as a **GitHub Discussion** in this repository after the challenge ends.
1. Enjoying this callenge? We have 10 more for you in the [Secure Code Game](https://gh.io/securecodegame)!

#### ❓ Help & Support

Ask in the Discussions tab of this repository or email us at securitylab-social@github.com
