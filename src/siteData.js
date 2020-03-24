const siteData = {
  title: 'Stylist forms!',
  questions: [
    {
      name: 'name',
      text: 'What is your name?',
      type: 'text',
      validationMessage: 'Name field should be 2-26 characters',
      validate: nameInput => nameRegex.test(nameInput)
    },
    {
      name: 'email',
      text: 'What is your email?',
      type: 'email',
      validationMessage: 'Enter a valid email address',
      validate: emailInput => emailRegex.test(emailInput)
    },
    {
      name: 'genre',
      text: 'What is your favourite movie genre?',
      type: 'select',
      options: [
        'spaghetti western',
        '40s noir',
        'slasher horror',
        'wes anderson'
      ]
    }
  ],
  defaultValidationMessage: 'Bad format, review input'
}

const nameRegex = /^[A-Za-z]{2,26}$/
//eslint-disable-next-line
const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/

export default siteData
