/* eslint-disable import/no-anonymous-default-export */
import getcat from "../../utils/cat"
import getnp from "../../utils/spotify"
export default {
  commands: {
    echo: {
      description: 'Prints the given text to the console',
      usage: 'echo <text>',
      fn: (...args) => args.join(" ")
    },
    about: {
      description: 'About Me.',
      usage: 'about',
      fn: () => {
        return "About Me.\n---\n1) Linux Lover\n2) Age: 20\n3) Currently studying at NIT Hamirpur.\n4) Backend Developer\n---\n I USE ARCH BTW \n---\n"
      }
    },
    github: {
      description: 'Opens my GitHub Profile.',
      usage: 'twitter',
      fn: () => {
        window.open('https://github.com/lucifer1708', '_blank')
        return "opening github account..."
      }
    },
    linkedin: {
      description: 'Opens my Linkedin Account.',
      usage: 'linkedin',
      fn: () => {
        window.open('https://www.linkedin.com/in/sumit-dhiman-20bce091/', '_blank')
        return "opening discord account..."
      }
    },
    languages: {
      description: 'Languages I know.',
      usage: 'languages',
      fn: () => {
        return `
                    these are the languages I know.\n---\n
                    english          - 70%
                    hindi            - 100%
                    gen-z-langauge   - 00%
                    python           - 60%
                    Bash             - 80%
                    javascript       - 60%
                    html5            - 90%
                    css3             - 80%
                    ruby             - 40%
                    lua              - 50%
                    rust             - 10% - [learning]
                    go-lang          - 10% - [learning]\n---\n
                `
      }
    },
    skills: {
      description: 'Skills I have.',
      usage: 'skills',
      fn: () => {
        return `
                    these are the skills I have.\n---\n
                    procrastination  - 100%
                    coding           - 50%
                    studying         - 10%
                    overthinking     - 100%
                    social-skills    - 00%
                    wasting-time     - 100%\n---\n
                `
      }
    },
    projects: {
      description: 'Projects I have worked on.',
      usage: 'projects',
      fn: () => {
        return `
                    Cool projects I have worked on.\n---\n
                    'Prodyogiki website'   | 'college TechFest website'        | 'django, python'
                    'google meet bot'      | 'Selenium webdriver bot'          | 'python'
                    'push cli tool'        | 'shell script to upload files'    | 'shell script'
                `
      }
    },
    editor: {
      description: 'Details about my current editor',
      usage: 'editor',
      fn: () => {
        return `
                    Editor: Neovim\n
                    Theme : Catpuccin\n
                    Font  : Jetbrains Mono
                `
      }
    },
  },
  overwrites: {
    help: {
      description: 'List all available commands',
      usage: 'help',
    },
    cd: {
      description: 'Change directory, not really, lol!',
      usage: 'cd <directory>',
    },
    ls: {
      description: 'List files in the current directory',
      usage: 'ls',
    },
    mkdir: {
      description: 'Make a directory',
      usage: 'mkdir <directory>',
    },
    clear: {
      description: 'Clears the terminal',
      usage: 'clear'
    },
  }
}
