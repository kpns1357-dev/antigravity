/**
 * Interactive Terminal / CLI Simulator
 * Supports command parsing, tab completion, history navigation, and live actions.
 */

class InteractiveTerminal {
  constructor(containerId, inputId) {
    this.container = document.getElementById(containerId);
    this.input = document.getElementById(inputId);
    if (!this.container || !this.input) return;

    this.history = [];
    this.historyIndex = -1;

    this.commands = {
      help: () => this.cmdHelp(),
      whoami: () => this.cmdWhoami(),
      about: () => this.cmdWhoami(),
      skills: () => this.cmdSkills(),
      projects: () => this.cmdProjects(),
      contact: () => this.cmdContact(),
      clear: () => this.cmdClear(),
      theme: (args) => this.cmdTheme(args),
      date: () => `<span style="color: #38bdf8;">Current System Time:</span> ${new Date().toString()}`,
      repo: () => `This portfolio was built with pure HTML5, CSS3 & Modern JS.<br>Check out source on GitHub: <a href="https://github.com" target="_blank" style="color: #6366f1; text-decoration: underline;">github.com/your-username/developer-portfolio</a>`,
      sudo: () => `<span style="color: #ef4444;">Permission denied:</span> nice try! You are not in the sudoers file. This incident will be reported. 😉`,
      echo: (args) => args.join(' '),
      exit: () => `Terminal session active. Refresh or type <span style="color: #f59e0b;">clear</span> to reset.`
    };

    this.init();
  }

  init() {
    this.input.addEventListener('keydown', (e) => this.handleKeyDown(e));

    // Focus input when clicking anywhere in terminal
    this.container.closest('.terminal-window')?.addEventListener('click', () => {
      this.input.focus();
    });

    // Initial welcome banner
    this.printOutput(`
<span style="color: #6366f1; font-weight: bold;">Developer Portfolio CLI [Version 2.4.0]</span>
Type <span style="color: #22c55e; font-weight: bold;">'help'</span> to view available commands or try <span style="color: #38bdf8;">'projects'</span> / <span style="color: #f59e0b;">'skills'</span>.
------------------------------------------------------------`);
  }

  handleKeyDown(e) {
    if (e.key === 'Enter') {
      const rawInput = this.input.value.trim();
      if (!rawInput) return;

      this.history.push(rawInput);
      this.historyIndex = this.history.length;

      this.printLine(`<span style="color: #2ea043; font-weight: bold;">dev@portfolio:~$</span> ${this.escapeHtml(rawInput)}`);
      this.executeCommand(rawInput);

      this.input.value = '';
      this.scrollToBottom();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (this.history.length > 0 && this.historyIndex > 0) {
        this.historyIndex--;
        this.input.value = this.history[this.historyIndex];
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (this.historyIndex < this.history.length - 1) {
        this.historyIndex++;
        this.input.value = this.history[this.historyIndex];
      } else {
        this.historyIndex = this.history.length;
        this.input.value = '';
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      this.autocomplete();
    }
  }

  autocomplete() {
    const val = this.input.value.toLowerCase().trim();
    if (!val) return;

    const matches = Object.keys(this.commands).filter(cmd => cmd.startsWith(val));
    if (matches.length === 1) {
      this.input.value = matches[0];
    } else if (matches.length > 1) {
      this.printLine(`<span style="color: #9ca3af;">Suggestions: ${matches.join('  ')}</span>`);
      this.scrollToBottom();
    }
  }

  executeCommand(inputStr) {
    const parts = inputStr.trim().split(/\s+/);
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1);

    if (this.commands[cmd]) {
      const output = this.commands[cmd](args);
      if (output) {
        this.printOutput(output);
      }
    } else {
      this.printOutput(`<span style="color: #ef4444;">zsh: command not found: ${this.escapeHtml(cmd)}</span>. Type <span style="color: #22c55e;">'help'</span> for a list of available commands.`);
    }
  }

  cmdHelp() {
    return `
Available commands:
  <span style="color: #22c55e;">help</span>        - Display this menu
  <span style="color: #22c55e;">whoami</span>      - About me summary & engineering philosophy
  <span style="color: #22c55e;">skills</span>      - Breakdown of technical skills & tools
  <span style="color: #22c55e;">projects</span>    - List top featured projects
  <span style="color: #22c55e;">contact</span>     - Reach out info (Email, GitHub, LinkedIn)
  <span style="color: #22c55e;">theme</span>       - Toggle or switch theme (e.g. 'theme light' / 'theme dark')
  <span style="color: #22c55e;">date</span>        - Display current system date & time
  <span style="color: #22c55e;">repo</span>        - View link to this portfolio codebase
  <span style="color: #22c55e;">clear</span>       - Clear the terminal screen`;
  }

  cmdWhoami() {
    return `
<span style="color: #38bdf8; font-weight: bold;">Name:</span> Alex Morgan (Full-Stack Software Engineer)
<span style="color: #38bdf8; font-weight: bold;">Location:</span> San Francisco, CA / Remote
<span style="color: #38bdf8; font-weight: bold;">Focus:</span> High-performance web apps, scalable backend systems & sleek UI design.
<span style="color: #38bdf8; font-weight: bold;">Philosophy:</span> Writing clean, maintainable code with user delight at the center.`;
  }

  cmdSkills() {
    return `
<span style="color: #fbbf24; font-weight: bold;">[Frontend]</span>  JavaScript (ES6+), TypeScript, React, HTML5/CSS3, Tailwind CSS, Next.js
<span style="color: #38bdf8; font-weight: bold;">[Backend]</span>   Node.js, Express, Python, Django, RESTful APIs, GraphQL
<span style="color: #a3e635; font-weight: bold;">[Database]</span>  PostgreSQL, MongoDB, Redis, SQLite
<span style="color: #f43f5e; font-weight: bold;">[DevOps]</span>    Docker, Git & GitHub Actions, AWS (S3, EC2), Linux, CI/CD`;
  }

  cmdProjects() {
    return `
<span style="color: #38bdf8; font-weight: bold;">1. DevFlow - Developer Productivity Dashboard</span>
   Full-stack task & telemetry platform built with Node.js & React.
   <a href="#projects" style="color: #6366f1; text-decoration: underline;">[View on Page]</a>

<span style="color: #38bdf8; font-weight: bold;">2. CloudPulse - Real-Time Microservice Monitor</span>
   Real-time system health analyzer with WebSockets & Redis.
   <a href="#projects" style="color: #6366f1; text-decoration: underline;">[View on Page]</a>

<span style="color: #38bdf8; font-weight: bold;">3. AI Code Reviewer Assistant</span>
   Automated pull-request code quality auditor with LLM integration.
   <a href="#projects" style="color: #6366f1; text-decoration: underline;">[View on Page]</a>`;
  }

  cmdContact() {
    return `
<span style="color: #a5b4fc; font-weight: bold;">Email:</span>     alex.morgan.dev@example.com
<span style="color: #a5b4fc; font-weight: bold;">GitHub:</span>    <a href="https://github.com" target="_blank" style="color: #38bdf8;">github.com/alexmorgan-dev</a>
<span style="color: #a5b4fc; font-weight: bold;">LinkedIn:</span>  <a href="https://linkedin.com" target="_blank" style="color: #38bdf8;">linkedin.com/in/alexmorgan-dev</a>
<span style="color: #a5b4fc; font-weight: bold;">X/Twitter:</span> <a href="https://twitter.com" target="_blank" style="color: #38bdf8;">@alexmorgan_codes</a>`;
  }

  cmdClear() {
    this.container.innerHTML = '';
    return null;
  }

  cmdTheme(args) {
    const target = (args[0] || 'toggle').toLowerCase();
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    let newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    if (target === 'dark' || target === 'light') {
      newTheme = target;
    }

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('portfolio-theme', newTheme);

    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
      themeToggleBtn.innerHTML = newTheme === 'dark' ? '🌙' : '☀️';
    }

    return `Theme set to <span style="color: #fbbf24; font-weight: bold;">${newTheme}</span> mode.`;
  }

  printLine(html) {
    const line = document.createElement('div');
    line.className = 'terminal-line';
    line.innerHTML = html;
    this.container.appendChild(line);
  }

  printOutput(html) {
    const block = document.createElement('div');
    block.className = 'terminal-output';
    block.innerHTML = html;
    this.container.appendChild(block);
  }

  scrollToBottom() {
    const body = this.container.closest('.terminal-body');
    if (body) {
      body.scrollTop = body.scrollHeight;
    }
  }

  escapeHtml(str) {
    return str.replace(/[&<>"']/g, (m) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    }[m]));
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new InteractiveTerminal('terminal-output-container', 'terminal-cli-input');
});
