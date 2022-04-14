import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TransactionCreateStepTwo from './TransactionCreateStepTwo'


test('on initial render, the pay button is disabled', async () => {
  var sender = {id: 5}
  var receiver = {id: '5'}
  
  render(<TransactionCreateStepTwo sender={sender} receiver={receiver} />);

  expect(await screen.findByRole('button', {name: /pay/i})).toBeDisabled();
})

test('if an amount and note is entered, the pay button becomes enabled', async () => {
  var sender = {id: 5}
  var receiver = {id: '5'}
  
  render(<TransactionCreateStepTwo sender={sender} receiver={receiver} />);

  userEvent.type(screen.getByPlaceholderText(/amount/i), '50')
  userEvent.type(screen.getByPlaceholderText(/add a note/i), 'dinner')

  expect(await screen.findByRole('button', {name: /pay/i})).toBeEnabled();
})