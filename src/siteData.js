const siteData = {
  title: 'Stylist forms!',
  questions: [
    {
      name: 'name',
      text: 'What is your name?',
      type: 'text',
      customValidationMessage: 'Name field must be 2-26 characters',
      customValidation: input => input.length > 2 && input.length <= 26
    },
    {
      name: 'email',
      text: 'What is your email?',
      type: 'email'
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

export default siteData
