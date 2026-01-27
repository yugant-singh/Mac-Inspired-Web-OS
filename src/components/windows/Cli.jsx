import React from 'react'
import MacWindows from './MacWindows'
import Terminal from 'react-console-emulator'
import './cli.scss'
import projects from '../../assets/Detail.json'

let waitingForPassword = false;
let history = []
const commands = {
 
 sudo: {
    description: 'Run command as root',
    usage: 'sudo <command>',
    fn: () => {
      waitingForPassword = true
      return '[sudo] password for yugant:'
    }
  },
  theme: {
  fn: (...args) => {
    const themes = {
      green: '#00ff00',
      red: '#ff3333',
      blue: '#00bfff',
      cyan: '#00ffff',
      purple: '#b266ff',
      white: '#ffffff'
    }

    const selected = args[0]

    if (!themes[selected]) {
      return 'Use: theme green | red | blue | cyan | purple'
    }

    document.documentElement.style.setProperty(
      '--terminal-color',
      themes[selected]
    )

    return `Theme changed to ${selected}`
  }
}

,

banner: {
  fn: () => `
██╗   ██╗██╗   ██╗ ██████╗  █████╗ ███╗   ██╗████████╗
╚██╗ ██╔╝██║   ██║██╔════╝ ██╔══██╗████╗  ██║╚══██╔══╝
 ╚████╔╝ ██║   ██║██║  ███╗███████║██╔██╗ ██║   ██║   
  ╚██╔╝  ██║   ██║██║   ██║██╔══██║██║╚██╗██║   ██║   
   ██║   ╚██████╔╝╚██████╔╝██║  ██║██║ ╚████║   ██║   
   ╚═╝    ╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝   ╚═╝   
`
}
,
  password: {
    fn: () => {
      if (!waitingForPassword) return ''
      waitingForPassword = false
      return 'Access granted.'
    }
  },
    
  date: {
  fn: () => new Date().toString()
}
,

  about: {
    description: 'About me and my skills',
    usage: 'about',
    fn: () => {
      return `Hi! I'm Yugant Singh, a full-stack developer passionate about building modern web applications. 
I specialize in React, Node.js, and creating scalable backend solutions.`
    }
  },

  ls: {
  description: 'List files',
  usage: 'ls',
  fn: () => `
projects/
skills.txt
about.txt
contact.txt`
}
,
whoami: {
  description: 'Show current user',
  usage: 'whoami',
  fn: () => 'yugant'
}
,
cat: {
  description: 'Read a file',
  usage: 'cat <filename>',
  fn: (...args) => {
    const file = args[0]

    if (!file) return 'Usage: cat <filename>'

    const files = {
      'about.txt': 'Full Stack Developer | React | Node.js',
      'skills.txt': 'React, Node, MongoDB, Docker',
      'contact.txt': 'Email: yugant@example.com, GitHub: github.com/yugantsingh, LinkedIn: linkedin.com/in/yugantsingh'
    }

    return files[file] || 'File not found'
  }
}
,
neofetch: {
  description: 'System info',
  usage: 'neofetch',
  fn: () => `
      OS: YugantOS
      Host: Portfolio Terminal
      Kernel: React 18
      Shell: react-console-emulator
      Uptime: ∞
      Packages: Full Stack
      Theme: Hacker Green`
}
,
  projects: {
    description: 'List all my projects',
    usage: 'projects',
    fn: () => {
      return projects.map((p, i) => `${i + 1}. ${p.title} - ${p.description.substring(0, 50)}...`).join('\n')
    }
  },
  project: {
    description: 'View details of a specific project',
    usage: 'project <id>',
    fn: (id) => {
      const projectId = parseInt(id) - 1
      if (projectId < 0 || projectId >= projects.length) {
        return `Project not found. Use 'projects' to see available projects.`
      }
      const p = projects[projectId]
      return `
Title: ${p.title}
Description: ${p.description}
Tags: ${p.tags.join(', ')}
Repository: ${p.repoLink}
Demo: ${p.demoLink || 'Not available'}`
    }
  },
  skills: {
    description: 'Display my technical skills',
    usage: 'skills',
    fn: () => {
      return `Frontend: React, JavaScript, SCSS, CSS, HTML
Backend: Node.js, Express, Python, Django
Database: MongoDB, PostgreSQL
Tools: Docker, Git, GitHub Actions, Webpack, Vite
Other: WebSockets, JWT, OAuth2, REST APIs`
    }
  },
  contact: {
    description: 'Get contact information',
    usage: 'contact',
    fn: () => {
      return `Email: yugant@example.com
GitHub: https://github.com/yugantsingh
LinkedIn: https://linkedin.com/in/yugantsingh
Portfolio: https://yugantsingh.dev`
    }
  },
  github: {
    description: 'Open GitHub profile',
    usage: 'github',
    fn: () => {
      window.open('https://github.com/yugant-singh', '_blank')
      return 'Opening GitHub profile...'
    }
  },
  echo: {
    description: 'Echo a passed string.',
    usage: 'echo <string>',
    fn: (...args) => args.join(' ')
  }
}

const Cli = ({windowName,setOpenWindows}) => {
  return (
 <MacWindows windowName={windowName} setOpenWindows={setOpenWindows}>
   <div className="cli-window">
<Terminal
  commands={commands}
  welcomeMessage={`Initializing YugantOS...
Access granted.

Type "help" to begin.`}
  promptLabel={'root@yugant:~$'}
  promptLabelStyle={{ color: '#00ff00' }}
/>


   </div>
 </MacWindows>
  )
}

export default Cli