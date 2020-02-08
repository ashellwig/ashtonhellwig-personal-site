const ExperienceTemplate = {
  company: String,
  companyLogo: String,
  location: String,
  jobTitle: String,
  dateStart: [Date, String],
  dateEnd: [Date, String],
  summary: String,
  longDescription: String
}

const ExperienceExample = {
  company: 'Apollo Digitial Asset Exchange',
  companyLogo: '',
  location: 'Remote',
  jobTitle: 'Backend Engineer Intern',
  dateStart: 'August 2018',
  dateEnd: 'December 2018',
  summary: 'Intern with a focus on server-sided web application administration',
  longDescription: `
    Software development engineering intern for Node.js backend. Use
      of modules and ES6 async functions to create a centralized digital
      asset exchange. Modules used include Chart.js, CCXT, ta-lib.
  `
}

export default {
  ExperienceTemplate,
  ExperienceExample
}
